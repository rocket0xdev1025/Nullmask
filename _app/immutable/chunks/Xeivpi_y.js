function j() {}
const V = (t) => t;
function T(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function H(t) {
  return t();
}
function X() {
  return Object.create(null);
}
function P(t) {
  t.forEach(H);
}
function Y(t) {
  return typeof t == "function";
}
function Z(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
function $(t) {
  return Object.keys(t).length === 0;
}
function B(t, ...e) {
  if (t == null) {
    for (const i of e) i(void 0);
    return j;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function tt(t, e, n) {
  t.$$.on_destroy.push(B(e, n));
}
function et(t, e, n, i) {
  if (t) {
    const c = N(t, e, n, i);
    return t[0](c);
  }
}
function N(t, e, n, i) {
  return t[1] && i ? T(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function nt(t, e, n, i) {
  return t[2], e.dirty;
}
function it(t, e, n, i, c, s) {
  if (c) {
    const r = N(e, n, i, s);
    t.p(r, c);
  }
}
function ct(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function rt(t) {
  return t ?? "";
}
function lt(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"];
}
let m = !1;
function st() {
  m = !0;
}
function ot() {
  m = !1;
}
function L(t, e, n, i) {
  for (; t < e; ) {
    const c = t + ((e - t) >> 1);
    n(c) <= i ? (t = c + 1) : (e = c);
  }
  return t;
}
function O(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const l = [];
    for (let u = 0; u < e.length; u++) {
      const a = e[u];
      a.claim_order !== void 0 && l.push(a);
    }
    e = l;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let c = 0;
  for (let l = 0; l < e.length; l++) {
    const u = e[l].claim_order,
      a =
        (c > 0 && e[n[c]].claim_order <= u
          ? c + 1
          : L(1, c, (S) => e[n[S]].claim_order, u)) - 1;
    i[l] = n[a] + 1;
    const v = a + 1;
    (n[v] = l), (c = Math.max(v, c));
  }
  const s = [],
    r = [];
  let o = e.length - 1;
  for (let l = n[c] + 1; l != 0; l = i[l - 1]) {
    for (s.push(e[l - 1]); o >= l; o--) r.push(e[o]);
    o--;
  }
  for (; o >= 0; o--) r.push(e[o]);
  s.reverse(), r.sort((l, u) => l.claim_order - u.claim_order);
  for (let l = 0, u = 0; l < r.length; l++) {
    for (; u < s.length && r[l].claim_order >= s[u].claim_order; ) u++;
    const a = u < s.length ? s[u] : null;
    t.insertBefore(r[l], a);
  }
}
function R(t, e) {
  t.appendChild(e);
}
function q(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function ut(t) {
  const e = k("style");
  return (e.textContent = "/* empty */"), F(q(t), e), e.sheet;
}
function F(t, e) {
  return R(t.head || t, e), e.sheet;
}
function M(t, e) {
  if (m) {
    for (
      O(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function at(t, e, n) {
  m && !n
    ? M(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function ft(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function _t(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function k(t) {
  return document.createElement(t);
}
function z(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function w(t) {
  return document.createTextNode(t);
}
function dt() {
  return w(" ");
}
function ht() {
  return w("");
}
function mt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function pt(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function yt(t) {
  return t.dataset.svelteH;
}
function bt(t) {
  return Array.from(t.childNodes);
}
function I(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function A(t, e, n, i, c = !1) {
  I(t);
  const s = (() => {
    for (let r = t.claim_info.last_index; r < t.length; r++) {
      const o = t[r];
      if (e(o)) {
        const l = n(o);
        return (
          l === void 0 ? t.splice(r, 1) : (t[r] = l),
          c || (t.claim_info.last_index = r),
          o
        );
      }
    }
    for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
      const o = t[r];
      if (e(o)) {
        const l = n(o);
        return (
          l === void 0 ? t.splice(r, 1) : (t[r] = l),
          c
            ? l === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = r),
          o
        );
      }
    }
    return i();
  })();
  return (
    (s.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    s
  );
}
function D(t, e, n, i) {
  return A(
    t,
    (c) => c.nodeName === e,
    (c) => {
      const s = [];
      for (let r = 0; r < c.attributes.length; r++) {
        const o = c.attributes[r];
        n[o.name] || s.push(o.name);
      }
      s.forEach((r) => c.removeAttribute(r));
    },
    () => i(e)
  );
}
function gt(t, e, n) {
  return D(t, e, n, k);
}
function xt(t, e, n) {
  return D(t, e, n, z);
}
function U(t, e) {
  return A(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => w(e),
    !0
  );
}
function wt(t) {
  return U(t, " ");
}
function vt(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function Et(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function Nt(t, e, n) {
  t.classList.toggle(e, !!n);
}
function W(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
function kt(t, e) {
  const n = [];
  let i = 0;
  for (const c of e.childNodes)
    if (c.nodeType === 8) {
      const s = c.textContent.trim();
      s === `HEAD_${t}_END`
        ? ((i -= 1), n.push(c))
        : s === `HEAD_${t}_START` && ((i += 1), n.push(c));
    } else i > 0 && n.push(c);
  return n;
}
function At(t, e) {
  return new t(e);
}
let h;
function y(t) {
  h = t;
}
function p() {
  if (!h) throw new Error("Function called outside component initialization");
  return h;
}
function Dt(t) {
  p().$$.on_mount.push(t);
}
function Ct(t) {
  p().$$.after_update.push(t);
}
function St(t) {
  p().$$.on_destroy.push(t);
}
function jt() {
  const t = p();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const c = t.$$.callbacks[e];
    if (c) {
      const s = W(e, n, { cancelable: i });
      return (
        c.slice().forEach((r) => {
          r.call(t, s);
        }),
        !s.defaultPrevented
      );
    }
    return !0;
  };
}
const d = [],
  E = [];
let _ = [];
const g = [],
  C = Promise.resolve();
let x = !1;
function G() {
  x || ((x = !0), C.then(K));
}
function Tt() {
  return G(), C;
}
function J(t) {
  _.push(t);
}
function Ht(t) {
  g.push(t);
}
const b = new Set();
let f = 0;
function K() {
  if (f !== 0) return;
  const t = h;
  do {
    try {
      for (; f < d.length; ) {
        const e = d[f];
        f++, y(e), Q(e.$$);
      }
    } catch (e) {
      throw ((d.length = 0), (f = 0), e);
    }
    for (y(null), d.length = 0, f = 0; E.length; ) E.pop()();
    for (let e = 0; e < _.length; e += 1) {
      const n = _[e];
      b.has(n) || (b.add(n), n());
    }
    _.length = 0;
  } while (d.length);
  for (; g.length; ) g.pop()();
  (x = !1), b.clear(), y(t);
}
function Q(t) {
  if (t.fragment !== null) {
    t.update(), P(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(J);
  }
}
function Pt(t) {
  const e = [],
    n = [];
  _.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (_ = e);
}
export {
  nt as $,
  V as A,
  J as B,
  W as C,
  $ as D,
  h as E,
  X as F,
  K as G,
  y as H,
  Pt as I,
  H as J,
  st as K,
  ot as L,
  d as M,
  G as N,
  Nt as O,
  mt as P,
  xt as Q,
  z as R,
  _t as S,
  kt as T,
  yt as U,
  lt as V,
  jt as W,
  St as X,
  et as Y,
  it as Z,
  ct as _,
  vt as a,
  Ht as a0,
  rt as a1,
  M as b,
  gt as c,
  ft as d,
  bt as e,
  U as f,
  wt as g,
  k as h,
  at as i,
  dt as j,
  tt as k,
  ht as l,
  Ct as m,
  j as n,
  Dt as o,
  Tt as p,
  At as q,
  pt as r,
  Z as s,
  w as t,
  Et as u,
  E as v,
  q as w,
  ut as x,
  P as y,
  Y as z,
};
