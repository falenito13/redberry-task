<?php

namespace App\Models;

use App\Traits\HasFilters;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Statistic extends Model
{
    use HasFactory,HasFilters;

    protected $fillable = [
        'country_id',
        'confirmed',
        'death',
        'recovered'
    ];

    public $timestamps = false;


    public function countries(): BelongsTo
    {
        return $this->belongsTo(Country::class,'country_id','id');
    }
}
