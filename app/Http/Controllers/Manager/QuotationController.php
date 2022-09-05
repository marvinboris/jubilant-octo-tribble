<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Quotation;
use App\Models\Subscriber;
use App\Notifications\Newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class QuotationController extends Controller
{
    private $rules = [
        'name' => 'array|required',
        'link' => 'required|string',
        'is_active' => 'required|integer',
    ];



    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $quotations = [];
        $filteredData = Quotation::orderBy('id');

        $filteredData = $filteredData
            ->select('quotations.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('quotations.name', 'LIKE', "%$search%")
                        ->orWhere('quotations.link', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $quotation) {
            $quotations[] = array_merge($quotation->toArray(), []);
        }

        return [
            'quotations' => $quotations,
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

        $quotations = $data['quotations'];
        $total = $data['total'];

        return response()->json([
            'quotations' => $quotations,
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

        $quotation = Quotation::find($id);
        if (!$quotation) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['quotations']['not_found'], 'danger'),
        ]);

        $information = $this->information();

        return response()->json([
            'quotation' => $quotation,
        ] + $information);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except(['name']);

        Quotation::create($input + [
            'name' => json_encode($request->name),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['quotations']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $type, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $quotation = Quotation::find($id);
        if (!$quotation) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['quotations']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;
        $request->validate($rules);

        $input = $request->except(['name']);

        $quotation->update($input + [
            'name' => json_encode($request->name),
            'body' => json_encode($request->body),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['quotations']['updated'], 'success'),
            'quotation' => $quotation,
        ]);
    }

    public function destroy($type, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $quotation = Quotation::find($id);
        if (!$quotation) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['quotations']['not_found'], 'danger'),
        ]);

        $quotation->delete();

        $data = $this->data();

        $quotations = $data['quotations'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['backend']['messages']['quotations']['deleted'], 'success'),
            'quotations' => $quotations,
            'total' => $total,
        ]);
    }
}
