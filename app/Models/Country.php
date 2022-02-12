<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'code','name'
    ];

    public $timestamps = false;

    public function statistics() : HasOne
    {
        return $this->hasOne(Country::class,'country_id','id');
    }
}
