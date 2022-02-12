<?php

namespace App\Http\Controllers;


use App\Filters\CovidStatisticsFilter;
use App\Http\Resources\StatisticResource;
use App\Models\Statistic;
use Illuminate\Http\Request;

class StatisticController extends Controller
{

    public function index(CovidStatisticsFilter $filters)
    {
        return StatisticResource::collection(Statistic::filter($filters)->with(['countries'])->get());
    }
}
