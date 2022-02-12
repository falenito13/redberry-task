<?php

use App\Models\Country;
use App\Models\Statistic;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web Routes for your application. These
| Routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test',function() {
    $countries = Http::accept('application/json')->get('https://devtest.ge/countries')->json();
    Statistic::truncate();
    foreach($countries as $country){
        $data = Country::firstOrCreate(
            ['code' => $country['code']],
            ['name' => json_encode($country['name'])]);
        $countryStatistics = Http::retry(10)->post('https://devtest.ge/get-country-statistics',[
            'code' => $data->code
        ])->json();
        Statistic::create([
            'country_id' => $data->id,
            'confirmed' => isset($countryStatistics['confirmed']) ? $countryStatistics['confirmed'] : null,
            'recovered' => isset($countryStatistics['recovered']) ? $countryStatistics['recovered'] : null,
            'death' => isset($countryStatistics['deaths']) ? $countryStatistics['deaths'] : null
        ]);
    }
});
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '^.*$');
