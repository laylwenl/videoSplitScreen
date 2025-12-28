import { defineComponent as W, createElementBlock as i, openBlock as s, createCommentVNode as X, createElementVNode as d, createStaticVNode as S, ref as O, watch as I, computed as g, shallowRef as R, onBeforeUnmount as dt, normalizeStyle as N, Fragment as U, renderList as z, unref as P, normalizeClass as j, createVNode as ht, toDisplayString as q, withModifiers as wt, renderSlot as ut } from "vue";
const C = {
  1: {
    type: "1",
    label: "1分屏",
    count: 1,
    cols: 1,
    rows: 1
  },
  2: {
    type: "2",
    label: "2分屏",
    count: 2,
    cols: 2,
    rows: 1
  },
  3: {
    type: "3",
    label: "3分屏",
    count: 3,
    cols: 2,
    rows: 2
  },
  4: {
    type: "4",
    label: "4分屏",
    count: 4,
    cols: 2,
    rows: 2
  },
  6: {
    type: "6",
    label: "6分屏",
    count: 6,
    cols: 3,
    rows: 2
  },
  7: {
    type: "7",
    label: "7分屏",
    count: 7,
    cols: 4,
    rows: 4
  },
  8: {
    type: "8",
    label: "8分屏",
    count: 8,
    cols: 4,
    rows: 4
  },
  9: {
    type: "9",
    label: "9分屏",
    count: 9,
    cols: 3,
    rows: 3
  },
  10: {
    type: "10",
    label: "10分屏",
    count: 10,
    cols: 6,
    rows: 4
  },
  13: {
    type: "13",
    label: "13分屏",
    count: 13,
    cols: 4,
    rows: 4
  },
  16: {
    type: "16",
    label: "16分屏",
    count: 16,
    cols: 4,
    rows: 4
  }
}, H = {};
function pt(c) {
  if (H[c])
    return H[c];
  const e = {
    1: [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 }
    ],
    2: [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 }
    ],
    3: [
      { col: 1, colSpan: 1, row: 1, rowSpan: 2, isMain: !0 },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 2, rowSpan: 1 }
    ],
    4: [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 2, rowSpan: 1 }
    ],
    6: [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 2, rowSpan: 1 }
    ],
    7: [
      { col: 1, colSpan: 2, row: 1, rowSpan: 2 },
      { col: 3, colSpan: 2, row: 1, rowSpan: 2 },
      { col: 1, colSpan: 2, row: 3, rowSpan: 2 },
      { col: 3, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 4, rowSpan: 1 }
    ],
    8: [
      { col: 1, colSpan: 3, row: 1, rowSpan: 3, isMain: !0 },
      { col: 4, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 4, rowSpan: 1 }
    ],
    9: [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 3, rowSpan: 1 }
    ],
    10: [
      { col: 1, colSpan: 5, row: 1, rowSpan: 3, isMain: !0 },
      { col: 6, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 6, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 6, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 5, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 6, colSpan: 1, row: 4, rowSpan: 1 }
    ],
    13: [
      { col: 1, colSpan: 2, row: 1, rowSpan: 2, isMain: !0 },
      { col: 3, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 4, rowSpan: 1 }
    ],
    16: [
      { col: 1, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 1, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 2, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 3, rowSpan: 1 },
      { col: 1, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 2, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 3, colSpan: 1, row: 4, rowSpan: 1 },
      { col: 4, colSpan: 1, row: 4, rowSpan: 1 }
    ]
  }[c] || [];
  return e.length > 0 && (H[c] = e), e;
}
function vt() {
  return Object.keys(C);
}
const yt = { class: "layout-icon" }, gt = {
  key: 0,
  viewBox: "0 0 48 48",
  fill: "none"
}, kt = {
  key: 1,
  viewBox: "0 0 48 48",
  fill: "none"
}, St = {
  key: 2,
  viewBox: "0 0 48 48",
  fill: "none"
}, ft = {
  key: 3,
  viewBox: "0 0 48 48",
  fill: "none"
}, Ct = {
  key: 4,
  viewBox: "0 0 48 48",
  fill: "none"
}, xt = {
  key: 5,
  viewBox: "0 0 48 48",
  fill: "none"
}, mt = {
  key: 6,
  viewBox: "0 0 48 48",
  fill: "none"
}, bt = {
  key: 7,
  viewBox: "0 0 48 48",
  fill: "none"
}, At = {
  key: 8,
  viewBox: "0 0 54 48",
  fill: "none"
}, Lt = {
  key: 9,
  viewBox: "0 0 48 48",
  fill: "none"
}, Dt = {
  key: 10,
  viewBox: "0 0 48 48",
  fill: "none"
}, $t = /* @__PURE__ */ W({
  __name: "VideoLayoutIcon",
  props: {
    type: {}
  },
  setup(c) {
    return (k, e) => (s(), i("div", yt, [
      c.type === "1" ? (s(), i("svg", gt, [...e[0] || (e[0] = [
        d("rect", {
          x: "4",
          y: "4",
          width: "40",
          height: "40",
          stroke: "currentColor",
          "stroke-width": "2"
        }, null, -1)
      ])])) : c.type === "2" ? (s(), i("svg", kt, [...e[1] || (e[1] = [
        d("rect", {
          x: "4",
          y: "4",
          width: "19",
          height: "40",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1),
        d("rect", {
          x: "25",
          y: "4",
          width: "19",
          height: "40",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1)
      ])])) : c.type === "3" ? (s(), i("svg", St, [...e[2] || (e[2] = [
        d("rect", {
          x: "4",
          y: "4",
          width: "20",
          height: "40",
          stroke: "currentColor",
          "stroke-width": "2"
        }, null, -1),
        d("rect", {
          x: "26",
          y: "4",
          width: "18",
          height: "19",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1),
        d("rect", {
          x: "26",
          y: "25",
          width: "18",
          height: "19",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1)
      ])])) : c.type === "4" ? (s(), i("svg", ft, [...e[3] || (e[3] = [
        d("rect", {
          x: "4",
          y: "4",
          width: "19",
          height: "19",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1),
        d("rect", {
          x: "25",
          y: "4",
          width: "19",
          height: "19",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1),
        d("rect", {
          x: "4",
          y: "25",
          width: "19",
          height: "19",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1),
        d("rect", {
          x: "25",
          y: "25",
          width: "19",
          height: "19",
          stroke: "currentColor",
          "stroke-width": "1.5"
        }, null, -1)
      ])])) : c.type === "6" ? (s(), i("svg", Ct, [...e[4] || (e[4] = [
        S('<rect x="3" y="4" width="13" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="18" y="4" width="12" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="32" y="4" width="13" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="3" y="24" width="13" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="18" y="24" width="12" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="32" y="24" width="13" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect>', 6)
      ])])) : c.type === "7" ? (s(), i("svg", xt, [...e[5] || (e[5] = [
        S('<rect x="4" y="4" width="19" height="19" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="25" y="4" width="19" height="19" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="4" y="25" width="19" height="19" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="25" y="25" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="35" y="25" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="25" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="35" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect>', 7)
      ])])) : c.type === "8" ? (s(), i("svg", mt, [...e[6] || (e[6] = [
        S('<rect x="4" y="4" width="28" height="29" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="34" y="4" width="10" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="14.5" width="10" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="24.5" width="10" height="8.5" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="14" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="24" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="35" width="10" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect>', 8)
      ])])) : c.type === "9" ? (s(), i("svg", bt, [...e[7] || (e[7] = [
        S('<rect x="4" y="4" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="18" y="4" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="32" y="4" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="4" y="18" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="18" y="18" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="32" y="18" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="4" y="32" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="18" y="32" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="32" y="32" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect>', 9)
      ])])) : c.type === "10" ? (s(), i("svg", At, [...e[8] || (e[8] = [
        S('<rect x="3" y="4" width="36" height="29" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="41" y="4" width="10" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="41" y="14.5" width="10" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="41" y="24.5" width="10" height="8.5" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="3" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="11" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="19" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="27" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="35" y="35" width="6" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="42" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect>', 10)
      ])])) : c.type === "13" ? (s(), i("svg", Lt, [...e[9] || (e[9] = [
        S('<rect x="4" y="4" width="18" height="18" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="24" y="4" width="8" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="4" width="10" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="24" y="14" width="8" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="14" width="10" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="24" width="8" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="14" y="24" width="8" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="24" y="24" width="8" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="24" width="10" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="34" width="8" height="10" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="14" y="34" width="8" height="10" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="24" y="34" width="8" height="10" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="34" width="10" height="10" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect>', 13)
      ])])) : c.type === "16" ? (s(), i("svg", Dt, [...e[10] || (e[10] = [
        S('<rect x="4" y="4" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="15" y="4" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="26" y="4" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="37" y="4" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="15" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="15" y="15" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="26" y="15" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="37" y="15" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="26" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="15" y="26" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="26" y="26" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="37" y="26" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="37" width="9" height="7" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="15" y="37" width="9" height="7" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="26" y="37" width="9" height="7" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="37" y="37" width="7" height="7" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect>', 16)
      ])])) : X("", !0)
    ]));
  }
}), Q = (c, k) => {
  const e = c.__vccOpts || c;
  for (const [x, p] of k)
    e[x] = p;
  return e;
}, J = /* @__PURE__ */ Q($t, [["__scopeId", "data-v-31e0404d"]]), Bt = {
  key: 0,
  class: "layout-toolbar",
  role: "toolbar",
  "aria-label": "布局切换工具栏"
}, It = { class: "layout-buttons" }, _t = ["onClick", "title", "aria-label", "aria-pressed"], Et = { class: "layout-label" }, Vt = {
  class: "video-grid-container",
  role: "region",
  "aria-label": "视频网格"
}, Tt = ["aria-label", "onDragstart", "onDragenter", "onDragleave", "onDrop"], Gt = { class: "video-placeholder" }, Mt = { class: "placeholder-number" }, Ot = 0.5, Rt = "grabbing", Nt = "0.8", Pt = /* @__PURE__ */ W({
  __name: "VideoGridLayout",
  props: {
    videos: {},
    layout: { default: "1" },
    availableLayouts: {},
    showToolbar: { type: Boolean, default: !0 },
    width: {},
    height: {},
    placeholderText: {},
    placeholders: {}
  },
  emits: ["layoutChange", "videosChange"],
  setup(c, { emit: k }) {
    const e = c, x = k, p = O(e.layout);
    I(() => e.layout, (t) => {
      p.value = t;
    });
    const K = g(() => e.availableLayouts && e.availableLayouts.length > 0 ? e.availableLayouts : vt()), y = R([]);
    function _(t) {
      const o = Array.isArray(t) ? t : e.videos || [], a = V.value, r = {};
      y.value.forEach((w, u) => {
        w && w.id !== void 0 && (r[w.id] = w.__labelNumber ?? u + 1);
      });
      const n = Array.from({ length: a }).map((w, u) => {
        const l = o[u];
        if (l) {
          const f = r[l.id] ?? l.__labelNumber ?? u + 1;
          return { ...l, __labelNumber: f };
        }
      });
      y.value = n;
    }
    I(() => e.videos, (t) => {
      if (!Array.isArray(t)) {
        console.warn("[VideoGridLayout] Invalid videos prop, expected array");
        return;
      }
      _(t);
    }, { flush: "post" });
    let E = !1;
    I(y, (t) => {
      !E && Array.isArray(t) && x("videosChange", t);
    });
    const Y = g(() => {
      const t = C[p.value];
      return t || (console.warn(`[VideoGridLayout] Invalid layout type: ${p.value}, fallback to '4'`), C[4]);
    }), m = g(() => pt(p.value)), V = g(() => {
      var t;
      return ((t = Y.value) == null ? void 0 : t.count) || 4;
    }), D = g(() => y.value.slice(0, V.value).map((t) => t).filter(Boolean));
    _(e.videos), I(V, () => {
      _(e.videos);
    });
    const F = g(() => {
      const t = m.value.map((o, a) => ({ p: o, idx: a }));
      return t.sort((o, a) => o.p.row === a.p.row ? (o.p.col || 0) - (a.p.col || 0) : (o.p.row || 0) - (a.p.row || 0)), t.map((o) => o.idx);
    }), v = O(-1), b = O(-1), $ = R(null), h = R(null);
    let A = null, L = null;
    const Z = g(() => {
      const t = Y.value;
      return {
        display: "grid",
        gridTemplateColumns: (t == null ? void 0 : t.colTemplate) || `repeat(${(t == null ? void 0 : t.cols) || 2}, 1fr)`,
        gridTemplateRows: (t == null ? void 0 : t.rowTemplate) || `repeat(${(t == null ? void 0 : t.rows) || 2}, 1fr)`,
        gap: "4px",
        width: e.width || "100%",
        height: e.height || "100%"
      };
    }), tt = g(() => ({
      width: e.width || "100%",
      height: e.height || "100%"
    }));
    function et(t) {
      const o = t, a = F.value[o];
      if (Array.isArray(e.placeholders) && e.placeholders[a] !== void 0)
        return String(e.placeholders[a]);
      if (typeof e.placeholderText == "function")
        try {
          return e.placeholderText(o);
        } catch {
          return String(o + 1);
        }
      return e.placeholderText ? String(e.placeholderText) : String(o + 1);
    }
    function ot(t) {
      const o = m.value[t];
      return !o || typeof o.col != "number" || typeof o.row != "number" ? {} : {
        gridColumn: `${o.col} / span ${o.colSpan}`,
        gridRow: `${o.row} / span ${o.rowSpan}`
      };
    }
    function rt(t) {
      const o = m.value[t];
      return (o == null ? void 0 : o.isMain) || !1;
    }
    function at(t) {
      p.value = t, x("layoutChange", p.value);
    }
    function B() {
      if ($.value && document.body.contains($.value)) {
        try {
          document.body.removeChild($.value);
        } catch (t) {
          console.warn("[VideoGridLayout] Failed to cleanup drag image:", t);
        }
        $.value = null;
      }
      if (h.value && document.body.contains(h.value)) {
        try {
          document.body.removeChild(h.value);
        } catch {
        }
        h.value = null;
      }
      A && (document.removeEventListener("mousemove", A), A = null), L && (document.removeEventListener("drag", L), L = null);
    }
    function lt(t, o) {
      if (o < 0 || o >= y.value.length) {
        console.warn("[VideoGridLayout] Invalid drag index:", o);
        return;
      }
      if (v.value = o, !t.dataTransfer) return;
      t.dataTransfer.effectAllowed = "move";
      const r = t.target.closest(".video-item");
      if (r)
        try {
          if (B(), t.dataTransfer) {
            t.dataTransfer.effectAllowed = "move";
            const l = new Image();
            l.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", t.dataTransfer.setDragImage(l, 0, 0);
          }
          const n = r.cloneNode(!0);
          n.querySelectorAll(".progress-bar, .play-button").forEach((l) => l.remove()), n.querySelectorAll('[style*="transition"], [style*="animation"], .video-icon').forEach((l) => {
            try {
              l.style.transition = "none", l.style.animation = "none";
            } catch {
            }
          }), n.style.position = "fixed", n.style.margin = "0", n.style.pointerEvents = "none", n.style.opacity = Nt, n.style.zIndex = "9999", document.body.appendChild(n), h.value = n;
          try {
            const l = r.getBoundingClientRect();
            n.style.width = `${l.width}px`, n.style.height = `${l.height}px`;
          } catch {
          }
          A = (l) => {
            if (!h.value) return;
            const f = h.value.offsetWidth || 0, T = h.value.offsetHeight || 0, G = Math.max(0, l.clientX - f / 2), M = Math.max(0, l.clientY - T / 2);
            h.value.style.left = `${G}px`, h.value.style.top = `${M}px`;
          }, document.addEventListener("mousemove", A), L = (l) => {
            if (!h.value) return;
            const f = h.value.offsetWidth || 0, T = h.value.offsetHeight || 0, G = Math.max(0, (l.clientX || 0) - f / 2), M = Math.max(0, (l.clientY || 0) - T / 2);
            h.value.style.left = `${G}px`, h.value.style.top = `${M}px`;
          }, document.addEventListener("drag", L), r.style.opacity = String(Ot), r.style.cursor = Rt, r.style.borderColor = "#ff6b6b";
        } catch (n) {
          console.error("[VideoGridLayout] Drag start error:", n), B();
        }
    }
    function nt(t, o) {
      t.preventDefault(), t.stopPropagation();
      const a = v.value;
      if (a === -1 || a === o) {
        v.value = -1;
        return;
      }
      if (o < 0 || o >= m.value.length) {
        console.warn("[VideoGridLayout] Invalid drop index:", o), v.value = -1;
        return;
      }
      try {
        const r = t.currentTarget;
        r && (r.style.backgroundColor = "rgba(66, 184, 131, 0.3)", r.style.borderColor = "#42b883", setTimeout(() => {
          r.style.backgroundColor = "", r.style.borderColor = "";
        }, 200));
        const n = [...y.value], w = n[a], u = n[o];
        n[a] = u, n[o] = w, E = !0, y.value = n, setTimeout(() => {
          E = !1, x("videosChange", y.value.filter(Boolean));
        }, 0);
      } catch (r) {
        console.error("[VideoGridLayout] Drop error:", r);
      } finally {
        v.value = -1;
      }
    }
    function ct(t, o) {
      t.preventDefault(), v.value !== -1 && v.value !== o && (b.value = o);
    }
    function it(t, o) {
      t.preventDefault();
      const a = t.target, r = t.relatedTarget;
      a.contains(r) || b.value === o && (b.value = -1);
    }
    function st(t) {
      const a = t.target.closest(".video-item");
      a && (a.style.opacity = "1", a.style.cursor = "move", a.style.borderColor = ""), B(), v.value = -1, b.value = -1;
    }
    return dt(() => {
      B();
    }), (t, o) => (s(), i("div", {
      class: "video-grid-layout",
      role: "application",
      "aria-label": "视频分屏布局",
      style: N(tt.value)
    }, [
      c.showToolbar ? (s(), i("div", Bt, [
        o[1] || (o[1] = d("div", { class: "toolbar-title" }, "分屏布局", -1)),
        d("div", It, [
          (s(!0), i(U, null, z(K.value, (a) => {
            var r, n, w;
            return s(), i("button", {
              key: a,
              class: j(["layout-btn", { active: p.value === a }]),
              onClick: (u) => at(a),
              title: ((r = P(C)[a]) == null ? void 0 : r.label) || "",
              "aria-label": `切换到${((n = P(C)[a]) == null ? void 0 : n.label) || ""}布局`,
              "aria-pressed": p.value === a,
              type: "button"
            }, [
              ht(J, { type: a }, null, 8, ["type"]),
              d("span", Et, q(((w = P(C)[a]) == null ? void 0 : w.label) || ""), 1)
            ], 10, _t);
          }), 128))
        ])
      ])) : X("", !0),
      d("div", Vt, [
        d("div", {
          class: "video-grid",
          style: N(Z.value)
        }, [
          (s(!0), i(U, null, z(m.value, (a, r) => {
            var n, w, u;
            return s(), i("div", {
              key: ((n = D.value[r]) == null ? void 0 : n.id) ?? r,
              class: j(["video-item", {
                "main-video": rt(r),
                dragging: v.value === r,
                "drag-over": b.value === r && v.value !== r
              }]),
              style: N(ot(r)),
              draggable: !0,
              "aria-label": `视频 ${r + 1}: ${((w = D.value[r]) == null ? void 0 : w.title) || ((u = D.value[r]) == null ? void 0 : u.id) || ""}`,
              role: "article",
              tabindex: "0",
              onDragstart: (l) => lt(l, r),
              onDragover: o[0] || (o[0] = wt(() => {
              }, ["prevent"])),
              onDragenter: (l) => ct(l, r),
              onDragleave: (l) => it(l, r),
              onDrop: (l) => nt(l, r),
              onDragend: st
            }, [
              ut(t.$slots, "video", {
                video: D.value[r],
                index: r
              }, () => [
                d("div", Gt, [
                  d("div", Mt, q(et(F.value.indexOf(r))), 1)
                ])
              ], !0)
            ], 46, Tt);
          }), 128))
        ], 4)
      ])
    ], 4));
  }
}), Ht = /* @__PURE__ */ Q(Pt, [["__scopeId", "data-v-f0958f8e"]]), Yt = {
  VideoGridLayout: Ht,
  VideoLayoutIcon: J
}, Ut = {
  install(c) {
    Object.entries(Yt).forEach(([k, e]) => {
      c.component(k, e);
    });
  }
};
export {
  C as LAYOUT_CONFIGS,
  Ht as VideoGridLayout,
  J as VideoLayoutIcon,
  Ut as default,
  vt as getAllLayoutTypes,
  pt as getLayoutPositions
};
