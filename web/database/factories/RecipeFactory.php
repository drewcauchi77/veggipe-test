<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipe>
 */
class RecipeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->words(3, true);
        $slug = Str::slug($name, '-');

        return [
            'name' => $name,
            'link' => fake()->url(),
            'description' => fake()->sentence(20, true),
            'slug' => $slug
        ];
    }
}
