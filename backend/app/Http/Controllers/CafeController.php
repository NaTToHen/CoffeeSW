<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cafe;

class CafeController extends Controller
{
    public function index() {
        $cafes = Cafe::all();

        return response()->json($cafes, 200, [], JSON_UNESCAPED_UNICODE);
    }

    public function unico($id) {
        $cafe = Cafe::find($id);

        return response()->json($cafe, 200, [], JSON_UNESCAPED_UNICODE);
    }
}