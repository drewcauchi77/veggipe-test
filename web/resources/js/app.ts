import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { OhVueIcon } from 'oh-vue-icons';
import Layout from './Components/Shared/Layout.vue';
import PageHead from './Components/Shared/PageHead.vue';
import '@/js/Lib/icons';

createInertiaApp({
    title: title => `Veggipe | ${title}`,
    resolve: async(name) => {
        const pages = import.meta.glob('./Pages/**/*.vue');
        let page = await pages[`./Pages/${name}.vue`]();
        if(page.default.layout === undefined) page.default.layout = Layout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({
            render:() => h(App, props)
        })
        .use(plugin)
        .component('PageHead', PageHead)
        .component('VIcon', OhVueIcon)
        .mount(el)
    }
})
