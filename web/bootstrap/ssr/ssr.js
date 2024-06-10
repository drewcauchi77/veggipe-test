import { defineComponent, ref, reactive, computed, onMounted, onUpdated, toRefs, h as h$1, mergeProps, unref, useSSRContext, withCtx, renderSlot, createVNode, createTextVNode, toDisplayString, resolveComponent, createSSRApp } from "vue";
import { Link, Head, createInertiaApp } from "@inertiajs/vue3";
import { renderToString } from "@vue/server-renderer";
import createServer from "@inertiajs/vue3/server";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { cva } from "class-variance-authority";
import { useForwardProps, NavigationMenuViewport, useForwardPropsEmits, NavigationMenuRoot, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, Primitive } from "radix-vue";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ChevronDown } from "lucide-vue-next";
const l = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;", "&": "&amp;" };
let h = 0;
var f = (n) => n.replace(/[<>"&]/g, (n2) => l[n2] || n2), p = (n) => n + h++;
const u = {}, m = (n) => {
  const { name: o, paths: e = [], d: t, polygons: v = [], points: r } = n;
  t && e.push({ d: t }), r && v.push({ points: r }), u[o] = Object.assign({}, n, { paths: e, polygons: v }), u[o].minX || (u[o].minX = 0), u[o].minY || (u[o].minY = 0);
}, c = (...n) => {
  for (const o of n)
    m(o);
}, g = defineComponent({ name: "OhVueIcon", props: { name: { type: String, validator: (n) => !n || n in u || (console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${n}".
Please make sure you have imported this icon before using it.`), false) }, title: String, fill: String, scale: { type: [Number, String], default: 1 }, animation: { validator: (n) => ["spin", "spin-pulse", "wrench", "ring", "pulse", "flash", "float"].includes(n) }, hover: Boolean, flip: { validator: (n) => ["horizontal", "vertical", "both"].includes(n) }, speed: { validator: (n) => "fast" === n || "slow" === n }, label: String, inverse: Boolean }, setup(n) {
  const a = ref([]), s = reactive({ outerScale: 1.2, x: null, y: null }), l2 = reactive({ width: 0, height: 0 }), h2 = computed(() => {
    const o = Number(n.scale);
    return isNaN(o) || o <= 0 ? (console.warn('Invalid prop: prop "scale" should be a number over 0.'), s.outerScale) : o * s.outerScale;
  }), f2 = computed(() => ({ "ov-icon": true, "ov-inverse": n.inverse, "ov-flip-horizontal": "horizontal" === n.flip, "ov-flip-vertical": "vertical" === n.flip, "ov-flip-both": "both" === n.flip, "ov-spin": "spin" === n.animation, "ov-spin-pulse": "spin-pulse" === n.animation, "ov-wrench": "wrench" === n.animation, "ov-ring": "ring" === n.animation, "ov-pulse": "pulse" === n.animation, "ov-flash": "flash" === n.animation, "ov-float": "float" === n.animation, "ov-hover": n.hover, "ov-fast": "fast" === n.speed, "ov-slow": "slow" === n.speed })), m2 = computed(() => n.name ? u[n.name] : null), c2 = computed(() => m2.value ? `${m2.value.minX} ${m2.value.minY} ${m2.value.width} ${m2.value.height}` : `0 0 ${g2.value} ${w2.value}`), d = computed(() => {
    if (!m2.value)
      return 1;
    const { width: n2, height: o } = m2.value;
    return Math.max(n2, o) / 16;
  }), g2 = computed(() => l2.width || m2.value && m2.value.width / d.value * h2.value || 0), w2 = computed(() => l2.height || m2.value && m2.value.height / d.value * h2.value || 0), y = computed(() => 1 !== h2.value && { fontSize: h2.value + "em" }), b = computed(() => {
    if (!m2.value || !m2.value.raw)
      return null;
    const n2 = {};
    let o = m2.value.raw;
    return o = o.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g, (o2, e, t) => {
      const v = p("vat-");
      return n2[t] = v, ` id="${v}"`;
    }), o = o.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (o2, e, t, v) => {
      const r = e || v;
      return r && n2[r] ? `#${n2[r]}` : o2;
    }), o;
  }), $ = computed(() => m2.value && m2.value.attr ? m2.value.attr : {}), x = () => {
    if (!n.name && null !== n.name && 0 === a.value.length)
      return void console.warn('Invalid prop: prop "name" is required.');
    if (m2.value)
      return;
    let o = 0, e = 0;
    a.value.forEach((n2) => {
      n2.outerScale = h2.value, o = Math.max(o, n2.width), e = Math.max(e, n2.height);
    }), l2.width = o, l2.height = e, a.value.forEach((n2) => {
      n2.x = (o - n2.width) / 2, n2.y = (e - n2.height) / 2;
    });
  };
  return onMounted(() => {
    x();
  }), onUpdated(() => {
    x();
  }), { ...toRefs(s), children: a, icon: m2, klass: f2, style: y, width: g2, height: w2, box: c2, attribs: $, raw: b };
}, created() {
  const n = this.$parent;
  n && n.children && n.children.push(this);
}, render() {
  const n = Object.assign({ role: this.$attrs.role || (this.label || this.title ? "img" : null), "aria-label": this.label || null, "aria-hidden": !(this.label || this.title), width: this.width, height: this.height, viewBox: this.box }, this.attribs);
  this.attribs.stroke ? n.stroke = this.fill ? this.fill : "currentColor" : n.fill = this.fill ? this.fill : "currentColor", this.x && (n.x = this.x.toString()), this.y && (n.y = this.y.toString());
  let o = { class: this.klass, style: this.style };
  if (o = Object.assign(o, n), this.raw) {
    const n2 = this.title ? `<title>${f(this.title)}</title>${this.raw}` : this.raw;
    o.innerHTML = n2;
  }
  const e = this.title ? [h$1("title", this.title)] : [], t = (n2, o2, e2) => h$1(n2, { ...o2, key: `${n2}-${e2}` });
  return h$1("svg", o, this.raw ? void 0 : e.concat([this.$slots.default ? this.$slots.default() : this.icon ? [...this.icon.paths.map((n2, o2) => t("path", n2, o2)), ...this.icon.polygons.map((n2, o2) => t("polygon", n2, o2))] : []]));
} });
function w(n, o) {
  void 0 === o && (o = {});
  var e = o.insertAt;
  if (n && "undefined" != typeof document) {
    var t = document.head || document.getElementsByTagName("head")[0], v = document.createElement("style");
    v.type = "text/css", "top" === e && t.firstChild ? t.insertBefore(v, t.firstChild) : t.appendChild(v), v.styleSheet ? v.styleSheet.cssText = n : v.appendChild(document.createTextNode(n));
  }
}
w(".ov-icon {\n  display: inline-block;\n  overflow: visible;\n  vertical-align: -0.2em;\n}\n");
w("/* ---------------- spin ---------------- */\n.ov-spin:not(.ov-hover),\n.ov-spin.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-spin {\n  animation: ov-spin 1s linear infinite;\n}\n\n.ov-spin:not(.ov-hover).ov-fast,\n.ov-spin.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-spin.ov-fast {\n  animation: ov-spin 0.7s linear infinite;\n}\n\n.ov-spin:not(.ov-hover).ov-slow,\n.ov-spin.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-spin.ov-slow {\n  animation: ov-spin 2s linear infinite;\n}\n\n/* ---------------- spin-pulse ---------------- */\n\n.ov-spin-pulse:not(.ov-hover),\n.ov-spin-pulse.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse {\n  animation: ov-spin 1s infinite steps(8);\n}\n\n.ov-spin-pulse:not(.ov-hover).ov-fast,\n.ov-spin-pulse.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {\n  animation: ov-spin 0.7s infinite steps(8);\n}\n\n.ov-spin-pulse:not(.ov-hover).ov-slow,\n.ov-spin-pulse.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {\n  animation: ov-spin 2s infinite steps(8);\n}\n\n@keyframes ov-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* ---------------- wrench ---------------- */\n.ov-wrench:not(.ov-hover),\n.ov-wrench.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-wrench {\n  animation: ov-wrench 2.5s ease infinite;\n}\n\n.ov-wrench:not(.ov-hover).ov-fast,\n.ov-wrench.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {\n  animation: ov-wrench 1.2s ease infinite;\n}\n\n.ov-wrench:not(.ov-hover).ov-slow,\n.ov-wrench.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {\n  animation: ov-wrench 3.7s ease infinite;\n}\n\n@keyframes ov-wrench {\n  0% {\n    transform: rotate(-12deg);\n  }\n\n  8% {\n    transform: rotate(12deg);\n  }\n\n  10%, 28%, 30%, 48%, 50%, 68% {\n    transform: rotate(24deg);\n  }\n\n  18%, 20%, 38%, 40%, 58%, 60% {\n    transform: rotate(-24deg);\n  }\n\n  75%, 100% {\n    transform: rotate(0deg);\n  }\n}\n\n/* ---------------- ring ---------------- */\n.ov-ring:not(.ov-hover),\n.ov-ring.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-ring {\n  animation: ov-ring 2s ease infinite;\n}\n\n.ov-ring:not(.ov-hover).ov-fast,\n.ov-ring.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-ring.ov-fast {\n  animation: ov-ring 1s ease infinite;\n}\n\n.ov-ring:not(.ov-hover).ov-slow,\n.ov-ring.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-ring.ov-slow {\n  animation: ov-ring 3s ease infinite;\n}\n\n@keyframes ov-ring {\n  0% {\n    transform: rotate(-15deg);\n  }\n\n  2% {\n    transform: rotate(15deg);\n  }\n\n  4%, 12% {\n    transform: rotate(-18deg);\n  }\n\n  6% {\n    transform: rotate(18deg);\n  }\n\n  8% {\n    transform: rotate(-22deg);\n  }\n\n  10% {\n    transform: rotate(22deg);\n  }\n\n  12% {\n    transform: rotate(-18deg);\n  }\n\n  14% {\n    transform: rotate(18deg);\n  }\n\n  16% {\n    transform: rotate(-12deg);\n  }\n\n  18% {\n    transform: rotate(12deg);\n  }\n\n  20%, 100% {\n    transform: rotate(0deg);\n  }\n}\n\n/* ---------------- pulse ---------------- */\n.ov-pulse:not(.ov-hover),\n.ov-pulse.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-pulse {\n  animation: ov-pulse 2s linear infinite;\n}\n\n.ov-pulse:not(.ov-hover).ov-fast,\n.ov-pulse.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {\n  animation: ov-pulse 1s linear infinite;\n}\n\n.ov-pulse:not(.ov-hover).ov-slow,\n.ov-pulse.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {\n  animation: ov-pulse 3s linear infinite;\n}\n\n@keyframes ov-pulse {\n  0% {\n    transform: scale(1.1);\n  }\n\n  50% {\n    transform: scale(0.8);\n  }\n\n  100% {\n    transform: scale(1.1);\n  }\n}\n\n/* ---------------- flash ---------------- */\n.ov-flash:not(.ov-hover),\n.ov-flash.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-flash {\n  animation: ov-flash 2s ease infinite;\n}\n\n.ov-flash:not(.ov-hover).ov-fast,\n.ov-flash.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-flash.ov-fast {\n  animation: ov-flash 1s ease infinite;\n}\n\n.ov-flash:not(.ov-hover).ov-slow,\n.ov-flash.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-flash.ov-slow {\n  animation: ov-flash 3s ease infinite;\n}\n\n@keyframes ov-flash {\n  0%, 100%, 50%{\n    opacity: 1;\n  }\n  25%, 75%{\n    opacity: 0;\n  }\n}\n\n/* ---------------- float ---------------- */\n.ov-float:not(.ov-hover),\n.ov-float.ov-hover:hover,\n.ov-parent.ov-hover:hover > .ov-float {\n  animation: ov-float 2s linear infinite;\n}\n\n.ov-float:not(.ov-hover).ov-fast,\n.ov-float.ov-hover.ov-fast:hover,\n.ov-parent.ov-hover:hover > .ov-float.ov-fast {\n  animation: ov-float 1s linear infinite;\n}\n\n.ov-float:not(.ov-hover).ov-slow,\n.ov-float.ov-hover.ov-slow:hover,\n.ov-parent.ov-hover:hover > .ov-float.ov-slow {\n  animation: ov-float 3s linear infinite;\n}\n\n@keyframes ov-float {\n  0%, 100% {\n    transform: translateY(-3px);\n  }\n  50% {\n    transform: translateY(3px);\n  }\n}\n");
w(".ov-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.ov-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.ov-flip-both {\n  transform: scale(-1, -1);\n}\n\n.ov-inverse {\n  color: #fff;\n}\n");
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuViewport",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-0 top-full flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(NavigationMenuViewport), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "origin-top-center relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--radix-navigation-menu-viewport-width] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/navigation-menu/NavigationMenuViewport.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$b, null, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_sfc_main$b)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/navigation-menu/NavigationMenu.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuList",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuList), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "group flex flex-1 list-none items-center justify-center gap-x-1",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/navigation-menu/NavigationMenuList.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuItem), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/navigation-menu/NavigationMenuItem.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(unref(navigationMenuTriggerStyle)(), "group", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(ChevronDown), {
              class: "relative top-px ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(ChevronDown), {
                class: "relative top-px ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/navigation-menu/NavigationMenuTrigger.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/navigation-menu/NavigationMenuContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuLink",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuLink), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/navigation-menu/NavigationMenuLink.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50"
);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild,
        class: unref(cn)(unref(buttonVariants)({ variant: _ctx.variant, size: _ctx.size }), props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/button/Button.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded px-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NavigationItem",
  __ssrInlineRender: true,
  props: {
    link: {},
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$8), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              variant: "link",
              class: "mx-6 p-0 lg:mr-12 lg:ml-0",
              tabindex: "-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), { href: _ctx.link }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.text)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.text), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), { href: _ctx.link }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.text), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), {
                variant: "link",
                class: "mx-6 p-0 lg:mr-12 lg:ml-0",
                tabindex: "-1"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Link), { href: _ctx.link }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.text), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Shared/Navigation/NavigationItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VIcon = resolveComponent("VIcon");
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-12533a51><section class="px-5 max-w-screen-xl mx-auto flex h-full items-center content-center md:grid md:grid-cols-3" data-v-12533a51><div class="menu md:order-1 md:justify-self-center lg:justify-self-start" data-v-12533a51>`);
      _push(ssrRenderComponent(_component_VIcon, {
        name: "co-hamburger-menu",
        class: "burger mr-4 h-8 w-auto block md:hidden",
        role: "button",
        tabindex: "0"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$a), { class: "hidden md:block" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$9), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    link: "/recipes",
                    text: "Recipes"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    link: "/about",
                    text: "About"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    link: "/blog",
                    text: "Blog"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      link: "/recipes",
                      text: "Recipes"
                    }),
                    createVNode(_sfc_main$3, {
                      link: "/about",
                      text: "About"
                    }),
                    createVNode(_sfc_main$3, {
                      link: "/blog",
                      text: "Blog"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$9), null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, {
                    link: "/recipes",
                    text: "Recipes"
                  }),
                  createVNode(_sfc_main$3, {
                    link: "/about",
                    text: "About"
                  }),
                  createVNode(_sfc_main$3, {
                    link: "/blog",
                    text: "Blog"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grow md:justify-self-start lg:order-2 lg:justify-self-center" data-v-12533a51>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "block w-fit min-w-12 mr-5 lg:mr-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/logo-sm.png" alt="Veggipe" class="h-12 object-contain block sm:hidden" data-v-12533a51${_scopeId}><img src="/assets/logo.png" alt="Veggipe" class="h-8 object-contain hidden sm:block md:h-10 lg:h-11" data-v-12533a51${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/logo-sm.png",
                alt: "Veggipe",
                class: "h-12 object-contain block sm:hidden"
              }),
              createVNode("img", {
                src: "/assets/logo.png",
                alt: "Veggipe",
                class: "h-8 object-contain hidden sm:block md:h-10 lg:h-11"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center md: justify-self-end md:order-2" data-v-12533a51>`);
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        class: "rounded-full px-5 mr-5",
        size: "lg",
        variant: "outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        class: "rounded-full px-5",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign Up`);
          } else {
            return [
              createTextVNode("Sign Up")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></header>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Shared/Navigation/Navigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Navigation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-12533a51"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navigation, { class: "h-24 fixed bg-white w-full top-0 z-50" }, null, _parent));
      _push(`<main><section class="px-5 max-w-screen-xl mx-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section></main><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Shared/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageHead",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Head), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(_ctx.title)}</title><meta name="description"${ssrRenderAttr("content", _ctx.description)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(_ctx.title), 1),
              createVNode("meta", {
                name: "description",
                content: _ctx.description
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Shared/PageHead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BiSearch = { "name": "bi-search", "minX": -1.6, "minY": -1.6, "width": 19.2, "height": 19.2, "raw": '<path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"/>' };
const CoHamburgerMenu = { "name": "co-hamburger-menu", "minX": -51.2, "minY": -51.2, "width": 614.4, "height": 614.4, "raw": '<path fill="var(--ci-primary-color, currentColor)" d="M80 96h352v32H80zM80 240h352v32H80zM80 384h352v32H80z" class="ci-primary"/>' };
c(BiSearch, CoHamburgerMenu);
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} | Veggipe`,
    resolve: async (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.vue": () => import("./assets/About-hElHdkB1.js"), "./Pages/Blog.vue": () => import("./assets/Blog-BzjRPv4i.js"), "./Pages/Home.vue": () => import("./assets/Home-DzXkj-S4.js"), "./Pages/Recipes/Index.vue": () => import("./assets/Index-DAQMu8Gc.js"), "./Pages/Recipes/Recipe.vue": () => import("./assets/Recipe-BBlX0ah5.js") });
      let page2 = await pages[`./Pages/${name}.vue`]();
      if (page2.default.layout === void 0)
        page2.default.layout = _sfc_main$1;
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).component("PageHead", _sfc_main).component("VIcon", g);
    }
  })
);
export {
  _export_sfc as _,
  _sfc_main$4 as a,
  cn as c
};
