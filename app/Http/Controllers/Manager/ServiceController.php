<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Service;
use App\Models\Subscriber;
use App\Notifications\Newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class ServiceController extends Controller
{
    private $rules = [
        'title' => 'array|required',
        'body' => 'array|required',
        'icon' => 'required|string',
        'is_active' => 'required|integer',
    ];



    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

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

        return [
            'services' => $services,
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

        $services = $data['services'];
        $total = $data['total'];

        return response()->json([
            'services' => $services,
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

        $service = Service::find($id);
        if (!$service) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['services']['not_found'], 'danger'),
        ]);

        $information = $this->information();

        return response()->json([
            'service' => $service,
        ] + $information);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except(['title', 'body']);

        Service::create($input + [
            'title' => json_encode($request->title),
            'body' => json_encode($request->body),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['services']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $type, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $service = Service::find($id);
        if (!$service) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['services']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;
        $request->validate($rules);

        $input = $request->except(['title', 'body']);

        $service->update($input + [
            'title' => json_encode($request->title),
            'body' => json_encode($request->body),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['services']['updated'], 'success'),
            'service' => $service,
        ]);
    }

    public function destroy($type, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $service = Service::find($id);
        if (!$service) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['services']['not_found'], 'danger'),
        ]);

        $service->delete();

        $data = $this->data();

        $services = $data['services'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['services']['deleted'], 'success'),
            'services' => $services,
            'total' => $total,
        ]);
    }
}
