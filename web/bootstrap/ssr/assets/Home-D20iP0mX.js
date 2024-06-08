import { defineComponent, ref, resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const counter = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHead = resolveComponent("PageHead");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_PageHead, {
        title: "Home",
        description: "This is home"
      }, null, _parent));
      _push(`<div><h1 className="text-3xl font-bold underline"> Details about the product page </h1><button>Increase Count</button><span>Count is ${ssrInterpolate(counter.value)}</span></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
