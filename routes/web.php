<?php

use App\Models\Serie;
use App\Models\Ejercicio;
use App\Models\Sesion;
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
            'ejercicios' => Ejercicio::where('categoria', $ejercicio)->with('users')->get(),
            'categoria' => Ejercicio::where('categoria', $ejercicio)->first() ? ucfirst(Ejercicio::where('categoria', $ejercicio)->first()->categoria) : null,
        ]);
    })->name('ejercicios.index');

    Route::get('/sesion', function () {
        return Inertia::render('Sesion/Index', [
            'ejercicios' => Ejercicio::whereHas('users', function () {
                return 'user_id' == Auth::user()->id;
            })->with('users')->get(),
        ]);
    })->name('sesion.index');

    Route::get('/ejercicios/{ejercicio}/{slug}', function ($ejercicio, $slug) {
        $authUser = Auth::user();
        $ejercicios = null;
        $pesoHistory = null;
        $repeticionesHistory = null;

        $ejercicios = $authUser->series()->where('nombre_ejercicio', $slug)->orderBy('id', 'DESC')->paginate(4);
        $pesoHistory = $authUser->series()->where('nombre_ejercicio', $slug)->orderBy('id', 'DESC')->get()->take(31)->map(function ($serie) {
            return (float) $serie->peso;
        });

        $repeticionesHistory = $authUser->series()->where('nombre_ejercicio', $slug)->orderBy('id', 'DESC')->get()->take(31)->map(function ($serie) {
            return (float) $serie->cantidad_repeticiones;
        });

        $numSeries = $authUser->series()->where('nombre_ejercicio', $slug)->where('numero_sesion', Sesion::where('user_id', $authUser->id)->first()->numero_sesion)->count();
        $totalDescanso = $authUser->series()->selectRaw('sum(tiempo_descanso) as suma_tiempo')->where('nombre_ejercicio', $slug)->where('numero_sesion', Sesion::where('user_id', $authUser->id)->first()->numero_sesion)->first();

        return Inertia::render('Ejercicios/Show', [
            'slug' => $slug,
            'ejercicioInfo' => Ejercicio::where('slug', $slug)->firstOrFail(),
            'categoria' => Ejercicio::where('categoria', $ejercicio)->first() ? ucfirst(Ejercicio::where('categoria', $ejercicio)->first()->categoria) : null,

            'ejercicios' => $ejercicios,
            'pesoHistory' => $pesoHistory,
            'repeticionesHistory' => $repeticionesHistory,
            'promedioDescanso' => $numSeries > 0 ? number_format((float)$totalDescanso->suma_tiempo / $numSeries, 2, '.', '') : 0
        ]);
    })->name('ejercicios.show');

    Route::post('/series/store', function (Request $request) {
        $authUser = Auth::user();
        $sesion = Sesion::select('numero_sesion')->where('user_id', $authUser->id)->first();
        $numeroSerie = $authUser->series()->select('numero_serie')->where('nombre_ejercicio', $request->nombre_ejercicio)->where('numero_sesion', $sesion->numero_sesion)->orderBy('id', 'DESC')->first() ? $authUser->series()->select('numero_serie')->where('nombre_ejercicio', $request->nombre_ejercicio)->where('numero_sesion', $sesion->numero_sesion)->orderBy('id', 'DESC')->first()->numero_serie : 0;

        $serie = new Serie();
        $request->request->add(['user_id' => Auth::user()->id]);
        $request->request->add(['numero_sesion' => $sesion->numero_sesion]);
        $request->request->add(['numero_serie' => $numeroSerie + 1]);
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

    Route::post('user-ejercicio/store/{ejercicio}', function ($ejercicio) {
        $authUser = Auth::user();
        $authUser->ejercicios()->toggle($ejercicio);
        return back();
    })->name('user-ejercicio.store');
});

require __DIR__ . '/auth.php';
