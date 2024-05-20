<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipeController extends Controller
{
    public function index() {
        return Inertia::render('Recipes/Index', [
            'name' => 'Andrew'
        ]);
    }

    public function single() {
        return Inertia::render('Recipes/Recipe', [
            'name' => 'Single Recipe'
        ]);
    }
}
