var Hn = Object.defineProperty;
var Vn = (h, t, e) => t in h ? Hn(h, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[t] = e;
var B = (h, t, e) => (Vn(h, typeof t != "symbol" ? t + "" : t, e), e);
function tr(h, t) {
  for (var e = 0; e < t.length; e++) {
    const i = t[e];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const r in i)
        if (r !== "default" && !(r in h)) {
          const n = Object.getOwnPropertyDescriptor(i, r);
          n && Object.defineProperty(h, r, n.get ? n : {
            enumerable: !0,
            get: () => i[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(h, Symbol.toStringTag, { value: "Module" }));
}
let be = [];
function pt(h, t, e) {
  !h || !t || !e || (be.push({ target: h, eventName: t, handler: e }), h.addEventListener(t, e));
}
function Wi(h, t, e) {
  !h || !t || !e || (be = be.filter((i) => i.target !== h || i.eventName !== t || i.handler !== e ? !0 : (h.removeEventListener(t, e), !1)));
}
function $n() {
  for (const { target: h, eventName: t, handler: e } of be)
    h.removeEventListener(t, e);
  be.length = 0;
}
class ot {
  constructor({ className: t, id: e }) {
    B(this, "className");
    B(this, "id");
    this.className = t ?? "", this.id = e ?? "";
  }
  static class(t) {
    return new ot({ className: t });
  }
  static id(t) {
    return new ot({ id: t });
  }
  get name() {
    return this.className;
  }
  toString() {
    return this.id ? `#${this.id}` : `.${this.className}`;
  }
  element() {
    return document.querySelector(this.toString());
  }
}
const Wn = "_enjoyhint_1x61h_1", zn = "_hide_1x61h_12", Yn = "_disableEvents_1x61h_16", Xn = "_nextBtn_1x61h_24", jn = "_prevBtn_1x61h_25", Kn = "_skipBtn_1x61h_26", qn = "_btn_1x61h_34", Qn = "_closeBtn_1x61h_34", Jn = "_canvas_1x61h_111", Zn = "_konvaContainer_1x61h_1", ta = "_svgWrapper_1x61h_132", ea = "_svgTransparent_1x61h_150", ia = "_label_1x61h_151", ra = "_konvaContent_1x61h_194", bt = {
  enjoyhint: Wn,
  hide: zn,
  disableEvents: Yn,
  nextBtn: Xn,
  prevBtn: jn,
  skipBtn: Kn,
  btn: qn,
  closeBtn: Qn,
  "canvas-container": "_canvas-container_1x61h_111",
  canvas: Jn,
  konvaContainer: Zn,
  svgWrapper: ta,
  svgTransparent: ea,
  label: ia,
  konvaContent: ra
}, U = {
  enjoyHint: ot.class(bt.enjoyhint),
  hide: ot.class(bt.hide),
  disableEventsElement: ot.class(bt.disableEvents),
  btn: ot.class(bt.btn),
  skipBtn: ot.class(bt.skipBtn),
  closeBtn: ot.class(bt.closeBtn),
  nextBtn: ot.class(bt.nextBtn),
  previousBtn: ot.class(bt.prevBtn),
  mainCanvas: ot.class(bt.canvas),
  svgWrapper: ot.class(bt.svgWrapper),
  svgTransparent: ot.class(bt.svgTransparent),
  label: ot.class(bt.label),
  mainSvg: ot.class("mainSvg")
}, vt = {
  kineticContainer: ot.id(bt.konvaContainer),
  label: ot.id(bt.label),
  canvas: ot.id("canvas"),
  arrowLine: ot.id("arrowLine"),
  polyline: ot.id("polyline"),
  arrowMarker: ot.id("arrowMarker")
};
function na(h, t, e, i, r, n) {
  return e < 2 * r && (r = e / 2), i < 2 * r && (r = i / 2), n.beginPath(), n.moveTo(h + r, t), n.arcTo(h + e, t, h + e, t + i, r), n.arcTo(h + e, t + i, h, t + i, r), n.arcTo(h, t + i, h, t, r), n.arcTo(h, t, h + e, t, r), n.closePath(), n;
}
var yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function er(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
function rn(h) {
  if (h.__esModule)
    return h;
  var t = h.default;
  if (typeof t == "function") {
    var e = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(h).forEach(function(i) {
    var r = Object.getOwnPropertyDescriptor(h, i);
    Object.defineProperty(e, i, r.get ? r : {
      enumerable: !0,
      get: function() {
        return h[i];
      }
    });
  }), e;
}
var ir = { exports: {} }, Ve = {}, nn = {}, rr = {};
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 }), h._registerNode = h.Konva = h.glob = void 0;
  const t = Math.PI / 180;
  function e() {
    return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  h.glob = typeof yr < "u" ? yr : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, h.Konva = {
    _global: h.glob,
    version: "9.3.0",
    isBrowser: e(),
    isUnminified: /param/.test((function(r) {
    }).toString()),
    dblClickWindow: 400,
    getAngle(r) {
      return h.Konva.angleDeg ? r * t : r;
    },
    enableTrace: !1,
    pointerEventsEnabled: !0,
    autoDrawEnabled: !0,
    hitOnDragEnabled: !1,
    capturePointerEventsEnabled: !1,
    _mouseListenClick: !1,
    _touchListenClick: !1,
    _pointerListenClick: !1,
    _mouseInDblClickWindow: !1,
    _touchInDblClickWindow: !1,
    _pointerInDblClickWindow: !1,
    _mouseDblClickPointerId: null,
    _touchDblClickPointerId: null,
    _pointerDblClickPointerId: null,
    pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
    dragDistance: 3,
    angleDeg: !0,
    showWarnings: !0,
    dragButtons: [0, 1],
    isDragging() {
      return h.Konva.DD.isDragging;
    },
    isDragReady() {
      return !!h.Konva.DD.node;
    },
    releaseCanvasOnDestroy: !0,
    document: h.glob.document,
    _injectGlobal(r) {
      h.glob.Konva = r;
    }
  };
  const i = (r) => {
    h.Konva[r.prototype.getClassName()] = r;
  };
  h._registerNode = i, h.Konva._injectGlobal(h.Konva);
})(rr);
const aa = /* @__PURE__ */ er(rr), sa = /* @__PURE__ */ tr({
  __proto__: null,
  default: aa
}, [rr]), X = /* @__PURE__ */ rn(sa);
var nr = {};
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 }), h.Util = h.Transform = void 0;
  const t = X;
  class e {
    constructor(v = [1, 0, 0, 1, 0, 0]) {
      this.dirty = !1, this.m = v && v.slice() || [1, 0, 0, 1, 0, 0];
    }
    reset() {
      this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
    }
    copy() {
      return new e(this.m);
    }
    copyInto(v) {
      v.m[0] = this.m[0], v.m[1] = this.m[1], v.m[2] = this.m[2], v.m[3] = this.m[3], v.m[4] = this.m[4], v.m[5] = this.m[5];
    }
    point(v) {
      var y = this.m;
      return {
        x: y[0] * v.x + y[2] * v.y + y[4],
        y: y[1] * v.x + y[3] * v.y + y[5]
      };
    }
    translate(v, y) {
      return this.m[4] += this.m[0] * v + this.m[2] * y, this.m[5] += this.m[1] * v + this.m[3] * y, this;
    }
    scale(v, y) {
      return this.m[0] *= v, this.m[1] *= v, this.m[2] *= y, this.m[3] *= y, this;
    }
    rotate(v) {
      var y = Math.cos(v), x = Math.sin(v), T = this.m[0] * y + this.m[2] * x, b = this.m[1] * y + this.m[3] * x, E = this.m[0] * -x + this.m[2] * y, w = this.m[1] * -x + this.m[3] * y;
      return this.m[0] = T, this.m[1] = b, this.m[2] = E, this.m[3] = w, this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(v, y) {
      var x = this.m[0] + this.m[2] * y, T = this.m[1] + this.m[3] * y, b = this.m[2] + this.m[0] * v, E = this.m[3] + this.m[1] * v;
      return this.m[0] = x, this.m[1] = T, this.m[2] = b, this.m[3] = E, this;
    }
    multiply(v) {
      var y = this.m[0] * v.m[0] + this.m[2] * v.m[1], x = this.m[1] * v.m[0] + this.m[3] * v.m[1], T = this.m[0] * v.m[2] + this.m[2] * v.m[3], b = this.m[1] * v.m[2] + this.m[3] * v.m[3], E = this.m[0] * v.m[4] + this.m[2] * v.m[5] + this.m[4], w = this.m[1] * v.m[4] + this.m[3] * v.m[5] + this.m[5];
      return this.m[0] = y, this.m[1] = x, this.m[2] = T, this.m[3] = b, this.m[4] = E, this.m[5] = w, this;
    }
    invert() {
      var v = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), y = this.m[3] * v, x = -this.m[1] * v, T = -this.m[2] * v, b = this.m[0] * v, E = v * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), w = v * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return this.m[0] = y, this.m[1] = x, this.m[2] = T, this.m[3] = b, this.m[4] = E, this.m[5] = w, this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      var v = this.m[0], y = this.m[1], x = this.m[2], T = this.m[3], b = this.m[4], E = this.m[5], w = v * T - y * x;
      let k = {
        x: b,
        y: E,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (v != 0 || y != 0) {
        var M = Math.sqrt(v * v + y * y);
        k.rotation = y > 0 ? Math.acos(v / M) : -Math.acos(v / M), k.scaleX = M, k.scaleY = w / M, k.skewX = (v * x + y * T) / w, k.skewY = 0;
      } else if (x != 0 || T != 0) {
        var F = Math.sqrt(x * x + T * T);
        k.rotation = Math.PI / 2 - (T > 0 ? Math.acos(-x / F) : -Math.acos(x / F)), k.scaleX = w / F, k.scaleY = F, k.skewX = 0, k.skewY = (v * x + y * T) / w;
      }
      return k.rotation = h.Util._getRotation(k.rotation), k;
    }
  }
  h.Transform = e;
  var i = "[object Array]", r = "[object Number]", n = "[object String]", a = "[object Boolean]", s = Math.PI / 180, o = 180 / Math.PI, l = "#", u = "", _ = "0", g = "Konva warning: ", f = "Konva error: ", c = "rgb(", p = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 132, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 255, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 203],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [119, 128, 144],
    slategrey: [119, 128, 144],
    snow: [255, 255, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    transparent: [255, 255, 255, 0],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 5]
  }, m = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, C = [];
  const P = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(d) {
    setTimeout(d, 60);
  };
  h.Util = {
    _isElement(d) {
      return !!(d && d.nodeType == 1);
    },
    _isFunction(d) {
      return !!(d && d.constructor && d.call && d.apply);
    },
    _isPlainObject(d) {
      return !!d && d.constructor === Object;
    },
    _isArray(d) {
      return Object.prototype.toString.call(d) === i;
    },
    _isNumber(d) {
      return Object.prototype.toString.call(d) === r && !isNaN(d) && isFinite(d);
    },
    _isString(d) {
      return Object.prototype.toString.call(d) === n;
    },
    _isBoolean(d) {
      return Object.prototype.toString.call(d) === a;
    },
    isObject(d) {
      return d instanceof Object;
    },
    isValidSelector(d) {
      if (typeof d != "string")
        return !1;
      var v = d[0];
      return v === "#" || v === "." || v === v.toUpperCase();
    },
    _sign(d) {
      return d === 0 || d > 0 ? 1 : -1;
    },
    requestAnimFrame(d) {
      C.push(d), C.length === 1 && P(function() {
        const v = C;
        C = [], v.forEach(function(y) {
          y();
        });
      });
    },
    createCanvasElement() {
      var d = document.createElement("canvas");
      try {
        d.style = d.style || {};
      } catch {
      }
      return d;
    },
    createImageElement() {
      return document.createElement("img");
    },
    _isInDocument(d) {
      for (; d = d.parentNode; )
        if (d == document)
          return !0;
      return !1;
    },
    _urlToImage(d, v) {
      var y = h.Util.createImageElement();
      y.onload = function() {
        v(y);
      }, y.src = d;
    },
    _rgbToHex(d, v, y) {
      return ((1 << 24) + (d << 16) + (v << 8) + y).toString(16).slice(1);
    },
    _hexToRgb(d) {
      d = d.replace(l, u);
      var v = parseInt(d, 16);
      return {
        r: v >> 16 & 255,
        g: v >> 8 & 255,
        b: v & 255
      };
    },
    getRandomColor() {
      for (var d = (Math.random() * 16777215 << 0).toString(16); d.length < 6; )
        d = _ + d;
      return l + d;
    },
    getRGB(d) {
      var v;
      return d in p ? (v = p[d], {
        r: v[0],
        g: v[1],
        b: v[2]
      }) : d[0] === l ? this._hexToRgb(d.substring(1)) : d.substr(0, 4) === c ? (v = m.exec(d.replace(/ /g, "")), {
        r: parseInt(v[1], 10),
        g: parseInt(v[2], 10),
        b: parseInt(v[3], 10)
      }) : {
        r: 0,
        g: 0,
        b: 0
      };
    },
    colorToRGBA(d) {
      return d = d || "black", h.Util._namedColorToRBA(d) || h.Util._hex3ColorToRGBA(d) || h.Util._hex4ColorToRGBA(d) || h.Util._hex6ColorToRGBA(d) || h.Util._hex8ColorToRGBA(d) || h.Util._rgbColorToRGBA(d) || h.Util._rgbaColorToRGBA(d) || h.Util._hslColorToRGBA(d);
    },
    _namedColorToRBA(d) {
      var v = p[d.toLowerCase()];
      return v ? {
        r: v[0],
        g: v[1],
        b: v[2],
        a: 1
      } : null;
    },
    _rgbColorToRGBA(d) {
      if (d.indexOf("rgb(") === 0) {
        d = d.match(/rgb\(([^)]+)\)/)[1];
        var v = d.split(/ *, */).map(Number);
        return {
          r: v[0],
          g: v[1],
          b: v[2],
          a: 1
        };
      }
    },
    _rgbaColorToRGBA(d) {
      if (d.indexOf("rgba(") === 0) {
        d = d.match(/rgba\(([^)]+)\)/)[1];
        var v = d.split(/ *, */).map((y, x) => y.slice(-1) === "%" ? x === 3 ? parseInt(y) / 100 : parseInt(y) / 100 * 255 : Number(y));
        return {
          r: v[0],
          g: v[1],
          b: v[2],
          a: v[3]
        };
      }
    },
    _hex8ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 9)
        return {
          r: parseInt(d.slice(1, 3), 16),
          g: parseInt(d.slice(3, 5), 16),
          b: parseInt(d.slice(5, 7), 16),
          a: parseInt(d.slice(7, 9), 16) / 255
        };
    },
    _hex6ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 7)
        return {
          r: parseInt(d.slice(1, 3), 16),
          g: parseInt(d.slice(3, 5), 16),
          b: parseInt(d.slice(5, 7), 16),
          a: 1
        };
    },
    _hex4ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 5)
        return {
          r: parseInt(d[1] + d[1], 16),
          g: parseInt(d[2] + d[2], 16),
          b: parseInt(d[3] + d[3], 16),
          a: parseInt(d[4] + d[4], 16) / 255
        };
    },
    _hex3ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 4)
        return {
          r: parseInt(d[1] + d[1], 16),
          g: parseInt(d[2] + d[2], 16),
          b: parseInt(d[3] + d[3], 16),
          a: 1
        };
    },
    _hslColorToRGBA(d) {
      if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(d)) {
        const [v, ...y] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(d), x = Number(y[0]) / 360, T = Number(y[1]) / 100, b = Number(y[2]) / 100;
        let E, w, k;
        if (T === 0)
          return k = b * 255, {
            r: Math.round(k),
            g: Math.round(k),
            b: Math.round(k),
            a: 1
          };
        b < 0.5 ? E = b * (1 + T) : E = b + T - b * T;
        const M = 2 * b - E, F = [0, 0, 0];
        for (let N = 0; N < 3; N++)
          w = x + 1 / 3 * -(N - 1), w < 0 && w++, w > 1 && w--, 6 * w < 1 ? k = M + (E - M) * 6 * w : 2 * w < 1 ? k = E : 3 * w < 2 ? k = M + (E - M) * (2 / 3 - w) * 6 : k = M, F[N] = k * 255;
        return {
          r: Math.round(F[0]),
          g: Math.round(F[1]),
          b: Math.round(F[2]),
          a: 1
        };
      }
    },
    haveIntersection(d, v) {
      return !(v.x > d.x + d.width || v.x + v.width < d.x || v.y > d.y + d.height || v.y + v.height < d.y);
    },
    cloneObject(d) {
      var v = {};
      for (var y in d)
        this._isPlainObject(d[y]) ? v[y] = this.cloneObject(d[y]) : this._isArray(d[y]) ? v[y] = this.cloneArray(d[y]) : v[y] = d[y];
      return v;
    },
    cloneArray(d) {
      return d.slice(0);
    },
    degToRad(d) {
      return d * s;
    },
    radToDeg(d) {
      return d * o;
    },
    _degToRad(d) {
      return h.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), h.Util.degToRad(d);
    },
    _radToDeg(d) {
      return h.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), h.Util.radToDeg(d);
    },
    _getRotation(d) {
      return t.Konva.angleDeg ? h.Util.radToDeg(d) : d;
    },
    _capitalize(d) {
      return d.charAt(0).toUpperCase() + d.slice(1);
    },
    throw(d) {
      throw new Error(f + d);
    },
    error(d) {
      console.error(f + d);
    },
    warn(d) {
      t.Konva.showWarnings && console.warn(g + d);
    },
    each(d, v) {
      for (var y in d)
        v(y, d[y]);
    },
    _inRange(d, v, y) {
      return v <= d && d < y;
    },
    _getProjectionToSegment(d, v, y, x, T, b) {
      var E, w, k, M = (d - y) * (d - y) + (v - x) * (v - x);
      if (M == 0)
        E = d, w = v, k = (T - y) * (T - y) + (b - x) * (b - x);
      else {
        var F = ((T - d) * (y - d) + (b - v) * (x - v)) / M;
        F < 0 ? (E = d, w = v, k = (d - T) * (d - T) + (v - b) * (v - b)) : F > 1 ? (E = y, w = x, k = (y - T) * (y - T) + (x - b) * (x - b)) : (E = d + F * (y - d), w = v + F * (x - v), k = (E - T) * (E - T) + (w - b) * (w - b));
      }
      return [E, w, k];
    },
    _getProjectionToLine(d, v, y) {
      var x = h.Util.cloneObject(d), T = Number.MAX_VALUE;
      return v.forEach(function(b, E) {
        if (!(!y && E === v.length - 1)) {
          var w = v[(E + 1) % v.length], k = h.Util._getProjectionToSegment(b.x, b.y, w.x, w.y, d.x, d.y), M = k[0], F = k[1], N = k[2];
          N < T && (x.x = M, x.y = F, T = N);
        }
      }), x;
    },
    _prepareArrayForTween(d, v, y) {
      var x, T = [], b = [];
      if (d.length > v.length) {
        var E = v;
        v = d, d = E;
      }
      for (x = 0; x < d.length; x += 2)
        T.push({
          x: d[x],
          y: d[x + 1]
        });
      for (x = 0; x < v.length; x += 2)
        b.push({
          x: v[x],
          y: v[x + 1]
        });
      var w = [];
      return b.forEach(function(k) {
        var M = h.Util._getProjectionToLine(k, T, y);
        w.push(M.x), w.push(M.y);
      }), w;
    },
    _prepareToStringify(d) {
      var v;
      d.visitedByCircularReferenceRemoval = !0;
      for (var y in d)
        if (d.hasOwnProperty(y) && d[y] && typeof d[y] == "object") {
          if (v = Object.getOwnPropertyDescriptor(d, y), d[y].visitedByCircularReferenceRemoval || h.Util._isElement(d[y]))
            if (v.configurable)
              delete d[y];
            else
              return null;
          else if (h.Util._prepareToStringify(d[y]) === null)
            if (v.configurable)
              delete d[y];
            else
              return null;
        }
      return delete d.visitedByCircularReferenceRemoval, d;
    },
    _assign(d, v) {
      for (var y in v)
        d[y] = v[y];
      return d;
    },
    _getFirstPointerId(d) {
      return d.touches ? d.changedTouches[0].identifier : d.pointerId || 999;
    },
    releaseCanvas(...d) {
      t.Konva.releaseCanvasOnDestroy && d.forEach((v) => {
        v.width = 0, v.height = 0;
      });
    },
    drawRoundedRectPath(d, v, y, x) {
      let T = 0, b = 0, E = 0, w = 0;
      typeof x == "number" ? T = b = E = w = Math.min(x, v / 2, y / 2) : (T = Math.min(x[0] || 0, v / 2, y / 2), b = Math.min(x[1] || 0, v / 2, y / 2), w = Math.min(x[2] || 0, v / 2, y / 2), E = Math.min(x[3] || 0, v / 2, y / 2)), d.moveTo(T, 0), d.lineTo(v - b, 0), d.arc(v - b, b, b, Math.PI * 3 / 2, 0, !1), d.lineTo(v, y - w), d.arc(v - w, y - w, w, 0, Math.PI / 2, !1), d.lineTo(E, y), d.arc(E, y - E, E, Math.PI / 2, Math.PI, !1), d.lineTo(0, T), d.arc(T, T, T, Math.PI, Math.PI * 3 / 2, !1);
    }
  };
})(nr);
const oa = /* @__PURE__ */ er(nr), ha = /* @__PURE__ */ tr({
  __proto__: null,
  default: oa
}, [nr]), lt = /* @__PURE__ */ rn(ha);
var st = {}, z = {}, L = {};
Object.defineProperty(L, "__esModule", { value: !0 });
L.getComponentValidator = L.getBooleanValidator = L.getNumberArrayValidator = L.getFunctionValidator = L.getStringOrGradientValidator = L.getStringValidator = L.getNumberOrAutoValidator = L.getNumberOrArrayOfNumbersValidator = L.getNumberValidator = L.alphaComponent = L.RGBComponent = void 0;
const Gt = X, ht = lt;
function Ot(h) {
  return ht.Util._isString(h) ? '"' + h + '"' : Object.prototype.toString.call(h) === "[object Number]" || ht.Util._isBoolean(h) ? h : Object.prototype.toString.call(h);
}
function la(h) {
  return h > 255 ? 255 : h < 0 ? 0 : Math.round(h);
}
L.RGBComponent = la;
function da(h) {
  return h > 1 ? 1 : h < 1e-4 ? 1e-4 : h;
}
L.alphaComponent = da;
function ca() {
  if (Gt.Konva.isUnminified)
    return function(h, t) {
      return ht.Util._isNumber(h) || ht.Util.warn(Ot(h) + ' is a not valid value for "' + t + '" attribute. The value should be a number.'), h;
    };
}
L.getNumberValidator = ca;
function ua(h) {
  if (Gt.Konva.isUnminified)
    return function(t, e) {
      let i = ht.Util._isNumber(t), r = ht.Util._isArray(t) && t.length == h;
      return !i && !r && ht.Util.warn(Ot(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or Array<number>(' + h + ")"), t;
    };
}
L.getNumberOrArrayOfNumbersValidator = ua;
function fa() {
  if (Gt.Konva.isUnminified)
    return function(h, t) {
      var e = ht.Util._isNumber(h), i = h === "auto";
      return e || i || ht.Util.warn(Ot(h) + ' is a not valid value for "' + t + '" attribute. The value should be a number or "auto".'), h;
    };
}
L.getNumberOrAutoValidator = fa;
function ga() {
  if (Gt.Konva.isUnminified)
    return function(h, t) {
      return ht.Util._isString(h) || ht.Util.warn(Ot(h) + ' is a not valid value for "' + t + '" attribute. The value should be a string.'), h;
    };
}
L.getStringValidator = ga;
function va() {
  if (Gt.Konva.isUnminified)
    return function(h, t) {
      const e = ht.Util._isString(h), i = Object.prototype.toString.call(h) === "[object CanvasGradient]" || h && h.addColorStop;
      return e || i || ht.Util.warn(Ot(h) + ' is a not valid value for "' + t + '" attribute. The value should be a string or a native gradient.'), h;
    };
}
L.getStringOrGradientValidator = va;
function pa() {
  if (Gt.Konva.isUnminified)
    return function(h, t) {
      return ht.Util._isFunction(h) || ht.Util.warn(Ot(h) + ' is a not valid value for "' + t + '" attribute. The value should be a function.'), h;
    };
}
L.getFunctionValidator = pa;
function _a() {
  if (Gt.Konva.isUnminified)
    return function(h, t) {
      const e = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return e && h instanceof e || (ht.Util._isArray(h) ? h.forEach(function(i) {
        ht.Util._isNumber(i) || ht.Util.warn('"' + t + '" attribute has non numeric element ' + i + ". Make sure that all elements are numbers.");
      }) : ht.Util.warn(Ot(h) + ' is a not valid value for "' + t + '" attribute. The value should be a array of numbers.')), h;
    };
}
L.getNumberArrayValidator = _a;
function ma() {
  if (Gt.Konva.isUnminified)
    return function(h, t) {
      var e = h === !0 || h === !1;
      return e || ht.Util.warn(Ot(h) + ' is a not valid value for "' + t + '" attribute. The value should be a boolean.'), h;
    };
}
L.getBooleanValidator = ma;
function ya(h) {
  if (Gt.Konva.isUnminified)
    return function(t, e) {
      return t == null || ht.Util.isObject(t) || ht.Util.warn(Ot(t) + ' is a not valid value for "' + e + '" attribute. The value should be an object with properties ' + h), t;
    };
}
L.getComponentValidator = ya;
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 }), h.Factory = void 0;
  const t = lt, e = L;
  var i = "get", r = "set";
  h.Factory = {
    addGetterSetter(n, a, s, o, l) {
      h.Factory.addGetter(n, a, s), h.Factory.addSetter(n, a, o, l), h.Factory.addOverloadedGetterSetter(n, a);
    },
    addGetter(n, a, s) {
      var o = i + t.Util._capitalize(a);
      n.prototype[o] = n.prototype[o] || function() {
        var l = this.attrs[a];
        return l === void 0 ? s : l;
      };
    },
    addSetter(n, a, s, o) {
      var l = r + t.Util._capitalize(a);
      n.prototype[l] || h.Factory.overWriteSetter(n, a, s, o);
    },
    overWriteSetter(n, a, s, o) {
      var l = r + t.Util._capitalize(a);
      n.prototype[l] = function(u) {
        return s && u !== void 0 && u !== null && (u = s.call(this, u, a)), this._setAttr(a, u), o && o.call(this), this;
      };
    },
    addComponentsGetterSetter(n, a, s, o, l) {
      var u = s.length, _ = t.Util._capitalize, g = i + _(a), f = r + _(a), c, p;
      n.prototype[g] = function() {
        var C = {};
        for (c = 0; c < u; c++)
          p = s[c], C[p] = this.getAttr(a + _(p));
        return C;
      };
      var m = (0, e.getComponentValidator)(s);
      n.prototype[f] = function(C) {
        var P = this.attrs[a], d;
        o && (C = o.call(this, C)), m && m.call(this, C, a);
        for (d in C)
          C.hasOwnProperty(d) && this._setAttr(a + _(d), C[d]);
        return C || s.forEach((v) => {
          this._setAttr(a + _(v), void 0);
        }), this._fireChangeEvent(a, P, C), l && l.call(this), this;
      }, h.Factory.addOverloadedGetterSetter(n, a);
    },
    addOverloadedGetterSetter(n, a) {
      var s = t.Util._capitalize(a), o = r + s, l = i + s;
      n.prototype[a] = function() {
        return arguments.length ? (this[o](arguments[0]), this) : this[l]();
      };
    },
    addDeprecatedGetterSetter(n, a, s, o) {
      t.Util.error("Adding deprecated " + a);
      var l = i + t.Util._capitalize(a), u = a + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      n.prototype[l] = function() {
        t.Util.error(u);
        var _ = this.attrs[a];
        return _ === void 0 ? s : _;
      }, h.Factory.addSetter(n, a, o, function() {
        t.Util.error(u);
      }), h.Factory.addOverloadedGetterSetter(n, a);
    },
    backCompat(n, a) {
      t.Util.each(a, function(s, o) {
        var l = n.prototype[o], u = i + t.Util._capitalize(s), _ = r + t.Util._capitalize(s);
        function g() {
          l.apply(this, arguments), t.Util.error('"' + s + '" method is deprecated and will be removed soon. Use ""' + o + '" instead.');
        }
        n.prototype[s] = g, n.prototype[u] = g, n.prototype[_] = g;
      });
    },
    afterSetFilter() {
      this._filterUpToDate = !1;
    }
  };
})(z);
var kt = {}, Rt = {};
Object.defineProperty(Rt, "__esModule", { value: !0 });
Rt.HitContext = Rt.SceneContext = Rt.Context = void 0;
const an = lt, ba = X;
function Sa(h) {
  var t = [], e = h.length, i = an.Util, r, n;
  for (r = 0; r < e; r++)
    n = h[r], i._isNumber(n) ? n = Math.round(n * 1e3) / 1e3 : i._isString(n) || (n = n + ""), t.push(n);
  return t;
}
var br = ",", Ca = "(", wa = ")", xa = "([", Pa = "])", ka = ";", Ea = "()", Ta = "=", Sr = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
], Aa = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "letterSpacing",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "direction",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled"
];
const Ma = 100;
class $e {
  constructor(t) {
    this.canvas = t, ba.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
  }
  fillShape(t) {
    t.fillEnabled() && this._fill(t);
  }
  _fill(t) {
  }
  strokeShape(t) {
    t.hasStroke() && this._stroke(t);
  }
  _stroke(t) {
  }
  fillStrokeShape(t) {
    t.attrs.fillAfterStrokeEnabled ? (this.strokeShape(t), this.fillShape(t)) : (this.fillShape(t), this.strokeShape(t));
  }
  getTrace(t, e) {
    var i = this.traceArr, r = i.length, n = "", a, s, o, l;
    for (a = 0; a < r; a++)
      s = i[a], o = s.method, o ? (l = s.args, n += o, t ? n += Ea : an.Util._isArray(l[0]) ? n += xa + l.join(br) + Pa : (e && (l = l.map((u) => typeof u == "number" ? Math.floor(u) : u)), n += Ca + l.join(br) + wa)) : (n += s.property, t || (n += Ta + s.val)), n += ka;
    return n;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(t) {
    var e = this.traceArr, i;
    e.push(t), i = e.length, i >= Ma && e.shift();
  }
  reset() {
    var t = this.getCanvas().getPixelRatio();
    this.setTransform(1 * t, 0, 0, 1 * t, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(t) {
    var e = this.getCanvas();
    t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, e.getWidth() / e.pixelRatio, e.getHeight() / e.pixelRatio);
  }
  _applyLineCap(t) {
    const e = t.attrs.lineCap;
    e && this.setAttr("lineCap", e);
  }
  _applyOpacity(t) {
    var e = t.getAbsoluteOpacity();
    e !== 1 && this.setAttr("globalAlpha", e);
  }
  _applyLineJoin(t) {
    const e = t.attrs.lineJoin;
    e && this.setAttr("lineJoin", e);
  }
  setAttr(t, e) {
    this._context[t] = e;
  }
  arc(t, e, i, r, n, a) {
    this._context.arc(t, e, i, r, n, a);
  }
  arcTo(t, e, i, r, n) {
    this._context.arcTo(t, e, i, r, n);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(t, e, i, r, n, a) {
    this._context.bezierCurveTo(t, e, i, r, n, a);
  }
  clearRect(t, e, i, r) {
    this._context.clearRect(t, e, i, r);
  }
  clip(...t) {
    this._context.clip.apply(this._context, t);
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(t, e) {
    var i = arguments;
    if (i.length === 2)
      return this._context.createImageData(t, e);
    if (i.length === 1)
      return this._context.createImageData(t);
  }
  createLinearGradient(t, e, i, r) {
    return this._context.createLinearGradient(t, e, i, r);
  }
  createPattern(t, e) {
    return this._context.createPattern(t, e);
  }
  createRadialGradient(t, e, i, r, n, a) {
    return this._context.createRadialGradient(t, e, i, r, n, a);
  }
  drawImage(t, e, i, r, n, a, s, o, l) {
    var u = arguments, _ = this._context;
    u.length === 3 ? _.drawImage(t, e, i) : u.length === 5 ? _.drawImage(t, e, i, r, n) : u.length === 9 && _.drawImage(t, e, i, r, n, a, s, o, l);
  }
  ellipse(t, e, i, r, n, a, s, o) {
    this._context.ellipse(t, e, i, r, n, a, s, o);
  }
  isPointInPath(t, e, i, r) {
    return i ? this._context.isPointInPath(i, t, e, r) : this._context.isPointInPath(t, e, r);
  }
  fill(...t) {
    this._context.fill.apply(this._context, t);
  }
  fillRect(t, e, i, r) {
    this._context.fillRect(t, e, i, r);
  }
  strokeRect(t, e, i, r) {
    this._context.strokeRect(t, e, i, r);
  }
  fillText(t, e, i, r) {
    r ? this._context.fillText(t, e, i, r) : this._context.fillText(t, e, i);
  }
  measureText(t) {
    return this._context.measureText(t);
  }
  getImageData(t, e, i, r) {
    return this._context.getImageData(t, e, i, r);
  }
  lineTo(t, e) {
    this._context.lineTo(t, e);
  }
  moveTo(t, e) {
    this._context.moveTo(t, e);
  }
  rect(t, e, i, r) {
    this._context.rect(t, e, i, r);
  }
  putImageData(t, e, i) {
    this._context.putImageData(t, e, i);
  }
  quadraticCurveTo(t, e, i, r) {
    this._context.quadraticCurveTo(t, e, i, r);
  }
  restore() {
    this._context.restore();
  }
  rotate(t) {
    this._context.rotate(t);
  }
  save() {
    this._context.save();
  }
  scale(t, e) {
    this._context.scale(t, e);
  }
  setLineDash(t) {
    this._context.setLineDash ? this._context.setLineDash(t) : "mozDash" in this._context ? this._context.mozDash = t : "webkitLineDash" in this._context && (this._context.webkitLineDash = t);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(t, e, i, r, n, a) {
    this._context.setTransform(t, e, i, r, n, a);
  }
  stroke(t) {
    t ? this._context.stroke(t) : this._context.stroke();
  }
  strokeText(t, e, i, r) {
    this._context.strokeText(t, e, i, r);
  }
  transform(t, e, i, r, n, a) {
    this._context.transform(t, e, i, r, n, a);
  }
  translate(t, e) {
    this._context.translate(t, e);
  }
  _enableTrace() {
    var t = this, e = Sr.length, i = this.setAttr, r, n, a = function(s) {
      var o = t[s], l;
      t[s] = function() {
        return n = Sa(Array.prototype.slice.call(arguments, 0)), l = o.apply(t, arguments), t._trace({
          method: s,
          args: n
        }), l;
      };
    };
    for (r = 0; r < e; r++)
      a(Sr[r]);
    t.setAttr = function() {
      i.apply(t, arguments);
      var s = arguments[0], o = arguments[1];
      (s === "shadowOffsetX" || s === "shadowOffsetY" || s === "shadowBlur") && (o = o / this.canvas.getPixelRatio()), t._trace({
        property: s,
        val: o
      });
    };
  }
  _applyGlobalCompositeOperation(t) {
    const e = t.attrs.globalCompositeOperation;
    var i = !e || e === "source-over";
    i || this.setAttr("globalCompositeOperation", e);
  }
}
Rt.Context = $e;
Aa.forEach(function(h) {
  Object.defineProperty($e.prototype, h, {
    get() {
      return this._context[h];
    },
    set(t) {
      this._context[h] = t;
    }
  });
});
class Fa extends $e {
  constructor(t, { willReadFrequently: e = !1 } = {}) {
    super(t), this._context = t._canvas.getContext("2d", {
      willReadFrequently: e
    });
  }
  _fillColor(t) {
    var e = t.fill();
    this.setAttr("fillStyle", e), t._fillFunc(this);
  }
  _fillPattern(t) {
    this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this);
  }
  _fillLinearGradient(t) {
    var e = t._getLinearGradient();
    e && (this.setAttr("fillStyle", e), t._fillFunc(this));
  }
  _fillRadialGradient(t) {
    const e = t._getRadialGradient();
    e && (this.setAttr("fillStyle", e), t._fillFunc(this));
  }
  _fill(t) {
    const e = t.fill(), i = t.getFillPriority();
    if (e && i === "color") {
      this._fillColor(t);
      return;
    }
    const r = t.getFillPatternImage();
    if (r && i === "pattern") {
      this._fillPattern(t);
      return;
    }
    const n = t.getFillLinearGradientColorStops();
    if (n && i === "linear-gradient") {
      this._fillLinearGradient(t);
      return;
    }
    const a = t.getFillRadialGradientColorStops();
    if (a && i === "radial-gradient") {
      this._fillRadialGradient(t);
      return;
    }
    e ? this._fillColor(t) : r ? this._fillPattern(t) : n ? this._fillLinearGradient(t) : a && this._fillRadialGradient(t);
  }
  _strokeLinearGradient(t) {
    const e = t.getStrokeLinearGradientStartPoint(), i = t.getStrokeLinearGradientEndPoint(), r = t.getStrokeLinearGradientColorStops(), n = this.createLinearGradient(e.x, e.y, i.x, i.y);
    if (r) {
      for (var a = 0; a < r.length; a += 2)
        n.addColorStop(r[a], r[a + 1]);
      this.setAttr("strokeStyle", n);
    }
  }
  _stroke(t) {
    var e = t.dash(), i = t.getStrokeScaleEnabled();
    if (t.hasStroke()) {
      if (!i) {
        this.save();
        var r = this.getCanvas().getPixelRatio();
        this.setTransform(r, 0, 0, r, 0, 0);
      }
      this._applyLineCap(t), e && t.dashEnabled() && (this.setLineDash(e), this.setAttr("lineDashOffset", t.dashOffset())), this.setAttr("lineWidth", t.strokeWidth()), t.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)");
      var n = t.getStrokeLinearGradientColorStops();
      n ? this._strokeLinearGradient(t) : this.setAttr("strokeStyle", t.stroke()), t._strokeFunc(this), i || this.restore();
    }
  }
  _applyShadow(t) {
    var e, i, r, n = (e = t.getShadowRGBA()) !== null && e !== void 0 ? e : "black", a = (i = t.getShadowBlur()) !== null && i !== void 0 ? i : 5, s = (r = t.getShadowOffset()) !== null && r !== void 0 ? r : {
      x: 0,
      y: 0
    }, o = t.getAbsoluteScale(), l = this.canvas.getPixelRatio(), u = o.x * l, _ = o.y * l;
    this.setAttr("shadowColor", n), this.setAttr("shadowBlur", a * Math.min(Math.abs(u), Math.abs(_))), this.setAttr("shadowOffsetX", s.x * u), this.setAttr("shadowOffsetY", s.y * _);
  }
}
Rt.SceneContext = Fa;
class Na extends $e {
  constructor(t) {
    super(t), this._context = t._canvas.getContext("2d", {
      willReadFrequently: !0
    });
  }
  _fill(t) {
    this.save(), this.setAttr("fillStyle", t.colorKey), t._fillFuncHit(this), this.restore();
  }
  strokeShape(t) {
    t.hasHitStroke() && this._stroke(t);
  }
  _stroke(t) {
    if (t.hasHitStroke()) {
      const n = t.getStrokeScaleEnabled();
      if (!n) {
        this.save();
        var e = this.getCanvas().getPixelRatio();
        this.setTransform(e, 0, 0, e, 0, 0);
      }
      this._applyLineCap(t);
      var i = t.hitStrokeWidth(), r = i === "auto" ? t.strokeWidth() : i;
      this.setAttr("lineWidth", r), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this), n || this.restore();
    }
  }
}
Rt.HitContext = Na;
Object.defineProperty(kt, "__esModule", { value: !0 });
kt.HitCanvas = kt.SceneCanvas = kt.Canvas = void 0;
const Le = lt, sn = Rt, on = X, Ra = z, Ga = L;
var Te;
function Oa() {
  if (Te)
    return Te;
  var h = Le.Util.createCanvasElement(), t = h.getContext("2d");
  return Te = function() {
    var e = on.Konva._global.devicePixelRatio || 1, i = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
    return e / i;
  }(), Le.Util.releaseCanvas(h), Te;
}
class We {
  constructor(t) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    var e = t || {}, i = e.pixelRatio || on.Konva.pixelRatio || Oa();
    this.pixelRatio = i, this._canvas = Le.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(t) {
    var e = this.pixelRatio;
    this.pixelRatio = t, this.setSize(this.getWidth() / e, this.getHeight() / e);
  }
  setWidth(t) {
    this.width = this._canvas.width = t * this.pixelRatio, this._canvas.style.width = t + "px";
    var e = this.pixelRatio, i = this.getContext()._context;
    i.scale(e, e);
  }
  setHeight(t) {
    this.height = this._canvas.height = t * this.pixelRatio, this._canvas.style.height = t + "px";
    var e = this.pixelRatio, i = this.getContext()._context;
    i.scale(e, e);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(t, e) {
    this.setWidth(t || 0), this.setHeight(e || 0);
  }
  toDataURL(t, e) {
    try {
      return this._canvas.toDataURL(t, e);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (r) {
        return Le.Util.error("Unable to get data URL. " + r.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
kt.Canvas = We;
Ra.Factory.addGetterSetter(We, "pixelRatio", void 0, (0, Ga.getNumberValidator)());
class La extends We {
  constructor(t = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(t), this.context = new sn.SceneContext(this, {
      willReadFrequently: t.willReadFrequently
    }), this.setSize(t.width, t.height);
  }
}
kt.SceneCanvas = La;
class Da extends We {
  constructor(t = { width: 0, height: 0 }) {
    super(t), this.hitCanvas = !0, this.context = new sn.HitContext(this), this.setSize(t.width, t.height);
  }
}
kt.HitCanvas = Da;
var ze = {};
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 }), h.DD = void 0;
  const t = X, e = lt;
  h.DD = {
    get isDragging() {
      var i = !1;
      return h.DD._dragElements.forEach((r) => {
        r.dragStatus === "dragging" && (i = !0);
      }), i;
    },
    justDragged: !1,
    get node() {
      var i;
      return h.DD._dragElements.forEach((r) => {
        i = r.node;
      }), i;
    },
    _dragElements: /* @__PURE__ */ new Map(),
    _drag(i) {
      const r = [];
      h.DD._dragElements.forEach((n, a) => {
        const { node: s } = n, o = s.getStage();
        o.setPointersPositions(i), n.pointerId === void 0 && (n.pointerId = e.Util._getFirstPointerId(i));
        const l = o._changedPointerPositions.find((g) => g.id === n.pointerId);
        if (l) {
          if (n.dragStatus !== "dragging") {
            var u = s.dragDistance(), _ = Math.max(Math.abs(l.x - n.startPointerPos.x), Math.abs(l.y - n.startPointerPos.y));
            if (_ < u || (s.startDrag({ evt: i }), !s.isDragging()))
              return;
          }
          s._setDragPosition(i, n), r.push(s);
        }
      }), r.forEach((n) => {
        n.fire("dragmove", {
          type: "dragmove",
          target: n,
          evt: i
        }, !0);
      });
    },
    _endDragBefore(i) {
      const r = [];
      h.DD._dragElements.forEach((n) => {
        const { node: a } = n, s = a.getStage();
        if (i && s.setPointersPositions(i), !s._changedPointerPositions.find((u) => u.id === n.pointerId))
          return;
        (n.dragStatus === "dragging" || n.dragStatus === "stopped") && (h.DD.justDragged = !0, t.Konva._mouseListenClick = !1, t.Konva._touchListenClick = !1, t.Konva._pointerListenClick = !1, n.dragStatus = "stopped");
        const l = n.node.getLayer() || n.node instanceof t.Konva.Stage && n.node;
        l && r.indexOf(l) === -1 && r.push(l);
      }), r.forEach((n) => {
        n.draw();
      });
    },
    _endDragAfter(i) {
      h.DD._dragElements.forEach((r, n) => {
        r.dragStatus === "stopped" && r.node.fire("dragend", {
          type: "dragend",
          target: r.node,
          evt: i
        }, !0), r.dragStatus !== "dragging" && h.DD._dragElements.delete(n);
      });
    }
  }, t.Konva.isBrowser && (window.addEventListener("mouseup", h.DD._endDragBefore, !0), window.addEventListener("touchend", h.DD._endDragBefore, !0), window.addEventListener("mousemove", h.DD._drag), window.addEventListener("touchmove", h.DD._drag), window.addEventListener("mouseup", h.DD._endDragAfter, !1), window.addEventListener("touchend", h.DD._endDragAfter, !1));
})(ze);
Object.defineProperty(st, "__esModule", { value: !0 });
st.Node = void 0;
const j = lt, we = z, Ae = kt, zt = X, Ct = ze, ct = L;
var Ge = "absoluteOpacity", Me = "allEventListeners", Nt = "absoluteTransform", Cr = "absoluteScale", Yt = "canvas", Ba = "Change", Ia = "children", Ua = "konva", zi = "listening", wr = "mouseenter", xr = "mouseleave", Pr = "set", kr = "Shape", Oe = " ", Er = "stage", Bt = "transform", Ha = "Stage", Yi = "visible", Va = [
  "xChange.konva",
  "yChange.konva",
  "scaleXChange.konva",
  "scaleYChange.konva",
  "skewXChange.konva",
  "skewYChange.konva",
  "rotationChange.konva",
  "offsetXChange.konva",
  "offsetYChange.konva",
  "transformsEnabledChange.konva"
].join(Oe);
let $a = 1;
class I {
  constructor(t) {
    this._id = $a++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(t), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(t) {
    (t === Bt || t === Nt) && this._cache.get(t) ? this._cache.get(t).dirty = !0 : t ? this._cache.delete(t) : this._cache.clear();
  }
  _getCache(t, e) {
    var i = this._cache.get(t), r = t === Bt || t === Nt, n = i === void 0 || r && i.dirty === !0;
    return n && (i = e.call(this), this._cache.set(t, i)), i;
  }
  _calculate(t, e, i) {
    if (!this._attachedDepsListeners.get(t)) {
      const r = e.map((n) => n + "Change.konva").join(Oe);
      this.on(r, () => {
        this._clearCache(t);
      }), this._attachedDepsListeners.set(t, !0);
    }
    return this._getCache(t, i);
  }
  _getCanvasCache() {
    return this._cache.get(Yt);
  }
  _clearSelfAndDescendantCache(t) {
    this._clearCache(t), t === Nt && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(Yt)) {
      const { scene: t, filter: e, hit: i } = this._cache.get(Yt);
      j.Util.releaseCanvas(t, e, i), this._cache.delete(Yt);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(t) {
    var e = t || {}, i = {};
    (e.x === void 0 || e.y === void 0 || e.width === void 0 || e.height === void 0) && (i = this.getClientRect({
      skipTransform: !0,
      relativeTo: this.getParent() || void 0
    }));
    var r = Math.ceil(e.width || i.width), n = Math.ceil(e.height || i.height), a = e.pixelRatio, s = e.x === void 0 ? Math.floor(i.x) : e.x, o = e.y === void 0 ? Math.floor(i.y) : e.y, l = e.offset || 0, u = e.drawBorder || !1, _ = e.hitCanvasPixelRatio || 1;
    if (!r || !n) {
      j.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    r += l * 2 + 1, n += l * 2 + 1, s -= l, o -= l;
    var g = new Ae.SceneCanvas({
      pixelRatio: a,
      width: r,
      height: n
    }), f = new Ae.SceneCanvas({
      pixelRatio: a,
      width: 0,
      height: 0,
      willReadFrequently: !0
    }), c = new Ae.HitCanvas({
      pixelRatio: _,
      width: r,
      height: n
    }), p = g.getContext(), m = c.getContext();
    return c.isCache = !0, g.isCache = !0, this._cache.delete(Yt), this._filterUpToDate = !1, e.imageSmoothingEnabled === !1 && (g.getContext()._context.imageSmoothingEnabled = !1, f.getContext()._context.imageSmoothingEnabled = !1), p.save(), m.save(), p.translate(-s, -o), m.translate(-s, -o), this._isUnderCache = !0, this._clearSelfAndDescendantCache(Ge), this._clearSelfAndDescendantCache(Cr), this.drawScene(g, this), this.drawHit(c, this), this._isUnderCache = !1, p.restore(), m.restore(), u && (p.save(), p.beginPath(), p.rect(0, 0, r, n), p.closePath(), p.setAttr("strokeStyle", "red"), p.setAttr("lineWidth", 5), p.stroke(), p.restore()), this._cache.set(Yt, {
      scene: g,
      filter: f,
      hit: c,
      x: s,
      y: o
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(Yt);
  }
  getClientRect(t) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(t, e) {
    var i = [
      { x: t.x, y: t.y },
      { x: t.x + t.width, y: t.y },
      { x: t.x + t.width, y: t.y + t.height },
      { x: t.x, y: t.y + t.height }
    ], r = 1 / 0, n = 1 / 0, a = -1 / 0, s = -1 / 0, o = this.getAbsoluteTransform(e);
    return i.forEach(function(l) {
      var u = o.point(l);
      r === void 0 && (r = a = u.x, n = s = u.y), r = Math.min(r, u.x), n = Math.min(n, u.y), a = Math.max(a, u.x), s = Math.max(s, u.y);
    }), {
      x: r,
      y: n,
      width: a - r,
      height: s - n
    };
  }
  _drawCachedSceneCanvas(t) {
    t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
    const e = this._getCanvasCache();
    t.translate(e.x, e.y);
    var i = this._getCachedSceneCanvas(), r = i.pixelRatio;
    t.drawImage(i._canvas, 0, 0, i.width / r, i.height / r), t.restore();
  }
  _drawCachedHitCanvas(t) {
    var e = this._getCanvasCache(), i = e.hit;
    t.save(), t.translate(e.x, e.y), t.drawImage(i._canvas, 0, 0, i.width / i.pixelRatio, i.height / i.pixelRatio), t.restore();
  }
  _getCachedSceneCanvas() {
    var t = this.filters(), e = this._getCanvasCache(), i = e.scene, r = e.filter, n = r.getContext(), a, s, o, l;
    if (t) {
      if (!this._filterUpToDate) {
        var u = i.pixelRatio;
        r.setSize(i.width / i.pixelRatio, i.height / i.pixelRatio);
        try {
          for (a = t.length, n.clear(), n.drawImage(i._canvas, 0, 0, i.getWidth() / u, i.getHeight() / u), s = n.getImageData(0, 0, r.getWidth(), r.getHeight()), o = 0; o < a; o++) {
            if (l = t[o], typeof l != "function") {
              j.Util.error("Filter should be type of function, but got " + typeof l + " instead. Please check correct filters");
              continue;
            }
            l.call(this, s), n.putImageData(s, 0, 0);
          }
        } catch (_) {
          j.Util.error("Unable to apply filter. " + _.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return r;
    }
    return i;
  }
  on(t, e) {
    if (this._cache && this._cache.delete(Me), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    var i = t.split(Oe), r = i.length, n, a, s, o, l;
    for (n = 0; n < r; n++)
      a = i[n], s = a.split("."), o = s[0], l = s[1] || "", this.eventListeners[o] || (this.eventListeners[o] = []), this.eventListeners[o].push({
        name: l,
        handler: e
      });
    return this;
  }
  off(t, e) {
    var i = (t || "").split(Oe), r = i.length, n, a, s, o, l, u;
    if (this._cache && this._cache.delete(Me), !t)
      for (a in this.eventListeners)
        this._off(a);
    for (n = 0; n < r; n++)
      if (s = i[n], o = s.split("."), l = o[0], u = o[1], l)
        this.eventListeners[l] && this._off(l, u, e);
      else
        for (a in this.eventListeners)
          this._off(a, u, e);
    return this;
  }
  dispatchEvent(t) {
    var e = {
      target: this,
      type: t.type,
      evt: t
    };
    return this.fire(t.type, e), this;
  }
  addEventListener(t, e) {
    return this.on(t, function(i) {
      e.call(this, i.evt);
    }), this;
  }
  removeEventListener(t) {
    return this.off(t), this;
  }
  _delegate(t, e, i) {
    var r = this;
    this.on(t, function(n) {
      for (var a = n.target.findAncestors(e, !0, r), s = 0; s < a.length; s++)
        n = j.Util.cloneObject(n), n.currentTarget = a[s], i.call(a[s], n);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), Ct.DD._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(Nt), this._clearSelfAndDescendantCache(Ge), this._clearSelfAndDescendantCache(Cr), this._clearSelfAndDescendantCache(Er), this._clearSelfAndDescendantCache(Yi), this._clearSelfAndDescendantCache(zi);
  }
  _remove() {
    this._clearCaches();
    var t = this.getParent();
    t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), this.parent = null);
  }
  destroy() {
    return this.remove(), this.clearCache(), this;
  }
  getAttr(t) {
    var e = "get" + j.Util._capitalize(t);
    return j.Util._isFunction(this[e]) ? this[e]() : this.attrs[t];
  }
  getAncestors() {
    for (var t = this.getParent(), e = []; t; )
      e.push(t), t = t.getParent();
    return e;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(t) {
    return this._batchTransformChanges(() => {
      var e, i;
      if (!t)
        return this;
      for (e in t)
        e !== Ia && (i = Pr + j.Util._capitalize(e), j.Util._isFunction(this[i]) ? this[i](t[e]) : this._setAttr(e, t[e]));
    }), this;
  }
  isListening() {
    return this._getCache(zi, this._isListening);
  }
  _isListening(t) {
    if (!this.listening())
      return !1;
    const i = this.getParent();
    return i && i !== t && this !== t ? i._isListening(t) : !0;
  }
  isVisible() {
    return this._getCache(Yi, this._isVisible);
  }
  _isVisible(t) {
    if (!this.visible())
      return !1;
    const i = this.getParent();
    return i && i !== t && this !== t ? i._isVisible(t) : !0;
  }
  shouldDrawHit(t, e = !1) {
    if (t)
      return this._isVisible(t) && this._isListening(t);
    var i = this.getLayer(), r = !1;
    Ct.DD._dragElements.forEach((a) => {
      a.dragStatus === "dragging" && (a.node.nodeType === "Stage" || a.node.getLayer() === i) && (r = !0);
    });
    var n = !e && !zt.Konva.hitOnDragEnabled && r;
    return this.isListening() && this.isVisible() && !n;
  }
  show() {
    return this.visible(!0), this;
  }
  hide() {
    return this.visible(!1), this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    var t = this.getDepth(), e = this, i = 0, r, n, a, s;
    function o(u) {
      for (r = [], n = u.length, a = 0; a < n; a++)
        s = u[a], i++, s.nodeType !== kr && (r = r.concat(s.getChildren().slice())), s._id === e._id && (a = n);
      r.length > 0 && r[0].getDepth() <= t && o(r);
    }
    const l = this.getStage();
    return e.nodeType !== Ha && l && o(l.getChildren()), i;
  }
  getDepth() {
    for (var t = 0, e = this.parent; e; )
      t++, e = e.parent;
    return t;
  }
  _batchTransformChanges(t) {
    this._batchingTransformChange = !0, t(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(Bt), this._clearSelfAndDescendantCache(Nt)), this._needClearTransformCache = !1;
  }
  setPosition(t) {
    return this._batchTransformChanges(() => {
      this.x(t.x), this.y(t.y);
    }), this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    const t = this.getStage();
    if (!t)
      return null;
    var e = t.getPointerPosition();
    if (!e)
      return null;
    var i = this.getAbsoluteTransform().copy();
    return i.invert(), i.point(e);
  }
  getAbsolutePosition(t) {
    let e = !1, i = this.parent;
    for (; i; ) {
      if (i.isCached()) {
        e = !0;
        break;
      }
      i = i.parent;
    }
    e && !t && (t = !0);
    var r = this.getAbsoluteTransform(t).getMatrix(), n = new j.Transform(), a = this.offset();
    return n.m = r.slice(), n.translate(a.x, a.y), n.getTranslation();
  }
  setAbsolutePosition(t) {
    const { x: e, y: i, ...r } = this._clearTransform();
    this.attrs.x = e, this.attrs.y = i, this._clearCache(Bt);
    var n = this._getAbsoluteTransform().copy();
    return n.invert(), n.translate(t.x, t.y), t = {
      x: this.attrs.x + n.getTranslation().x,
      y: this.attrs.y + n.getTranslation().y
    }, this._setTransform(r), this.setPosition({ x: t.x, y: t.y }), this._clearCache(Bt), this._clearSelfAndDescendantCache(Nt), this;
  }
  _setTransform(t) {
    var e;
    for (e in t)
      this.attrs[e] = t[e];
  }
  _clearTransform() {
    var t = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, t;
  }
  move(t) {
    var e = t.x, i = t.y, r = this.x(), n = this.y();
    return e !== void 0 && (r += e), i !== void 0 && (n += i), this.setPosition({ x: r, y: n }), this;
  }
  _eachAncestorReverse(t, e) {
    var i = [], r = this.getParent(), n, a;
    if (!(e && e._id === this._id)) {
      for (i.unshift(this); r && (!e || r._id !== e._id); )
        i.unshift(r), r = r.parent;
      for (n = i.length, a = 0; a < n; a++)
        t(i[a]);
    }
  }
  rotate(t) {
    return this.rotation(this.rotation() + t), this;
  }
  moveToTop() {
    if (!this.parent)
      return j.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
    var t = this.index, e = this.parent.getChildren().length;
    return t < e - 1 ? (this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return j.Util.warn("Node has no parent. moveUp function is ignored."), !1;
    var t = this.index, e = this.parent.getChildren().length;
    return t < e - 1 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return j.Util.warn("Node has no parent. moveDown function is ignored."), !1;
    var t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return j.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
    var t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(t) {
    if (!this.parent)
      return j.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
    (t < 0 || t >= this.parent.children.length) && j.Util.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    var e = this.index;
    return this.parent.children.splice(e, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(Ge, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    var t = this.opacity(), e = this.getParent();
    return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()), t;
  }
  moveTo(t) {
    return this.getParent() !== t && (this._remove(), t.add(this)), this;
  }
  toObject() {
    var t = {}, e = this.getAttrs(), i, r, n, a, s;
    t.attrs = {};
    for (i in e)
      r = e[i], s = j.Util.isObject(r) && !j.Util._isPlainObject(r) && !j.Util._isArray(r), !s && (n = typeof this[i] == "function" && this[i], delete e[i], a = n ? n.call(this) : null, e[i] = r, a !== r && (t.attrs[i] = r));
    return t.className = this.getClassName(), j.Util._prepareToStringify(t);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(t, e, i) {
    var r = [];
    e && this._isMatch(t) && r.push(this);
    for (var n = this.parent; n; ) {
      if (n === i)
        return r;
      n._isMatch(t) && r.push(n), n = n.parent;
    }
    return r;
  }
  isAncestorOf(t) {
    return !1;
  }
  findAncestor(t, e, i) {
    return this.findAncestors(t, e, i)[0];
  }
  _isMatch(t) {
    if (!t)
      return !1;
    if (typeof t == "function")
      return t(this);
    var e = t.replace(/ /g, "").split(","), i = e.length, r, n;
    for (r = 0; r < i; r++)
      if (n = e[r], j.Util.isValidSelector(n) || (j.Util.warn('Selector "' + n + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), j.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), j.Util.warn("Konva is awesome, right?")), n.charAt(0) === "#") {
        if (this.id() === n.slice(1))
          return !0;
      } else if (n.charAt(0) === ".") {
        if (this.hasName(n.slice(1)))
          return !0;
      } else if (this.className === n || this.nodeType === n)
        return !0;
    return !1;
  }
  getLayer() {
    var t = this.getParent();
    return t ? t.getLayer() : null;
  }
  getStage() {
    return this._getCache(Er, this._getStage);
  }
  _getStage() {
    var t = this.getParent();
    return t ? t.getStage() : null;
  }
  fire(t, e = {}, i) {
    return e.target = e.target || this, i ? this._fireAndBubble(t, e) : this._fire(t, e), this;
  }
  getAbsoluteTransform(t) {
    return t ? this._getAbsoluteTransform(t) : this._getCache(Nt, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(t) {
    var e;
    if (t)
      return e = new j.Transform(), this._eachAncestorReverse(function(r) {
        var n = r.transformsEnabled();
        n === "all" ? e.multiply(r.getTransform()) : n === "position" && e.translate(r.x() - r.offsetX(), r.y() - r.offsetY());
      }, t), e;
    e = this._cache.get(Nt) || new j.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(e) : e.reset();
    var i = this.transformsEnabled();
    if (i === "all")
      e.multiply(this.getTransform());
    else if (i === "position") {
      const r = this.attrs.x || 0, n = this.attrs.y || 0, a = this.attrs.offsetX || 0, s = this.attrs.offsetY || 0;
      e.translate(r - a, n - s);
    }
    return e.dirty = !1, e;
  }
  getAbsoluteScale(t) {
    for (var e = this; e; )
      e._isUnderCache && (t = e), e = e.getParent();
    const r = this.getAbsoluteTransform(t).decompose();
    return {
      x: r.scaleX,
      y: r.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(Bt, this._getTransform);
  }
  _getTransform() {
    var t, e, i = this._cache.get(Bt) || new j.Transform();
    i.reset();
    var r = this.x(), n = this.y(), a = zt.Konva.getAngle(this.rotation()), s = (t = this.attrs.scaleX) !== null && t !== void 0 ? t : 1, o = (e = this.attrs.scaleY) !== null && e !== void 0 ? e : 1, l = this.attrs.skewX || 0, u = this.attrs.skewY || 0, _ = this.attrs.offsetX || 0, g = this.attrs.offsetY || 0;
    return (r !== 0 || n !== 0) && i.translate(r, n), a !== 0 && i.rotate(a), (l !== 0 || u !== 0) && i.skew(l, u), (s !== 1 || o !== 1) && i.scale(s, o), (_ !== 0 || g !== 0) && i.translate(-1 * _, -1 * g), i.dirty = !1, i;
  }
  clone(t) {
    var e = j.Util.cloneObject(this.attrs), i, r, n, a, s;
    for (i in t)
      e[i] = t[i];
    var o = new this.constructor(e);
    for (i in this.eventListeners)
      for (r = this.eventListeners[i], n = r.length, a = 0; a < n; a++)
        s = r[a], s.name.indexOf(Ua) < 0 && (o.eventListeners[i] || (o.eventListeners[i] = []), o.eventListeners[i].push(s));
    return o;
  }
  _toKonvaCanvas(t) {
    t = t || {};
    var e = this.getClientRect(), i = this.getStage(), r = t.x !== void 0 ? t.x : Math.floor(e.x), n = t.y !== void 0 ? t.y : Math.floor(e.y), a = t.pixelRatio || 1, s = new Ae.SceneCanvas({
      width: t.width || Math.ceil(e.width) || (i ? i.width() : 0),
      height: t.height || Math.ceil(e.height) || (i ? i.height() : 0),
      pixelRatio: a
    }), o = s.getContext();
    return t.imageSmoothingEnabled === !1 && (o._context.imageSmoothingEnabled = !1), o.save(), (r || n) && o.translate(-1 * r, -1 * n), this.drawScene(s), o.restore(), s;
  }
  toCanvas(t) {
    return this._toKonvaCanvas(t)._canvas;
  }
  toDataURL(t) {
    t = t || {};
    var e = t.mimeType || null, i = t.quality || null, r = this._toKonvaCanvas(t).toDataURL(e, i);
    return t.callback && t.callback(r), r;
  }
  toImage(t) {
    return new Promise((e, i) => {
      try {
        const r = t == null ? void 0 : t.callback;
        r && delete t.callback, j.Util._urlToImage(this.toDataURL(t), function(n) {
          e(n), r == null || r(n);
        });
      } catch (r) {
        i(r);
      }
    });
  }
  toBlob(t) {
    return new Promise((e, i) => {
      try {
        const r = t == null ? void 0 : t.callback;
        r && delete t.callback, this.toCanvas(t).toBlob((n) => {
          e(n), r == null || r(n);
        }, t == null ? void 0 : t.mimeType, t == null ? void 0 : t.quality);
      } catch (r) {
        i(r);
      }
    });
  }
  setSize(t) {
    return this.width(t.width), this.height(t.height), this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : zt.Konva.dragDistance;
  }
  _off(t, e, i) {
    var r = this.eventListeners[t], n, a, s;
    for (n = 0; n < r.length; n++)
      if (a = r[n].name, s = r[n].handler, (a !== "konva" || e === "konva") && (!e || a === e) && (!i || i === s)) {
        if (r.splice(n, 1), r.length === 0) {
          delete this.eventListeners[t];
          break;
        }
        n--;
      }
  }
  _fireChangeEvent(t, e, i) {
    this._fire(t + Ba, {
      oldVal: e,
      newVal: i
    });
  }
  addName(t) {
    if (!this.hasName(t)) {
      var e = this.name(), i = e ? e + " " + t : t;
      this.name(i);
    }
    return this;
  }
  hasName(t) {
    if (!t)
      return !1;
    const e = this.name();
    if (!e)
      return !1;
    var i = (e || "").split(/\s/g);
    return i.indexOf(t) !== -1;
  }
  removeName(t) {
    var e = (this.name() || "").split(/\s/g), i = e.indexOf(t);
    return i !== -1 && (e.splice(i, 1), this.name(e.join(" "))), this;
  }
  setAttr(t, e) {
    var i = this[Pr + j.Util._capitalize(t)];
    return j.Util._isFunction(i) ? i.call(this, e) : this._setAttr(t, e), this;
  }
  _requestDraw() {
    if (zt.Konva.autoDrawEnabled) {
      const t = this.getLayer() || this.getStage();
      t == null || t.batchDraw();
    }
  }
  _setAttr(t, e) {
    var i = this.attrs[t];
    i === e && !j.Util.isObject(e) || (e == null ? delete this.attrs[t] : this.attrs[t] = e, this._shouldFireChangeEvents && this._fireChangeEvent(t, i, e), this._requestDraw());
  }
  _setComponentAttr(t, e, i) {
    var r;
    i !== void 0 && (r = this.attrs[t], r || (this.attrs[t] = this.getAttr(t)), this.attrs[t][e] = i, this._fireChangeEvent(t, r, i));
  }
  _fireAndBubble(t, e, i) {
    e && this.nodeType === kr && (e.target = this);
    var r = (t === wr || t === xr) && (i && (this === i || this.isAncestorOf && this.isAncestorOf(i)) || this.nodeType === "Stage" && !i);
    if (!r) {
      this._fire(t, e);
      var n = (t === wr || t === xr) && i && i.isAncestorOf && i.isAncestorOf(this) && !i.isAncestorOf(this.parent);
      (e && !e.cancelBubble || !e) && this.parent && this.parent.isListening() && !n && (i && i.parent ? this._fireAndBubble.call(this.parent, t, e, i) : this._fireAndBubble.call(this.parent, t, e));
    }
  }
  _getProtoListeners(t) {
    var e, i, r;
    const n = (e = this._cache.get(Me)) !== null && e !== void 0 ? e : {};
    let a = n == null ? void 0 : n[t];
    if (a === void 0) {
      a = [];
      let s = Object.getPrototypeOf(this);
      for (; s; ) {
        const o = (r = (i = s.eventListeners) === null || i === void 0 ? void 0 : i[t]) !== null && r !== void 0 ? r : [];
        a.push(...o), s = Object.getPrototypeOf(s);
      }
      n[t] = a, this._cache.set(Me, n);
    }
    return a;
  }
  _fire(t, e) {
    e = e || {}, e.currentTarget = this, e.type = t;
    const i = this._getProtoListeners(t);
    if (i)
      for (var r = 0; r < i.length; r++)
        i[r].handler.call(this, e);
    const n = this.eventListeners[t];
    if (n)
      for (var r = 0; r < n.length; r++)
        n[r].handler.call(this, e);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(t) {
    var e = t ? t.pointerId : void 0, i = this.getStage(), r = this.getAbsolutePosition();
    if (i) {
      var n = i._getPointerById(e) || i._changedPointerPositions[0] || r;
      Ct.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: n,
        offset: {
          x: n.x - r.x,
          y: n.y - r.y
        },
        dragStatus: "ready",
        pointerId: e
      });
    }
  }
  startDrag(t, e = !0) {
    Ct.DD._dragElements.has(this._id) || this._createDragElement(t);
    const i = Ct.DD._dragElements.get(this._id);
    i.dragStatus = "dragging", this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: t && t.evt
    }, e);
  }
  _setDragPosition(t, e) {
    const i = this.getStage()._getPointerById(e.pointerId);
    if (i) {
      var r = {
        x: i.x - e.offset.x,
        y: i.y - e.offset.y
      }, n = this.dragBoundFunc();
      if (n !== void 0) {
        const a = n.call(this, r, t);
        a ? r = a : j.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== r.x || this._lastPos.y !== r.y) && (this.setAbsolutePosition(r), this._requestDraw()), this._lastPos = r;
    }
  }
  stopDrag(t) {
    const e = Ct.DD._dragElements.get(this._id);
    e && (e.dragStatus = "stopped"), Ct.DD._endDragBefore(t), Ct.DD._endDragAfter(t);
  }
  setDraggable(t) {
    this._setAttr("draggable", t), this._dragChange();
  }
  isDragging() {
    const t = Ct.DD._dragElements.get(this._id);
    return t ? t.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(t) {
      var e = t.evt.button !== void 0, i = !e || zt.Konva.dragButtons.indexOf(t.evt.button) >= 0;
      if (i && !this.isDragging()) {
        var r = !1;
        Ct.DD._dragElements.forEach((n) => {
          this.isAncestorOf(n.node) && (r = !0);
        }), r || this._createDragElement(t);
      }
    });
  }
  _dragChange() {
    if (this.attrs.draggable)
      this._listenDrag();
    else {
      this._dragCleanup();
      var t = this.getStage();
      if (!t)
        return;
      const e = Ct.DD._dragElements.get(this._id), i = e && e.dragStatus === "dragging", r = e && e.dragStatus === "ready";
      i ? this.stopDrag() : r && Ct.DD._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(t = { x: 0, y: 0 }) {
    const e = this.getStage();
    if (!e)
      return !1;
    const i = {
      x: -t.x,
      y: -t.y,
      width: e.width() + 2 * t.x,
      height: e.height() + 2 * t.y
    };
    return j.Util.haveIntersection(i, this.getClientRect());
  }
  static create(t, e) {
    return j.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, e);
  }
  static _createNode(t, e) {
    var i = I.prototype.getClassName.call(t), r = t.children, n, a, s;
    e && (t.attrs.container = e), zt.Konva[i] || (j.Util.warn('Can not find a node with class name "' + i + '". Fallback to "Shape".'), i = "Shape");
    const o = zt.Konva[i];
    if (n = new o(t.attrs), r)
      for (a = r.length, s = 0; s < a; s++)
        n.add(I._createNode(r[s]));
    return n;
  }
}
st.Node = I;
I.prototype.nodeType = "Node";
I.prototype._attrsAffectingSize = [];
I.prototype.eventListeners = {};
I.prototype.on.call(I.prototype, Va, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(Bt), this._clearSelfAndDescendantCache(Nt);
});
I.prototype.on.call(I.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(Yi);
});
I.prototype.on.call(I.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(zi);
});
I.prototype.on.call(I.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(Ge);
});
const et = we.Factory.addGetterSetter;
et(I, "zIndex");
et(I, "absolutePosition");
et(I, "position");
et(I, "x", 0, (0, ct.getNumberValidator)());
et(I, "y", 0, (0, ct.getNumberValidator)());
et(I, "globalCompositeOperation", "source-over", (0, ct.getStringValidator)());
et(I, "opacity", 1, (0, ct.getNumberValidator)());
et(I, "name", "", (0, ct.getStringValidator)());
et(I, "id", "", (0, ct.getStringValidator)());
et(I, "rotation", 0, (0, ct.getNumberValidator)());
we.Factory.addComponentsGetterSetter(I, "scale", ["x", "y"]);
et(I, "scaleX", 1, (0, ct.getNumberValidator)());
et(I, "scaleY", 1, (0, ct.getNumberValidator)());
we.Factory.addComponentsGetterSetter(I, "skew", ["x", "y"]);
et(I, "skewX", 0, (0, ct.getNumberValidator)());
et(I, "skewY", 0, (0, ct.getNumberValidator)());
we.Factory.addComponentsGetterSetter(I, "offset", ["x", "y"]);
et(I, "offsetX", 0, (0, ct.getNumberValidator)());
et(I, "offsetY", 0, (0, ct.getNumberValidator)());
et(I, "dragDistance", null, (0, ct.getNumberValidator)());
et(I, "width", 0, (0, ct.getNumberValidator)());
et(I, "height", 0, (0, ct.getNumberValidator)());
et(I, "listening", !0, (0, ct.getBooleanValidator)());
et(I, "preventDefault", !0, (0, ct.getBooleanValidator)());
et(I, "filters", null, function(h) {
  return this._filterUpToDate = !1, h;
});
et(I, "visible", !0, (0, ct.getBooleanValidator)());
et(I, "transformsEnabled", "all", (0, ct.getStringValidator)());
et(I, "size");
et(I, "dragBoundFunc");
et(I, "draggable", !1, (0, ct.getBooleanValidator)());
we.Factory.backCompat(I, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
var Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.Container = void 0;
const ce = z, Gi = st, Ye = L;
class qt extends Gi.Node {
  constructor() {
    super(...arguments), this.children = [];
  }
  getChildren(t) {
    if (!t)
      return this.children || [];
    const e = this.children || [];
    var i = [];
    return e.forEach(function(r) {
      t(r) && i.push(r);
    }), i;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return this.getChildren().forEach((t) => {
      t.parent = null, t.index = 0, t.remove();
    }), this.children = [], this._requestDraw(), this;
  }
  destroyChildren() {
    return this.getChildren().forEach((t) => {
      t.parent = null, t.index = 0, t.destroy();
    }), this.children = [], this._requestDraw(), this;
  }
  add(...t) {
    if (t.length === 0)
      return this;
    if (t.length > 1) {
      for (var e = 0; e < t.length; e++)
        this.add(t[e]);
      return this;
    }
    const i = t[0];
    return i.getParent() ? (i.moveTo(this), this) : (this._validateAdd(i), i.index = this.getChildren().length, i.parent = this, i._clearCaches(), this.getChildren().push(i), this._fire("add", {
      child: i
    }), this._requestDraw(), this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(t) {
    return this._generalFind(t, !1);
  }
  findOne(t) {
    var e = this._generalFind(t, !0);
    return e.length > 0 ? e[0] : void 0;
  }
  _generalFind(t, e) {
    var i = [];
    return this._descendants((r) => {
      const n = r._isMatch(t);
      return n && i.push(r), !!(n && e);
    }), i;
  }
  _descendants(t) {
    let e = !1;
    const i = this.getChildren();
    for (const r of i) {
      if (e = t(r), e)
        return !0;
      if (r.hasChildren() && (e = r._descendants(t), e))
        return !0;
    }
    return !1;
  }
  toObject() {
    var t = Gi.Node.prototype.toObject.call(this);
    return t.children = [], this.getChildren().forEach((e) => {
      t.children.push(e.toObject());
    }), t;
  }
  isAncestorOf(t) {
    for (var e = t.getParent(); e; ) {
      if (e._id === this._id)
        return !0;
      e = e.getParent();
    }
    return !1;
  }
  clone(t) {
    var e = Gi.Node.prototype.clone.call(this, t);
    return this.getChildren().forEach(function(i) {
      e.add(i.clone());
    }), e;
  }
  getAllIntersections(t) {
    var e = [];
    return this.find("Shape").forEach((i) => {
      i.isVisible() && i.intersects(t) && e.push(i);
    }), e;
  }
  _clearSelfAndDescendantCache(t) {
    var e;
    super._clearSelfAndDescendantCache(t), !this.isCached() && ((e = this.children) === null || e === void 0 || e.forEach(function(i) {
      i._clearSelfAndDescendantCache(t);
    }));
  }
  _setChildrenIndices() {
    var t;
    (t = this.children) === null || t === void 0 || t.forEach(function(e, i) {
      e.index = i;
    }), this._requestDraw();
  }
  drawScene(t, e) {
    var i = this.getLayer(), r = t || i && i.getCanvas(), n = r && r.getContext(), a = this._getCanvasCache(), s = a && a.scene, o = r && r.isCache;
    if (!this.isVisible() && !o)
      return this;
    if (s) {
      n.save();
      var l = this.getAbsoluteTransform(e).getMatrix();
      n.transform(l[0], l[1], l[2], l[3], l[4], l[5]), this._drawCachedSceneCanvas(n), n.restore();
    } else
      this._drawChildren("drawScene", r, e);
    return this;
  }
  drawHit(t, e) {
    if (!this.shouldDrawHit(e))
      return this;
    var i = this.getLayer(), r = t || i && i.hitCanvas, n = r && r.getContext(), a = this._getCanvasCache(), s = a && a.hit;
    if (s) {
      n.save();
      var o = this.getAbsoluteTransform(e).getMatrix();
      n.transform(o[0], o[1], o[2], o[3], o[4], o[5]), this._drawCachedHitCanvas(n), n.restore();
    } else
      this._drawChildren("drawHit", r, e);
    return this;
  }
  _drawChildren(t, e, i) {
    var r, n = e && e.getContext(), a = this.clipWidth(), s = this.clipHeight(), o = this.clipFunc(), l = a && s || o;
    const u = i === this;
    if (l) {
      n.save();
      var _ = this.getAbsoluteTransform(i), g = _.getMatrix();
      n.transform(g[0], g[1], g[2], g[3], g[4], g[5]), n.beginPath();
      let m;
      if (o)
        m = o.call(this, n, this);
      else {
        var f = this.clipX(), c = this.clipY();
        n.rect(f, c, a, s);
      }
      n.clip.apply(n, m), g = _.copy().invert().getMatrix(), n.transform(g[0], g[1], g[2], g[3], g[4], g[5]);
    }
    var p = !u && this.globalCompositeOperation() !== "source-over" && t === "drawScene";
    p && (n.save(), n._applyGlobalCompositeOperation(this)), (r = this.children) === null || r === void 0 || r.forEach(function(m) {
      m[t](e, i);
    }), p && n.restore(), l && n.restore();
  }
  getClientRect(t = {}) {
    var e, i = t.skipTransform, r = t.relativeTo, n, a, s, o, l = {
      x: 1 / 0,
      y: 1 / 0,
      width: 0,
      height: 0
    }, u = this;
    (e = this.children) === null || e === void 0 || e.forEach(function(p) {
      if (p.visible()) {
        var m = p.getClientRect({
          relativeTo: u,
          skipShadow: t.skipShadow,
          skipStroke: t.skipStroke
        });
        m.width === 0 && m.height === 0 || (n === void 0 ? (n = m.x, a = m.y, s = m.x + m.width, o = m.y + m.height) : (n = Math.min(n, m.x), a = Math.min(a, m.y), s = Math.max(s, m.x + m.width), o = Math.max(o, m.y + m.height)));
      }
    });
    for (var _ = this.find("Shape"), g = !1, f = 0; f < _.length; f++) {
      var c = _[f];
      if (c._isVisible(this)) {
        g = !0;
        break;
      }
    }
    return g && n !== void 0 ? l = {
      x: n,
      y: a,
      width: s - n,
      height: o - a
    } : l = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, i ? l : this._transformedRect(l, r);
  }
}
Kt.Container = qt;
ce.Factory.addComponentsGetterSetter(qt, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
ce.Factory.addGetterSetter(qt, "clipX", void 0, (0, Ye.getNumberValidator)());
ce.Factory.addGetterSetter(qt, "clipY", void 0, (0, Ye.getNumberValidator)());
ce.Factory.addGetterSetter(qt, "clipWidth", void 0, (0, Ye.getNumberValidator)());
ce.Factory.addGetterSetter(qt, "clipHeight", void 0, (0, Ye.getNumberValidator)());
ce.Factory.addGetterSetter(qt, "clipFunc");
var hn = {}, St = {};
Object.defineProperty(St, "__esModule", { value: !0 });
St.releaseCapture = St.setPointerCapture = St.hasPointerCapture = St.createEvent = St.getCapturedShape = void 0;
const Wa = X, Se = /* @__PURE__ */ new Map(), ln = Wa.Konva._global.PointerEvent !== void 0;
function za(h) {
  return Se.get(h);
}
St.getCapturedShape = za;
function ar(h) {
  return {
    evt: h,
    pointerId: h.pointerId
  };
}
St.createEvent = ar;
function Ya(h, t) {
  return Se.get(h) === t;
}
St.hasPointerCapture = Ya;
function Xa(h, t) {
  dn(h), t.getStage() && (Se.set(h, t), ln && t._fire("gotpointercapture", ar(new PointerEvent("gotpointercapture"))));
}
St.setPointerCapture = Xa;
function dn(h, t) {
  const e = Se.get(h);
  if (!e)
    return;
  const i = e.getStage();
  i && i.content, Se.delete(h), ln && e._fire("lostpointercapture", ar(new PointerEvent("lostpointercapture")));
}
St.releaseCapture = dn;
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 }), h.Stage = h.stages = void 0;
  const t = lt, e = z, i = Kt, r = X, n = kt, a = ze, s = X, o = St;
  var l = "Stage", u = "string", _ = "px", g = "mouseout", f = "mouseleave", c = "mouseover", p = "mouseenter", m = "mousemove", C = "mousedown", P = "mouseup", d = "pointermove", v = "pointerdown", y = "pointerup", x = "pointercancel", T = "lostpointercapture", b = "pointerout", E = "pointerleave", w = "pointerover", k = "pointerenter", M = "contextmenu", F = "touchstart", N = "touchend", D = "touchmove", H = "touchcancel", W = "wheel", Y = 5, V = [
    [p, "_pointerenter"],
    [C, "_pointerdown"],
    [m, "_pointermove"],
    [P, "_pointerup"],
    [f, "_pointerleave"],
    [F, "_pointerdown"],
    [D, "_pointermove"],
    [N, "_pointerup"],
    [H, "_pointercancel"],
    [c, "_pointerover"],
    [W, "_wheel"],
    [M, "_contextmenu"],
    [v, "_pointerdown"],
    [d, "_pointermove"],
    [y, "_pointerup"],
    [x, "_pointercancel"],
    [T, "_lostpointercapture"]
  ];
  const R = {
    mouse: {
      [b]: g,
      [E]: f,
      [w]: c,
      [k]: p,
      [d]: m,
      [v]: C,
      [y]: P,
      [x]: "mousecancel",
      pointerclick: "click",
      pointerdblclick: "dblclick"
    },
    touch: {
      [b]: "touchout",
      [E]: "touchleave",
      [w]: "touchover",
      [k]: "touchenter",
      [d]: D,
      [v]: F,
      [y]: N,
      [x]: H,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [b]: b,
      [E]: E,
      [w]: w,
      [k]: k,
      [d]: d,
      [v]: v,
      [y]: y,
      [x]: x,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  }, G = (rt) => rt.indexOf("pointer") >= 0 ? "pointer" : rt.indexOf("touch") >= 0 ? "touch" : "mouse", $ = (rt) => {
    const S = G(rt);
    if (S === "pointer")
      return r.Konva.pointerEventsEnabled && R.pointer;
    if (S === "touch")
      return R.touch;
    if (S === "mouse")
      return R.mouse;
  };
  function Z(rt = {}) {
    return (rt.clipFunc || rt.clipWidth || rt.clipHeight) && t.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), rt;
  }
  const q = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  h.stages = [];
  class mt extends i.Container {
    constructor(S) {
      super(Z(S)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), h.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        Z(this.attrs);
      }), this._checkVisibility();
    }
    _validateAdd(S) {
      const A = S.getType() === "Layer", O = S.getType() === "FastLayer";
      A || O || t.Util.throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
      if (!this.content)
        return;
      const S = this.visible() ? "" : "none";
      this.content.style.display = S;
    }
    setContainer(S) {
      if (typeof S === u) {
        if (S.charAt(0) === ".") {
          var A = S.slice(1);
          S = document.getElementsByClassName(A)[0];
        } else {
          var O;
          S.charAt(0) !== "#" ? O = S : O = S.slice(1), S = document.getElementById(O);
        }
        if (!S)
          throw "Can not find container in document with id " + O;
      }
      return this._setAttr("container", S), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), S.appendChild(this.content)), this;
    }
    shouldDrawHit() {
      return !0;
    }
    clear() {
      var S = this.children, A = S.length, O;
      for (O = 0; O < A; O++)
        S[O].clear();
      return this;
    }
    clone(S) {
      return S || (S = {}), S.container = typeof document < "u" && document.createElement("div"), i.Container.prototype.clone.call(this, S);
    }
    destroy() {
      super.destroy();
      var S = this.content;
      S && t.Util._isInDocument(S) && this.container().removeChild(S);
      var A = h.stages.indexOf(this);
      return A > -1 && h.stages.splice(A, 1), t.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
    }
    getPointerPosition() {
      const S = this._pointerPositions[0] || this._changedPointerPositions[0];
      return S ? {
        x: S.x,
        y: S.y
      } : (t.Util.warn(q), null);
    }
    _getPointerById(S) {
      return this._pointerPositions.find((A) => A.id === S);
    }
    getPointersPositions() {
      return this._pointerPositions;
    }
    getStage() {
      return this;
    }
    getContent() {
      return this.content;
    }
    _toKonvaCanvas(S) {
      S = S || {}, S.x = S.x || 0, S.y = S.y || 0, S.width = S.width || this.width(), S.height = S.height || this.height();
      var A = new n.SceneCanvas({
        width: S.width,
        height: S.height,
        pixelRatio: S.pixelRatio || 1
      }), O = A.getContext()._context, it = this.children;
      return (S.x || S.y) && O.translate(-1 * S.x, -1 * S.y), it.forEach(function(Q) {
        if (Q.isVisible()) {
          var nt = Q._toKonvaCanvas(S);
          O.drawImage(nt._canvas, S.x, S.y, nt.getWidth() / nt.getPixelRatio(), nt.getHeight() / nt.getPixelRatio());
        }
      }), A;
    }
    getIntersection(S) {
      if (!S)
        return null;
      var A = this.children, O = A.length, it = O - 1, Q;
      for (Q = it; Q >= 0; Q--) {
        const nt = A[Q].getIntersection(S);
        if (nt)
          return nt;
      }
      return null;
    }
    _resizeDOM() {
      var S = this.width(), A = this.height();
      this.content && (this.content.style.width = S + _, this.content.style.height = A + _), this.bufferCanvas.setSize(S, A), this.bufferHitCanvas.setSize(S, A), this.children.forEach((O) => {
        O.setSize({ width: S, height: A }), O.draw();
      });
    }
    add(S, ...A) {
      if (arguments.length > 1) {
        for (var O = 0; O < arguments.length; O++)
          this.add(arguments[O]);
        return this;
      }
      super.add(S);
      var it = this.children.length;
      return it > Y && t.Util.warn("The stage has " + it + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), S.setSize({ width: this.width(), height: this.height() }), S.draw(), r.Konva.isBrowser && this.content.appendChild(S.canvas._canvas), this;
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(S) {
      return o.hasPointerCapture(S, this);
    }
    setPointerCapture(S) {
      o.setPointerCapture(S, this);
    }
    releaseCapture(S) {
      o.releaseCapture(S, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      r.Konva.isBrowser && V.forEach(([S, A]) => {
        this.content.addEventListener(S, (O) => {
          this[A](O);
        }, { passive: !1 });
      });
    }
    _pointerenter(S) {
      this.setPointersPositions(S);
      const A = $(S.type);
      A && this._fire(A.pointerenter, {
        evt: S,
        target: this,
        currentTarget: this
      });
    }
    _pointerover(S) {
      this.setPointersPositions(S);
      const A = $(S.type);
      A && this._fire(A.pointerover, {
        evt: S,
        target: this,
        currentTarget: this
      });
    }
    _getTargetShape(S) {
      let A = this[S + "targetShape"];
      return A && !A.getStage() && (A = null), A;
    }
    _pointerleave(S) {
      const A = $(S.type), O = G(S.type);
      if (A) {
        this.setPointersPositions(S);
        var it = this._getTargetShape(O), Q = !a.DD.isDragging || r.Konva.hitOnDragEnabled;
        it && Q ? (it._fireAndBubble(A.pointerout, { evt: S }), it._fireAndBubble(A.pointerleave, { evt: S }), this._fire(A.pointerleave, {
          evt: S,
          target: this,
          currentTarget: this
        }), this[O + "targetShape"] = null) : Q && (this._fire(A.pointerleave, {
          evt: S,
          target: this,
          currentTarget: this
        }), this._fire(A.pointerout, {
          evt: S,
          target: this,
          currentTarget: this
        })), this.pointerPos = null, this._pointerPositions = [];
      }
    }
    _pointerdown(S) {
      const A = $(S.type), O = G(S.type);
      if (A) {
        this.setPointersPositions(S);
        var it = !1;
        this._changedPointerPositions.forEach((Q) => {
          var nt = this.getIntersection(Q);
          if (a.DD.justDragged = !1, r.Konva["_" + O + "ListenClick"] = !0, !nt || !nt.isListening())
            return;
          r.Konva.capturePointerEventsEnabled && nt.setPointerCapture(Q.id), this[O + "ClickStartShape"] = nt, nt._fireAndBubble(A.pointerdown, {
            evt: S,
            pointerId: Q.id
          }), it = !0;
          const yt = S.type.indexOf("touch") >= 0;
          nt.preventDefault() && S.cancelable && yt && S.preventDefault();
        }), it || this._fire(A.pointerdown, {
          evt: S,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
    }
    _pointermove(S) {
      const A = $(S.type), O = G(S.type);
      if (!A)
        return;
      a.DD.isDragging && a.DD.node.preventDefault() && S.cancelable && S.preventDefault(), this.setPointersPositions(S);
      var it = !a.DD.isDragging || r.Konva.hitOnDragEnabled;
      if (!it)
        return;
      var Q = {};
      let nt = !1;
      var yt = this._getTargetShape(O);
      this._changedPointerPositions.forEach((xt) => {
        const at = o.getCapturedShape(xt.id) || this.getIntersection(xt), re = xt.id, Mt = { evt: S, pointerId: re };
        var ne = yt !== at;
        if (ne && yt && (yt._fireAndBubble(A.pointerout, { ...Mt }, at), yt._fireAndBubble(A.pointerleave, { ...Mt }, at)), at) {
          if (Q[at._id])
            return;
          Q[at._id] = !0;
        }
        at && at.isListening() ? (nt = !0, ne && (at._fireAndBubble(A.pointerover, { ...Mt }, yt), at._fireAndBubble(A.pointerenter, { ...Mt }, yt), this[O + "targetShape"] = at), at._fireAndBubble(A.pointermove, { ...Mt })) : yt && (this._fire(A.pointerover, {
          evt: S,
          target: this,
          currentTarget: this,
          pointerId: re
        }), this[O + "targetShape"] = null);
      }), nt || this._fire(A.pointermove, {
        evt: S,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    _pointerup(S) {
      const A = $(S.type), O = G(S.type);
      if (!A)
        return;
      this.setPointersPositions(S);
      const it = this[O + "ClickStartShape"], Q = this[O + "ClickEndShape"];
      var nt = {};
      let yt = !1;
      this._changedPointerPositions.forEach((xt) => {
        const at = o.getCapturedShape(xt.id) || this.getIntersection(xt);
        if (at) {
          if (at.releaseCapture(xt.id), nt[at._id])
            return;
          nt[at._id] = !0;
        }
        const re = xt.id, Mt = { evt: S, pointerId: re };
        let ne = !1;
        r.Konva["_" + O + "InDblClickWindow"] ? (ne = !0, clearTimeout(this[O + "DblTimeout"])) : a.DD.justDragged || (r.Konva["_" + O + "InDblClickWindow"] = !0, clearTimeout(this[O + "DblTimeout"])), this[O + "DblTimeout"] = setTimeout(function() {
          r.Konva["_" + O + "InDblClickWindow"] = !1;
        }, r.Konva.dblClickWindow), at && at.isListening() ? (yt = !0, this[O + "ClickEndShape"] = at, at._fireAndBubble(A.pointerup, { ...Mt }), r.Konva["_" + O + "ListenClick"] && it && it === at && (at._fireAndBubble(A.pointerclick, { ...Mt }), ne && Q && Q === at && at._fireAndBubble(A.pointerdblclick, { ...Mt }))) : (this[O + "ClickEndShape"] = null, r.Konva["_" + O + "ListenClick"] && this._fire(A.pointerclick, {
          evt: S,
          target: this,
          currentTarget: this,
          pointerId: re
        }), ne && this._fire(A.pointerdblclick, {
          evt: S,
          target: this,
          currentTarget: this,
          pointerId: re
        }));
      }), yt || this._fire(A.pointerup, {
        evt: S,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      }), r.Konva["_" + O + "ListenClick"] = !1, S.cancelable && O !== "touch" && S.preventDefault();
    }
    _contextmenu(S) {
      this.setPointersPositions(S);
      var A = this.getIntersection(this.getPointerPosition());
      A && A.isListening() ? A._fireAndBubble(M, { evt: S }) : this._fire(M, {
        evt: S,
        target: this,
        currentTarget: this
      });
    }
    _wheel(S) {
      this.setPointersPositions(S);
      var A = this.getIntersection(this.getPointerPosition());
      A && A.isListening() ? A._fireAndBubble(W, { evt: S }) : this._fire(W, {
        evt: S,
        target: this,
        currentTarget: this
      });
    }
    _pointercancel(S) {
      this.setPointersPositions(S);
      const A = o.getCapturedShape(S.pointerId) || this.getIntersection(this.getPointerPosition());
      A && A._fireAndBubble(y, o.createEvent(S)), o.releaseCapture(S.pointerId);
    }
    _lostpointercapture(S) {
      o.releaseCapture(S.pointerId);
    }
    setPointersPositions(S) {
      var A = this._getContentPosition(), O = null, it = null;
      S = S || window.event, S.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(S.touches, (Q) => {
        this._pointerPositions.push({
          id: Q.identifier,
          x: (Q.clientX - A.left) / A.scaleX,
          y: (Q.clientY - A.top) / A.scaleY
        });
      }), Array.prototype.forEach.call(S.changedTouches || S.touches, (Q) => {
        this._changedPointerPositions.push({
          id: Q.identifier,
          x: (Q.clientX - A.left) / A.scaleX,
          y: (Q.clientY - A.top) / A.scaleY
        });
      })) : (O = (S.clientX - A.left) / A.scaleX, it = (S.clientY - A.top) / A.scaleY, this.pointerPos = {
        x: O,
        y: it
      }, this._pointerPositions = [{ x: O, y: it, id: t.Util._getFirstPointerId(S) }], this._changedPointerPositions = [
        { x: O, y: it, id: t.Util._getFirstPointerId(S) }
      ]);
    }
    _setPointerPosition(S) {
      t.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(S);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect)
        return {
          top: 0,
          left: 0,
          scaleX: 1,
          scaleY: 1
        };
      var S = this.content.getBoundingClientRect();
      return {
        top: S.top,
        left: S.left,
        scaleX: S.width / this.content.clientWidth || 1,
        scaleY: S.height / this.content.clientHeight || 1
      };
    }
    _buildDOM() {
      if (this.bufferCanvas = new n.SceneCanvas({
        width: this.width(),
        height: this.height()
      }), this.bufferHitCanvas = new n.HitCanvas({
        pixelRatio: 1,
        width: this.width(),
        height: this.height()
      }), !!r.Konva.isBrowser) {
        var S = this.container();
        if (!S)
          throw "Stage has no container. A container is required.";
        S.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), S.appendChild(this.content), this._resizeDOM();
      }
    }
    cache() {
      return t.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      return this.getChildren().forEach(function(S) {
        S.batchDraw();
      }), this;
    }
  }
  h.Stage = mt, mt.prototype.nodeType = l, (0, s._registerNode)(mt), e.Factory.addGetterSetter(mt, "container");
})(hn);
var xe = {}, ft = {};
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 }), h.Shape = h.shapes = void 0;
  const t = X, e = lt, i = z, r = st, n = L, a = X, s = St;
  var o = "hasShadow", l = "shadowRGBA", u = "patternImage", _ = "linearGradient", g = "radialGradient";
  let f;
  function c() {
    return f || (f = e.Util.createCanvasElement().getContext("2d"), f);
  }
  h.shapes = {};
  function p(E) {
    const w = this.attrs.fillRule;
    w ? E.fill(w) : E.fill();
  }
  function m(E) {
    E.stroke();
  }
  function C(E) {
    E.fill();
  }
  function P(E) {
    E.stroke();
  }
  function d() {
    this._clearCache(o);
  }
  function v() {
    this._clearCache(l);
  }
  function y() {
    this._clearCache(u);
  }
  function x() {
    this._clearCache(_);
  }
  function T() {
    this._clearCache(g);
  }
  class b extends r.Node {
    constructor(w) {
      super(w);
      let k;
      for (; k = e.Util.getRandomColor(), !(k && !(k in h.shapes)); )
        ;
      this.colorKey = k, h.shapes[k] = this;
    }
    getContext() {
      return e.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
    }
    getCanvas() {
      return e.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
    }
    getSceneFunc() {
      return this.attrs.sceneFunc || this._sceneFunc;
    }
    getHitFunc() {
      return this.attrs.hitFunc || this._hitFunc;
    }
    hasShadow() {
      return this._getCache(o, this._hasShadow);
    }
    _hasShadow() {
      return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
    }
    _getFillPattern() {
      return this._getCache(u, this.__getFillPattern);
    }
    __getFillPattern() {
      if (this.fillPatternImage()) {
        var w = c();
        const k = w.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
        if (k && k.setTransform) {
          const M = new e.Transform();
          M.translate(this.fillPatternX(), this.fillPatternY()), M.rotate(t.Konva.getAngle(this.fillPatternRotation())), M.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), M.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
          const F = M.getMatrix(), N = typeof DOMMatrix > "u" ? {
            a: F[0],
            b: F[1],
            c: F[2],
            d: F[3],
            e: F[4],
            f: F[5]
          } : new DOMMatrix(F);
          k.setTransform(N);
        }
        return k;
      }
    }
    _getLinearGradient() {
      return this._getCache(_, this.__getLinearGradient);
    }
    __getLinearGradient() {
      var w = this.fillLinearGradientColorStops();
      if (w) {
        for (var k = c(), M = this.fillLinearGradientStartPoint(), F = this.fillLinearGradientEndPoint(), N = k.createLinearGradient(M.x, M.y, F.x, F.y), D = 0; D < w.length; D += 2)
          N.addColorStop(w[D], w[D + 1]);
        return N;
      }
    }
    _getRadialGradient() {
      return this._getCache(g, this.__getRadialGradient);
    }
    __getRadialGradient() {
      var w = this.fillRadialGradientColorStops();
      if (w) {
        for (var k = c(), M = this.fillRadialGradientStartPoint(), F = this.fillRadialGradientEndPoint(), N = k.createRadialGradient(M.x, M.y, this.fillRadialGradientStartRadius(), F.x, F.y, this.fillRadialGradientEndRadius()), D = 0; D < w.length; D += 2)
          N.addColorStop(w[D], w[D + 1]);
        return N;
      }
    }
    getShadowRGBA() {
      return this._getCache(l, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (this.hasShadow()) {
        var w = e.Util.colorToRGBA(this.shadowColor());
        if (w)
          return "rgba(" + w.r + "," + w.g + "," + w.b + "," + w.a * (this.shadowOpacity() || 1) + ")";
      }
    }
    hasFill() {
      return this._calculate("hasFill", [
        "fillEnabled",
        "fill",
        "fillPatternImage",
        "fillLinearGradientColorStops",
        "fillRadialGradientColorStops"
      ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
    }
    hasStroke() {
      return this._calculate("hasStroke", [
        "strokeEnabled",
        "strokeWidth",
        "stroke",
        "strokeLinearGradientColorStops"
      ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
    }
    hasHitStroke() {
      const w = this.hitStrokeWidth();
      return w === "auto" ? this.hasStroke() : this.strokeEnabled() && !!w;
    }
    intersects(w) {
      var k = this.getStage();
      if (!k)
        return !1;
      const M = k.bufferHitCanvas;
      return M.getContext().clear(), this.drawHit(M, void 0, !0), M.context.getImageData(Math.round(w.x), Math.round(w.y), 1, 1).data[3] > 0;
    }
    destroy() {
      return r.Node.prototype.destroy.call(this), delete h.shapes[this.colorKey], delete this.colorKey, this;
    }
    _useBufferCanvas(w) {
      var k;
      if (!this.getStage() || !((k = this.attrs.perfectDrawEnabled) !== null && k !== void 0 ? k : !0))
        return !1;
      const F = w || this.hasFill(), N = this.hasStroke(), D = this.getAbsoluteOpacity() !== 1;
      if (F && N && D)
        return !0;
      const H = this.hasShadow(), W = this.shadowForStrokeEnabled();
      return !!(F && N && H && W);
    }
    setStrokeHitEnabled(w) {
      e.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), w ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
      return this.hitStrokeWidth() !== 0;
    }
    getSelfRect() {
      var w = this.size();
      return {
        x: this._centroid ? -w.width / 2 : 0,
        y: this._centroid ? -w.height / 2 : 0,
        width: w.width,
        height: w.height
      };
    }
    getClientRect(w = {}) {
      const k = w.skipTransform, M = w.relativeTo, F = this.getSelfRect(), D = !w.skipStroke && this.hasStroke() && this.strokeWidth() || 0, H = F.width + D, W = F.height + D, Y = !w.skipShadow && this.hasShadow(), V = Y ? this.shadowOffsetX() : 0, R = Y ? this.shadowOffsetY() : 0, G = H + Math.abs(V), $ = W + Math.abs(R), Z = Y && this.shadowBlur() || 0, q = G + Z * 2, mt = $ + Z * 2, rt = {
        width: q,
        height: mt,
        x: -(D / 2 + Z) + Math.min(V, 0) + F.x,
        y: -(D / 2 + Z) + Math.min(R, 0) + F.y
      };
      return k ? rt : this._transformedRect(rt, M);
    }
    drawScene(w, k) {
      var M = this.getLayer(), F = w || M.getCanvas(), N = F.getContext(), D = this._getCanvasCache(), H = this.getSceneFunc(), W = this.hasShadow(), Y, V, R, G = F.isCache, $ = k === this;
      if (!this.isVisible() && !$)
        return this;
      if (D) {
        N.save();
        var Z = this.getAbsoluteTransform(k).getMatrix();
        return N.transform(Z[0], Z[1], Z[2], Z[3], Z[4], Z[5]), this._drawCachedSceneCanvas(N), N.restore(), this;
      }
      if (!H)
        return this;
      if (N.save(), this._useBufferCanvas() && !G) {
        Y = this.getStage(), V = Y.bufferCanvas, R = V.getContext(), R.clear(), R.save(), R._applyLineJoin(this);
        var q = this.getAbsoluteTransform(k).getMatrix();
        R.transform(q[0], q[1], q[2], q[3], q[4], q[5]), H.call(this, R, this), R.restore();
        var mt = V.pixelRatio;
        W && N._applyShadow(this), N._applyOpacity(this), N._applyGlobalCompositeOperation(this), N.drawImage(V._canvas, 0, 0, V.width / mt, V.height / mt);
      } else {
        if (N._applyLineJoin(this), !$) {
          var q = this.getAbsoluteTransform(k).getMatrix();
          N.transform(q[0], q[1], q[2], q[3], q[4], q[5]), N._applyOpacity(this), N._applyGlobalCompositeOperation(this);
        }
        W && N._applyShadow(this), H.call(this, N, this);
      }
      return N.restore(), this;
    }
    drawHit(w, k, M = !1) {
      if (!this.shouldDrawHit(k, M))
        return this;
      var F = this.getLayer(), N = w || F.hitCanvas, D = N && N.getContext(), H = this.hitFunc() || this.sceneFunc(), W = this._getCanvasCache(), Y = W && W.hit;
      if (this.colorKey || e.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), Y) {
        D.save();
        var V = this.getAbsoluteTransform(k).getMatrix();
        return D.transform(V[0], V[1], V[2], V[3], V[4], V[5]), this._drawCachedHitCanvas(D), D.restore(), this;
      }
      if (!H)
        return this;
      if (D.save(), D._applyLineJoin(this), !(this === k)) {
        var G = this.getAbsoluteTransform(k).getMatrix();
        D.transform(G[0], G[1], G[2], G[3], G[4], G[5]);
      }
      return H.call(this, D, this), D.restore(), this;
    }
    drawHitFromCache(w = 0) {
      var k = this._getCanvasCache(), M = this._getCachedSceneCanvas(), F = k.hit, N = F.getContext(), D = F.getWidth(), H = F.getHeight(), W, Y, V, R, G, $;
      N.clear(), N.drawImage(M._canvas, 0, 0, D, H);
      try {
        for (W = N.getImageData(0, 0, D, H), Y = W.data, V = Y.length, R = e.Util._hexToRgb(this.colorKey), G = 0; G < V; G += 4)
          $ = Y[G + 3], $ > w ? (Y[G] = R.r, Y[G + 1] = R.g, Y[G + 2] = R.b, Y[G + 3] = 255) : Y[G + 3] = 0;
        N.putImageData(W, 0, 0);
      } catch (Z) {
        e.Util.error("Unable to draw hit graph from cached scene canvas. " + Z.message);
      }
      return this;
    }
    hasPointerCapture(w) {
      return s.hasPointerCapture(w, this);
    }
    setPointerCapture(w) {
      s.setPointerCapture(w, this);
    }
    releaseCapture(w) {
      s.releaseCapture(w, this);
    }
  }
  h.Shape = b, b.prototype._fillFunc = p, b.prototype._strokeFunc = m, b.prototype._fillFuncHit = C, b.prototype._strokeFuncHit = P, b.prototype._centroid = !1, b.prototype.nodeType = "Shape", (0, a._registerNode)(b), b.prototype.eventListeners = {}, b.prototype.on.call(b.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", d), b.prototype.on.call(b.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", v), b.prototype.on.call(b.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", y), b.prototype.on.call(b.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", x), b.prototype.on.call(b.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", T), i.Factory.addGetterSetter(b, "stroke", void 0, (0, n.getStringOrGradientValidator)()), i.Factory.addGetterSetter(b, "strokeWidth", 2, (0, n.getNumberValidator)()), i.Factory.addGetterSetter(b, "fillAfterStrokeEnabled", !1), i.Factory.addGetterSetter(b, "hitStrokeWidth", "auto", (0, n.getNumberOrAutoValidator)()), i.Factory.addGetterSetter(b, "strokeHitEnabled", !0, (0, n.getBooleanValidator)()), i.Factory.addGetterSetter(b, "perfectDrawEnabled", !0, (0, n.getBooleanValidator)()), i.Factory.addGetterSetter(b, "shadowForStrokeEnabled", !0, (0, n.getBooleanValidator)()), i.Factory.addGetterSetter(b, "lineJoin"), i.Factory.addGetterSetter(b, "lineCap"), i.Factory.addGetterSetter(b, "sceneFunc"), i.Factory.addGetterSetter(b, "hitFunc"), i.Factory.addGetterSetter(b, "dash"), i.Factory.addGetterSetter(b, "dashOffset", 0, (0, n.getNumberValidator)()), i.Factory.addGetterSetter(b, "shadowColor", void 0, (0, n.getStringValidator)()), i.Factory.addGetterSetter(b, "shadowBlur", 0, (0, n.getNumberValidator)()), i.Factory.addGetterSetter(b, "shadowOpacity", 1, (0, n.getNumberValidator)()), i.Factory.addComponentsGetterSetter(b, "shadowOffset", ["x", "y"]), i.Factory.addGetterSetter(b, "shadowOffsetX", 0, (0, n.getNumberValidator)()), i.Factory.addGetterSetter(b, "shadowOffsetY", 0, (0, n.getNumberValidator)()), i.Factory.addGetterSetter(b, "fillPatternImage"), i.Factory.addGetterSetter(b, "fill", void 0, (0, n.getStringOrGradientValidator)()), i.Factory.addGetterSetter(b, "fillPatternX", 0, (0, n.getNumberValidator)()), i.Factory.addGetterSetter(b, "fillPatternY", 0, (0, n.getNumberValidator)()), i.Factory.addGetterSetter(b, "fillLinearGradientColorStops"), i.Factory.addGetterSetter(b, "strokeLinearGradientColorStops"), i.Factory.addGetterSetter(b, "fillRadialGradientStartRadius", 0), i.Factory.addGetterSetter(b, "fillRadialGradientEndRadius", 0), i.Factory.addGetterSetter(b, "fillRadialGradientColorStops"), i.Factory.addGetterSetter(b, "fillPatternRepeat", "repeat"), i.Factory.addGetterSetter(b, "fillEnabled", !0), i.Factory.addGetterSetter(b, "strokeEnabled", !0), i.Factory.addGetterSetter(b, "shadowEnabled", !0), i.Factory.addGetterSetter(b, "dashEnabled", !0), i.Factory.addGetterSetter(b, "strokeScaleEnabled", !0), i.Factory.addGetterSetter(b, "fillPriority", "color"), i.Factory.addComponentsGetterSetter(b, "fillPatternOffset", ["x", "y"]), i.Factory.addGetterSetter(b, "fillPatternOffsetX", 0, (0, n.getNumberValidator)()), i.Factory.addGetterSetter(b, "fillPatternOffsetY", 0, (0, n.getNumberValidator)()), i.Factory.addComponentsGetterSetter(b, "fillPatternScale", ["x", "y"]), i.Factory.addGetterSetter(b, "fillPatternScaleX", 1, (0, n.getNumberValidator)()), i.Factory.addGetterSetter(b, "fillPatternScaleY", 1, (0, n.getNumberValidator)()), i.Factory.addComponentsGetterSetter(b, "fillLinearGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addComponentsGetterSetter(b, "strokeLinearGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(b, "fillLinearGradientStartPointX", 0), i.Factory.addGetterSetter(b, "strokeLinearGradientStartPointX", 0), i.Factory.addGetterSetter(b, "fillLinearGradientStartPointY", 0), i.Factory.addGetterSetter(b, "strokeLinearGradientStartPointY", 0), i.Factory.addComponentsGetterSetter(b, "fillLinearGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addComponentsGetterSetter(b, "strokeLinearGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(b, "fillLinearGradientEndPointX", 0), i.Factory.addGetterSetter(b, "strokeLinearGradientEndPointX", 0), i.Factory.addGetterSetter(b, "fillLinearGradientEndPointY", 0), i.Factory.addGetterSetter(b, "strokeLinearGradientEndPointY", 0), i.Factory.addComponentsGetterSetter(b, "fillRadialGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(b, "fillRadialGradientStartPointX", 0), i.Factory.addGetterSetter(b, "fillRadialGradientStartPointY", 0), i.Factory.addComponentsGetterSetter(b, "fillRadialGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(b, "fillRadialGradientEndPointX", 0), i.Factory.addGetterSetter(b, "fillRadialGradientEndPointY", 0), i.Factory.addGetterSetter(b, "fillPatternRotation", 0), i.Factory.addGetterSetter(b, "fillRule", void 0, (0, n.getStringValidator)()), i.Factory.backCompat(b, {
    dashArray: "dash",
    getDashArray: "getDash",
    setDashArray: "getDash",
    drawFunc: "sceneFunc",
    getDrawFunc: "getSceneFunc",
    setDrawFunc: "setSceneFunc",
    drawHitFunc: "hitFunc",
    getDrawHitFunc: "getHitFunc",
    setDrawHitFunc: "setHitFunc"
  });
})(ft);
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.Layer = void 0;
const Ft = lt, Oi = Kt, ae = st, sr = z, Tr = kt, ja = L, Ka = ft, qa = X;
var Qa = "#", Ja = "beforeDraw", Za = "draw", cn = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], ts = cn.length;
class ue extends Oi.Container {
  constructor(t) {
    super(t), this.canvas = new Tr.SceneCanvas(), this.hitCanvas = new Tr.HitCanvas({
      pixelRatio: 1
    }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
  }
  createPNGStream() {
    return this.canvas._canvas.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(t) {
    return this.getContext().clear(t), this.getHitCanvas().getContext().clear(t), this;
  }
  setZIndex(t) {
    super.setZIndex(t);
    var e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), t < e.children.length - 1 ? e.content.insertBefore(this.getNativeCanvasElement(), e.children[t + 1].getCanvas()._canvas) : e.content.appendChild(this.getNativeCanvasElement())), this;
  }
  moveToTop() {
    ae.Node.prototype.moveToTop.call(this);
    var t = this.getStage();
    return t && t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    var t = ae.Node.prototype.moveUp.call(this);
    if (!t)
      return !1;
    var e = this.getStage();
    return !e || !e.content ? !1 : (e.content.removeChild(this.getNativeCanvasElement()), this.index < e.children.length - 1 ? e.content.insertBefore(this.getNativeCanvasElement(), e.children[this.index + 1].getCanvas()._canvas) : e.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (ae.Node.prototype.moveDown.call(this)) {
      var t = this.getStage();
      if (t) {
        var e = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), e[this.index + 1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (ae.Node.prototype.moveToBottom.call(this)) {
      var t = this.getStage();
      if (t) {
        var e = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), e[1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    var t = this.getNativeCanvasElement();
    return ae.Node.prototype.remove.call(this), t && t.parentNode && Ft.Util._isInDocument(t) && t.parentNode.removeChild(t), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: t, height: e }) {
    return this.canvas.setSize(t, e), this.hitCanvas.setSize(t, e), this._setSmoothEnabled(), this;
  }
  _validateAdd(t) {
    var e = t.getType();
    e !== "Group" && e !== "Shape" && Ft.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(t) {
    return t = t || {}, t.width = t.width || this.getWidth(), t.height = t.height || this.getHeight(), t.x = t.x !== void 0 ? t.x : this.x(), t.y = t.y !== void 0 ? t.y : this.y(), ae.Node.prototype._toKonvaCanvas.call(this, t);
  }
  _checkVisibility() {
    this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent)
      return this.parent.width();
  }
  setWidth() {
    Ft.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    Ft.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, Ft.Util.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(t) {
    if (!this.isListening() || !this.isVisible())
      return null;
    for (var e = 1, i = !1; ; ) {
      for (let r = 0; r < ts; r++) {
        const n = cn[r], a = this._getIntersection({
          x: t.x + n.x * e,
          y: t.y + n.y * e
        }), s = a.shape;
        if (s)
          return s;
        if (i = !!a.antialiased, !a.antialiased)
          break;
      }
      if (i)
        e += 1;
      else
        return null;
    }
  }
  _getIntersection(t) {
    const e = this.hitCanvas.pixelRatio, i = this.hitCanvas.context.getImageData(Math.round(t.x * e), Math.round(t.y * e), 1, 1).data, r = i[3];
    if (r === 255) {
      const n = Ft.Util._rgbToHex(i[0], i[1], i[2]), a = Ka.shapes[Qa + n];
      return a ? {
        shape: a
      } : {
        antialiased: !0
      };
    } else if (r > 0)
      return {
        antialiased: !0
      };
    return {};
  }
  drawScene(t, e) {
    var i = this.getLayer(), r = t || i && i.getCanvas();
    return this._fire(Ja, {
      node: this
    }), this.clearBeforeDraw() && r.getContext().clear(), Oi.Container.prototype.drawScene.call(this, r, e), this._fire(Za, {
      node: this
    }), this;
  }
  drawHit(t, e) {
    var i = this.getLayer(), r = t || i && i.hitCanvas;
    return i && i.clearBeforeDraw() && i.getHitCanvas().getContext().clear(), Oi.Container.prototype.drawHit.call(this, r, e), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(t) {
    Ft.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(t);
  }
  getHitGraphEnabled(t) {
    return Ft.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!(!this.parent || !this.parent.content)) {
      var t = this.parent, e = !!this.hitCanvas._canvas.parentNode;
      e ? t.content.removeChild(this.hitCanvas._canvas) : t.content.appendChild(this.hitCanvas._canvas);
    }
  }
  destroy() {
    return Ft.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
}
xe.Layer = ue;
ue.prototype.nodeType = "Layer";
(0, qa._registerNode)(ue);
sr.Factory.addGetterSetter(ue, "imageSmoothingEnabled", !0);
sr.Factory.addGetterSetter(ue, "clearBeforeDraw", !0);
sr.Factory.addGetterSetter(ue, "hitGraphEnabled", !0, (0, ja.getBooleanValidator)());
var Xe = {};
Object.defineProperty(Xe, "__esModule", { value: !0 });
Xe.FastLayer = void 0;
const es = lt, is = xe, rs = X;
class or extends is.Layer {
  constructor(t) {
    super(t), this.listening(!1), es.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
Xe.FastLayer = or;
or.prototype.nodeType = "FastLayer";
(0, rs._registerNode)(or);
var fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.Group = void 0;
const ns = lt, as = Kt, ss = X;
class hr extends as.Container {
  _validateAdd(t) {
    var e = t.getType();
    e !== "Group" && e !== "Shape" && ns.Util.throw("You may only add groups and shapes to groups.");
  }
}
fe.Group = hr;
hr.prototype.nodeType = "Group";
(0, ss._registerNode)(hr);
var ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.Animation = void 0;
const Li = X, Ar = lt, Di = function() {
  return Li.glob.performance && Li.glob.performance.now ? function() {
    return Li.glob.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class Tt {
  constructor(t, e) {
    this.id = Tt.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: Di(),
      frameRate: 0
    }, this.func = t, this.setLayers(e);
  }
  setLayers(t) {
    let e = [];
    return t && (e = Array.isArray(t) ? t : [t]), this.layers = e, this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(t) {
    const e = this.layers, i = e.length;
    for (let r = 0; r < i; r++)
      if (e[r]._id === t._id)
        return !1;
    return this.layers.push(t), !0;
  }
  isRunning() {
    const e = Tt.animations, i = e.length;
    for (let r = 0; r < i; r++)
      if (e[r].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = Di(), Tt._addAnimation(this), this;
  }
  stop() {
    return Tt._removeAnimation(this), this;
  }
  _updateFrameObject(t) {
    this.frame.timeDiff = t - this.frame.lastTime, this.frame.lastTime = t, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
  }
  static _addAnimation(t) {
    this.animations.push(t), this._handleAnimation();
  }
  static _removeAnimation(t) {
    const e = t.id, i = this.animations, r = i.length;
    for (let n = 0; n < r; n++)
      if (i[n].id === e) {
        this.animations.splice(n, 1);
        break;
      }
  }
  static _runFrames() {
    const t = {}, e = this.animations;
    for (let i = 0; i < e.length; i++) {
      const r = e[i], n = r.layers, a = r.func;
      r._updateFrameObject(Di());
      const s = n.length;
      let o;
      if (a ? o = a.call(r, r.frame) !== !1 : o = !0, !!o)
        for (let l = 0; l < s; l++) {
          const u = n[l];
          u._id !== void 0 && (t[u._id] = u);
        }
    }
    for (let i in t)
      t.hasOwnProperty(i) && t[i].batchDraw();
  }
  static _animationLoop() {
    const t = Tt;
    t.animations.length ? (t._runFrames(), Ar.Util.requestAnimFrame(t._animationLoop)) : t.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, Ar.Util.requestAnimFrame(this._animationLoop));
  }
}
ge.Animation = Tt;
Tt.animations = [];
Tt.animIdCounter = 0;
Tt.animRunning = !1;
var un = {};
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 }), h.Easings = h.Tween = void 0;
  const t = lt, e = ge, i = st, r = X;
  var n = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, a = 1, s = 2, o = 3, l = 0, u = ["fill", "stroke", "shadowColor"];
  class _ {
    constructor(c, p, m, C, P, d, v) {
      this.prop = c, this.propFunc = p, this.begin = C, this._pos = C, this.duration = d, this._change = 0, this.prevPos = 0, this.yoyo = v, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = m, this._change = P - this.begin, this.pause();
    }
    fire(c) {
      var p = this[c];
      p && p();
    }
    setTime(c) {
      c > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : c < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = c, this.update());
    }
    getTime() {
      return this._time;
    }
    setPosition(c) {
      this.prevPos = this._pos, this.propFunc(c), this._pos = c;
    }
    getPosition(c) {
      return c === void 0 && (c = this._time), this.func(c, this.begin, this._change, this.duration);
    }
    play() {
      this.state = s, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
    }
    reverse() {
      this.state = o, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
    }
    seek(c) {
      this.pause(), this._time = c, this.update(), this.fire("onSeek");
    }
    reset() {
      this.pause(), this._time = 0, this.update(), this.fire("onReset");
    }
    finish() {
      this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
    }
    update() {
      this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
    }
    onEnterFrame() {
      var c = this.getTimer() - this._startTime;
      this.state === s ? this.setTime(c) : this.state === o && this.setTime(this.duration - c);
    }
    pause() {
      this.state = a, this.fire("onPause");
    }
    getTimer() {
      return (/* @__PURE__ */ new Date()).getTime();
    }
  }
  class g {
    constructor(c) {
      var p = this, m = c.node, C = m._id, P, d = c.easing || h.Easings.Linear, v = !!c.yoyo, y;
      typeof c.duration > "u" ? P = 0.3 : c.duration === 0 ? P = 1e-3 : P = c.duration, this.node = m, this._id = l++;
      var x = m.getLayer() || (m instanceof r.Konva.Stage ? m.getLayers() : null);
      x || t.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new e.Animation(function() {
        p.tween.onEnterFrame();
      }, x), this.tween = new _(y, function(T) {
        p._tweenFunc(T);
      }, d, 0, 1, P * 1e3, v), this._addListeners(), g.attrs[C] || (g.attrs[C] = {}), g.attrs[C][this._id] || (g.attrs[C][this._id] = {}), g.tweens[C] || (g.tweens[C] = {});
      for (y in c)
        n[y] === void 0 && this._addAttr(y, c[y]);
      this.reset(), this.onFinish = c.onFinish, this.onReset = c.onReset, this.onUpdate = c.onUpdate;
    }
    _addAttr(c, p) {
      var m = this.node, C = m._id, P, d, v, y, x, T, b, E;
      if (v = g.tweens[C][c], v && delete g.attrs[C][v][c], P = m.getAttr(c), t.Util._isArray(p))
        if (d = [], x = Math.max(p.length, P.length), c === "points" && p.length !== P.length && (p.length > P.length ? (b = P, P = t.Util._prepareArrayForTween(P, p, m.closed())) : (T = p, p = t.Util._prepareArrayForTween(p, P, m.closed()))), c.indexOf("fill") === 0)
          for (y = 0; y < x; y++)
            if (y % 2 === 0)
              d.push(p[y] - P[y]);
            else {
              var w = t.Util.colorToRGBA(P[y]);
              E = t.Util.colorToRGBA(p[y]), P[y] = w, d.push({
                r: E.r - w.r,
                g: E.g - w.g,
                b: E.b - w.b,
                a: E.a - w.a
              });
            }
        else
          for (y = 0; y < x; y++)
            d.push(p[y] - P[y]);
      else
        u.indexOf(c) !== -1 ? (P = t.Util.colorToRGBA(P), E = t.Util.colorToRGBA(p), d = {
          r: E.r - P.r,
          g: E.g - P.g,
          b: E.b - P.b,
          a: E.a - P.a
        }) : d = p - P;
      g.attrs[C][this._id][c] = {
        start: P,
        diff: d,
        end: p,
        trueEnd: T,
        trueStart: b
      }, g.tweens[C][c] = this._id;
    }
    _tweenFunc(c) {
      var p = this.node, m = g.attrs[p._id][this._id], C, P, d, v, y, x, T, b;
      for (C in m) {
        if (P = m[C], d = P.start, v = P.diff, b = P.end, t.Util._isArray(d))
          if (y = [], T = Math.max(d.length, b.length), C.indexOf("fill") === 0)
            for (x = 0; x < T; x++)
              x % 2 === 0 ? y.push((d[x] || 0) + v[x] * c) : y.push("rgba(" + Math.round(d[x].r + v[x].r * c) + "," + Math.round(d[x].g + v[x].g * c) + "," + Math.round(d[x].b + v[x].b * c) + "," + (d[x].a + v[x].a * c) + ")");
          else
            for (x = 0; x < T; x++)
              y.push((d[x] || 0) + v[x] * c);
        else
          u.indexOf(C) !== -1 ? y = "rgba(" + Math.round(d.r + v.r * c) + "," + Math.round(d.g + v.g * c) + "," + Math.round(d.b + v.b * c) + "," + (d.a + v.a * c) + ")" : y = d + v * c;
        p.setAttr(C, y);
      }
    }
    _addListeners() {
      this.tween.onPlay = () => {
        this.anim.start();
      }, this.tween.onReverse = () => {
        this.anim.start();
      }, this.tween.onPause = () => {
        this.anim.stop();
      }, this.tween.onFinish = () => {
        var c = this.node, p = g.attrs[c._id][this._id];
        p.points && p.points.trueEnd && c.setAttr("points", p.points.trueEnd), this.onFinish && this.onFinish.call(this);
      }, this.tween.onReset = () => {
        var c = this.node, p = g.attrs[c._id][this._id];
        p.points && p.points.trueStart && c.points(p.points.trueStart), this.onReset && this.onReset();
      }, this.tween.onUpdate = () => {
        this.onUpdate && this.onUpdate.call(this);
      };
    }
    play() {
      return this.tween.play(), this;
    }
    reverse() {
      return this.tween.reverse(), this;
    }
    reset() {
      return this.tween.reset(), this;
    }
    seek(c) {
      return this.tween.seek(c * 1e3), this;
    }
    pause() {
      return this.tween.pause(), this;
    }
    finish() {
      return this.tween.finish(), this;
    }
    destroy() {
      var c = this.node._id, p = this._id, m = g.tweens[c], C;
      this.pause();
      for (C in m)
        delete g.tweens[c][C];
      delete g.attrs[c][p];
    }
  }
  h.Tween = g, g.attrs = {}, g.tweens = {}, i.Node.prototype.to = function(f) {
    var c = f.onFinish;
    f.node = this, f.onFinish = function() {
      this.destroy(), c && c();
    };
    var p = new g(f);
    p.play();
  }, h.Easings = {
    BackEaseIn(f, c, p, m) {
      var C = 1.70158;
      return p * (f /= m) * f * ((C + 1) * f - C) + c;
    },
    BackEaseOut(f, c, p, m) {
      var C = 1.70158;
      return p * ((f = f / m - 1) * f * ((C + 1) * f + C) + 1) + c;
    },
    BackEaseInOut(f, c, p, m) {
      var C = 1.70158;
      return (f /= m / 2) < 1 ? p / 2 * (f * f * (((C *= 1.525) + 1) * f - C)) + c : p / 2 * ((f -= 2) * f * (((C *= 1.525) + 1) * f + C) + 2) + c;
    },
    ElasticEaseIn(f, c, p, m, C, P) {
      var d = 0;
      return f === 0 ? c : (f /= m) === 1 ? c + p : (P || (P = m * 0.3), !C || C < Math.abs(p) ? (C = p, d = P / 4) : d = P / (2 * Math.PI) * Math.asin(p / C), -(C * Math.pow(2, 10 * (f -= 1)) * Math.sin((f * m - d) * (2 * Math.PI) / P)) + c);
    },
    ElasticEaseOut(f, c, p, m, C, P) {
      var d = 0;
      return f === 0 ? c : (f /= m) === 1 ? c + p : (P || (P = m * 0.3), !C || C < Math.abs(p) ? (C = p, d = P / 4) : d = P / (2 * Math.PI) * Math.asin(p / C), C * Math.pow(2, -10 * f) * Math.sin((f * m - d) * (2 * Math.PI) / P) + p + c);
    },
    ElasticEaseInOut(f, c, p, m, C, P) {
      var d = 0;
      return f === 0 ? c : (f /= m / 2) === 2 ? c + p : (P || (P = m * (0.3 * 1.5)), !C || C < Math.abs(p) ? (C = p, d = P / 4) : d = P / (2 * Math.PI) * Math.asin(p / C), f < 1 ? -0.5 * (C * Math.pow(2, 10 * (f -= 1)) * Math.sin((f * m - d) * (2 * Math.PI) / P)) + c : C * Math.pow(2, -10 * (f -= 1)) * Math.sin((f * m - d) * (2 * Math.PI) / P) * 0.5 + p + c);
    },
    BounceEaseOut(f, c, p, m) {
      return (f /= m) < 1 / 2.75 ? p * (7.5625 * f * f) + c : f < 2 / 2.75 ? p * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + c : f < 2.5 / 2.75 ? p * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + c : p * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + c;
    },
    BounceEaseIn(f, c, p, m) {
      return p - h.Easings.BounceEaseOut(m - f, 0, p, m) + c;
    },
    BounceEaseInOut(f, c, p, m) {
      return f < m / 2 ? h.Easings.BounceEaseIn(f * 2, 0, p, m) * 0.5 + c : h.Easings.BounceEaseOut(f * 2 - m, 0, p, m) * 0.5 + p * 0.5 + c;
    },
    EaseIn(f, c, p, m) {
      return p * (f /= m) * f + c;
    },
    EaseOut(f, c, p, m) {
      return -p * (f /= m) * (f - 2) + c;
    },
    EaseInOut(f, c, p, m) {
      return (f /= m / 2) < 1 ? p / 2 * f * f + c : -p / 2 * (--f * (f - 2) - 1) + c;
    },
    StrongEaseIn(f, c, p, m) {
      return p * (f /= m) * f * f * f * f + c;
    },
    StrongEaseOut(f, c, p, m) {
      return p * ((f = f / m - 1) * f * f * f * f + 1) + c;
    },
    StrongEaseInOut(f, c, p, m) {
      return (f /= m / 2) < 1 ? p / 2 * f * f * f * f * f + c : p / 2 * ((f -= 2) * f * f * f * f + 2) + c;
    },
    Linear(f, c, p, m) {
      return p * f / m + c;
    }
  };
})(un);
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 }), h.Konva = void 0;
  const t = X, e = lt, i = st, r = Kt, n = hn, a = xe, s = Xe, o = fe, l = ze, u = ft, _ = ge, g = un, f = Rt, c = kt;
  h.Konva = e.Util._assign(t.Konva, {
    Util: e.Util,
    Transform: e.Transform,
    Node: i.Node,
    Container: r.Container,
    Stage: n.Stage,
    stages: n.stages,
    Layer: a.Layer,
    FastLayer: s.FastLayer,
    Group: o.Group,
    DD: l.DD,
    Shape: u.Shape,
    shapes: u.shapes,
    Animation: _.Animation,
    Tween: g.Tween,
    Easings: g.Easings,
    Context: f.Context,
    Canvas: c.Canvas
  }), h.default = h.Konva;
})(nn);
var je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.Arc = void 0;
const Ke = z, os = ft, Mr = X, qe = L, hs = X;
class Lt extends os.Shape {
  _sceneFunc(t) {
    var e = Mr.Konva.getAngle(this.angle()), i = this.clockwise();
    t.beginPath(), t.arc(0, 0, this.outerRadius(), 0, e, i), t.arc(0, 0, this.innerRadius(), e, 0, !i), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
  getSelfRect() {
    const t = this.innerRadius(), e = this.outerRadius(), i = this.clockwise(), r = Mr.Konva.getAngle(i ? 360 - this.angle() : this.angle()), n = Math.cos(Math.min(r, Math.PI)), a = 1, s = Math.sin(Math.min(Math.max(Math.PI, r), 3 * Math.PI / 2)), o = Math.sin(Math.min(r, Math.PI / 2)), l = n * (n > 0 ? t : e), u = a * e, _ = s * (s > 0 ? t : e), g = o * (o > 0 ? e : t);
    return {
      x: l,
      y: i ? -1 * g : _,
      width: u - l,
      height: g - _
    };
  }
}
je.Arc = Lt;
Lt.prototype._centroid = !0;
Lt.prototype.className = "Arc";
Lt.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, hs._registerNode)(Lt);
Ke.Factory.addGetterSetter(Lt, "innerRadius", 0, (0, qe.getNumberValidator)());
Ke.Factory.addGetterSetter(Lt, "outerRadius", 0, (0, qe.getNumberValidator)());
Ke.Factory.addGetterSetter(Lt, "angle", 0, (0, qe.getNumberValidator)());
Ke.Factory.addGetterSetter(Lt, "clockwise", !1, (0, qe.getBooleanValidator)());
var Qe = {}, Pe = {};
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.Line = void 0;
const Je = z, ls = ft, fn = L, ds = X;
function Xi(h, t, e, i, r, n, a) {
  var s = Math.sqrt(Math.pow(e - h, 2) + Math.pow(i - t, 2)), o = Math.sqrt(Math.pow(r - e, 2) + Math.pow(n - i, 2)), l = a * s / (s + o), u = a * o / (s + o), _ = e - l * (r - h), g = i - l * (n - t), f = e + u * (r - h), c = i + u * (n - t);
  return [_, g, f, c];
}
function Fr(h, t) {
  var e = h.length, i = [], r, n;
  for (r = 2; r < e - 2; r += 2)
    n = Xi(h[r - 2], h[r - 1], h[r], h[r + 1], h[r + 2], h[r + 3], t), !isNaN(n[0]) && (i.push(n[0]), i.push(n[1]), i.push(h[r]), i.push(h[r + 1]), i.push(n[2]), i.push(n[3]));
  return i;
}
class Ut extends ls.Shape {
  constructor(t) {
    super(t), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(t) {
    var e = this.points(), i = e.length, r = this.tension(), n = this.closed(), a = this.bezier(), s, o, l;
    if (i) {
      if (t.beginPath(), t.moveTo(e[0], e[1]), r !== 0 && i > 4) {
        for (s = this.getTensionPoints(), o = s.length, l = n ? 0 : 4, n || t.quadraticCurveTo(s[0], s[1], s[2], s[3]); l < o - 2; )
          t.bezierCurveTo(s[l++], s[l++], s[l++], s[l++], s[l++], s[l++]);
        n || t.quadraticCurveTo(s[o - 2], s[o - 1], e[i - 2], e[i - 1]);
      } else if (a)
        for (l = 2; l < i; )
          t.bezierCurveTo(e[l++], e[l++], e[l++], e[l++], e[l++], e[l++]);
      else
        for (l = 2; l < i; l += 2)
          t.lineTo(e[l], e[l + 1]);
      n ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed() ? this._getTensionPointsClosed() : Fr(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    var t = this.points(), e = t.length, i = this.tension(), r = Xi(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], i), n = Xi(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], i), a = Fr(t, i), s = [r[2], r[3]].concat(a).concat([
      n[0],
      n[1],
      t[e - 2],
      t[e - 1],
      n[2],
      n[3],
      r[0],
      r[1],
      t[0],
      t[1]
    ]);
    return s;
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    var t = this.points();
    if (t.length < 4)
      return {
        x: t[0] || 0,
        y: t[1] || 0,
        width: 0,
        height: 0
      };
    this.tension() !== 0 ? t = [
      t[0],
      t[1],
      ...this._getTensionPoints(),
      t[t.length - 2],
      t[t.length - 1]
    ] : t = this.points();
    for (var e = t[0], i = t[0], r = t[1], n = t[1], a, s, o = 0; o < t.length / 2; o++)
      a = t[o * 2], s = t[o * 2 + 1], e = Math.min(e, a), i = Math.max(i, a), r = Math.min(r, s), n = Math.max(n, s);
    return {
      x: e,
      y: r,
      width: i - e,
      height: n - r
    };
  }
}
Pe.Line = Ut;
Ut.prototype.className = "Line";
Ut.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, ds._registerNode)(Ut);
Je.Factory.addGetterSetter(Ut, "closed", !1);
Je.Factory.addGetterSetter(Ut, "bezier", !1);
Je.Factory.addGetterSetter(Ut, "tension", 0, (0, fn.getNumberValidator)());
Je.Factory.addGetterSetter(Ut, "points", [], (0, fn.getNumberArrayValidator)());
var ve = {}, gn = {};
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 }), h.t2length = h.getQuadraticArcLength = h.getCubicArcLength = h.binomialCoefficients = h.cValues = h.tValues = void 0, h.tValues = [
    [],
    [],
    [
      -0.5773502691896257,
      0.5773502691896257
    ],
    [
      0,
      -0.7745966692414834,
      0.7745966692414834
    ],
    [
      -0.33998104358485626,
      0.33998104358485626,
      -0.8611363115940526,
      0.8611363115940526
    ],
    [
      0,
      -0.5384693101056831,
      0.5384693101056831,
      -0.906179845938664,
      0.906179845938664
    ],
    [
      0.6612093864662645,
      -0.6612093864662645,
      -0.2386191860831969,
      0.2386191860831969,
      -0.932469514203152,
      0.932469514203152
    ],
    [
      0,
      0.4058451513773972,
      -0.4058451513773972,
      -0.7415311855993945,
      0.7415311855993945,
      -0.9491079123427585,
      0.9491079123427585
    ],
    [
      -0.1834346424956498,
      0.1834346424956498,
      -0.525532409916329,
      0.525532409916329,
      -0.7966664774136267,
      0.7966664774136267,
      -0.9602898564975363,
      0.9602898564975363
    ],
    [
      0,
      -0.8360311073266358,
      0.8360311073266358,
      -0.9681602395076261,
      0.9681602395076261,
      -0.3242534234038089,
      0.3242534234038089,
      -0.6133714327005904,
      0.6133714327005904
    ],
    [
      -0.14887433898163122,
      0.14887433898163122,
      -0.4333953941292472,
      0.4333953941292472,
      -0.6794095682990244,
      0.6794095682990244,
      -0.8650633666889845,
      0.8650633666889845,
      -0.9739065285171717,
      0.9739065285171717
    ],
    [
      0,
      -0.26954315595234496,
      0.26954315595234496,
      -0.5190961292068118,
      0.5190961292068118,
      -0.7301520055740494,
      0.7301520055740494,
      -0.8870625997680953,
      0.8870625997680953,
      -0.978228658146057,
      0.978228658146057
    ],
    [
      -0.1252334085114689,
      0.1252334085114689,
      -0.3678314989981802,
      0.3678314989981802,
      -0.5873179542866175,
      0.5873179542866175,
      -0.7699026741943047,
      0.7699026741943047,
      -0.9041172563704749,
      0.9041172563704749,
      -0.9815606342467192,
      0.9815606342467192
    ],
    [
      0,
      -0.2304583159551348,
      0.2304583159551348,
      -0.44849275103644687,
      0.44849275103644687,
      -0.6423493394403402,
      0.6423493394403402,
      -0.8015780907333099,
      0.8015780907333099,
      -0.9175983992229779,
      0.9175983992229779,
      -0.9841830547185881,
      0.9841830547185881
    ],
    [
      -0.10805494870734367,
      0.10805494870734367,
      -0.31911236892788974,
      0.31911236892788974,
      -0.5152486363581541,
      0.5152486363581541,
      -0.6872929048116855,
      0.6872929048116855,
      -0.827201315069765,
      0.827201315069765,
      -0.9284348836635735,
      0.9284348836635735,
      -0.9862838086968123,
      0.9862838086968123
    ],
    [
      0,
      -0.20119409399743451,
      0.20119409399743451,
      -0.3941513470775634,
      0.3941513470775634,
      -0.5709721726085388,
      0.5709721726085388,
      -0.7244177313601701,
      0.7244177313601701,
      -0.8482065834104272,
      0.8482065834104272,
      -0.937273392400706,
      0.937273392400706,
      -0.9879925180204854,
      0.9879925180204854
    ],
    [
      -0.09501250983763744,
      0.09501250983763744,
      -0.2816035507792589,
      0.2816035507792589,
      -0.45801677765722737,
      0.45801677765722737,
      -0.6178762444026438,
      0.6178762444026438,
      -0.755404408355003,
      0.755404408355003,
      -0.8656312023878318,
      0.8656312023878318,
      -0.9445750230732326,
      0.9445750230732326,
      -0.9894009349916499,
      0.9894009349916499
    ],
    [
      0,
      -0.17848418149584785,
      0.17848418149584785,
      -0.3512317634538763,
      0.3512317634538763,
      -0.5126905370864769,
      0.5126905370864769,
      -0.6576711592166907,
      0.6576711592166907,
      -0.7815140038968014,
      0.7815140038968014,
      -0.8802391537269859,
      0.8802391537269859,
      -0.9506755217687678,
      0.9506755217687678,
      -0.9905754753144174,
      0.9905754753144174
    ],
    [
      -0.0847750130417353,
      0.0847750130417353,
      -0.2518862256915055,
      0.2518862256915055,
      -0.41175116146284263,
      0.41175116146284263,
      -0.5597708310739475,
      0.5597708310739475,
      -0.6916870430603532,
      0.6916870430603532,
      -0.8037049589725231,
      0.8037049589725231,
      -0.8926024664975557,
      0.8926024664975557,
      -0.9558239495713977,
      0.9558239495713977,
      -0.9915651684209309,
      0.9915651684209309
    ],
    [
      0,
      -0.16035864564022537,
      0.16035864564022537,
      -0.31656409996362983,
      0.31656409996362983,
      -0.46457074137596094,
      0.46457074137596094,
      -0.600545304661681,
      0.600545304661681,
      -0.7209661773352294,
      0.7209661773352294,
      -0.8227146565371428,
      0.8227146565371428,
      -0.9031559036148179,
      0.9031559036148179,
      -0.96020815213483,
      0.96020815213483,
      -0.9924068438435844,
      0.9924068438435844
    ],
    [
      -0.07652652113349734,
      0.07652652113349734,
      -0.22778585114164507,
      0.22778585114164507,
      -0.37370608871541955,
      0.37370608871541955,
      -0.5108670019508271,
      0.5108670019508271,
      -0.636053680726515,
      0.636053680726515,
      -0.7463319064601508,
      0.7463319064601508,
      -0.8391169718222188,
      0.8391169718222188,
      -0.912234428251326,
      0.912234428251326,
      -0.9639719272779138,
      0.9639719272779138,
      -0.9931285991850949,
      0.9931285991850949
    ],
    [
      0,
      -0.1455618541608951,
      0.1455618541608951,
      -0.2880213168024011,
      0.2880213168024011,
      -0.4243421202074388,
      0.4243421202074388,
      -0.5516188358872198,
      0.5516188358872198,
      -0.6671388041974123,
      0.6671388041974123,
      -0.7684399634756779,
      0.7684399634756779,
      -0.8533633645833173,
      0.8533633645833173,
      -0.9200993341504008,
      0.9200993341504008,
      -0.9672268385663063,
      0.9672268385663063,
      -0.9937521706203895,
      0.9937521706203895
    ],
    [
      -0.06973927331972223,
      0.06973927331972223,
      -0.20786042668822127,
      0.20786042668822127,
      -0.34193582089208424,
      0.34193582089208424,
      -0.469355837986757,
      0.469355837986757,
      -0.5876404035069116,
      0.5876404035069116,
      -0.6944872631866827,
      0.6944872631866827,
      -0.7878168059792081,
      0.7878168059792081,
      -0.8658125777203002,
      0.8658125777203002,
      -0.926956772187174,
      0.926956772187174,
      -0.9700604978354287,
      0.9700604978354287,
      -0.9942945854823992,
      0.9942945854823992
    ],
    [
      0,
      -0.1332568242984661,
      0.1332568242984661,
      -0.26413568097034495,
      0.26413568097034495,
      -0.3903010380302908,
      0.3903010380302908,
      -0.5095014778460075,
      0.5095014778460075,
      -0.6196098757636461,
      0.6196098757636461,
      -0.7186613631319502,
      0.7186613631319502,
      -0.8048884016188399,
      0.8048884016188399,
      -0.8767523582704416,
      0.8767523582704416,
      -0.9329710868260161,
      0.9329710868260161,
      -0.9725424712181152,
      0.9725424712181152,
      -0.9947693349975522,
      0.9947693349975522
    ],
    [
      -0.06405689286260563,
      0.06405689286260563,
      -0.1911188674736163,
      0.1911188674736163,
      -0.3150426796961634,
      0.3150426796961634,
      -0.4337935076260451,
      0.4337935076260451,
      -0.5454214713888396,
      0.5454214713888396,
      -0.6480936519369755,
      0.6480936519369755,
      -0.7401241915785544,
      0.7401241915785544,
      -0.820001985973903,
      0.820001985973903,
      -0.8864155270044011,
      0.8864155270044011,
      -0.9382745520027328,
      0.9382745520027328,
      -0.9747285559713095,
      0.9747285559713095,
      -0.9951872199970213,
      0.9951872199970213
    ]
  ], h.cValues = [
    [],
    [],
    [1, 1],
    [
      0.8888888888888888,
      0.5555555555555556,
      0.5555555555555556
    ],
    [
      0.6521451548625461,
      0.6521451548625461,
      0.34785484513745385,
      0.34785484513745385
    ],
    [
      0.5688888888888889,
      0.47862867049936647,
      0.47862867049936647,
      0.23692688505618908,
      0.23692688505618908
    ],
    [
      0.3607615730481386,
      0.3607615730481386,
      0.46791393457269104,
      0.46791393457269104,
      0.17132449237917036,
      0.17132449237917036
    ],
    [
      0.4179591836734694,
      0.3818300505051189,
      0.3818300505051189,
      0.27970539148927664,
      0.27970539148927664,
      0.1294849661688697,
      0.1294849661688697
    ],
    [
      0.362683783378362,
      0.362683783378362,
      0.31370664587788727,
      0.31370664587788727,
      0.22238103445337448,
      0.22238103445337448,
      0.10122853629037626,
      0.10122853629037626
    ],
    [
      0.3302393550012598,
      0.1806481606948574,
      0.1806481606948574,
      0.08127438836157441,
      0.08127438836157441,
      0.31234707704000286,
      0.31234707704000286,
      0.26061069640293544,
      0.26061069640293544
    ],
    [
      0.29552422471475287,
      0.29552422471475287,
      0.26926671930999635,
      0.26926671930999635,
      0.21908636251598204,
      0.21908636251598204,
      0.1494513491505806,
      0.1494513491505806,
      0.06667134430868814,
      0.06667134430868814
    ],
    [
      0.2729250867779006,
      0.26280454451024665,
      0.26280454451024665,
      0.23319376459199048,
      0.23319376459199048,
      0.18629021092773426,
      0.18629021092773426,
      0.1255803694649046,
      0.1255803694649046,
      0.05566856711617366,
      0.05566856711617366
    ],
    [
      0.24914704581340277,
      0.24914704581340277,
      0.2334925365383548,
      0.2334925365383548,
      0.20316742672306592,
      0.20316742672306592,
      0.16007832854334622,
      0.16007832854334622,
      0.10693932599531843,
      0.10693932599531843,
      0.04717533638651183,
      0.04717533638651183
    ],
    [
      0.2325515532308739,
      0.22628318026289723,
      0.22628318026289723,
      0.2078160475368885,
      0.2078160475368885,
      0.17814598076194574,
      0.17814598076194574,
      0.13887351021978725,
      0.13887351021978725,
      0.09212149983772845,
      0.09212149983772845,
      0.04048400476531588,
      0.04048400476531588
    ],
    [
      0.2152638534631578,
      0.2152638534631578,
      0.2051984637212956,
      0.2051984637212956,
      0.18553839747793782,
      0.18553839747793782,
      0.15720316715819355,
      0.15720316715819355,
      0.12151857068790319,
      0.12151857068790319,
      0.08015808715976021,
      0.08015808715976021,
      0.03511946033175186,
      0.03511946033175186
    ],
    [
      0.2025782419255613,
      0.19843148532711158,
      0.19843148532711158,
      0.1861610000155622,
      0.1861610000155622,
      0.16626920581699392,
      0.16626920581699392,
      0.13957067792615432,
      0.13957067792615432,
      0.10715922046717194,
      0.10715922046717194,
      0.07036604748810812,
      0.07036604748810812,
      0.03075324199611727,
      0.03075324199611727
    ],
    [
      0.1894506104550685,
      0.1894506104550685,
      0.18260341504492358,
      0.18260341504492358,
      0.16915651939500254,
      0.16915651939500254,
      0.14959598881657674,
      0.14959598881657674,
      0.12462897125553388,
      0.12462897125553388,
      0.09515851168249279,
      0.09515851168249279,
      0.062253523938647894,
      0.062253523938647894,
      0.027152459411754096,
      0.027152459411754096
    ],
    [
      0.17944647035620653,
      0.17656270536699264,
      0.17656270536699264,
      0.16800410215645004,
      0.16800410215645004,
      0.15404576107681028,
      0.15404576107681028,
      0.13513636846852548,
      0.13513636846852548,
      0.11188384719340397,
      0.11188384719340397,
      0.08503614831717918,
      0.08503614831717918,
      0.0554595293739872,
      0.0554595293739872,
      0.02414830286854793,
      0.02414830286854793
    ],
    [
      0.1691423829631436,
      0.1691423829631436,
      0.16427648374583273,
      0.16427648374583273,
      0.15468467512626524,
      0.15468467512626524,
      0.14064291467065065,
      0.14064291467065065,
      0.12255520671147846,
      0.12255520671147846,
      0.10094204410628717,
      0.10094204410628717,
      0.07642573025488905,
      0.07642573025488905,
      0.0497145488949698,
      0.0497145488949698,
      0.02161601352648331,
      0.02161601352648331
    ],
    [
      0.1610544498487837,
      0.15896884339395434,
      0.15896884339395434,
      0.15276604206585967,
      0.15276604206585967,
      0.1426067021736066,
      0.1426067021736066,
      0.12875396253933621,
      0.12875396253933621,
      0.11156664554733399,
      0.11156664554733399,
      0.09149002162245,
      0.09149002162245,
      0.06904454273764123,
      0.06904454273764123,
      0.0448142267656996,
      0.0448142267656996,
      0.019461788229726478,
      0.019461788229726478
    ],
    [
      0.15275338713072584,
      0.15275338713072584,
      0.14917298647260374,
      0.14917298647260374,
      0.14209610931838204,
      0.14209610931838204,
      0.13168863844917664,
      0.13168863844917664,
      0.11819453196151841,
      0.11819453196151841,
      0.10193011981724044,
      0.10193011981724044,
      0.08327674157670475,
      0.08327674157670475,
      0.06267204833410907,
      0.06267204833410907,
      0.04060142980038694,
      0.04060142980038694,
      0.017614007139152118,
      0.017614007139152118
    ],
    [
      0.14608113364969041,
      0.14452440398997005,
      0.14452440398997005,
      0.13988739479107315,
      0.13988739479107315,
      0.13226893863333747,
      0.13226893863333747,
      0.12183141605372853,
      0.12183141605372853,
      0.10879729916714838,
      0.10879729916714838,
      0.09344442345603386,
      0.09344442345603386,
      0.0761001136283793,
      0.0761001136283793,
      0.057134425426857205,
      0.057134425426857205,
      0.036953789770852494,
      0.036953789770852494,
      0.016017228257774335,
      0.016017228257774335
    ],
    [
      0.13925187285563198,
      0.13925187285563198,
      0.13654149834601517,
      0.13654149834601517,
      0.13117350478706238,
      0.13117350478706238,
      0.12325237681051242,
      0.12325237681051242,
      0.11293229608053922,
      0.11293229608053922,
      0.10041414444288096,
      0.10041414444288096,
      0.08594160621706773,
      0.08594160621706773,
      0.06979646842452049,
      0.06979646842452049,
      0.052293335152683286,
      0.052293335152683286,
      0.03377490158481415,
      0.03377490158481415,
      0.0146279952982722,
      0.0146279952982722
    ],
    [
      0.13365457218610619,
      0.1324620394046966,
      0.1324620394046966,
      0.12890572218808216,
      0.12890572218808216,
      0.12304908430672953,
      0.12304908430672953,
      0.11499664022241136,
      0.11499664022241136,
      0.10489209146454141,
      0.10489209146454141,
      0.09291576606003515,
      0.09291576606003515,
      0.07928141177671895,
      0.07928141177671895,
      0.06423242140852585,
      0.06423242140852585,
      0.04803767173108467,
      0.04803767173108467,
      0.030988005856979445,
      0.030988005856979445,
      0.013411859487141771,
      0.013411859487141771
    ],
    [
      0.12793819534675216,
      0.12793819534675216,
      0.1258374563468283,
      0.1258374563468283,
      0.12167047292780339,
      0.12167047292780339,
      0.1155056680537256,
      0.1155056680537256,
      0.10744427011596563,
      0.10744427011596563,
      0.09761865210411388,
      0.09761865210411388,
      0.08619016153195327,
      0.08619016153195327,
      0.0733464814110803,
      0.0733464814110803,
      0.05929858491543678,
      0.05929858491543678,
      0.04427743881741981,
      0.04427743881741981,
      0.028531388628933663,
      0.028531388628933663,
      0.0123412297999872,
      0.0123412297999872
    ]
  ], h.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
  const t = (a, s, o) => {
    let l, u, _;
    l = o / 2, u = 0;
    for (let f = 0; f < 20; f++)
      _ = l * h.tValues[20][f] + l, u += h.cValues[20][f] * i(a, s, _);
    return l * u;
  };
  h.getCubicArcLength = t;
  const e = (a, s, o) => {
    o === void 0 && (o = 1);
    const l = a[0] - 2 * a[1] + a[2], u = s[0] - 2 * s[1] + s[2], _ = 2 * a[1] - 2 * a[0], g = 2 * s[1] - 2 * s[0], f = 4 * (l * l + u * u), c = 4 * (l * _ + u * g), p = _ * _ + g * g;
    if (f === 0)
      return o * Math.sqrt(Math.pow(a[2] - a[0], 2) + Math.pow(s[2] - s[0], 2));
    const m = c / (2 * f), C = p / f, P = o + m, d = C - m * m, v = P * P + d > 0 ? Math.sqrt(P * P + d) : 0, y = m * m + d > 0 ? Math.sqrt(m * m + d) : 0, x = m + Math.sqrt(m * m + d) !== 0 ? d * Math.log(Math.abs((P + v) / (m + y))) : 0;
    return Math.sqrt(f) / 2 * (P * v - m * y + x);
  };
  h.getQuadraticArcLength = e;
  function i(a, s, o) {
    const l = r(1, o, a), u = r(1, o, s), _ = l * l + u * u;
    return Math.sqrt(_);
  }
  const r = (a, s, o) => {
    const l = o.length - 1;
    let u, _;
    if (l === 0)
      return 0;
    if (a === 0) {
      _ = 0;
      for (let g = 0; g <= l; g++)
        _ += h.binomialCoefficients[l][g] * Math.pow(1 - s, l - g) * Math.pow(s, g) * o[g];
      return _;
    } else {
      u = new Array(l);
      for (let g = 0; g < l; g++)
        u[g] = l * (o[g + 1] - o[g]);
      return r(a - 1, s, u);
    }
  }, n = (a, s, o) => {
    let l = 1, u = a / s, _ = (a - o(u)) / s, g = 0;
    for (; l > 1e-3; ) {
      const f = o(u + _), c = Math.abs(a - f) / s;
      if (c < l)
        l = c, u += _;
      else {
        const p = o(u - _), m = Math.abs(a - p) / s;
        m < l ? (l = m, u -= _) : _ /= 2;
      }
      if (g++, g > 500)
        break;
    }
    return u;
  };
  h.t2length = n;
})(gn);
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.Path = void 0;
const cs = z, us = ft, fs = X, se = gn;
class ut extends us.Shape {
  constructor(t) {
    super(t), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute();
    });
  }
  _readDataAttribute() {
    this.dataArray = ut.parsePathData(this.data()), this.pathLength = ut.getPathLength(this.dataArray);
  }
  _sceneFunc(t) {
    var e = this.dataArray;
    t.beginPath();
    for (var i = !1, r = 0; r < e.length; r++) {
      var n = e[r].command, a = e[r].points;
      switch (n) {
        case "L":
          t.lineTo(a[0], a[1]);
          break;
        case "M":
          t.moveTo(a[0], a[1]);
          break;
        case "C":
          t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          break;
        case "Q":
          t.quadraticCurveTo(a[0], a[1], a[2], a[3]);
          break;
        case "A":
          var s = a[0], o = a[1], l = a[2], u = a[3], _ = a[4], g = a[5], f = a[6], c = a[7], p = l > u ? l : u, m = l > u ? 1 : l / u, C = l > u ? u / l : 1;
          t.translate(s, o), t.rotate(f), t.scale(m, C), t.arc(0, 0, p, _, _ + g, 1 - c), t.scale(1 / m, 1 / C), t.rotate(-f), t.translate(-s, -o);
          break;
        case "z":
          i = !0, t.closePath();
          break;
      }
    }
    !i && !this.hasFill() ? t.strokeShape(this) : t.fillStrokeShape(this);
  }
  getSelfRect() {
    var t = [];
    this.dataArray.forEach(function(l) {
      if (l.command === "A") {
        var u = l.points[4], _ = l.points[5], g = l.points[4] + _, f = Math.PI / 180;
        if (Math.abs(u - g) < f && (f = Math.abs(u - g)), _ < 0)
          for (let c = u - f; c > g; c -= f) {
            const p = ut.getPointOnEllipticalArc(l.points[0], l.points[1], l.points[2], l.points[3], c, 0);
            t.push(p.x, p.y);
          }
        else
          for (let c = u + f; c < g; c += f) {
            const p = ut.getPointOnEllipticalArc(l.points[0], l.points[1], l.points[2], l.points[3], c, 0);
            t.push(p.x, p.y);
          }
      } else if (l.command === "C")
        for (let c = 0; c <= 1; c += 0.01) {
          const p = ut.getPointOnCubicBezier(c, l.start.x, l.start.y, l.points[0], l.points[1], l.points[2], l.points[3], l.points[4], l.points[5]);
          t.push(p.x, p.y);
        }
      else
        t = t.concat(l.points);
    });
    for (var e = t[0], i = t[0], r = t[1], n = t[1], a, s, o = 0; o < t.length / 2; o++)
      a = t[o * 2], s = t[o * 2 + 1], isNaN(a) || (e = Math.min(e, a), i = Math.max(i, a)), isNaN(s) || (r = Math.min(r, s), n = Math.max(n, s));
    return {
      x: e,
      y: r,
      width: i - e,
      height: n - r
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(t) {
    return ut.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  static getLineLength(t, e, i, r) {
    return Math.sqrt((i - t) * (i - t) + (r - e) * (r - e));
  }
  static getPathLength(t) {
    let e = 0;
    for (var i = 0; i < t.length; ++i)
      e += t[i].pathLength;
    return e;
  }
  static getPointAtLengthOfDataArray(t, e) {
    var i, r = 0, n = e.length;
    if (!n)
      return null;
    for (; r < n && t > e[r].pathLength; )
      t -= e[r].pathLength, ++r;
    if (r === n)
      return i = e[r - 1].points.slice(-2), {
        x: i[0],
        y: i[1]
      };
    if (t < 0.01)
      return i = e[r].points.slice(0, 2), {
        x: i[0],
        y: i[1]
      };
    var a = e[r], s = a.points;
    switch (a.command) {
      case "L":
        return ut.getPointOnLine(t, a.start.x, a.start.y, s[0], s[1]);
      case "C":
        return ut.getPointOnCubicBezier((0, se.t2length)(t, ut.getPathLength(e), (p) => (0, se.getCubicArcLength)([a.start.x, s[0], s[2], s[4]], [a.start.y, s[1], s[3], s[5]], p)), a.start.x, a.start.y, s[0], s[1], s[2], s[3], s[4], s[5]);
      case "Q":
        return ut.getPointOnQuadraticBezier((0, se.t2length)(t, ut.getPathLength(e), (p) => (0, se.getQuadraticArcLength)([a.start.x, s[0], s[2]], [a.start.y, s[1], s[3]], p)), a.start.x, a.start.y, s[0], s[1], s[2], s[3]);
      case "A":
        var o = s[0], l = s[1], u = s[2], _ = s[3], g = s[4], f = s[5], c = s[6];
        return g += f * t / a.pathLength, ut.getPointOnEllipticalArc(o, l, u, _, g, c);
    }
    return null;
  }
  static getPointOnLine(t, e, i, r, n, a, s) {
    a === void 0 && (a = e), s === void 0 && (s = i);
    var o = (n - i) / (r - e + 1e-8), l = Math.sqrt(t * t / (1 + o * o));
    r < e && (l *= -1);
    var u = o * l, _;
    if (r === e)
      _ = {
        x: a,
        y: s + u
      };
    else if ((s - i) / (a - e + 1e-8) === o)
      _ = {
        x: a + l,
        y: s + u
      };
    else {
      var g, f, c = this.getLineLength(e, i, r, n), p = (a - e) * (r - e) + (s - i) * (n - i);
      p = p / (c * c), g = e + p * (r - e), f = i + p * (n - i);
      var m = this.getLineLength(a, s, g, f), C = Math.sqrt(t * t - m * m);
      l = Math.sqrt(C * C / (1 + o * o)), r < e && (l *= -1), u = o * l, _ = {
        x: g + l,
        y: f + u
      };
    }
    return _;
  }
  static getPointOnCubicBezier(t, e, i, r, n, a, s, o, l) {
    function u(m) {
      return m * m * m;
    }
    function _(m) {
      return 3 * m * m * (1 - m);
    }
    function g(m) {
      return 3 * m * (1 - m) * (1 - m);
    }
    function f(m) {
      return (1 - m) * (1 - m) * (1 - m);
    }
    var c = o * u(t) + a * _(t) + r * g(t) + e * f(t), p = l * u(t) + s * _(t) + n * g(t) + i * f(t);
    return {
      x: c,
      y: p
    };
  }
  static getPointOnQuadraticBezier(t, e, i, r, n, a, s) {
    function o(f) {
      return f * f;
    }
    function l(f) {
      return 2 * f * (1 - f);
    }
    function u(f) {
      return (1 - f) * (1 - f);
    }
    var _ = a * o(t) + r * l(t) + e * u(t), g = s * o(t) + n * l(t) + i * u(t);
    return {
      x: _,
      y: g
    };
  }
  static getPointOnEllipticalArc(t, e, i, r, n, a) {
    var s = Math.cos(a), o = Math.sin(a), l = {
      x: i * Math.cos(n),
      y: r * Math.sin(n)
    };
    return {
      x: t + (l.x * s - l.y * o),
      y: e + (l.x * o + l.y * s)
    };
  }
  static parsePathData(t) {
    if (!t)
      return [];
    var e = t, i = [
      "m",
      "M",
      "l",
      "L",
      "v",
      "V",
      "h",
      "H",
      "z",
      "Z",
      "c",
      "C",
      "q",
      "Q",
      "t",
      "T",
      "s",
      "S",
      "a",
      "A"
    ];
    e = e.replace(new RegExp(" ", "g"), ",");
    for (var r = 0; r < i.length; r++)
      e = e.replace(new RegExp(i[r], "g"), "|" + i[r]);
    var n = e.split("|"), a = [], s = [], o = 0, l = 0, u = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi, _;
    for (r = 1; r < n.length; r++) {
      var g = n[r], f = g.charAt(0);
      for (g = g.slice(1), s.length = 0; _ = u.exec(g); )
        s.push(_[0]);
      for (var c = [], p = 0, m = s.length; p < m; p++) {
        if (s[p] === "00") {
          c.push(0, 0);
          continue;
        }
        var C = parseFloat(s[p]);
        isNaN(C) ? c.push(0) : c.push(C);
      }
      for (; c.length > 0 && !isNaN(c[0]); ) {
        var P = "", d = [], v = o, y = l, x, T, b, E, w, k, M, F, N, D;
        switch (f) {
          case "l":
            o += c.shift(), l += c.shift(), P = "L", d.push(o, l);
            break;
          case "L":
            o = c.shift(), l = c.shift(), d.push(o, l);
            break;
          case "m":
            var H = c.shift(), W = c.shift();
            if (o += H, l += W, P = "M", a.length > 2 && a[a.length - 1].command === "z") {
              for (var Y = a.length - 2; Y >= 0; Y--)
                if (a[Y].command === "M") {
                  o = a[Y].points[0] + H, l = a[Y].points[1] + W;
                  break;
                }
            }
            d.push(o, l), f = "l";
            break;
          case "M":
            o = c.shift(), l = c.shift(), P = "M", d.push(o, l), f = "L";
            break;
          case "h":
            o += c.shift(), P = "L", d.push(o, l);
            break;
          case "H":
            o = c.shift(), P = "L", d.push(o, l);
            break;
          case "v":
            l += c.shift(), P = "L", d.push(o, l);
            break;
          case "V":
            l = c.shift(), P = "L", d.push(o, l);
            break;
          case "C":
            d.push(c.shift(), c.shift(), c.shift(), c.shift()), o = c.shift(), l = c.shift(), d.push(o, l);
            break;
          case "c":
            d.push(o + c.shift(), l + c.shift(), o + c.shift(), l + c.shift()), o += c.shift(), l += c.shift(), P = "C", d.push(o, l);
            break;
          case "S":
            T = o, b = l, x = a[a.length - 1], x.command === "C" && (T = o + (o - x.points[2]), b = l + (l - x.points[3])), d.push(T, b, c.shift(), c.shift()), o = c.shift(), l = c.shift(), P = "C", d.push(o, l);
            break;
          case "s":
            T = o, b = l, x = a[a.length - 1], x.command === "C" && (T = o + (o - x.points[2]), b = l + (l - x.points[3])), d.push(T, b, o + c.shift(), l + c.shift()), o += c.shift(), l += c.shift(), P = "C", d.push(o, l);
            break;
          case "Q":
            d.push(c.shift(), c.shift()), o = c.shift(), l = c.shift(), d.push(o, l);
            break;
          case "q":
            d.push(o + c.shift(), l + c.shift()), o += c.shift(), l += c.shift(), P = "Q", d.push(o, l);
            break;
          case "T":
            T = o, b = l, x = a[a.length - 1], x.command === "Q" && (T = o + (o - x.points[0]), b = l + (l - x.points[1])), o = c.shift(), l = c.shift(), P = "Q", d.push(T, b, o, l);
            break;
          case "t":
            T = o, b = l, x = a[a.length - 1], x.command === "Q" && (T = o + (o - x.points[0]), b = l + (l - x.points[1])), o += c.shift(), l += c.shift(), P = "Q", d.push(T, b, o, l);
            break;
          case "A":
            E = c.shift(), w = c.shift(), k = c.shift(), M = c.shift(), F = c.shift(), N = o, D = l, o = c.shift(), l = c.shift(), P = "A", d = this.convertEndpointToCenterParameterization(N, D, o, l, M, F, E, w, k);
            break;
          case "a":
            E = c.shift(), w = c.shift(), k = c.shift(), M = c.shift(), F = c.shift(), N = o, D = l, o += c.shift(), l += c.shift(), P = "A", d = this.convertEndpointToCenterParameterization(N, D, o, l, M, F, E, w, k);
            break;
        }
        a.push({
          command: P || f,
          points: d,
          start: {
            x: v,
            y
          },
          pathLength: this.calcLength(v, y, P || f, d)
        });
      }
      (f === "z" || f === "Z") && a.push({
        command: "z",
        points: [],
        start: void 0,
        pathLength: 0
      });
    }
    return a;
  }
  static calcLength(t, e, i, r) {
    var n, a, s, o, l = ut;
    switch (i) {
      case "L":
        return l.getLineLength(t, e, r[0], r[1]);
      case "C":
        return (0, se.getCubicArcLength)([t, r[0], r[2], r[4]], [e, r[1], r[3], r[5]], 1);
      case "Q":
        return (0, se.getQuadraticArcLength)([t, r[0], r[2]], [e, r[1], r[3]], 1);
      case "A":
        n = 0;
        var u = r[4], _ = r[5], g = r[4] + _, f = Math.PI / 180;
        if (Math.abs(u - g) < f && (f = Math.abs(u - g)), a = l.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], u, 0), _ < 0)
          for (o = u - f; o > g; o -= f)
            s = l.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], o, 0), n += l.getLineLength(a.x, a.y, s.x, s.y), a = s;
        else
          for (o = u + f; o < g; o += f)
            s = l.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], o, 0), n += l.getLineLength(a.x, a.y, s.x, s.y), a = s;
        return s = l.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], g, 0), n += l.getLineLength(a.x, a.y, s.x, s.y), n;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(t, e, i, r, n, a, s, o, l) {
    var u = l * (Math.PI / 180), _ = Math.cos(u) * (t - i) / 2 + Math.sin(u) * (e - r) / 2, g = -1 * Math.sin(u) * (t - i) / 2 + Math.cos(u) * (e - r) / 2, f = _ * _ / (s * s) + g * g / (o * o);
    f > 1 && (s *= Math.sqrt(f), o *= Math.sqrt(f));
    var c = Math.sqrt((s * s * (o * o) - s * s * (g * g) - o * o * (_ * _)) / (s * s * (g * g) + o * o * (_ * _)));
    n === a && (c *= -1), isNaN(c) && (c = 0);
    var p = c * s * g / o, m = c * -o * _ / s, C = (t + i) / 2 + Math.cos(u) * p - Math.sin(u) * m, P = (e + r) / 2 + Math.sin(u) * p + Math.cos(u) * m, d = function(w) {
      return Math.sqrt(w[0] * w[0] + w[1] * w[1]);
    }, v = function(w, k) {
      return (w[0] * k[0] + w[1] * k[1]) / (d(w) * d(k));
    }, y = function(w, k) {
      return (w[0] * k[1] < w[1] * k[0] ? -1 : 1) * Math.acos(v(w, k));
    }, x = y([1, 0], [(_ - p) / s, (g - m) / o]), T = [(_ - p) / s, (g - m) / o], b = [(-1 * _ - p) / s, (-1 * g - m) / o], E = y(T, b);
    return v(T, b) <= -1 && (E = Math.PI), v(T, b) >= 1 && (E = 0), a === 0 && E > 0 && (E = E - 2 * Math.PI), a === 1 && E < 0 && (E = E + 2 * Math.PI), [C, P, s, o, x, E, u, a];
  }
}
ve.Path = ut;
ut.prototype.className = "Path";
ut.prototype._attrsAffectingSize = ["data"];
(0, fs._registerNode)(ut);
cs.Factory.addGetterSetter(ut, "data");
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.Arrow = void 0;
const Ze = z, gs = Pe, vn = L, vs = X, Nr = ve;
class Qt extends gs.Line {
  _sceneFunc(t) {
    super._sceneFunc(t);
    var e = Math.PI * 2, i = this.points(), r = i, n = this.tension() !== 0 && i.length > 4;
    n && (r = this.getTensionPoints());
    var a = this.pointerLength(), s = i.length, o, l;
    if (n) {
      const g = [
        r[r.length - 4],
        r[r.length - 3],
        r[r.length - 2],
        r[r.length - 1],
        i[s - 2],
        i[s - 1]
      ], f = Nr.Path.calcLength(r[r.length - 4], r[r.length - 3], "C", g), c = Nr.Path.getPointOnQuadraticBezier(Math.min(1, 1 - a / f), g[0], g[1], g[2], g[3], g[4], g[5]);
      o = i[s - 2] - c.x, l = i[s - 1] - c.y;
    } else
      o = i[s - 2] - i[s - 4], l = i[s - 1] - i[s - 3];
    var u = (Math.atan2(l, o) + e) % e, _ = this.pointerWidth();
    this.pointerAtEnding() && (t.save(), t.beginPath(), t.translate(i[s - 2], i[s - 1]), t.rotate(u), t.moveTo(0, 0), t.lineTo(-a, _ / 2), t.lineTo(-a, -_ / 2), t.closePath(), t.restore(), this.__fillStroke(t)), this.pointerAtBeginning() && (t.save(), t.beginPath(), t.translate(i[0], i[1]), n ? (o = (r[0] + r[2]) / 2 - i[0], l = (r[1] + r[3]) / 2 - i[1]) : (o = i[2] - i[0], l = i[3] - i[1]), t.rotate((Math.atan2(-l, -o) + e) % e), t.moveTo(0, 0), t.lineTo(-a, _ / 2), t.lineTo(-a, -_ / 2), t.closePath(), t.restore(), this.__fillStroke(t));
  }
  __fillStroke(t) {
    var e = this.dashEnabled();
    e && (this.attrs.dashEnabled = !1, t.setLineDash([])), t.fillStrokeShape(this), e && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const t = super.getSelfRect(), e = this.pointerWidth() / 2;
    return {
      x: t.x - e,
      y: t.y - e,
      width: t.width + e * 2,
      height: t.height + e * 2
    };
  }
}
Qe.Arrow = Qt;
Qt.prototype.className = "Arrow";
(0, vs._registerNode)(Qt);
Ze.Factory.addGetterSetter(Qt, "pointerLength", 10, (0, vn.getNumberValidator)());
Ze.Factory.addGetterSetter(Qt, "pointerWidth", 10, (0, vn.getNumberValidator)());
Ze.Factory.addGetterSetter(Qt, "pointerAtBeginning", !1);
Ze.Factory.addGetterSetter(Qt, "pointerAtEnding", !0);
var ti = {};
Object.defineProperty(ti, "__esModule", { value: !0 });
ti.Circle = void 0;
const ps = z, _s = ft, ms = L, ys = X;
class pe extends _s.Shape {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
  setHeight(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
}
ti.Circle = pe;
pe.prototype._centroid = !0;
pe.prototype.className = "Circle";
pe.prototype._attrsAffectingSize = ["radius"];
(0, ys._registerNode)(pe);
ps.Factory.addGetterSetter(pe, "radius", 0, (0, ms.getNumberValidator)());
var ei = {};
Object.defineProperty(ei, "__esModule", { value: !0 });
ei.Ellipse = void 0;
const lr = z, bs = ft, pn = L, Ss = X;
class Ht extends bs.Shape {
  _sceneFunc(t) {
    var e = this.radiusX(), i = this.radiusY();
    t.beginPath(), t.save(), e !== i && t.scale(1, i / e), t.arc(0, 0, e, 0, Math.PI * 2, !1), t.restore(), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(t) {
    this.radiusX(t / 2);
  }
  setHeight(t) {
    this.radiusY(t / 2);
  }
}
ei.Ellipse = Ht;
Ht.prototype.className = "Ellipse";
Ht.prototype._centroid = !0;
Ht.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, Ss._registerNode)(Ht);
lr.Factory.addComponentsGetterSetter(Ht, "radius", ["x", "y"]);
lr.Factory.addGetterSetter(Ht, "radiusX", 0, (0, pn.getNumberValidator)());
lr.Factory.addGetterSetter(Ht, "radiusY", 0, (0, pn.getNumberValidator)());
var ii = {};
Object.defineProperty(ii, "__esModule", { value: !0 });
ii.Image = void 0;
const Bi = lt, Jt = z, Cs = ft, ws = X, ke = L;
class wt extends Cs.Shape {
  constructor(t) {
    super(t), this.on("imageChange.konva", () => {
      this._setImageLoad();
    }), this._setImageLoad();
  }
  _setImageLoad() {
    const t = this.image();
    t && t.complete || t && t.readyState === 4 || t && t.addEventListener && t.addEventListener("load", () => {
      this._requestDraw();
    });
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _sceneFunc(t) {
    const e = this.getWidth(), i = this.getHeight(), r = this.cornerRadius(), n = this.attrs.image;
    let a;
    if (n) {
      const s = this.attrs.cropWidth, o = this.attrs.cropHeight;
      s && o ? a = [
        n,
        this.cropX(),
        this.cropY(),
        s,
        o,
        0,
        0,
        e,
        i
      ] : a = [n, 0, 0, e, i];
    }
    (this.hasFill() || this.hasStroke() || r) && (t.beginPath(), r ? Bi.Util.drawRoundedRectPath(t, e, i, r) : t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this)), n && (r && t.clip(), t.drawImage.apply(t, a));
  }
  _hitFunc(t) {
    var e = this.width(), i = this.height(), r = this.cornerRadius();
    t.beginPath(), r ? Bi.Util.drawRoundedRectPath(t, e, i, r) : t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    var t, e;
    return (t = this.attrs.width) !== null && t !== void 0 ? t : (e = this.image()) === null || e === void 0 ? void 0 : e.width;
  }
  getHeight() {
    var t, e;
    return (t = this.attrs.height) !== null && t !== void 0 ? t : (e = this.image()) === null || e === void 0 ? void 0 : e.height;
  }
  static fromURL(t, e, i = null) {
    var r = Bi.Util.createImageElement();
    r.onload = function() {
      var n = new wt({
        image: r
      });
      e(n);
    }, r.onerror = i, r.crossOrigin = "Anonymous", r.src = t;
  }
}
ii.Image = wt;
wt.prototype.className = "Image";
(0, ws._registerNode)(wt);
Jt.Factory.addGetterSetter(wt, "cornerRadius", 0, (0, ke.getNumberOrArrayOfNumbersValidator)(4));
Jt.Factory.addGetterSetter(wt, "image");
Jt.Factory.addComponentsGetterSetter(wt, "crop", ["x", "y", "width", "height"]);
Jt.Factory.addGetterSetter(wt, "cropX", 0, (0, ke.getNumberValidator)());
Jt.Factory.addGetterSetter(wt, "cropY", 0, (0, ke.getNumberValidator)());
Jt.Factory.addGetterSetter(wt, "cropWidth", 0, (0, ke.getNumberValidator)());
Jt.Factory.addGetterSetter(wt, "cropHeight", 0, (0, ke.getNumberValidator)());
var he = {};
Object.defineProperty(he, "__esModule", { value: !0 });
he.Tag = he.Label = void 0;
const ri = z, xs = ft, Ps = fe, dr = L, _n = X;
var mn = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "padding",
  "lineHeight",
  "text",
  "width",
  "height",
  "pointerDirection",
  "pointerWidth",
  "pointerHeight"
], ks = "Change.konva", Es = "none", ji = "up", Ki = "right", qi = "down", Qi = "left", Ts = mn.length;
class cr extends Ps.Group {
  constructor(t) {
    super(t), this.on("add.konva", function(e) {
      this._addListeners(e.child), this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(t) {
    var e = this, i, r = function() {
      e._sync();
    };
    for (i = 0; i < Ts; i++)
      t.on(mn[i] + ks, r);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    var t = this.getText(), e = this.getTag(), i, r, n, a, s, o, l;
    if (t && e) {
      switch (i = t.width(), r = t.height(), n = e.pointerDirection(), a = e.pointerWidth(), l = e.pointerHeight(), s = 0, o = 0, n) {
        case ji:
          s = i / 2, o = -1 * l;
          break;
        case Ki:
          s = i + a, o = r / 2;
          break;
        case qi:
          s = i / 2, o = r + l;
          break;
        case Qi:
          s = -1 * a, o = r / 2;
          break;
      }
      e.setAttrs({
        x: -1 * s,
        y: -1 * o,
        width: i,
        height: r
      }), t.setAttrs({
        x: -1 * s,
        y: -1 * o
      });
    }
  }
}
he.Label = cr;
cr.prototype.className = "Label";
(0, _n._registerNode)(cr);
class Zt extends xs.Shape {
  _sceneFunc(t) {
    var e = this.width(), i = this.height(), r = this.pointerDirection(), n = this.pointerWidth(), a = this.pointerHeight(), s = this.cornerRadius();
    let o = 0, l = 0, u = 0, _ = 0;
    typeof s == "number" ? o = l = u = _ = Math.min(s, e / 2, i / 2) : (o = Math.min(s[0] || 0, e / 2, i / 2), l = Math.min(s[1] || 0, e / 2, i / 2), _ = Math.min(s[2] || 0, e / 2, i / 2), u = Math.min(s[3] || 0, e / 2, i / 2)), t.beginPath(), t.moveTo(o, 0), r === ji && (t.lineTo((e - n) / 2, 0), t.lineTo(e / 2, -1 * a), t.lineTo((e + n) / 2, 0)), t.lineTo(e - l, 0), t.arc(e - l, l, l, Math.PI * 3 / 2, 0, !1), r === Ki && (t.lineTo(e, (i - a) / 2), t.lineTo(e + n, i / 2), t.lineTo(e, (i + a) / 2)), t.lineTo(e, i - _), t.arc(e - _, i - _, _, 0, Math.PI / 2, !1), r === qi && (t.lineTo((e + n) / 2, i), t.lineTo(e / 2, i + a), t.lineTo((e - n) / 2, i)), t.lineTo(u, i), t.arc(u, i - u, u, Math.PI / 2, Math.PI, !1), r === Qi && (t.lineTo(0, (i + a) / 2), t.lineTo(-1 * n, i / 2), t.lineTo(0, (i - a) / 2)), t.lineTo(0, o), t.arc(o, o, o, Math.PI, Math.PI * 3 / 2, !1), t.closePath(), t.fillStrokeShape(this);
  }
  getSelfRect() {
    var t = 0, e = 0, i = this.pointerWidth(), r = this.pointerHeight(), n = this.pointerDirection(), a = this.width(), s = this.height();
    return n === ji ? (e -= r, s += r) : n === qi ? s += r : n === Qi ? (t -= i * 1.5, a += i) : n === Ki && (a += i * 1.5), {
      x: t,
      y: e,
      width: a,
      height: s
    };
  }
}
he.Tag = Zt;
Zt.prototype.className = "Tag";
(0, _n._registerNode)(Zt);
ri.Factory.addGetterSetter(Zt, "pointerDirection", Es);
ri.Factory.addGetterSetter(Zt, "pointerWidth", 0, (0, dr.getNumberValidator)());
ri.Factory.addGetterSetter(Zt, "pointerHeight", 0, (0, dr.getNumberValidator)());
ri.Factory.addGetterSetter(Zt, "cornerRadius", 0, (0, dr.getNumberOrArrayOfNumbersValidator)(4));
var Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.Rect = void 0;
const As = z, Ms = ft, Fs = X, Ns = lt, Rs = L;
class ni extends Ms.Shape {
  _sceneFunc(t) {
    var e = this.cornerRadius(), i = this.width(), r = this.height();
    t.beginPath(), e ? Ns.Util.drawRoundedRectPath(t, i, r, e) : t.rect(0, 0, i, r), t.closePath(), t.fillStrokeShape(this);
  }
}
Ee.Rect = ni;
ni.prototype.className = "Rect";
(0, Fs._registerNode)(ni);
As.Factory.addGetterSetter(ni, "cornerRadius", 0, (0, Rs.getNumberOrArrayOfNumbersValidator)(4));
var ai = {};
Object.defineProperty(ai, "__esModule", { value: !0 });
ai.RegularPolygon = void 0;
const yn = z, Gs = ft, bn = L, Os = X;
class te extends Gs.Shape {
  _sceneFunc(t) {
    const e = this._getPoints();
    t.beginPath(), t.moveTo(e[0].x, e[0].y);
    for (var i = 1; i < e.length; i++)
      t.lineTo(e[i].x, e[i].y);
    t.closePath(), t.fillStrokeShape(this);
  }
  _getPoints() {
    const t = this.attrs.sides, e = this.attrs.radius || 0, i = [];
    for (var r = 0; r < t; r++)
      i.push({
        x: e * Math.sin(r * 2 * Math.PI / t),
        y: -1 * e * Math.cos(r * 2 * Math.PI / t)
      });
    return i;
  }
  getSelfRect() {
    const t = this._getPoints();
    var e = t[0].x, i = t[0].y, r = t[0].x, n = t[0].y;
    return t.forEach((a) => {
      e = Math.min(e, a.x), i = Math.max(i, a.x), r = Math.min(r, a.y), n = Math.max(n, a.y);
    }), {
      x: e,
      y: r,
      width: i - e,
      height: n - r
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
ai.RegularPolygon = te;
te.prototype.className = "RegularPolygon";
te.prototype._centroid = !0;
te.prototype._attrsAffectingSize = ["radius"];
(0, Os._registerNode)(te);
yn.Factory.addGetterSetter(te, "radius", 0, (0, bn.getNumberValidator)());
yn.Factory.addGetterSetter(te, "sides", 0, (0, bn.getNumberValidator)());
var si = {};
Object.defineProperty(si, "__esModule", { value: !0 });
si.Ring = void 0;
const Sn = z, Ls = ft, Cn = L, Ds = X;
var Rr = Math.PI * 2;
class ee extends Ls.Shape {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.innerRadius(), 0, Rr, !1), t.moveTo(this.outerRadius(), 0), t.arc(0, 0, this.outerRadius(), Rr, 0, !0), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
si.Ring = ee;
ee.prototype.className = "Ring";
ee.prototype._centroid = !0;
ee.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Ds._registerNode)(ee);
Sn.Factory.addGetterSetter(ee, "innerRadius", 0, (0, Cn.getNumberValidator)());
Sn.Factory.addGetterSetter(ee, "outerRadius", 0, (0, Cn.getNumberValidator)());
var oi = {};
Object.defineProperty(oi, "__esModule", { value: !0 });
oi.Sprite = void 0;
const ie = z, Bs = ft, Is = ge, wn = L, Us = X;
class At extends Bs.Shape {
  constructor(t) {
    super(t), this._updated = !0, this.anim = new Is.Animation(() => {
      var e = this._updated;
      return this._updated = !1, e;
    }), this.on("animationChange.konva", function() {
      this.frameIndex(0);
    }), this.on("frameIndexChange.konva", function() {
      this._updated = !0;
    }), this.on("frameRateChange.konva", function() {
      this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
    });
  }
  _sceneFunc(t) {
    var e = this.animation(), i = this.frameIndex(), r = i * 4, n = this.animations()[e], a = this.frameOffsets(), s = n[r + 0], o = n[r + 1], l = n[r + 2], u = n[r + 3], _ = this.image();
    if ((this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, l, u), t.closePath(), t.fillStrokeShape(this)), _)
      if (a) {
        var g = a[e], f = i * 2;
        t.drawImage(_, s, o, l, u, g[f + 0], g[f + 1], l, u);
      } else
        t.drawImage(_, s, o, l, u, 0, 0, l, u);
  }
  _hitFunc(t) {
    var e = this.animation(), i = this.frameIndex(), r = i * 4, n = this.animations()[e], a = this.frameOffsets(), s = n[r + 2], o = n[r + 3];
    if (t.beginPath(), a) {
      var l = a[e], u = i * 2;
      t.rect(l[u + 0], l[u + 1], s, o);
    } else
      t.rect(0, 0, s, o);
    t.closePath(), t.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _setInterval() {
    var t = this;
    this.interval = setInterval(function() {
      t._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (!this.isRunning()) {
      var t = this.getLayer();
      this.anim.setLayers(t), this._setInterval(), this.anim.start();
    }
  }
  stop() {
    this.anim.stop(), clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    var t = this.frameIndex(), e = this.animation(), i = this.animations(), r = i[e], n = r.length / 4;
    t < n - 1 ? this.frameIndex(t + 1) : this.frameIndex(0);
  }
}
oi.Sprite = At;
At.prototype.className = "Sprite";
(0, Us._registerNode)(At);
ie.Factory.addGetterSetter(At, "animation");
ie.Factory.addGetterSetter(At, "animations");
ie.Factory.addGetterSetter(At, "frameOffsets");
ie.Factory.addGetterSetter(At, "image");
ie.Factory.addGetterSetter(At, "frameIndex", 0, (0, wn.getNumberValidator)());
ie.Factory.addGetterSetter(At, "frameRate", 17, (0, wn.getNumberValidator)());
ie.Factory.backCompat(At, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
var hi = {};
Object.defineProperty(hi, "__esModule", { value: !0 });
hi.Star = void 0;
const ur = z, Hs = ft, fr = L, Vs = X;
class Vt extends Hs.Shape {
  _sceneFunc(t) {
    var e = this.innerRadius(), i = this.outerRadius(), r = this.numPoints();
    t.beginPath(), t.moveTo(0, 0 - i);
    for (var n = 1; n < r * 2; n++) {
      var a = n % 2 === 0 ? i : e, s = a * Math.sin(n * Math.PI / r), o = -1 * a * Math.cos(n * Math.PI / r);
      t.lineTo(s, o);
    }
    t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
hi.Star = Vt;
Vt.prototype.className = "Star";
Vt.prototype._centroid = !0;
Vt.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Vs._registerNode)(Vt);
ur.Factory.addGetterSetter(Vt, "numPoints", 5, (0, fr.getNumberValidator)());
ur.Factory.addGetterSetter(Vt, "innerRadius", 0, (0, fr.getNumberValidator)());
ur.Factory.addGetterSetter(Vt, "outerRadius", 0, (0, fr.getNumberValidator)());
var jt = {};
Object.defineProperty(jt, "__esModule", { value: !0 });
jt.Text = jt.stringToArray = void 0;
const Ji = lt, _t = z, $s = ft, $t = L, Ws = X;
function xn(h) {
  return Array.from(h);
}
jt.stringToArray = xn;
var oe = "auto", zs = "center", Pn = "inherit", _e = "justify", Ys = "Change.konva", Xs = "2d", Gr = "-", kn = "left", js = "text", Ks = "Text", qs = "top", Qs = "bottom", Or = "middle", En = "normal", Js = "px ", Fe = " ", Zs = "right", Lr = "rtl", to = "word", eo = "char", Dr = "none", Ii = "…", Tn = [
  "direction",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
], io = Tn.length;
function ro(h) {
  return h.split(",").map((t) => {
    t = t.trim();
    const e = t.indexOf(" ") >= 0, i = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
    return e && !i && (t = `"${t}"`), t;
  }).join(", ");
}
var Ne;
function Ui() {
  return Ne || (Ne = Ji.Util.createCanvasElement().getContext(Xs), Ne);
}
function no(h) {
  h.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function ao(h) {
  h.setAttr("miterLimit", 2), h.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function so(h) {
  return h = h || {}, !h.fillLinearGradientColorStops && !h.fillRadialGradientColorStops && !h.fillPatternImage && (h.fill = h.fill || "black"), h;
}
class dt extends $s.Shape {
  constructor(t) {
    super(so(t)), this._partialTextX = 0, this._partialTextY = 0;
    for (var e = 0; e < io; e++)
      this.on(Tn[e] + Ys, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(t) {
    var e = this.textArr, i = e.length;
    if (this.text()) {
      var r = this.padding(), n = this.fontSize(), a = this.lineHeight() * n, s = this.verticalAlign(), o = this.direction(), l = 0, u = this.align(), _ = this.getWidth(), g = this.letterSpacing(), f = this.fill(), c = this.textDecoration(), p = c.indexOf("underline") !== -1, m = c.indexOf("line-through") !== -1, C;
      o = o === Pn ? t.direction : o;
      var P = 0, P = a / 2, d = 0, v = 0;
      for (o === Lr && t.setAttr("direction", o), t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", Or), t.setAttr("textAlign", kn), s === Or ? l = (this.getHeight() - i * a - r * 2) / 2 : s === Qs && (l = this.getHeight() - i * a - r * 2), t.translate(r, l + r), C = 0; C < i; C++) {
        var d = 0, v = 0, y = e[C], x = y.text, T = y.width, b = y.lastInParagraph, E, w, k;
        if (t.save(), u === Zs ? d += _ - T - r * 2 : u === zs && (d += (_ - T - r * 2) / 2), p) {
          t.save(), t.beginPath(), t.moveTo(d, P + v + Math.round(n / 2)), E = x.split(" ").length - 1, w = E === 0, k = u === _e && !b ? _ - r * 2 : T, t.lineTo(d + Math.round(k), P + v + Math.round(n / 2)), t.lineWidth = n / 15;
          const W = this._getLinearGradient();
          t.strokeStyle = W || f, t.stroke(), t.restore();
        }
        if (m) {
          t.save(), t.beginPath(), t.moveTo(d, P + v), E = x.split(" ").length - 1, w = E === 0, k = u === _e && b && !w ? _ - r * 2 : T, t.lineTo(d + Math.round(k), P + v), t.lineWidth = n / 15;
          const W = this._getLinearGradient();
          t.strokeStyle = W || f, t.stroke(), t.restore();
        }
        if (o !== Lr && (g !== 0 || u === _e)) {
          E = x.split(" ").length - 1;
          for (var M = xn(x), F = 0; F < M.length; F++) {
            var N = M[F];
            N === " " && !b && u === _e && (d += (_ - r * 2 - T) / E), this._partialTextX = d, this._partialTextY = P + v, this._partialText = N, t.fillStrokeShape(this), d += this.measureSize(N).width + g;
          }
        } else
          g !== 0 && t.setAttr("letterSpacing", `${g}px`), this._partialTextX = d, this._partialTextY = P + v, this._partialText = x, t.fillStrokeShape(this);
        t.restore(), i > 1 && (P += a);
      }
    }
  }
  _hitFunc(t) {
    var e = this.getWidth(), i = this.getHeight();
    t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this);
  }
  setText(t) {
    var e = Ji.Util._isString(t) ? t : t == null ? "" : t + "";
    return this._setAttr(js, e), this;
  }
  getWidth() {
    var t = this.attrs.width === oe || this.attrs.width === void 0;
    return t ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    var t = this.attrs.height === oe || this.attrs.height === void 0;
    return t ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return Ji.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(t) {
    var e = Ui(), i = this.fontSize(), r;
    return e.save(), e.font = this._getContextFont(), r = e.measureText(t), e.restore(), {
      width: r.width,
      height: i
    };
  }
  _getContextFont() {
    return this.fontStyle() + Fe + this.fontVariant() + Fe + (this.fontSize() + Js) + ro(this.fontFamily());
  }
  _addTextLine(t) {
    this.align() === _e && (t = t.trim());
    var i = this._getTextWidth(t);
    return this.textArr.push({
      text: t,
      width: i,
      lastInParagraph: !1
    });
  }
  _getTextWidth(t) {
    var e = this.letterSpacing(), i = t.length;
    return Ui().measureText(t).width + (i ? e * (i - 1) : 0);
  }
  _setTextData() {
    var t = this.text().split(`
`), e = +this.fontSize(), i = 0, r = this.lineHeight() * e, n = this.attrs.width, a = this.attrs.height, s = n !== oe && n !== void 0, o = a !== oe && a !== void 0, l = this.padding(), u = n - l * 2, _ = a - l * 2, g = 0, f = this.wrap(), c = f !== Dr, p = f !== eo && c, m = this.ellipsis();
    this.textArr = [], Ui().font = this._getContextFont();
    for (var C = m ? this._getTextWidth(Ii) : 0, P = 0, d = t.length; P < d; ++P) {
      var v = t[P], y = this._getTextWidth(v);
      if (s && y > u)
        for (; v.length > 0; ) {
          for (var x = 0, T = v.length, b = "", E = 0; x < T; ) {
            var w = x + T >>> 1, k = v.slice(0, w + 1), M = this._getTextWidth(k) + C;
            M <= u ? (x = w + 1, b = k, E = M) : T = w;
          }
          if (b) {
            if (p) {
              var F, N = v[b.length], D = N === Fe || N === Gr;
              D && E <= u ? F = b.length : F = Math.max(b.lastIndexOf(Fe), b.lastIndexOf(Gr)) + 1, F > 0 && (x = F, b = b.slice(0, x), E = this._getTextWidth(b));
            }
            b = b.trimRight(), this._addTextLine(b), i = Math.max(i, E), g += r;
            var H = this._shouldHandleEllipsis(g);
            if (H) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (v = v.slice(x), v = v.trimLeft(), v.length > 0 && (y = this._getTextWidth(v), y <= u)) {
              this._addTextLine(v), g += r, i = Math.max(i, y);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(v), g += r, i = Math.max(i, y), this._shouldHandleEllipsis(g) && P < d - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), o && g + r > _)
        break;
    }
    this.textHeight = e, this.textWidth = i;
  }
  _shouldHandleEllipsis(t) {
    var e = +this.fontSize(), i = this.lineHeight() * e, r = this.attrs.height, n = r !== oe && r !== void 0, a = this.padding(), s = r - a * 2, o = this.wrap(), l = o !== Dr;
    return !l || n && t + i > s;
  }
  _tryToAddEllipsisToLastLine() {
    var t = this.attrs.width, e = t !== oe && t !== void 0, i = this.padding(), r = t - i * 2, n = this.ellipsis(), a = this.textArr[this.textArr.length - 1];
    if (!(!a || !n)) {
      if (e) {
        var s = this._getTextWidth(a.text + Ii) < r;
        s || (a.text = a.text.slice(0, a.text.length - 3));
      }
      this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(a.text + Ii);
    }
  }
  getStrokeScaleEnabled() {
    return !0;
  }
  _useBufferCanvas() {
    const t = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, e = this.hasShadow();
    return t && e ? !0 : super._useBufferCanvas();
  }
}
jt.Text = dt;
dt.prototype._fillFunc = no;
dt.prototype._strokeFunc = ao;
dt.prototype.className = Ks;
dt.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
(0, Ws._registerNode)(dt);
_t.Factory.overWriteSetter(dt, "width", (0, $t.getNumberOrAutoValidator)());
_t.Factory.overWriteSetter(dt, "height", (0, $t.getNumberOrAutoValidator)());
_t.Factory.addGetterSetter(dt, "direction", Pn);
_t.Factory.addGetterSetter(dt, "fontFamily", "Arial");
_t.Factory.addGetterSetter(dt, "fontSize", 12, (0, $t.getNumberValidator)());
_t.Factory.addGetterSetter(dt, "fontStyle", En);
_t.Factory.addGetterSetter(dt, "fontVariant", En);
_t.Factory.addGetterSetter(dt, "padding", 0, (0, $t.getNumberValidator)());
_t.Factory.addGetterSetter(dt, "align", kn);
_t.Factory.addGetterSetter(dt, "verticalAlign", qs);
_t.Factory.addGetterSetter(dt, "lineHeight", 1, (0, $t.getNumberValidator)());
_t.Factory.addGetterSetter(dt, "wrap", to);
_t.Factory.addGetterSetter(dt, "ellipsis", !1, (0, $t.getBooleanValidator)());
_t.Factory.addGetterSetter(dt, "letterSpacing", 0, (0, $t.getNumberValidator)());
_t.Factory.addGetterSetter(dt, "text", "", (0, $t.getStringValidator)());
_t.Factory.addGetterSetter(dt, "textDecoration", "");
var li = {};
Object.defineProperty(li, "__esModule", { value: !0 });
li.TextPath = void 0;
const Hi = lt, Et = z, oo = ft, me = ve, Vi = jt, An = L, ho = X;
var lo = "", Mn = "normal";
function Fn(h) {
  h.fillText(this.partialText, 0, 0);
}
function Nn(h) {
  h.strokeText(this.partialText, 0, 0);
}
class gt extends oo.Shape {
  constructor(t) {
    super(t), this.dummyCanvas = Hi.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute(), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _getTextPathLength() {
    return me.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(t) {
    if (!this.attrs.data)
      return null;
    const e = this.pathLength;
    return t - 1 > e ? null : me.Path.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = me.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
  }
  _sceneFunc(t) {
    t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", this.textBaseline()), t.setAttr("textAlign", "left"), t.save();
    var e = this.textDecoration(), i = this.fill(), r = this.fontSize(), n = this.glyphInfo;
    e === "underline" && t.beginPath();
    for (var a = 0; a < n.length; a++) {
      t.save();
      var s = n[a].p0;
      t.translate(s.x, s.y), t.rotate(n[a].rotation), this.partialText = n[a].text, t.fillStrokeShape(this), e === "underline" && (a === 0 && t.moveTo(0, r / 2 + 1), t.lineTo(r, r / 2 + 1)), t.restore();
    }
    e === "underline" && (t.strokeStyle = i, t.lineWidth = r / 20, t.stroke()), t.restore();
  }
  _hitFunc(t) {
    t.beginPath();
    var e = this.glyphInfo;
    if (e.length >= 1) {
      var i = e[0].p0;
      t.moveTo(i.x, i.y);
    }
    for (var r = 0; r < e.length; r++) {
      var n = e[r].p1;
      t.lineTo(n.x, n.y);
    }
    t.setAttr("lineWidth", this.fontSize()), t.setAttr("strokeStyle", this.colorKey), t.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return Hi.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(t) {
    return Vi.Text.prototype.setText.call(this, t);
  }
  _getContextFont() {
    return Vi.Text.prototype._getContextFont.call(this);
  }
  _getTextSize(t) {
    var e = this.dummyCanvas, i = e.getContext("2d");
    i.save(), i.font = this._getContextFont();
    var r = i.measureText(t);
    return i.restore(), {
      width: r.width,
      height: parseInt(`${this.fontSize()}`, 10)
    };
  }
  _setTextData() {
    const { width: t, height: e } = this._getTextSize(this.attrs.text);
    if (this.textWidth = t, this.textHeight = e, this.glyphInfo = [], !this.attrs.data)
      return null;
    const i = this.letterSpacing(), r = this.align(), n = this.kerningFunc(), a = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * i, 0);
    let s = 0;
    r === "center" && (s = Math.max(0, this.pathLength / 2 - a / 2)), r === "right" && (s = Math.max(0, this.pathLength - a));
    const o = (0, Vi.stringToArray)(this.text());
    let l = s;
    for (var u = 0; u < o.length; u++) {
      const _ = this._getPointAtLength(l);
      if (!_)
        return;
      let g = this._getTextSize(o[u]).width + i;
      if (o[u] === " " && r === "justify") {
        const P = this.text().split(" ").length - 1;
        g += (this.pathLength - a) / P;
      }
      const f = this._getPointAtLength(l + g);
      if (!f)
        return;
      const c = me.Path.getLineLength(_.x, _.y, f.x, f.y);
      let p = 0;
      if (n)
        try {
          p = n(o[u - 1], o[u]) * this.fontSize();
        } catch {
          p = 0;
        }
      _.x += p, f.x += p, this.textWidth += p;
      const m = me.Path.getPointOnLine(p + c / 2, _.x, _.y, f.x, f.y), C = Math.atan2(f.y - _.y, f.x - _.x);
      this.glyphInfo.push({
        transposeX: m.x,
        transposeY: m.y,
        text: o[u],
        rotation: C,
        p0: _,
        p1: f
      }), l += g;
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length)
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    var t = [];
    this.glyphInfo.forEach(function(u) {
      t.push(u.p0.x), t.push(u.p0.y), t.push(u.p1.x), t.push(u.p1.y);
    });
    for (var e = t[0] || 0, i = t[0] || 0, r = t[1] || 0, n = t[1] || 0, a, s, o = 0; o < t.length / 2; o++)
      a = t[o * 2], s = t[o * 2 + 1], e = Math.min(e, a), i = Math.max(i, a), r = Math.min(r, s), n = Math.max(n, s);
    var l = this.fontSize();
    return {
      x: e - l / 2,
      y: r - l / 2,
      width: i - e + l,
      height: n - r + l
    };
  }
  destroy() {
    return Hi.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
li.TextPath = gt;
gt.prototype._fillFunc = Fn;
gt.prototype._strokeFunc = Nn;
gt.prototype._fillFuncHit = Fn;
gt.prototype._strokeFuncHit = Nn;
gt.prototype.className = "TextPath";
gt.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, ho._registerNode)(gt);
Et.Factory.addGetterSetter(gt, "data");
Et.Factory.addGetterSetter(gt, "fontFamily", "Arial");
Et.Factory.addGetterSetter(gt, "fontSize", 12, (0, An.getNumberValidator)());
Et.Factory.addGetterSetter(gt, "fontStyle", Mn);
Et.Factory.addGetterSetter(gt, "align", "left");
Et.Factory.addGetterSetter(gt, "letterSpacing", 0, (0, An.getNumberValidator)());
Et.Factory.addGetterSetter(gt, "textBaseline", "middle");
Et.Factory.addGetterSetter(gt, "fontVariant", Mn);
Et.Factory.addGetterSetter(gt, "text", lo);
Et.Factory.addGetterSetter(gt, "textDecoration", null);
Et.Factory.addGetterSetter(gt, "kerningFunc", null);
var di = {};
Object.defineProperty(di, "__esModule", { value: !0 });
di.Transformer = void 0;
const tt = lt, J = z, Br = st, co = ft, uo = Ee, Ir = fe, Pt = X, Wt = L, fo = X;
var Rn = "tr-konva", go = [
  "resizeEnabledChange",
  "rotateAnchorOffsetChange",
  "rotateEnabledChange",
  "enabledAnchorsChange",
  "anchorSizeChange",
  "borderEnabledChange",
  "borderStrokeChange",
  "borderStrokeWidthChange",
  "borderDashChange",
  "anchorStrokeChange",
  "anchorStrokeWidthChange",
  "anchorFillChange",
  "anchorCornerRadiusChange",
  "ignoreStrokeChange",
  "anchorStyleFuncChange"
].map((h) => h + `.${Rn}`).join(" "), Ur = "nodesRect", vo = [
  "widthChange",
  "heightChange",
  "scaleXChange",
  "scaleYChange",
  "skewXChange",
  "skewYChange",
  "rotationChange",
  "offsetXChange",
  "offsetYChange",
  "transformsEnabledChange",
  "strokeWidthChange"
], po = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
};
const _o = "ontouchstart" in Pt.Konva._global;
function mo(h, t, e) {
  if (h === "rotater")
    return e;
  t += tt.Util.degToRad(po[h] || 0);
  var i = (tt.Util.radToDeg(t) % 360 + 360) % 360;
  return tt.Util._inRange(i, 315 + 22.5, 360) || tt.Util._inRange(i, 0, 22.5) ? "ns-resize" : tt.Util._inRange(i, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : tt.Util._inRange(i, 90 - 22.5, 90 + 22.5) ? "ew-resize" : tt.Util._inRange(i, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : tt.Util._inRange(i, 180 - 22.5, 180 + 22.5) ? "ns-resize" : tt.Util._inRange(i, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : tt.Util._inRange(i, 270 - 22.5, 270 + 22.5) ? "ew-resize" : tt.Util._inRange(i, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (tt.Util.error("Transformer has unknown angle for cursor detection: " + i), "pointer");
}
var De = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
], Hr = 1e8;
function yo(h) {
  return {
    x: h.x + h.width / 2 * Math.cos(h.rotation) + h.height / 2 * Math.sin(-h.rotation),
    y: h.y + h.height / 2 * Math.cos(h.rotation) + h.width / 2 * Math.sin(h.rotation)
  };
}
function Gn(h, t, e) {
  const i = e.x + (h.x - e.x) * Math.cos(t) - (h.y - e.y) * Math.sin(t), r = e.y + (h.x - e.x) * Math.sin(t) + (h.y - e.y) * Math.cos(t);
  return {
    ...h,
    rotation: h.rotation + t,
    x: i,
    y: r
  };
}
function bo(h, t) {
  const e = yo(h);
  return Gn(h, t, e);
}
function So(h, t, e) {
  let i = t;
  for (let r = 0; r < h.length; r++) {
    const n = Pt.Konva.getAngle(h[r]), a = Math.abs(n - t) % (Math.PI * 2);
    Math.min(a, Math.PI * 2 - a) < e && (i = n);
  }
  return i;
}
class K extends Ir.Group {
  constructor(t) {
    super(t), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(go, this.update), this.getNode() && this.update();
  }
  attachTo(t) {
    return this.setNode(t), this;
  }
  setNode(t) {
    return tt.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([t]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return Rn + this._id;
  }
  setNodes(t = []) {
    this._nodes && this._nodes.length && this.detach();
    const e = t.filter((r) => r.isAncestorOf(this) ? (tt.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
    this._nodes = t = e, t.length === 1 && this.useSingleNodeRotation() ? this.rotation(t[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((r) => {
      const n = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      }, a = r._attrsAffectingSize.map((s) => s + "Change." + this._getEventNamespace()).join(" ");
      r.on(a, n), r.on(vo.map((s) => s + `.${this._getEventNamespace()}`).join(" "), n), r.on(`absoluteTransformChange.${this._getEventNamespace()}`, n), this._proxyDrag(r);
    }), this._resetTransformCache();
    var i = !!this.findOne(".top-left");
    return i && this.update(), this;
  }
  _proxyDrag(t) {
    let e;
    t.on(`dragstart.${this._getEventNamespace()}`, (i) => {
      e = t.getAbsolutePosition(), !this.isDragging() && t !== this.findOne(".back") && this.startDrag(i, !1);
    }), t.on(`dragmove.${this._getEventNamespace()}`, (i) => {
      if (!e)
        return;
      const r = t.getAbsolutePosition(), n = r.x - e.x, a = r.y - e.y;
      this.nodes().forEach((s) => {
        if (s === t || s.isDragging())
          return;
        const o = s.getAbsolutePosition();
        s.setAbsolutePosition({
          x: o.x + n,
          y: o.y + a
        }), s.startDrag(i);
      }), e = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    this._nodes && this._nodes.forEach((t) => {
      t.off("." + this._getEventNamespace());
    }), this._nodes = [], this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(Ur), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(Ur, this.__getNodeRect);
  }
  __getNodeShape(t, e = this.rotation(), i) {
    var r = t.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), n = t.getAbsoluteScale(i), a = t.getAbsolutePosition(i), s = r.x * n.x - t.offsetX() * n.x, o = r.y * n.y - t.offsetY() * n.y;
    const l = (Pt.Konva.getAngle(t.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), u = {
      x: a.x + s * Math.cos(l) + o * Math.sin(-l),
      y: a.y + o * Math.cos(l) + s * Math.sin(l),
      width: r.width * n.x,
      height: r.height * n.y,
      rotation: l
    };
    return Gn(u, -Pt.Konva.getAngle(e), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    var t = this.getNode();
    if (!t)
      return {
        x: -Hr,
        y: -Hr,
        width: 0,
        height: 0,
        rotation: 0
      };
    const e = [];
    this.nodes().map((l) => {
      const u = l.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      });
      var _ = [
        { x: u.x, y: u.y },
        { x: u.x + u.width, y: u.y },
        { x: u.x + u.width, y: u.y + u.height },
        { x: u.x, y: u.y + u.height }
      ], g = l.getAbsoluteTransform();
      _.forEach(function(f) {
        var c = g.point(f);
        e.push(c);
      });
    });
    const i = new tt.Transform();
    i.rotate(-Pt.Konva.getAngle(this.rotation()));
    var r = 1 / 0, n = 1 / 0, a = -1 / 0, s = -1 / 0;
    e.forEach(function(l) {
      var u = i.point(l);
      r === void 0 && (r = a = u.x, n = s = u.y), r = Math.min(r, u.x), n = Math.min(n, u.y), a = Math.max(a, u.x), s = Math.max(s, u.y);
    }), i.invert();
    const o = i.point({ x: r, y: n });
    return {
      x: o.x,
      y: o.y,
      width: a - r,
      height: s - n,
      rotation: Pt.Konva.getAngle(this.rotation())
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack(), De.forEach((t) => {
      this._createAnchor(t);
    }), this._createAnchor("rotater");
  }
  _createAnchor(t) {
    var e = new uo.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: t + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: _o ? 10 : "auto"
    }), i = this;
    e.on("mousedown touchstart", function(r) {
      i._handleMouseDown(r);
    }), e.on("dragstart", (r) => {
      e.stopDrag(), r.cancelBubble = !0;
    }), e.on("dragend", (r) => {
      r.cancelBubble = !0;
    }), e.on("mouseenter", () => {
      var r = Pt.Konva.getAngle(this.rotation()), n = this.rotateAnchorCursor(), a = mo(t, r, n);
      e.getStage().content && (e.getStage().content.style.cursor = a), this._cursorChange = !0;
    }), e.on("mouseout", () => {
      e.getStage().content && (e.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(e);
  }
  _createBack() {
    var t = new co.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(e, i) {
        var r = i.getParent(), n = r.padding();
        e.beginPath(), e.rect(-n, -n, i.width() + n * 2, i.height() + n * 2), e.moveTo(i.width() / 2, -n), r.rotateEnabled() && r.rotateLineVisible() && e.lineTo(i.width() / 2, -r.rotateAnchorOffset() * tt.Util._sign(i.height()) - n), e.fillStrokeShape(i);
      },
      hitFunc: (e, i) => {
        if (this.shouldOverdrawWholeArea()) {
          var r = this.padding();
          e.beginPath(), e.rect(-r, -r, i.width() + r * 2, i.height() + r * 2), e.fillStrokeShape(i);
        }
      }
    });
    this.add(t), this._proxyDrag(t), t.on("dragstart", (e) => {
      e.cancelBubble = !0;
    }), t.on("dragmove", (e) => {
      e.cancelBubble = !0;
    }), t.on("dragend", (e) => {
      e.cancelBubble = !0;
    }), this.on("dragmove", (e) => {
      this.update();
    });
  }
  _handleMouseDown(t) {
    this._movingAnchorName = t.target.name().split(" ")[0];
    var e = this._getNodeRect(), i = e.width, r = e.height, n = Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2));
    this.sin = Math.abs(r / n), this.cos = Math.abs(i / n), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
    var a = t.target.getAbsolutePosition(), s = t.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: s.x - a.x,
      y: s.y - a.y
    }, this._fire("transformstart", { evt: t.evt, target: this.getNode() }), this._nodes.forEach((o) => {
      o._fire("transformstart", { evt: t.evt, target: o });
    });
  }
  _handleMouseMove(t) {
    var e, i, r, n = this.findOne("." + this._movingAnchorName), a = n.getStage();
    a.setPointersPositions(t);
    const s = a.getPointerPosition();
    let o = {
      x: s.x - this._anchorDragOffset.x,
      y: s.y - this._anchorDragOffset.y
    };
    const l = n.getAbsolutePosition();
    this.anchorDragBoundFunc() && (o = this.anchorDragBoundFunc()(l, o, t)), n.setAbsolutePosition(o);
    const u = n.getAbsolutePosition();
    if (!(l.x === u.x && l.y === u.y)) {
      if (this._movingAnchorName === "rotater") {
        var _ = this._getNodeRect();
        e = n.x() - _.width / 2, i = -n.y() + _.height / 2;
        let F = Math.atan2(-i, e) + Math.PI / 2;
        _.height < 0 && (F -= Math.PI);
        var g = Pt.Konva.getAngle(this.rotation());
        const N = g + F, D = Pt.Konva.getAngle(this.rotationSnapTolerance()), W = So(this.rotationSnaps(), N, D) - _.rotation, Y = bo(_, W);
        this._fitNodesInto(Y, t);
        return;
      }
      var f = this.shiftBehavior(), c;
      f === "inverted" ? c = this.keepRatio() && !t.shiftKey : f === "none" ? c = this.keepRatio() : c = this.keepRatio() || t.shiftKey;
      var d = this.centeredScaling() || t.altKey;
      if (this._movingAnchorName === "top-left") {
        if (c) {
          var p = d ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          r = Math.sqrt(Math.pow(p.x - n.x(), 2) + Math.pow(p.y - n.y(), 2));
          var m = this.findOne(".top-left").x() > p.x ? -1 : 1, C = this.findOne(".top-left").y() > p.y ? -1 : 1;
          e = r * this.cos * m, i = r * this.sin * C, this.findOne(".top-left").x(p.x - e), this.findOne(".top-left").y(p.y - i);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(n.y());
      else if (this._movingAnchorName === "top-right") {
        if (c) {
          var p = d ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          r = Math.sqrt(Math.pow(n.x() - p.x, 2) + Math.pow(p.y - n.y(), 2));
          var m = this.findOne(".top-right").x() < p.x ? -1 : 1, C = this.findOne(".top-right").y() > p.y ? -1 : 1;
          e = r * this.cos * m, i = r * this.sin * C, this.findOne(".top-right").x(p.x + e), this.findOne(".top-right").y(p.y - i);
        }
        var P = n.position();
        this.findOne(".top-left").y(P.y), this.findOne(".bottom-right").x(P.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(n.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(n.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (c) {
          var p = d ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          r = Math.sqrt(Math.pow(p.x - n.x(), 2) + Math.pow(n.y() - p.y, 2));
          var m = p.x < n.x() ? -1 : 1, C = n.y() < p.y ? -1 : 1;
          e = r * this.cos * m, i = r * this.sin * C, n.x(p.x - e), n.y(p.y + i);
        }
        P = n.position(), this.findOne(".top-left").x(P.x), this.findOne(".bottom-right").y(P.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(n.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (c) {
          var p = d ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          r = Math.sqrt(Math.pow(n.x() - p.x, 2) + Math.pow(n.y() - p.y, 2));
          var m = this.findOne(".bottom-right").x() < p.x ? -1 : 1, C = this.findOne(".bottom-right").y() < p.y ? -1 : 1;
          e = r * this.cos * m, i = r * this.sin * C, this.findOne(".bottom-right").x(p.x + e), this.findOne(".bottom-right").y(p.y + i);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      var d = this.centeredScaling() || t.altKey;
      if (d) {
        var v = this.findOne(".top-left"), y = this.findOne(".bottom-right"), x = v.x(), T = v.y(), b = this.getWidth() - y.x(), E = this.getHeight() - y.y();
        y.move({
          x: -x,
          y: -T
        }), v.move({
          x: b,
          y: E
        });
      }
      var w = this.findOne(".top-left").getAbsolutePosition();
      e = w.x, i = w.y;
      var k = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), M = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: e,
        y: i,
        width: k,
        height: M,
        rotation: Pt.Konva.getAngle(this.rotation())
      }, t);
    }
  }
  _handleMouseUp(t) {
    this._removeEvents(t);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(t) {
    if (this._transforming) {
      this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
      var e = this.getNode();
      this._fire("transformend", { evt: t, target: e }), e && this._nodes.forEach((i) => {
        i._fire("transformend", { evt: t, target: i });
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(t, e) {
    var i = this._getNodeRect();
    const r = 1;
    if (tt.Util._inRange(t.width, -this.padding() * 2 - r, r)) {
      this.update();
      return;
    }
    if (tt.Util._inRange(t.height, -this.padding() * 2 - r, r)) {
      this.update();
      return;
    }
    var n = new tt.Transform();
    if (n.rotate(Pt.Konva.getAngle(this.rotation())), this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const g = n.point({
        x: -this.padding() * 2,
        y: 0
      });
      t.x += g.x, t.y += g.y, t.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= g.x, this._anchorDragOffset.y -= g.y;
    } else if (this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const g = n.point({
        x: this.padding() * 2,
        y: 0
      });
      this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= g.x, this._anchorDragOffset.y -= g.y, t.width += this.padding() * 2;
    }
    if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const g = n.point({
        x: 0,
        y: -this.padding() * 2
      });
      t.x += g.x, t.y += g.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= g.x, this._anchorDragOffset.y -= g.y, t.height += this.padding() * 2;
    } else if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const g = n.point({
        x: 0,
        y: this.padding() * 2
      });
      this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= g.x, this._anchorDragOffset.y -= g.y, t.height += this.padding() * 2;
    }
    if (this.boundBoxFunc()) {
      const g = this.boundBoxFunc()(i, t);
      g ? t = g : tt.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const a = 1e7, s = new tt.Transform();
    s.translate(i.x, i.y), s.rotate(i.rotation), s.scale(i.width / a, i.height / a);
    const o = new tt.Transform(), l = t.width / a, u = t.height / a;
    this.flipEnabled() === !1 ? (o.translate(t.x, t.y), o.rotate(t.rotation), o.translate(t.width < 0 ? t.width : 0, t.height < 0 ? t.height : 0), o.scale(Math.abs(l), Math.abs(u))) : (o.translate(t.x, t.y), o.rotate(t.rotation), o.scale(l, u));
    const _ = o.multiply(s.invert());
    this._nodes.forEach((g) => {
      var f;
      const c = g.getParent().getAbsoluteTransform(), p = g.getTransform().copy();
      p.translate(g.offsetX(), g.offsetY());
      const m = new tt.Transform();
      m.multiply(c.copy().invert()).multiply(_).multiply(c).multiply(p);
      const C = m.decompose();
      g.setAttrs(C), this._fire("transform", { evt: e, target: g }), g._fire("transform", { evt: e, target: g }), (f = g.getLayer()) === null || f === void 0 || f.batchDraw();
    }), this.rotation(tt.Util._getRotation(t.rotation)), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache(), this.update();
  }
  _batchChangeChild(t, e) {
    this.findOne(t).setAttrs(e);
  }
  update() {
    var t, e = this._getNodeRect();
    this.rotation(tt.Util._getRotation(e.rotation));
    var i = e.width, r = e.height, n = this.enabledAnchors(), a = this.resizeEnabled(), s = this.padding(), o = this.anchorSize();
    const l = this.find("._anchor");
    l.forEach((_) => {
      _.setAttrs({
        width: o,
        height: o,
        offsetX: o / 2,
        offsetY: o / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    }), this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: o / 2 + s,
      offsetY: o / 2 + s,
      visible: a && n.indexOf("top-left") >= 0
    }), this._batchChangeChild(".top-center", {
      x: i / 2,
      y: 0,
      offsetY: o / 2 + s,
      visible: a && n.indexOf("top-center") >= 0
    }), this._batchChangeChild(".top-right", {
      x: i,
      y: 0,
      offsetX: o / 2 - s,
      offsetY: o / 2 + s,
      visible: a && n.indexOf("top-right") >= 0
    }), this._batchChangeChild(".middle-left", {
      x: 0,
      y: r / 2,
      offsetX: o / 2 + s,
      visible: a && n.indexOf("middle-left") >= 0
    }), this._batchChangeChild(".middle-right", {
      x: i,
      y: r / 2,
      offsetX: o / 2 - s,
      visible: a && n.indexOf("middle-right") >= 0
    }), this._batchChangeChild(".bottom-left", {
      x: 0,
      y: r,
      offsetX: o / 2 + s,
      offsetY: o / 2 - s,
      visible: a && n.indexOf("bottom-left") >= 0
    }), this._batchChangeChild(".bottom-center", {
      x: i / 2,
      y: r,
      offsetY: o / 2 - s,
      visible: a && n.indexOf("bottom-center") >= 0
    }), this._batchChangeChild(".bottom-right", {
      x: i,
      y: r,
      offsetX: o / 2 - s,
      offsetY: o / 2 - s,
      visible: a && n.indexOf("bottom-right") >= 0
    }), this._batchChangeChild(".rotater", {
      x: i / 2,
      y: -this.rotateAnchorOffset() * tt.Util._sign(r) - s,
      visible: this.rotateEnabled()
    }), this._batchChangeChild(".back", {
      width: i,
      height: r,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    });
    const u = this.anchorStyleFunc();
    u && l.forEach((_) => {
      u(_);
    }), (t = this.getLayer()) === null || t === void 0 || t.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      var t = this.findOne("." + this._movingAnchorName);
      t && t.stopDrag();
    }
  }
  destroy() {
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), Ir.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return Br.Node.prototype.toObject.call(this);
  }
  clone(t) {
    var e = Br.Node.prototype.clone.call(this, t);
    return e;
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
}
di.Transformer = K;
function Co(h) {
  return h instanceof Array || tt.Util.warn("enabledAnchors value should be an array"), h instanceof Array && h.forEach(function(t) {
    De.indexOf(t) === -1 && tt.Util.warn("Unknown anchor name: " + t + ". Available names are: " + De.join(", "));
  }), h || [];
}
K.prototype.className = "Transformer";
(0, fo._registerNode)(K);
J.Factory.addGetterSetter(K, "enabledAnchors", De, Co);
J.Factory.addGetterSetter(K, "flipEnabled", !0, (0, Wt.getBooleanValidator)());
J.Factory.addGetterSetter(K, "resizeEnabled", !0);
J.Factory.addGetterSetter(K, "anchorSize", 10, (0, Wt.getNumberValidator)());
J.Factory.addGetterSetter(K, "rotateEnabled", !0);
J.Factory.addGetterSetter(K, "rotateLineVisible", !0);
J.Factory.addGetterSetter(K, "rotationSnaps", []);
J.Factory.addGetterSetter(K, "rotateAnchorOffset", 50, (0, Wt.getNumberValidator)());
J.Factory.addGetterSetter(K, "rotateAnchorCursor", "crosshair");
J.Factory.addGetterSetter(K, "rotationSnapTolerance", 5, (0, Wt.getNumberValidator)());
J.Factory.addGetterSetter(K, "borderEnabled", !0);
J.Factory.addGetterSetter(K, "anchorStroke", "rgb(0, 161, 255)");
J.Factory.addGetterSetter(K, "anchorStrokeWidth", 1, (0, Wt.getNumberValidator)());
J.Factory.addGetterSetter(K, "anchorFill", "white");
J.Factory.addGetterSetter(K, "anchorCornerRadius", 0, (0, Wt.getNumberValidator)());
J.Factory.addGetterSetter(K, "borderStroke", "rgb(0, 161, 255)");
J.Factory.addGetterSetter(K, "borderStrokeWidth", 1, (0, Wt.getNumberValidator)());
J.Factory.addGetterSetter(K, "borderDash");
J.Factory.addGetterSetter(K, "keepRatio", !0);
J.Factory.addGetterSetter(K, "shiftBehavior", "default");
J.Factory.addGetterSetter(K, "centeredScaling", !1);
J.Factory.addGetterSetter(K, "ignoreStroke", !1);
J.Factory.addGetterSetter(K, "padding", 0, (0, Wt.getNumberValidator)());
J.Factory.addGetterSetter(K, "node");
J.Factory.addGetterSetter(K, "nodes");
J.Factory.addGetterSetter(K, "boundBoxFunc");
J.Factory.addGetterSetter(K, "anchorDragBoundFunc");
J.Factory.addGetterSetter(K, "anchorStyleFunc");
J.Factory.addGetterSetter(K, "shouldOverdrawWholeArea", !1);
J.Factory.addGetterSetter(K, "useSingleNodeRotation", !0);
J.Factory.backCompat(K, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
var ci = {};
Object.defineProperty(ci, "__esModule", { value: !0 });
ci.Wedge = void 0;
const ui = z, wo = ft, xo = X, On = L, Po = X;
class Dt extends wo.Shape {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.radius(), 0, xo.Konva.getAngle(this.angle()), this.clockwise()), t.lineTo(0, 0), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
ci.Wedge = Dt;
Dt.prototype.className = "Wedge";
Dt.prototype._centroid = !0;
Dt.prototype._attrsAffectingSize = ["radius"];
(0, Po._registerNode)(Dt);
ui.Factory.addGetterSetter(Dt, "radius", 0, (0, On.getNumberValidator)());
ui.Factory.addGetterSetter(Dt, "angle", 0, (0, On.getNumberValidator)());
ui.Factory.addGetterSetter(Dt, "clockwise", !1);
ui.Factory.backCompat(Dt, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
var fi = {};
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.Blur = void 0;
const Vr = z, ko = st, Eo = L;
function $r() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
var To = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
], Ao = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function Mo(h, t) {
  var e = h.data, i = h.width, r = h.height, n, a, s, o, l, u, _, g, f, c, p, m, C, P, d, v, y, x, T, b, E, w, k, M, F = t + t + 1, N = i - 1, D = r - 1, H = t + 1, W = H * (H + 1) / 2, Y = new $r(), V = null, R = Y, G = null, $ = null, Z = To[t], q = Ao[t];
  for (s = 1; s < F; s++)
    R = R.next = new $r(), s === H && (V = R);
  for (R.next = Y, _ = u = 0, a = 0; a < r; a++) {
    for (v = y = x = T = g = f = c = p = 0, m = H * (b = e[u]), C = H * (E = e[u + 1]), P = H * (w = e[u + 2]), d = H * (k = e[u + 3]), g += W * b, f += W * E, c += W * w, p += W * k, R = Y, s = 0; s < H; s++)
      R.r = b, R.g = E, R.b = w, R.a = k, R = R.next;
    for (s = 1; s < H; s++)
      o = u + ((N < s ? N : s) << 2), g += (R.r = b = e[o]) * (M = H - s), f += (R.g = E = e[o + 1]) * M, c += (R.b = w = e[o + 2]) * M, p += (R.a = k = e[o + 3]) * M, v += b, y += E, x += w, T += k, R = R.next;
    for (G = Y, $ = V, n = 0; n < i; n++)
      e[u + 3] = k = p * Z >> q, k !== 0 ? (k = 255 / k, e[u] = (g * Z >> q) * k, e[u + 1] = (f * Z >> q) * k, e[u + 2] = (c * Z >> q) * k) : e[u] = e[u + 1] = e[u + 2] = 0, g -= m, f -= C, c -= P, p -= d, m -= G.r, C -= G.g, P -= G.b, d -= G.a, o = _ + ((o = n + t + 1) < N ? o : N) << 2, v += G.r = e[o], y += G.g = e[o + 1], x += G.b = e[o + 2], T += G.a = e[o + 3], g += v, f += y, c += x, p += T, G = G.next, m += b = $.r, C += E = $.g, P += w = $.b, d += k = $.a, v -= b, y -= E, x -= w, T -= k, $ = $.next, u += 4;
    _ += i;
  }
  for (n = 0; n < i; n++) {
    for (y = x = T = v = f = c = p = g = 0, u = n << 2, m = H * (b = e[u]), C = H * (E = e[u + 1]), P = H * (w = e[u + 2]), d = H * (k = e[u + 3]), g += W * b, f += W * E, c += W * w, p += W * k, R = Y, s = 0; s < H; s++)
      R.r = b, R.g = E, R.b = w, R.a = k, R = R.next;
    for (l = i, s = 1; s <= t; s++)
      u = l + n << 2, g += (R.r = b = e[u]) * (M = H - s), f += (R.g = E = e[u + 1]) * M, c += (R.b = w = e[u + 2]) * M, p += (R.a = k = e[u + 3]) * M, v += b, y += E, x += w, T += k, R = R.next, s < D && (l += i);
    for (u = n, G = Y, $ = V, a = 0; a < r; a++)
      o = u << 2, e[o + 3] = k = p * Z >> q, k > 0 ? (k = 255 / k, e[o] = (g * Z >> q) * k, e[o + 1] = (f * Z >> q) * k, e[o + 2] = (c * Z >> q) * k) : e[o] = e[o + 1] = e[o + 2] = 0, g -= m, f -= C, c -= P, p -= d, m -= G.r, C -= G.g, P -= G.b, d -= G.a, o = n + ((o = a + H) < D ? o : D) * i << 2, g += v += G.r = e[o], f += y += G.g = e[o + 1], c += x += G.b = e[o + 2], p += T += G.a = e[o + 3], G = G.next, m += b = $.r, C += E = $.g, P += w = $.b, d += k = $.a, v -= b, y -= E, x -= w, T -= k, $ = $.next, u += i;
  }
}
const Fo = function(t) {
  var e = Math.round(this.blurRadius());
  e > 0 && Mo(t, e);
};
fi.Blur = Fo;
Vr.Factory.addGetterSetter(ko.Node, "blurRadius", 0, (0, Eo.getNumberValidator)(), Vr.Factory.afterSetFilter);
var gi = {};
Object.defineProperty(gi, "__esModule", { value: !0 });
gi.Brighten = void 0;
const Wr = z, No = st, Ro = L, Go = function(h) {
  var t = this.brightness() * 255, e = h.data, i = e.length, r;
  for (r = 0; r < i; r += 4)
    e[r] += t, e[r + 1] += t, e[r + 2] += t;
};
gi.Brighten = Go;
Wr.Factory.addGetterSetter(No.Node, "brightness", 0, (0, Ro.getNumberValidator)(), Wr.Factory.afterSetFilter);
var vi = {};
Object.defineProperty(vi, "__esModule", { value: !0 });
vi.Contrast = void 0;
const zr = z, Oo = st, Lo = L, Do = function(h) {
  var t = Math.pow((this.contrast() + 100) / 100, 2), e = h.data, i = e.length, r = 150, n = 150, a = 150, s;
  for (s = 0; s < i; s += 4)
    r = e[s], n = e[s + 1], a = e[s + 2], r /= 255, r -= 0.5, r *= t, r += 0.5, r *= 255, n /= 255, n -= 0.5, n *= t, n += 0.5, n *= 255, a /= 255, a -= 0.5, a *= t, a += 0.5, a *= 255, r = r < 0 ? 0 : r > 255 ? 255 : r, n = n < 0 ? 0 : n > 255 ? 255 : n, a = a < 0 ? 0 : a > 255 ? 255 : a, e[s] = r, e[s + 1] = n, e[s + 2] = a;
};
vi.Contrast = Do;
zr.Factory.addGetterSetter(Oo.Node, "contrast", 0, (0, Lo.getNumberValidator)(), zr.Factory.afterSetFilter);
var pi = {};
Object.defineProperty(pi, "__esModule", { value: !0 });
pi.Emboss = void 0;
const It = z, _i = st, Bo = lt, Ln = L, Io = function(h) {
  var t = this.embossStrength() * 10, e = this.embossWhiteLevel() * 255, i = this.embossDirection(), r = this.embossBlend(), n = 0, a = 0, s = h.data, o = h.width, l = h.height, u = o * 4, _ = l;
  switch (i) {
    case "top-left":
      n = -1, a = -1;
      break;
    case "top":
      n = -1, a = 0;
      break;
    case "top-right":
      n = -1, a = 1;
      break;
    case "right":
      n = 0, a = 1;
      break;
    case "bottom-right":
      n = 1, a = 1;
      break;
    case "bottom":
      n = 1, a = 0;
      break;
    case "bottom-left":
      n = 1, a = -1;
      break;
    case "left":
      n = 0, a = -1;
      break;
    default:
      Bo.Util.error("Unknown emboss direction: " + i);
  }
  do {
    var g = (_ - 1) * u, f = n;
    _ + f < 1 && (f = 0), _ + f > l && (f = 0);
    var c = (_ - 1 + f) * o * 4, p = o;
    do {
      var m = g + (p - 1) * 4, C = a;
      p + C < 1 && (C = 0), p + C > o && (C = 0);
      var P = c + (p - 1 + C) * 4, d = s[m] - s[P], v = s[m + 1] - s[P + 1], y = s[m + 2] - s[P + 2], x = d, T = x > 0 ? x : -x, b = v > 0 ? v : -v, E = y > 0 ? y : -y;
      if (b > T && (x = v), E > T && (x = y), x *= t, r) {
        var w = s[m] + x, k = s[m + 1] + x, M = s[m + 2] + x;
        s[m] = w > 255 ? 255 : w < 0 ? 0 : w, s[m + 1] = k > 255 ? 255 : k < 0 ? 0 : k, s[m + 2] = M > 255 ? 255 : M < 0 ? 0 : M;
      } else {
        var F = e - x;
        F < 0 ? F = 0 : F > 255 && (F = 255), s[m] = s[m + 1] = s[m + 2] = F;
      }
    } while (--p);
  } while (--_);
};
pi.Emboss = Io;
It.Factory.addGetterSetter(_i.Node, "embossStrength", 0.5, (0, Ln.getNumberValidator)(), It.Factory.afterSetFilter);
It.Factory.addGetterSetter(_i.Node, "embossWhiteLevel", 0.5, (0, Ln.getNumberValidator)(), It.Factory.afterSetFilter);
It.Factory.addGetterSetter(_i.Node, "embossDirection", "top-left", null, It.Factory.afterSetFilter);
It.Factory.addGetterSetter(_i.Node, "embossBlend", !1, null, It.Factory.afterSetFilter);
var mi = {};
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.Enhance = void 0;
const Yr = z, Uo = st, Ho = L;
function $i(h, t, e, i, r) {
  var n = e - t, a = r - i, s;
  return n === 0 ? i + a / 2 : a === 0 ? i : (s = (h - t) / n, s = a * s + i, s);
}
const Vo = function(h) {
  var t = h.data, e = t.length, i = t[0], r = i, n, a = t[1], s = a, o, l = t[2], u = l, _, g, f = this.enhance();
  if (f !== 0) {
    for (g = 0; g < e; g += 4)
      n = t[g + 0], n < i ? i = n : n > r && (r = n), o = t[g + 1], o < a ? a = o : o > s && (s = o), _ = t[g + 2], _ < l ? l = _ : _ > u && (u = _);
    r === i && (r = 255, i = 0), s === a && (s = 255, a = 0), u === l && (u = 255, l = 0);
    var c, p, m, C, P, d, v, y, x;
    for (f > 0 ? (p = r + f * (255 - r), m = i - f * (i - 0), P = s + f * (255 - s), d = a - f * (a - 0), y = u + f * (255 - u), x = l - f * (l - 0)) : (c = (r + i) * 0.5, p = r + f * (r - c), m = i + f * (i - c), C = (s + a) * 0.5, P = s + f * (s - C), d = a + f * (a - C), v = (u + l) * 0.5, y = u + f * (u - v), x = l + f * (l - v)), g = 0; g < e; g += 4)
      t[g + 0] = $i(t[g + 0], i, r, m, p), t[g + 1] = $i(t[g + 1], a, s, d, P), t[g + 2] = $i(t[g + 2], l, u, x, y);
  }
};
mi.Enhance = Vo;
Yr.Factory.addGetterSetter(Uo.Node, "enhance", 0, (0, Ho.getNumberValidator)(), Yr.Factory.afterSetFilter);
var yi = {};
Object.defineProperty(yi, "__esModule", { value: !0 });
yi.Grayscale = void 0;
const $o = function(h) {
  var t = h.data, e = t.length, i, r;
  for (i = 0; i < e; i += 4)
    r = 0.34 * t[i] + 0.5 * t[i + 1] + 0.16 * t[i + 2], t[i] = r, t[i + 1] = r, t[i + 2] = r;
};
yi.Grayscale = $o;
var bi = {};
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.HSL = void 0;
const le = z, gr = st, vr = L;
le.Factory.addGetterSetter(gr.Node, "hue", 0, (0, vr.getNumberValidator)(), le.Factory.afterSetFilter);
le.Factory.addGetterSetter(gr.Node, "saturation", 0, (0, vr.getNumberValidator)(), le.Factory.afterSetFilter);
le.Factory.addGetterSetter(gr.Node, "luminance", 0, (0, vr.getNumberValidator)(), le.Factory.afterSetFilter);
const Wo = function(h) {
  var t = h.data, e = t.length, i = 1, r = Math.pow(2, this.saturation()), n = Math.abs(this.hue() + 360) % 360, a = this.luminance() * 127, s, o = i * r * Math.cos(n * Math.PI / 180), l = i * r * Math.sin(n * Math.PI / 180), u = 0.299 * i + 0.701 * o + 0.167 * l, _ = 0.587 * i - 0.587 * o + 0.33 * l, g = 0.114 * i - 0.114 * o - 0.497 * l, f = 0.299 * i - 0.299 * o - 0.328 * l, c = 0.587 * i + 0.413 * o + 0.035 * l, p = 0.114 * i - 0.114 * o + 0.293 * l, m = 0.299 * i - 0.3 * o + 1.25 * l, C = 0.587 * i - 0.586 * o - 1.05 * l, P = 0.114 * i + 0.886 * o - 0.2 * l, d, v, y, x;
  for (s = 0; s < e; s += 4)
    d = t[s + 0], v = t[s + 1], y = t[s + 2], x = t[s + 3], t[s + 0] = u * d + _ * v + g * y + a, t[s + 1] = f * d + c * v + p * y + a, t[s + 2] = m * d + C * v + P * y + a, t[s + 3] = x;
};
bi.HSL = Wo;
var Si = {};
Object.defineProperty(Si, "__esModule", { value: !0 });
Si.HSV = void 0;
const de = z, pr = st, _r = L, zo = function(h) {
  var t = h.data, e = t.length, i = Math.pow(2, this.value()), r = Math.pow(2, this.saturation()), n = Math.abs(this.hue() + 360) % 360, a, s = i * r * Math.cos(n * Math.PI / 180), o = i * r * Math.sin(n * Math.PI / 180), l = 0.299 * i + 0.701 * s + 0.167 * o, u = 0.587 * i - 0.587 * s + 0.33 * o, _ = 0.114 * i - 0.114 * s - 0.497 * o, g = 0.299 * i - 0.299 * s - 0.328 * o, f = 0.587 * i + 0.413 * s + 0.035 * o, c = 0.114 * i - 0.114 * s + 0.293 * o, p = 0.299 * i - 0.3 * s + 1.25 * o, m = 0.587 * i - 0.586 * s - 1.05 * o, C = 0.114 * i + 0.886 * s - 0.2 * o, P, d, v, y;
  for (a = 0; a < e; a += 4)
    P = t[a + 0], d = t[a + 1], v = t[a + 2], y = t[a + 3], t[a + 0] = l * P + u * d + _ * v, t[a + 1] = g * P + f * d + c * v, t[a + 2] = p * P + m * d + C * v, t[a + 3] = y;
};
Si.HSV = zo;
de.Factory.addGetterSetter(pr.Node, "hue", 0, (0, _r.getNumberValidator)(), de.Factory.afterSetFilter);
de.Factory.addGetterSetter(pr.Node, "saturation", 0, (0, _r.getNumberValidator)(), de.Factory.afterSetFilter);
de.Factory.addGetterSetter(pr.Node, "value", 0, (0, _r.getNumberValidator)(), de.Factory.afterSetFilter);
var Ci = {};
Object.defineProperty(Ci, "__esModule", { value: !0 });
Ci.Invert = void 0;
const Yo = function(h) {
  var t = h.data, e = t.length, i;
  for (i = 0; i < e; i += 4)
    t[i] = 255 - t[i], t[i + 1] = 255 - t[i + 1], t[i + 2] = 255 - t[i + 2];
};
Ci.Invert = Yo;
var wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.Kaleidoscope = void 0;
const Be = z, Dn = st, Xr = lt, Bn = L;
var Xo = function(h, t, e) {
  var i = h.data, r = t.data, n = h.width, a = h.height, s = e.polarCenterX || n / 2, o = e.polarCenterY || a / 2, l, u, _, g = 0, f = 0, c = 0, p = 0, m, C = Math.sqrt(s * s + o * o);
  u = n - s, _ = a - o, m = Math.sqrt(u * u + _ * _), C = m > C ? m : C;
  var P = a, d = n, v, y, x = 360 / d * Math.PI / 180, T, b;
  for (y = 0; y < d; y += 1)
    for (T = Math.sin(y * x), b = Math.cos(y * x), v = 0; v < P; v += 1)
      u = Math.floor(s + C * v / P * b), _ = Math.floor(o + C * v / P * T), l = (_ * n + u) * 4, g = i[l + 0], f = i[l + 1], c = i[l + 2], p = i[l + 3], l = (y + v * n) * 4, r[l + 0] = g, r[l + 1] = f, r[l + 2] = c, r[l + 3] = p;
}, jo = function(h, t, e) {
  var i = h.data, r = t.data, n = h.width, a = h.height, s = e.polarCenterX || n / 2, o = e.polarCenterY || a / 2, l, u, _, g, f, c = 0, p = 0, m = 0, C = 0, P, d = Math.sqrt(s * s + o * o);
  u = n - s, _ = a - o, P = Math.sqrt(u * u + _ * _), d = P > d ? P : d;
  var v = a, y = n, x, T, b = e.polarRotation || 0, E, w;
  for (u = 0; u < n; u += 1)
    for (_ = 0; _ < a; _ += 1)
      g = u - s, f = _ - o, x = Math.sqrt(g * g + f * f) * v / d, T = (Math.atan2(f, g) * 180 / Math.PI + 360 + b) % 360, T = T * y / 360, E = Math.floor(T), w = Math.floor(x), l = (w * n + E) * 4, c = i[l + 0], p = i[l + 1], m = i[l + 2], C = i[l + 3], l = (_ * n + u) * 4, r[l + 0] = c, r[l + 1] = p, r[l + 2] = m, r[l + 3] = C;
};
const Ko = function(h) {
  var t = h.width, e = h.height, i, r, n, a, s, o, l, u, _, g, f = Math.round(this.kaleidoscopePower()), c = Math.round(this.kaleidoscopeAngle()), p = Math.floor(t * (c % 360) / 360);
  if (!(f < 1)) {
    var m = Xr.Util.createCanvasElement();
    m.width = t, m.height = e;
    var C = m.getContext("2d").getImageData(0, 0, t, e);
    Xr.Util.releaseCanvas(m), Xo(h, C, {
      polarCenterX: t / 2,
      polarCenterY: e / 2
    });
    for (var P = t / Math.pow(2, f); P <= 8; )
      P = P * 2, f -= 1;
    P = Math.ceil(P);
    var d = P, v = 0, y = d, x = 1;
    for (p + P > t && (v = d, y = 0, x = -1), r = 0; r < e; r += 1)
      for (i = v; i !== y; i += x)
        n = Math.round(i + p) % t, _ = (t * r + n) * 4, s = C.data[_ + 0], o = C.data[_ + 1], l = C.data[_ + 2], u = C.data[_ + 3], g = (t * r + i) * 4, C.data[g + 0] = s, C.data[g + 1] = o, C.data[g + 2] = l, C.data[g + 3] = u;
    for (r = 0; r < e; r += 1)
      for (d = Math.floor(P), a = 0; a < f; a += 1) {
        for (i = 0; i < d + 1; i += 1)
          _ = (t * r + i) * 4, s = C.data[_ + 0], o = C.data[_ + 1], l = C.data[_ + 2], u = C.data[_ + 3], g = (t * r + d * 2 - i - 1) * 4, C.data[g + 0] = s, C.data[g + 1] = o, C.data[g + 2] = l, C.data[g + 3] = u;
        d *= 2;
      }
    jo(C, h, { polarRotation: 0 });
  }
};
wi.Kaleidoscope = Ko;
Be.Factory.addGetterSetter(Dn.Node, "kaleidoscopePower", 2, (0, Bn.getNumberValidator)(), Be.Factory.afterSetFilter);
Be.Factory.addGetterSetter(Dn.Node, "kaleidoscopeAngle", 0, (0, Bn.getNumberValidator)(), Be.Factory.afterSetFilter);
var xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.Mask = void 0;
const jr = z, qo = st, Qo = L;
function Re(h, t, e) {
  var i = (e * h.width + t) * 4, r = [];
  return r.push(h.data[i++], h.data[i++], h.data[i++], h.data[i++]), r;
}
function ye(h, t) {
  return Math.sqrt(Math.pow(h[0] - t[0], 2) + Math.pow(h[1] - t[1], 2) + Math.pow(h[2] - t[2], 2));
}
function Jo(h) {
  for (var t = [0, 0, 0], e = 0; e < h.length; e++)
    t[0] += h[e][0], t[1] += h[e][1], t[2] += h[e][2];
  return t[0] /= h.length, t[1] /= h.length, t[2] /= h.length, t;
}
function Zo(h, t) {
  var e = Re(h, 0, 0), i = Re(h, h.width - 1, 0), r = Re(h, 0, h.height - 1), n = Re(h, h.width - 1, h.height - 1), a = t || 10;
  if (ye(e, i) < a && ye(i, n) < a && ye(n, r) < a && ye(r, e) < a) {
    for (var s = Jo([i, e, n, r]), o = [], l = 0; l < h.width * h.height; l++) {
      var u = ye(s, [
        h.data[l * 4],
        h.data[l * 4 + 1],
        h.data[l * 4 + 2]
      ]);
      o[l] = u < a ? 0 : 255;
    }
    return o;
  }
}
function th(h, t) {
  for (var e = 0; e < h.width * h.height; e++)
    h.data[4 * e + 3] = t[e];
}
function eh(h, t, e) {
  for (var i = [1, 1, 1, 1, 0, 1, 1, 1, 1], r = Math.round(Math.sqrt(i.length)), n = Math.floor(r / 2), a = [], s = 0; s < e; s++)
    for (var o = 0; o < t; o++) {
      for (var l = s * t + o, u = 0, _ = 0; _ < r; _++)
        for (var g = 0; g < r; g++) {
          var f = s + _ - n, c = o + g - n;
          if (f >= 0 && f < e && c >= 0 && c < t) {
            var p = f * t + c, m = i[_ * r + g];
            u += h[p] * m;
          }
        }
      a[l] = u === 255 * 8 ? 255 : 0;
    }
  return a;
}
function ih(h, t, e) {
  for (var i = [1, 1, 1, 1, 1, 1, 1, 1, 1], r = Math.round(Math.sqrt(i.length)), n = Math.floor(r / 2), a = [], s = 0; s < e; s++)
    for (var o = 0; o < t; o++) {
      for (var l = s * t + o, u = 0, _ = 0; _ < r; _++)
        for (var g = 0; g < r; g++) {
          var f = s + _ - n, c = o + g - n;
          if (f >= 0 && f < e && c >= 0 && c < t) {
            var p = f * t + c, m = i[_ * r + g];
            u += h[p] * m;
          }
        }
      a[l] = u >= 255 * 4 ? 255 : 0;
    }
  return a;
}
function rh(h, t, e) {
  for (var i = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], r = Math.round(Math.sqrt(i.length)), n = Math.floor(r / 2), a = [], s = 0; s < e; s++)
    for (var o = 0; o < t; o++) {
      for (var l = s * t + o, u = 0, _ = 0; _ < r; _++)
        for (var g = 0; g < r; g++) {
          var f = s + _ - n, c = o + g - n;
          if (f >= 0 && f < e && c >= 0 && c < t) {
            var p = f * t + c, m = i[_ * r + g];
            u += h[p] * m;
          }
        }
      a[l] = u;
    }
  return a;
}
const nh = function(h) {
  var t = this.threshold(), e = Zo(h, t);
  return e && (e = eh(e, h.width, h.height), e = ih(e, h.width, h.height), e = rh(e, h.width, h.height), th(h, e)), h;
};
xi.Mask = nh;
jr.Factory.addGetterSetter(qo.Node, "threshold", 0, (0, Qo.getNumberValidator)(), jr.Factory.afterSetFilter);
var Pi = {};
Object.defineProperty(Pi, "__esModule", { value: !0 });
Pi.Noise = void 0;
const Kr = z, ah = st, sh = L, oh = function(h) {
  var t = this.noise() * 255, e = h.data, i = e.length, r = t / 2, n;
  for (n = 0; n < i; n += 4)
    e[n + 0] += r - 2 * r * Math.random(), e[n + 1] += r - 2 * r * Math.random(), e[n + 2] += r - 2 * r * Math.random();
};
Pi.Noise = oh;
Kr.Factory.addGetterSetter(ah.Node, "noise", 0.2, (0, sh.getNumberValidator)(), Kr.Factory.afterSetFilter);
var ki = {};
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.Pixelate = void 0;
const qr = z, hh = lt, lh = st, dh = L, ch = function(h) {
  var t = Math.ceil(this.pixelSize()), e = h.width, i = h.height, r, n, a, s, o, l, u, _ = Math.ceil(e / t), g = Math.ceil(i / t), f, c, p, m, C, P, d, v = h.data;
  if (t <= 0) {
    hh.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (C = 0; C < _; C += 1)
    for (P = 0; P < g; P += 1) {
      for (s = 0, o = 0, l = 0, u = 0, f = C * t, c = f + t, p = P * t, m = p + t, d = 0, r = f; r < c; r += 1)
        if (!(r >= e))
          for (n = p; n < m; n += 1)
            n >= i || (a = (e * n + r) * 4, s += v[a + 0], o += v[a + 1], l += v[a + 2], u += v[a + 3], d += 1);
      for (s = s / d, o = o / d, l = l / d, u = u / d, r = f; r < c; r += 1)
        if (!(r >= e))
          for (n = p; n < m; n += 1)
            n >= i || (a = (e * n + r) * 4, v[a + 0] = s, v[a + 1] = o, v[a + 2] = l, v[a + 3] = u);
    }
};
ki.Pixelate = ch;
qr.Factory.addGetterSetter(lh.Node, "pixelSize", 8, (0, dh.getNumberValidator)(), qr.Factory.afterSetFilter);
var Ei = {};
Object.defineProperty(Ei, "__esModule", { value: !0 });
Ei.Posterize = void 0;
const Qr = z, uh = st, fh = L, gh = function(h) {
  var t = Math.round(this.levels() * 254) + 1, e = h.data, i = e.length, r = 255 / t, n;
  for (n = 0; n < i; n += 1)
    e[n] = Math.floor(e[n] / r) * r;
};
Ei.Posterize = gh;
Qr.Factory.addGetterSetter(uh.Node, "levels", 0.5, (0, fh.getNumberValidator)(), Qr.Factory.afterSetFilter);
var Ti = {};
Object.defineProperty(Ti, "__esModule", { value: !0 });
Ti.RGB = void 0;
const Ie = z, mr = st, vh = L, ph = function(h) {
  var t = h.data, e = t.length, i = this.red(), r = this.green(), n = this.blue(), a, s;
  for (a = 0; a < e; a += 4)
    s = (0.34 * t[a] + 0.5 * t[a + 1] + 0.16 * t[a + 2]) / 255, t[a] = s * i, t[a + 1] = s * r, t[a + 2] = s * n, t[a + 3] = t[a + 3];
};
Ti.RGB = ph;
Ie.Factory.addGetterSetter(mr.Node, "red", 0, function(h) {
  return this._filterUpToDate = !1, h > 255 ? 255 : h < 0 ? 0 : Math.round(h);
});
Ie.Factory.addGetterSetter(mr.Node, "green", 0, function(h) {
  return this._filterUpToDate = !1, h > 255 ? 255 : h < 0 ? 0 : Math.round(h);
});
Ie.Factory.addGetterSetter(mr.Node, "blue", 0, vh.RGBComponent, Ie.Factory.afterSetFilter);
var Ai = {};
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.RGBA = void 0;
const Ce = z, Mi = st, _h = L, mh = function(h) {
  var t = h.data, e = t.length, i = this.red(), r = this.green(), n = this.blue(), a = this.alpha(), s, o;
  for (s = 0; s < e; s += 4)
    o = 1 - a, t[s] = i * a + t[s] * o, t[s + 1] = r * a + t[s + 1] * o, t[s + 2] = n * a + t[s + 2] * o;
};
Ai.RGBA = mh;
Ce.Factory.addGetterSetter(Mi.Node, "red", 0, function(h) {
  return this._filterUpToDate = !1, h > 255 ? 255 : h < 0 ? 0 : Math.round(h);
});
Ce.Factory.addGetterSetter(Mi.Node, "green", 0, function(h) {
  return this._filterUpToDate = !1, h > 255 ? 255 : h < 0 ? 0 : Math.round(h);
});
Ce.Factory.addGetterSetter(Mi.Node, "blue", 0, _h.RGBComponent, Ce.Factory.afterSetFilter);
Ce.Factory.addGetterSetter(Mi.Node, "alpha", 1, function(h) {
  return this._filterUpToDate = !1, h > 1 ? 1 : h < 0 ? 0 : h;
});
var Fi = {};
Object.defineProperty(Fi, "__esModule", { value: !0 });
Fi.Sepia = void 0;
const yh = function(h) {
  var t = h.data, e = t.length, i, r, n, a;
  for (i = 0; i < e; i += 4)
    r = t[i + 0], n = t[i + 1], a = t[i + 2], t[i + 0] = Math.min(255, r * 0.393 + n * 0.769 + a * 0.189), t[i + 1] = Math.min(255, r * 0.349 + n * 0.686 + a * 0.168), t[i + 2] = Math.min(255, r * 0.272 + n * 0.534 + a * 0.131);
};
Fi.Sepia = yh;
var Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
Ni.Solarize = void 0;
const bh = function(h) {
  var t = h.data, e = h.width, i = h.height, r = e * 4, n = i;
  do {
    var a = (n - 1) * r, s = e;
    do {
      var o = a + (s - 1) * 4, l = t[o], u = t[o + 1], _ = t[o + 2];
      l > 127 && (l = 255 - l), u > 127 && (u = 255 - u), _ > 127 && (_ = 255 - _), t[o] = l, t[o + 1] = u, t[o + 2] = _;
    } while (--s);
  } while (--n);
};
Ni.Solarize = bh;
var Ri = {};
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.Threshold = void 0;
const Jr = z, Sh = st, Ch = L, wh = function(h) {
  var t = this.threshold() * 255, e = h.data, i = e.length, r;
  for (r = 0; r < i; r += 1)
    e[r] = e[r] < t ? 0 : 255;
};
Ri.Threshold = wh;
Jr.Factory.addGetterSetter(Sh.Node, "threshold", 0.5, (0, Ch.getNumberValidator)(), Jr.Factory.afterSetFilter);
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.Konva = void 0;
const Zr = nn, xh = je, Ph = Qe, kh = ti, Eh = ei, Th = ii, tn = he, Ah = Pe, Mh = ve, Fh = Ee, Nh = ai, Rh = si, Gh = oi, Oh = hi, Lh = jt, Dh = li, Bh = di, Ih = ci, Uh = fi, Hh = gi, Vh = vi, $h = pi, Wh = mi, zh = yi, Yh = bi, Xh = Si, jh = Ci, Kh = wi, qh = xi, Qh = Pi, Jh = ki, Zh = Ei, tl = Ti, el = Ai, il = Fi, rl = Ni, nl = Ri;
Ve.Konva = Zr.Konva.Util._assign(Zr.Konva, {
  Arc: xh.Arc,
  Arrow: Ph.Arrow,
  Circle: kh.Circle,
  Ellipse: Eh.Ellipse,
  Image: Th.Image,
  Label: tn.Label,
  Tag: tn.Tag,
  Line: Ah.Line,
  Path: Mh.Path,
  Rect: Fh.Rect,
  RegularPolygon: Nh.RegularPolygon,
  Ring: Rh.Ring,
  Sprite: Gh.Sprite,
  Star: Oh.Star,
  Text: Lh.Text,
  TextPath: Dh.TextPath,
  Transformer: Bh.Transformer,
  Wedge: Ih.Wedge,
  Filters: {
    Blur: Uh.Blur,
    Brighten: Hh.Brighten,
    Contrast: Vh.Contrast,
    Emboss: $h.Emboss,
    Enhance: Wh.Enhance,
    Grayscale: zh.Grayscale,
    HSL: Yh.HSL,
    HSV: Xh.HSV,
    Invert: jh.Invert,
    Kaleidoscope: Kh.Kaleidoscope,
    Mask: qh.Mask,
    Noise: Qh.Noise,
    Pixelate: Jh.Pixelate,
    Posterize: Zh.Posterize,
    RGB: tl.RGB,
    RGBA: el.RGBA,
    Sepia: il.Sepia,
    Solarize: rl.Solarize,
    Threshold: nl.Threshold
  }
});
var al = ir.exports;
Object.defineProperty(al, "__esModule", { value: !0 });
const sl = Ve;
ir.exports = sl.Konva;
var In = ir.exports;
const Un = /* @__PURE__ */ er(In), ol = /* @__PURE__ */ tr({
  __proto__: null,
  default: Un
}, [In]), Xt = Un ?? ol, Ue = class Ue {
  constructor(t, e) {
    B(this, "options");
    B(this, "originalLabelLeft");
    B(this, "originalLabelTop");
    B(this, "originalArrowLeft");
    B(this, "originalArrowTop");
    B(this, "originalCenterX");
    B(this, "originalCenterY");
    B(this, "originalSkipButtonLeft");
    B(this, "originalSkipButtonTop");
    B(this, "prevWindowWidth");
    B(this, "prevWindowHeight");
    B(this, "originalWidth", window.innerWidth);
    B(this, "originalHeight", window.innerHeight);
    B(this, "canvasSize", {
      w: window.innerWidth * 1.4,
      h: window.innerHeight * 1.4
    });
    B(this, "shape");
    B(this, "enjoyHintElement");
    B(this, "shapeInitShift");
    B(this, "prevButton");
    B(this, "nextButton");
    B(this, "skipButton");
    B(this, "closeButton");
    B(this, "nextBtn");
    B(this, "prevBtn");
    B(this, "topDisEvents");
    B(this, "bottomDisEvents");
    B(this, "leftDisEvents");
    B(this, "rightDisEvents");
    B(this, "canvas");
    B(this, "renderData");
    B(this, "customBtnProps");
    this.element = t, this.options = { ...Ue.defaults, ...e }, this.init();
  }
  init() {
    const t = document.createElement("div");
    t.classList.add(U.enjoyHint.name), this.element.appendChild(t), this.enjoyHintElement = t;
    const e = document.createElement("div");
    e.classList.add(U.svgWrapper.name, U.svgTransparent.name), t.appendChild(e);
    const i = document.createElement("div");
    i.id = vt.kineticContainer.id, t.appendChild(i);
    const r = document.createElement("canvas");
    r.id = vt.canvas.id, r.width = this.canvasSize.w, r.height = this.canvasSize.h, r.classList.add(U.mainCanvas.name), t.appendChild(r), this.canvas = r;
    const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    n.setAttribute("width", this.canvasSize.w.toString()), n.setAttribute("height", this.canvasSize.h.toString()), n.classList.add(U.mainSvg.name), e.appendChild(n);
    const a = this.makeSVG("defs"), s = this.makeSVG("marker", {
      id: vt.arrowMarker.id,
      viewBox: "0 0 36 21",
      refX: "21",
      refY: "10",
      markerUnits: "strokeWidth",
      orient: "auto",
      markerWidth: "16",
      markerHeight: "12"
    }), o = this.makeSVG("path", {
      style: "fill:none; stroke:rgb(255,255,255); stroke-width:2",
      d: "M0,0 c30,11 30,9 0,20",
      id: vt.polyline.id
    });
    s.appendChild(o), a.appendChild(s), n.appendChild(a);
    const l = new Xt.Stage({
      container: vt.kineticContainer.id,
      width: this.canvasSize.w,
      height: this.canvasSize.h,
      scaleX: 1
    }), u = new Xt.Layer(), _ = new Xt.Rect({
      fill: this.options.fill,
      width: this.canvasSize.w,
      height: this.canvasSize.h
    }), g = document.createElement("div");
    g.classList.add(U.disableEventsElement.name), t.appendChild(g), this.topDisEvents = g;
    const f = g.cloneNode();
    t.appendChild(f), this.bottomDisEvents = f;
    const c = g.cloneNode();
    t.appendChild(c), this.leftDisEvents = c;
    const p = g.cloneNode();
    t.appendChild(p), this.rightDisEvents = p;
    const m = function(E) {
      E.stopImmediatePropagation();
    };
    document.querySelectorAll("button").forEach((E) => pt(E, "focusout", m)), pt(g, "click", m), pt(f, "click", m), pt(c, "click", m), pt(p, "click", m);
    const C = document.createElement("div");
    C.classList.add(U.btn.name, U.skipBtn.name), C.innerHTML = "Skip", pt(C, "click", () => {
      this.hide(), this.options.onSkipClick();
    }), t.appendChild(C), this.skipButton = C;
    const P = document.createElement("div");
    P.classList.add(U.btn.name, U.nextBtn.name), P.innerHTML = "Next", pt(P, "click", () => this.options.onNextClick()), t.appendChild(P), this.nextButton = P;
    const d = document.createElement("div");
    d.classList.add(U.btn.name, U.closeBtn.name), d.innerHTML = "", pt(d, "click", () => {
      this.hide(), this.options.onSkipClick();
    }), t.appendChild(d), this.closeButton = d;
    const v = document.createElement("div");
    v.classList.add(U.btn.name, U.previousBtn.name), v.innerHTML = "Previous", pt(v, "click", () => this.options.onPrevClick()), t.appendChild(v), this.prevButton = v, pt(r, "mousedown", (E) => {
      const w = E;
      r.style.left = "4000px";
      const k = document.elementFromPoint(
        w.clientX,
        w.clientY
      );
      return r.style.left = "0px", k.click(), !1;
    });
    const y = 0;
    this.shapeInitShift = 130;
    const x = new Xt.Shape({
      radius: y,
      center_x: -this.shapeInitShift,
      center_y: -this.shapeInitShift,
      width: 0,
      height: 0,
      sceneFunc: function(E) {
        const w = E._context, k = w.globalCompositeOperation;
        w.globalCompositeOperation = "destination-out", w.beginPath();
        const M = this.attrs.center_x - Math.round(this.attrs.width / 2), F = this.attrs.center_y - Math.round(this.attrs.height / 2);
        na(
          M,
          F,
          this.attrs.width,
          this.attrs.height,
          this.attrs.radius,
          w
        ), w.fill(), w.globalCompositeOperation = k;
      }
    });
    this.shape = x, u.add(_), u.add(x), l.add(u);
    let T;
    const b = () => {
      var N, D;
      if (clearTimeout(T), this.nextButton.style.visibility = "hidden", this.prevButton.style.visibility = "hidden", this.skipButton.style.visibility = "hidden", (N = U.label.element()) == null || N.remove(), (D = vt.arrowLine.element()) == null || D.remove(), getComputedStyle(this.enjoyHintElement).visibility !== "visible") {
        this.stopFunction(), Wi(window, "resize", b);
        return;
      }
      const E = document.querySelector(this.renderData.enjoyHintElementSelector).getBoundingClientRect();
      this.shape.attrs.centerX = Math.round(
        E.left + E.width / 2
      ), this.shape.attrs.centerY = Math.round(
        E.top + E.height / 2
      ), this.shape.attrs.width = E.width + 11, this.shape.attrs.height = E.height + 11, T = setTimeout(() => {
        E.top < 0 || E.bottom > (window.innerHeight || document.documentElement.clientHeight) ? document.querySelector(
          this.renderData.enjoyHintElementSelector
        ).scrollIntoView() : this.renderAfterResize();
      }, 150);
      const w = window.innerWidth, k = window.innerHeight, M = w / this.originalWidth, F = k / this.originalHeight;
      l.setAttr("width", this.originalWidth * M), l.setAttr("height", this.originalHeight * F), _.setAttr("width", window.innerWidth), _.setAttr("height", window.innerHeight), u.removeChildren(), u.add(_), u.add(x), l.draw();
    };
    pt(window, "resize", b), this.hide();
  }
  stopFunction() {
    throw new Error("Method not implemented.");
  }
  resetComponentStuff() {
    this.originalLabelLeft = void 0, this.originalLabelTop = void 0, this.originalArrowLeft = void 0, this.originalArrowTop = void 0, this.originalCenterX = void 0, this.originalCenterY = void 0, this.originalSkipButtonLeft = void 0, this.originalSkipButtonTop = void 0, this.prevWindowWidth = void 0, this.prevWindowHeight = void 0, this.originalWidth = window.innerWidth, this.originalHeight = window.innerHeight;
  }
  makeSVG(t, e) {
    const i = document.createElementNS("http://www.w3.org/2000/svg", t);
    for (const r in e)
      i.setAttribute(r, e[r]);
    return i;
  }
  renderAfterResize() {
    const t = document.querySelector(this.renderData.enjoyHintElementSelector).getBoundingClientRect();
    this.renderData.centerX = t.left + t.width / 2, this.renderData.centerY = t.top + t.height / 2, this.renderData.width = t.width + 11, this.renderData.height = t.height + 11, this.renderLabelWithShape(this.renderData, this.customBtnProps), U.nextBtn.element().style.visibility = "visible", U.previousBtn.element().style.visibility = "visible", U.skipBtn.element().style.visibility = "visible";
  }
  show() {
    var t;
    (t = this.enjoyHintElement) == null || t.classList.remove(U.hide.name);
  }
  hide() {
    this.enjoyHintElement.classList.add(U.hide.name), new Xt.Tween({
      node: this.shape,
      duration: 2e-3,
      center_x: -this.shapeInitShift,
      center_y: -this.shapeInitShift
    }).play();
  }
  hideNextBtn() {
    this.nextButton.classList.add(U.hide.name), this.nextBtn = "hide";
  }
  hidePrevBtn() {
    this.prevButton.classList.add(U.hide.name), this.prevBtn = "hide";
  }
  showPrevBtn() {
    this.prevButton.classList.remove(U.hide.name), this.prevBtn = "show";
  }
  showNextBtn() {
    this.nextButton.classList.remove(U.hide.name), this.nextBtn = "show";
  }
  hideSkipBtn() {
    this.skipButton.classList.add(U.hide.name);
  }
  showSkipBtn() {
    this.skipButton.classList.remove(U.hide.name);
  }
  renderCircle(t) {
    const e = (t == null ? void 0 : t.r) ?? 0, i = (t == null ? void 0 : t.x) ?? 0, r = (t == null ? void 0 : t.y) ?? 0;
    new Xt.Tween({
      node: this.shape,
      duration: 0.2,
      center_x: i,
      center_y: r,
      width: e * 2,
      height: e * 2,
      radius: e
    }).play();
    const a = i - e, s = i + e, o = r - e, l = r + e, u = 20;
    return {
      x: i,
      y: r,
      left: a,
      right: s,
      top: o,
      bottom: l,
      conn: {
        left: {
          x: a - u,
          y: r
        },
        right: {
          x: s + u,
          y: r
        },
        top: {
          x: i,
          y: o - u
        },
        bottom: {
          x: i,
          y: l + u
        }
      }
    };
  }
  renderRect(t) {
    const e = t.r || 0, i = t.x || 0, r = t.y || 0, n = t.w || 0, a = t.h || 0, s = 20;
    new Xt.Tween({
      node: this.shape,
      duration: 0.2,
      center_x: i,
      center_y: r,
      width: n,
      height: a,
      radius: e
    }).play();
    const l = Math.round(n / 2), u = Math.round(a / 2), _ = i - l, g = i + l, f = r - u, c = r + u;
    return {
      x: i,
      y: r,
      left: _,
      right: g,
      top: f,
      bottom: c,
      conn: {
        left: {
          x: _ - s,
          y: r
        },
        right: {
          x: g + s,
          y: r
        },
        top: {
          x: i,
          y: f - s
        },
        bottom: {
          x: i,
          y: c + s
        }
      }
    };
  }
  renderLabel(t) {
    const e = t.x || 0, i = t.y || 0, r = t.text || "", n = document.createElement("div");
    n.classList.add(U.label.name), n.id = vt.label.id, n.style.top = `${i}px`, n.style.left = `${e}px`, n.innerHTML = r, this.enjoyHintElement.appendChild(n);
    const a = n.offsetWidth, s = n.offsetHeight, o = n.offsetLeft, l = n.offsetLeft + a, u = n.offsetTop - window.pageYOffset, _ = n.offsetTop - window.pageYOffset + s, g = 10, f = {
      x: o - g,
      y: u + Math.round(s / 2)
    }, c = {
      x: l + g,
      y: u + Math.round(s / 2)
    }, p = {
      x: o + Math.round(a / 2),
      y: u - g
    }, m = {
      x: o + Math.round(a / 2),
      y: _ + g
    };
    return n.remove(), setTimeout(() => {
      var C;
      (C = vt.label.element()) == null || C.remove(), this.enjoyHintElement.appendChild(n);
    }, this.options.animationTime / 2), {
      label: n,
      left: o,
      right: l,
      top: u,
      bottom: _,
      conn: {
        left: f,
        right: c,
        top: p,
        bottom: m
      }
    };
  }
  isValidColor(t) {
    const e = new Option().style;
    return e.color = t, e.color !== "";
  }
  setMarkerColor(t) {
    this.isValidColor(t) || (t = "rgb(255,255,255)", console.warn("Error: invalid color name property - " + t)), vt.polyline.element().setAttribute("stroke", t), vt.arrowLine.element().setAttribute("stroke", t);
  }
  renderArrow(t) {
    const e = t.x_from || 0, i = t.y_from || 0, r = t.x_to || 0, n = t.y_to || 0, a = t.by_top_side;
    let s = 0, o = 0;
    a === "hor" ? (s = r, o = i) : (s = e, o = n), this.enjoyHintElement.classList.add(U.svgTransparent.name), setTimeout(() => {
      var _;
      (_ = vt.arrowLine.element()) == null || _.remove();
      const l = `M${e},${i} Q${s},${o} ${r},${n}`, u = this.makeSVG("path", {
        style: "fill:none; stroke:rgb(255,255,255); stroke-width:3",
        "marker-end": `url(${vt.arrowMarker.toString()})`,
        d: l,
        id: vt.arrowLine.id
      });
      U.mainSvg.element().appendChild(u), this.renderData.arrowColor ? this.setMarkerColor(this.renderData.arrowColor) : document.querySelector(vt.polyline.toString()).setAttribute("stroke", "rgb(255,255,255)"), this.enjoyHintElement.classList.remove(U.svgTransparent.name);
    }, this.options.animationTime / 2);
  }
  getLabelElement(t) {
    const e = t.x || 0, i = t.y || 0, r = t.text || "", n = document.createElement("div");
    return n.classList.add(U.label.name), n.id = vt.label.id, n.style.top = `${i}px`, n.style.left = `${e}px`, n.innerHTML = r, this.enjoyHintElement.appendChild(n), n;
  }
  disableEventsNearRect(t) {
    const e = t.top || 0, i = t.bottom || 0, r = t.left || 0, n = t.right || 0;
    this.topDisEvents.style.top = "0", this.topDisEvents.style.left = "0", this.topDisEvents.style.height = `${e}px`, this.bottomDisEvents.style.top = `${i}px`, this.bottomDisEvents.style.left = "0", this.leftDisEvents.style.top = "0", this.leftDisEvents.style.left = "0", this.leftDisEvents.style.width = `${r}px`, this.rightDisEvents.style.top = "0", this.rightDisEvents.style.left = `${n}px`;
  }
  findParentDialog(t) {
    return t != null && t.tagName ? t.tagName === "MD-DIALOG" ? t : this.findParentDialog(t.parentElement) : null;
  }
  renderLabelWithShape(t, e) {
    this.renderData = t, this.customBtnProps = e;
    const i = this.findParentDialog(
      document.querySelector(this.renderData.enjoyHintElementSelector)
    );
    i != null && pt(i, "dialogClosing", () => {
      this.stopFunction();
    }), this.resetComponentStuff();
    const r = t.shape || "rect";
    let n = {}, a = 0, s = 0;
    const o = {
      top: t.top || 0,
      bottom: t.bottom || 0,
      left: t.left || 0,
      right: t.right || 0
    };
    let l = { top: 0, bottom: 0, left: 0, right: 0 };
    switch (r) {
      case "circle":
        a = s = t.radius, l = {
          top: t.centerY - s + o.top,
          bottom: t.centerY + s - o.bottom,
          left: t.centerX - a + o.left,
          right: t.centerX + a - o.right
        };
        const rt = l.right - l.left, S = l.bottom - l.top;
        t.radius = Math.round(Math.min(rt, S) / 2), a = s = Math.round(t.radius / 2);
        const A = Math.round(rt / 2), O = Math.round(S / 2);
        t.centerX = l.left + A, t.centerY = l.top + O, n = this.renderCircle({
          x: t.centerX,
          y: t.centerY,
          r: t.radius
        });
        break;
      case "rect":
        a = Math.round(t.width / 2), s = Math.round(t.height / 2), l = {
          top: t.centerY - s + o.top,
          bottom: t.centerY + s - o.bottom,
          left: t.centerX - a + o.left,
          right: t.centerX + a - o.right
        }, t.width = l.right - l.left, t.height = l.bottom - l.top, a = Math.round(t.width / 2), s = Math.round(t.height / 2), t.centerX = l.left + a, t.centerY = l.top + s, n = this.renderRect({
          x: t.centerX,
          y: t.centerY,
          w: t.width,
          h: t.height,
          r: t.radius
        });
        break;
    }
    const u = {
      w: this.enjoyHintElement.offsetWidth,
      h: this.enjoyHintElement.offsetHeight
    }, _ = this.getLabelElement({
      x: 0,
      y: 0,
      text: t.text
    }), g = _.offsetWidth, f = _.offsetHeight;
    _.remove();
    const c = t.centerY - s, p = u.h - (t.centerY + s), m = t.centerX - a, C = u.w - (t.centerX + a), P = window.innerHeight < 670 ? 130 : 150, d = window.innerHeight < 670 ? 0 : 40, v = P + f + d, y = s + P, x = [
      {
        name: "right_center",
        commonArea: C * window.innerHeight,
        width: C,
        height: window.innerHeight
      },
      {
        name: "right_top",
        commonArea: C * c,
        width: C,
        height: c
      },
      {
        name: "right_bottom",
        commonArea: C * p,
        width: C,
        height: p
      },
      {
        name: "left_center",
        commonArea: m * window.innerHeight,
        width: m,
        height: window.innerHeight
      },
      {
        name: "left_top",
        commonArea: m * c,
        width: m,
        height: c
      },
      {
        name: "left_bottom",
        commonArea: m * p,
        width: m,
        height: p
      },
      {
        name: "center_top",
        commonArea: window.innerWidth * c,
        width: window.innerWidth,
        height: c
      },
      {
        name: "center_bottom",
        commonArea: window.innerWidth * p,
        width: window.innerWidth,
        height: p
      }
    ], T = g, b = window.innerHeight <= 670 ? v : v + 20, E = x.sort(function(rt, S) {
      return rt.commonArea - S.commonArea;
    });
    let w = "oversized";
    for (let rt = 0; rt < E.length; rt++) {
      const { name: S, width: A, height: O } = E[rt];
      A >= T && O >= b && (w = S);
    }
    const k = t.shape === "circle" ? t.radius * 2 : t.width ? t.width : t.radius * 2, M = t.shape === "circle" ? t.radius * 2 : t.height ? t.height : t.radius * 2, F = t.centerX + k / 2 + 80, N = t.centerX - g - k / 2 - 80, D = window.innerWidth / 2 - g / 2, H = t.centerY - y - f, W = t.centerY + y, Y = window.innerHeight / 2 - b / 2 + 20;
    let V = 0, R = 0, G = 0, $ = 0, Z = 0, q = 0, mt = "hor";
    switch (w) {
      case "center_top":
        R = H, V = D, G = t.centerX, $ = t.centerY - M / 2 - 20;
        break;
      case "center_bottom":
        R = W, V = D, G = t.centerX, $ = t.centerY + M / 2 + 20;
        break;
      case "left_center":
        R = Y, V = N, G = t.centerX - k / 2 - 20, $ = t.centerY, mt = "ver";
        break;
      case "left_top":
        R = H, V = N, G = t.centerX - k / 2, $ = t.centerY - 20;
        break;
      case "left_bottom":
        R = W, V = N, G = t.centerX - k / 2, $ = t.centerY + 20, mt = "ver";
        break;
      case "right_center":
        R = Y, V = F, G = t.centerX + k / 2 + 20, $ = t.centerY, mt = "ver";
        break;
      case "right_top":
        R = H, V = F, G = t.centerX + k / 2, $ = t.centerY - 20;
        break;
      case "right_bottom":
        R = W, V = F, G = t.centerX + k / 2, $ = t.centerY + 20, mt = "ver";
        break;
    }
    Z = V + g / 2, q = t.centerY > R + f / 2 ? R + f : R, t.centerY < 0 ? $ = 20 : t.centerY > window.innerHeight + 20 && ($ = window.innerHeight - 20), t.centerY >= R && t.centerY <= R + f && (Z = t.centerX > V ? V + g : V, q = t.centerY), this.renderLabel({
      x: V,
      y: R,
      text: t.text
    }), setTimeout(() => {
      var yt, xt;
      const rt = this.nextButton.offsetWidth + this.skipButton.offsetWidth + this.prevButton.offsetWidth + 30;
      let S = V - 100, A = R + f + 40;
      rt + V > G && (S = G >= t.centerX ? G + 20 : V + g / 2), (rt + S > window.innerWidth || S < 0) && (S = 10, A = q < $ ? R - 80 : R + f + 40);
      const O = S, it = A;
      window.innerWidth <= 640 ? (S = 10, A = 10, this.nextButton.innerHTML = "&#8250;", this.prevButton.innerHTML = "&#8249;") : (S = O, A = it, this.nextButton.innerHTML = (yt = this.customBtnProps.nextButton) != null && yt.text ? this.customBtnProps.nextButton.text : "Next", this.prevButton.innerHTML = (xt = this.customBtnProps.prevButton) != null && xt.text ? this.customBtnProps.prevButton.text : "Previous"), this.prevButton.style.left = `${S}px`, this.prevButton.style.top = `${A}px`;
      let Q = S + this.prevButton.offsetWidth + 10, nt = S + this.prevButton.offsetWidth + this.nextButton.offsetWidth + 20;
      this.nextBtn === "hide" && (nt = S + this.prevButton.offsetWidth + 10), this.prevBtn === "hide" && (Q = S, nt = S + this.nextButton.offsetWidth + 10), this.nextButton.style.left = `${Q}px`, this.nextButton.style.top = `${A}px`, this.skipButton.style.left = `${nt}px`, this.skipButton.style.top = `${A}px`;
    }, 0), this.closeButton.style.right = "10px", this.closeButton.style.top = "10px", this.disableEventsNearRect({
      top: n.top,
      bottom: n.bottom,
      left: n.left,
      right: n.right
    }), this.renderArrow({
      x_from: Z,
      y_from: q,
      x_to: G,
      y_to: $,
      by_top_side: mt
    });
  }
  clear() {
    var t;
    (t = this.canvas.getContext("2d")) == null || t.clearRect(0, 0, 3e3, 2e3);
  }
};
B(Ue, "defaults", {
  onNextClick: () => {
  },
  onPrevClick: () => {
  },
  onSkipClick: () => {
  },
  fill: "",
  animationTime: 0
});
let Zi = Ue;
const He = class He {
  constructor(t, e = {}) {
    B(this, "options");
    B(this, "originalElementOverflow");
    B(this, "data", []);
    B(this, "currentStepIndex", 0);
    B(this, "$eventElement");
    B(this, "nextUserClass");
    B(this, "prevUserClass");
    B(this, "skipUserClass");
    B(this, "instance");
    B(this, "lockTouch", (t) => {
      t.preventDefault();
    });
    B(this, "inputHandler", (t) => {
      t instanceof KeyboardEvent && t.key !== this.currentStep.key || (this.currentStepIndex++, this.stepAction());
    });
    this.hostElement = t, this.options = { ...He.defaults, ...e }, this.originalElementOverflow = getComputedStyle(t).overflow, this.init(), pt(window, "resize", () => {
      this.$eventElement != null && this.redoEventsNearRect(this.$eventElement.getBoundingClientRect());
    });
  }
  get currentStep() {
    return this.data[this.currentStepIndex];
  }
  init() {
    var e;
    U.enjoyHint.element() && ((e = U.enjoyHint.element()) == null || e.remove()), this.hostElement.style.overflow = "hidden", pt(document, "touchmove", this.lockTouch);
    const t = {
      onNextClick: () => {
        this.nextStep();
      },
      onPrevClick: () => {
        this.prevStep();
      },
      onSkipClick: () => {
        var i, r;
        (r = (i = this.options).onSkip) == null || r.call(i), this.skipAll();
      },
      fill: this.options.backgroundColor
    };
    this.instance = new Zi(this.hostElement, t);
  }
  destroyEnjoy() {
    var t;
    $n(), (t = U.enjoyHint.element()) == null || t.remove(), this.hostElement.style.overflow = this.originalElementOverflow;
  }
  clear() {
    var t, e, i, r, n, a, s, o, l, u, _, g;
    [
      {
        button: U.previousBtn.element(),
        className: (e = (t = this.currentStep) == null ? void 0 : t.prevButton) == null ? void 0 : e.className,
        text: ((r = (i = this.currentStep) == null ? void 0 : i.prevButton) == null ? void 0 : r.text) ?? this.options.btnPrevText
      },
      {
        button: U.nextBtn.element(),
        className: (a = (n = this.currentStep) == null ? void 0 : n.nextButton) == null ? void 0 : a.className,
        text: ((o = (s = this.currentStep) == null ? void 0 : s.nextButton) == null ? void 0 : o.text) ?? this.options.btnNextText
      },
      {
        button: U.skipBtn.element(),
        className: (u = (l = this.currentStep) == null ? void 0 : l.skipButton) == null ? void 0 : u.className,
        text: ((g = (_ = this.currentStep) == null ? void 0 : _.skipButton) == null ? void 0 : g.text) ?? this.options.btnSkipText
      }
    ].filter((f) => !!f.button).forEach(({ button: f, className: c, text: p }) => {
      c && f.classList.remove(c), f.textContent = p ?? "";
    });
  }
  hideCurrentHint() {
    var t, e;
    this.renderCircle(), (t = vt.label.element()) == null || t.remove(), (e = vt.arrowLine.element()) == null || e.remove(), this.hidePrev(), this.hideNext(), this.hideSkip();
  }
  stepAction() {
    var n, a, s, o, l, u;
    if (!((n = this.data) != null && n[this.currentStepIndex])) {
      this.hide(), (s = (a = this.options).onEnd) == null || s.call(a), this.destroyEnjoy();
      return;
    }
    (l = (o = this.options).onNext) == null || l.call(o);
    const t = U.enjoyHint.element();
    t == null || t.classList.remove(
      `${U.enjoyHint.name}-step-${this.currentStepIndex}`
    ), t == null || t.classList.remove(
      `${U.enjoyHint.name}-step-${this.currentStepIndex + 1}`
    ), t == null || t.classList.remove(
      `${U.enjoyHint.name}-step-${this.currentStepIndex + 2}`
    ), t == null || t.classList.add(
      `${U.enjoyHint.name}-step-${this.currentStepIndex + 1}`
    );
    const e = this.data[this.currentStepIndex];
    let i = e.scrollAnimationSpeed ?? 250;
    (u = e.onBeforeStart) == null || u.call(e);
    const r = e.timeout || 0;
    setTimeout(() => {
      if (!e.selector) {
        for (const [g, f] of Object.entries(e))
          if (g.includes(" ")) {
            const [c, p] = g.split(" ");
            e.selector = p, e.event = c, (c == "next" || c == "auto" || c == "custom") && (e.eventType = c), e.description = f;
          }
      }
      setTimeout(() => {
        this.clear();
      }, 250);
      const _ = document.querySelector(e.selector).getBoundingClientRect();
      _.top < 0 || _.bottom > (window.innerHeight || document.documentElement.clientHeight) ? (this.hideCurrentHint(), document.body.scrollTo({
        top: _.top,
        behavior: "smooth"
      })) : i = 250, setTimeout(() => {
        var b, E, w, k;
        const g = document.querySelector(
          e.selector
        ), f = e.event, c = this.makeEventName(e.event);
        if (this.show(), this.$eventElement = g, console.log("stepAction", e), e.eventSelector && (this.$eventElement = document.querySelector(e.eventSelector)), (b = this.$eventElement) == null || b.removeEventListener(
          f,
          this.stepAction
        ), (E = this.$eventElement) == null || E.removeEventListener(
          c,
          this.stepAction
        ), Wi(this.$eventElement, "keydown", this.inputHandler), e.eventType === "key" && pt(this.$eventElement, "keydown", this.inputHandler), e.showNext || this.hideNext(), this.hidePrev(), this.currentStepIndex > 0 && this.showPrev(), e.showPrev === !1 && this.hidePrev(), e.showSkip === !1 ? this.hideSkip() : this.showSkip(), e.nextButton) {
          const M = U.nextBtn.element();
          M.classList.add(e.nextButton.className || ""), M.textContent = e.nextButton.text || "Next", this.nextUserClass = e.nextButton.className;
        }
        if (e.prevButton) {
          const M = U.previousBtn.element();
          M.classList.add(e.prevButton.className || ""), M.textContent = e.prevButton.text || "Previous", this.prevUserClass = e.prevButton.className;
        }
        if (e.skipButton) {
          const M = U.skipBtn.element();
          M.classList.add(e.skipButton.className || ""), M.textContent = e.skipButton.text || "Skip", this.skipUserClass = e.skipButton.className;
        }
        if (e.eventType)
          switch (e.eventType) {
            case "auto":
              switch ((k = (w = this.$eventElement) == null ? void 0 : w[e.event ?? ""]) == null || k.call(w), e.event) {
              }
              this.currentStepIndex++, this.stepAction();
              return;
            case "custom":
              pt(this.$eventElement, c, () => {
                this.currentStepIndex++, Wi(this.$eventElement, c, this.stepAction), this.stepAction();
              });
              break;
            case "next":
              this.showNext();
              break;
          }
        else
          pt(this.$eventElement, f, this.inputHandler);
        const p = Math.max(
          g.offsetWidth,
          g.offsetHeight
        ), m = e.radius || Math.round(p / 2) + 5, C = g.getBoundingClientRect(), P = g.offsetWidth, d = g.offsetHeight, v = e.margin !== void 0 ? e.margin : 10, y = {
          x: C.left + Math.round(P / 2),
          y: C.top + Math.round(d / 2) - window.scrollY
        }, x = {
          enjoyHintElementSelector: e.selector,
          centerX: y.x,
          centerY: y.y,
          text: e.description,
          arrowColor: e.arrowColor,
          top: e.top,
          bottom: e.bottom,
          left: e.left,
          right: e.right,
          margin: e.margin,
          height: NaN,
          width: NaN,
          radius: NaN
        }, T = {
          nextButton: e.nextButton,
          prevButton: e.prevButton
        };
        if (x.centerX === 0 && x.centerY === 0)
          return this.hide(), this.destroyEnjoy(), console.log("Error: Element position couldn't be reached");
        e.shape && e.shape === "circle" ? (x.shape = "circle", x.radius = m) : (x.radius = 0, x.width = P + v, x.height = d + v), this.renderLabelWithShape(x, T);
      }, i + 20);
    }, r);
  }
  nextStep() {
    this.currentStepIndex++, this.stepAction();
  }
  prevStep() {
    this.currentStepIndex--, this.stepAction();
  }
  skipAll() {
    var i;
    const t = this.data[this.currentStepIndex], e = document.querySelector(t.selector);
    (i = this.$eventElement) == null || i.removeEventListener(
      this.makeEventName(t.event),
      this.stepAction
    ), e.removeEventListener("keydown", this.inputHandler), this.destroyEnjoy();
  }
  makeEventName(t, e = !1) {
    return t + (e ? "custom" : "") + ".enjoy_hint";
  }
  stop() {
    this.skipAll();
  }
  reRunScript(t) {
    this.currentStepIndex = t, this.stepAction();
  }
  run() {
    var t, e;
    this.currentStepIndex = 0, (e = (t = this.options).onStart) == null || e.call(t), this.stepAction();
  }
  resume() {
    this.stepAction();
  }
  setCurrentStep(t) {
    this.currentStepIndex = t;
  }
  getCurrentStep() {
    return this.currentStepIndex;
  }
  trigger(t) {
    switch (t) {
      case "next":
        this.nextStep();
        break;
      case "skip":
        this.skipAll();
        break;
      default:
        this.hostElement.dispatchEvent(
          new CustomEvent(this.makeEventName(t, !0))
        );
    }
  }
  set(t) {
    if (!(t instanceof Array) || t.length < 1)
      throw new Error("Configurations list isn't correct.");
    this.data = t;
  }
  hide() {
    this.instance.hide();
  }
  show() {
    this.instance.show();
  }
  showPrev() {
    this.instance.showPrevBtn();
  }
  showSkip() {
    this.instance.showSkipBtn();
  }
  showNext() {
    this.instance.showNextBtn();
  }
  redoEventsNearRect(t) {
    this.instance.disableEventsNearRect(t);
  }
  renderCircle(t) {
    this.instance.renderCircle(t);
  }
  hidePrev() {
    this.instance.hidePrevBtn();
  }
  hideNext() {
    this.instance.hideNextBtn();
  }
  hideSkip() {
    this.instance.hideSkipBtn();
  }
  renderLabelWithShape(t, e) {
    this.instance.renderLabelWithShape(t, e);
  }
};
B(He, "defaults", {
  onStart: () => {
  },
  onEnd: () => {
  },
  onSkip: () => {
  },
  onNext: () => {
  },
  btnPrevText: "Previous",
  btnNextText: "Next",
  btnSkipText: "Skip",
  backgroundColor: "rgba(0,0,0,0.6)"
});
let en = He;
export {
  en as EnjoyHint
};
