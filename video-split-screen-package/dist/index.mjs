import { defineComponent as N, createElementBlock as c, openBlock as i, createCommentVNode as P, createElementVNode as d, createStaticVNode as k, ref as $, watch as I, computed as p, shallowRef as T, onBeforeUnmount as et, normalizeStyle as _, Fragment as O, renderList as E, unref as A, normalizeClass as M, createVNode as rt, toDisplayString as R, withModifiers as at, renderSlot as lt } from "vue";
const g = {
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
}, B = {};
function nt(l) {
  if (B[l])
    return B[l];
  const o = {
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
  }[l] || [];
  return o.length > 0 && (B[l] = o), o;
}
function ct() {
  return Object.keys(g);
}
const it = { class: "layout-icon" }, dt = {
  key: 0,
  viewBox: "0 0 48 48",
  fill: "none"
}, st = {
  key: 1,
  viewBox: "0 0 48 48",
  fill: "none"
}, ht = {
  key: 2,
  viewBox: "0 0 48 48",
  fill: "none"
}, wt = {
  key: 3,
  viewBox: "0 0 48 48",
  fill: "none"
}, ut = {
  key: 4,
  viewBox: "0 0 48 48",
  fill: "none"
}, pt = {
  key: 5,
  viewBox: "0 0 48 48",
  fill: "none"
}, vt = {
  key: 6,
  viewBox: "0 0 48 48",
  fill: "none"
}, yt = {
  key: 7,
  viewBox: "0 0 48 48",
  fill: "none"
}, kt = {
  key: 8,
  viewBox: "0 0 54 48",
  fill: "none"
}, St = {
  key: 9,
  viewBox: "0 0 48 48",
  fill: "none"
}, gt = {
  key: 10,
  viewBox: "0 0 48 48",
  fill: "none"
}, Ct = /* @__PURE__ */ N({
  __name: "VideoLayoutIcon",
  props: {
    type: {}
  },
  setup(l) {
    return (v, o) => (i(), c("div", it, [
      l.type === "1" ? (i(), c("svg", dt, [...o[0] || (o[0] = [
        d("rect", {
          x: "4",
          y: "4",
          width: "40",
          height: "40",
          stroke: "currentColor",
          "stroke-width": "2"
        }, null, -1)
      ])])) : l.type === "2" ? (i(), c("svg", st, [...o[1] || (o[1] = [
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
      ])])) : l.type === "3" ? (i(), c("svg", ht, [...o[2] || (o[2] = [
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
      ])])) : l.type === "4" ? (i(), c("svg", wt, [...o[3] || (o[3] = [
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
      ])])) : l.type === "6" ? (i(), c("svg", ut, [...o[4] || (o[4] = [
        k('<rect x="3" y="4" width="13" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="18" y="4" width="12" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="32" y="4" width="13" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="3" y="24" width="13" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="18" y="24" width="12" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="32" y="24" width="13" height="18" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect>', 6)
      ])])) : l.type === "7" ? (i(), c("svg", pt, [...o[5] || (o[5] = [
        k('<rect x="4" y="4" width="19" height="19" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="25" y="4" width="19" height="19" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="4" y="25" width="19" height="19" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="25" y="25" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="35" y="25" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="25" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="35" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect>', 7)
      ])])) : l.type === "8" ? (i(), c("svg", vt, [...o[6] || (o[6] = [
        k('<rect x="4" y="4" width="28" height="29" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="34" y="4" width="10" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="14.5" width="10" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="24.5" width="10" height="8.5" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="14" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="24" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="35" width="10" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect>', 8)
      ])])) : l.type === "9" ? (i(), c("svg", yt, [...o[7] || (o[7] = [
        k('<rect x="4" y="4" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="18" y="4" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="32" y="4" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="4" y="18" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="18" y="18" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="32" y="18" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="4" y="32" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="18" y="32" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect><rect x="32" y="32" width="12" height="12" stroke="currentColor" stroke-width="1.5" data-v-31e0404d></rect>', 9)
      ])])) : l.type === "10" ? (i(), c("svg", kt, [...o[8] || (o[8] = [
        k('<rect x="3" y="4" width="36" height="29" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="41" y="4" width="10" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="41" y="14.5" width="10" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="41" y="24.5" width="10" height="8.5" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="3" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="11" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="19" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="27" y="35" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="35" y="35" width="6" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="42" y="35" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect>', 10)
      ])])) : l.type === "13" ? (i(), c("svg", St, [...o[9] || (o[9] = [
        k('<rect x="4" y="4" width="18" height="18" stroke="currentColor" stroke-width="2" data-v-31e0404d></rect><rect x="24" y="4" width="8" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="4" width="10" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="24" y="14" width="8" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="14" width="10" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="24" width="8" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="14" y="24" width="8" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="24" y="24" width="8" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="24" width="10" height="8" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="34" width="8" height="10" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="14" y="34" width="8" height="10" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="24" y="34" width="8" height="10" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="34" y="34" width="10" height="10" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect>', 13)
      ])])) : l.type === "16" ? (i(), c("svg", gt, [...o[10] || (o[10] = [
        k('<rect x="4" y="4" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="15" y="4" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="26" y="4" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="37" y="4" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="15" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="15" y="15" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="26" y="15" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="37" y="15" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="26" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="15" y="26" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="26" y="26" width="9" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="37" y="26" width="7" height="9" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="4" y="37" width="9" height="7" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="15" y="37" width="9" height="7" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="26" y="37" width="9" height="7" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect><rect x="37" y="37" width="7" height="7" stroke="currentColor" stroke-width="1.2" data-v-31e0404d></rect>', 16)
      ])])) : P("", !0)
    ]));
  }
}), F = (l, v) => {
  const o = l.__vccOpts || l;
  for (const [C, h] of v)
    o[C] = h;
  return o;
}, U = /* @__PURE__ */ F(Ct, [["__scopeId", "data-v-31e0404d"]]), xt = {
  key: 0,
  class: "layout-toolbar",
  role: "toolbar",
  "aria-label": "布局切换工具栏"
}, ft = { class: "layout-buttons" }, mt = ["onClick", "title", "aria-label", "aria-pressed"], bt = { class: "layout-label" }, Dt = {
  class: "video-grid-container",
  role: "region",
  "aria-label": "视频网格"
}, Lt = ["aria-label", "onDragstart", "onDragenter", "onDragleave", "onDrop"], $t = {
  key: 0,
  class: "video-placeholder"
}, It = { class: "placeholder-number" }, _t = {
  key: 1,
  style: { width: "100%", height: "100%" }
}, At = 0.5, Bt = "grabbing", Vt = "0.8", Gt = /* @__PURE__ */ N({
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
  setup(l, { emit: v }) {
    const o = l, C = v, h = $(o.layout);
    I(() => o.layout, (t) => {
      h.value = t;
    });
    const Y = p(() => o.availableLayouts && o.availableLayouts.length > 0 ? o.availableLayouts : ct()), s = T([...o.videos]);
    I(() => o.videos, (t) => {
      if (!Array.isArray(t)) {
        console.warn("[VideoGridLayout] Invalid videos prop, expected array");
        return;
      }
      (s.value.length !== t.length || s.value.some((e, a) => {
        var r;
        return e.id !== ((r = t[a]) == null ? void 0 : r.id);
      })) && (s.value = [...t]);
    }, { flush: "post" });
    let D = !1;
    I(s, (t) => {
      !D && Array.isArray(t) && C("videosChange", t);
    });
    const V = p(() => {
      const t = g[h.value];
      return t || (console.warn(`[VideoGridLayout] Invalid layout type: ${h.value}, fallback to '4'`), g[4]);
    }), b = p(() => nt(h.value)), j = p(() => {
      var t;
      return ((t = V.value) == null ? void 0 : t.count) || 4;
    }), S = p(() => s.value.slice(0, j.value)), G = p(() => {
      const t = b.value.map((e, a) => ({ p: e, idx: a }));
      return t.sort((e, a) => e.p.row === a.p.row ? (e.p.col || 0) - (a.p.col || 0) : (e.p.row || 0) - (a.p.row || 0)), t.map((e) => e.idx);
    }), w = $(-1), x = $(-1), f = T(null), z = p(() => {
      const t = V.value;
      return {
        display: "grid",
        gridTemplateColumns: (t == null ? void 0 : t.colTemplate) || `repeat(${(t == null ? void 0 : t.cols) || 2}, 1fr)`,
        gridTemplateRows: (t == null ? void 0 : t.rowTemplate) || `repeat(${(t == null ? void 0 : t.rows) || 2}, 1fr)`,
        gap: "4px",
        width: o.width || "100%",
        height: o.height || "100%"
      };
    }), H = p(() => ({
      width: o.width || "100%",
      height: o.height || "100%"
    }));
    function W(t) {
      const e = t, a = G.value[e];
      if (S.value[a]) return "";
      if (Array.isArray(o.placeholders) && o.placeholders[a] !== void 0)
        return String(o.placeholders[a]);
      if (typeof o.placeholderText == "function")
        try {
          return o.placeholderText(e);
        } catch {
          return String(e + 1);
        }
      return o.placeholderText ? String(o.placeholderText) : String(e + 1);
    }
    function q(t) {
      const e = b.value[t];
      return !e || typeof e.col != "number" || typeof e.row != "number" ? {} : {
        gridColumn: `${e.col} / span ${e.colSpan}`,
        gridRow: `${e.row} / span ${e.rowSpan}`
      };
    }
    function J(t) {
      const e = b.value[t];
      return (e == null ? void 0 : e.isMain) || !1;
    }
    function K(t) {
      h.value = t, C("layoutChange", h.value);
    }
    function m() {
      if (f.value && document.body.contains(f.value)) {
        try {
          document.body.removeChild(f.value);
        } catch (t) {
          console.warn("[VideoGridLayout] Failed to cleanup drag image:", t);
        }
        f.value = null;
      }
    }
    function Q(t, e) {
      if (e < 0 || e >= s.value.length) {
        console.warn("[VideoGridLayout] Invalid drag index:", e);
        return;
      }
      if (w.value = e, !t.dataTransfer) return;
      t.dataTransfer.effectAllowed = "move";
      const r = t.target.closest(".video-item");
      if (r)
        try {
          m();
          const n = r.cloneNode(!0);
          n.style.width = `${r.offsetWidth}px`, n.style.height = `${r.offsetHeight}px`, n.style.opacity = Vt, n.style.position = "absolute", n.style.top = "-9999px", n.style.pointerEvents = "none", document.body.appendChild(n), f.value = n, t.dataTransfer.setDragImage(n, r.offsetWidth / 2, r.offsetHeight / 2), setTimeout(() => {
            m();
          }, 100), r.style.opacity = String(At), r.style.cursor = Bt;
        } catch (n) {
          console.error("[VideoGridLayout] Drag start error:", n), m();
        }
    }
    function X(t, e) {
      t.preventDefault(), t.stopPropagation();
      const a = w.value;
      if (a === -1 || a === e) {
        w.value = -1;
        return;
      }
      if (e < 0 || e >= s.value.length) {
        console.warn("[VideoGridLayout] Invalid drop index:", e), w.value = -1;
        return;
      }
      try {
        const r = s.value[a], n = s.value[e];
        if (r && n) {
          D = !0;
          const u = [...s.value];
          u[a] = n, u[e] = r, s.value = u, setTimeout(() => {
            D = !1, C("videosChange", s.value);
          }, 0);
        }
      } catch (r) {
        console.error("[VideoGridLayout] Drop error:", r);
      } finally {
        w.value = -1;
      }
    }
    function Z(t, e) {
      t.preventDefault(), w.value !== -1 && w.value !== e && (x.value = e);
    }
    function tt(t, e) {
      t.preventDefault();
      const a = t.target, r = t.relatedTarget;
      a.contains(r) || x.value === e && (x.value = -1);
    }
    function ot(t) {
      const a = t.target.closest(".video-item");
      a && (a.style.opacity = "1", a.style.cursor = "move"), m(), w.value = -1, x.value = -1;
    }
    return et(() => {
      m();
    }), (t, e) => (i(), c("div", {
      class: "video-grid-layout",
      role: "application",
      "aria-label": "视频分屏布局",
      style: _(H.value)
    }, [
      l.showToolbar ? (i(), c("div", xt, [
        e[1] || (e[1] = d("div", { class: "toolbar-title" }, "分屏布局", -1)),
        d("div", ft, [
          (i(!0), c(O, null, E(Y.value, (a) => {
            var r, n, u;
            return i(), c("button", {
              key: a,
              class: M(["layout-btn", { active: h.value === a }]),
              onClick: (L) => K(a),
              title: ((r = A(g)[a]) == null ? void 0 : r.label) || "",
              "aria-label": `切换到${((n = A(g)[a]) == null ? void 0 : n.label) || ""}布局`,
              "aria-pressed": h.value === a,
              type: "button"
            }, [
              rt(U, { type: a }, null, 8, ["type"]),
              d("span", bt, R(((u = A(g)[a]) == null ? void 0 : u.label) || ""), 1)
            ], 10, mt);
          }), 128))
        ])
      ])) : P("", !0),
      d("div", Dt, [
        d("div", {
          class: "video-grid",
          style: _(z.value)
        }, [
          (i(!0), c(O, null, E(b.value, (a, r) => {
            var n, u, L;
            return i(), c("div", {
              key: ((n = S.value[r]) == null ? void 0 : n.id) ?? r,
              class: M(["video-item", {
                "main-video": J(r),
                dragging: w.value === r,
                "drag-over": x.value === r && w.value !== r
              }]),
              style: _(q(r)),
              draggable: !0,
              "aria-label": `视频 ${r + 1}: ${((u = S.value[r]) == null ? void 0 : u.title) || ((L = S.value[r]) == null ? void 0 : L.id) || ""}`,
              role: "article",
              tabindex: "0",
              onDragstart: (y) => Q(y, r),
              onDragover: e[0] || (e[0] = at(() => {
              }, ["prevent"])),
              onDragenter: (y) => Z(y, r),
              onDragleave: (y) => tt(y, r),
              onDrop: (y) => X(y, r),
              onDragend: ot
            }, [
              lt(t.$slots, "video", {
                video: S.value[r],
                index: r
              }, () => [
                S.value[r] ? (i(), c("div", _t)) : (i(), c("div", $t, [
                  d("div", It, R(W(G.value.indexOf(r))), 1)
                ]))
              ], !0)
            ], 46, Lt);
          }), 128))
        ], 4)
      ])
    ], 4));
  }
}), Tt = /* @__PURE__ */ F(Gt, [["__scopeId", "data-v-473a71fa"]]), Ot = {
  VideoGridLayout: Tt,
  VideoLayoutIcon: U
}, Mt = {
  install(l) {
    Object.entries(Ot).forEach(([v, o]) => {
      l.component(v, o);
    });
  }
};
export {
  g as LAYOUT_CONFIGS,
  Tt as VideoGridLayout,
  U as VideoLayoutIcon,
  Mt as default,
  ct as getAllLayoutTypes,
  nt as getLayoutPositions
};
