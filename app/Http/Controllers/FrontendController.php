<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use App\Models\Publication;
use App\Models\Service;
use App\Models\Subscriber;
use App\Models\TeamMember;
use App\Models\Testimony;
use App\Models\User;
use App\Notifications\ContactNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class FrontendController extends Controller
{
    public function home()
    {
        $testimonies = Testimony::orderBy('id', 'DESC')->whereIsActive(1)->take(5)->get();
        $publications = [];
        foreach (Publication::orderBy('id', 'DESC')->whereIsActive(1)->take(3)->get() as $publication) {
            $publications[] = array_merge($publication->toArray(), [
                'author' => $publication->author->name,
            ]);
        }
        $partners = Partner::orderBy('name', 'ASC')->whereIsActive(1)->get();
        $team = TeamMember::orderBy('id', 'DESC')->whereIsActive(1)->get();
        $all_services = Service::all();

        return response()->json([
            'testimonies' => $testimonies,
            'publications' => $publications,
            'partners' => $partners,
            'team' => $team,
            'all_services' => $all_services,
        ]);
    }

    public function about()
    {
        $team = [
            [
                'name' => 'Leo Alexander',
                'job' => ['fr' => 'Marketing Ex.'],
                'photo' => '/images/team_image2.jpg',
            ],
            [
                'name' => 'Levi Hudson',
                'job' => ['fr' => 'Marketing Ex.'],
                'photo' => '/images/team_image4.jpg',
            ],
            [
                'name' => 'Charlie Harrison',
                'job' => ['fr' => 'Marketing Ex.'],
                'photo' => '/images/team_image3.jpg',
            ],
            [
                'name' => 'Max Harvey',
                'job' => ['fr' => 'Marketing Ex.'],
                'photo' => '/images/team_image1.jpg',
            ],
        ];

        return response()->json([
            'team' => $team,
        ]);
    }

    public function newsletter(Request $request)
    {
        $input = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:subscribers'
        ]);

        Subscriber::create($input);

        return response()->json([
            'message' => UtilController::message('Souscription réussie.', 'success'),
        ]);
    }

    public function contact(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        Notification::send(User::all(), new ContactNotification($request->all()));

        return response()->json([
            'message' => UtilController::message('Formulaire soumis.', 'success'),
        ]);
    }

    public function publications()
    {
        $page = +request()->page ?? 1;
        $show = request()->show ?? 12;
        $search = request()->search ?? '';

        $publications = [];
        $filteredData = Publication::orderBy('id');

        $filteredData = $filteredData
            ->join('users', function ($join) {
                $join->on('users.id', 'publications.author_id');
                $join->where('publications.author_type', '=', User::class);
            })
            // ->join('admins', function ($join) {
            //     $join->on('admins.id', 'publications.author_id');
            //     $join->where('publications.author_type', '=', Admin::class);
            // })
            ->select('publications.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('publications.title', 'LIKE', "%$search%")
                        ->orWhere('publications.body', 'LIKE', "%$search%")
                        ->orWhere('email', 'LIKE', "%$search%")
                        ->orWhere('name', 'LIKE', "%$search%")
                        ->orWhere('publications.photo', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $publication) {
            $publications[] = array_merge($publication->toArray(), [
                'author' => $publication->author->name,
            ]);
        }

        return response()->json([
            'publications' => $publications,
        ]);
    }

    public function publication($slug)
    {
        $publication = Publication::whereSlug($slug)->first();

        if (!$publication) return response()->json([
            'message' => UtilController::message('Publication introuvable.', 'danger'),
        ]);

        return response()->json([
            'publication' => $publication,
        ]);
    }

    public function services()
    {
        $page = +request()->page ?? 1;
        $show = request()->show ?? 12;
        $search = request()->search ?? '';

        $services = [];
        $filteredData = Service::orderBy('id');

        $filteredData = $filteredData
            ->select('services.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('services.title', 'LIKE', "%$search%")
                        ->orWhere('services.body', 'LIKE', "%$search%")
                        ->orWhere('services.icon', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $service) {
            $services[] = array_merge($service->toArray(), []);
        }

        return response()->json([
            'services' => $services,
        ]);
    }

    public function service($slug)
    {
        $service = Service::whereSlug($slug)->first();

        if (!$service) return response()->json([
            'message' => UtilController::message('Service introuvable.', 'danger'),
        ]);

        return response()->json([
            'service' => $service,
        ]);
    }
}
