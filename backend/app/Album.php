<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $fillable = ['title', 'year'];


    public function track()
    {
        return $this->hasMany('App/Track');
    }

}
