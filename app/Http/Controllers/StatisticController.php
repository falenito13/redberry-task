<?php

namespace App\Http\Controllers;

use App\Filters\CovidStatisticsFilter;
use App\Http\Resources\StatisticResource;
use App\Models\Statistic;

class StatisticController extends Controller
{

    public function index(CovidStatisticsFilter $filters)
    {
        return StatisticResource::collection(Statistic::filter($filters)->with(['countries'])->get());
    }

    public function summaryStatisticData()
    {
        $sumOfDeath = Statistic::sum('death');
        $sumOfRecovered = Statistic::sum('recovered');
        $sumOfConfirmed = Statistic::sum('confirmed');

        return response([
            'sum_of_death' => $sumOfDeath,
            'sum_of_recovered' => $sumOfRecovered,
            'sum_of_confirmed' => $sumOfConfirmed
        ]);
    }
}
