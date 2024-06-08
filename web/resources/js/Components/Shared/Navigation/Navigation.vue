<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import {
    NavigationMenu,
    NavigationMenuList,
} from '@/js/Components/UI/navigation-menu';
import { Button } from '@/js/Components/UI/button';
import NavigationItem from './NavigationItem.vue';
</script>

<template>
    <header>
        <section class="px-5 max-w-screen-2xl mx-auto flex h-full items-center content-center md:grid md:grid-cols-3">
            <div class="menu md:order-1 md:justify-self-center lg:justify-self-start">
                <VIcon name="co-hamburger-menu" class="burger mr-4 h-8 w-auto block md:hidden" role="button" tabindex="0" />
                <NavigationMenu class="hidden md:block">
                    <NavigationMenuList>
                        <NavigationItem :link="'/recipes'" :text="'Recipes'" />
                        <NavigationItem :link="'/about'" :text="'About'" />
                        <NavigationItem :link="'/blog'" :text="'Blog'" />
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div class="grow md:justify-self-start lg:order-2 lg:justify-self-center">
                <Link href="/" class="block w-fit min-w-12 mr-5 lg:mr-0">
                    <img src="/assets/logo-sm.png" alt="Veggipe" class="h-12 object-contain block sm:hidden">
                    <img src="/assets/logo.png" alt="Veggipe" class="h-8 object-contain hidden sm:block md:h-10 lg:h-11">
                </Link>
            </div>
            <div class="flex items-center md: justify-self-end md:order-2">
                <Button class="rounded-full mr-8 px-0" size="lg" variant="link">Login</Button>
                <Button class="rounded-full px-5" size="lg">Sign Up</Button>
            </div>
        </section>
    </header>
</template>


<style scoped>
@media only screen and (min-width: 768px) {
    .burger {
        display: none !important;
    }
}
</style>