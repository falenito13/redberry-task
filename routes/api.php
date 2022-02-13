<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\StatisticController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API Routes for your application. These
| Routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login',[LoginController::class,'authenticate']);
Route::middleware('auth:sanctum')->group(function(){
    Route::prefix('statistics')->group(function(){
        Route::get('/',[StatisticController::class,'index']);
        Route::get('/summary',[StatisticController::class,'summaryStatisticData']);
    });
    Route::post('/logout',[LoginController::class,'logout']);
});
