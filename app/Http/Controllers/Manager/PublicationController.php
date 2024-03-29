<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Publication;
use App\Models\Subscriber;
use App\Notifications\Newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class PublicationController extends Controller
{
    private $rules = [
        'title' => 'array|required',
        'body' => 'array|required',
        'photo' => 'nullable|image',
        'is_active' => 'required|integer',
    ];



    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $publications = [];
        $filteredData = Publication::orderBy('id');

        $filteredData = $filteredData
            // ->join('users', function ($join) {
            //     $join->on('users.id', 'publications.author_id');
            //     $join->where('publications.author_type', '=', User::class);
            // })
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
                        // ->orWhere('email', 'LIKE', "%$search%")
                        // ->orWhere('name', 'LIKE', "%$search%")
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

        return [
            'publications' => $publications,
            'total' => $total,
        ];
    }

    private function information()
    {
        return [];
    }



    public function index()
    {
        $data = $this->data();

        $publications = $data['publications'];
        $total = $data['total'];

        return response()->json([
            'publications' => $publications,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $information = $this->information();

        return response()->json($information);
    }

    public function show($type, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $publication = Publication::find($id);
        if (!$publication) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['publications']['not_found'], 'danger'),
        ]);

        $information = $this->information();

        return response()->json([
            'publication' => $publication,
        ] + $information);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except(['photo', 'title', 'body']);

        if ($file = $request->file('photo')) {
            $fileName = UtilController::resize($file, 'publications');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $user->publications()->create($input + [
            'title' => json_encode($request->title),
            'body' => json_encode($request->body),
        ]);

        Notification::send(Subscriber::all(), new Newsletter($input + [
            'title' => $request->title[env('MIX_DEFAULT_LANG', 'fr')],
            'body' => $request->body[env('MIX_DEFAULT_LANG', 'fr')],
        ]));

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['publications']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $type, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $publication = Publication::find($id);
        if (!$publication) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['publications']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;
        $request->validate($rules);

        $input = $request->except(['photo', 'title', 'body']);

        if ($file = $request->file('photo')) {
            if ($publication->photo && is_file(public_path($publication->photo))) unlink(public_path($publication->photo));
            $fileName = UtilController::resize($file, 'publications');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $publication->update($input + [
            'title' => json_encode($request->title),
            'body' => json_encode($request->body),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['publications']['updated'], 'success'),
            'publication' => $publication,
        ]);
    }

    public function destroy($type, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $publication = Publication::find($id);
        if (!$publication) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['publications']['not_found'], 'danger'),
        ]);

        if ($publication->photo && is_file(public_path($publication->photo))) unlink(public_path($publication->photo));
        $publication->delete();

        $data = $this->data();

        $publications = $data['publications'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['publications']['deleted'], 'success'),
            'publications' => $publications,
            'total' => $total,
        ]);
    }
}
