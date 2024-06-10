<script setup lang="ts">
import Navigation from './Navigation/Navigation.vue';
</script>

<template>
    <Navigation class="h-24 fixed bg-white w-full top-0 z-50" />
    <main>
        <section class="px-5 max-w-screen-xl mx-auto">
            <slot />
        </section>
    </main>
</template>