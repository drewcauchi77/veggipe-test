<script setup lang="ts">
import RecipesTable from '@/js/Components/Shared/Recipe/RecipesTable.vue';
import type { I_RecipesData } from '@/js/definitions/interfaces';

defineProps<{
    recipes: I_RecipesData,
}>();
</script>

<template>
    <PageHead :title="'Recipes'" :description="'This is recipes page'" />
    <section class="pt-24">
        <h1 class="py-4 text-3xl font-bold text-center lg:text-left">Delicious Vegan Recipes: Nourish Your Body and Soul</h1>
        <p class="pb-4 max-w-3xl text-center lg:text-left">Discover hundreds of vegan recipes from across the web! From hearty breakfasts to indulgent desserts, find healthy, flavourful plant-based dishes to nourish your body and delight your senses.</p>
        <div class="py-8 mx-auto">
            <RecipesTable :recipes="recipes.data" />
        </div>
    </section>
</template>