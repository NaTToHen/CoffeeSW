<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CafeController;

Route::prefix('db')->group(function () {
    Route::get('/catalogo', [CafeController::class, 'index'])->name("cafe.catalogo");
});
