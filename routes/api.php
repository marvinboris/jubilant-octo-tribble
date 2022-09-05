<?php

use App\Http\Controllers\UtilController;
use App\Models\Language;
use App\Models\Quotation;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('User')->prefix('user')->name('user.')->group(function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('forgot', 'AuthController@forgot')->name('forgot');
    Route::post('reset/{id}/{code}', 'AuthController@reset')->name('reset');
});

Route::middleware('auth:admin,api')->group(function () {
    Route::get('logout', 'UtilController@logout')->name('logout');
    Route::get('account', 'UtilController@account')->name('account');



    Route::prefix('content')->name('content.')->group(function () {
        Route::get('language/{language}', function ($id) {
            $manager = UtilController::get(request());
            $cmsFile = UtilController::cms();

            $language = Language::find($id);
            if (!$language) return response()->json([
                'message' => UtilController::message($cmsFile['pages'][$manager->language->abbr]['backend']['backend']['messages']['languages']['not_found'], 'danger')
            ]);

            $manager->update([
                'language_id' => $id
            ]);

            $cms = [
                'global' => $cmsFile['global'],
                'pages' => $cmsFile['pages'][$language->abbr],
            ];
            if (request()->has('frontend_lang')) $cms['pages']['frontend'] = $cmsFile['pages'][request()->frontend_lang]['frontend'];

            return response()->json([
                'language' => $language->toArray(),
                'cms' => $cms,
            ]);
        })->name('language');
    });


    
    Route::prefix('notifications')->name('notifications.')->group(function () {
        Route::get('{notification}', 'UtilController@notification')->name('show');
        Route::get('', 'UtilController@notifications')->name('index');
    });
    
    Route::name('export.')->prefix('export')->group(function () {
        Route::name('xlsx')->post('xlsx', 'ExportController@xlsx');
        Route::name('csv')->post('csv', 'ExportController@csv');
        Route::name('pdf')->post('pdf', 'ExportController@pdf');
    });
    
    Route::middleware('permission')->name('manager')->namespace('Manager')->prefix('{manager}')->group(function () {
        Route::get('dashboard', 'DashboardController@index')->name('dashboard');
        
        Route::name('cms.')->prefix('cms')->namespace('CMS')->group(function () {
            Route::patch('global', 'GlobalController@patch')->name('global');
            Route::patch('general', 'GeneralController@patch')->name('general');
            Route::patch('frontend', 'FrontendController@patch')->name('frontend');
            Route::patch('backend', 'BackendController@patch')->name('backend');
            Route::patch('auth', 'AuthController@patch')->name('auth');

            Route::name('index')->get('', function () {
                $jsonString = file_get_contents(base_path('cms.json'));
                $exampleJsonString = file_get_contents(base_path('cms.example.json'));
                $cms = json_decode($jsonString, true);
                $cmsExample = json_decode($exampleJsonString, true);

                return response()->json([
                    'cms' => $cms,
                    'cmsExample' => $cmsExample,
                    'languages' => Language::all(),
                    'test' => [
                        'value' => json_encode($cms['pages']['fr']['frontend']['components']),
                        'example' => json_encode($cmsExample['pages']['fr']['frontend']['components']),
                    ]
                ]);
            });
        });

        Route::prefix('features')->name('features.')->group(function () {
            Route::get('{feature}', 'FeatureController@show')->name('show');
        });

        Route::prefix('languages')->name('languages.')->group(function () {
            Route::get('{language}', 'LanguageController@show')->name('show');
        });

        Route::prefix('roles')->name('roles.')->group(function () {
            Route::get('info', 'RoleController@info')->name('info');
            Route::get('{role}', 'RoleController@show')->name('show');
        });

        Route::prefix('users')->name('users.')->group(function () {
            Route::get('info', 'UserController@info')->name('info');
            Route::get('{user}', 'UserController@show')->name('show');
        });



        Route::prefix('publications')->name('publications.')->group(function () {
            Route::get('{publication}', 'PublicationController@show')->name('show');
        });

        Route::prefix('subscribers')->name('subscribers.')->group(function () {
            Route::get('{subscriber}', 'SubscriberController@show')->name('show');
        });

        Route::prefix('services')->name('services.')->group(function () {
            Route::get('{service}', 'ServiceController@show')->name('show');
        });

        Route::prefix('partners')->name('partners.')->group(function () {
            Route::get('{partner}', 'PartnerController@show')->name('show');
        });

        Route::prefix('testimonies')->name('testimonies.')->group(function () {
            Route::get('{testimoy}', 'TestimonyController@show')->name('show');
        });

        Route::prefix('team-members')->name('team_members.')->group(function () {
            Route::get('{team_member}', 'TeamMemberController@show')->name('show');
        });

        Route::prefix('quotations')->name('quotations.')->group(function () {
            Route::get('{quotation}', 'QuotationController@show')->name('show');
        });



        Route::apiResources([
            'users' => 'UserController',
            'roles' => 'RoleController',
            'features' => 'FeatureController',
            'languages' => 'LanguageController',
            'publications' => 'PublicationController',
            'subscribers' => 'SubscriberController',
            'services' => 'ServiceController',
            'partners' => 'PartnerController',
            'testimonies' => 'TestimonyController',
            'team-members' => 'TeamMemberController',
            'quotations' => 'QuotationController',
        ]);
    });
});

Route::prefix('content')->name('content.')->group(function () {
    Route::get('{language}', function ($lang) {
        $jsonString = file_get_contents(base_path('cms.json'));
        $cmsFile = json_decode($jsonString, true);

        $abbr = $lang;
        if (Language::whereAbbr($lang)->count() === 0) $abbr = env('MIX_DEFAULT_LANG', 'en');

        $cms = [
            'global' => $cmsFile['global'],
            'pages' => $cmsFile['pages'][$abbr],
        ];
        if (request()->has('frontend_lang')) $cms['pages']['frontend'] = $cmsFile['pages'][request()->frontend_lang]['frontend'];

        $languages = Language::all();
        $services = Service::all();
        $quotations = Quotation::all();

        return response()->json([
            'cms' => $cms,
            'languages' => $languages,
            'services' => $services,
            'quotations' => $quotations,
        ]);
    })->name('cms');
});

Route::name('frontend.')->group(function () {
    Route::prefix('publications')->name('publications.')->group(function () {
        Route::get('{publication}', 'FrontendController@publication')->name('show');
        Route::get('', 'FrontendController@publications')->name('index');
    });

    Route::prefix('services')->name('services.')->group(function () {
        Route::get('{service}', 'FrontendController@service')->name('show');
        Route::get('', 'FrontendController@services')->name('index');
    });

    Route::post('contact', 'FrontendController@contact')->name('contact');
    
    Route::post('subscribe', 'FrontendController@newsletter')->name('newsletter');
    Route::get('about', 'FrontendController@about')->name('about');
    Route::get('home', 'FrontendController@home')->name('home');
});