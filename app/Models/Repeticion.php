<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Repeticion extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'numero_sesion',
        'nombre_ejercicio',
        'numero_serie',
        'cantidad_repeticiones',
        'peso',
        'tiempo_descanso',
    ];

    protected $table = 'repeticiones';

    /**
     * user
     *
     * @return void
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
