<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
Route::get('/test', [Test::class,'test'])->name('name');
Route GET sur url /test qui utilise le controller Test avec la methode test et le nom name

, il est généralement recommandé d'utiliser api.php pour définir vos routes. Voici pourquoi :

Middleware par défaut : Laravel applique un ensemble différent de middleware aux routes définies dans api.php par rapport à web.php. Par exemple, les routes dans api.php n'utilisent pas la session ou les cookies de la même manière que web.php, ce qui est idéal pour une API stateless.
*/

Route::get('/', function () {
    return view('welcome');
});
