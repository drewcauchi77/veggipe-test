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
    title: "Blog",
    description: "This is blog"
  }, null, _parent));
  _push(`<div><h1>Blog page</h1></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Blog as default
};
