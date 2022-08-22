<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Service;
use App\Models\Publication;
use App\Models\Subscriber;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $services = Service::count();
        $publications = Publication::count();
        $subscribers = Subscriber::count();

        $generalReport = [
            'services' => Service::count(),
            'publications' => Publication::count(),
        ];

        $names = $cms['pages'][$user->language->abbr]['general']['months'];
        $totalServices = [];
        $totalPublications = [];
        for ($i=0; $i < 12; $i++) {
            $totalServices[] = Service::whereYear('created_at', now()->year)->whereMonth('created_at', $i + 1)->count(); 
            $totalPublications[] = Publication::whereYear('created_at', now()->year)->whereMonth('created_at', $i + 1)->count(); 
        }
        for ($i = 0; $i < count($names); $i++) {
            $generalReportTrackerData[] = [
                'name' => strtoupper($names[$i]),
                'Services' => $totalServices[$i],
                'Publications' => $totalPublications[$i],
            ];
        }

        return response()->json([
            'blocksData' => [
                'services' => $services,
                'publications' => $publications,
                'subscribers' => $subscribers,
            ],
            'generalReport' => $generalReport,
            'generalReportTrackerData' => $generalReportTrackerData,
        ]);
    }
}
