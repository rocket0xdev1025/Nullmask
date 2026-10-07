import {
  A as Xo,
  V as vo,
  s as pn,
  n as Br,
  d as O,
  O as B,
  r as f,
  i as Ne,
  b as te,
  P as Go,
  c as Te,
  e as ue,
  Q as st,
  h as Ee,
  R as lt,
  W as jo,
  o as Ui,
  X as qo,
  v as Ai,
  u as Yr,
  g as Je,
  l as Ln,
  j as et,
  k as Ni,
  B as Zi,
  a as Wo,
  f as Uo,
  U as ri,
  t as Zo,
  p as Qo,
  T as Ko,
  Y as Jo,
  Z as es,
  _ as ts,
  $ as rs,
} from "../chunks/Xeivpi_y.js";
import {
  S as gn,
  i as mn,
  d as Wr,
  t as Tt,
  a as ct,
  g as ci,
  c as hi,
  m as Ur,
  e as Zr,
  b as Qr,
  f as Mo,
  h as Po,
  j as bo,
} from "../chunks/BDmaIRKY.js";
import { g as ns } from "../chunks/D0QH3NT1.js";
import { a as is, b as os } from "../chunks/2dDXtT8r.js";
import { p as ss } from "../chunks/Cz9bVebP.js";
import {
  g as Un,
  M as Ao,
  c as ot,
  H as zn,
  L as ls,
  S as Xi,
  m as as,
} from "../chunks/D6j65Y_r.js";
import { w as fs } from "../chunks/BhrWhj_C.js";
import { c as us } from "../chunks/Bf1hT9JQ.js";
var Qi =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  ji = { exports: {} };
(function (_, o) {
  (function (a, u) {
    u(o);
  })(Qi, function (a) {
    function u(Se, ae) {
      for (var ce = 0; ce < ae.length; ce++) {
        var it = ae[ce];
        (it.enumerable = it.enumerable || !1),
          (it.configurable = !0),
          "value" in it && (it.writable = !0),
          Object.defineProperty(Se, it.key, it);
      }
    }
    function d(Se, ae, ce) {
      return ae && u(Se.prototype, ae), Se;
    }
    /*!
     * ScrollSmoother 3.13.0
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license
     * @author: Jack Doyle, jack@greensock.com
     */ var h,
      D,
      L,
      K,
      F,
      V,
      U,
      fe,
      $,
      Y,
      q,
      G,
      we,
      ie,
      xe,
      at = function () {
        return typeof window < "u";
      },
      oe = function () {
        return h || (at() && (h = window.gsap) && h.registerPlugin && h);
      },
      nt = function (ae) {
        return Math.round(ae * 1e5) / 1e5 || 0;
      },
      Ce = function (ae) {
        return $.maxScroll(ae || L);
      },
      J = function (ae, ce) {
        var it = ae.parentNode || F,
          tr = ae.getBoundingClientRect(),
          Ge = it.getBoundingClientRect(),
          Et = Ge.top - tr.top,
          Ze = Ge.bottom - tr.bottom,
          Re = (Math.abs(Et) > Math.abs(Ze) ? Et : Ze) / (1 - ce),
          Qe = -Re * ce,
          Dr,
          Fe;
        return (
          Re > 0 &&
            ((Dr = Ge.height / (L.innerHeight + Ge.height)),
            (Fe =
              Dr === 0.5
                ? Ge.height * 2
                : Math.min(Ge.height, Math.abs((-Re * Dr) / (2 * Dr - 1))) *
                  2 *
                  (ce || 1)),
            (Qe += ce ? -Fe * ce : -Fe / 2),
            (Re += Fe)),
          { change: Re, offset: Qe }
        );
      },
      ve = function (ae) {
        var ce = K.querySelector(".ScrollSmoother-wrapper");
        return (
          ce ||
            ((ce = K.createElement("div")),
            ce.classList.add("ScrollSmoother-wrapper"),
            ae.parentNode.insertBefore(ce, ae),
            ce.appendChild(ae)),
          ce
        );
      },
      wt = (function () {
        function Se(ae) {
          var ce = this;
          D ||
            Se.register(h) ||
            console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
            (ae = this.vars = ae || {}),
            Y && Y.kill(),
            (Y = this),
            ie(this);
          var it = ae,
            tr = it.smoothTouch,
            Ge = it.onUpdate,
            Et = it.onStop,
            Ze = it.smooth,
            Re = it.onFocusIn,
            Qe = it.normalizeScroll,
            Dr = it.wholePixels,
            Fe,
            ft,
            _r,
            ze,
            je,
            jt,
            Ye,
            Z,
            Tr,
            le,
            Me,
            Nt,
            ge,
            Ft,
            rr = this,
            vr = ae.effectsPrefix || "",
            qt = $.getScrollFunc(L),
            Rt =
              $.isTouch === 1
                ? tr === !0
                  ? 0.8
                  : parseFloat(tr) || 0
                : Ze === 0 || Ze === !1
                ? 0
                : parseFloat(Ze) || 0.8,
            bt = (Rt && +ae.speed) || 1,
            De = 0,
            Er = 0,
            kt = 1,
            We = G(0),
            Ct = function () {
              return We.update(-De);
            },
            nr = { y: 0 },
            ur = function () {
              return (Fe.style.overflow = "visible");
            },
            Hr,
            ir = function (n) {
              n.update();
              var m = n.getTween();
              m && (m.pause(), (m._time = m._dur), (m._tTime = m._tDur)),
                (Hr = !1),
                n.animation.progress(n.progress, !0);
            },
            Kr = function (n, m) {
              ((n !== De && !le) || m) &&
                (Dr && (n = Math.round(n)),
                Rt &&
                  ((Fe.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    n +
                    ", 0, 1)"),
                  (Fe._gsap.y = n + "px")),
                (Er = n - De),
                (De = n),
                $.isUpdating || Se.isRefreshing || $.update());
            },
            ut = function (n) {
              return arguments.length
                ? (n < 0 && (n = 0),
                  (nr.y = -n),
                  (Hr = !0),
                  le ? (De = -n) : Kr(-n),
                  $.isRefreshing ? ze.update() : qt(n / bt),
                  this)
                : -De;
            },
            Mr =
              typeof ResizeObserver < "u" &&
              ae.autoResize !== !1 &&
              new ResizeObserver(function () {
                if (!$.isRefreshing) {
                  var c = Ce(ft) * bt;
                  c < -De && ut(c), xe.restart(!0);
                }
              }),
            Ir,
            Wt = function (n) {
              (ft.scrollTop = 0),
                !(
                  (n.target.contains && n.target.contains(ft)) ||
                  (Re && Re(ce, n) === !1)
                ) &&
                  ($.isInViewport(n.target) ||
                    n.target === Ir ||
                    ce.scrollTo(n.target, !1, "center center"),
                  (Ir = n.target));
            },
            S = function (n, m) {
              if (n < m.start) return n;
              var z = isNaN(m.ratio) ? 1 : m.ratio,
                y = m.end - m.start,
                P = n - m.start,
                M = m.offset || 0,
                W = m.pins || [],
                X = W.offset || 0,
                j =
                  (m._startClamp && m.start <= 0) || (m.pins && m.pins.offset)
                    ? 0
                    : m._endClamp && m.end === Ce()
                    ? 1
                    : 0.5;
              return (
                W.forEach(function (se) {
                  (y -= se.distance), se.nativeStart <= n && (P -= se.distance);
                }),
                X && (P *= (y - X / z) / y),
                n + (P - M * j) / z - P
              );
            },
            i = function c(n, m, z) {
              z || (n.pins.length = n.pins.offset = 0);
              var y = n.pins,
                P = n.markers,
                M,
                W,
                X,
                j,
                se,
                re,
                Oe,
                ne;
              for (Oe = 0; Oe < m.length; Oe++)
                if (
                  ((ne = m[Oe]),
                  n.trigger &&
                    ne.trigger &&
                    n !== ne &&
                    (ne.trigger === n.trigger ||
                      ne.pinnedContainer === n.trigger ||
                      n.trigger.contains(ne.trigger)) &&
                    ((se = ne._startNative || ne._startClamp || ne.start),
                    (re = ne._endNative || ne._endClamp || ne.end),
                    (X = S(se, n)),
                    (j = ne.pin && re > 0 ? X + (re - se) : S(re, n)),
                    ne.setPositions(
                      X,
                      j,
                      !0,
                      (ne._startClamp ? Math.max(0, X) : X) - se
                    ),
                    ne.markerStart &&
                      P.push(
                        h.quickSetter([ne.markerStart, ne.markerEnd], "y", "px")
                      ),
                    ne.pin && ne.end > 0 && !z))
                ) {
                  if (
                    ((M = ne.end - ne.start),
                    (W = n._startClamp && ne.start < 0),
                    W)
                  ) {
                    if (n.start > 0) {
                      n.setPositions(0, n.end + (n._startNative - n.start), !0),
                        c(n, m);
                      return;
                    }
                    (M += ne.start), (y.offset = -ne.start);
                  }
                  y.push({
                    start: ne.start,
                    nativeStart: se,
                    end: ne.end,
                    distance: M,
                    trig: ne,
                  }),
                    n.setPositions(n.start, n.end + (W ? -ne.start : M), !0);
                }
            },
            s = function (n, m) {
              je.forEach(function (z) {
                return i(z, n, m);
              });
            },
            p = function () {
              (F = K.documentElement),
                (V = K.body),
                ur(),
                requestAnimationFrame(ur),
                je &&
                  ($.getAll().forEach(function (n) {
                    (n._startNative = n.start), (n._endNative = n.end);
                  }),
                  je.forEach(function (n) {
                    var m = n._startClamp || n.start,
                      z = n.autoSpeed
                        ? Math.min(Ce(), n.end)
                        : m + Math.abs((n.end - m) / n.ratio),
                      y = z - n.end;
                    if (((m -= y / 2), (z -= y / 2), m > z)) {
                      var P = m;
                      (m = z), (z = P);
                    }
                    n._startClamp && m < 0
                      ? ((z = n.ratio < 0 ? Ce() : n.end / n.ratio),
                        (y = z - n.end),
                        (m = 0))
                      : (n.ratio < 0 || (n._endClamp && z >= Ce())) &&
                        ((z = Ce()),
                        (m =
                          n.ratio < 0 || n.ratio > 1
                            ? 0
                            : z - (z - n.start) / n.ratio),
                        (y = (z - m) * n.ratio - (n.end - n.start))),
                      (n.offset = y || 1e-4),
                      (n.pins.length = n.pins.offset = 0),
                      n.setPositions(m, z, !0);
                  }),
                  s($.sort())),
                We.reset();
            },
            w = function () {
              return $.addEventListener("refresh", p);
            },
            C = function () {
              return (
                je &&
                je.forEach(function (n) {
                  return n.vars.onRefresh(n);
                })
              );
            },
            v = function () {
              return (
                je &&
                  je.forEach(function (n) {
                    return n.vars.onRefreshInit(n);
                  }),
                C
              );
            },
            E = function (n, m, z, y) {
              return function () {
                var P = typeof m == "function" ? m(z, y) : m;
                P ||
                  P === 0 ||
                  (P =
                    y.getAttribute("data-" + vr + n) ||
                    (n === "speed" ? 1 : 0)),
                  y.setAttribute("data-" + vr + n, P);
                var M = (P + "").substr(0, 6) === "clamp(";
                return { clamp: M, value: M ? P.substr(6, P.length - 7) : P };
              };
            },
            N = function (n, m, z, y, P) {
              P = (typeof P == "function" ? P(y, n) : P) || 0;
              var M = E("speed", m, y, n),
                W = E("lag", z, y, n),
                X = h.getProperty(n, "y"),
                j = n._gsap,
                se,
                re,
                Oe,
                ne,
                Be,
                Mt,
                ht = [],
                br = function () {
                  (m = M()),
                    (z = parseFloat(W().value)),
                    (se = parseFloat(m.value) || 1),
                    (Oe = m.value === "auto"),
                    (Be =
                      Oe || (re && re._startClamp && re.start <= 0) || ht.offset
                        ? 0
                        : re && re._endClamp && re.end === Ce()
                        ? 1
                        : 0.5),
                    ne && ne.kill(),
                    (ne =
                      z &&
                      h.to(n, {
                        ease: q,
                        overwrite: !1,
                        y: "+=0",
                        duration: z,
                      })),
                    re && ((re.ratio = se), (re.autoSpeed = Oe));
                },
                mt = function () {
                  (j.y = X + "px"), j.renderTransform(1), br();
                },
                yt = [],
                _t = 0,
                Yt = function (dt) {
                  if (Oe) {
                    mt();
                    var Lt = J(n, fe(0, 1, -dt.start / (dt.end - dt.start)));
                    (_t = Lt.change), (Mt = Lt.offset);
                  } else
                    (Mt = ht.offset || 0),
                      (_t = (dt.end - dt.start - Mt) * (1 - se));
                  ht.forEach(function (on) {
                    return (_t -= on.distance * (1 - se));
                  }),
                    (dt.offset = _t || 0.001),
                    dt.vars.onUpdate(dt),
                    ne && ne.progress(1);
                };
              return (
                br(),
                (se !== 1 || Oe || ne) &&
                  ((re = $.create({
                    trigger: Oe ? n.parentNode : n,
                    start: function () {
                      return m.clamp
                        ? "clamp(top bottom+=" + P + ")"
                        : "top bottom+=" + P;
                    },
                    end: function () {
                      return m.value < 0
                        ? "max"
                        : m.clamp
                        ? "clamp(bottom top-=" + P + ")"
                        : "bottom top-=" + P;
                    },
                    scroller: ft,
                    scrub: !0,
                    refreshPriority: -999,
                    onRefreshInit: mt,
                    onRefresh: Yt,
                    onKill: function (dt) {
                      var Lt = je.indexOf(dt);
                      Lt >= 0 && je.splice(Lt, 1), mt();
                    },
                    onUpdate: function (dt) {
                      var Lt = X + _t * (dt.progress - Be),
                        on = ht.length,
                        hr = 0,
                        dr,
                        Ut,
                        wr;
                      if (dt.offset) {
                        if (on) {
                          for (Ut = -De, wr = dt.end; on--; ) {
                            if (
                              ((dr = ht[on]),
                              dr.trig.isActive ||
                                (Ut >= dr.start && Ut <= dr.end))
                            ) {
                              ne &&
                                ((dr.trig.progress +=
                                  dr.trig.direction < 0 ? 0.001 : -0.001),
                                dr.trig.update(0, 0, 1),
                                ne.resetTo("y", parseFloat(j.y), -Er, !0),
                                kt && ne.progress(1));
                              return;
                            }
                            Ut > dr.end && (hr += dr.distance),
                              (wr -= dr.distance);
                          }
                          Lt =
                            X +
                            hr +
                            _t *
                              ((h.utils.clamp(dt.start, dt.end, Ut) -
                                dt.start -
                                hr) /
                                (wr - dt.start) -
                                Be);
                        }
                        yt.length &&
                          !Oe &&
                          yt.forEach(function (Or) {
                            return Or(Lt - hr);
                          }),
                          (Lt = nt(Lt + Mt)),
                          ne
                            ? (ne.resetTo("y", Lt, -Er, !0),
                              kt && ne.progress(1))
                            : ((j.y = Lt + "px"), j.renderTransform(1));
                      }
                    },
                  })),
                  Yt(re),
                  (h.core.getCache(re.trigger).stRevert = v),
                  (re.startY = X),
                  (re.pins = ht),
                  (re.markers = yt),
                  (re.ratio = se),
                  (re.autoSpeed = Oe),
                  (n.style.willChange = "transform")),
                re
              );
            };
          w(),
            $.addEventListener("killAll", w),
            h.delayedCall(0.5, function () {
              return (kt = 0);
            }),
            (this.scrollTop = ut),
            (this.scrollTo = function (c, n, m) {
              var z = h.utils.clamp(
                0,
                Ce(),
                isNaN(c) ? ce.offset(c, m, !!n && !le) : +c
              );
              n
                ? le
                  ? h.to(ce, {
                      duration: Rt,
                      scrollTop: z,
                      overwrite: "auto",
                      ease: q,
                    })
                  : qt(z)
                : ut(z);
            }),
            (this.offset = function (c, n, m) {
              c = U(c)[0];
              var z = c.style.cssText,
                y = $.create({ trigger: c, start: n || "top top" }),
                P;
              return (
                je && (kt ? $.refresh() : s([y], !0)),
                (P = y.start / (m ? bt : 1)),
                y.kill(!1),
                (c.style.cssText = z),
                (h.core.getCache(c).uncache = 1),
                P
              );
            });
          function T() {
            return (
              (_r = Fe.clientHeight),
              (Fe.style.overflow = "visible"),
              (V.style.height =
                L.innerHeight + (_r - L.innerHeight) / bt + "px"),
              _r - L.innerHeight
            );
          }
          (this.content = function (c) {
            if (arguments.length) {
              var n =
                U(c || "#smooth-content")[0] ||
                console.warn("ScrollSmoother needs a valid content element.") ||
                V.children[0];
              return (
                n !== Fe &&
                  ((Fe = n),
                  (Tr = Fe.getAttribute("style") || ""),
                  Mr && Mr.observe(Fe),
                  h.set(Fe, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0",
                  }),
                  Rt || h.set(Fe, { clearProps: "transform" })),
                this
              );
            }
            return Fe;
          }),
            (this.wrapper = function (c) {
              return arguments.length
                ? ((ft = U(c || "#smooth-wrapper")[0] || ve(Fe)),
                  (Z = ft.getAttribute("style") || ""),
                  T(),
                  h.set(
                    ft,
                    Rt
                      ? {
                          overflow: "hidden",
                          position: "fixed",
                          height: "100%",
                          width: "100%",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                        }
                      : {
                          overflow: "visible",
                          position: "relative",
                          width: "100%",
                          height: "auto",
                          top: "auto",
                          bottom: "auto",
                          left: "auto",
                          right: "auto",
                        }
                  ),
                  this)
                : ft;
            }),
            (this.effects = function (c, n) {
              var m;
              if ((je || (je = []), !c)) return je.slice(0);
              (c = U(c)),
                c.forEach(function (se) {
                  for (var re = je.length; re--; )
                    je[re].trigger === se && je[re].kill();
                }),
                (n = n || {});
              var z = n,
                y = z.speed,
                P = z.lag,
                M = z.effectsPadding,
                W = [],
                X,
                j;
              for (X = 0; X < c.length; X++)
                (j = N(c[X], y, P, X, M)), j && W.push(j);
              return (
                (m = je).push.apply(m, W), n.refresh !== !1 && $.refresh(), W
              );
            }),
            (this.sections = function (c, n) {
              var m;
              if ((jt || (jt = []), !c)) return jt.slice(0);
              var z = U(c).map(function (y) {
                return $.create({
                  trigger: y,
                  start: "top 120%",
                  end: "bottom -20%",
                  onToggle: function (M) {
                    (y.style.opacity = M.isActive ? "1" : "0"),
                      (y.style.pointerEvents = M.isActive ? "all" : "none");
                  },
                });
              });
              return (
                n && n.add ? (m = jt).push.apply(m, z) : (jt = z.slice(0)), z
              );
            }),
            this.content(ae.content),
            this.wrapper(ae.wrapper),
            (this.render = function (c) {
              return Kr(c || c === 0 ? c : De);
            }),
            (this.getVelocity = function () {
              return We.getVelocity(-De);
            }),
            $.scrollerProxy(ft, {
              scrollTop: ut,
              scrollHeight: function () {
                return T() && V.scrollHeight;
              },
              fixedMarkers: ae.fixedMarkers !== !1 && !!Rt,
              content: Fe,
              getBoundingClientRect: function () {
                return {
                  top: 0,
                  left: 0,
                  width: L.innerWidth,
                  height: L.innerHeight,
                };
              },
            }),
            $.defaults({ scroller: ft });
          var I = $.getAll().filter(function (c) {
            return c.scroller === L || c.scroller === ft;
          });
          I.forEach(function (c) {
            return c.revert(!0, !0);
          }),
            (ze = $.create({
              animation: h.fromTo(
                nr,
                {
                  y: function () {
                    return (Ft = 0), 0;
                  },
                },
                {
                  y: function () {
                    return (Ft = 1), -T();
                  },
                  immediateRender: !1,
                  ease: "none",
                  data: "ScrollSmoother",
                  duration: 100,
                  onUpdate: function () {
                    if (Ft) {
                      var n = Hr;
                      n && (ir(ze), (nr.y = De)),
                        Kr(nr.y, n),
                        Ct(),
                        Ge && !le && Ge(rr);
                    }
                  },
                }
              ),
              onRefreshInit: function (n) {
                if (!Se.isRefreshing) {
                  if (((Se.isRefreshing = !0), je)) {
                    var m = $.getAll().filter(function (y) {
                      return !!y.pin;
                    });
                    je.forEach(function (y) {
                      y.vars.pinnedContainer ||
                        m.forEach(function (P) {
                          if (P.pin.contains(y.trigger)) {
                            var M = y.vars;
                            (M.pinnedContainer = P.pin),
                              (y.vars = null),
                              y.init(M, y.animation);
                          }
                        });
                    });
                  }
                  var z = n.getTween();
                  (ge = z && z._end > z._dp._time),
                    (Nt = De),
                    (nr.y = 0),
                    Rt &&
                      ($.isTouch === 1 && (ft.style.position = "absolute"),
                      (ft.scrollTop = 0),
                      $.isTouch === 1 && (ft.style.position = "fixed"));
                }
              },
              onRefresh: function (n) {
                n.animation.invalidate(),
                  n.setPositions(n.start, T() / bt),
                  ge || ir(n),
                  (nr.y = -qt() * bt),
                  Kr(nr.y),
                  kt ||
                    (ge && (Hr = !1),
                    n.animation.progress(
                      h.utils.clamp(0, 1, Nt / bt / -n.end)
                    )),
                  ge && ((n.progress -= 0.001), n.update()),
                  (Se.isRefreshing = !1);
              },
              id: "ScrollSmoother",
              scroller: L,
              invalidateOnRefresh: !0,
              start: 0,
              refreshPriority: -9999,
              end: function () {
                return T() / bt;
              },
              onScrubComplete: function () {
                We.reset(), Et && Et(ce);
              },
              scrub: Rt || !0,
            })),
            (this.smooth = function (c) {
              return (
                arguments.length &&
                  ((Rt = c || 0),
                  (bt = (Rt && +ae.speed) || 1),
                  ze.scrubDuration(c)),
                ze.getTween() ? ze.getTween().duration() : 0
              );
            }),
            ze.getTween() && (ze.getTween().vars.ease = ae.ease || q),
            (this.scrollTrigger = ze),
            ae.effects &&
              this.effects(
                ae.effects === !0
                  ? "[data-" + vr + "speed], [data-" + vr + "lag]"
                  : ae.effects,
                { effectsPadding: ae.effectsPadding, refresh: !1 }
              ),
            ae.sections &&
              this.sections(
                ae.sections === !0 ? "[data-section]" : ae.sections
              ),
            I.forEach(function (c) {
              (c.vars.scroller = ft),
                c.revert(!1, !0),
                c.init(c.vars, c.animation);
            }),
            (this.paused = function (c, n) {
              return arguments.length
                ? (!!le !== c &&
                    (c
                      ? (ze.getTween() && ze.getTween().pause(),
                        qt(-De / bt),
                        We.reset(),
                        (Me = $.normalizeScroll()),
                        Me && Me.disable(),
                        (le = $.observe({
                          preventDefault: !0,
                          type: "wheel,touch,scroll",
                          debounce: !1,
                          allowClicks: !0,
                          onChangeY: function () {
                            return ut(-De);
                          },
                        })),
                        (le.nested = we(F, "wheel,touch,scroll", !0, n !== !1)))
                      : (le.nested.kill(),
                        le.kill(),
                        (le = 0),
                        Me && Me.enable(),
                        (ze.progress =
                          (-De / bt - ze.start) / (ze.end - ze.start)),
                        ir(ze))),
                  this)
                : !!le;
            }),
            (this.kill = this.revert =
              function () {
                ce.paused(!1), ir(ze), ze.kill();
                for (var c = (je || []).concat(jt || []), n = c.length; n--; )
                  c[n].kill();
                $.scrollerProxy(ft),
                  $.removeEventListener("killAll", w),
                  $.removeEventListener("refresh", p),
                  (ft.style.cssText = Z),
                  (Fe.style.cssText = Tr);
                var m = $.defaults({});
                m && m.scroller === ft && $.defaults({ scroller: L }),
                  ce.normalizer && $.normalizeScroll(!1),
                  clearInterval(Ye),
                  (Y = null),
                  Mr && Mr.disconnect(),
                  V.style.removeProperty("height"),
                  L.removeEventListener("focusin", Wt);
              }),
            (this.refresh = function (c, n) {
              return ze.refresh(c, n);
            }),
            Qe &&
              (this.normalizer = $.normalizeScroll(
                Qe === !0 ? { debounce: !0, content: !Rt && Fe } : Qe
              )),
            $.config(ae),
            "scrollBehavior" in L.getComputedStyle(V) &&
              h.set([V, F], { scrollBehavior: "auto" }),
            L.addEventListener("focusin", Wt),
            (Ye = setInterval(Ct, 250)),
            K.readyState === "loading" ||
              requestAnimationFrame(function () {
                return $.refresh();
              });
        }
        return (
          (Se.register = function (ce) {
            return (
              D ||
                ((h = ce || oe()),
                at() &&
                  window.document &&
                  ((L = window),
                  (K = document),
                  (F = K.documentElement),
                  (V = K.body)),
                h &&
                  ((U = h.utils.toArray),
                  (fe = h.utils.clamp),
                  (q = h.parseEase("expo")),
                  (ie = h.core.context || function () {}),
                  ($ = h.core.globals().ScrollTrigger),
                  h.core.globals("ScrollSmoother", Se),
                  V &&
                    $ &&
                    ((xe = h
                      .delayedCall(0.2, function () {
                        return $.isRefreshing || (Y && Y.refresh());
                      })
                      .pause()),
                    (G = $.core._getVelocityProp),
                    (we = $.core._inputObserver),
                    (Se.refresh = $.refresh),
                    (D = 1)))),
              D
            );
          }),
          d(Se, [
            {
              key: "progress",
              get: function () {
                return this.scrollTrigger
                  ? this.scrollTrigger.animation._time / 100
                  : 0;
              },
            },
          ]),
          Se
        );
      })();
    (wt.version = "3.13.0"),
      (wt.create = function (Se) {
        return Y && Se && Y.content() === U(Se.content)[0] ? Y : new wt(Se);
      }),
      (wt.get = function () {
        return Y;
      }),
      oe() && h.registerPlugin(wt),
      (a.ScrollSmoother = wt),
      (a.default = wt),
      typeof window > "u" || window !== a
        ? Object.defineProperty(a, "__esModule", { value: !0 })
        : delete window.default;
  });
})(ji, ji.exports);
var cs = ji.exports,
  qi = { exports: {} };
(function (_, o) {
  (function (a, u) {
    u(o);
  })(Qi, function (a) {
    function u(b, e) {
      for (var l = 0; l < e.length; l++) {
        var t = e[l];
        (t.enumerable = t.enumerable || !1),
          (t.configurable = !0),
          "value" in t && (t.writable = !0),
          Object.defineProperty(b, t.key, t);
      }
    }
    function d(b, e, l) {
      return e && u(b.prototype, e), b;
    }
    /*!
     * Observer 3.13.0
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license
     * @author: Jack Doyle, jack@greensock.com
     */ var h,
      D,
      L,
      K,
      F,
      V,
      U,
      fe,
      $,
      Y,
      q,
      G,
      we,
      ie = function () {
        return (
          h ||
          (typeof window < "u" && (h = window.gsap) && h.registerPlugin && h)
        );
      },
      xe = 1,
      at = [],
      oe = [],
      nt = [],
      Ce = Date.now,
      J = function (e, l) {
        return l;
      },
      ve = function () {
        var e = $.core,
          l = e.bridge || {},
          t = e._scrollers,
          r = e._proxies;
        t.push.apply(t, oe),
          r.push.apply(r, nt),
          (oe = t),
          (nt = r),
          (J = function (R, x) {
            return l[R](x);
          });
      },
      wt = function (e, l) {
        return ~nt.indexOf(e) && nt[nt.indexOf(e) + 1][l];
      },
      Se = function (e) {
        return !!~Y.indexOf(e);
      },
      ae = function (e, l, t, r, g) {
        return e.addEventListener(l, t, { passive: r !== !1, capture: !!g });
      },
      ce = function (e, l, t, r) {
        return e.removeEventListener(l, t, !!r);
      },
      it = "scrollLeft",
      tr = "scrollTop",
      Ge = function () {
        return (q && q.isPressed) || oe.cache++;
      },
      Et = function (e, l) {
        var t = function r(g) {
          if (g || g === 0) {
            xe && (L.history.scrollRestoration = "manual");
            var R = q && q.isPressed;
            (g = r.v = Math.round(g) || (q && q.iOS ? 1 : 0)),
              e(g),
              (r.cacheID = oe.cache),
              R && J("ss", g);
          } else
            (l || oe.cache !== r.cacheID || J("ref")) &&
              ((r.cacheID = oe.cache), (r.v = e()));
          return r.v + r.offset;
        };
        return (t.offset = 0), e && t;
      },
      Ze = {
        s: it,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: Et(function (b) {
          return arguments.length
            ? L.scrollTo(b, Re.sc())
            : L.pageXOffset || K[it] || F[it] || V[it] || 0;
        }),
      },
      Re = {
        s: tr,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Ze,
        sc: Et(function (b) {
          return arguments.length
            ? L.scrollTo(Ze.sc(), b)
            : L.pageYOffset || K[tr] || F[tr] || V[tr] || 0;
        }),
      },
      Qe = function (e, l) {
        return (
          ((l && l._ctx && l._ctx.selector) || h.utils.toArray)(e)[0] ||
          (typeof e == "string" && h.config().nullTargetWarn !== !1
            ? console.warn("Element not found:", e)
            : null)
        );
      },
      Dr = function (e, l) {
        for (var t = l.length; t--; )
          if (l[t] === e || l[t].contains(e)) return !0;
        return !1;
      },
      Fe = function (e, l) {
        var t = l.s,
          r = l.sc;
        Se(e) && (e = K.scrollingElement || F);
        var g = oe.indexOf(e),
          R = r === Re.sc ? 1 : 2;
        !~g && (g = oe.push(e) - 1), oe[g + R] || ae(e, "scroll", Ge);
        var x = oe[g + R],
          ee =
            x ||
            (oe[g + R] =
              Et(wt(e, t), !0) ||
              (Se(e)
                ? r
                : Et(function (be) {
                    return arguments.length ? (e[t] = be) : e[t];
                  })));
        return (
          (ee.target = e),
          x || (ee.smooth = h.getProperty(e, "scrollBehavior") === "smooth"),
          ee
        );
      },
      ft = function (e, l, t) {
        var r = e,
          g = e,
          R = Ce(),
          x = R,
          ee = l || 50,
          be = Math.max(500, ee * 3),
          tt = function (me, zt) {
            var vt = Ce();
            zt || vt - R > ee
              ? ((g = r), (r = me), (x = R), (R = vt))
              : t
              ? (r += me)
              : (r = g + ((me - g) / (vt - x)) * (R - x));
          },
          Ie = function () {
            (g = r = t ? 0 : r), (x = R = 0);
          },
          de = function (me) {
            var zt = x,
              vt = g,
              Qt = Ce();
            return (
              (me || me === 0) && me !== r && tt(me),
              R === x || Qt - x > be
                ? 0
                : ((r + (t ? vt : -vt)) / ((t ? Qt : R) - zt)) * 1e3
            );
          };
        return { update: tt, reset: Ie, getVelocity: de };
      },
      _r = function (e, l) {
        return (
          l && !e._gsapAllow && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      },
      ze = function (e) {
        var l = Math.max.apply(Math, e),
          t = Math.min.apply(Math, e);
        return Math.abs(l) >= Math.abs(t) ? l : t;
      },
      je = function () {
        ($ = h.core.globals().ScrollTrigger), $ && $.core && ve();
      },
      jt = function (e) {
        return (
          (h = e || ie()),
          !D &&
            h &&
            typeof document < "u" &&
            document.body &&
            ((L = window),
            (K = document),
            (F = K.documentElement),
            (V = K.body),
            (Y = [L, K, F, V]),
            h.utils.clamp,
            (we = h.core.context || function () {}),
            (fe = "onpointerenter" in V ? "pointer" : "mouse"),
            (U = Ye.isTouch =
              L.matchMedia &&
              L.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : "ontouchstart" in L ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0
                ? 2
                : 0),
            (G = Ye.eventTypes =
              (
                "ontouchstart" in F
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : "onpointerdown" in F
                  ? "pointerdown,pointermove,pointercancel,pointerup"
                  : "mousedown,mousemove,mouseup,mouseup"
              ).split(",")),
            setTimeout(function () {
              return (xe = 0);
            }, 500),
            je(),
            (D = 1)),
          D
        );
      };
    (Ze.op = Re), (oe.cache = 0);
    var Ye = (function () {
      function b(l) {
        this.init(l);
      }
      var e = b.prototype;
      return (
        (e.init = function (t) {
          D || jt(h) || console.warn("Please gsap.registerPlugin(Observer)"),
            $ || je();
          var r = t.tolerance,
            g = t.dragMinimum,
            R = t.type,
            x = t.target,
            ee = t.lineHeight,
            be = t.debounce,
            tt = t.preventDefault,
            Ie = t.onStop,
            de = t.onStopDelay,
            H = t.ignore,
            me = t.wheelSpeed,
            zt = t.event,
            vt = t.onDragStart,
            Qt = t.onDragEnd,
            Pt = t.onDrag,
            pr = t.onPress,
            He = t.onRelease,
            tn = t.onRight,
            xt = t.onLeft,
            ye = t.onUp,
            Ar = t.onDown,
            Vr = t.onChangeX,
            he = t.onChangeY,
            lr = t.onChange,
            ke = t.onToggleX,
            bn = t.onToggleY,
            Kt = t.onHover,
            Nr = t.onHoverEnd,
            Rr = t.onMove,
            pt = t.ignoreCheck,
            Bt = t.isNormalizer,
            It = t.onGestureStart,
            k = t.onGestureEnd,
            Jt = t.onWheel,
            In = t.onEnable,
            Tn = t.onDisable,
            rn = t.onClick,
            wn = t.scrollSpeed,
            kr = t.capture,
            Xt = t.allowClicks,
            Lr = t.lockAxis,
            Cr = t.onLockAxis;
          (this.target = x = Qe(x) || F),
            (this.vars = t),
            H && (H = h.utils.toArray(H)),
            (r = r || 1e-9),
            (g = g || 0),
            (me = me || 1),
            (wn = wn || 1),
            (R = R || "wheel,touch,pointer"),
            (be = be !== !1),
            ee || (ee = parseFloat(L.getComputedStyle(V).lineHeight) || 22);
          var En,
            zr,
            $r,
            Ke,
            Ot,
            Fr,
            Gr,
            A = this,
            jr = 0,
            kn = 0,
            Mn = t.passive || (!tt && t.passive !== !1),
            Dt = Fe(x, Ze),
            Cn = Fe(x, Re),
            Pn = Dt(),
            Xn = Cn(),
            ar =
              ~R.indexOf("touch") &&
              !~R.indexOf("pointer") &&
              G[0] === "pointerdown",
            An = Se(x),
            Vt = x.ownerDocument || K,
            sn = [0, 0, 0],
            nn = [0, 0, 0],
            yn = 0,
            si = function () {
              return (yn = Ce());
            },
            Gt = function (_e, rt) {
              return (
                ((A.event = _e) && H && Dr(_e.target, H)) ||
                (rt && ar && _e.pointerType !== "touch") ||
                (pt && pt(_e, rt))
              );
            },
            Ei = function () {
              A._vx.reset(), A._vy.reset(), zr.pause(), Ie && Ie(A);
            },
            xn = function () {
              var _e = (A.deltaX = ze(sn)),
                rt = (A.deltaY = ze(nn)),
                Q = Math.abs(_e) >= r,
                Pe = Math.abs(rt) >= r;
              lr && (Q || Pe) && lr(A, _e, rt, sn, nn),
                Q &&
                  (tn && A.deltaX > 0 && tn(A),
                  xt && A.deltaX < 0 && xt(A),
                  Vr && Vr(A),
                  ke && A.deltaX < 0 != jr < 0 && ke(A),
                  (jr = A.deltaX),
                  (sn[0] = sn[1] = sn[2] = 0)),
                Pe &&
                  (Ar && A.deltaY > 0 && Ar(A),
                  ye && A.deltaY < 0 && ye(A),
                  he && he(A),
                  bn && A.deltaY < 0 != kn < 0 && bn(A),
                  (kn = A.deltaY),
                  (nn[0] = nn[1] = nn[2] = 0)),
                (Ke || $r) &&
                  (Rr && Rr(A),
                  $r && (vt && $r === 1 && vt(A), Pt && Pt(A), ($r = 0)),
                  (Ke = !1)),
                Fr && !(Fr = !1) && Cr && Cr(A),
                Ot && (Jt(A), (Ot = !1)),
                (En = 0);
            },
            Jn = function (_e, rt, Q) {
              (sn[Q] += _e),
                (nn[Q] += rt),
                A._vx.update(_e),
                A._vy.update(rt),
                be ? En || (En = requestAnimationFrame(xn)) : xn();
            },
            ei = function (_e, rt) {
              Lr &&
                !Gr &&
                ((A.axis = Gr = Math.abs(_e) > Math.abs(rt) ? "x" : "y"),
                (Fr = !0)),
                Gr !== "y" && ((sn[2] += _e), A._vx.update(_e, !0)),
                Gr !== "x" && ((nn[2] += rt), A._vy.update(rt, !0)),
                be ? En || (En = requestAnimationFrame(xn)) : xn();
            },
            Nn = function (_e) {
              if (!Gt(_e, 1)) {
                _e = _r(_e, tt);
                var rt = _e.clientX,
                  Q = _e.clientY,
                  Pe = rt - A.x,
                  pe = Q - A.y,
                  Ae = A.isDragging;
                (A.x = rt),
                  (A.y = Q),
                  (Ae ||
                    ((Pe || pe) &&
                      (Math.abs(A.startX - rt) >= g ||
                        Math.abs(A.startY - Q) >= g))) &&
                    (($r = Ae ? 2 : 1), Ae || (A.isDragging = !0), ei(Pe, pe));
              }
            },
            Gn = (A.onPress = function (Le) {
              Gt(Le, 1) ||
                (Le && Le.button) ||
                ((A.axis = Gr = null),
                zr.pause(),
                (A.isPressed = !0),
                (Le = _r(Le)),
                (jr = kn = 0),
                (A.startX = A.x = Le.clientX),
                (A.startY = A.y = Le.clientY),
                A._vx.reset(),
                A._vy.reset(),
                ae(Bt ? x : Vt, G[1], Nn, Mn, !0),
                (A.deltaX = A.deltaY = 0),
                pr && pr(A));
            }),
            Xe = (A.onRelease = function (Le) {
              if (!Gt(Le, 1)) {
                ce(Bt ? x : Vt, G[1], Nn, !0);
                var _e = !isNaN(A.y - A.startY),
                  rt = A.isDragging,
                  Q =
                    rt &&
                    (Math.abs(A.x - A.startX) > 3 ||
                      Math.abs(A.y - A.startY) > 3),
                  Pe = _r(Le);
                !Q &&
                  _e &&
                  (A._vx.reset(),
                  A._vy.reset(),
                  tt &&
                    Xt &&
                    h.delayedCall(0.08, function () {
                      if (Ce() - yn > 300 && !Le.defaultPrevented) {
                        if (Le.target.click) Le.target.click();
                        else if (Vt.createEvent) {
                          var pe = Vt.createEvent("MouseEvents");
                          pe.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            L,
                            1,
                            Pe.screenX,
                            Pe.screenY,
                            Pe.clientX,
                            Pe.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            Le.target.dispatchEvent(pe);
                        }
                      }
                    })),
                  (A.isDragging = A.isGesturing = A.isPressed = !1),
                  Ie && rt && !Bt && zr.restart(!0),
                  $r && xn(),
                  Qt && rt && Qt(A),
                  He && He(A, Q);
              }
            }),
            jn = function (_e) {
              return (
                _e.touches &&
                _e.touches.length > 1 &&
                (A.isGesturing = !0) &&
                It(_e, A.isDragging)
              );
            },
            ln = function () {
              return (A.isGesturing = !1) || k(A);
            },
            an = function (_e) {
              if (!Gt(_e)) {
                var rt = Dt(),
                  Q = Cn();
                Jn((rt - Pn) * wn, (Q - Xn) * wn, 1),
                  (Pn = rt),
                  (Xn = Q),
                  Ie && zr.restart(!0);
              }
            },
            fn = function (_e) {
              if (!Gt(_e)) {
                (_e = _r(_e, tt)), Jt && (Ot = !0);
                var rt =
                  (_e.deltaMode === 1
                    ? ee
                    : _e.deltaMode === 2
                    ? L.innerHeight
                    : 1) * me;
                Jn(_e.deltaX * rt, _e.deltaY * rt, 0),
                  Ie && !Bt && zr.restart(!0);
              }
            },
            qn = function (_e) {
              if (!Gt(_e)) {
                var rt = _e.clientX,
                  Q = _e.clientY,
                  Pe = rt - A.x,
                  pe = Q - A.y;
                (A.x = rt),
                  (A.y = Q),
                  (Ke = !0),
                  Ie && zr.restart(!0),
                  (Pe || pe) && ei(Pe, pe);
              }
            },
            ti = function (_e) {
              (A.event = _e), Kt(A);
            },
            Sn = function (_e) {
              (A.event = _e), Nr(A);
            },
            li = function (_e) {
              return Gt(_e) || (_r(_e, tt) && rn(A));
            };
          (zr = A._dc = h.delayedCall(de || 0.25, Ei).pause()),
            (A.deltaX = A.deltaY = 0),
            (A._vx = ft(0, 50, !0)),
            (A._vy = ft(0, 50, !0)),
            (A.scrollX = Dt),
            (A.scrollY = Cn),
            (A.isDragging = A.isGesturing = A.isPressed = !1),
            we(this),
            (A.enable = function (Le) {
              return (
                A.isEnabled ||
                  (ae(An ? Vt : x, "scroll", Ge),
                  R.indexOf("scroll") >= 0 &&
                    ae(An ? Vt : x, "scroll", an, Mn, kr),
                  R.indexOf("wheel") >= 0 && ae(x, "wheel", fn, Mn, kr),
                  ((R.indexOf("touch") >= 0 && U) ||
                    R.indexOf("pointer") >= 0) &&
                    (ae(x, G[0], Gn, Mn, kr),
                    ae(Vt, G[2], Xe),
                    ae(Vt, G[3], Xe),
                    Xt && ae(x, "click", si, !0, !0),
                    rn && ae(x, "click", li),
                    It && ae(Vt, "gesturestart", jn),
                    k && ae(Vt, "gestureend", ln),
                    Kt && ae(x, fe + "enter", ti),
                    Nr && ae(x, fe + "leave", Sn),
                    Rr && ae(x, fe + "move", qn)),
                  (A.isEnabled = !0),
                  (A.isDragging = A.isGesturing = A.isPressed = Ke = $r = !1),
                  A._vx.reset(),
                  A._vy.reset(),
                  (Pn = Dt()),
                  (Xn = Cn()),
                  Le && Le.type && Gn(Le),
                  In && In(A)),
                A
              );
            }),
            (A.disable = function () {
              A.isEnabled &&
                (at.filter(function (Le) {
                  return Le !== A && Se(Le.target);
                }).length || ce(An ? Vt : x, "scroll", Ge),
                A.isPressed &&
                  (A._vx.reset(), A._vy.reset(), ce(Bt ? x : Vt, G[1], Nn, !0)),
                ce(An ? Vt : x, "scroll", an, kr),
                ce(x, "wheel", fn, kr),
                ce(x, G[0], Gn, kr),
                ce(Vt, G[2], Xe),
                ce(Vt, G[3], Xe),
                ce(x, "click", si, !0),
                ce(x, "click", li),
                ce(Vt, "gesturestart", jn),
                ce(Vt, "gestureend", ln),
                ce(x, fe + "enter", ti),
                ce(x, fe + "leave", Sn),
                ce(x, fe + "move", qn),
                (A.isEnabled = A.isPressed = A.isDragging = !1),
                Tn && Tn(A));
            }),
            (A.kill = A.revert =
              function () {
                A.disable();
                var Le = at.indexOf(A);
                Le >= 0 && at.splice(Le, 1), q === A && (q = 0);
              }),
            at.push(A),
            Bt && Se(x) && (q = A),
            A.enable(zt);
        }),
        d(b, [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]),
        b
      );
    })();
    (Ye.version = "3.13.0"),
      (Ye.create = function (b) {
        return new Ye(b);
      }),
      (Ye.register = jt),
      (Ye.getAll = function () {
        return at.slice();
      }),
      (Ye.getById = function (b) {
        return at.filter(function (e) {
          return e.vars.id === b;
        })[0];
      }),
      ie() && h.registerPlugin(Ye);
    /*!
     * ScrollTrigger 3.13.0
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license
     * @author: Jack Doyle, jack@greensock.com
     */ var Z,
      Tr,
      le,
      Me,
      Nt,
      ge,
      Ft,
      rr,
      vr,
      qt,
      Rt,
      bt,
      De,
      Er,
      kt,
      We,
      Ct,
      nr,
      ur,
      Hr,
      ir,
      Kr,
      ut,
      Mr,
      Ir,
      Wt,
      S,
      i,
      s,
      p,
      w,
      C,
      v,
      E,
      N = 1,
      T = Date.now,
      I = T(),
      c = 0,
      n = 0,
      m = function (e, l, t) {
        var r = mt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
        return (t["_" + l + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
      },
      z = function (e, l) {
        return l && (!mt(e) || e.substr(0, 6) !== "clamp(")
          ? "clamp(" + e + ")"
          : e;
      },
      y = function b() {
        return n && requestAnimationFrame(b);
      },
      P = function () {
        return (Er = 1);
      },
      M = function () {
        return (Er = 0);
      },
      W = function (e) {
        return e;
      },
      X = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0;
      },
      j = function () {
        return typeof window < "u";
      },
      se = function () {
        return Z || (j() && (Z = window.gsap) && Z.registerPlugin && Z);
      },
      re = function (e) {
        return !!~Ft.indexOf(e);
      },
      Oe = function (e) {
        return (
          (e === "Height" ? w : le["inner" + e]) ||
          Nt["client" + e] ||
          ge["client" + e]
        );
      },
      ne = function (e) {
        return (
          wt(e, "getBoundingClientRect") ||
          (re(e)
            ? function () {
                return (xi.width = le.innerWidth), (xi.height = w), xi;
              }
            : function () {
                return _n(e);
              })
        );
      },
      Be = function (e, l, t) {
        var r = t.d,
          g = t.d2,
          R = t.a;
        return (R = wt(e, "getBoundingClientRect"))
          ? function () {
              return R()[r];
            }
          : function () {
              return (l ? Oe(g) : e["client" + g]) || 0;
            };
      },
      Mt = function (e, l) {
        return !l || ~nt.indexOf(e)
          ? ne(e)
          : function () {
              return xi;
            };
      },
      ht = function (e, l) {
        var t = l.s,
          r = l.d2,
          g = l.d,
          R = l.a;
        return Math.max(
          0,
          (t = "scroll" + r) && (R = wt(e, t))
            ? R() - ne(e)()[g]
            : re(e)
            ? (Nt[t] || ge[t]) - Oe(r)
            : e[t] - e["offset" + r]
        );
      },
      br = function (e, l) {
        for (var t = 0; t < ur.length; t += 3)
          (!l || ~l.indexOf(ur[t + 1])) && e(ur[t], ur[t + 1], ur[t + 2]);
      },
      mt = function (e) {
        return typeof e == "string";
      },
      yt = function (e) {
        return typeof e == "function";
      },
      _t = function (e) {
        return typeof e == "number";
      },
      Yt = function (e) {
        return typeof e == "object";
      },
      cr = function (e, l, t) {
        return e && e.progress(l ? 0 : 1) && t && e.pause();
      },
      dt = function (e, l) {
        if (e.enabled) {
          var t = e._ctx
            ? e._ctx.add(function () {
                return l(e);
              })
            : l(e);
          t && t.totalTime && (e.callbackAnimation = t);
        }
      },
      Lt = Math.abs,
      on = "left",
      hr = "top",
      dr = "right",
      Ut = "bottom",
      wr = "width",
      Or = "height",
      Dn = "Right",
      Hn = "Left",
      On = "Top",
      Vn = "Bottom",
      Ue = "padding",
      Jr = "margin",
      Zn = "Width",
      zi = "Height",
      Zt = "px",
      en = function (e) {
        return le.getComputedStyle(e);
      },
      Ro = function (e) {
        var l = en(e).position;
        e.style.position = l === "absolute" || l === "fixed" ? l : "relative";
      },
      Ki = function (e, l) {
        for (var t in l) t in e || (e[t] = l[t]);
        return e;
      },
      _n = function (e, l) {
        var t =
            l &&
            en(e)[kt] !== "matrix(1, 0, 0, 1, 0, 0)" &&
            Z.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            }).progress(1),
          r = e.getBoundingClientRect();
        return t && t.progress(0).kill(), r;
      },
      di = function (e, l) {
        var t = l.d2;
        return e["offset" + t] || e["client" + t] || 0;
      },
      Ji = function (e) {
        var l = [],
          t = e.labels,
          r = e.duration(),
          g;
        for (g in t) l.push(t[g] / r);
        return l;
      },
      Lo = function (e) {
        return function (l) {
          return Z.utils.snap(Ji(e), l);
        };
      },
      Di = function (e) {
        var l = Z.utils.snap(e),
          t =
            Array.isArray(e) &&
            e.slice(0).sort(function (r, g) {
              return r - g;
            });
        return t
          ? function (r, g, R) {
              R === void 0 && (R = 0.001);
              var x;
              if (!g) return l(r);
              if (g > 0) {
                for (r -= R, x = 0; x < t.length; x++)
                  if (t[x] >= r) return t[x];
                return t[x - 1];
              } else
                for (x = t.length, r += R; x--; ) if (t[x] <= r) return t[x];
              return t[0];
            }
          : function (r, g, R) {
              R === void 0 && (R = 0.001);
              var x = l(r);
              return !g || Math.abs(x - r) < R || x - r < 0 == g < 0
                ? x
                : l(g < 0 ? r - e : r + e);
            };
      },
      zo = function (e) {
        return function (l, t) {
          return Di(Ji(e))(l, t.direction);
        };
      },
      pi = function (e, l, t, r) {
        return t.split(",").forEach(function (g) {
          return e(l, g, r);
        });
      },
      or = function (e, l, t, r, g) {
        return e.addEventListener(l, t, { passive: !r, capture: !!g });
      },
      sr = function (e, l, t, r) {
        return e.removeEventListener(l, t, !!r);
      },
      gi = function (e, l, t) {
        (t = t && t.wheelHandler),
          t && (e(l, "wheel", t), e(l, "touchmove", t));
      },
      eo = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      mi = { toggleActions: "play", anticipatePin: 0 },
      _i = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      vi = function (e, l) {
        if (mt(e)) {
          var t = e.indexOf("="),
            r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
          ~t &&
            (e.indexOf("%") > t && (r *= l / 100), (e = e.substr(0, t - 1))),
            (e =
              r +
              (e in _i
                ? _i[e] * l
                : ~e.indexOf("%")
                ? (parseFloat(e) * l) / 100
                : parseFloat(e) || 0));
        }
        return e;
      },
      bi = function (e, l, t, r, g, R, x, ee) {
        var be = g.startColor,
          tt = g.endColor,
          Ie = g.fontSize,
          de = g.indent,
          H = g.fontWeight,
          me = Me.createElement("div"),
          zt = re(t) || wt(t, "pinType") === "fixed",
          vt = e.indexOf("scroller") !== -1,
          Qt = zt ? ge : t,
          Pt = e.indexOf("start") !== -1,
          pr = Pt ? be : tt,
          He =
            "border-color:" +
            pr +
            ";font-size:" +
            Ie +
            ";color:" +
            pr +
            ";font-weight:" +
            H +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (He += "position:" + ((vt || ee) && zt ? "fixed;" : "absolute;")),
          (vt || ee || !zt) &&
            (He += (r === Re ? dr : Ut) + ":" + (R + parseFloat(de)) + "px;"),
          x &&
            (He +=
              "box-sizing:border-box;text-align:left;width:" +
              x.offsetWidth +
              "px;"),
          (me._isStart = Pt),
          me.setAttribute(
            "class",
            "gsap-marker-" + e + (l ? " marker-" + l : "")
          ),
          (me.style.cssText = He),
          (me.innerText = l || l === 0 ? e + "-" + l : e),
          Qt.children[0]
            ? Qt.insertBefore(me, Qt.children[0])
            : Qt.appendChild(me),
          (me._offset = me["offset" + r.op.d2]),
          wi(me, 0, r, Pt),
          me
        );
      },
      wi = function (e, l, t, r) {
        var g = { display: "block" },
          R = t[r ? "os2" : "p2"],
          x = t[r ? "p2" : "os2"];
        (e._isFlipped = r),
          (g[t.a + "Percent"] = r ? -100 : 0),
          (g[t.a] = r ? "1px" : 0),
          (g["border" + R + Zn] = 1),
          (g["border" + x + Zn] = 0),
          (g[t.p] = l + "px"),
          Z.set(e, g);
      },
      Ve = [],
      Hi = {},
      ni,
      to = function () {
        return T() - c > 34 && (ni || (ni = requestAnimationFrame(vn)));
      },
      Qn = function () {
        (!ut || !ut.isPressed || ut.startX > ge.clientWidth) &&
          (oe.cache++,
          ut ? ni || (ni = requestAnimationFrame(vn)) : vn(),
          c || Fn("scrollStart"),
          (c = T()));
      },
      Oi = function () {
        (Wt = le.innerWidth), (Ir = le.innerHeight);
      },
      ii = function (e) {
        oe.cache++,
          (e === !0 ||
            (!De &&
              !Kr &&
              !Me.fullscreenElement &&
              !Me.webkitFullscreenElement &&
              (!Mr ||
                Wt !== le.innerWidth ||
                Math.abs(le.innerHeight - Ir) > le.innerHeight * 0.25))) &&
            rr.restart(!0);
      },
      $n = {},
      Do = [],
      ro = function b() {
        return sr($e, "scrollEnd", b) || Bn(!0);
      },
      Fn = function (e) {
        return (
          ($n[e] &&
            $n[e].map(function (l) {
              return l();
            })) ||
          Do
        );
      },
      Xr = [],
      no = function (e) {
        for (var l = 0; l < Xr.length; l += 5)
          (!e || (Xr[l + 4] && Xr[l + 4].query === e)) &&
            ((Xr[l].style.cssText = Xr[l + 1]),
            Xr[l].getBBox && Xr[l].setAttribute("transform", Xr[l + 2] || ""),
            (Xr[l + 3].uncache = 1));
      },
      Vi = function (e, l) {
        var t;
        for (We = 0; We < Ve.length; We++)
          (t = Ve[We]),
            t && (!l || t._ctx === l) && (e ? t.kill(1) : t.revert(!0, !0));
        (C = !0), l && no(l), l || Fn("revert");
      },
      io = function (e, l) {
        oe.cache++,
          (l || !Pr) &&
            oe.forEach(function (t) {
              return yt(t) && t.cacheID++ && (t.rec = 0);
            }),
          mt(e) && (le.history.scrollRestoration = s = e);
      },
      Pr,
      Yn = 0,
      oo,
      Ho = function () {
        if (oo !== Yn) {
          var e = (oo = Yn);
          requestAnimationFrame(function () {
            return e === Yn && Bn(!0);
          });
        }
      },
      so = function () {
        ge.appendChild(p),
          (w = (!ut && p.offsetHeight) || le.innerHeight),
          ge.removeChild(p);
      },
      lo = function (e) {
        return vr(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
        ).forEach(function (l) {
          return (l.style.display = e ? "none" : "block");
        });
      },
      Bn = function (e, l) {
        if (
          ((Nt = Me.documentElement),
          (ge = Me.body),
          (Ft = [le, Me, Nt, ge]),
          c && !e && !C)
        ) {
          or($e, "scrollEnd", ro);
          return;
        }
        so(),
          (Pr = $e.isRefreshing = !0),
          oe.forEach(function (r) {
            return yt(r) && ++r.cacheID && (r.rec = r());
          });
        var t = Fn("refreshInit");
        Hr && $e.sort(),
          l || Vi(),
          oe.forEach(function (r) {
            yt(r) &&
              (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
          }),
          Ve.slice(0).forEach(function (r) {
            return r.refresh();
          }),
          (C = !1),
          Ve.forEach(function (r) {
            if (r._subPinOffset && r.pin) {
              var g = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
                R = r.pin[g];
              r.revert(!0, 1), r.adjustPinSpacing(r.pin[g] - R), r.refresh();
            }
          }),
          (v = 1),
          lo(!0),
          Ve.forEach(function (r) {
            var g = ht(r.scroller, r._dir),
              R = r.vars.end === "max" || (r._endClamp && r.end > g),
              x = r._startClamp && r.start >= g;
            (R || x) &&
              r.setPositions(
                x ? g - 1 : r.start,
                R ? Math.max(x ? g : r.start + 1, g) : r.end,
                !0
              );
          }),
          lo(!1),
          (v = 0),
          t.forEach(function (r) {
            return r && r.render && r.render(-1);
          }),
          oe.forEach(function (r) {
            yt(r) &&
              (r.smooth &&
                requestAnimationFrame(function () {
                  return (r.target.style.scrollBehavior = "smooth");
                }),
              r.rec && r(r.rec));
          }),
          io(s, 1),
          rr.pause(),
          Yn++,
          (Pr = 2),
          vn(2),
          Ve.forEach(function (r) {
            return yt(r.vars.onRefresh) && r.vars.onRefresh(r);
          }),
          (Pr = $e.isRefreshing = !1),
          Fn("refresh");
      },
      $i = 0,
      ki = 1,
      oi,
      vn = function (e) {
        if (e === 2 || (!Pr && !C)) {
          ($e.isUpdating = !0), oi && oi.update(0);
          var l = Ve.length,
            t = T(),
            r = t - I >= 50,
            g = l && Ve[0].scroll();
          if (
            ((ki = $i > g ? -1 : 1),
            Pr || ($i = g),
            r &&
              (c && !Er && t - c > 200 && ((c = 0), Fn("scrollEnd")),
              (Rt = I),
              (I = t)),
            ki < 0)
          ) {
            for (We = l; We-- > 0; ) Ve[We] && Ve[We].update(0, r);
            ki = 1;
          } else for (We = 0; We < l; We++) Ve[We] && Ve[We].update(0, r);
          $e.isUpdating = !1;
        }
        ni = 0;
      },
      Fi = [
        on,
        hr,
        Ut,
        dr,
        Jr + Vn,
        Jr + Dn,
        Jr + On,
        Jr + Hn,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      Ci = Fi.concat([
        wr,
        Or,
        "boxSizing",
        "max" + Zn,
        "max" + zi,
        "position",
        Jr,
        Ue,
        Ue + On,
        Ue + Dn,
        Ue + Vn,
        Ue + Hn,
      ]),
      Oo = function (e, l, t) {
        Kn(t);
        var r = e._gsap;
        if (r.spacerIsNative) Kn(r.spacerState);
        else if (e._gsap.swappedIn) {
          var g = l.parentNode;
          g && (g.insertBefore(e, l), g.removeChild(l));
        }
        e._gsap.swappedIn = !1;
      },
      Yi = function (e, l, t, r) {
        if (!e._gsap.swappedIn) {
          for (var g = Fi.length, R = l.style, x = e.style, ee; g--; )
            (ee = Fi[g]), (R[ee] = t[ee]);
          (R.position = t.position === "absolute" ? "absolute" : "relative"),
            t.display === "inline" && (R.display = "inline-block"),
            (x[Ut] = x[dr] = "auto"),
            (R.flexBasis = t.flexBasis || "auto"),
            (R.overflow = "visible"),
            (R.boxSizing = "border-box"),
            (R[wr] = di(e, Ze) + Zt),
            (R[Or] = di(e, Re) + Zt),
            (R[Ue] = x[Jr] = x[hr] = x[on] = "0"),
            Kn(r),
            (x[wr] = x["max" + Zn] = t[wr]),
            (x[Or] = x["max" + zi] = t[Or]),
            (x[Ue] = t[Ue]),
            e.parentNode !== l &&
              (e.parentNode.insertBefore(l, e), l.appendChild(e)),
            (e._gsap.swappedIn = !0);
        }
      },
      Vo = /([A-Z])/g,
      Kn = function (e) {
        if (e) {
          var l = e.t.style,
            t = e.length,
            r = 0,
            g,
            R;
          for ((e.t._gsap || Z.core.getCache(e.t)).uncache = 1; r < t; r += 2)
            (R = e[r + 1]),
              (g = e[r]),
              R
                ? (l[g] = R)
                : l[g] && l.removeProperty(g.replace(Vo, "-$1").toLowerCase());
        }
      },
      yi = function (e) {
        for (var l = Ci.length, t = e.style, r = [], g = 0; g < l; g++)
          r.push(Ci[g], t[Ci[g]]);
        return (r.t = e), r;
      },
      $o = function (e, l, t) {
        for (var r = [], g = e.length, R = t ? 8 : 0, x; R < g; R += 2)
          (x = e[R]), r.push(x, x in l ? l[x] : e[R + 1]);
        return (r.t = e.t), r;
      },
      xi = { left: 0, top: 0 },
      ao = function (e, l, t, r, g, R, x, ee, be, tt, Ie, de, H, me) {
        yt(e) && (e = e(ee)),
          mt(e) &&
            e.substr(0, 3) === "max" &&
            (e = de + (e.charAt(4) === "=" ? vi("0" + e.substr(3), t) : 0));
        var zt = H ? H.time() : 0,
          vt,
          Qt,
          Pt;
        if ((H && H.seek(0), isNaN(e) || (e = +e), _t(e)))
          H &&
            (e = Z.utils.mapRange(
              H.scrollTrigger.start,
              H.scrollTrigger.end,
              0,
              de,
              e
            )),
            x && wi(x, t, r, !0);
        else {
          yt(l) && (l = l(ee));
          var pr = (e || "0").split(" "),
            He,
            tn,
            xt,
            ye;
          (Pt = Qe(l, ee) || ge),
            (He = _n(Pt) || {}),
            (!He || (!He.left && !He.top)) &&
              en(Pt).display === "none" &&
              ((ye = Pt.style.display),
              (Pt.style.display = "block"),
              (He = _n(Pt)),
              ye
                ? (Pt.style.display = ye)
                : Pt.style.removeProperty("display")),
            (tn = vi(pr[0], He[r.d])),
            (xt = vi(pr[1] || "0", t)),
            (e = He[r.p] - be[r.p] - tt + tn + g - xt),
            x && wi(x, xt, r, t - xt < 20 || (x._isStart && xt > 20)),
            (t -= t - xt);
        }
        if ((me && ((ee[me] = e || -0.001), e < 0 && (e = 0)), R)) {
          var Ar = e + t,
            Vr = R._isStart;
          (vt = "scroll" + r.d2),
            wi(
              R,
              Ar,
              r,
              (Vr && Ar > 20) ||
                (!Vr &&
                  (Ie ? Math.max(ge[vt], Nt[vt]) : R.parentNode[vt]) <= Ar + 1)
            ),
            Ie &&
              ((be = _n(x)),
              Ie && (R.style[r.op.p] = be[r.op.p] - r.op.m - R._offset + Zt));
        }
        return (
          H &&
            Pt &&
            ((vt = _n(Pt)),
            H.seek(de),
            (Qt = _n(Pt)),
            (H._caScrollDist = vt[r.p] - Qt[r.p]),
            (e = (e / H._caScrollDist) * de)),
          H && H.seek(zt),
          H ? e : Math.round(e)
        );
      },
      Fo = /(webkit|moz|length|cssText|inset)/i,
      fo = function (e, l, t, r) {
        if (e.parentNode !== l) {
          var g = e.style,
            R,
            x;
          if (l === ge) {
            (e._stOrig = g.cssText), (x = en(e));
            for (R in x)
              !+R &&
                !Fo.test(R) &&
                x[R] &&
                typeof g[R] == "string" &&
                R !== "0" &&
                (g[R] = x[R]);
            (g.top = t), (g.left = r);
          } else g.cssText = e._stOrig;
          (Z.core.getCache(e).uncache = 1), l.appendChild(e);
        }
      },
      uo = function (e, l, t) {
        var r = l,
          g = r;
        return function (R) {
          var x = Math.round(e());
          return (
            x !== r &&
              x !== g &&
              Math.abs(x - r) > 3 &&
              Math.abs(x - g) > 3 &&
              ((R = x), t && t()),
            (g = r),
            (r = Math.round(R)),
            r
          );
        };
      },
      Si = function (e, l, t) {
        var r = {};
        (r[l.p] = "+=" + t), Z.set(e, r);
      },
      co = function (e, l) {
        var t = Fe(e, l),
          r = "_scroll" + l.p2,
          g = function R(x, ee, be, tt, Ie) {
            var de = R.tween,
              H = ee.onComplete,
              me = {};
            be = be || t();
            var zt = uo(t, be, function () {
              de.kill(), (R.tween = 0);
            });
            return (
              (Ie = (tt && Ie) || 0),
              (tt = tt || x - be),
              de && de.kill(),
              (ee[r] = x),
              (ee.inherit = !1),
              (ee.modifiers = me),
              (me[r] = function () {
                return zt(be + tt * de.ratio + Ie * de.ratio * de.ratio);
              }),
              (ee.onUpdate = function () {
                oe.cache++, R.tween && vn();
              }),
              (ee.onComplete = function () {
                (R.tween = 0), H && H.call(de);
              }),
              (de = R.tween = Z.to(e, ee)),
              de
            );
          };
        return (
          (e[r] = t),
          (t.wheelHandler = function () {
            return g.tween && g.tween.kill() && (g.tween = 0);
          }),
          or(e, "wheel", t.wheelHandler),
          $e.isTouch && or(e, "touchmove", t.wheelHandler),
          g
        );
      },
      $e = (function () {
        function b(l, t) {
          Tr ||
            b.register(Z) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            i(this),
            this.init(l, t);
        }
        var e = b.prototype;
        return (
          (e.init = function (t, r) {
            if (
              ((this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              !n)
            ) {
              this.update = this.refresh = this.kill = W;
              return;
            }
            t = Ki(mt(t) || _t(t) || t.nodeType ? { trigger: t } : t, mi);
            var g = t,
              R = g.onUpdate,
              x = g.toggleClass,
              ee = g.id,
              be = g.onToggle,
              tt = g.onRefresh,
              Ie = g.scrub,
              de = g.trigger,
              H = g.pin,
              me = g.pinSpacing,
              zt = g.invalidateOnRefresh,
              vt = g.anticipatePin,
              Qt = g.onScrubComplete,
              Pt = g.onSnapComplete,
              pr = g.once,
              He = g.snap,
              tn = g.pinReparent,
              xt = g.pinSpacer,
              ye = g.containerAnimation,
              Ar = g.fastScrollEnd,
              Vr = g.preventOverlaps,
              he =
                t.horizontal || (t.containerAnimation && t.horizontal !== !1)
                  ? Ze
                  : Re,
              lr = !Ie && Ie !== 0,
              ke = Qe(t.scroller || le),
              bn = Z.core.getCache(ke),
              Kt = re(ke),
              Nr =
                ("pinType" in t
                  ? t.pinType
                  : wt(ke, "pinType") || (Kt && "fixed")) === "fixed",
              Rr = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
              pt = lr && t.toggleActions.split(" "),
              Bt = "markers" in t ? t.markers : mi.markers,
              It = Kt ? 0 : parseFloat(en(ke)["border" + he.p2 + Zn]) || 0,
              k = this,
              Jt =
                t.onRefreshInit &&
                function () {
                  return t.onRefreshInit(k);
                },
              In = Be(ke, Kt, he),
              Tn = Mt(ke, Kt),
              rn = 0,
              wn = 0,
              kr = 0,
              Xt = Fe(ke, he),
              Lr,
              Cr,
              En,
              zr,
              $r,
              Ke,
              Ot,
              Fr,
              Gr,
              A,
              jr,
              kn,
              Mn,
              Dt,
              Cn,
              Pn,
              Xn,
              ar,
              An,
              Vt,
              sn,
              nn,
              yn,
              si,
              Gt,
              Ei,
              xn,
              Jn,
              ei,
              Nn,
              Gn,
              Xe,
              jn,
              ln,
              an,
              fn,
              qn,
              ti,
              Sn;
            if (
              ((k._startClamp = k._endClamp = !1),
              (k._dir = he),
              (vt *= 45),
              (k.scroller = ke),
              (k.scroll = ye ? ye.time.bind(ye) : Xt),
              (zr = Xt()),
              (k.vars = t),
              (r = r || t.animation),
              "refreshPriority" in t &&
                ((Hr = 1), t.refreshPriority === -9999 && (oi = k)),
              (bn.tweenScroll = bn.tweenScroll || {
                top: co(ke, Re),
                left: co(ke, Ze),
              }),
              (k.tweenTo = Lr = bn.tweenScroll[he.p]),
              (k.scrubDuration = function (Q) {
                (jn = _t(Q) && Q),
                  jn
                    ? Xe
                      ? Xe.duration(Q)
                      : (Xe = Z.to(r, {
                          ease: "expo",
                          totalProgress: "+=0",
                          inherit: !1,
                          duration: jn,
                          paused: !0,
                          onComplete: function () {
                            return Qt && Qt(k);
                          },
                        }))
                    : (Xe && Xe.progress(1).kill(), (Xe = 0));
              }),
              r &&
                ((r.vars.lazy = !1),
                (r._initted && !k.isReverted) ||
                  (r.vars.immediateRender !== !1 &&
                    t.immediateRender !== !1 &&
                    r.duration() &&
                    r.render(0, !0, !0)),
                (k.animation = r.pause()),
                (r.scrollTrigger = k),
                k.scrubDuration(Ie),
                (Nn = 0),
                ee || (ee = r.vars.id)),
              He &&
                ((!Yt(He) || He.push) && (He = { snapTo: He }),
                "scrollBehavior" in ge.style &&
                  Z.set(Kt ? [ge, Nt] : ke, { scrollBehavior: "auto" }),
                oe.forEach(function (Q) {
                  return (
                    yt(Q) &&
                    Q.target === (Kt ? Me.scrollingElement || Nt : ke) &&
                    (Q.smooth = !1)
                  );
                }),
                (En = yt(He.snapTo)
                  ? He.snapTo
                  : He.snapTo === "labels"
                  ? Lo(r)
                  : He.snapTo === "labelsDirectional"
                  ? zo(r)
                  : He.directional !== !1
                  ? function (Q, Pe) {
                      return Di(He.snapTo)(
                        Q,
                        T() - wn < 500 ? 0 : Pe.direction
                      );
                    }
                  : Z.utils.snap(He.snapTo)),
                (ln = He.duration || { min: 0.1, max: 2 }),
                (ln = Yt(ln) ? qt(ln.min, ln.max) : qt(ln, ln)),
                (an = Z.delayedCall(He.delay || jn / 2 || 0.1, function () {
                  var Q = Xt(),
                    Pe = T() - wn < 500,
                    pe = Lr.tween;
                  if (
                    (Pe || Math.abs(k.getVelocity()) < 10) &&
                    !pe &&
                    !Er &&
                    rn !== Q
                  ) {
                    var Ae = (Q - Ke) / Dt,
                      fr = r && !lr ? r.totalProgress() : Ae,
                      qe = Pe ? 0 : ((fr - Gn) / (T() - Rt)) * 1e3 || 0,
                      $t = Z.utils.clamp(
                        -Ae,
                        1 - Ae,
                        (Lt(qe / 2) * qe) / 0.185
                      ),
                      yr = Ae + (He.inertia === !1 ? 0 : $t),
                      Ht,
                      St,
                      gt = He,
                      un = gt.onStart,
                      At = gt.onInterrupt,
                      qr = gt.onComplete;
                    if (
                      ((Ht = En(yr, k)),
                      _t(Ht) || (Ht = yr),
                      (St = Math.max(0, Math.round(Ke + Ht * Dt))),
                      Q <= Ot && Q >= Ke && St !== Q)
                    ) {
                      if (pe && !pe._initted && pe.data <= Lt(St - Q)) return;
                      He.inertia === !1 && ($t = Ht - Ae),
                        Lr(
                          St,
                          {
                            duration: ln(
                              Lt(
                                (Math.max(Lt(yr - fr), Lt(Ht - fr)) * 0.185) /
                                  qe /
                                  0.05 || 0
                              )
                            ),
                            ease: He.ease || "power3",
                            data: Lt(St - Q),
                            onInterrupt: function () {
                              return an.restart(!0) && At && At(k);
                            },
                            onComplete: function () {
                              k.update(),
                                (rn = Xt()),
                                r &&
                                  !lr &&
                                  (Xe
                                    ? Xe.resetTo(
                                        "totalProgress",
                                        Ht,
                                        r._tTime / r._tDur
                                      )
                                    : r.progress(Ht)),
                                (Nn = Gn =
                                  r && !lr ? r.totalProgress() : k.progress),
                                Pt && Pt(k),
                                qr && qr(k);
                            },
                          },
                          Q,
                          $t * Dt,
                          St - Q - $t * Dt
                        ),
                        un && un(k, Lr.tween);
                    }
                  } else k.isActive && rn !== Q && an.restart(!0);
                }).pause())),
              ee && (Hi[ee] = k),
              (de = k.trigger = Qe(de || (H !== !0 && H))),
              (Sn = de && de._gsap && de._gsap.stRevert),
              Sn && (Sn = Sn(k)),
              (H = H === !0 ? de : Qe(H)),
              mt(x) && (x = { targets: de, className: x }),
              H &&
                (me === !1 ||
                  me === Jr ||
                  (me =
                    !me &&
                    H.parentNode &&
                    H.parentNode.style &&
                    en(H.parentNode).display === "flex"
                      ? !1
                      : Ue),
                (k.pin = H),
                (Cr = Z.core.getCache(H)),
                Cr.spacer
                  ? (Cn = Cr.pinState)
                  : (xt &&
                      ((xt = Qe(xt)),
                      xt &&
                        !xt.nodeType &&
                        (xt = xt.current || xt.nativeElement),
                      (Cr.spacerIsNative = !!xt),
                      xt && (Cr.spacerState = yi(xt))),
                    (Cr.spacer = ar = xt || Me.createElement("div")),
                    ar.classList.add("pin-spacer"),
                    ee && ar.classList.add("pin-spacer-" + ee),
                    (Cr.pinState = Cn = yi(H))),
                t.force3D !== !1 && Z.set(H, { force3D: !0 }),
                (k.spacer = ar = Cr.spacer),
                (ei = en(H)),
                (si = ei[me + he.os2]),
                (Vt = Z.getProperty(H)),
                (sn = Z.quickSetter(H, he.a, Zt)),
                Yi(H, ar, ei),
                (Xn = yi(H))),
              Bt)
            ) {
              (kn = Yt(Bt) ? Ki(Bt, eo) : eo),
                (A = bi("scroller-start", ee, ke, he, kn, 0)),
                (jr = bi("scroller-end", ee, ke, he, kn, 0, A)),
                (An = A["offset" + he.op.d2]);
              var li = Qe(wt(ke, "content") || ke);
              (Fr = this.markerStart = bi("start", ee, li, he, kn, An, 0, ye)),
                (Gr = this.markerEnd = bi("end", ee, li, he, kn, An, 0, ye)),
                ye && (ti = Z.quickSetter([Fr, Gr], he.a, Zt)),
                !Nr &&
                  !(nt.length && wt(ke, "fixedMarkers") === !0) &&
                  (Ro(Kt ? ge : ke),
                  Z.set([A, jr], { force3D: !0 }),
                  (Ei = Z.quickSetter(A, he.a, Zt)),
                  (Jn = Z.quickSetter(jr, he.a, Zt)));
            }
            if (ye) {
              var Le = ye.vars.onUpdate,
                _e = ye.vars.onUpdateParams;
              ye.eventCallback("onUpdate", function () {
                k.update(0, 0, 1), Le && Le.apply(ye, _e || []);
              });
            }
            if (
              ((k.previous = function () {
                return Ve[Ve.indexOf(k) - 1];
              }),
              (k.next = function () {
                return Ve[Ve.indexOf(k) + 1];
              }),
              (k.revert = function (Q, Pe) {
                if (!Pe) return k.kill(!0);
                var pe = Q !== !1 || !k.enabled,
                  Ae = De;
                pe !== k.isReverted &&
                  (pe &&
                    ((fn = Math.max(Xt(), k.scroll.rec || 0)),
                    (kr = k.progress),
                    (qn = r && r.progress())),
                  Fr &&
                    [Fr, Gr, A, jr].forEach(function (fr) {
                      return (fr.style.display = pe ? "none" : "block");
                    }),
                  pe && ((De = k), k.update(pe)),
                  H &&
                    (!tn || !k.isActive) &&
                    (pe ? Oo(H, ar, Cn) : Yi(H, ar, en(H), Gt)),
                  pe || k.update(pe),
                  (De = Ae),
                  (k.isReverted = pe));
              }),
              (k.refresh = function (Q, Pe, pe, Ae) {
                if (!((De || !k.enabled) && !Pe)) {
                  if (H && Q && c) {
                    or(b, "scrollEnd", ro);
                    return;
                  }
                  !Pr && Jt && Jt(k),
                    (De = k),
                    Lr.tween && !pe && (Lr.tween.kill(), (Lr.tween = 0)),
                    Xe && Xe.pause(),
                    zt &&
                      r &&
                      (r.revert({ kill: !1 }).invalidate(),
                      r.getChildren &&
                        r.getChildren(!0, !0, !1).forEach(function (Rn) {
                          return (
                            Rn.vars.immediateRender && Rn.render(0, !0, !0)
                          );
                        })),
                    k.isReverted || k.revert(!0, !0),
                    (k._subPinOffset = !1);
                  var fr = In(),
                    qe = Tn(),
                    $t = ye ? ye.duration() : ht(ke, he),
                    yr = Dt <= 0.01 || !Dt,
                    Ht = 0,
                    St = Ae || 0,
                    gt = Yt(pe) ? pe.end : t.end,
                    un = t.endTrigger || de,
                    At = Yt(pe)
                      ? pe.start
                      : t.start ||
                        (t.start === 0 || !de ? 0 : H ? "0 0" : "0 100%"),
                    qr = (k.pinnedContainer =
                      t.pinnedContainer && Qe(t.pinnedContainer, k)),
                    cn = (de && Math.max(0, Ve.indexOf(k))) || 0,
                    gr = cn,
                    mr,
                    xr,
                    Wn,
                    Mi,
                    Sr,
                    er,
                    hn,
                    Ii,
                    _o,
                    ai,
                    dn,
                    fi,
                    Pi;
                  for (
                    Bt &&
                    Yt(pe) &&
                    ((fi = Z.getProperty(A, he.p)),
                    (Pi = Z.getProperty(jr, he.p)));
                    gr-- > 0;

                  )
                    (er = Ve[gr]),
                      er.end || er.refresh(0, 1) || (De = k),
                      (hn = er.pin),
                      hn &&
                        (hn === de || hn === H || hn === qr) &&
                        !er.isReverted &&
                        (ai || (ai = []), ai.unshift(er), er.revert(!0, !0)),
                      er !== Ve[gr] && (cn--, gr--);
                  for (
                    yt(At) && (At = At(k)),
                      At = m(At, "start", k),
                      Ke =
                        ao(
                          At,
                          de,
                          fr,
                          he,
                          Xt(),
                          Fr,
                          A,
                          k,
                          qe,
                          It,
                          Nr,
                          $t,
                          ye,
                          k._startClamp && "_startClamp"
                        ) || (H ? -0.001 : 0),
                      yt(gt) && (gt = gt(k)),
                      mt(gt) &&
                        !gt.indexOf("+=") &&
                        (~gt.indexOf(" ")
                          ? (gt = (mt(At) ? At.split(" ")[0] : "") + gt)
                          : ((Ht = vi(gt.substr(2), fr)),
                            (gt = mt(At)
                              ? At
                              : (ye
                                  ? Z.utils.mapRange(
                                      0,
                                      ye.duration(),
                                      ye.scrollTrigger.start,
                                      ye.scrollTrigger.end,
                                      Ke
                                    )
                                  : Ke) + Ht),
                            (un = de))),
                      gt = m(gt, "end", k),
                      Ot =
                        Math.max(
                          Ke,
                          ao(
                            gt || (un ? "100% 0" : $t),
                            un,
                            fr,
                            he,
                            Xt() + Ht,
                            Gr,
                            jr,
                            k,
                            qe,
                            It,
                            Nr,
                            $t,
                            ye,
                            k._endClamp && "_endClamp"
                          )
                        ) || -0.001,
                      Ht = 0,
                      gr = cn;
                    gr--;

                  )
                    (er = Ve[gr]),
                      (hn = er.pin),
                      hn &&
                        er.start - er._pinPush <= Ke &&
                        !ye &&
                        er.end > 0 &&
                        ((mr =
                          er.end -
                          (k._startClamp ? Math.max(0, er.start) : er.start)),
                        ((hn === de && er.start - er._pinPush < Ke) ||
                          hn === qr) &&
                          isNaN(At) &&
                          (Ht += mr * (1 - er.progress)),
                        hn === H && (St += mr));
                  if (
                    ((Ke += Ht),
                    (Ot += Ht),
                    k._startClamp && (k._startClamp += Ht),
                    k._endClamp &&
                      !Pr &&
                      ((k._endClamp = Ot || -0.001),
                      (Ot = Math.min(Ot, ht(ke, he)))),
                    (Dt = Ot - Ke || ((Ke -= 0.01) && 0.001)),
                    yr &&
                      (kr = Z.utils.clamp(0, 1, Z.utils.normalize(Ke, Ot, fn))),
                    (k._pinPush = St),
                    Fr &&
                      Ht &&
                      ((mr = {}),
                      (mr[he.a] = "+=" + Ht),
                      qr && (mr[he.p] = "-=" + Xt()),
                      Z.set([Fr, Gr], mr)),
                    H && !(v && k.end >= ht(ke, he)))
                  )
                    (mr = en(H)),
                      (Mi = he === Re),
                      (Wn = Xt()),
                      (nn = parseFloat(Vt(he.a)) + St),
                      !$t &&
                        Ot > 1 &&
                        ((dn = (Kt ? Me.scrollingElement || Nt : ke).style),
                        (dn = {
                          style: dn,
                          value: dn["overflow" + he.a.toUpperCase()],
                        }),
                        Kt &&
                          en(ge)["overflow" + he.a.toUpperCase()] !==
                            "scroll" &&
                          (dn.style["overflow" + he.a.toUpperCase()] =
                            "scroll")),
                      Yi(H, ar, mr),
                      (Xn = yi(H)),
                      (xr = _n(H, !0)),
                      (Ii = Nr && Fe(ke, Mi ? Ze : Re)()),
                      me
                        ? ((Gt = [me + he.os2, Dt + St + Zt]),
                          (Gt.t = ar),
                          (gr = me === Ue ? di(H, he) + Dt + St : 0),
                          gr &&
                            (Gt.push(he.d, gr + Zt),
                            ar.style.flexBasis !== "auto" &&
                              (ar.style.flexBasis = gr + Zt)),
                          Kn(Gt),
                          qr &&
                            Ve.forEach(function (Rn) {
                              Rn.pin === qr &&
                                Rn.vars.pinSpacing !== !1 &&
                                (Rn._subPinOffset = !0);
                            }),
                          Nr && Xt(fn))
                        : ((gr = di(H, he)),
                          gr &&
                            ar.style.flexBasis !== "auto" &&
                            (ar.style.flexBasis = gr + Zt)),
                      Nr &&
                        ((Sr = {
                          top: xr.top + (Mi ? Wn - Ke : Ii) + Zt,
                          left: xr.left + (Mi ? Ii : Wn - Ke) + Zt,
                          boxSizing: "border-box",
                          position: "fixed",
                        }),
                        (Sr[wr] = Sr["max" + Zn] = Math.ceil(xr.width) + Zt),
                        (Sr[Or] = Sr["max" + zi] = Math.ceil(xr.height) + Zt),
                        (Sr[Jr] =
                          Sr[Jr + On] =
                          Sr[Jr + Dn] =
                          Sr[Jr + Vn] =
                          Sr[Jr + Hn] =
                            "0"),
                        (Sr[Ue] = mr[Ue]),
                        (Sr[Ue + On] = mr[Ue + On]),
                        (Sr[Ue + Dn] = mr[Ue + Dn]),
                        (Sr[Ue + Vn] = mr[Ue + Vn]),
                        (Sr[Ue + Hn] = mr[Ue + Hn]),
                        (Pn = $o(Cn, Sr, tn)),
                        Pr && Xt(0)),
                      r
                        ? ((_o = r._initted),
                          ir(1),
                          r.render(r.duration(), !0, !0),
                          (yn = Vt(he.a) - nn + Dt + St),
                          (xn = Math.abs(Dt - yn) > 1),
                          Nr && xn && Pn.splice(Pn.length - 2, 2),
                          r.render(0, !0, !0),
                          _o || r.invalidate(!0),
                          r.parent || r.totalTime(r.totalTime()),
                          ir(0))
                        : (yn = Dt),
                      dn &&
                        (dn.value
                          ? (dn.style["overflow" + he.a.toUpperCase()] =
                              dn.value)
                          : dn.style.removeProperty("overflow-" + he.a));
                  else if (de && Xt() && !ye)
                    for (xr = de.parentNode; xr && xr !== ge; )
                      xr._pinOffset &&
                        ((Ke -= xr._pinOffset), (Ot -= xr._pinOffset)),
                        (xr = xr.parentNode);
                  ai &&
                    ai.forEach(function (Rn) {
                      return Rn.revert(!1, !0);
                    }),
                    (k.start = Ke),
                    (k.end = Ot),
                    (zr = $r = Pr ? fn : Xt()),
                    !ye && !Pr && (zr < fn && Xt(fn), (k.scroll.rec = 0)),
                    k.revert(!1, !0),
                    (wn = T()),
                    an && ((rn = -1), an.restart(!0)),
                    (De = 0),
                    r &&
                      lr &&
                      (r._initted || qn) &&
                      r.progress() !== qn &&
                      r.progress(qn || 0, !0).render(r.time(), !0, !0),
                    (yr ||
                      kr !== k.progress ||
                      ye ||
                      zt ||
                      (r && !r._initted)) &&
                      (r &&
                        !lr &&
                        (r._initted || kr || r.vars.immediateRender !== !1) &&
                        r.totalProgress(
                          ye && Ke < -0.001 && !kr
                            ? Z.utils.normalize(Ke, Ot, 0)
                            : kr,
                          !0
                        ),
                      (k.progress = yr || (zr - Ke) / Dt === kr ? 0 : kr)),
                    H && me && (ar._pinOffset = Math.round(k.progress * yn)),
                    Xe && Xe.invalidate(),
                    isNaN(fi) ||
                      ((fi -= Z.getProperty(A, he.p)),
                      (Pi -= Z.getProperty(jr, he.p)),
                      Si(A, he, fi),
                      Si(Fr, he, fi - (Ae || 0)),
                      Si(jr, he, Pi),
                      Si(Gr, he, Pi - (Ae || 0))),
                    yr && !Pr && k.update(),
                    tt && !Pr && !Mn && ((Mn = !0), tt(k), (Mn = !1));
                }
              }),
              (k.getVelocity = function () {
                return ((Xt() - $r) / (T() - Rt)) * 1e3 || 0;
              }),
              (k.endAnimation = function () {
                cr(k.callbackAnimation),
                  r &&
                    (Xe
                      ? Xe.progress(1)
                      : r.paused()
                      ? lr || cr(r, k.direction < 0, 1)
                      : cr(r, r.reversed()));
              }),
              (k.labelToScroll = function (Q) {
                return (
                  (r &&
                    r.labels &&
                    (Ke || k.refresh() || Ke) +
                      (r.labels[Q] / r.duration()) * Dt) ||
                  0
                );
              }),
              (k.getTrailing = function (Q) {
                var Pe = Ve.indexOf(k),
                  pe =
                    k.direction > 0
                      ? Ve.slice(0, Pe).reverse()
                      : Ve.slice(Pe + 1);
                return (
                  mt(Q)
                    ? pe.filter(function (Ae) {
                        return Ae.vars.preventOverlaps === Q;
                      })
                    : pe
                ).filter(function (Ae) {
                  return k.direction > 0 ? Ae.end <= Ke : Ae.start >= Ot;
                });
              }),
              (k.update = function (Q, Pe, pe) {
                if (!(ye && !pe && !Q)) {
                  var Ae = Pr === !0 ? fn : k.scroll(),
                    fr = Q ? 0 : (Ae - Ke) / Dt,
                    qe = fr < 0 ? 0 : fr > 1 ? 1 : fr || 0,
                    $t = k.progress,
                    yr,
                    Ht,
                    St,
                    gt,
                    un,
                    At,
                    qr,
                    cn;
                  if (
                    (Pe &&
                      (($r = zr),
                      (zr = ye ? Xt() : Ae),
                      He &&
                        ((Gn = Nn), (Nn = r && !lr ? r.totalProgress() : qe))),
                    vt &&
                      H &&
                      !De &&
                      !N &&
                      c &&
                      (!qe && Ke < Ae + ((Ae - $r) / (T() - Rt)) * vt
                        ? (qe = 1e-4)
                        : qe === 1 &&
                          Ot > Ae + ((Ae - $r) / (T() - Rt)) * vt &&
                          (qe = 0.9999)),
                    qe !== $t && k.enabled)
                  ) {
                    if (
                      ((yr = k.isActive = !!qe && qe < 1),
                      (Ht = !!$t && $t < 1),
                      (At = yr !== Ht),
                      (un = At || !!qe != !!$t),
                      (k.direction = qe > $t ? 1 : -1),
                      (k.progress = qe),
                      un &&
                        !De &&
                        ((St = qe && !$t ? 0 : qe === 1 ? 1 : $t === 1 ? 2 : 3),
                        lr &&
                          ((gt =
                            (!At && pt[St + 1] !== "none" && pt[St + 1]) ||
                            pt[St]),
                          (cn =
                            r &&
                            (gt === "complete" || gt === "reset" || gt in r)))),
                      Vr &&
                        (At || cn) &&
                        (cn || Ie || !r) &&
                        (yt(Vr)
                          ? Vr(k)
                          : k.getTrailing(Vr).forEach(function (Wn) {
                              return Wn.endAnimation();
                            })),
                      lr ||
                        (Xe && !De && !N
                          ? (Xe._dp._time - Xe._start !== Xe._time &&
                              Xe.render(Xe._dp._time - Xe._start),
                            Xe.resetTo
                              ? Xe.resetTo(
                                  "totalProgress",
                                  qe,
                                  r._tTime / r._tDur
                                )
                              : ((Xe.vars.totalProgress = qe),
                                Xe.invalidate().restart()))
                          : r && r.totalProgress(qe, !!(De && (wn || Q)))),
                      H)
                    ) {
                      if ((Q && me && (ar.style[me + he.os2] = si), !Nr))
                        sn(X(nn + yn * qe));
                      else if (un) {
                        if (
                          ((qr =
                            !Q &&
                            qe > $t &&
                            Ot + 1 > Ae &&
                            Ae + 1 >= ht(ke, he)),
                          tn)
                        )
                          if (!Q && (yr || qr)) {
                            var gr = _n(H, !0),
                              mr = Ae - Ke;
                            fo(
                              H,
                              ge,
                              gr.top + (he === Re ? mr : 0) + Zt,
                              gr.left + (he === Re ? 0 : mr) + Zt
                            );
                          } else fo(H, ar);
                        Kn(yr || qr ? Pn : Xn),
                          (xn && qe < 1 && yr) ||
                            sn(nn + (qe === 1 && !qr ? yn : 0));
                      }
                    }
                    He && !Lr.tween && !De && !N && an.restart(!0),
                      x &&
                        (At || (pr && qe && (qe < 1 || !E))) &&
                        vr(x.targets).forEach(function (Wn) {
                          return Wn.classList[yr || pr ? "add" : "remove"](
                            x.className
                          );
                        }),
                      R && !lr && !Q && R(k),
                      un && !De
                        ? (lr &&
                            (cn &&
                              (gt === "complete"
                                ? r.pause().totalProgress(1)
                                : gt === "reset"
                                ? r.restart(!0).pause()
                                : gt === "restart"
                                ? r.restart(!0)
                                : r[gt]()),
                            R && R(k)),
                          (At || !E) &&
                            (be && At && dt(k, be),
                            Rr[St] && dt(k, Rr[St]),
                            pr && (qe === 1 ? k.kill(!1, 1) : (Rr[St] = 0)),
                            At ||
                              ((St = qe === 1 ? 1 : 3),
                              Rr[St] && dt(k, Rr[St]))),
                          Ar &&
                            !yr &&
                            Math.abs(k.getVelocity()) > (_t(Ar) ? Ar : 2500) &&
                            (cr(k.callbackAnimation),
                            Xe
                              ? Xe.progress(1)
                              : cr(r, gt === "reverse" ? 1 : !qe, 1)))
                        : lr && R && !De && R(k);
                  }
                  if (Jn) {
                    var xr = ye
                      ? (Ae / ye.duration()) * (ye._caScrollDist || 0)
                      : Ae;
                    Ei(xr + (A._isFlipped ? 1 : 0)), Jn(xr);
                  }
                  ti && ti((-Ae / ye.duration()) * (ye._caScrollDist || 0));
                }
              }),
              (k.enable = function (Q, Pe) {
                k.enabled ||
                  ((k.enabled = !0),
                  or(ke, "resize", ii),
                  Kt || or(ke, "scroll", Qn),
                  Jt && or(b, "refreshInit", Jt),
                  Q !== !1 && ((k.progress = kr = 0), (zr = $r = rn = Xt())),
                  Pe !== !1 && k.refresh());
              }),
              (k.getTween = function (Q) {
                return Q && Lr ? Lr.tween : Xe;
              }),
              (k.setPositions = function (Q, Pe, pe, Ae) {
                if (ye) {
                  var fr = ye.scrollTrigger,
                    qe = ye.duration(),
                    $t = fr.end - fr.start;
                  (Q = fr.start + ($t * Q) / qe),
                    (Pe = fr.start + ($t * Pe) / qe);
                }
                k.refresh(
                  !1,
                  !1,
                  {
                    start: z(Q, pe && !!k._startClamp),
                    end: z(Pe, pe && !!k._endClamp),
                  },
                  Ae
                ),
                  k.update();
              }),
              (k.adjustPinSpacing = function (Q) {
                if (Gt && Q) {
                  var Pe = Gt.indexOf(he.d) + 1;
                  (Gt[Pe] = parseFloat(Gt[Pe]) + Q + Zt),
                    (Gt[1] = parseFloat(Gt[1]) + Q + Zt),
                    Kn(Gt);
                }
              }),
              (k.disable = function (Q, Pe) {
                if (
                  k.enabled &&
                  (Q !== !1 && k.revert(!0, !0),
                  (k.enabled = k.isActive = !1),
                  Pe || (Xe && Xe.pause()),
                  (fn = 0),
                  Cr && (Cr.uncache = 1),
                  Jt && sr(b, "refreshInit", Jt),
                  an &&
                    (an.pause(), Lr.tween && Lr.tween.kill() && (Lr.tween = 0)),
                  !Kt)
                ) {
                  for (var pe = Ve.length; pe--; )
                    if (Ve[pe].scroller === ke && Ve[pe] !== k) return;
                  sr(ke, "resize", ii), Kt || sr(ke, "scroll", Qn);
                }
              }),
              (k.kill = function (Q, Pe) {
                k.disable(Q, Pe), Xe && !Pe && Xe.kill(), ee && delete Hi[ee];
                var pe = Ve.indexOf(k);
                pe >= 0 && Ve.splice(pe, 1),
                  pe === We && ki > 0 && We--,
                  (pe = 0),
                  Ve.forEach(function (Ae) {
                    return Ae.scroller === k.scroller && (pe = 1);
                  }),
                  pe || Pr || (k.scroll.rec = 0),
                  r &&
                    ((r.scrollTrigger = null),
                    Q && r.revert({ kill: !1 }),
                    Pe || r.kill()),
                  Fr &&
                    [Fr, Gr, A, jr].forEach(function (Ae) {
                      return Ae.parentNode && Ae.parentNode.removeChild(Ae);
                    }),
                  oi === k && (oi = 0),
                  H &&
                    (Cr && (Cr.uncache = 1),
                    (pe = 0),
                    Ve.forEach(function (Ae) {
                      return Ae.pin === H && pe++;
                    }),
                    pe || (Cr.spacer = 0)),
                  t.onKill && t.onKill(k);
              }),
              Ve.push(k),
              k.enable(!1, !1),
              Sn && Sn(k),
              r && r.add && !Dt)
            ) {
              var rt = k.update;
              (k.update = function () {
                (k.update = rt), oe.cache++, Ke || Ot || k.refresh();
              }),
                Z.delayedCall(0.01, k.update),
                (Dt = 0.01),
                (Ke = Ot = 0);
            } else k.refresh();
            H && Ho();
          }),
          (b.register = function (t) {
            return (
              Tr ||
                ((Z = t || se()),
                j() && window.document && b.enable(),
                (Tr = n)),
              Tr
            );
          }),
          (b.defaults = function (t) {
            if (t) for (var r in t) mi[r] = t[r];
            return mi;
          }),
          (b.disable = function (t, r) {
            (n = 0),
              Ve.forEach(function (R) {
                return R[r ? "kill" : "disable"](t);
              }),
              sr(le, "wheel", Qn),
              sr(Me, "scroll", Qn),
              clearInterval(bt),
              sr(Me, "touchcancel", W),
              sr(ge, "touchstart", W),
              pi(sr, Me, "pointerdown,touchstart,mousedown", P),
              pi(sr, Me, "pointerup,touchend,mouseup", M),
              rr.kill(),
              br(sr);
            for (var g = 0; g < oe.length; g += 3)
              gi(sr, oe[g], oe[g + 1]), gi(sr, oe[g], oe[g + 2]);
          }),
          (b.enable = function () {
            if (
              ((le = window),
              (Me = document),
              (Nt = Me.documentElement),
              (ge = Me.body),
              Z &&
                ((vr = Z.utils.toArray),
                (qt = Z.utils.clamp),
                (i = Z.core.context || W),
                (ir = Z.core.suppressOverwrites || W),
                (s = le.history.scrollRestoration || "auto"),
                ($i = le.pageYOffset || 0),
                Z.core.globals("ScrollTrigger", b),
                ge))
            ) {
              (n = 1),
                (p = document.createElement("div")),
                (p.style.height = "100vh"),
                (p.style.position = "absolute"),
                so(),
                y(),
                Ye.register(Z),
                (b.isTouch = Ye.isTouch),
                (S =
                  Ye.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                (Mr = Ye.isTouch === 1),
                or(le, "wheel", Qn),
                (Ft = [le, Me, Nt, ge]),
                Z.matchMedia
                  ? ((b.matchMedia = function (be) {
                      var tt = Z.matchMedia(),
                        Ie;
                      for (Ie in be) tt.add(Ie, be[Ie]);
                      return tt;
                    }),
                    Z.addEventListener("matchMediaInit", function () {
                      return Vi();
                    }),
                    Z.addEventListener("matchMediaRevert", function () {
                      return no();
                    }),
                    Z.addEventListener("matchMedia", function () {
                      Bn(0, 1), Fn("matchMedia");
                    }),
                    Z.matchMedia().add("(orientation: portrait)", function () {
                      return Oi(), Oi;
                    }))
                  : console.warn("Requires GSAP 3.11.0 or later"),
                Oi(),
                or(Me, "scroll", Qn);
              var t = ge.hasAttribute("style"),
                r = ge.style,
                g = r.borderTopStyle,
                R = Z.core.Animation.prototype,
                x,
                ee;
              for (
                R.revert ||
                  Object.defineProperty(R, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  r.borderTopStyle = "solid",
                  x = _n(ge),
                  Re.m = Math.round(x.top + Re.sc()) || 0,
                  Ze.m = Math.round(x.left + Ze.sc()) || 0,
                  g
                    ? (r.borderTopStyle = g)
                    : r.removeProperty("border-top-style"),
                  t ||
                    (ge.setAttribute("style", ""), ge.removeAttribute("style")),
                  bt = setInterval(to, 250),
                  Z.delayedCall(0.5, function () {
                    return (N = 0);
                  }),
                  or(Me, "touchcancel", W),
                  or(ge, "touchstart", W),
                  pi(or, Me, "pointerdown,touchstart,mousedown", P),
                  pi(or, Me, "pointerup,touchend,mouseup", M),
                  kt = Z.utils.checkPrefix("transform"),
                  Ci.push(kt),
                  Tr = T(),
                  rr = Z.delayedCall(0.2, Bn).pause(),
                  ur = [
                    Me,
                    "visibilitychange",
                    function () {
                      var be = le.innerWidth,
                        tt = le.innerHeight;
                      Me.hidden
                        ? ((Ct = be), (nr = tt))
                        : (Ct !== be || nr !== tt) && ii();
                    },
                    Me,
                    "DOMContentLoaded",
                    Bn,
                    le,
                    "load",
                    Bn,
                    le,
                    "resize",
                    ii,
                  ],
                  br(or),
                  Ve.forEach(function (be) {
                    return be.enable(0, 1);
                  }),
                  ee = 0;
                ee < oe.length;
                ee += 3
              )
                gi(sr, oe[ee], oe[ee + 1]), gi(sr, oe[ee], oe[ee + 2]);
            }
          }),
          (b.config = function (t) {
            "limitCallbacks" in t && (E = !!t.limitCallbacks);
            var r = t.syncInterval;
            (r && clearInterval(bt)) || ((bt = r) && setInterval(to, r)),
              "ignoreMobileResize" in t &&
                (Mr = b.isTouch === 1 && t.ignoreMobileResize),
              "autoRefreshEvents" in t &&
                (br(sr) || br(or, t.autoRefreshEvents || "none"),
                (Kr = (t.autoRefreshEvents + "").indexOf("resize") === -1));
          }),
          (b.scrollerProxy = function (t, r) {
            var g = Qe(t),
              R = oe.indexOf(g),
              x = re(g);
            ~R && oe.splice(R, x ? 6 : 2),
              r && (x ? nt.unshift(le, r, ge, r, Nt, r) : nt.unshift(g, r));
          }),
          (b.clearMatchMedia = function (t) {
            Ve.forEach(function (r) {
              return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0);
            });
          }),
          (b.isInViewport = function (t, r, g) {
            var R = (mt(t) ? Qe(t) : t).getBoundingClientRect(),
              x = R[g ? wr : Or] * r || 0;
            return g
              ? R.right - x > 0 && R.left + x < le.innerWidth
              : R.bottom - x > 0 && R.top + x < le.innerHeight;
          }),
          (b.positionInViewport = function (t, r, g) {
            mt(t) && (t = Qe(t));
            var R = t.getBoundingClientRect(),
              x = R[g ? wr : Or],
              ee =
                r == null
                  ? x / 2
                  : r in _i
                  ? _i[r] * x
                  : ~r.indexOf("%")
                  ? (parseFloat(r) * x) / 100
                  : parseFloat(r) || 0;
            return g
              ? (R.left + ee) / le.innerWidth
              : (R.top + ee) / le.innerHeight;
          }),
          (b.killAll = function (t) {
            if (
              (Ve.slice(0).forEach(function (g) {
                return g.vars.id !== "ScrollSmoother" && g.kill();
              }),
              t !== !0)
            ) {
              var r = $n.killAll || [];
              ($n = {}),
                r.forEach(function (g) {
                  return g();
                });
            }
          }),
          b
        );
      })();
    ($e.version = "3.13.0"),
      ($e.saveStyles = function (b) {
        return b
          ? vr(b).forEach(function (e) {
              if (e && e.style) {
                var l = Xr.indexOf(e);
                l >= 0 && Xr.splice(l, 5),
                  Xr.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute("transform"),
                    Z.core.getCache(e),
                    i()
                  );
              }
            })
          : Xr;
      }),
      ($e.revert = function (b, e) {
        return Vi(!b, e);
      }),
      ($e.create = function (b, e) {
        return new $e(b, e);
      }),
      ($e.refresh = function (b) {
        return b ? ii(!0) : (Tr || $e.register()) && Bn(!0);
      }),
      ($e.update = function (b) {
        return ++oe.cache && vn(b === !0 ? 2 : 0);
      }),
      ($e.clearScrollMemory = io),
      ($e.maxScroll = function (b, e) {
        return ht(b, e ? Ze : Re);
      }),
      ($e.getScrollFunc = function (b, e) {
        return Fe(Qe(b), e ? Ze : Re);
      }),
      ($e.getById = function (b) {
        return Hi[b];
      }),
      ($e.getAll = function () {
        return Ve.filter(function (b) {
          return b.vars.id !== "ScrollSmoother";
        });
      }),
      ($e.isScrolling = function () {
        return !!c;
      }),
      ($e.snapDirectional = Di),
      ($e.addEventListener = function (b, e) {
        var l = $n[b] || ($n[b] = []);
        ~l.indexOf(e) || l.push(e);
      }),
      ($e.removeEventListener = function (b, e) {
        var l = $n[b],
          t = l && l.indexOf(e);
        t >= 0 && l.splice(t, 1);
      }),
      ($e.batch = function (b, e) {
        var l = [],
          t = {},
          r = e.interval || 0.016,
          g = e.batchMax || 1e9,
          R = function (be, tt) {
            var Ie = [],
              de = [],
              H = Z.delayedCall(r, function () {
                tt(Ie, de), (Ie = []), (de = []);
              }).pause();
            return function (me) {
              Ie.length || H.restart(!0),
                Ie.push(me.trigger),
                de.push(me),
                g <= Ie.length && H.progress(1);
            };
          },
          x;
        for (x in e)
          t[x] =
            x.substr(0, 2) === "on" && yt(e[x]) && x !== "onRefreshInit"
              ? R(x, e[x])
              : e[x];
        return (
          yt(g) &&
            ((g = g()),
            or($e, "refresh", function () {
              return (g = e.batchMax());
            })),
          vr(b).forEach(function (ee) {
            var be = {};
            for (x in t) be[x] = t[x];
            (be.trigger = ee), l.push($e.create(be));
          }),
          l
        );
      });
    var ho = function (e, l, t, r) {
        return (
          l > r ? e(r) : l < 0 && e(0),
          t > r ? (r - l) / (t - l) : t < 0 ? l / (l - t) : 1
        );
      },
      Bi = function b(e, l) {
        l === !0
          ? e.style.removeProperty("touch-action")
          : (e.style.touchAction =
              l === !0
                ? "auto"
                : l
                ? "pan-" + l + (Ye.isTouch ? " pinch-zoom" : "")
                : "none"),
          e === Nt && b(ge, l);
      },
      Ti = { auto: 1, scroll: 1 },
      Yo = function (e) {
        var l = e.event,
          t = e.target,
          r = e.axis,
          g = (l.changedTouches ? l.changedTouches[0] : l).target,
          R = g._gsap || Z.core.getCache(g),
          x = T(),
          ee;
        if (!R._isScrollT || x - R._isScrollT > 2e3) {
          for (
            ;
            g &&
            g !== ge &&
            ((g.scrollHeight <= g.clientHeight &&
              g.scrollWidth <= g.clientWidth) ||
              !(Ti[(ee = en(g)).overflowY] || Ti[ee.overflowX]));

          )
            g = g.parentNode;
          (R._isScroll =
            g &&
            g !== t &&
            !re(g) &&
            (Ti[(ee = en(g)).overflowY] || Ti[ee.overflowX])),
            (R._isScrollT = x);
        }
        (R._isScroll || r === "x") &&
          (l.stopPropagation(), (l._gsapAllow = !0));
      },
      po = function (e, l, t, r) {
        return Ye.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: l,
          onWheel: (r = r && Yo),
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: function () {
            return t && or(Me, Ye.eventTypes[0], mo, !1, !0);
          },
          onDisable: function () {
            return sr(Me, Ye.eventTypes[0], mo, !0);
          },
        });
      },
      Bo = /(input|label|select|textarea)/i,
      go,
      mo = function (e) {
        var l = Bo.test(e.target.tagName);
        (l || go) && ((e._gsapAllow = !0), (go = l));
      },
      Io = function (e) {
        Yt(e) || (e = {}),
          (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
          e.type || (e.type = "wheel,touch"),
          (e.debounce = !!e.debounce),
          (e.id = e.id || "normalizer");
        var l = e,
          t = l.normalizeScrollX,
          r = l.momentum,
          g = l.allowNestedScroll,
          R = l.onRelease,
          x,
          ee,
          be = Qe(e.target) || Nt,
          tt = Z.core.globals().ScrollSmoother,
          Ie = tt && tt.get(),
          de =
            S &&
            ((e.content && Qe(e.content)) ||
              (Ie && e.content !== !1 && !Ie.smooth() && Ie.content())),
          H = Fe(be, Re),
          me = Fe(be, Ze),
          zt = 1,
          vt =
            (Ye.isTouch && le.visualViewport
              ? le.visualViewport.scale * le.visualViewport.width
              : le.outerWidth) / le.innerWidth,
          Qt = 0,
          Pt = yt(r)
            ? function () {
                return r(x);
              }
            : function () {
                return r || 2.8;
              },
          pr,
          He,
          tn = po(be, e.type, !0, g),
          xt = function () {
            return (He = !1);
          },
          ye = W,
          Ar = W,
          Vr = function () {
            (ee = ht(be, Re)),
              (Ar = qt(S ? 1 : 0, ee)),
              t && (ye = qt(0, ht(be, Ze))),
              (pr = Yn);
          },
          he = function () {
            (de._gsap.y = X(parseFloat(de._gsap.y) + H.offset) + "px"),
              (de.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                parseFloat(de._gsap.y) +
                ", 0, 1)"),
              (H.offset = H.cacheID = 0);
          },
          lr = function () {
            if (He) {
              requestAnimationFrame(xt);
              var Bt = X(x.deltaY / 2),
                It = Ar(H.v - Bt);
              if (de && It !== H.v + H.offset) {
                H.offset = It - H.v;
                var k = X((parseFloat(de && de._gsap.y) || 0) - H.offset);
                (de.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  k +
                  ", 0, 1)"),
                  (de._gsap.y = k + "px"),
                  (H.cacheID = oe.cache),
                  vn();
              }
              return !0;
            }
            H.offset && he(), (He = !0);
          },
          ke,
          bn,
          Kt,
          Nr,
          Rr = function () {
            Vr(),
              ke.isActive() &&
                ke.vars.scrollY > ee &&
                (H() > ee
                  ? ke.progress(1) && H(ee)
                  : ke.resetTo("scrollY", ee));
          };
        return (
          de && Z.set(de, { y: "+=0" }),
          (e.ignoreCheck = function (pt) {
            return (
              (S && pt.type === "touchmove" && lr()) ||
              (zt > 1.05 && pt.type !== "touchstart") ||
              x.isGesturing ||
              (pt.touches && pt.touches.length > 1)
            );
          }),
          (e.onPress = function () {
            He = !1;
            var pt = zt;
            (zt = X(
              ((le.visualViewport && le.visualViewport.scale) || 1) / vt
            )),
              ke.pause(),
              pt !== zt && Bi(be, zt > 1.01 ? !0 : t ? !1 : "x"),
              (bn = me()),
              (Kt = H()),
              Vr(),
              (pr = Yn);
          }),
          (e.onRelease = e.onGestureStart =
            function (pt, Bt) {
              if ((H.offset && he(), !Bt)) Nr.restart(!0);
              else {
                oe.cache++;
                var It = Pt(),
                  k,
                  Jt;
                t &&
                  ((k = me()),
                  (Jt = k + (It * 0.05 * -pt.velocityX) / 0.227),
                  (It *= ho(me, k, Jt, ht(be, Ze))),
                  (ke.vars.scrollX = ye(Jt))),
                  (k = H()),
                  (Jt = k + (It * 0.05 * -pt.velocityY) / 0.227),
                  (It *= ho(H, k, Jt, ht(be, Re))),
                  (ke.vars.scrollY = Ar(Jt)),
                  ke.invalidate().duration(It).play(0.01),
                  ((S && ke.vars.scrollY >= ee) || k >= ee - 1) &&
                    Z.to({}, { onUpdate: Rr, duration: It });
              }
              R && R(pt);
            }),
          (e.onWheel = function () {
            ke._ts && ke.pause(), T() - Qt > 1e3 && ((pr = 0), (Qt = T()));
          }),
          (e.onChange = function (pt, Bt, It, k, Jt) {
            if (
              (Yn !== pr && Vr(),
              Bt &&
                t &&
                me(
                  ye(k[2] === Bt ? bn + (pt.startX - pt.x) : me() + Bt - k[1])
                ),
              It)
            ) {
              H.offset && he();
              var In = Jt[2] === It,
                Tn = In ? Kt + pt.startY - pt.y : H() + It - Jt[1],
                rn = Ar(Tn);
              In && Tn !== rn && (Kt += rn - Tn), H(rn);
            }
            (It || Bt) && vn();
          }),
          (e.onEnable = function () {
            Bi(be, t ? !1 : "x"),
              $e.addEventListener("refresh", Rr),
              or(le, "resize", Rr),
              H.smooth &&
                ((H.target.style.scrollBehavior = "auto"),
                (H.smooth = me.smooth = !1)),
              tn.enable();
          }),
          (e.onDisable = function () {
            Bi(be, !0),
              sr(le, "resize", Rr),
              $e.removeEventListener("refresh", Rr),
              tn.kill();
          }),
          (e.lockAxis = e.lockAxis !== !1),
          (x = new Ye(e)),
          (x.iOS = S),
          S && !H() && H(1),
          S && Z.ticker.add(W),
          (Nr = x._dc),
          (ke = Z.to(x, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: t ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: uo(H, H(), function () {
                return ke.pause();
              }),
            },
            onUpdate: vn,
            onComplete: Nr.vars.onComplete,
          })),
          x
        );
      };
    ($e.sort = function (b) {
      if (yt(b)) return Ve.sort(b);
      var e = le.pageYOffset || 0;
      return (
        $e.getAll().forEach(function (l) {
          return (l._sortY = l.trigger
            ? e + l.trigger.getBoundingClientRect().top
            : l.start + le.innerHeight);
        }),
        Ve.sort(
          b ||
            function (l, t) {
              return (
                (l.vars.refreshPriority || 0) * -1e6 +
                (l.vars.containerAnimation ? 1e6 : l._sortY) -
                ((t.vars.containerAnimation ? 1e6 : t._sortY) +
                  (t.vars.refreshPriority || 0) * -1e6)
              );
            }
        )
      );
    }),
      ($e.observe = function (b) {
        return new Ye(b);
      }),
      ($e.normalizeScroll = function (b) {
        if (typeof b > "u") return ut;
        if (b === !0 && ut) return ut.enable();
        if (b === !1) {
          ut && ut.kill(), (ut = b);
          return;
        }
        var e = b instanceof Ye ? b : Io(b);
        return (
          ut && ut.target === e.target && ut.kill(), re(e.target) && (ut = e), e
        );
      }),
      ($e.core = {
        _getVelocityProp: ft,
        _inputObserver: po,
        _scrollers: oe,
        _proxies: nt,
        bridge: {
          ss: function () {
            c || Fn("scrollStart"), (c = T());
          },
          ref: function () {
            return De;
          },
        },
      }),
      se() && Z.registerPlugin($e),
      (a.ScrollTrigger = $e),
      (a.default = $e),
      typeof window > "u" || window !== a
        ? Object.defineProperty(a, "__esModule", { value: !0 })
        : delete window.default;
  });
})(qi, qi.exports);
var Gi = qi.exports;
const Li = fs(!1);
function hs() {
  Li.update((_) => !_);
}
function ds() {
  Li.set(!1);
}
var Wi = { exports: {} };
(function (_, o) {
  (function (a, u) {
    u(o);
  })(Qi, function (a) {
    var u = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      d = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      h = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      D = /(^[#\.][a-z]|[a-y][a-z])/i,
      L = Math.PI / 180,
      K = Math.sin,
      F = Math.cos,
      V = Math.abs,
      U = Math.sqrt,
      fe = function (i) {
        return typeof i == "string";
      },
      $ = function (i) {
        return typeof i == "number";
      },
      Y = 1e5,
      q = function (i) {
        return Math.round(i * Y) / Y || 0;
      };
    function G(S) {
      S = (fe(S) && D.test(S) && document.querySelector(S)) || S;
      var i = S.getAttribute ? S : 0,
        s;
      return i && (S = S.getAttribute("d"))
        ? (i._gsPath || (i._gsPath = {}),
          (s = i._gsPath[S]),
          s && !s._dirty ? s : (i._gsPath[S] = Ce(S)))
        : S
        ? fe(S)
          ? Ce(S)
          : $(S[0])
          ? [S]
          : S
        : console.warn("Expecting a <path> element or an SVG path data string");
    }
    function we(S) {
      var i = 0,
        s;
      for (S.reverse(); i < S.length; i += 2)
        (s = S[i]), (S[i] = S[i + 1]), (S[i + 1] = s);
      S.reversed = !S.reversed;
    }
    var ie = function (i, s) {
        var p = document.createElementNS("http://www.w3.org/2000/svg", "path"),
          w = [].slice.call(i.attributes),
          C = w.length,
          v;
        for (s = "," + s + ","; --C > -1; )
          (v = w[C].nodeName.toLowerCase()),
            s.indexOf("," + v + ",") < 0 &&
              p.setAttributeNS(null, v, w[C].nodeValue);
        return p;
      },
      xe = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2",
      },
      at = function (i, s) {
        for (var p = s ? s.split(",") : [], w = {}, C = p.length; --C > -1; )
          w[p[C]] = +i.getAttribute(p[C]) || 0;
        return w;
      };
    function oe(S, i) {
      var s = S.tagName.toLowerCase(),
        p = 0.552284749831,
        w,
        C,
        v,
        E,
        N,
        T,
        I,
        c,
        n,
        m,
        z,
        y,
        P,
        M,
        W,
        X,
        j,
        se,
        re,
        Oe,
        ne,
        Be;
      return s === "path" || !S.getBBox
        ? S
        : ((T = ie(S, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
          (Be = at(S, xe[s])),
          s === "rect"
            ? ((E = Be.rx),
              (N = Be.ry || E),
              (C = Be.x),
              (v = Be.y),
              (m = Be.width - E * 2),
              (z = Be.height - N * 2),
              E || N
                ? ((y = C + E * (1 - p)),
                  (P = C + E),
                  (M = P + m),
                  (W = M + E * p),
                  (X = M + E),
                  (j = v + N * (1 - p)),
                  (se = v + N),
                  (re = se + z),
                  (Oe = re + N * p),
                  (ne = re + N),
                  (w =
                    "M" +
                    X +
                    "," +
                    se +
                    " V" +
                    re +
                    " C" +
                    [
                      X,
                      Oe,
                      W,
                      ne,
                      M,
                      ne,
                      M - (M - P) / 3,
                      ne,
                      P + (M - P) / 3,
                      ne,
                      P,
                      ne,
                      y,
                      ne,
                      C,
                      Oe,
                      C,
                      re,
                      C,
                      re - (re - se) / 3,
                      C,
                      se + (re - se) / 3,
                      C,
                      se,
                      C,
                      j,
                      y,
                      v,
                      P,
                      v,
                      P + (M - P) / 3,
                      v,
                      M - (M - P) / 3,
                      v,
                      M,
                      v,
                      W,
                      v,
                      X,
                      j,
                      X,
                      se,
                    ].join(",") +
                    "z"))
                : (w =
                    "M" +
                    (C + m) +
                    "," +
                    v +
                    " v" +
                    z +
                    " h" +
                    -m +
                    " v" +
                    -z +
                    " h" +
                    m +
                    "z"))
            : s === "circle" || s === "ellipse"
            ? (s === "circle"
                ? ((E = N = Be.r), (c = E * p))
                : ((E = Be.rx), (N = Be.ry), (c = N * p)),
              (C = Be.cx),
              (v = Be.cy),
              (I = E * p),
              (w =
                "M" +
                (C + E) +
                "," +
                v +
                " C" +
                [
                  C + E,
                  v + c,
                  C + I,
                  v + N,
                  C,
                  v + N,
                  C - I,
                  v + N,
                  C - E,
                  v + c,
                  C - E,
                  v,
                  C - E,
                  v - c,
                  C - I,
                  v - N,
                  C,
                  v - N,
                  C + I,
                  v - N,
                  C + E,
                  v - c,
                  C + E,
                  v,
                ].join(",") +
                "z"))
            : s === "line"
            ? (w = "M" + Be.x1 + "," + Be.y1 + " L" + Be.x2 + "," + Be.y2)
            : (s === "polyline" || s === "polygon") &&
              ((n = (S.getAttribute("points") + "").match(d) || []),
              (C = n.shift()),
              (v = n.shift()),
              (w = "M" + C + "," + v + " L" + n.join(",")),
              s === "polygon" && (w += "," + C + "," + v + "z")),
          T.setAttribute("d", J((T._gsRawPath = Ce(w)))),
          i &&
            S.parentNode &&
            (S.parentNode.insertBefore(T, S), S.parentNode.removeChild(S)),
          T);
    }
    function nt(S, i, s, p, w, C, v, E, N) {
      if (!(S === E && i === N)) {
        (s = V(s)), (p = V(p));
        var T = (w % 360) * L,
          I = F(T),
          c = K(T),
          n = Math.PI,
          m = n * 2,
          z = (S - E) / 2,
          y = (i - N) / 2,
          P = I * z + c * y,
          M = -c * z + I * y,
          W = P * P,
          X = M * M,
          j = W / (s * s) + X / (p * p);
        j > 1 && ((s = U(j) * s), (p = U(j) * p));
        var se = s * s,
          re = p * p,
          Oe = (se * re - se * X - re * W) / (se * X + re * W);
        Oe < 0 && (Oe = 0);
        var ne = (C === v ? -1 : 1) * U(Oe),
          Be = ne * ((s * M) / p),
          Mt = ne * -((p * P) / s),
          ht = (S + E) / 2,
          br = (i + N) / 2,
          mt = ht + (I * Be - c * Mt),
          yt = br + (c * Be + I * Mt),
          _t = (P - Be) / s,
          Yt = (M - Mt) / p,
          cr = (-P - Be) / s,
          dt = (-M - Mt) / p,
          Lt = _t * _t + Yt * Yt,
          on = (Yt < 0 ? -1 : 1) * Math.acos(_t / U(Lt)),
          hr =
            (_t * dt - Yt * cr < 0 ? -1 : 1) *
            Math.acos((_t * cr + Yt * dt) / U(Lt * (cr * cr + dt * dt)));
        isNaN(hr) && (hr = n),
          !v && hr > 0 ? (hr -= m) : v && hr < 0 && (hr += m),
          (on %= m),
          (hr %= m);
        var dr = Math.ceil(V(hr) / (m / 4)),
          Ut = [],
          wr = hr / dr,
          Or = ((4 / 3) * K(wr / 2)) / (1 + F(wr / 2)),
          Dn = I * s,
          Hn = c * s,
          On = c * -p,
          Vn = I * p,
          Ue;
        for (Ue = 0; Ue < dr; Ue++)
          (w = on + Ue * wr),
            (P = F(w)),
            (M = K(w)),
            (_t = F((w += wr))),
            (Yt = K(w)),
            Ut.push(P - Or * M, M + Or * P, _t + Or * Yt, Yt - Or * _t, _t, Yt);
        for (Ue = 0; Ue < Ut.length; Ue += 2)
          (P = Ut[Ue]),
            (M = Ut[Ue + 1]),
            (Ut[Ue] = P * Dn + M * On + mt),
            (Ut[Ue + 1] = P * Hn + M * Vn + yt);
        return (Ut[Ue - 2] = E), (Ut[Ue - 1] = N), Ut;
      }
    }
    function Ce(S) {
      var i =
          (S + "")
            .replace(h, function (Be) {
              var Mt = +Be;
              return Mt < 1e-4 && Mt > -1e-4 ? 0 : Mt;
            })
            .match(u) || [],
        s = [],
        p = 0,
        w = 0,
        C = 2 / 3,
        v = i.length,
        E = 0,
        N = "ERROR: malformed path: " + S,
        T,
        I,
        c,
        n,
        m,
        z,
        y,
        P,
        M,
        W,
        X,
        j,
        se,
        re,
        Oe,
        ne = function (Mt, ht, br, mt) {
          (W = (br - Mt) / 3),
            (X = (mt - ht) / 3),
            y.push(Mt + W, ht + X, br - W, mt - X, br, mt);
        };
      if (!S || !isNaN(i[0]) || isNaN(i[1])) return console.log(N), s;
      for (T = 0; T < v; T++)
        if (
          ((se = m),
          isNaN(i[T]) ? ((m = i[T].toUpperCase()), (z = m !== i[T])) : T--,
          (c = +i[T + 1]),
          (n = +i[T + 2]),
          z && ((c += p), (n += w)),
          T || ((P = c), (M = n)),
          m === "M")
        )
          y && (y.length < 8 ? (s.length -= 1) : (E += y.length)),
            (p = P = c),
            (w = M = n),
            (y = [c, n]),
            s.push(y),
            (T += 2),
            (m = "L");
        else if (m === "C")
          y || (y = [0, 0]),
            z || (p = w = 0),
            y.push(
              c,
              n,
              p + i[T + 3] * 1,
              w + i[T + 4] * 1,
              (p += i[T + 5] * 1),
              (w += i[T + 6] * 1)
            ),
            (T += 6);
        else if (m === "S")
          (W = p),
            (X = w),
            (se === "C" || se === "S") &&
              ((W += p - y[y.length - 4]), (X += w - y[y.length - 3])),
            z || (p = w = 0),
            y.push(W, X, c, n, (p += i[T + 3] * 1), (w += i[T + 4] * 1)),
            (T += 4);
        else if (m === "Q")
          (W = p + (c - p) * C),
            (X = w + (n - w) * C),
            z || (p = w = 0),
            (p += i[T + 3] * 1),
            (w += i[T + 4] * 1),
            y.push(W, X, p + (c - p) * C, w + (n - w) * C, p, w),
            (T += 4);
        else if (m === "T")
          (W = p - y[y.length - 4]),
            (X = w - y[y.length - 3]),
            y.push(
              p + W,
              w + X,
              c + (p + W * 1.5 - c) * C,
              n + (w + X * 1.5 - n) * C,
              (p = c),
              (w = n)
            ),
            (T += 2);
        else if (m === "H") ne(p, w, (p = c), w), (T += 1);
        else if (m === "V") ne(p, w, p, (w = c + (z ? w - p : 0))), (T += 1);
        else if (m === "L" || m === "Z")
          m === "Z" && ((c = P), (n = M), (y.closed = !0)),
            (m === "L" || V(p - c) > 0.5 || V(w - n) > 0.5) &&
              (ne(p, w, c, n), m === "L" && (T += 2)),
            (p = c),
            (w = n);
        else if (m === "A") {
          if (
            ((re = i[T + 4]),
            (Oe = i[T + 5]),
            (W = i[T + 6]),
            (X = i[T + 7]),
            (I = 7),
            re.length > 1 &&
              (re.length < 3
                ? ((X = W), (W = Oe), I--)
                : ((X = Oe), (W = re.substr(2)), (I -= 2)),
              (Oe = re.charAt(1)),
              (re = re.charAt(0))),
            (j = nt(
              p,
              w,
              +i[T + 1],
              +i[T + 2],
              +i[T + 3],
              +re,
              +Oe,
              (z ? p : 0) + W * 1,
              (z ? w : 0) + X * 1
            )),
            (T += I),
            j)
          )
            for (I = 0; I < j.length; I++) y.push(j[I]);
          (p = y[y.length - 2]), (w = y[y.length - 1]);
        } else console.log(N);
      return (
        (T = y.length),
        T < 6
          ? (s.pop(), (T = 0))
          : y[0] === y[T - 2] && y[1] === y[T - 1] && (y.closed = !0),
        (s.totalPoints = E + T),
        s
      );
    }
    function J(S) {
      $(S[0]) && (S = [S]);
      var i = "",
        s = S.length,
        p,
        w,
        C,
        v;
      for (w = 0; w < s; w++) {
        for (
          v = S[w],
            i += "M" + q(v[0]) + "," + q(v[1]) + " C",
            p = v.length,
            C = 2;
          C < p;
          C++
        )
          i +=
            q(v[C++]) +
            "," +
            q(v[C++]) +
            " " +
            q(v[C++]) +
            "," +
            q(v[C++]) +
            " " +
            q(v[C++]) +
            "," +
            q(v[C]) +
            " ";
        v.closed && (i += "z");
      }
      return i;
    }
    /*!
     * MorphSVGPlugin 3.13.0
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license
     * @author: Jack Doyle, jack@greensock.com
     */ var ve,
      wt,
      Se,
      ae,
      ce,
      it = function () {
        return (
          ve ||
          (typeof window < "u" && (ve = window.gsap) && ve.registerPlugin && ve)
        );
      },
      tr = function (i) {
        return typeof i == "function";
      },
      Ge = Math.atan2,
      Et = Math.cos,
      Ze = Math.sin,
      Re = Math.sqrt,
      Qe = Math.PI,
      Dr = Qe * 2,
      Fe = Qe * 0.3,
      ft = Qe * 0.7,
      _r = 1e20,
      ze = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      je = /(^[#\.][a-z]|[a-y][a-z])/i,
      jt = /[achlmqstvz]/i,
      Ye = function (i) {
        return console && console.warn(i);
      },
      Z = 1,
      Tr = function (i) {
        var s = i.length,
          p = 0,
          w = 0,
          C;
        for (C = 0; C < s; C++) (p += i[C++]), (w += i[C]);
        return [p / (s / 2), w / (s / 2)];
      },
      le = function (i) {
        var s = i.length,
          p = i[0],
          w = p,
          C = i[1],
          v = C,
          E,
          N,
          T;
        for (T = 6; T < s; T += 6)
          (E = i[T]),
            (N = i[T + 1]),
            E > p ? (p = E) : E < w && (w = E),
            N > C ? (C = N) : N < v && (v = N);
        return (
          (i.centerX = (p + w) / 2),
          (i.centerY = (C + v) / 2),
          (i.size = (p - w) * (C - v))
        );
      },
      Me = function (i, s) {
        s === void 0 && (s = 3);
        for (
          var p = i.length,
            w = i[0][0],
            C = w,
            v = i[0][1],
            E = v,
            N = 1 / s,
            T,
            I,
            c,
            n,
            m,
            z,
            y,
            P,
            M,
            W,
            X,
            j,
            se,
            re,
            Oe,
            ne;
          --p > -1;

        )
          for (m = i[p], T = m.length, n = 6; n < T; n += 6)
            for (
              M = m[n],
                W = m[n + 1],
                X = m[n + 2] - M,
                re = m[n + 3] - W,
                j = m[n + 4] - M,
                Oe = m[n + 5] - W,
                se = m[n + 6] - M,
                ne = m[n + 7] - W,
                z = s;
              --z > -1;

            )
              (y = N * z),
                (P = 1 - y),
                (I = (y * y * se + 3 * P * (y * j + P * X)) * y + M),
                (c = (y * y * ne + 3 * P * (y * Oe + P * re)) * y + W),
                I > w ? (w = I) : I < C && (C = I),
                c > v ? (v = c) : c < E && (E = c);
        return (
          (i.centerX = (w + C) / 2),
          (i.centerY = (v + E) / 2),
          (i.left = C),
          (i.width = w - C),
          (i.top = E),
          (i.height = v - E),
          (i.size = (w - C) * (v - E))
        );
      },
      Nt = function (i, s) {
        return s.length - i.length;
      },
      ge = function (i, s) {
        var p = i.size || le(i),
          w = s.size || le(s);
        return Math.abs(w - p) < (p + w) / 20
          ? s.centerX - i.centerX || s.centerY - i.centerY
          : w - p;
      },
      Ft = function (i, s) {
        var p = i.slice(0),
          w = i.length,
          C = w - 2,
          v,
          E;
        for (s = s | 0, v = 0; v < w; v++)
          (E = (v + s) % C), (i[v++] = p[E]), (i[v] = p[E + 1]);
      },
      rr = function (i, s, p, w, C) {
        var v = i.length,
          E = 0,
          N = v - 2,
          T,
          I,
          c,
          n;
        for (p *= 6, I = 0; I < v; I += 6)
          (T = (I + p) % N),
            (n = i[T] - (s[I] - w)),
            (c = i[T + 1] - (s[I + 1] - C)),
            (E += Re(c * c + n * n));
        return E;
      },
      vr = function (i, s, p) {
        var w = i.length,
          C = Tr(i),
          v = Tr(s),
          E = v[0] - C[0],
          N = v[1] - C[1],
          T = rr(i, s, 0, E, N),
          I = 0,
          c,
          n,
          m;
        for (m = 6; m < w; m += 6)
          (n = rr(i, s, m / 6, E, N)), n < T && ((T = n), (I = m));
        if (p)
          for (c = i.slice(0), we(c), m = 6; m < w; m += 6)
            (n = rr(c, s, m / 6, E, N)), n < T && ((T = n), (I = -m));
        return I / 6;
      },
      qt = function (i, s, p) {
        for (
          var w = i.length, C = _r, v = 0, E = 0, N, T, I, c, n, m;
          --w > -1;

        )
          for (N = i[w], m = N.length, n = 0; n < m; n += 6)
            (T = N[n] - s),
              (I = N[n + 1] - p),
              (c = Re(T * T + I * I)),
              c < C && ((C = c), (v = N[n]), (E = N[n + 1]));
        return [v, E];
      },
      Rt = function (i, s, p, w, C, v) {
        var E = s.length,
          N = 0,
          T = Math.min(i.size || le(i), s[p].size || le(s[p])) * w,
          I = _r,
          c = i.centerX + C,
          n = i.centerY + v,
          m,
          z,
          y,
          P,
          M;
        for (z = p; z < E && ((m = s[z].size || le(s[z])), !(m < T)); z++)
          (y = s[z].centerX - c),
            (P = s[z].centerY - n),
            (M = Re(y * y + P * P)),
            M < I && ((N = z), (I = M));
        return (M = s[N]), s.splice(N, 1), M;
      },
      bt = function (i, s) {
        var p = 0,
          w = 0.999999,
          C = i.length,
          v = s / ((C - 2) / 6),
          E,
          N,
          T,
          I,
          c,
          n,
          m,
          z,
          y,
          P,
          M,
          W,
          X,
          j;
        for (X = 2; X < C; X += 6)
          for (p += v; p > w; )
            (E = i[X - 2]),
              (N = i[X - 1]),
              (T = i[X]),
              (I = i[X + 1]),
              (c = i[X + 2]),
              (n = i[X + 3]),
              (m = i[X + 4]),
              (z = i[X + 5]),
              (j = 1 / ((Math.floor(p) || 1) + 1)),
              (y = E + (T - E) * j),
              (M = T + (c - T) * j),
              (y += (M - y) * j),
              (M += (c + (m - c) * j - M) * j),
              (P = N + (I - N) * j),
              (W = I + (n - I) * j),
              (P += (W - P) * j),
              (W += (n + (z - n) * j - W) * j),
              i.splice(
                X,
                4,
                E + (T - E) * j,
                N + (I - N) * j,
                y,
                P,
                y + (M - y) * j,
                P + (W - P) * j,
                M,
                W,
                c + (m - c) * j,
                n + (z - n) * j
              ),
              (X += 6),
              (C += 6),
              p--;
        return i;
      },
      De = function (i, s, p, w, C) {
        var v = s.length - i.length,
          E = v > 0 ? s : i,
          N = v > 0 ? i : s,
          T = 0,
          I = w === "complexity" ? Nt : ge,
          c = w === "position" ? 0 : typeof w == "number" ? w : 0.8,
          n = N.length,
          m = typeof p == "object" && p.push ? p.slice(0) : [p],
          z = m[0] === "reverse" || m[0] < 0,
          y = p === "log",
          P,
          M,
          W,
          X,
          j,
          se,
          re;
        if (N[0]) {
          if (
            E.length > 1 &&
            (i.sort(I),
            s.sort(I),
            (se = E.size || Me(E)),
            (se = N.size || Me(N)),
            (se = E.centerX - N.centerX),
            (re = E.centerY - N.centerY),
            I === ge)
          )
            for (n = 0; n < N.length; n++)
              E.splice(n, 0, Rt(N[n], E, n, c, se, re));
          if (v)
            for (
              v < 0 && (v = -v),
                E[0].length > N[0].length &&
                  bt(N[0], ((E[0].length - N[0].length) / 6) | 0),
                n = N.length;
              T < v;

            )
              (X = E[n].size || le(E[n])),
                (W = qt(N, E[n].centerX, E[n].centerY)),
                (X = W[0]),
                (j = W[1]),
                (N[n++] = [X, j, X, j, X, j, X, j]),
                (N.totalPoints += 8),
                T++;
          for (n = 0; n < i.length; n++)
            (P = s[n]),
              (M = i[n]),
              (v = P.length - M.length),
              v < 0 ? bt(P, (-v / 6) | 0) : v > 0 && bt(M, (v / 6) | 0),
              z && C !== !1 && !M.reversed && we(M),
              (p = m[n] || m[n] === 0 ? m[n] : "auto"),
              p &&
                (M.closed ||
                (Math.abs(M[0] - M[M.length - 2]) < 0.5 &&
                  Math.abs(M[1] - M[M.length - 1]) < 0.5)
                  ? p === "auto" || p === "log"
                    ? ((m[n] = p = vr(M, P, !n || C === !1)),
                      p < 0 && ((z = !0), we(M), (p = -p)),
                      Ft(M, p * 6))
                    : p !== "reverse" &&
                      (n && p < 0 && we(M), Ft(M, (p < 0 ? -p : p) * 6))
                  : !z &&
                    ((p === "auto" &&
                      Math.abs(P[0] - M[0]) +
                        Math.abs(P[1] - M[1]) +
                        Math.abs(P[P.length - 2] - M[M.length - 2]) +
                        Math.abs(P[P.length - 1] - M[M.length - 1]) >
                        Math.abs(P[0] - M[M.length - 2]) +
                          Math.abs(P[1] - M[M.length - 1]) +
                          Math.abs(P[P.length - 2] - M[0]) +
                          Math.abs(P[P.length - 1] - M[1])) ||
                      p % 2)
                  ? (we(M), (m[n] = -1), (z = !0))
                  : p === "auto"
                  ? (m[n] = 0)
                  : p === "reverse" && (m[n] = -1),
                M.closed !== P.closed && (M.closed = P.closed = !1));
          return (
            y && Ye("shapeIndex:[" + m.join(",") + "]"), (i.shapeIndex = m), m
          );
        }
      },
      Er = function (i, s, p, w, C) {
        var v = Ce(i[0]),
          E = Ce(i[1]);
        De(v, E, s || s === 0 ? s : "auto", p, C) &&
          ((i[0] = J(v)),
          (i[1] = J(E)),
          (w === "log" || w === !0) &&
            Ye('precompile:["' + i[0] + '","' + i[1] + '"]'));
      },
      kt = function (i, s) {
        if (!s) return i;
        var p = i.match(ze) || [],
          w = p.length,
          C = "",
          v,
          E,
          N;
        for (
          s === "reverse"
            ? ((E = w - 1), (v = -2))
            : ((E = ((parseInt(s, 10) || 0) * 2 + 1 + w * 100) % w), (v = 2)),
            N = 0;
          N < w;
          N += 2
        )
          (C += p[E - 1] + "," + p[E] + " "), (E = (E + v) % w);
        return C;
      },
      We = function (i, s) {
        var p = 0,
          w = parseFloat(i[0]),
          C = parseFloat(i[1]),
          v = w + "," + C + " ",
          E = 0.999999,
          N,
          T,
          I,
          c,
          n,
          m,
          z;
        for (
          I = i.length, N = (s * 0.5) / (I * 0.5 - 1), T = 0;
          T < I - 2;
          T += 2
        ) {
          if (
            ((p += N),
            (m = parseFloat(i[T + 2])),
            (z = parseFloat(i[T + 3])),
            p > E)
          )
            for (n = 1 / (Math.floor(p) + 1), c = 1; p > E; )
              (v +=
                (w + (m - w) * n * c).toFixed(2) +
                "," +
                (C + (z - C) * n * c).toFixed(2) +
                " "),
                p--,
                c++;
          (v += m + "," + z + " "), (w = m), (C = z);
        }
        return v;
      },
      Ct = function (i) {
        var s = i[0].match(ze) || [],
          p = i[1].match(ze) || [],
          w = p.length - s.length;
        w > 0 ? (i[0] = We(s, w)) : (i[1] = We(p, -w));
      },
      nr = function (i) {
        return isNaN(i)
          ? Ct
          : function (s) {
              Ct(s), (s[1] = kt(s[1], parseInt(i, 10)));
            };
      },
      ur = function (i, s, p) {
        var w = typeof i == "string",
          C,
          v;
        return (
          (!w || je.test(i) || (i.match(ze) || []).length < 3) &&
            ((C = wt(i)[0]),
            C
              ? ((v = (C.nodeName + "").toUpperCase()),
                s && v !== "PATH" && ((C = oe(C, !1)), (v = "PATH")),
                (i = C.getAttribute(v === "PATH" ? "d" : "points") || ""),
                C === p && (i = C.getAttributeNS(null, "data-original") || i))
              : (Ye("WARNING: invalid morph to: " + i), (i = !1))),
          i
        );
      },
      Hr = function (i, s) {
        for (
          var p = i.length,
            w = 0.2 * (s || 1),
            C,
            v,
            E,
            N,
            T,
            I,
            c,
            n,
            m,
            z,
            y,
            P;
          --p > -1;

        ) {
          for (
            v = i[p],
              y = v.isSmooth = v.isSmooth || [0, 0, 0, 0],
              P = v.smoothData = v.smoothData || [0, 0, 0, 0],
              y.length = 4,
              n = v.length - 2,
              c = 6;
            c < n;
            c += 6
          )
            (E = v[c] - v[c - 2]),
              (N = v[c + 1] - v[c - 1]),
              (T = v[c + 2] - v[c]),
              (I = v[c + 3] - v[c + 1]),
              (m = Ge(N, E)),
              (z = Ge(I, T)),
              (C = Math.abs(m - z) < w),
              C &&
                ((P[c - 2] = m),
                (P[c + 2] = z),
                (P[c - 1] = Re(E * E + N * N)),
                (P[c + 3] = Re(T * T + I * I))),
              y.push(C, C, 0, 0, C, C);
          v[n] === v[0] &&
            v[n + 1] === v[1] &&
            ((E = v[0] - v[n - 2]),
            (N = v[1] - v[n - 1]),
            (T = v[2] - v[0]),
            (I = v[3] - v[1]),
            (m = Ge(N, E)),
            (z = Ge(I, T)),
            Math.abs(m - z) < w &&
              ((P[n - 2] = m),
              (P[2] = z),
              (P[n - 1] = Re(E * E + N * N)),
              (P[3] = Re(T * T + I * I)),
              (y[n - 2] = y[n - 1] = !0)));
        }
        return i;
      },
      ir = function (i) {
        var s = i.trim().split(" "),
          p = ~i.indexOf("left")
            ? 0
            : ~i.indexOf("right")
            ? 100
            : isNaN(parseFloat(s[0]))
            ? 50
            : parseFloat(s[0]),
          w = ~i.indexOf("top")
            ? 0
            : ~i.indexOf("bottom")
            ? 100
            : isNaN(parseFloat(s[1]))
            ? 50
            : parseFloat(s[1]);
        return { x: p / 100, y: w / 100 };
      },
      Kr = function (i) {
        return i !== i % Qe ? i + (i < 0 ? Dr : -Dr) : i;
      },
      ut =
        "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
      Mr = function (i, s, p, w) {
        var C = this._origin,
          v = this._eOrigin,
          E = i[p] - C.x,
          N = i[p + 1] - C.y,
          T = Re(E * E + N * N),
          I = Ge(N, E),
          c,
          n;
        return (
          (E = s[p] - v.x),
          (N = s[p + 1] - v.y),
          (c = Ge(N, E) - I),
          (n = Kr(c)),
          !w && Se && Math.abs(n + Se.ca) < Fe && (w = Se),
          (this._anchorPT = Se =
            {
              _next: this._anchorPT,
              t: i,
              sa: I,
              ca: w && n * w.ca < 0 && Math.abs(n) > ft ? c : n,
              sl: T,
              cl: Re(E * E + N * N) - T,
              i: p,
            })
        );
      },
      Ir = function (i) {
        (ve = it()),
          (ce = ce || (ve && ve.plugins.morphSVG)),
          ve && ce
            ? ((wt = ve.utils.toArray),
              (ce.prototype._tweenRotation = Mr),
              (ae = 1))
            : i && Ye("Please gsap.registerPlugin(MorphSVGPlugin)");
      },
      Wt = {
        version: "3.13.0",
        name: "morphSVG",
        rawVars: 1,
        register: function (i, s) {
          (ve = i), (ce = s), Ir();
        },
        init: function (i, s, p, w, C) {
          if ((ae || Ir(1), !s)) return Ye("invalid shape"), !1;
          tr(s) && (s = s.call(p, w, i, C));
          var v,
            E,
            N,
            T,
            I,
            c,
            n,
            m,
            z,
            y,
            P,
            M,
            W,
            X,
            j,
            se,
            re,
            Oe,
            ne,
            Be,
            Mt,
            ht;
          if (typeof s == "string" || s.getBBox || s[0]) s = { shape: s };
          else if (typeof s == "object") {
            v = {};
            for (E in s)
              v[E] = tr(s[E]) && E !== "render" ? s[E].call(p, w, i, C) : s[E];
            s = v;
          }
          var br = i.nodeType ? window.getComputedStyle(i) : {},
            mt = br.fill + "",
            yt = !(
              mt === "none" ||
              (mt.match(ze) || [])[3] === "0" ||
              br.fillRule === "evenodd"
            ),
            _t = (s.origin || "50 50").split(",");
          if (
            ((v = (i.nodeName + "").toUpperCase()),
            (I = v === "POLYLINE" || v === "POLYGON"),
            v !== "PATH" && !I && !s.prop)
          )
            return Ye("Cannot morph a <" + v + "> element. " + ut), !1;
          if (
            ((E = v === "PATH" ? "d" : "points"),
            !s.prop && !tr(i.setAttribute))
          )
            return !1;
          if (
            ((T = ur(s.shape || s.d || s.points || "", E === "d", i)),
            I && jt.test(T))
          )
            return Ye("A <" + v + "> cannot accept path data. " + ut), !1;
          if (
            ((c = s.shapeIndex || s.shapeIndex === 0 ? s.shapeIndex : "auto"),
            (n = s.map || Wt.defaultMap),
            (this._prop = s.prop),
            (this._render = s.render || Wt.defaultRender),
            (this._apply =
              "updateTarget" in s ? s.updateTarget : Wt.defaultUpdateTarget),
            (this._rnd = Math.pow(10, isNaN(s.precision) ? 2 : +s.precision)),
            (this._tween = p),
            T)
          ) {
            if (
              ((this._target = i),
              (re = typeof s.precompile == "object"),
              (y = this._prop ? i[this._prop] : i.getAttribute(E)),
              !this._prop &&
                !i.getAttributeNS(null, "data-original") &&
                i.setAttributeNS(null, "data-original", y),
              E === "d" || this._prop)
            ) {
              if (
                ((y = Ce(re ? s.precompile[0] : y)),
                (P = Ce(re ? s.precompile[1] : T)),
                !re && !De(y, P, c, n, yt))
              )
                return !1;
              for (
                (s.precompile === "log" || s.precompile === !0) &&
                  Ye('precompile:["' + J(y) + '","' + J(P) + '"]'),
                  Mt = (s.type || Wt.defaultType) !== "linear",
                  Mt &&
                    ((y = Hr(y, s.smoothTolerance)),
                    (P = Hr(P, s.smoothTolerance)),
                    y.size || Me(y),
                    P.size || Me(P),
                    (Be = ir(_t[0])),
                    (this._origin = y.origin =
                      {
                        x: y.left + Be.x * y.width,
                        y: y.top + Be.y * y.height,
                      }),
                    _t[1] && (Be = ir(_t[1])),
                    (this._eOrigin = {
                      x: P.left + Be.x * P.width,
                      y: P.top + Be.y * P.height,
                    })),
                  this._rawPath = i._gsRawPath = y,
                  W = y.length;
                --W > -1;

              )
                for (
                  j = y[W],
                    se = P[W],
                    m = j.isSmooth || [],
                    z = se.isSmooth || [],
                    X = j.length,
                    Se = 0,
                    M = 0;
                  M < X;
                  M += 2
                )
                  (se[M] !== j[M] || se[M + 1] !== j[M + 1]) &&
                    (Mt
                      ? m[M] && z[M]
                        ? ((Oe = j.smoothData),
                          (ne = se.smoothData),
                          (ht = M + (M === X - 4 ? 7 - X : 5)),
                          (this._controlPT = {
                            _next: this._controlPT,
                            i: M,
                            j: W,
                            l1s: Oe[M + 1],
                            l1c: ne[M + 1] - Oe[M + 1],
                            l2s: Oe[ht],
                            l2c: ne[ht] - Oe[ht],
                          }),
                          (N = this._tweenRotation(j, se, M + 2)),
                          this._tweenRotation(j, se, M, N),
                          this._tweenRotation(j, se, ht - 1, N),
                          (M += 4))
                        : this._tweenRotation(j, se, M)
                      : ((N = this.add(j, M, j[M], se[M], 0, 0, 0, 0, 0, 1)),
                        (N =
                          this.add(
                            j,
                            M + 1,
                            j[M + 1],
                            se[M + 1],
                            0,
                            0,
                            0,
                            0,
                            0,
                            1
                          ) || N)));
            } else
              N = this.add(
                i,
                "setAttribute",
                i.getAttribute(E) + "",
                T + "",
                w,
                C,
                0,
                nr(c),
                E
              );
            Mt &&
              (this.add(
                this._origin,
                "x",
                this._origin.x,
                this._eOrigin.x,
                0,
                0,
                0,
                0,
                0,
                1
              ),
              (N = this.add(
                this._origin,
                "y",
                this._origin.y,
                this._eOrigin.y,
                0,
                0,
                0,
                0,
                0,
                1
              ))),
              N && (this._props.push("morphSVG"), (N.end = T), (N.endProp = E));
          }
          return Z;
        },
        render: function (i, s) {
          for (
            var p = s._rawPath,
              w = s._controlPT,
              C = s._anchorPT,
              v = s._rnd,
              E = s._target,
              N = s._pt,
              T,
              I,
              c,
              n,
              m,
              z,
              y,
              P,
              M,
              W,
              X,
              j,
              se;
            N;

          )
            N.r(i, N.d), (N = N._next);
          if (i === 1 && s._apply)
            for (N = s._pt; N; )
              N.end &&
                (s._prop
                  ? (E[s._prop] = N.end)
                  : E.setAttribute(N.endProp, N.end)),
                (N = N._next);
          else if (p) {
            for (; C; )
              (z = C.sa + i * C.ca),
                (m = C.sl + i * C.cl),
                (C.t[C.i] = s._origin.x + Et(z) * m),
                (C.t[C.i + 1] = s._origin.y + Ze(z) * m),
                (C = C._next);
            for (c = i < 0.5 ? 2 * i * i : (4 - 2 * i) * i - 1; w; )
              (y = w.i),
                (n = p[w.j]),
                (se = y + (y === n.length - 4 ? 7 - n.length : 5)),
                (z = Ge(n[se] - n[y + 1], n[se - 1] - n[y])),
                (X = Ze(z)),
                (j = Et(z)),
                (M = n[y + 2]),
                (W = n[y + 3]),
                (m = w.l1s + c * w.l1c),
                (n[y] = M - j * m),
                (n[y + 1] = W - X * m),
                (m = w.l2s + c * w.l2c),
                (n[se - 1] = M + j * m),
                (n[se] = W + X * m),
                (w = w._next);
            if (((E._gsRawPath = p), s._apply)) {
              for (T = "", I = " ", P = 0; P < p.length; P++)
                for (
                  n = p[P],
                    m = n.length,
                    T +=
                      "M" +
                      ((n[0] * v) | 0) / v +
                      I +
                      ((n[1] * v) | 0) / v +
                      " C",
                    y = 2;
                  y < m;
                  y++
                )
                  T += ((n[y] * v) | 0) / v + I;
              s._prop ? (E[s._prop] = T) : E.setAttribute("d", T);
            }
          }
          s._render && p && s._render.call(s._tween, p, E);
        },
        kill: function (i) {
          this._pt = this._rawPath = 0;
        },
        getRawPath: G,
        stringToRawPath: Ce,
        rawPathToString: J,
        normalizeStrings: function (i, s, p) {
          var w = p.shapeIndex,
            C = p.map,
            v = [i, s];
          return Er(v, w, C), v;
        },
        pathFilter: Er,
        pointsFilter: Ct,
        getTotalSize: Me,
        equalizeSegmentQuantity: De,
        convertToPath: function (i, s) {
          return wt(i).map(function (p) {
            return oe(p, s !== !1);
          });
        },
        defaultType: "linear",
        defaultUpdateTarget: !0,
        defaultMap: "size",
      };
    it() && ve.registerPlugin(Wt),
      (a.MorphSVGPlugin = Wt),
      (a.default = Wt),
      Object.defineProperty(a, "__esModule", { value: !0 });
  });
})(Wi, Wi.exports);
var ps = Wi.exports;
function gs(_) {
  const o = _ - 1;
  return o * o * o + 1;
}
function Ri(_, { delay: o = 0, duration: a = 400, easing: u = Xo } = {}) {
  const d = +getComputedStyle(_).opacity;
  return { delay: o, duration: a, easing: u, css: (h) => `opacity: ${h * d}` };
}
function wo(
  _,
  {
    delay: o = 0,
    duration: a = 400,
    easing: u = gs,
    x: d = 0,
    y: h = 0,
    opacity: D = 0,
  } = {}
) {
  const L = getComputedStyle(_),
    K = +L.opacity,
    F = L.transform === "none" ? "" : L.transform,
    V = K * (1 - D),
    [U, fe] = vo(d),
    [$, Y] = vo(h);
  return {
    delay: o,
    duration: a,
    easing: u,
    css: (q, G) => `
			transform: ${F} translate(${(1 - q) * U}${fe}, ${(1 - q) * $}${Y});
			opacity: ${K - V * G}`,
  };
}
function ms(_) {
  let o, a, u, d, h, D, L, K;
  return {
    c() {
      (o = Ee("button")),
        (a = lt("svg")),
        (u = lt("path")),
        (d = lt("path")),
        (h = lt("path")),
        this.h();
    },
    l(F) {
      o = Te(F, "BUTTON", { class: !0, "aria-label": !0 });
      var V = ue(o);
      a = st(V, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
      });
      var U = ue(a);
      (u = st(U, "path", {
        d: !0,
        class: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
      })),
        ue(u).forEach(O),
        (d = st(U, "path", {
          d: !0,
          class: !0,
          "stroke-width": !0,
          "stroke-linecap": !0,
        })),
        ue(d).forEach(O),
        (h = st(U, "path", {
          d: !0,
          class: !0,
          "stroke-width": !0,
          "stroke-linecap": !0,
        })),
        ue(h).forEach(O),
        U.forEach(O),
        V.forEach(O),
        this.h();
    },
    h() {
      f(u, "d", _[4][0]),
        f(u, "class", "stroke-line transition-colors duration-500"),
        f(u, "stroke-width", "4"),
        f(u, "stroke-linecap", "round"),
        B(u, "stroke-light", _[1] === "dark"),
        B(u, "stroke-dark", _[1] === "light"),
        f(d, "d", _[4][1]),
        f(d, "class", "stroke-line transition-colors duration-500"),
        f(d, "stroke-width", "4"),
        f(d, "stroke-linecap", "round"),
        B(d, "stroke-light", _[1] === "dark"),
        B(d, "stroke-dark", _[1] === "light"),
        f(h, "d", _[4][2]),
        f(h, "class", "stroke-line transition-colors duration-500"),
        f(h, "stroke-width", "4"),
        f(h, "stroke-linecap", "round"),
        B(h, "stroke-light", _[1] === "dark"),
        B(h, "stroke-dark", _[1] === "light"),
        f(a, "width", "65"),
        f(a, "height", "63"),
        f(a, "viewBox", "0 0 65 63"),
        f(a, "fill", "none"),
        f(a, "xmlns", "http://www.w3.org/2000/svg"),
        f(o, "class", _[0]),
        f(o, "aria-label", (D = _[2] ? "Close menu" : "Open menu"));
    },
    m(F, V) {
      Ne(F, o, V),
        te(o, a),
        te(a, u),
        _[6](u),
        te(a, d),
        _[7](d),
        te(a, h),
        _[8](h),
        L || ((K = Go(o, "click", _[5])), (L = !0));
    },
    p(F, [V]) {
      V & 2 && B(u, "stroke-light", F[1] === "dark"),
        V & 2 && B(u, "stroke-dark", F[1] === "light"),
        V & 2 && B(d, "stroke-light", F[1] === "dark"),
        V & 2 && B(d, "stroke-dark", F[1] === "light"),
        V & 2 && B(h, "stroke-light", F[1] === "dark"),
        V & 2 && B(h, "stroke-dark", F[1] === "light"),
        V & 1 && f(o, "class", F[0]),
        V & 4 &&
          D !== (D = F[2] ? "Close menu" : "Open menu") &&
          f(o, "aria-label", D);
    },
    i: Br,
    o: Br,
    d(F) {
      F && O(o), _[6](null), _[7](null), _[8](null), (L = !1), K();
    },
  };
}
function _s(_, o, a) {
  let { className: u = "" } = o,
    { theme: d = "light" } = o;
  const h = jo();
  let D = !1,
    L = [null, null, null];
  const K = ["M18 22 L48 22", "M18 32 L48 32", "M18 42 L48 42"],
    F = ["M23 42 L43 22", "M23 22 L43 42"];
  let V;
  Ui(() => {
    V = Li.subscribe((G) => {
      G !== D && (a(2, (D = G)), fe());
    });
  }),
    qo(() => {
      V && V();
    });
  function U() {
    a(2, (D = !D)), fe(), h("click", { isOpen: D });
  }
  function fe() {
    D
      ? (Un.to(L[0], { attr: { d: F[0] }, duration: 0.3, ease: "power2.out" }),
        Un.to(L[2], { attr: { d: F[1] }, duration: 0.3, ease: "power2.out" }),
        Un.to(L[1], { opacity: 0, duration: 0.2, ease: "power2.out" }))
      : (Un.to(L[0], { attr: { d: K[0] }, duration: 0.3, ease: "power2.out" }),
        Un.to(L[2], { attr: { d: K[2] }, duration: 0.3, ease: "power2.out" }),
        Un.to(L[1], { opacity: 1, duration: 0.2, ease: "power2.out" }));
  }
  function $(G) {
    Ai[G ? "unshift" : "push"](() => {
      (L[0] = G), a(3, L);
    });
  }
  function Y(G) {
    Ai[G ? "unshift" : "push"](() => {
      (L[1] = G), a(3, L);
    });
  }
  function q(G) {
    Ai[G ? "unshift" : "push"](() => {
      (L[2] = G), a(3, L);
    });
  }
  return (
    (_.$$set = (G) => {
      "className" in G && a(0, (u = G.className)),
        "theme" in G && a(1, (d = G.theme));
    }),
    [u, d, D, L, K, U, $, Y, q]
  );
}
class vs extends gn {
  constructor(o) {
    super(), mn(this, o, _s, ms, pn, { className: 0, theme: 1 });
  }
}
function bs(_) {
  let o, a, u, d, h, D, L, K, F;
  return {
    c() {
      (o = lt("svg")),
        (a = lt("path")),
        (u = lt("path")),
        (d = lt("path")),
        (h = lt("path")),
        (D = lt("path")),
        (L = lt("path")),
        (K = lt("path")),
        (F = lt("path")),
        this.h();
    },
    l(V) {
      o = st(V, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0,
      });
      var U = ue(o);
      (a = st(U, "path", { d: !0, class: !0 })),
        ue(a).forEach(O),
        (u = st(U, "path", { d: !0, class: !0 })),
        ue(u).forEach(O),
        (d = st(U, "path", { d: !0, class: !0 })),
        ue(d).forEach(O),
        (h = st(U, "path", { d: !0, class: !0 })),
        ue(h).forEach(O),
        (D = st(U, "path", { d: !0, class: !0 })),
        ue(D).forEach(O),
        (L = st(U, "path", { d: !0, class: !0 })),
        ue(L).forEach(O),
        (K = st(U, "path", { d: !0, class: !0 })),
        ue(K).forEach(O),
        (F = st(U, "path", { d: !0, class: !0 })),
        ue(F).forEach(O),
        U.forEach(O),
        this.h();
    },
    h() {
      f(
        a,
        "d",
        "M26.0098 0.303589H5.92726C5.51689 0.303589 5.1845 0.635976 5.1845 1.04635V4.74718C5.1845 5.15756 4.85211 5.48994 4.44173 5.48994H0.742765C0.332387 5.48994 0 5.82233 0 6.23271V28.7998C0 29.2101 0.332387 29.5425 0.742765 29.5425H5.1845C5.59488 29.5425 5.92726 29.2101 5.92726 28.7998V6.97547C5.92726 6.5651 6.25965 6.23271 6.67003 6.23271H22.5671C22.9774 6.23271 23.3098 6.5651 23.3098 6.97547V28.7998C23.3098 29.2101 23.6422 29.5425 24.0526 29.5425H28.4869C28.8973 29.5425 29.2297 29.2101 29.2297 28.7998V3.52347C29.2297 3.32664 29.1517 3.13724 29.0124 2.99797L26.5353 0.520848C26.396 0.381579 26.2066 0.303589 26.0098 0.303589Z"
      ),
        f(a, "class", "transition-colors duration-500"),
        B(a, "fill-dark", _[1] === "light"),
        B(a, "fill-light", _[1] === "dark"),
        f(
          u,
          "d",
          "M35.2355 29.5425H55.318C55.7284 29.5425 56.0608 29.2101 56.0608 28.7998V25.0989C56.0608 24.6886 56.3932 24.3562 56.8035 24.3562H60.5025C60.9129 24.3562 61.2453 24.0238 61.2453 23.6134V1.04635C61.2453 0.635976 60.9129 0.303589 60.5025 0.303589H56.0608C55.6504 0.303589 55.318 0.635976 55.318 1.04635V22.8706C55.318 23.281 54.9856 23.6134 54.5752 23.6134H38.6782C38.2678 23.6134 37.9355 23.281 37.9355 22.8706V1.04635C37.9355 0.635976 37.6031 0.303589 37.1927 0.303589H32.7584C32.348 0.303589 32.0156 0.635976 32.0156 1.04635V26.3226C32.0156 26.5195 32.0936 26.7089 32.2329 26.8482L34.71 29.3253C34.8493 29.4645 35.0387 29.5425 35.2355 29.5425Z"
        ),
        f(u, "class", "transition-colors duration-500"),
        B(u, "fill-dark", _[1] === "light"),
        B(u, "fill-light", _[1] === "dark"),
        f(
          d,
          "d",
          "M69.9604 22.8948V1.04635C69.9604 0.635976 69.628 0.303589 69.2176 0.303589H64.774C64.3636 0.303589 64.0312 0.635976 64.0312 1.04635V23.6375C64.0312 24.0479 64.3636 24.3803 64.774 24.3803H68.4748C68.8852 24.3803 69.2176 24.7127 69.2176 25.1231V28.7998C69.2176 29.2101 69.55 29.5425 69.9604 29.5425H86.2214C86.6317 29.5425 86.9641 29.2101 86.9641 28.7998V24.3803C86.9641 23.9699 86.6317 23.6375 86.2214 23.6375H70.7031C70.2928 23.6375 69.9604 23.3052 69.9604 22.8948Z"
        ),
        f(d, "class", "transition-colors duration-500"),
        B(d, "fill-dark", _[1] === "light"),
        B(d, "fill-light", _[1] === "dark"),
        f(
          h,
          "d",
          "M95.6791 22.8948V1.04635C95.6791 0.635976 95.3467 0.303589 94.9364 0.303589H90.4928C90.0824 0.303589 89.75 0.635976 89.75 1.04635V23.6375C89.75 24.0479 90.0824 24.3803 90.4928 24.3803H94.1936C94.604 24.3803 94.9364 24.7127 94.9364 25.1231V28.7998C94.9364 29.2101 95.2687 29.5425 95.6791 29.5425H111.94C112.35 29.5425 112.683 29.2101 112.683 28.7998V24.3803C112.683 23.9699 112.35 23.6375 111.94 23.6375H96.4219C96.0115 23.6375 95.6791 23.3052 95.6791 22.8948Z"
        ),
        f(h, "class", "transition-colors duration-500"),
        B(h, "fill-dark", _[1] === "light"),
        B(h, "fill-light", _[1] === "dark"),
        f(
          D,
          "d",
          "M141.475 0.303589H121.392C120.982 0.303589 120.649 0.635976 120.649 1.04635V4.74718C120.649 5.15756 120.317 5.48994 119.907 5.48994H116.208C115.797 5.48994 115.465 5.82233 115.465 6.23271V28.7998C115.465 29.2101 115.797 29.5425 116.208 29.5425H120.649C121.06 29.5425 121.392 29.2101 121.392 28.7998V6.97547C121.392 6.5651 121.725 6.23271 122.135 6.23271H126.383C126.794 6.23271 127.126 6.5651 127.126 6.97547V16.1245C127.126 16.5349 127.459 16.8672 127.869 16.8672H132.288C132.699 16.8672 133.031 16.5349 133.031 16.1245V6.97547C133.031 6.5651 133.364 6.23271 133.774 6.23271H138.032C138.442 6.23271 138.775 6.5651 138.775 6.97547V28.7998C138.775 29.2101 139.107 29.5425 139.517 29.5425H143.952C144.362 29.5425 144.695 29.2101 144.695 28.7998V3.52347C144.695 3.32664 144.617 3.13724 144.477 2.99797L142 0.520848C141.861 0.381579 141.671 0.303589 141.475 0.303589Z"
        ),
        f(D, "class", "transition-colors duration-500"),
        B(D, "fill-dark", _[1] === "light"),
        B(D, "fill-light", _[1] === "dark"),
        f(
          L,
          "d",
          "M175.967 5.48994H172.268C171.858 5.48994 171.526 5.15756 171.526 4.74718V1.04635C171.526 0.637833 171.193 0.303589 170.783 0.303589H153.408C152.997 0.303589 152.665 0.637833 152.665 1.04635V4.74718C152.665 5.15756 152.333 5.48994 151.922 5.48994H148.223C147.813 5.48994 147.48 5.82419 147.48 6.23271V28.7998C147.48 29.2101 147.813 29.5425 148.223 29.5425H152.665C152.689 29.5425 152.711 29.5407 152.734 29.5388C153.112 29.5054 153.408 29.1879 153.408 28.7998V17.9183H170.783V28.7998C170.783 29.1879 171.078 29.5054 171.457 29.5388C171.483 29.5407 171.507 29.5425 171.533 29.5425H175.967C176.378 29.5425 176.71 29.2101 176.71 28.7998V6.23271C176.71 5.82419 176.378 5.48994 175.967 5.48994ZM153.408 11.9891V6.97547C153.408 6.64123 153.631 6.35712 153.937 6.26242C153.937 6.26242 153.937 6.26428 153.939 6.26242C153.982 6.24942 154.028 6.24014 154.074 6.23642C154.1 6.23457 154.124 6.23271 154.15 6.23271H170.048C170.07 6.23271 170.094 6.23457 170.116 6.23642C170.163 6.24014 170.209 6.24942 170.252 6.26242C170.254 6.26056 170.254 6.26242 170.254 6.26242C170.56 6.35712 170.783 6.64123 170.783 6.97547V11.9891H153.408Z"
        ),
        f(L, "class", "transition-colors duration-500"),
        B(L, "fill-dark", _[1] === "light"),
        B(L, "fill-light", _[1] === "dark"),
        f(
          K,
          "d",
          "M185.425 6.97362V11.2854C185.425 11.6957 185.758 12.0281 186.168 12.0281H202.808C203.218 12.0281 203.551 12.3605 203.551 12.7709V16.4457C203.551 16.8561 203.883 17.1885 204.293 17.1885H207.985C208.395 17.1885 208.728 17.5209 208.728 17.9313V23.6394C208.728 24.0498 208.395 24.3822 207.985 24.3822H204.293C203.883 24.3822 203.551 24.7146 203.551 25.1249V28.7998C203.551 29.2101 203.218 29.5425 202.808 29.5425H180.239C179.828 29.5425 179.496 29.2101 179.496 28.7998V24.3822C179.496 23.9718 179.828 23.6394 180.239 23.6394H202.065C202.475 23.6394 202.808 23.307 202.808 22.8966V17.61C202.808 17.1996 202.475 16.8672 202.065 16.8672H185.416C185.006 16.8672 184.673 16.5349 184.673 16.1245V12.4497C184.673 12.0393 184.341 11.7069 183.93 11.7069H180.239C179.828 11.7069 179.496 11.3745 179.496 10.9641V6.23085C179.496 5.82048 179.828 5.48809 180.239 5.48809H183.94C184.35 5.48809 184.682 5.1557 184.682 4.74532V1.04635C184.682 0.635976 185.015 0.303589 185.425 0.303589H207.985C208.395 0.303589 208.728 0.635976 208.728 1.04635V5.48809C208.728 5.89847 208.395 6.23085 207.985 6.23085H186.168C185.758 6.23085 185.425 6.56324 185.425 6.97362Z"
        ),
        f(K, "class", "transition-colors duration-500"),
        B(K, "fill-dark", _[1] === "light"),
        B(K, "fill-light", _[1] === "dark"),
        f(
          F,
          "d",
          "M240.808 25.4341C241.098 25.7238 241.098 26.1936 240.808 26.4851L237.722 29.5713L237.664 29.6289C237.375 29.9186 236.903 29.9186 236.613 29.6289L236.558 29.5732L234.823 27.8388L230.655 23.6701L229.091 22.1065L226.127 19.1411L225.117 18.1309C224.978 17.9916 224.789 17.9136 224.592 17.9136H218.184C217.773 17.9136 217.441 18.246 217.441 18.6564V29.0607C217.441 29.4711 217.108 29.8034 216.698 29.8034H212.254C211.844 29.8034 211.512 29.4711 211.512 29.0607V18.285C211.512 17.8746 211.844 17.5422 212.254 17.5422H215.955C216.366 17.5422 216.698 17.2099 216.698 16.7995V13.0987C216.698 12.6883 216.366 12.3559 215.955 12.3559H212.254C211.844 12.3559 211.512 12.0235 211.512 11.6131V0.83561C211.512 0.425233 211.844 0.0928456 212.254 0.0928456H216.698C217.108 0.0928456 217.441 0.425233 217.441 0.83561V11.2399C217.441 11.6503 217.773 11.9827 218.184 11.9827H224.594C224.79 11.9827 224.98 11.9047 225.119 11.7654L226.129 10.7552L229.091 7.79532L236.554 0.332387L236.669 0.217259C236.959 -0.0724196 237.429 -0.0724196 237.718 0.217259L237.833 0.332387L240.743 3.24403L240.858 3.35915C241.148 3.64883 241.148 4.11863 240.858 4.41017L234.823 10.4451L233.284 11.9827L230.846 14.4208C230.556 14.7105 230.556 15.1803 230.846 15.4718L233.284 17.9118L240.806 25.4341H240.808Z"
        ),
        f(F, "class", "transition-colors duration-500"),
        B(F, "fill-dark", _[1] === "light"),
        B(F, "fill-light", _[1] === "dark"),
        f(o, "width", "242"),
        f(o, "height", "30"),
        f(o, "viewBox", "0 0 242 30"),
        f(o, "fill", "none"),
        f(o, "xmlns", "http://www.w3.org/2000/svg"),
        f(o, "class", _[0]);
    },
    m(V, U) {
      Ne(V, o, U),
        te(o, a),
        te(o, u),
        te(o, d),
        te(o, h),
        te(o, D),
        te(o, L),
        te(o, K),
        te(o, F);
    },
    p(V, [U]) {
      U & 2 && B(a, "fill-dark", V[1] === "light"),
        U & 2 && B(a, "fill-light", V[1] === "dark"),
        U & 2 && B(u, "fill-dark", V[1] === "light"),
        U & 2 && B(u, "fill-light", V[1] === "dark"),
        U & 2 && B(d, "fill-dark", V[1] === "light"),
        U & 2 && B(d, "fill-light", V[1] === "dark"),
        U & 2 && B(h, "fill-dark", V[1] === "light"),
        U & 2 && B(h, "fill-light", V[1] === "dark"),
        U & 2 && B(D, "fill-dark", V[1] === "light"),
        U & 2 && B(D, "fill-light", V[1] === "dark"),
        U & 2 && B(L, "fill-dark", V[1] === "light"),
        U & 2 && B(L, "fill-light", V[1] === "dark"),
        U & 2 && B(K, "fill-dark", V[1] === "light"),
        U & 2 && B(K, "fill-light", V[1] === "dark"),
        U & 2 && B(F, "fill-dark", V[1] === "light"),
        U & 2 && B(F, "fill-light", V[1] === "dark"),
        U & 1 && f(o, "class", V[0]);
    },
    i: Br,
    o: Br,
    d(V) {
      V && O(o);
    },
  };
}
function ws(_, o, a) {
  let { className: u = "" } = o,
    { theme: d = "light" } = o;
  return (
    (_.$$set = (h) => {
      "className" in h && a(0, (u = h.className)),
        "theme" in h && a(1, (d = h.theme));
    }),
    [u, d]
  );
}
class No extends gn {
  constructor(o) {
    super(), mn(this, o, ws, bs, pn, { className: 0, theme: 1 });
  }
}
function ks(_) {
  let o, a;
  return {
    c() {
      (o = lt("svg")), (a = lt("path")), this.h();
    },
    l(u) {
      o = st(u, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0,
      });
      var d = ue(o);
      (a = st(d, "path", { d: !0, fill: !0, class: !0 })),
        ue(a).forEach(O),
        d.forEach(O),
        this.h();
    },
    h() {
      f(
        a,
        "d",
        "M1.02014 33.8194H5.18396L16.3014 21.2098L25.9718 33.7986H37.2766L22.443 14.2299L34.9969 0H30.8331L20.5172 11.6955L11.6691 0.010386H0L14.3548 18.6962L1.00973 33.8298L1.02014 33.8194ZM6.33942 3.11604H10.1285L31.01 30.6826H27.5228L6.34983 3.11604H6.33942Z"
      ),
        f(a, "fill", "currentColor"),
        f(a, "class", "transition-colors duration-500"),
        f(o, "width", "38"),
        f(o, "height", "34"),
        f(o, "viewBox", "0 0 38 34"),
        f(o, "fill", "none"),
        f(o, "xmlns", "http://www.w3.org/2000/svg"),
        f(o, "class", _[0]);
    },
    m(u, d) {
      Ne(u, o, d), te(o, a);
    },
    p(u, [d]) {
      d & 1 && f(o, "class", u[0]);
    },
    i: Br,
    o: Br,
    d(u) {
      u && O(o);
    },
  };
}
function Cs(_, o, a) {
  let { className: u = "" } = o;
  return (
    (_.$$set = (d) => {
      "className" in d && a(0, (u = d.className));
    }),
    [u]
  );
}
class ys extends gn {
  constructor(o) {
    super(), mn(this, o, Cs, ks, pn, { className: 0 });
  }
}
function xs(_) {
  let o, a;
  return {
    c() {
      (o = lt("svg")), (a = lt("path")), this.h();
    },
    l(u) {
      o = st(u, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0,
      });
      var d = ue(o);
      (a = st(d, "path", { d: !0, fill: !0, class: !0 })),
        ue(a).forEach(O),
        d.forEach(O),
        this.h();
    },
    h() {
      f(
        a,
        "d",
        "M30.7617 0.316406C30.7813 0.307857 33.1843 -0.735771 33.1846 1.01172L27.9365 27.3271C27.8336 27.5791 27.6764 27.8074 27.4766 27.9951C27.2768 28.1827 27.0381 28.3262 26.7773 28.416C26.5165 28.5058 26.2392 28.5396 25.9639 28.5156C25.6884 28.4916 25.4214 28.41 25.1807 28.2764L17.7148 22.5811L12.9238 26.9209C12.8127 27.0015 12.6828 27.0539 12.5459 27.0723C12.4091 27.0906 12.2696 27.0747 12.1406 27.0264L13.0586 18.957L13.0879 18.9805L13.1064 18.8213C13.1064 18.8213 26.5406 6.8124 27.0879 6.30078C27.6327 5.79887 27.4645 5.68424 27.459 5.68066C27.4905 5.05823 26.4648 5.68066 26.4648 5.68066L8.66504 16.9229L1.25293 14.4443C1.24889 14.4429 0.113934 14.0421 0.00683594 13.1621C-0.105392 12.2914 1.27724 11.8169 1.29004 11.8125L30.7617 0.316406Z"
      ),
        f(a, "fill", "currentColor"),
        f(a, "class", "transition-colors duration-500"),
        f(o, "width", "34"),
        f(o, "height", "29"),
        f(o, "viewBox", "0 0 34 29"),
        f(o, "fill", "none"),
        f(o, "xmlns", "http://www.w3.org/2000/svg"),
        f(o, "class", _[0]);
    },
    m(u, d) {
      Ne(u, o, d), te(o, a);
    },
    p(u, [d]) {
      d & 1 && f(o, "class", u[0]);
    },
    i: Br,
    o: Br,
    d(u) {
      u && O(o);
    },
  };
}
function Ss(_, o, a) {
  let { className: u = "" } = o;
  return (
    (_.$$set = (d) => {
      "className" in d && a(0, (u = d.className));
    }),
    [u]
  );
}
class Ts extends gn {
  constructor(o) {
    super(), mn(this, o, Ss, xs, pn, { className: 0 });
  }
}
function Es(_) {
  let o, a, u, d, h;
  return {
    c() {
      (o = lt("svg")),
        (a = lt("rect")),
        (u = lt("polyline")),
        (d = lt("line")),
        (h = lt("line")),
        this.h();
    },
    l(D) {
      o = st(D, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0,
      });
      var L = ue(o);
      (a = st(L, "rect", {
        fill: !0,
        height: !0,
        stroke: !0,
        "stroke-linejoin": !0,
        "stroke-miterlimit": !0,
        "stroke-width": !0,
        width: !0,
        x: !0,
        y: !0,
        class: !0,
      })),
        ue(a).forEach(O),
        (u = st(L, "polyline", {
          fill: !0,
          points: !0,
          stroke: !0,
          "stroke-linejoin": !0,
          "stroke-miterlimit": !0,
          "stroke-width": !0,
          class: !0,
        })),
        ue(u).forEach(O),
        (d = st(L, "line", {
          fill: !0,
          stroke: !0,
          "stroke-linejoin": !0,
          "stroke-miterlimit": !0,
          "stroke-width": !0,
          x1: !0,
          x2: !0,
          y1: !0,
          y2: !0,
          class: !0,
        })),
        ue(d).forEach(O),
        (h = st(L, "line", {
          fill: !0,
          stroke: !0,
          "stroke-linejoin": !0,
          "stroke-miterlimit": !0,
          "stroke-width": !0,
          x1: !0,
          x2: !0,
          y1: !0,
          y2: !0,
          class: !0,
        })),
        ue(h).forEach(O),
        L.forEach(O),
        this.h();
    },
    h() {
      f(a, "fill", "none"),
        f(a, "height", "22"),
        f(a, "stroke", "currentColor"),
        f(a, "stroke-linejoin", "round"),
        f(a, "stroke-miterlimit", "10"),
        f(a, "stroke-width", "2"),
        f(a, "width", "30"),
        f(a, "x", "1"),
        f(a, "y", "5"),
        f(a, "class", "transition-colors duration-500"),
        f(u, "fill", "none"),
        f(u, "points", "1,5 16,20 31,5"),
        f(u, "stroke", "currentColor"),
        f(u, "stroke-linejoin", "round"),
        f(u, "stroke-miterlimit", "10"),
        f(u, "stroke-width", "2"),
        f(u, "class", "transition-colors duration-500"),
        f(d, "fill", "none"),
        f(d, "stroke", "currentColor"),
        f(d, "stroke-linejoin", "round"),
        f(d, "stroke-miterlimit", "10"),
        f(d, "stroke-width", "2"),
        f(d, "x1", "1"),
        f(d, "x2", "12"),
        f(d, "y1", "27"),
        f(d, "y2", "16"),
        f(d, "class", "transition-colors duration-500"),
        f(h, "fill", "none"),
        f(h, "stroke", "currentColor"),
        f(h, "stroke-linejoin", "round"),
        f(h, "stroke-miterlimit", "10"),
        f(h, "stroke-width", "2"),
        f(h, "x1", "31"),
        f(h, "x2", "20"),
        f(h, "y1", "27"),
        f(h, "y2", "16"),
        f(h, "class", "transition-colors duration-500"),
        f(o, "width", "34"),
        f(o, "height", "34"),
        f(o, "viewBox", "0 0 32 32"),
        f(o, "fill", "none"),
        f(o, "xmlns", "http://www.w3.org/2000/svg"),
        f(o, "class", _[0]);
    },
    m(D, L) {
      Ne(D, o, L), te(o, a), te(o, u), te(o, d), te(o, h);
    },
    p(D, [L]) {
      L & 1 && f(o, "class", D[0]);
    },
    i: Br,
    o: Br,
    d(D) {
      D && O(o);
    },
  };
}
function Ms(_, o, a) {
  let { className: u = "" } = o;
  return (
    (_.$$set = (d) => {
      "className" in d && a(0, (u = d.className));
    }),
    [u]
  );
}
class Ps extends gn {
  constructor(o) {
    super(), mn(this, o, Ms, Es, pn, { className: 0 });
  }
}
function As(_) {
  let o, a, u;
  return {
    c() {
      (o = lt("svg")), (a = lt("path")), (u = lt("path")), this.h();
    },
    l(d) {
      o = st(d, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        class: !0,
      });
      var h = ue(o);
      (a = st(h, "path", { fill: !0, d: !0 })),
        ue(a).forEach(O),
        (u = st(h, "path", { fill: !0, d: !0 })),
        ue(u).forEach(O),
        h.forEach(O),
        this.h();
    },
    h() {
      f(a, "fill", "currentColor"),
        f(
          a,
          "d",
          "M7 0a2 2 0 0 0-2 2h9a2 2 0 0 1 2 2v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
        ),
        f(u, "fill", "currentColor"),
        f(
          u,
          "d",
          "M13 20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"
        ),
        f(o, "xmlns", "http://www.w3.org/2000/svg"),
        f(o, "width", "34"),
        f(o, "height", "34"),
        f(o, "viewBox", "0 0 20 20"),
        f(o, "class", _[0]);
    },
    m(d, h) {
      Ne(d, o, h), te(o, a), te(o, u);
    },
    p(d, [h]) {
      h & 1 && f(o, "class", d[0]);
    },
    i: Br,
    o: Br,
    d(d) {
      d && O(o);
    },
  };
}
function Ns(_, o, a) {
  let { className: u = "" } = o;
  return (
    (_.$$set = (d) => {
      "className" in d && a(0, (u = d.className));
    }),
    [u]
  );
}
class ko extends gn {
  constructor(o) {
    super(), mn(this, o, Ns, As, pn, { className: 0 });
  }
}
function Rs(_) {
  let o, a;
  return {
    c() {
      (o = lt("svg")), (a = lt("path")), this.h();
    },
    l(u) {
      o = st(u, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0,
      });
      var d = ue(o);
      (a = st(d, "path", { d: !0, fill: !0, class: !0 })),
        ue(a).forEach(O),
        d.forEach(O),
        this.h();
    },
    h() {
      f(
        a,
        "d",
        "M22.9659 52H44.6613C45.8542 52 46.8207 51.0413 46.8207 49.858V47.1618C46.8207 46.5936 47.0494 46.0464 47.4549 45.6466L51.3659 41.7718C51.7713 41.3696 52 40.8248 52 40.2566V23.0436C52 22.4824 51.7784 21.9422 51.3824 21.5423L40.5947 10.6407C40.1869 10.2315 39.6329 10 39.053 10H17.3387C16.1458 10 15.1769 10.9587 15.1769 12.142V14.8381C15.1769 15.4064 14.9482 15.9512 14.5451 16.3534L10.6318 20.2352C10.2287 20.6374 10 21.1822 10 21.7505V38.9821C10 39.5457 10.224 40.0859 10.6224 40.4857L21.4288 51.3616C21.8343 51.7708 22.3883 52 22.9682 52H22.9659ZM45.4793 23.8854L45.6184 24.0234C46.0216 24.4256 46.2479 24.9681 46.2479 25.534V44.1289C46.2479 45.3122 45.2813 46.2709 44.0885 46.2709H25.6439C25.0711 46.2709 24.5218 46.0441 24.1163 45.6419L23.824 45.3519C22.98 44.5148 22.9824 43.1585 23.824 42.3214L32.0396 34.1674L32.1952 34.013L42.4241 23.8784C43.2704 23.0413 44.6401 23.0436 45.4817 23.8831L45.4793 23.8854ZM17.9351 16.0167H36.6602C37.233 16.0167 37.7823 16.2435 38.1878 16.6457C39.0318 17.4829 39.0294 18.8392 38.1878 19.6763L19.5853 38.1263C18.7414 38.9634 17.3717 38.9634 16.5277 38.1263L16.3863 37.9836C15.9808 37.5814 15.7545 37.0366 15.7545 36.4683C15.7568 33.3957 15.7686 23.1184 15.7733 18.1563C15.7733 16.9731 16.7423 16.0167 17.9328 16.0167H17.9351Z"
      ),
        f(a, "fill", "currentColor"),
        f(a, "class", "transition-colors duration-500"),
        f(o, "width", "62"),
        f(o, "height", "62"),
        f(o, "viewBox", "6 6 50 50"),
        f(o, "fill", "none"),
        f(o, "xmlns", "http://www.w3.org/2000/svg"),
        f(o, "class", _[0]);
    },
    m(u, d) {
      Ne(u, o, d), te(o, a);
    },
    p(u, [d]) {
      d & 1 && f(o, "class", u[0]);
    },
    i: Br,
    o: Br,
    d(u) {
      u && O(o);
    },
  };
}
function Ls(_, o, a) {
  let { className: u = "" } = o;
  return (
    (_.$$set = (d) => {
      "className" in d && a(0, (u = d.className));
    }),
    [u]
  );
}
class zs extends gn {
  constructor(o) {
    super(), mn(this, o, Ls, Rs, pn, { className: 0 });
  }
}
function Co(_) {
  let o, a, u, d;
  return {
    c() {
      (o = Ee("div")), this.h();
    },
    l(h) {
      (o = Te(h, "DIV", { class: !0 })), ue(o).forEach(O), this.h();
    },
    h() {
      f(
        o,
        "class",
        "absolute inset-0 z-[10000] transition-colors duration-500"
      ),
        B(o, "bg-dark", _[2].theme === "dark"),
        B(o, "bg-light", _[2].theme === "light");
    },
    m(h, D) {
      Ne(h, o, D), (d = !0);
    },
    p(h, D) {
      (!d || D & 4) && B(o, "bg-dark", h[2].theme === "dark"),
        (!d || D & 4) && B(o, "bg-light", h[2].theme === "light");
    },
    i(h) {
      d ||
        (h &&
          Zi(() => {
            d && (u && u.end(1), (a = Po(o, Ri, { duration: 400 })), a.start());
          }),
        (d = !0));
    },
    o(h) {
      a && a.invalidate(), h && (u = Mo(o, Ri, { duration: 400 })), (d = !1);
    },
    d(h) {
      h && O(o), h && u && u.end();
    },
  };
}
function yo(_) {
  let o,
    a,
    u,
    d,
    h,
    D,
    L,
    K,
    F = _[0] ? "Now live" : "Beta closed. Launching soon",
    V,
    U,
    fe,
    $,
    Y,
    q,
    G,
    we,
    ie,
    xe = "Docs",
    at,
    oe,
    nt,
    Ce,
    J,
    ve,
    wt,
    Se,
    ae = "Meet Our Community",
    ce,
    it,
    tr,
    Ge,
    Et,
    Ze,
    Re,
    Qe,
    Dr = "Join our telegram",
    Fe,
    ft,
    _r,
    ze,
    je,
    jt,
    Ye,
    Z,
    Tr = "Articles",
    le,
    Me,
    Nt,
    ge,
    Ft,
    rr,
    vr,
    qt,
    Rt = "Business Inquiries",
    bt,
    De,
    Ir,
    Wt,
    S;
  return (
    (D = new zs({ props: { className: "text-inherit h-6 w-6" } })),
    (G = new ko({ props: { className: "text-inherit h-6 w-6" } })),
    (ve = new ys({ props: { className: "text-inherit h-6 w-6" } })),
    (Ze = new Ts({ props: { className: "text-inherit h-6 w-6" } })),
    (jt = new ko({ props: { className: "text-inherit h-6 w-6" } })),
    (rr = new Ps({ props: { className: "text-inherit h-6 w-6" } })),
    {
      c() {
        (o = Ee("div")),
          (a = Ee("div")),
          (u = Ee("div")),
          (d = Ee("div")),
          (h = Ee("span")),
          Qr(D.$$.fragment),
          (L = et()),
          (K = Ee("p")),
          (V = Zo(F)),
          ($ = et()),
          (Y = Ee("a")),
          (q = Ee("span")),
          Qr(G.$$.fragment),
          (we = et()),
          (ie = Ee("p")),
          (ie.textContent = xe),
          (nt = et()),
          (Ce = Ee("a")),
          (J = Ee("span")),
          Qr(ve.$$.fragment),
          (wt = et()),
          (Se = Ee("p")),
          (Se.textContent = ae),
          (tr = et()),
          (Ge = Ee("a")),
          (Et = Ee("span")),
          Qr(Ze.$$.fragment),
          (Re = et()),
          (Qe = Ee("p")),
          (Qe.textContent = Dr),
          (_r = et()),
          (ze = Ee("a")),
          (je = Ee("span")),
          Qr(jt.$$.fragment),
          (Ye = et()),
          (Z = Ee("p")),
          (Z.textContent = Tr),
          (Nt = et()),
          (ge = Ee("a")),
          (Ft = Ee("span")),
          Qr(rr.$$.fragment),
          (vr = et()),
          (qt = Ee("p")),
          (qt.textContent = Rt),
          this.h();
      },
      l(i) {
        o = Te(i, "DIV", { class: !0, style: !0 });
        var s = ue(o);
        a = Te(s, "DIV", { class: !0 });
        var p = ue(a);
        u = Te(p, "DIV", {});
        var w = ue(u);
        d = Te(w, "DIV", { class: !0 });
        var C = ue(d);
        h = Te(C, "SPAN", { class: !0 });
        var v = ue(h);
        Zr(D.$$.fragment, v), (L = Je(v)), (K = Te(v, "P", { class: !0 }));
        var E = ue(K);
        (V = Uo(E, F)),
          E.forEach(O),
          v.forEach(O),
          C.forEach(O),
          ($ = Je(w)),
          (Y = Te(w, "A", { href: !0, class: !0 }));
        var N = ue(Y);
        q = Te(N, "SPAN", { class: !0 });
        var T = ue(q);
        Zr(G.$$.fragment, T),
          (we = Je(T)),
          (ie = Te(T, "P", { "data-svelte-h": !0 })),
          ri(ie) !== "svelte-1yz368x" && (ie.textContent = xe),
          T.forEach(O),
          N.forEach(O),
          (nt = Je(w)),
          (Ce = Te(w, "A", { href: !0, target: !0, rel: !0, class: !0 }));
        var I = ue(Ce);
        J = Te(I, "SPAN", { class: !0 });
        var c = ue(J);
        Zr(ve.$$.fragment, c),
          (wt = Je(c)),
          (Se = Te(c, "P", { "data-svelte-h": !0 })),
          ri(Se) !== "svelte-wzfrjc" && (Se.textContent = ae),
          c.forEach(O),
          I.forEach(O),
          (tr = Je(w)),
          (Ge = Te(w, "A", { href: !0, target: !0, rel: !0, class: !0 }));
        var n = ue(Ge);
        Et = Te(n, "SPAN", { class: !0 });
        var m = ue(Et);
        Zr(Ze.$$.fragment, m),
          (Re = Je(m)),
          (Qe = Te(m, "P", { "data-svelte-h": !0 })),
          ri(Qe) !== "svelte-1sthe8x" && (Qe.textContent = Dr),
          m.forEach(O),
          n.forEach(O),
          (_r = Je(w)),
          (ze = Te(w, "A", { href: !0, class: !0 }));
        var z = ue(ze);
        je = Te(z, "SPAN", { class: !0 });
        var y = ue(je);
        Zr(jt.$$.fragment, y),
          (Ye = Je(y)),
          (Z = Te(y, "P", { "data-svelte-h": !0 })),
          ri(Z) !== "svelte-10dqv25" && (Z.textContent = Tr),
          y.forEach(O),
          z.forEach(O),
          (Nt = Je(w)),
          (ge = Te(w, "A", { href: !0, class: !0 }));
        var P = ue(ge);
        Ft = Te(P, "SPAN", { class: !0 });
        var M = ue(Ft);
        Zr(rr.$$.fragment, M),
          (vr = Je(M)),
          (qt = Te(M, "P", { "data-svelte-h": !0 })),
          ri(qt) !== "svelte-1o5zwnh" && (qt.textContent = Rt),
          M.forEach(O),
          P.forEach(O),
          w.forEach(O),
          p.forEach(O),
          s.forEach(O),
          this.h();
      },
      h() {
        f(K, "class", ""),
          f(
            h,
            "class",
            (U = ot(
              "relative z-10 flex items-center gap-2 transition-all  duration-500",
              _[2].theme === "dark" ? "text-light" : "text-dark"
            ))
          ),
          f(
            d,
            "class",
            (fe = ot(
              "border-border relative flex h-14 flex-shrink-0 cursor-default select-none items-center overflow-hidden border-b px-4 transition-all duration-500",
              _[2].theme === "dark" ? "bg-dark" : "bg-light"
            ))
          ),
          B(d, "border-light", _[2].theme === "dark"),
          B(d, "border-dark", _[2].theme === "light"),
          f(
            q,
            "class",
            (at = ot(
              "relative z-10 flex items-center gap-2 transition-all duration-500",
              _[2].theme === "dark"
                ? "text-light group-hover:text-dark"
                : "text-dark group-hover:text-light"
            ))
          ),
          f(Y, "href", "https://docs.nullmask.pro"),
          f(
            Y,
            "class",
            (oe = ot(
              "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 transition-all duration-500",
              _[2].theme === "dark"
                ? "bg-dark hover:bg-light"
                : "bg-light  hover:bg-dark"
            ))
          ),
          B(Y, "border-light", _[2].theme === "dark"),
          B(Y, "border-dark", _[2].theme === "light"),
          f(
            J,
            "class",
            (ce = ot(
              "relative z-10 flex items-center gap-2 transition-all  duration-500",
              _[2].theme === "dark"
                ? "text-light group-hover:text-dark"
                : "text-dark group-hover:text-light"
            ))
          ),
          f(Ce, "href", Xi.x),
          f(Ce, "target", "_blank"),
          f(Ce, "rel", "noopener noreferrer"),
          f(
            Ce,
            "class",
            (it = ot(
              "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 transition-all duration-500",
              _[2].theme === "dark"
                ? "bg-dark hover:bg-light"
                : "bg-light  hover:bg-dark"
            ))
          ),
          B(Ce, "border-light", _[2].theme === "dark"),
          B(Ce, "border-dark", _[2].theme === "light"),
          f(
            Et,
            "class",
            (Fe = ot(
              "relative z-10 flex items-center gap-2 transition-all  duration-500",
              _[2].theme === "dark"
                ? "text-light group-hover:text-dark"
                : "text-dark group-hover:text-light"
            ))
          ),
          f(Ge, "href", Xi.tg),
          f(Ge, "target", "_blank"),
          f(Ge, "rel", "noopener noreferrer"),
          f(
            Ge,
            "class",
            (ft = ot(
              "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 transition-all duration-500",
              _[2].theme === "dark"
                ? "bg-dark hover:bg-light"
                : "bg-light  hover:bg-dark"
            ))
          ),
          B(Ge, "border-light", _[2].theme === "dark"),
          B(Ge, "border-dark", _[2].theme === "light"),
          f(
            je,
            "class",
            (le = ot(
              "relative z-10 flex items-center gap-2 transition-all duration-500",
              _[2].theme === "dark"
                ? "text-light group-hover:text-dark"
                : "text-dark group-hover:text-light"
            ))
          ),
          f(ze, "href", "https://hackmd.io/@krnak/Sy5zROAFWx"),
          f(
            ze,
            "class",
            (Me = ot(
              "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 transition-all duration-500",
              _[2].theme === "dark"
                ? "bg-dark hover:bg-light"
                : "bg-light  hover:bg-dark"
            ))
          ),
          B(ze, "border-light", _[2].theme === "dark"),
          B(ze, "border-dark", _[2].theme === "light"),
          f(
            Ft,
            "class",
            (bt = ot(
              "relative z-10 flex items-center gap-2 transition-all duration-500",
              _[2].theme === "dark"
                ? "text-light group-hover:text-dark"
                : "text-dark group-hover:text-light"
            ))
          ),
          f(ge, "href", Xi.email),
          f(
            ge,
            "class",
            (De = ot(
              "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 transition-all duration-500",
              _[2].theme === "dark"
                ? "bg-dark hover:bg-light"
                : "bg-light  hover:bg-dark"
            ))
          ),
          B(ge, "border-light", _[2].theme === "dark"),
          B(ge, "border-dark", _[2].theme === "light"),
          f(
            a,
            "class",
            "relative z-[1] mb-4 flex flex-grow flex-col overflow-y-scroll rounded-b-[15px] border-x border-b transition-colors duration-500"
          ),
          B(a, "border-light", _[2].theme === "dark"),
          B(a, "border-dark", _[2].theme === "light"),
          f(
            o,
            "class",
            "fixed bottom-0 z-[10000] flex flex-col overflow-hidden px-4"
          ),
          Yr(o, "top", (_[1].md ? zn.height.desktop : zn.height.mobile) + "px"),
          Yr(o, "max-width", "1440px"),
          Yr(o, "left", "50%"),
          Yr(o, "transform", "translateX(-50%)"),
          Yr(o, "width", "100%");
      },
      m(i, s) {
        Ne(i, o, s),
          te(o, a),
          te(a, u),
          te(u, d),
          te(d, h),
          Ur(D, h, null),
          te(h, L),
          te(h, K),
          te(K, V),
          te(u, $),
          te(u, Y),
          te(Y, q),
          Ur(G, q, null),
          te(q, we),
          te(q, ie),
          te(u, nt),
          te(u, Ce),
          te(Ce, J),
          Ur(ve, J, null),
          te(J, wt),
          te(J, Se),
          te(u, tr),
          te(u, Ge),
          te(Ge, Et),
          Ur(Ze, Et, null),
          te(Et, Re),
          te(Et, Qe),
          te(u, _r),
          te(u, ze),
          te(ze, je),
          Ur(jt, je, null),
          te(je, Ye),
          te(je, Z),
          te(u, Nt),
          te(u, ge),
          te(ge, Ft),
          Ur(rr, Ft, null),
          te(Ft, vr),
          te(Ft, qt),
          (S = !0);
      },
      p(i, s) {
        (!S || s & 1) &&
          F !== (F = i[0] ? "Now live" : "Beta closed. Launching soon") &&
          Wo(V, F),
          (!S ||
            (s & 4 &&
              U !==
                (U = ot(
                  "relative z-10 flex items-center gap-2 transition-all  duration-500",
                  i[2].theme === "dark" ? "text-light" : "text-dark"
                )))) &&
            f(h, "class", U),
          (!S ||
            (s & 4 &&
              fe !==
                (fe = ot(
                  "border-border relative flex h-14 flex-shrink-0 cursor-default select-none items-center overflow-hidden border-b px-4 transition-all duration-500",
                  i[2].theme === "dark" ? "bg-dark" : "bg-light"
                )))) &&
            f(d, "class", fe),
          (!S || s & 4) && B(d, "border-light", i[2].theme === "dark"),
          (!S || s & 4) && B(d, "border-dark", i[2].theme === "light"),
          (!S ||
            (s & 4 &&
              at !==
                (at = ot(
                  "relative z-10 flex items-center gap-2 transition-all duration-500",
                  i[2].theme === "dark"
                    ? "text-light group-hover:text-dark"
                    : "text-dark group-hover:text-light"
                )))) &&
            f(q, "class", at),
          (!S ||
            (s & 4 &&
              oe !==
                (oe = ot(
                  "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 transition-all duration-500",
                  i[2].theme === "dark"
                    ? "bg-dark hover:bg-light"
                    : "bg-light  hover:bg-dark"
                )))) &&
            f(Y, "class", oe),
          (!S || s & 4) && B(Y, "border-light", i[2].theme === "dark"),
          (!S || s & 4) && B(Y, "border-dark", i[2].theme === "light"),
          (!S ||
            (s & 4 &&
              ce !==
                (ce = ot(
                  "relative z-10 flex items-center gap-2 transition-all  duration-500",
                  i[2].theme === "dark"
                    ? "text-light group-hover:text-dark"
                    : "text-dark group-hover:text-light"
                )))) &&
            f(J, "class", ce),
          (!S ||
            (s & 4 &&
              it !==
                (it = ot(
                  "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 transition-all duration-500",
                  i[2].theme === "dark"
                    ? "bg-dark hover:bg-light"
                    : "bg-light  hover:bg-dark"
                )))) &&
            f(Ce, "class", it),
          (!S || s & 4) && B(Ce, "border-light", i[2].theme === "dark"),
          (!S || s & 4) && B(Ce, "border-dark", i[2].theme === "light"),
          (!S ||
            (s & 4 &&
              Fe !==
                (Fe = ot(
                  "relative z-10 flex items-center gap-2 transition-all  duration-500",
                  i[2].theme === "dark"
                    ? "text-light group-hover:text-dark"
                    : "text-dark group-hover:text-light"
                )))) &&
            f(Et, "class", Fe),
          (!S ||
            (s & 4 &&
              ft !==
                (ft = ot(
                  "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 transition-all duration-500",
                  i[2].theme === "dark"
                    ? "bg-dark hover:bg-light"
                    : "bg-light  hover:bg-dark"
                )))) &&
            f(Ge, "class", ft),
          (!S || s & 4) && B(Ge, "border-light", i[2].theme === "dark"),
          (!S || s & 4) && B(Ge, "border-dark", i[2].theme === "light"),
          (!S ||
            (s & 4 &&
              le !==
                (le = ot(
                  "relative z-10 flex items-center gap-2 transition-all duration-500",
                  i[2].theme === "dark"
                    ? "text-light group-hover:text-dark"
                    : "text-dark group-hover:text-light"
                )))) &&
            f(je, "class", le),
          (!S ||
            (s & 4 &&
              Me !==
                (Me = ot(
                  "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 transition-all duration-500",
                  i[2].theme === "dark"
                    ? "bg-dark hover:bg-light"
                    : "bg-light  hover:bg-dark"
                )))) &&
            f(ze, "class", Me),
          (!S || s & 4) && B(ze, "border-light", i[2].theme === "dark"),
          (!S || s & 4) && B(ze, "border-dark", i[2].theme === "light"),
          (!S ||
            (s & 4 &&
              bt !==
                (bt = ot(
                  "relative z-10 flex items-center gap-2 transition-all duration-500",
                  i[2].theme === "dark"
                    ? "text-light group-hover:text-dark"
                    : "text-dark group-hover:text-light"
                )))) &&
            f(Ft, "class", bt),
          (!S ||
            (s & 4 &&
              De !==
                (De = ot(
                  "border-border group relative flex h-14 flex-shrink-0 items-center overflow-hidden border-b px-4 transition-all duration-500",
                  i[2].theme === "dark"
                    ? "bg-dark hover:bg-light"
                    : "bg-light  hover:bg-dark"
                )))) &&
            f(ge, "class", De),
          (!S || s & 4) && B(ge, "border-light", i[2].theme === "dark"),
          (!S || s & 4) && B(ge, "border-dark", i[2].theme === "light"),
          (!S || s & 4) && B(a, "border-light", i[2].theme === "dark"),
          (!S || s & 4) && B(a, "border-dark", i[2].theme === "light"),
          (!S || s & 2) &&
            Yr(
              o,
              "top",
              (i[1].md ? zn.height.desktop : zn.height.mobile) + "px"
            );
      },
      i(i) {
        S ||
          (ct(D.$$.fragment, i),
          ct(G.$$.fragment, i),
          ct(ve.$$.fragment, i),
          ct(Ze.$$.fragment, i),
          ct(jt.$$.fragment, i),
          ct(rr.$$.fragment, i),
          i &&
            Zi(() => {
              S &&
                (Wt && Wt.end(1),
                (Ir = Po(a, wo, { y: "-100%", duration: 500, opacity: 0 })),
                Ir.start());
            }),
          (S = !0));
      },
      o(i) {
        Tt(D.$$.fragment, i),
          Tt(G.$$.fragment, i),
          Tt(ve.$$.fragment, i),
          Tt(Ze.$$.fragment, i),
          Tt(jt.$$.fragment, i),
          Tt(rr.$$.fragment, i),
          Ir && Ir.invalidate(),
          i && (Wt = Mo(a, wo, { y: "-100%", duration: 500, opacity: 0 })),
          (S = !1);
      },
      d(i) {
        i && O(o),
          Wr(D),
          Wr(G),
          Wr(ve),
          Wr(Ze),
          Wr(jt),
          Wr(rr),
          i && Wt && Wt.end();
      },
    }
  );
}
function Ds(_) {
  let o, a, u, d, h, D, L, K, F, V, U, fe, $, Y, q;
  (h = new Ao({
    props: {
      className: "ml-2 h-12 flex-shrink-0 md:ml-4 md:h-16",
      theme: _[2].theme,
    },
  })),
    (L = new No({
      props: {
        className:
          "md:w-[240px] w-[160px] flex-shrink-0  transition-colors duration-500 h-auto object-contain",
        theme: _[2].theme,
      },
    })),
    (F = new vs({
      props: {
        className:
          "border-l flex items-center justify-center transition-colors duration-500 " +
          (_[2].theme === "light" ? "border-light" : "border-dark"),
        theme: _[2].theme,
      },
    })),
    F.$on("click", hs);
  let G = _[3] && Co(_),
    we = _[3] && yo(_);
  return {
    c() {
      (o = Ee("header")),
        (a = Ee("div")),
        (u = Ee("div")),
        (d = Ee("a")),
        Qr(h.$$.fragment),
        (D = et()),
        Qr(L.$$.fragment),
        (K = et()),
        Qr(F.$$.fragment),
        (fe = et()),
        G && G.c(),
        ($ = et()),
        we && we.c(),
        (Y = Ln()),
        this.h();
    },
    l(ie) {
      o = Te(ie, "HEADER", { class: !0, style: !0, "data-theme": !0 });
      var xe = ue(o);
      a = Te(xe, "DIV", { class: !0 });
      var at = ue(a);
      u = Te(at, "DIV", { class: !0 });
      var oe = ue(u);
      d = Te(oe, "A", { href: !0, class: !0 });
      var nt = ue(d);
      Zr(h.$$.fragment, nt),
        nt.forEach(O),
        (D = Je(oe)),
        Zr(L.$$.fragment, oe),
        oe.forEach(O),
        (K = Je(at)),
        Zr(F.$$.fragment, at),
        at.forEach(O),
        xe.forEach(O),
        (fe = Je(ie)),
        G && G.l(ie),
        ($ = Je(ie)),
        we && we.l(ie),
        (Y = Ln()),
        this.h();
    },
    h() {
      f(d, "href", "/"),
        f(d, "class", "block flex items-center"),
        f(u, "class", "items-cetner flex h-full flex-shrink-0 gap-2 md:gap-4"),
        f(
          a,
          "class",
          (V = ot(
            "flex h-full justify-between rounded-t-[15px]  border transition-all duration-500",
            !_[3] && "rounded-b-[15px]"
          ))
        ),
        B(a, "bg-dark", _[2].theme === "dark"),
        B(a, "bg-light", _[2].theme === "light"),
        B(a, "border-light", _[2].theme === "dark"),
        B(a, "border-dark", _[2].theme === "light"),
        f(o, "class", "fixed top-0 z-[10001] px-4 pt-4"),
        Yr(
          o,
          "height",
          (_[1].md ? zn.height.desktop : zn.height.mobile) + "px"
        ),
        Yr(o, "max-width", "1440px"),
        Yr(o, "left", "50%"),
        Yr(o, "transform", "translateX(-50%)"),
        Yr(o, "width", "100%"),
        f(o, "data-theme", (U = _[2].theme));
    },
    m(ie, xe) {
      Ne(ie, o, xe),
        te(o, a),
        te(a, u),
        te(u, d),
        Ur(h, d, null),
        te(u, D),
        Ur(L, u, null),
        te(a, K),
        Ur(F, a, null),
        Ne(ie, fe, xe),
        G && G.m(ie, xe),
        Ne(ie, $, xe),
        we && we.m(ie, xe),
        Ne(ie, Y, xe),
        (q = !0);
    },
    p(ie, [xe]) {
      const at = {};
      xe & 4 && (at.theme = ie[2].theme), h.$set(at);
      const oe = {};
      xe & 4 && (oe.theme = ie[2].theme), L.$set(oe);
      const nt = {};
      xe & 4 &&
        (nt.className =
          "border-l flex items-center justify-center transition-colors duration-500 " +
          (ie[2].theme === "light" ? "border-light" : "border-dark")),
        xe & 4 && (nt.theme = ie[2].theme),
        F.$set(nt),
        (!q ||
          (xe & 8 &&
            V !==
              (V = ot(
                "flex h-full justify-between rounded-t-[15px]  border transition-all duration-500",
                !ie[3] && "rounded-b-[15px]"
              )))) &&
          f(a, "class", V),
        (!q || xe & 12) && B(a, "bg-dark", ie[2].theme === "dark"),
        (!q || xe & 12) && B(a, "bg-light", ie[2].theme === "light"),
        (!q || xe & 12) && B(a, "border-light", ie[2].theme === "dark"),
        (!q || xe & 12) && B(a, "border-dark", ie[2].theme === "light"),
        (!q || xe & 2) &&
          Yr(
            o,
            "height",
            (ie[1].md ? zn.height.desktop : zn.height.mobile) + "px"
          ),
        (!q || (xe & 4 && U !== (U = ie[2].theme))) && f(o, "data-theme", U),
        ie[3]
          ? G
            ? (G.p(ie, xe), xe & 8 && ct(G, 1))
            : ((G = Co(ie)), G.c(), ct(G, 1), G.m($.parentNode, $))
          : G &&
            (ci(),
            Tt(G, 1, 1, () => {
              G = null;
            }),
            hi()),
        ie[3]
          ? we
            ? (we.p(ie, xe), xe & 8 && ct(we, 1))
            : ((we = yo(ie)), we.c(), ct(we, 1), we.m(Y.parentNode, Y))
          : we &&
            (ci(),
            Tt(we, 1, 1, () => {
              we = null;
            }),
            hi());
    },
    i(ie) {
      q ||
        (ct(h.$$.fragment, ie),
        ct(L.$$.fragment, ie),
        ct(F.$$.fragment, ie),
        ct(G),
        ct(we),
        (q = !0));
    },
    o(ie) {
      Tt(h.$$.fragment, ie),
        Tt(L.$$.fragment, ie),
        Tt(F.$$.fragment, ie),
        Tt(G),
        Tt(we),
        (q = !1);
    },
    d(ie) {
      ie && (O(o), O(fe), O($), O(Y)),
        Wr(h),
        Wr(L),
        Wr(F),
        G && G.d(ie),
        we && we.d(ie);
    },
  };
}
function Hs(_, o, a) {
  let u, d, h;
  Ni(_, as, (L) => a(1, (u = L))),
    Ni(_, us, (L) => a(2, (d = L))),
    Ni(_, Li, (L) => a(3, (h = L)));
  let D = !1;
  return (
    Ui(() => {
      const L = new Date(ls).getTime(),
        K = () => a(0, (D = Date.now() >= L));
      K();
      const F = setInterval(K, 1e3);
      return () => clearInterval(F);
    }),
    [D, u, d, h]
  );
}
class Os extends gn {
  constructor(o) {
    super(), mn(this, o, Hs, Ds, pn, {});
  }
}
function xo(_) {
  let o, a, u, d;
  return {
    c() {
      (o = Ee("div")), (a = Ee("div")), this.h();
    },
    l(h) {
      o = Te(h, "DIV", { class: !0 });
      var D = ue(o);
      (a = Te(D, "DIV", { class: !0, style: !0 })),
        ue(a).forEach(O),
        D.forEach(O),
        this.h();
    },
    h() {
      f(
        a,
        "class",
        "bg-primary h-full transition-all duration-300 ease-out svelte-1pycs78"
      ),
        Yr(a, "width", _[0] + "%"),
        f(
          o,
          "class",
          "fixed left-0 top-0 z-[999999] h-1 w-full bg-transparent"
        );
    },
    m(h, D) {
      Ne(h, o, D), te(o, a), (d = !0);
    },
    p(h, D) {
      (!d || D & 1) && Yr(a, "width", h[0] + "%");
    },
    i(h) {
      d ||
        (h &&
          Zi(() => {
            d && (u || (u = bo(o, Ri, {}, !0)), u.run(1));
          }),
        (d = !0));
    },
    o(h) {
      h && (u || (u = bo(o, Ri, {}, !1)), u.run(0)), (d = !1);
    },
    d(h) {
      h && O(o), h && u && u.end();
    },
  };
}
function Vs(_) {
  let o,
    a = _[1] && xo(_);
  return {
    c() {
      a && a.c(), (o = Ln());
    },
    l(u) {
      a && a.l(u), (o = Ln());
    },
    m(u, d) {
      a && a.m(u, d), Ne(u, o, d);
    },
    p(u, [d]) {
      u[1]
        ? a
          ? (a.p(u, d), d & 2 && ct(a, 1))
          : ((a = xo(u)), a.c(), ct(a, 1), a.m(o.parentNode, o))
        : a &&
          (ci(),
          Tt(a, 1, 1, () => {
            a = null;
          }),
          hi());
    },
    i(u) {
      ct(a);
    },
    o(u) {
      Tt(a);
    },
    d(u) {
      u && O(o), a && a.d(u);
    },
  };
}
function $s(_, o, a) {
  let u = 0,
    d = !1,
    h;
  return [
    u,
    d,
    async () => {
      a(1, (d = !0)),
        a(0, (u = 0)),
        await Qo(),
        a(0, (u = 20)),
        (h = setInterval(() => {
          u < 90 && (a(0, (u += Math.random() * 15)), u > 90 && a(0, (u = 90)));
        }, 400));
    },
    () => {
      h && clearInterval(h),
        a(0, (u = 100)),
        setTimeout(() => {
          a(1, (d = !1)), a(0, (u = 0));
        }, 300);
    },
  ];
}
class Fs extends gn {
  constructor(o) {
    super(), mn(this, o, $s, Vs, pn, { start: 2, complete: 3 });
  }
  get start() {
    return this.$$.ctx[2];
  }
  get complete() {
    return this.$$.ctx[3];
  }
}
const { document: ui } = ns;
function So(_) {
  let o,
    a,
    u,
    d,
    h,
    D,
    L,
    K,
    F,
    V,
    U,
    fe,
    $,
    Y,
    q,
    G,
    we,
    ie,
    xe,
    at,
    oe,
    nt,
    Ce;
  return (
    (ui.title = o = _[5].title),
    {
      c() {
        (a = et()),
          (u = Ee("meta")),
          (d = et()),
          (h = Ee("meta")),
          (D = et()),
          (L = Ee("meta")),
          (K = et()),
          (F = Ee("meta")),
          (V = et()),
          (U = Ee("meta")),
          (fe = et()),
          ($ = Ee("meta")),
          (Y = et()),
          (q = Ee("meta")),
          (G = et()),
          (we = Ee("meta")),
          (ie = et()),
          (xe = Ee("meta")),
          (at = et()),
          (oe = Ee("meta")),
          (nt = et()),
          (Ce = Ee("meta")),
          this.h();
      },
      l(J) {
        (a = Je(J)),
          (u = Te(J, "META", { name: !0, content: !0 })),
          (d = Je(J)),
          (h = Te(J, "META", { property: !0, content: !0 })),
          (D = Je(J)),
          (L = Te(J, "META", { property: !0, content: !0 })),
          (K = Je(J)),
          (F = Te(J, "META", { property: !0, content: !0 })),
          (V = Je(J)),
          (U = Te(J, "META", { property: !0, content: !0 })),
          (fe = Je(J)),
          ($ = Te(J, "META", { property: !0, content: !0 })),
          (Y = Je(J)),
          (q = Te(J, "META", { property: !0, content: !0 })),
          (G = Je(J)),
          (we = Te(J, "META", { property: !0, content: !0 })),
          (ie = Je(J)),
          (xe = Te(J, "META", { property: !0, content: !0 })),
          (at = Je(J)),
          (oe = Te(J, "META", { property: !0, content: !0 })),
          (nt = Je(J)),
          (Ce = Te(J, "META", { property: !0, content: !0 })),
          this.h();
      },
      h() {
        f(u, "name", "description"),
          f(u, "content", _[5].description),
          f(h, "property", "og:url"),
          f(h, "content", "https://nullmask.io/"),
          f(L, "property", "og:title"),
          f(L, "content", _[5].title),
          f(F, "property", "og:description"),
          f(F, "content", _[5].description),
          f(U, "property", "og:image:url"),
          f(U, "content", _[5].thumbnail),
          f($, "property", "twitter:domain"),
          f($, "content", "nullmask.io"),
          f(q, "property", "twitter:url"),
          f(q, "content", "https://nullmask.io/"),
          f(we, "property", "twitter:card"),
          f(we, "content", "summary_large_image"),
          f(xe, "property", "twitter:image"),
          f(xe, "content", _[5].thumbnail),
          f(oe, "property", "twitter:title"),
          f(oe, "content", _[5].title),
          f(Ce, "property", "twitter:description"),
          f(Ce, "content", _[5].description);
      },
      m(J, ve) {
        Ne(J, a, ve),
          Ne(J, u, ve),
          Ne(J, d, ve),
          Ne(J, h, ve),
          Ne(J, D, ve),
          Ne(J, L, ve),
          Ne(J, K, ve),
          Ne(J, F, ve),
          Ne(J, V, ve),
          Ne(J, U, ve),
          Ne(J, fe, ve),
          Ne(J, $, ve),
          Ne(J, Y, ve),
          Ne(J, q, ve),
          Ne(J, G, ve),
          Ne(J, we, ve),
          Ne(J, ie, ve),
          Ne(J, xe, ve),
          Ne(J, at, ve),
          Ne(J, oe, ve),
          Ne(J, nt, ve),
          Ne(J, Ce, ve);
      },
      p(J, ve) {
        ve & 32 && o !== (o = J[5].title) && (ui.title = o);
      },
      d(J) {
        J &&
          (O(a),
          O(u),
          O(d),
          O(h),
          O(D),
          O(L),
          O(K),
          O(F),
          O(V),
          O(U),
          O(fe),
          O($),
          O(Y),
          O(q),
          O(G),
          O(we),
          O(ie),
          O(xe),
          O(at),
          O(oe),
          O(nt),
          O(Ce));
      },
    }
  );
}
function To(_) {
  let o, a, u, d, h;
  return (
    (a = new Ao({
      props: { className: "h-20 flex-shrink-0 lg:h-24", theme: "dark" },
    })),
    (d = new No({
      props: {
        className:
          "w-[240px] flex-shrink-0  transition-all duration-500 h-auto object-contain",
        theme: "dark",
      },
    })),
    {
      c() {
        (o = Ee("div")),
          Qr(a.$$.fragment),
          (u = et()),
          Qr(d.$$.fragment),
          this.h();
      },
      l(D) {
        o = Te(D, "DIV", { class: !0 });
        var L = ue(o);
        Zr(a.$$.fragment, L),
          (u = Je(L)),
          Zr(d.$$.fragment, L),
          L.forEach(O),
          this.h();
      },
      h() {
        f(
          o,
          "class",
          "loading-state fixed left-0 top-0 z-[1000000] flex min-h-screen w-full flex-col items-center justify-center gap-4 svelte-1q0w051"
        ),
          B(o, "fade-out", _[1]);
      },
      m(D, L) {
        Ne(D, o, L), Ur(a, o, null), te(o, u), Ur(d, o, null), (h = !0);
      },
      p(D, L) {
        (!h || L & 2) && B(o, "fade-out", D[1]);
      },
      i(D) {
        h || (ct(a.$$.fragment, D), ct(d.$$.fragment, D), (h = !0));
      },
      o(D) {
        Tt(a.$$.fragment, D), Tt(d.$$.fragment, D), (h = !1);
      },
      d(D) {
        D && O(o), Wr(a), Wr(d);
      },
    }
  );
}
function Eo(_) {
  let o;
  const a = _[8].default,
    u = Jo(a, _, _[7], null);
  return {
    c() {
      u && u.c();
    },
    l(d) {
      u && u.l(d);
    },
    m(d, h) {
      u && u.m(d, h), (o = !0);
    },
    p(d, h) {
      u &&
        u.p &&
        (!o || h & 128) &&
        es(u, a, d, d[7], o ? rs(a, d[7], h, null) : ts(d[7]), null);
    },
    i(d) {
      o || (ct(u, d), (o = !0));
    },
    o(d) {
      Tt(u, d), (o = !1);
    },
    d(d) {
      u && u.d(d);
    },
  };
}
function Ys(_) {
  let o,
    a,
    u,
    d,
    h,
    D,
    L,
    K,
    F,
    V = !_[4] && So(_),
    U = {};
  (u = new Fs({ props: U })), _[9](u);
  let fe = !_[0] && To(_);
  D = new Os({});
  let $ = (_[3] || _[4]) && Eo(_);
  return {
    c() {
      V && V.c(),
        (o = Ln()),
        (a = et()),
        Qr(u.$$.fragment),
        (d = et()),
        fe && fe.c(),
        (h = et()),
        Qr(D.$$.fragment),
        (L = et()),
        $ && $.c(),
        (K = Ln());
    },
    l(Y) {
      const q = Ko("svelte-1rtg98s", ui.head);
      V && V.l(q),
        (o = Ln()),
        q.forEach(O),
        (a = Je(Y)),
        Zr(u.$$.fragment, Y),
        (d = Je(Y)),
        fe && fe.l(Y),
        (h = Je(Y)),
        Zr(D.$$.fragment, Y),
        (L = Je(Y)),
        $ && $.l(Y),
        (K = Ln());
    },
    m(Y, q) {
      V && V.m(ui.head, null),
        te(ui.head, o),
        Ne(Y, a, q),
        Ur(u, Y, q),
        Ne(Y, d, q),
        fe && fe.m(Y, q),
        Ne(Y, h, q),
        Ur(D, Y, q),
        Ne(Y, L, q),
        $ && $.m(Y, q),
        Ne(Y, K, q),
        (F = !0);
    },
    p(Y, [q]) {
      Y[4]
        ? V && (V.d(1), (V = null))
        : V
        ? V.p(Y, q)
        : ((V = So(Y)), V.c(), V.m(o.parentNode, o));
      const G = {};
      u.$set(G),
        Y[0]
          ? fe &&
            (ci(),
            Tt(fe, 1, 1, () => {
              fe = null;
            }),
            hi())
          : fe
          ? (fe.p(Y, q), q & 1 && ct(fe, 1))
          : ((fe = To(Y)), fe.c(), ct(fe, 1), fe.m(h.parentNode, h)),
        Y[3] || Y[4]
          ? $
            ? ($.p(Y, q), q & 24 && ct($, 1))
            : (($ = Eo(Y)), $.c(), ct($, 1), $.m(K.parentNode, K))
          : $ &&
            (ci(),
            Tt($, 1, 1, () => {
              $ = null;
            }),
            hi());
    },
    i(Y) {
      F ||
        (ct(u.$$.fragment, Y), ct(fe), ct(D.$$.fragment, Y), ct($), (F = !0));
    },
    o(Y) {
      Tt(u.$$.fragment, Y), Tt(fe), Tt(D.$$.fragment, Y), Tt($), (F = !1);
    },
    d(Y) {
      Y && (O(a), O(d), O(h), O(L), O(K)),
        V && V.d(Y),
        O(o),
        _[9](null),
        Wr(u, Y),
        fe && fe.d(Y),
        Wr(D, Y),
        $ && $.d(Y);
    },
  };
}
function Bs(_, o, a) {
  let u, d;
  Ni(_, ss, (G) => a(6, (d = G)));
  let { $$slots: h = {}, $$scope: D } = o,
    L = !1,
    K = !1,
    F,
    V = !1,
    U = !1,
    fe;
  const $ = {
      title: "Make any wallet and any transaction private — in one click.",
      description:
        "NullMask is the first private VPN for crypto, enabling invisible and untraceable tokens and stablecoin transactions across any chain and wallet — total privacy for Web3. One click. Total privacy. Any wallet, any transaction.",
      thumbnail: "/thumbnail.webp",
    },
    Y = ["/compliance"];
  Un.registerPlugin(Gi.ScrollTrigger, ps.MorphSVGPlugin, cs.ScrollSmoother),
    Gi.ScrollTrigger.defaults({ scroller: ".content-wrapper" }),
    Ui(() => {
      setTimeout(() => {
        a(1, (K = !0)),
          setTimeout(() => {
            a(0, (L = !0));
          }, 300);
      }, 300);
      let G;
      const we = document.querySelector("body");
      we &&
        ((fe = new ResizeObserver((xe) => {
          if (!V) {
            (V = !0),
              setTimeout(() => {
                a(3, (U = !0));
              }, 150);
            return;
          }
        })),
        fe.observe(we));
      const ie = () => {};
      return (
        window.addEventListener("resize", ie),
        () => {
          we && fe && fe.disconnect(),
            document.removeEventListener("visibilitychange", handleVisibility),
            window.removeEventListener("focus", handleFocus),
            window.removeEventListener("pageshow", handlePageShow),
            window.removeEventListener("orientationchange", handleOrientation),
            clearTimeout(G),
            window.removeEventListener("resize", ie);
        }
      );
    }),
    is(() => {
      F == null || F.complete(),
        ds(),
        setTimeout(() => {
          const G = document.querySelector(".content-wrapper");
          G && G.scrollTop !== 0 && G.scrollTo({ top: 0 }),
            Gi.ScrollTrigger.refresh();
        }, 0);
    }),
    os(() => {
      F == null || F.start();
    });
  function q(G) {
    Ai[G ? "unshift" : "push"](() => {
      (F = G), a(2, F);
    });
  }
  return (
    (_.$$set = (G) => {
      "$$scope" in G && a(7, (D = G.$$scope));
    }),
    (_.$$.update = () => {
      _.$$.dirty & 64 && a(4, (u = Y.includes(d.url.pathname)));
    }),
    [L, K, F, U, u, $, d, D, h, q]
  );
}
class Qs extends gn {
  constructor(o) {
    super(), mn(this, o, Bs, Ys, pn, {});
  }
}
export { Qs as component };
