<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CafeController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('db')->group(function () {
    Route::get('/catalogo', [CafeController::class, 'index'])->name("cafe.catalogo");
});
