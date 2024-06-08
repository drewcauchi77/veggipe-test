
<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { 
    NavigationMenuItem, 
} from '@/js/Components/UI/navigation-menu';
import {
    Button
} from '@/js/Components/UI/button';

const props = defineProps<{
    link: string,
    text: string
}>();
</script>

<template>
    <NavigationMenuItem>
        <Button variant="link" class="mx-6 p-0 lg:mr-12 lg:ml-0">
            <Link :href="props.link">
                {{ props.text }}
            </Link>
        </Button>
    </NavigationMenuItem>
</template>

<style scoped>

</style>