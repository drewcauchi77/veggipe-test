<script setup lang="ts">
import Navigation from './Navigation.vue';
</script>

<template>
    <section>
        <header>
            <Navigation />
        </header>
    </section>
    <section>
        <div>
            <slot />
        </div>
    </section>
</template>

<style scoped>

</style>