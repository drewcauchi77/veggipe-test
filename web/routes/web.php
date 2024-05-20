<?php

use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() {
    return Inertia::render('Home');
})->name('recipe');
Route::get('/recipes', [RecipeController::class, 'index'])->name('recipes');
Route::get('/recipes/{recipe}', [RecipeController::class, 'index'])->name('recipe');