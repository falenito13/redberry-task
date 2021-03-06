<?php

namespace App\Console\Commands;

use App\Models\Country;
use App\Models\Statistic;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\RateLimiter;

class CovidStatistics extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'store:covid-statistics';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        if (RateLimiter::remaining('store:covid-statistics',$perMinute = 5)){
        $countries = Http::accept('application/json')->get('https://devtest.ge/countries')->json();
        Statistic::truncate();
        foreach ($countries as $country) {
            $data = Country::firstOrCreate(
                ['code' => $country['code']],
                ['name' => json_encode($country['name'])]);
            $countryStatistics = Http::post('https://devtest.ge/get-country-statistics', [
                'code' => $data->code
            ])->json();

            Statistic::create([
                'country_id' => $data->id,
                'confirmed' => $countryStatistics['confirmed'],
                'recovered' => $countryStatistics['recovered'],
                'death' => $countryStatistics['deaths']
            ]);
        }
    }
    }
}
