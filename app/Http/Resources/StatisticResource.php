<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StatisticResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'country_id' => $this->country_id,
            'confirmed' => $this->confirmed,
            'recovered' => $this->recovered,
            'death' => $this->death,
            'country' => $this->whenLoaded('countries')
        ];
    }
}
