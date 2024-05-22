<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { Button } from '@/js/Components/ui/button'
</script>

<template>
    <ul>
        <Button variant="secondary">Click me</Button>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/recipes">Recipes</Link>
        </li>
    </ul>
</template>


<style scoped>

</style>