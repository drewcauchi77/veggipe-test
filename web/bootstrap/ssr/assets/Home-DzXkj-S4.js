import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
import "@inertiajs/vue3";
import "@vue/server-renderer";
import "@inertiajs/vue3/server";
import "class-variance-authority";
import "radix-vue";
import "clsx";
import "tailwind-merge";
import "lucide-vue-next";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageHead = resolveComponent("PageHead");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_PageHead, {
    title: "Home",
    description: "This is home"
  }, null, _parent));
  _push(`<section class="max-w-5xl h-dvh pt-24 my-0 mx-auto"><h1 class="text-5xl font-bold text-center mb-4 lg:text-7xl xl:text-8xl"> Your Favourite Vegan Recipes At Your Fingertips! </h1></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Home as default
};
