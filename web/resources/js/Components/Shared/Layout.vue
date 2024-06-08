<script setup lang="ts">
import Navigation from './Navigation/Navigation.vue';
</script>

<template>
    <Navigation class="h-24 fixed bg-white w-full top-0" />
    <main>
        <section class="px-5 max-w-screen-2xl mx-auto">
            <slot />
        </section>
    </main>
</template>

<style scoped>

</style>