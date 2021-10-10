<?php

use App\Models\Serie;
use App\Models\Ejercicio;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Redirect::route('login');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
            'ejercicios' => Ejercicio::selectRaw("DISTINCT(categoria)")->orderBy('categoria', 'ASC')->get()
        ]);
    })->name('dashboard');

    Route::get('/ejercicios/{ejercicio}', function ($ejercicio) {
        return Inertia::render('Ejercicios/Index', [
            'ejercicios' => Ejercicio::where('categoria', $ejercicio)->get(),
            'categoria' => Ejercicio::where('categoria', $ejercicio)->first() ? ucfirst(Ejercicio::where('categoria', $ejercicio)->first()->categoria) : null
        ]);
    })->name('ejercicios.index');

    Route::get('/ejercicios/{ejercicio}/{slug}', function ($ejercicio, $slug) {
        $authUser = Auth::user();
        $ejercicios = null;
        $pesoHistory = null;

        $ejercicios = $authUser->series()->where('nombre_ejercicio', $slug)->orderBy('id', 'DESC')->paginate(4);
        $pesoHistory = $authUser->series()->where('nombre_ejercicio', $slug)->orderBy('id', 'DESC')->get()->take(31)->map(function ($repeticion) {
            return (int) $repeticion->peso;
        });

        return Inertia::render('Ejercicios/Show', [
            'slug' => $slug,
            'ejercicioInfo' => Ejercicio::where('slug', $slug)->firstOrFail(),
            'categoria' => Ejercicio::where('categoria', $ejercicio)->first() ? ucfirst(Ejercicio::where('categoria', $ejercicio)->first()->categoria) : null,

            'ejercicios' => $ejercicios,
            'pesoHistory' => $pesoHistory
        ]);
    })->name('ejercicios.show');

    Route::post('/series/store', function (Request $request) {
        $serie = new Serie();
        $request->request->add(['user_id' => Auth::user()->id]);
        $serie->fill($request->all());
        $serie->save();
        return back();
    })->name('series.store');

    Route::post('sesion/store', function (Request $request) {
        $authUser = Auth::user();
        $authUser->sesion()->updateOrCreate(
            [
                'user_id' => $authUser->id
            ],
            [
                'numero_sesion' => $request->numero_sesion
            ]
        );
        return back();
    })->name('sesiones.store');
});

require __DIR__ . '/auth.php';
