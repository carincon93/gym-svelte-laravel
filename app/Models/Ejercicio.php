<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ejercicio extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'nombre',
        'slug',
        'imagen',
        'categoria',
        'link_video'
    ];

    protected $table = 'ejercicios';

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_ejercicio', 'ejercicio_id', 'user_id');
    }
}
