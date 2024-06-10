<script setup lang="ts">
import { computed } from 'vue';
import {
    TableCell,
    TableRow,
} from '@/js/Components/UI/table';
import { Button } from '@/js/Components/UI/button';
import { Link, router } from '@inertiajs/vue3';
import type { I_Recipe } from '@/js/definitions/interfaces';

const props = defineProps<{
    recipe: I_Recipe
}>();

const recipeLink = computed(() => `/recipes/${props.recipe.slug}/${props.recipe.id}`)
</script>

<template>
    <TableRow @click="router.visit(recipeLink)" class="cursor-pointer">
        <TableCell class="font-medium">{{ recipe.name }}</TableCell>
        <TableCell>{{ recipe.description }}</TableCell>
        <TableCell class="text-right">
            <Link :href="recipeLink" tabindex="-1">
                <Button class="rounded-full">Go To Recipe</Button>
            </Link>
        </TableCell>
    </TableRow>
</template>