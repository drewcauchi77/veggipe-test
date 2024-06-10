<script setup lang="ts">
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from '@/js/Components/UI/table';
import type { T_Recipes } from '@/js/definitions/types';
import RecipeDetails from '@/js/Components/Shared/Recipe/RecipeDetails.vue';

defineProps<{
    recipes: T_Recipes,
}>();
</script>

<template>
    <Table class="border rounded">
        <TableHeader>
            <TableRow>
                <TableHead>Recipe</TableHead>
                <TableHead>Description</TableHead>
                <TableHead class="text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <RecipeDetails v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
        </TableBody>
    </Table>
</template>