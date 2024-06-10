import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../ssr.js";
import "@inertiajs/vue3";
import "@vue/server-renderer";
import "@inertiajs/vue3/server";
import "vue/server-renderer";
import "class-variance-authority";
import "radix-vue";
import "clsx";
import "tailwind-merge";
import "lucide-vue-next";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Recipes/Recipe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Recipe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Recipe as default
};
