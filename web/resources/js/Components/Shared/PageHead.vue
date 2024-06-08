<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

const props = defineProps<{
    title: string,
    description: string,
}>();
</script>

<template>
    <Head>
        <title>{{ props.title }}</title>
        <meta name="description" :content="props.description">
    </Head>
</template>

<style scoped>

</style>