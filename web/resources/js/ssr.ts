import { createSSRApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { renderToString } from '@vue/server-renderer';
import { OhVueIcon } from 'oh-vue-icons';
import createServer from '@inertiajs/vue3/server';
import Layout from './Components/Shared/Layout.vue';
import PageHead from './Components/Shared/PageHead.vue';
import '@/js/Lib/icons';

createServer(page => 
    createInertiaApp({
        page,
        render: renderToString,
        title: title => `${title} | Veggipe`,
        resolve: async(name) => {
            const pages = import.meta.glob('./Pages/**/*.vue');
            let page = await pages[`./Pages/${name}.vue`]();
            if(page.default.layout === undefined) page.default.layout = Layout;
            return page;
        },
        setup({ App, props, plugin }) {
            return createSSRApp({
              render: () => h(App, props),
            })
            .use(plugin)
            .component('PageHead', PageHead)
            .component('VIcon', OhVueIcon)
        },
    })
)
