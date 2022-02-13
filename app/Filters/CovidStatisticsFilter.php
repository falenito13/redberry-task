<?php

namespace App\Filters;

use Illuminate\Http\Request;

class CovidStatisticsFilter extends QueryFilters
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
        parent::__construct($request);
    }

    public function confirmed($confirmed)
    {
        return $this->builder->orderBy('confirmed', $confirmed);
    }

    public function recovered($recovered)
    {
        return $this->builder->orderBy('recovered', $recovered);
    }

    public function death($death)
    {
        return $this->builder->orderBy('death', $death);
    }

    public function search_keyword($search_keyword)
    {
        return $this->builder->where(function ($query) use ($search_keyword) {
            return $query->where('confirmed', 'like', "%" . $search_keyword . "%")->orWhere('recovered', "%" . $search_keyword . "%")
                ->orWhere('death', "%" . $search_keyword . "%")->orWhereHas('countries', function ($query) use ($search_keyword) {
                    return $query->where('name', 'like', "%" . $search_keyword . "%")->orWhere('code', 'like', "%" . $search_keyword . "%");
                });
        });
    }

}
