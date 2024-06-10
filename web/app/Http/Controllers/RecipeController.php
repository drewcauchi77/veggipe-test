<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Inertia\Inertia;

class RecipeController extends Controller
{
    public function index()
    {
        return Inertia::render('Recipes/Index', [
            'recipes' => Recipe::query()->paginate(10)
        ]);
    }

    public function single()
    {
        return Inertia::render('Recipes/Recipe', [
            'name' => 'Single Recipe'
        ]);
    }
}
