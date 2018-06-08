var _dll_vendor =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 173);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon2", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quarterPi", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony export (immutable) */ __webpack_exports__["acos"] = acos;
/* harmony export (immutable) */ __webpack_exports__["asin"] = asin;
/* harmony export (immutable) */ __webpack_exports__["haversin"] = haversin;
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["default"] = (function(scheme) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["interpolateRgbBasis"])(scheme[scheme.length - 1]);
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_create__ = __webpack_require__(200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return __WEBPACK_IMPORTED_MODULE_0__src_create__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_creator__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return __WEBPACK_IMPORTED_MODULE_1__src_creator__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_local__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "local", function() { return __WEBPACK_IMPORTED_MODULE_2__src_local__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_matcher__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_3__src_matcher__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_mouse__ = __webpack_require__(230);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return __WEBPACK_IMPORTED_MODULE_4__src_mouse__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_namespace__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return __WEBPACK_IMPORTED_MODULE_5__src_namespace__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_namespaces__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return __WEBPACK_IMPORTED_MODULE_6__src_namespaces__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_point__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return __WEBPACK_IMPORTED_MODULE_7__src_point__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_select__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_8__src_select__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_selectAll__ = __webpack_require__(231);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_9__src_selectAll__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_selection_index__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return __WEBPACK_IMPORTED_MODULE_10__src_selection_index__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_selector__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return __WEBPACK_IMPORTED_MODULE_11__src_selector__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_selectorAll__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return __WEBPACK_IMPORTED_MODULE_12__src_selectorAll__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_selection_style__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return __WEBPACK_IMPORTED_MODULE_13__src_selection_style__["styleValue"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_touch__ = __webpack_require__(232);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return __WEBPACK_IMPORTED_MODULE_14__src_touch__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_touches__ = __webpack_require__(233);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return __WEBPACK_IMPORTED_MODULE_15__src_touches__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_window__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return __WEBPACK_IMPORTED_MODULE_16__src_window__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_selection_on__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return __WEBPACK_IMPORTED_MODULE_17__src_selection_on__["event"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return __WEBPACK_IMPORTED_MODULE_17__src_selection_on__["customEvent"]; });




















/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bisect__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["bisectRight"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["bisectLeft"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ascending__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ascending__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_bisector__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return __WEBPACK_IMPORTED_MODULE_2__src_bisector__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cross__ = __webpack_require__(176);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return __WEBPACK_IMPORTED_MODULE_3__src_cross__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_descending__ = __webpack_require__(177);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return __WEBPACK_IMPORTED_MODULE_4__src_descending__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_deviation__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return __WEBPACK_IMPORTED_MODULE_5__src_deviation__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_extent__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return __WEBPACK_IMPORTED_MODULE_6__src_extent__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_histogram__ = __webpack_require__(178);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return __WEBPACK_IMPORTED_MODULE_7__src_histogram__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__ = __webpack_require__(181);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__ = __webpack_require__(182);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_max__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_11__src_max__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_mean__ = __webpack_require__(184);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return __WEBPACK_IMPORTED_MODULE_12__src_mean__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_median__ = __webpack_require__(185);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "median", function() { return __WEBPACK_IMPORTED_MODULE_13__src_median__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_merge__ = __webpack_require__(186);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_14__src_merge__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_min__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_15__src_min__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_pairs__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return __WEBPACK_IMPORTED_MODULE_16__src_pairs__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_permute__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return __WEBPACK_IMPORTED_MODULE_17__src_permute__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_quantile__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return __WEBPACK_IMPORTED_MODULE_18__src_quantile__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_range__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return __WEBPACK_IMPORTED_MODULE_19__src_range__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_scan__ = __webpack_require__(188);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return __WEBPACK_IMPORTED_MODULE_20__src_scan__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_shuffle__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_21__src_shuffle__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sum__ = __webpack_require__(190);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sum__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_ticks__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["tickIncrement"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["tickStep"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_transpose__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return __WEBPACK_IMPORTED_MODULE_24__src_transpose__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_variance__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return __WEBPACK_IMPORTED_MODULE_25__src_variance__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_zip__ = __webpack_require__(191);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return __WEBPACK_IMPORTED_MODULE_26__src_zip__["default"]; });





























/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = newInterval;
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return __WEBPACK_IMPORTED_MODULE_1__src_array__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return __WEBPACK_IMPORTED_MODULE_2__src_basis__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return __WEBPACK_IMPORTED_MODULE_4__src_date__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return __WEBPACK_IMPORTED_MODULE_6__src_object__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(238);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return __WEBPACK_IMPORTED_MODULE_8__src_string__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(239);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["interpolateTransformCss"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["interpolateTransformSvg"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(242);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return __WEBPACK_IMPORTED_MODULE_10__src_zoom__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["rgbBasis"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["rgbBasisClosed"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(243);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return __WEBPACK_IMPORTED_MODULE_12__src_hsl__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return __WEBPACK_IMPORTED_MODULE_12__src_hsl__["hslLong"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(244);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return __WEBPACK_IMPORTED_MODULE_13__src_lab__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(245);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return __WEBPACK_IMPORTED_MODULE_14__src_hcl__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return __WEBPACK_IMPORTED_MODULE_14__src_hcl__["hclLong"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(246);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["cubehelixLong"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_piecewise__ = __webpack_require__(247);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return __WEBPACK_IMPORTED_MODULE_16__src_piecewise__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_quantize__ = __webpack_require__(248);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return __WEBPACK_IMPORTED_MODULE_17__src_quantize__["default"]; });




















/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["Selection"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__merge__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__call__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nodes__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__size__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__empty__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attr__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__property__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classed__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__html__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__raise__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lower__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__append__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__insert__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__remove__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__clone__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__datum__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__on__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dispatch__ = __webpack_require__(228);































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select__["default"],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll__["default"],
  filter: __WEBPACK_IMPORTED_MODULE_2__filter__["default"],
  data: __WEBPACK_IMPORTED_MODULE_3__data__["default"],
  enter: __WEBPACK_IMPORTED_MODULE_4__enter__["default"],
  exit: __WEBPACK_IMPORTED_MODULE_5__exit__["default"],
  merge: __WEBPACK_IMPORTED_MODULE_6__merge__["default"],
  order: __WEBPACK_IMPORTED_MODULE_7__order__["default"],
  sort: __WEBPACK_IMPORTED_MODULE_8__sort__["default"],
  call: __WEBPACK_IMPORTED_MODULE_9__call__["default"],
  nodes: __WEBPACK_IMPORTED_MODULE_10__nodes__["default"],
  node: __WEBPACK_IMPORTED_MODULE_11__node__["default"],
  size: __WEBPACK_IMPORTED_MODULE_12__size__["default"],
  empty: __WEBPACK_IMPORTED_MODULE_13__empty__["default"],
  each: __WEBPACK_IMPORTED_MODULE_14__each__["default"],
  attr: __WEBPACK_IMPORTED_MODULE_15__attr__["default"],
  style: __WEBPACK_IMPORTED_MODULE_16__style__["default"],
  property: __WEBPACK_IMPORTED_MODULE_17__property__["default"],
  classed: __WEBPACK_IMPORTED_MODULE_18__classed__["default"],
  text: __WEBPACK_IMPORTED_MODULE_19__text__["default"],
  html: __WEBPACK_IMPORTED_MODULE_20__html__["default"],
  raise: __WEBPACK_IMPORTED_MODULE_21__raise__["default"],
  lower: __WEBPACK_IMPORTED_MODULE_22__lower__["default"],
  append: __WEBPACK_IMPORTED_MODULE_23__append__["default"],
  insert: __WEBPACK_IMPORTED_MODULE_24__insert__["default"],
  remove: __WEBPACK_IMPORTED_MODULE_25__remove__["default"],
  clone: __WEBPACK_IMPORTED_MODULE_26__clone__["default"],
  datum: __WEBPACK_IMPORTED_MODULE_27__datum__["default"],
  on: __WEBPACK_IMPORTED_MODULE_28__on__["default"],
  dispatch: __WEBPACK_IMPORTED_MODULE_29__dispatch__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (selection);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["rgb"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["hsl"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(236);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["hcl"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["lch"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["gray"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(237);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["default"]; });





/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULED", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTING", function() { return STARTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTED", function() { return STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUNNING", function() { return RUNNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDING", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDED", function() { return ENDED; });
/* harmony export (immutable) */ __webpack_exports__["init"] = init;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["get"] = get;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_timer__ = __webpack_require__(36);



var emptyOn = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["dispatch"])("start", "end", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["default"] = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTING) throw new Error("too late; already started");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["timer"])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["timeout"])(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["timeout"])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = projection;
/* harmony export (immutable) */ __webpack_exports__["projectionMutator"] = projectionMutator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clip_circle__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip_rectangle__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotation__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fit__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resample__ = __webpack_require__(357);











var transformRadians = Object(__WEBPACK_IMPORTED_MODULE_7__transform__["transformer"])({
  point: function(x, y) {
    this.stream.point(x * __WEBPACK_IMPORTED_MODULE_5__math__["radians"], y * __WEBPACK_IMPORTED_MODULE_5__math__["radians"]);
  }
});

function transformRotate(rotate) {
  return Object(__WEBPACK_IMPORTED_MODULE_7__transform__["transformer"])({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function scaleTranslate(k, dx, dy) {
  function transform(x, y) {
    return [dx + k * x, dy - k * y];
  }
  transform.invert = function(x, y) {
    return [(x - dx) / k, (dy - y) / k];
  };
  return transform;
}

function scaleTranslateRotate(k, dx, dy, alpha) {
  var cosAlpha = Object(__WEBPACK_IMPORTED_MODULE_5__math__["cos"])(alpha),
      sinAlpha = Object(__WEBPACK_IMPORTED_MODULE_5__math__["sin"])(alpha),
      a = cosAlpha * k,
      b = sinAlpha * k,
      ai = cosAlpha / k,
      bi = sinAlpha / k,
      ci = (sinAlpha * dy - cosAlpha * dx) / k,
      fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform(x, y) {
    return [a * x - b * y + dx, dy - b * x - a * y];
  }
  transform.invert = function(x, y) {
    return [ai * x - bi * y + ci, fi - bi * x - ai * y];
  };
  return transform;
}

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, // pre-rotate
      alpha = 0, // post-rotate
      theta = null, preclip = __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["default"], // pre-clip angle
      x0 = null, y0, x1, y1, postclip = __WEBPACK_IMPORTED_MODULE_4__identity__["default"], // post-clip extent
      delta2 = 0.5, // precision
      projectResample,
      projectTransform,
      projectRotateTransform,
      cache,
      cacheStream;

  function projection(point) {
    return projectRotateTransform(point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["radians"], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["radians"]);
  }

  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["degrees"], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["degrees"]];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function(_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? Object(__WEBPACK_IMPORTED_MODULE_1__clip_circle__["default"])(theta = _ * __WEBPACK_IMPORTED_MODULE_5__math__["radians"]) : (theta = null, __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["default"]), reset()) : theta * __WEBPACK_IMPORTED_MODULE_5__math__["degrees"];
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_4__identity__["default"]) : Object(__WEBPACK_IMPORTED_MODULE_2__clip_rectangle__["default"])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["radians"], phi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["radians"], recenter()) : [lambda * __WEBPACK_IMPORTED_MODULE_5__math__["degrees"], phi * __WEBPACK_IMPORTED_MODULE_5__math__["degrees"]];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["radians"], deltaPhi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["radians"], deltaGamma = _.length > 2 ? _[2] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["radians"] : 0, recenter()) : [deltaLambda * __WEBPACK_IMPORTED_MODULE_5__math__["degrees"], deltaPhi * __WEBPACK_IMPORTED_MODULE_5__math__["degrees"], deltaGamma * __WEBPACK_IMPORTED_MODULE_5__math__["degrees"]];
  };

  projection.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["radians"], recenter()) : alpha * __WEBPACK_IMPORTED_MODULE_5__math__["degrees"];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample__["default"])(projectTransform, delta2 = _ * _), reset()) : Object(__WEBPACK_IMPORTED_MODULE_5__math__["sqrt"])(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["fitExtent"])(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["fitSize"])(projection, size, object);
  };

  projection.fitWidth = function(width, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["fitWidth"])(projection, width, object);
  };

  projection.fitHeight = function(height, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["fitHeight"])(projection, height, object);
  };

  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, alpha).apply(null, project(lambda, phi)),
        transform = (alpha ? scaleTranslateRotate : scaleTranslate)(k, x - center[0], y - center[1], alpha);
    rotate = Object(__WEBPACK_IMPORTED_MODULE_6__rotation__["rotateRadians"])(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = Object(__WEBPACK_IMPORTED_MODULE_3__compose__["default"])(project, transform);
    projectRotateTransform = Object(__WEBPACK_IMPORTED_MODULE_3__compose__["default"])(rotate, projectTransform);
    projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample__["default"])(projectTransform, delta2);
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationSecond", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationMinute", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationHour", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationDay", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationWeek", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["Transition"] = Transition;
/* harmony export (immutable) */ __webpack_exports__["default"] = transition;
/* harmony export (immutable) */ __webpack_exports__["newId"] = newId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attrTween__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delay__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__duration__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ease__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__merge__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__on__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__remove__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__select__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selectAll__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selection__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__styleTween__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__text__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__transition__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tween__ = __webpack_require__(37);



















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: __WEBPACK_IMPORTED_MODULE_10__select__["default"],
  selectAll: __WEBPACK_IMPORTED_MODULE_11__selectAll__["default"],
  filter: __WEBPACK_IMPORTED_MODULE_6__filter__["default"],
  merge: __WEBPACK_IMPORTED_MODULE_7__merge__["default"],
  selection: __WEBPACK_IMPORTED_MODULE_12__selection__["default"],
  transition: __WEBPACK_IMPORTED_MODULE_16__transition__["default"],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: __WEBPACK_IMPORTED_MODULE_8__on__["default"],
  attr: __WEBPACK_IMPORTED_MODULE_1__attr__["default"],
  attrTween: __WEBPACK_IMPORTED_MODULE_2__attrTween__["default"],
  style: __WEBPACK_IMPORTED_MODULE_13__style__["default"],
  styleTween: __WEBPACK_IMPORTED_MODULE_14__styleTween__["default"],
  text: __WEBPACK_IMPORTED_MODULE_15__text__["default"],
  remove: __WEBPACK_IMPORTED_MODULE_9__remove__["default"],
  tween: __WEBPACK_IMPORTED_MODULE_17__tween__["default"],
  delay: __WEBPACK_IMPORTED_MODULE_3__delay__["default"],
  duration: __WEBPACK_IMPORTED_MODULE_4__duration__["default"],
  ease: __WEBPACK_IMPORTED_MODULE_5__ease__["default"]
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = noop;
function noop() {}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_path__ = __webpack_require__(289);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return __WEBPACK_IMPORTED_MODULE_0__src_path__["default"]; });



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["default"] = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dispatch__ = __webpack_require__(198);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dispatch__["default"]; });



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Math.random();
});


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["hue"] = hue;
/* harmony export (immutable) */ __webpack_exports__["gamma"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["default"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(112);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(isNaN(a) ? b : a);
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["spherical"] = spherical;
/* harmony export (immutable) */ __webpack_exports__["cartesian"] = cartesian;
/* harmony export (immutable) */ __webpack_exports__["cartesianDot"] = cartesianDot;
/* harmony export (immutable) */ __webpack_exports__["cartesianCross"] = cartesianCross;
/* harmony export (immutable) */ __webpack_exports__["cartesianAddInPlace"] = cartesianAddInPlace;
/* harmony export (immutable) */ __webpack_exports__["cartesianScale"] = cartesianScale;
/* harmony export (immutable) */ __webpack_exports__["cartesianNormalizeInPlace"] = cartesianNormalizeInPlace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


function spherical(cartesian) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan2"])(cartesian[1], cartesian[0]), Object(__WEBPACK_IMPORTED_MODULE_0__math__["asin"])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(phi);
  return [cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(lambda), cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(lambda), Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["azimuthalRaw"] = azimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["azimuthalInvert"] = azimuthalInvert;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(x),
        cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(y),
        k = scale(cx * cy);
    return [
      k * cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(x),
      k * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(x * x + y * y),
        c = angle(z),
        sc = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(c),
        cc = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(c);
    return [
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan2"])(x * sc, z * cc),
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["asin"])(z && y * sc / z)
    ];
  }
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["linearish"] = linearish;
/* harmony export (immutable) */ __webpack_exports__["default"] = linear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat__ = __webpack_require__(407);





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__tickFormat__["default"])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["default"])(__WEBPACK_IMPORTED_MODULE_2__continuous__["deinterpolateLinear"], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateNumber"]);

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["copy"])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (immutable) */ __webpack_exports__["acos"] = acos;
/* harmony export (immutable) */ __webpack_exports__["asin"] = asin;
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon2", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beaches", function() { return beaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cells", function() { return cells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circles", function() { return circles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edges", function() { return edges; });
/* harmony export (immutable) */ __webpack_exports__["default"] = Diagram;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Beach__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cell__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Circle__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Edge__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RedBlackTree__ = __webpack_require__(87);






var epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1]
      || b[0] - a[0];
}

function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;

  edges = [];
  cells = new Array(sites.length);
  beaches = new __WEBPACK_IMPORTED_MODULE_4__RedBlackTree__["default"];
  circles = new __WEBPACK_IMPORTED_MODULE_4__RedBlackTree__["default"];

  while (true) {
    circle = __WEBPACK_IMPORTED_MODULE_2__Circle__["firstCircle"];
    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
      if (site[0] !== x || site[1] !== y) {
        Object(__WEBPACK_IMPORTED_MODULE_0__Beach__["addBeach"])(site);
        x = site[0], y = site[1];
      }
      site = sites.pop();
    } else if (circle) {
      Object(__WEBPACK_IMPORTED_MODULE_0__Beach__["removeBeach"])(circle.arc);
    } else {
      break;
    }
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__Cell__["sortCellHalfedges"])();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["clipEdges"])(x0, y0, x1, y1);
    Object(__WEBPACK_IMPORTED_MODULE_1__Cell__["clipCells"])(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;

  beaches =
  circles =
  edges =
  cells = null;
}

Diagram.prototype = {
  constructor: Diagram,

  polygons: function() {
    var edges = this.edges;

    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) { return Object(__WEBPACK_IMPORTED_MODULE_1__Cell__["cellHalfedgeStart"])(cell, edges[i]); });
      polygon.data = cell.site.data;
      return polygon;
    });
  },

  triangles: function() {
    var triangles = [],
        edges = this.edges;

    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });

    return triangles;
  },

  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },

  find: function(x, y, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;

    // Use the previously-found cell, or start with an arbitrary one.
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;

    // Traverse the half-edges to find a closer cell, if any.
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;

    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
}


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(53);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces__["xhtml"] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces__["xhtml"]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_timer__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["now"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["timer"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["timerFlush"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_timeout__ = __webpack_require__(251);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return __WEBPACK_IMPORTED_MODULE_1__src_timeout__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_interval__ = __webpack_require__(252);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return __WEBPACK_IMPORTED_MODULE_2__src_interval__["default"]; });







/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["tweenValue"] = tweenValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(9);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["get"])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["set"])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["get"])(node, id).value[name];
  };
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_nest__ = __webpack_require__(290);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return __WEBPACK_IMPORTED_MODULE_0__src_nest__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_set__ = __webpack_require__(291);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return __WEBPACK_IMPORTED_MODULE_1__src_set__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_map__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_2__src_map__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_keys__ = __webpack_require__(292);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_3__src_keys__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_values__ = __webpack_require__(293);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return __WEBPACK_IMPORTED_MODULE_4__src_values__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_entries__ = __webpack_require__(294);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return __WEBPACK_IMPORTED_MODULE_5__src_entries__["default"]; });








/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(71);


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["default"])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["rotateRadians"] = rotateRadians;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



function rotationIdentity(lambda, phi) {
  return [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["pi"] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["tau"] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["pi"] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["tau"] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= __WEBPACK_IMPORTED_MODULE_1__math__["tau"]) ? (deltaPhi || deltaGamma ? Object(__WEBPACK_IMPORTED_MODULE_0__compose__["default"])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["pi"] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["tau"] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["pi"] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["tau"] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(deltaPhi),
      sinDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(deltaPhi),
      cosDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(deltaGamma),
      sinDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["atan2"])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["asin"])(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["atan2"])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["asin"])(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["default"] = (function(rotate) {
  rotate = rotateRadians(rotate[0] * __WEBPACK_IMPORTED_MODULE_1__math__["radians"], rotate[1] * __WEBPACK_IMPORTED_MODULE_1__math__["radians"], rotate.length > 2 ? rotate[2] * __WEBPACK_IMPORTED_MODULE_1__math__["radians"] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["radians"], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["radians"]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["degrees"], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["degrees"], coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["radians"], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["radians"]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["degrees"], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["degrees"], coordinates;
  };

  return forward;
});


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = clipRectangle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rejoin__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(4);






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__math__["abs"])(p[0] - x0) < __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"] ? direction > 0 ? 0 : 3
        : Object(__WEBPACK_IMPORTED_MODULE_0__math__["abs"])(p[0] - x1) < __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"] ? direction > 0 ? 2 : 1
        : Object(__WEBPACK_IMPORTED_MODULE_0__math__["abs"])(p[1] - y0) < __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"] ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = Object(__WEBPACK_IMPORTED_MODULE_1__buffer__["default"])(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["merge"])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          Object(__WEBPACK_IMPORTED_MODULE_3__rejoin__["default"])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (Object(__WEBPACK_IMPORTED_MODULE_2__line__["default"])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["transformer"] = transformer;
/* harmony default export */ __webpack_exports__["default"] = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
});


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["deinterpolateLinear"] = deinterpolateLinear;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["default"] = continuous;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(151);






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["default"])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolate"],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_2__array__["map"].call(_, __WEBPACK_IMPORTED_MODULE_4__number__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_2__array__["slice"].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = __WEBPACK_IMPORTED_MODULE_2__array__["slice"].call(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateRound"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_interval__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return __WEBPACK_IMPORTED_MODULE_0__src_interval__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_millisecond__ = __webpack_require__(413);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["milliseconds"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["milliseconds"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_second__ = __webpack_require__(414);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeSecond", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["seconds"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcSecond", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["seconds"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_minute__ = __webpack_require__(415);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeMinute", function() { return __WEBPACK_IMPORTED_MODULE_3__src_minute__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return __WEBPACK_IMPORTED_MODULE_3__src_minute__["minutes"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_hour__ = __webpack_require__(416);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeHour", function() { return __WEBPACK_IMPORTED_MODULE_4__src_hour__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeHours", function() { return __WEBPACK_IMPORTED_MODULE_4__src_hour__["hours"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_day__ = __webpack_require__(417);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeDay", function() { return __WEBPACK_IMPORTED_MODULE_5__src_day__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeDays", function() { return __WEBPACK_IMPORTED_MODULE_5__src_day__["days"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_week__ = __webpack_require__(418);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeWeek", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["sunday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["sundays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeSunday", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["sunday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeSundays", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["sundays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeMonday", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["monday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeMondays", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["mondays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["tuesday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["tuesdays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["wednesday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["wednesdays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeThursday", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["thursday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["thursdays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeFriday", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["friday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeFridays", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["fridays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["saturday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["saturdays"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_month__ = __webpack_require__(419);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeMonth", function() { return __WEBPACK_IMPORTED_MODULE_7__src_month__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeMonths", function() { return __WEBPACK_IMPORTED_MODULE_7__src_month__["months"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_year__ = __webpack_require__(420);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeYear", function() { return __WEBPACK_IMPORTED_MODULE_8__src_year__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeYears", function() { return __WEBPACK_IMPORTED_MODULE_8__src_year__["years"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__ = __webpack_require__(421);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcMinute", function() { return __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__["utcMinutes"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcHour__ = __webpack_require__(422);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcHour", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcHour__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcHour__["utcHours"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_utcDay__ = __webpack_require__(423);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcDay", function() { return __WEBPACK_IMPORTED_MODULE_11__src_utcDay__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return __WEBPACK_IMPORTED_MODULE_11__src_utcDay__["utcDays"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__ = __webpack_require__(424);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcWeek", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcSunday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcSundays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcSunday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcSundays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcMonday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcMondays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcTuesday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcTuesdays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcWednesday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcWednesdays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcThursday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcThursdays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcFriday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcFridays"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcSaturday"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["utcSaturdays"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__ = __webpack_require__(425);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonth", function() { return __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__["utcMonths"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_utcYear__ = __webpack_require__(426);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcYear", function() { return __WEBPACK_IMPORTED_MODULE_14__src_utcYear__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return __WEBPACK_IMPORTED_MODULE_14__src_utcYear__["utcYears"]; });































/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Linear(context);
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {});


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["point"] = point;
/* harmony export (immutable) */ __webpack_exports__["Basis"] = Basis;
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Basis(context);
});


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["point"] = point;
/* harmony export (immutable) */ __webpack_exports__["Cardinal"] = Cardinal;
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(23);


/* harmony default export */ __webpack_exports__["default"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["default"];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_drag__ = __webpack_require__(199);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "drag", function() { return __WEBPACK_IMPORTED_MODULE_0__src_drag__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_nodrag__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dragDisable", function() { return __WEBPACK_IMPORTED_MODULE_1__src_nodrag__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dragEnable", function() { return __WEBPACK_IMPORTED_MODULE_1__src_nodrag__["yesdrag"]; });




/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(53);


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["default"].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["default"][prefix], local: name} : name;
});


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhtml", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["default"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function none() {}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (immutable) */ __webpack_exports__["customEvent"] = customEvent;
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(56);


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["event"], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(112);









/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant__["default"])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["default"]
      : t === "string" ? ((c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["color"])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["default"]) : __WEBPACK_IMPORTED_MODULE_6__string__["default"])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["color"] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["default"]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["default"]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["default"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["default"]
      : __WEBPACK_IMPORTED_MODULE_4__number__["default"])(a, b);
});


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["Color"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brighter", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["default"] = color;
/* harmony export (immutable) */ __webpack_exports__["rgbConvert"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["rgb"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["Rgb"] = Rgb;
/* harmony export (immutable) */ __webpack_exports__["hslConvert"] = hslConvert;
/* harmony export (immutable) */ __webpack_exports__["hsl"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(60);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define__["default"])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["default"])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["default"])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["extend"] = extend;
/* harmony default export */ __webpack_exports__["default"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["basis"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_selection_index__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_transition_index__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return __WEBPACK_IMPORTED_MODULE_1__src_transition_index__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_active__ = __webpack_require__(280);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "active", function() { return __WEBPACK_IMPORTED_MODULE_2__src_active__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_interrupt__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return __WEBPACK_IMPORTED_MODULE_3__src_interrupt__["default"]; });






/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["now"] = now;
/* harmony export (immutable) */ __webpack_exports__["Timer"] = Timer;
/* harmony export (immutable) */ __webpack_exports__["timer"] = timer;
/* harmony export (immutable) */ __webpack_exports__["timerFlush"] = timerFlush;
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["default"] = (map);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

/* harmony default export */ __webpack_exports__["default"] = (function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? ""
        : reFormat.test(text += "") ? "\"" + text.replace(/"/g, "\"\"") + "\""
        : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}

/* harmony default export */ __webpack_exports__["default"] = (function(input, init) {
  return fetch(input, init).then(responseText);
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return (Math.random() - 0.5) * 1e-6;
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_quadtree__ = __webpack_require__(314);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quadtree", function() { return __WEBPACK_IMPORTED_MODULE_0__src_quadtree__["default"]; });



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(332);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["format"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["formatPrefix"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return __WEBPACK_IMPORTED_MODULE_1__src_locale__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__ = __webpack_require__(339);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__ = __webpack_require__(340);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__ = __webpack_require__(341);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__["default"]; });








/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["conicEqualAreaRaw"] = conicEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__ = __webpack_require__(358);




function conicEqualAreaRaw(y0, y1) {
  var sy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(y0), n = (sy0 + Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (Object(__WEBPACK_IMPORTED_MODULE_0__math__["abs"])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]) return Object(__WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__["cylindricalEqualAreaRaw"])(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(c) / n;

  function project(x, y) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(c - 2 * n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(y)) / n;
    return [r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(x *= n), r0 - r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan2"])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["abs"])(r0y)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sign"])(r0y), Object(__WEBPACK_IMPORTED_MODULE_0__math__["asin"])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["conicProjection"])(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["conicProjection"] = conicProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(10);



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = __WEBPACK_IMPORTED_MODULE_0__math__["pi"] / 3,
      m = Object(__WEBPACK_IMPORTED_MODULE_1__index__["projectionMutator"])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * __WEBPACK_IMPORTED_MODULE_0__math__["radians"], phi1 = _[1] * __WEBPACK_IMPORTED_MODULE_0__math__["radians"]) : [phi0 * __WEBPACK_IMPORTED_MODULE_0__math__["degrees"], phi1 * __WEBPACK_IMPORTED_MODULE_0__math__["degrees"]];
  };

  return p;
}


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["fitExtent"] = fitExtent;
/* harmony export (immutable) */ __webpack_exports__["fitSize"] = fitSize;
/* harmony export (immutable) */ __webpack_exports__["fitWidth"] = fitWidth;
/* harmony export (immutable) */ __webpack_exports__["fitHeight"] = fitHeight;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_bounds__ = __webpack_require__(141);



function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  Object(__WEBPACK_IMPORTED_MODULE_0__stream__["default"])(object, projection.stream(__WEBPACK_IMPORTED_MODULE_1__path_bounds__["default"]));
  fitBounds(__WEBPACK_IMPORTED_MODULE_1__path_bounds__["default"].result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}

function fitExtent(projection, extent, object) {
  return fit(projection, function(b) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}

function fitWidth(projection, width, object) {
  return fit(projection, function(b) {
    var w = +width,
        k = w / (b[1][0] - b[0][0]),
        x = (w - k * (b[1][0] + b[0][0])) / 2,
        y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitHeight(projection, height, object) {
  return fit(projection, function(b) {
    var h = +height,
        k = h / (b[1][1] - b[0][1]),
        x = -k * b[0][0],
        y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["mercatorRaw"] = mercatorRaw;
/* harmony export (immutable) */ __webpack_exports__["mercatorProjection"] = mercatorProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rotation__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(10);




function mercatorRaw(lambda, phi) {
  return [lambda, Object(__WEBPACK_IMPORTED_MODULE_0__math__["log"])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["tan"])((__WEBPACK_IMPORTED_MODULE_0__math__["halfPi"] + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan"])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["exp"])(y)) - __WEBPACK_IMPORTED_MODULE_0__math__["halfPi"]];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / __WEBPACK_IMPORTED_MODULE_0__math__["tau"]);
});

function mercatorProjection(project) {
  var m = Object(__WEBPACK_IMPORTED_MODULE_2__index__["default"])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = __WEBPACK_IMPORTED_MODULE_0__math__["pi"] * scale(),
        t = m(Object(__WEBPACK_IMPORTED_MODULE_1__rotation__["default"])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = hierarchy;
/* harmony export (immutable) */ __webpack_exports__["computeHeight"] = computeHeight;
/* harmony export (immutable) */ __webpack_exports__["Node"] = Node;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__each__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eachBefore__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eachAfter__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sum__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sort__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ancestors__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__descendants__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leaves__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__links__ = __webpack_require__(382);












function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: __WEBPACK_IMPORTED_MODULE_0__count__["default"],
  each: __WEBPACK_IMPORTED_MODULE_1__each__["default"],
  eachAfter: __WEBPACK_IMPORTED_MODULE_3__eachAfter__["default"],
  eachBefore: __WEBPACK_IMPORTED_MODULE_2__eachBefore__["default"],
  sum: __WEBPACK_IMPORTED_MODULE_4__sum__["default"],
  sort: __WEBPACK_IMPORTED_MODULE_5__sort__["default"],
  path: __WEBPACK_IMPORTED_MODULE_6__path__["default"],
  ancestors: __WEBPACK_IMPORTED_MODULE_7__ancestors__["default"],
  descendants: __WEBPACK_IMPORTED_MODULE_8__descendants__["default"],
  leaves: __WEBPACK_IMPORTED_MODULE_9__leaves__["default"],
  links: __WEBPACK_IMPORTED_MODULE_10__links__["default"],
  copy: node_copy
};


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["optional"] = optional;
/* harmony export (immutable) */ __webpack_exports__["required"] = required;
function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phi", function() { return phi; });
/* harmony export (immutable) */ __webpack_exports__["squarifyRatio"] = squarifyRatio;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dice__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(43);



var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) Object(__WEBPACK_IMPORTED_MODULE_0__dice__["default"])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else Object(__WEBPACK_IMPORTED_MODULE_1__slice__["default"])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

/* harmony default export */ __webpack_exports__["default"] = ((function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi));


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["timeFormat"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["timeParse"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["utcFormat"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["utcParse"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return __WEBPACK_IMPORTED_MODULE_1__src_locale__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isoFormat", function() { return __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_isoParse__ = __webpack_require__(427);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isoParse", function() { return __WEBPACK_IMPORTED_MODULE_3__src_isoParse__["default"]; });






/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return timeParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return utcParse; });
/* harmony export (immutable) */ __webpack_exports__["default"] = defaultLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(154);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["default"])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(84);





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = __WEBPACK_IMPORTED_MODULE_3__point__["x"],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["y"],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["default"],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["x"] = x;
/* harmony export (immutable) */ __webpack_exports__["y"] = y;
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["point"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(49);



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new __WEBPACK_IMPORTED_MODULE_1__cardinal__["Cardinal"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["sum"] = sum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(31);


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var sums = series.map(sum);
  return Object(__WEBPACK_IMPORTED_MODULE_0__none__["default"])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["RedBlackNode"] = RedBlackNode;
function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}

RedBlackTree.prototype = {
  constructor: RedBlackTree,

  insert: function(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;

    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },

  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;

    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;

    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) { node.C = false; return; }

    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if ((sibling.L && sibling.L.C)
            || (sibling.R && sibling.R.C)) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if ((sibling.L && sibling.L.C)
          || (sibling.R && sibling.R.C)) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (RedBlackTree);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createEdge"] = createEdge;
/* harmony export (immutable) */ __webpack_exports__["createBorderEdge"] = createBorderEdge;
/* harmony export (immutable) */ __webpack_exports__["setEdgeEnd"] = setEdgeEnd;
/* harmony export (immutable) */ __webpack_exports__["clipEdges"] = clipEdges;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Diagram__ = __webpack_require__(32);


function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = __WEBPACK_IMPORTED_MODULE_0__Diagram__["edges"].push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  __WEBPACK_IMPORTED_MODULE_0__Diagram__["cells"][left.index].halfedges.push(index);
  __WEBPACK_IMPORTED_MODULE_0__Diagram__["cells"][right.index].halfedges.push(index);
  return edge;
}

function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}

function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}

// Liang–Barsky line clipping.
function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;

  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y0];
      else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];
      else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];
        else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];
        else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];
        else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];
        else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = __WEBPACK_IMPORTED_MODULE_0__Diagram__["edges"].length,
      edge;

  while (i--) {
    if (!connectEdge(edge = __WEBPACK_IMPORTED_MODULE_0__Diagram__["edges"][i], x0, y0, x1, y1)
        || !clipEdge(edge, x0, y0, x1, y1)
        || !(Math.abs(edge[0][0] - edge[1][0]) > __WEBPACK_IMPORTED_MODULE_0__Diagram__["epsilon"]
            || Math.abs(edge[0][1] - edge[1][1]) > __WEBPACK_IMPORTED_MODULE_0__Diagram__["epsilon"])) {
      delete __WEBPACK_IMPORTED_MODULE_0__Diagram__["edges"][i];
    }
  }
}


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(90);



var ascendingBisect = Object(__WEBPACK_IMPORTED_MODULE_1__bisector__["default"])(__WEBPACK_IMPORTED_MODULE_0__ascending__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(18);


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["default"])(f(d), x);
  };
}


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["pair"] = pair;
/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(93);


/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  var v = Object(__WEBPACK_IMPORTED_MODULE_0__variance__["default"])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(23);


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["default"])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["default"])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["tickIncrement"] = tickIncrement;
/* harmony export (immutable) */ __webpack_exports__["tickStep"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(99);


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(__WEBPACK_IMPORTED_MODULE_0__min__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["Selection"]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["Selection"]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["root"]);
});


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (matcher);


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["EnterNode"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["Selection"](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["default"]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(update) {
  return new Array(update.length);
});


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["styleValue"] = styleValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(55);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(__WEBPACK_IMPORTED_MODULE_0__window__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["yesdrag"] = yesdrag;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noevent__ = __webpack_require__(108);



/* harmony default export */ __webpack_exports__["default"] = (function(view) {
  var root = view.document.documentElement,
      selection = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["select"])(view).on("dragstart.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["default"], true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["default"], true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
});

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["select"])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["default"], true);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["nopropagation"] = nopropagation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);


function nopropagation() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].preventDefault();
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
});


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(24);





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(__WEBPACK_IMPORTED_MODULE_3__color__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["rgb"])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["default"]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["default"]);


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(61);


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(__WEBPACK_IMPORTED_MODULE_0__basis__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(58);


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(58);


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(35);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_schedule__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["STARTING"] && schedule.state < __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["ENDING"];
    schedule.state = __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["ENDED"];
    schedule.timer.stop();
    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var c;
  return (typeof b === "number" ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateNumber"]
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["color"] ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateRgb"]
      : (c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["color"])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateRgb"])
      : __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateString"])(a, b);
});


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_linear__ = __webpack_require__(270);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return __WEBPACK_IMPORTED_MODULE_0__src_linear__["linear"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_quad__ = __webpack_require__(271);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["quadInOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["quadIn"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["quadOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["quadInOut"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubic__ = __webpack_require__(272);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["cubicInOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["cubicIn"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["cubicOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["cubicInOut"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_poly__ = __webpack_require__(273);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["polyInOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["polyIn"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["polyOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["polyInOut"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_sin__ = __webpack_require__(274);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["sinInOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["sinIn"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["sinOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["sinInOut"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exp__ = __webpack_require__(275);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["expInOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["expIn"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["expOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["expInOut"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_circle__ = __webpack_require__(276);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["circleInOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["circleIn"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["circleOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["circleInOut"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_bounce__ = __webpack_require__(277);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["bounceOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["bounceIn"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["bounceOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["bounceInOut"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_back__ = __webpack_require__(278);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["backInOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["backIn"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["backOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["backInOut"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_elastic__ = __webpack_require__(279);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["elasticOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["elasticIn"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["elasticOut"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["elasticInOut"]; });





















/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
var cos = Math.cos;
var sin = Math.sin;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = pi * 2;
var max = Math.max;


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ascending__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contains__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__noop__ = __webpack_require__(299);








var cases = [
  [],
  [[[1.0, 1.5], [0.5, 1.0]]],
  [[[1.5, 1.0], [1.0, 1.5]]],
  [[[1.5, 1.0], [0.5, 1.0]]],
  [[[1.0, 0.5], [1.5, 1.0]]],
  [[[1.0, 1.5], [0.5, 1.0]], [[1.0, 0.5], [1.5, 1.0]]],
  [[[1.0, 0.5], [1.0, 1.5]]],
  [[[1.0, 0.5], [0.5, 1.0]]],
  [[[0.5, 1.0], [1.0, 0.5]]],
  [[[1.0, 1.5], [1.0, 0.5]]],
  [[[0.5, 1.0], [1.0, 0.5]], [[1.5, 1.0], [1.0, 1.5]]],
  [[[1.5, 1.0], [1.0, 0.5]]],
  [[[0.5, 1.0], [1.5, 1.0]]],
  [[[1.0, 1.5], [1.5, 1.0]]],
  [[[0.5, 1.0], [1.0, 1.5]]],
  []
];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var dx = 1,
      dy = 1,
      threshold = __WEBPACK_IMPORTED_MODULE_0_d3_array__["thresholdSturges"],
      smooth = smoothLinear;

  function contours(values) {
    var tz = threshold(values);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      var domain = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["extent"])(values), start = domain[0], stop = domain[1];
      tz = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(Math.floor(start / tz) * tz, Math.floor(stop / tz) * tz, tz);
    } else {
      tz = tz.slice().sort(__WEBPACK_IMPORTED_MODULE_2__ascending__["default"]);
    }

    return tz.map(function(value) {
      return contour(values, value);
    });
  }

  // Accumulate, smooth contour rings, assign holes to exterior rings.
  // Based on https://github.com/mbostock/shapefile/blob/v0.6.2/shp/polygon.js
  function contour(values, value) {
    var polygons = [],
        holes = [];

    isorings(values, value, function(ring) {
      smooth(ring, values, value);
      if (Object(__WEBPACK_IMPORTED_MODULE_3__area__["default"])(ring) > 0) polygons.push([ring]);
      else holes.push(ring);
    });

    holes.forEach(function(hole) {
      for (var i = 0, n = polygons.length, polygon; i < n; ++i) {
        if (Object(__WEBPACK_IMPORTED_MODULE_5__contains__["default"])((polygon = polygons[i])[0], hole) !== -1) {
          polygon.push(hole);
          return;
        }
      }
    });

    return {
      type: "MultiPolygon",
      value: value,
      coordinates: polygons
    };
  }

  // Marching squares with isolines stitched into rings.
  // Based on https://github.com/topojson/topojson-client/blob/v3.0.0/src/stitch.js
  function isorings(values, value, callback) {
    var fragmentByStart = new Array,
        fragmentByEnd = new Array,
        x, y, t0, t1, t2, t3;

    // Special case for the first row (y = -1, t2 = t3 = 0).
    x = y = -1;
    t1 = values[0] >= value;
    cases[t1 << 1].forEach(stitch);
    while (++x < dx - 1) {
      t0 = t1, t1 = values[x + 1] >= value;
      cases[t0 | t1 << 1].forEach(stitch);
    }
    cases[t1 << 0].forEach(stitch);

    // General case for the intermediate rows.
    while (++y < dy - 1) {
      x = -1;
      t1 = values[y * dx + dx] >= value;
      t2 = values[y * dx] >= value;
      cases[t1 << 1 | t2 << 2].forEach(stitch);
      while (++x < dx - 1) {
        t0 = t1, t1 = values[y * dx + dx + x + 1] >= value;
        t3 = t2, t2 = values[y * dx + x + 1] >= value;
        cases[t0 | t1 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
      }
      cases[t1 | t2 << 3].forEach(stitch);
    }

    // Special case for the last row (y = dy - 1, t0 = t1 = 0).
    x = -1;
    t2 = values[y * dx] >= value;
    cases[t2 << 2].forEach(stitch);
    while (++x < dx - 1) {
      t3 = t2, t2 = values[y * dx + x + 1] >= value;
      cases[t2 << 2 | t3 << 3].forEach(stitch);
    }
    cases[t2 << 3].forEach(stitch);

    function stitch(line) {
      var start = [line[0][0] + x, line[0][1] + y],
          end = [line[1][0] + x, line[1][1] + y],
          startIndex = index(start),
          endIndex = index(end),
          f, g;
      if (f = fragmentByEnd[startIndex]) {
        if (g = fragmentByStart[endIndex]) {
          delete fragmentByEnd[f.end];
          delete fragmentByStart[g.start];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[f.start] = fragmentByEnd[g.end] = {start: f.start, end: g.end, ring: f.ring.concat(g.ring)};
          }
        } else {
          delete fragmentByEnd[f.end];
          f.ring.push(end);
          fragmentByEnd[f.end = endIndex] = f;
        }
      } else if (f = fragmentByStart[endIndex]) {
        if (g = fragmentByEnd[startIndex]) {
          delete fragmentByStart[f.start];
          delete fragmentByEnd[g.end];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[g.start] = fragmentByEnd[f.end] = {start: g.start, end: f.end, ring: g.ring.concat(f.ring)};
          }
        } else {
          delete fragmentByStart[f.start];
          f.ring.unshift(start);
          fragmentByStart[f.start = startIndex] = f;
        }
      } else {
        fragmentByStart[startIndex] = fragmentByEnd[endIndex] = {start: startIndex, end: endIndex, ring: [start, end]};
      }
    }
  }

  function index(point) {
    return point[0] * 2 + point[1] * (dx + 1) * 4;
  }

  function smoothLinear(ring, values, value) {
    ring.forEach(function(point) {
      var x = point[0],
          y = point[1],
          xt = x | 0,
          yt = y | 0,
          v0,
          v1 = values[yt * dx + xt];
      if (x > 0 && x < dx && xt === x) {
        v0 = values[yt * dx + xt - 1];
        point[0] = x + (value - v0) / (v1 - v0) - 0.5;
      }
      if (y > 0 && y < dy && yt === y) {
        v0 = values[(yt - 1) * dx + xt];
        point[1] = y + (value - v0) / (v1 - v0) - 0.5;
      }
    });
  }

  contours.contour = contour;

  contours.size = function(_) {
    if (!arguments.length) return [dx, dy];
    var _0 = Math.ceil(_[0]), _1 = Math.ceil(_[1]);
    if (!(_0 > 0) || !(_1 > 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, contours;
  };

  contours.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_4__constant__["default"])(__WEBPACK_IMPORTED_MODULE_1__array__["slice"].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["default"])(_), contours) : threshold;
  };

  contours.smooth = function(_) {
    return arguments.length ? (smooth = _ ? smoothLinear : __WEBPACK_IMPORTED_MODULE_6__noop__["default"], contours) : smooth === smoothLinear;
  };

  return contours;
});


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var array = Array.prototype;

var slice = array.slice;


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dsv__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dsv__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_csv__ = __webpack_require__(302);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["csvParse"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["csvParseRows"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["csvFormat"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["csvFormatRows"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_tsv__ = __webpack_require__(303);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["tsvParse"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["tsvParseRows"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["tsvFormat"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["tsvFormatRows"]; });





/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["x"] = x;
/* harmony export (immutable) */ __webpack_exports__["y"] = y;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_collection__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_timer__ = __webpack_require__(36);




function x(d) {
  return d.x;
}

function y(d) {
  return d.y;
}

var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

/* harmony default export */ __webpack_exports__["default"] = (function(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = Object(__WEBPACK_IMPORTED_MODULE_1_d3_collection__["map"])(),
      stepper = Object(__WEBPACK_IMPORTED_MODULE_2_d3_timer__["timer"])(step),
      event = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["dispatch"])("tick", "end");

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick() {
    var i, n = nodes.length, node;

    alpha += (alphaTarget - alpha) * alphaDecay;

    forces.each(function(force) {
      force(alpha);
    });

    for (i = 0; i < n; ++i) {
      node = nodes[i];
      if (node.fx == null) node.x += node.vx *= velocityDecay;
      else node.x = node.fx, node.vx = 0;
      if (node.fy == null) node.y += node.vy *= velocityDecay;
      else node.y = node.fy, node.vy = 0;
    }
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    force: function(name, _) {
      return arguments.length > 1 ? ((_ == null ? forces.remove(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
    },

    find: function(x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;
      else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
});


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumerals__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatSpecifier__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatTrim__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatTypes__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__identity__ = __webpack_require__(338);









var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["default"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(__WEBPACK_IMPORTED_MODULE_1__formatGroup__["default"])(locale.grouping, locale.thousands) : __WEBPACK_IMPORTED_MODULE_7__identity__["default"],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(__WEBPACK_IMPORTED_MODULE_2__formatNumerals__["default"])(locale.numerals) : __WEBPACK_IMPORTED_MODULE_7__identity__["default"],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!__WEBPACK_IMPORTED_MODULE_5__formatTypes__["default"][type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_5__formatTypes__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(__WEBPACK_IMPORTED_MODULE_4__formatTrim__["default"])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = formatSpecifier;
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixExponent", function() { return prefixExponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(71);


var prefixExponent;

/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["default"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaRingSum", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaStream", function() { return areaStream; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__(15);





var areaRingSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["default"])();

var areaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["default"])(),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["default"],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["default"],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["default"],
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["tau"] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = __WEBPACK_IMPORTED_MODULE_2__noop__["default"];
  },
  sphere: function() {
    areaSum.add(__WEBPACK_IMPORTED_MODULE_1__math__["tau"]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["radians"], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["radians"];
  lambda0 = lambda, cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["quarterPi"]), sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["radians"], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["radians"];
  phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["quarterPi"]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(phi),
      sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(adLambda),
      v = k * sdLambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(adLambda);
  areaRingSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["atan2"])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  areaSum.reset();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream__["default"])(object, areaStream);
  return areaSum * 2;
});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["circleStream"] = circleStream;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rotation__ = __webpack_require__(40);





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(radius),
      sinRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * __WEBPACK_IMPORTED_MODULE_2__math__["tau"];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * __WEBPACK_IMPORTED_MODULE_2__math__["tau"];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["spherical"])([cosRadius, -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(t), -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesian"])(point), point[0] -= cosRadius;
  Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianNormalizeInPlace"])(point);
  var radius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["acos"])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + __WEBPACK_IMPORTED_MODULE_2__math__["tau"] - __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) % __WEBPACK_IMPORTED_MODULE_2__math__["tau"];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var center = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])([0, 0]),
      radius = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(90),
      precision = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= __WEBPACK_IMPORTED_MODULE_2__math__["degrees"], x[1] *= __WEBPACK_IMPORTED_MODULE_2__math__["degrees"];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["radians"],
        p = precision.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["radians"];
    ring = [];
    rotate = Object(__WEBPACK_IMPORTED_MODULE_3__rotation__["rotateRadians"])(-c[0] * __WEBPACK_IMPORTED_MODULE_2__math__["radians"], -c[1] * __WEBPACK_IMPORTED_MODULE_2__math__["radians"], 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), circle) : precision;
  };

  return circle;
});


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0__index__["default"])(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-__WEBPACK_IMPORTED_MODULE_1__math__["pi"], -__WEBPACK_IMPORTED_MODULE_1__math__["halfPi"]]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["pi"] : -__WEBPACK_IMPORTED_MODULE_1__math__["pi"],
          delta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(lambda1 - lambda0);
      if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(delta - __WEBPACK_IMPORTED_MODULE_1__math__["pi"]) < __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["halfPi"] : -__WEBPACK_IMPORTED_MODULE_1__math__["halfPi"]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= __WEBPACK_IMPORTED_MODULE_1__math__["pi"]) { // line crosses antimeridian
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(lambda0 - sign0) < __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]) lambda0 -= sign0 * __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]; // handle degeneracies
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(lambda1 - sign1) < __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]) lambda1 -= sign1 * __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(lambda0 - lambda1);
  return Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(sinLambda0Lambda1) > __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]
      ? Object(__WEBPACK_IMPORTED_MODULE_1__math__["atan"])((Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(phi0) * (cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(phi1)) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(lambda1)
          - Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(phi1) * (cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(phi0)) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * __WEBPACK_IMPORTED_MODULE_1__math__["halfPi"];
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["pi"], phi);
    stream.point(0, phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["pi"], phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["pi"], 0);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["pi"], -phi);
    stream.point(0, -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["pi"], -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["pi"], 0);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["pi"], phi);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(from[0] - to[0]) > __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]) {
    var lambda = from[0] < to[0] ? __WEBPACK_IMPORTED_MODULE_1__math__["pi"] : -__WEBPACK_IMPORTED_MODULE_1__math__["pi"];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rejoin__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polygonContains__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(4);






/* harmony default export */ __webpack_exports__["default"] = (function(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink),
        ringBuffer = Object(__WEBPACK_IMPORTED_MODULE_0__buffer__["default"])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["merge"])(segments);
        var startInside = Object(__WEBPACK_IMPORTED_MODULE_3__polygonContains__["default"])(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          Object(__WEBPACK_IMPORTED_MODULE_1__rejoin__["default"])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - __WEBPACK_IMPORTED_MODULE_2__math__["halfPi"] - __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"] : __WEBPACK_IMPORTED_MODULE_2__math__["halfPi"] - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - __WEBPACK_IMPORTED_MODULE_2__math__["halfPi"] - __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"] : __WEBPACK_IMPORTED_MODULE_2__math__["halfPi"] - b[1]);
}


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(13);


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["default"],
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointEqual__ = __webpack_require__(136);


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["default"] = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (Object(__WEBPACK_IMPORTED_MODULE_0__pointEqual__["default"])(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["abs"])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"] && Object(__WEBPACK_IMPORTED_MODULE_0__math__["abs"])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"];
});


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartesian__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);




var sum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["default"])();

/* harmony default export */ __webpack_exports__["default"] = (function(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      sinPhi = Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(phi),
      normal = [Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(lambda), -Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(lambda), 0],
      angle = 0,
      winding = 0;

  sum.reset();

  if (sinPhi === 1) phi = __WEBPACK_IMPORTED_MODULE_2__math__["halfPi"] + __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"];
  else if (sinPhi === -1) phi = -__WEBPACK_IMPORTED_MODULE_2__math__["halfPi"] - __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"];

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["quarterPi"],
        sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(phi0),
        cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["quarterPi"],
          sinPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(phi1),
          cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > __WEBPACK_IMPORTED_MODULE_2__math__["pi"],
          k = sinPhi0 * sinPhi1;

      sum.add(Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(k * sign * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(absDelta), cosPhi0 * cosPhi1 + k * Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(absDelta)));
      angle += antimeridian ? delta + sign * __WEBPACK_IMPORTED_MODULE_2__math__["tau"] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["cartesianCross"])(Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["cartesian"])(point0), Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["cartesian"])(point1));
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["cartesianNormalizeInPlace"])(arc);
        var intersection = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["cartesianCross"])(normal, arc);
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["cartesianNormalizeInPlace"])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["asin"])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -__WEBPACK_IMPORTED_MODULE_2__math__["epsilon"] || angle < __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"] && sum < -__WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) ^ (winding & 1);
});


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointEqual__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(133);






/* harmony default export */ __webpack_exports__["default"] = (function(radius) {
  var cr = Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(radius),
      delta = 6 * __WEBPACK_IMPORTED_MODULE_2__math__["radians"],
      smallRadius = cr > 0,
      notHemisphere = Object(__WEBPACK_IMPORTED_MODULE_2__math__["abs"])(cr) > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    Object(__WEBPACK_IMPORTED_MODULE_1__circle__["circleStream"])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(lambda) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? __WEBPACK_IMPORTED_MODULE_2__math__["pi"] : -__WEBPACK_IMPORTED_MODULE_2__math__["pi"]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["default"])(point0, point2) || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["default"])(point1, point2)) {
            point1[0] += __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"];
            point1[1] += __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"];
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["default"])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesian"])(a),
        pb = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesian"])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianCross"])(pa, pb),
        n2n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianDot"])(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianCross"])(n1, n2),
        A = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianScale"])(n1, c1),
        B = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianScale"])(n2, c2);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianAddInPlace"])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianDot"])(A, u),
        uu = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianDot"])(u, u),
        t2 = w * w - uu * (Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianDot"])(A, A) - 1);

    if (t2 < 0) return;

    var t = Object(__WEBPACK_IMPORTED_MODULE_2__math__["sqrt"])(t2),
        q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianScale"])(u, (-w - t) / uu);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianAddInPlace"])(q, A);
    q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["spherical"])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = Object(__WEBPACK_IMPORTED_MODULE_2__math__["abs"])(delta - __WEBPACK_IMPORTED_MODULE_2__math__["pi"]) < __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"],
        meridian = polar || delta < __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (Object(__WEBPACK_IMPORTED_MODULE_2__math__["abs"])(q[0] - lambda0) < __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"] ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > __WEBPACK_IMPORTED_MODULE_2__math__["pi"] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianScale"])(u, (-w + t) / uu);
      Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesianAddInPlace"])(q1, A);
      return [q, Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["spherical"])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : __WEBPACK_IMPORTED_MODULE_2__math__["pi"] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_4__index__["default"])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-__WEBPACK_IMPORTED_MODULE_2__math__["pi"], radius - __WEBPACK_IMPORTED_MODULE_2__math__["pi"]]);
});


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__length__ = __webpack_require__(140);


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return Object(__WEBPACK_IMPORTED_MODULE_0__length__["default"])(object);
});


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__(15);





var lengthSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["default"])(),
    lambda0,
    sinPhi0,
    cosPhi0;

var lengthStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_2__noop__["default"],
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["default"],
  lineStart: lengthLineStart,
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["default"],
  polygonStart: __WEBPACK_IMPORTED_MODULE_2__noop__["default"],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["default"]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = __WEBPACK_IMPORTED_MODULE_2__noop__["default"];
}

function lengthPointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["radians"], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["radians"];
  lambda0 = lambda, sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(phi), cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["radians"], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["radians"];
  var sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(phi),
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(phi),
      delta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(lambda - lambda0),
      cosDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(delta),
      sinDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sin"])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["atan2"])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["sqrt"])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  lengthSum.reset();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream__["default"])(object, lengthStream);
  return +lengthSum;
});


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(13);


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: __WEBPACK_IMPORTED_MODULE_0__noop__["default"],
  lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["default"],
  polygonStart: __WEBPACK_IMPORTED_MODULE_0__noop__["default"],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["default"],
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["default"] = (boundsStream);


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conicEqualArea__ = __webpack_require__(73);


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__conicEqualArea__["default"])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["equirectangularRaw"] = equirectangularRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(10);


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index__["default"])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["packEnclose"] = packEnclose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enclose__ = __webpack_require__(145);


function place(b, a, c) {
  var dx = b.x - a.x, x, a2,
      dy = b.y - a.y, y, b2,
      d2 = dx * dx + dy * dy;
  if (d2) {
    a2 = a.r + c.r, a2 *= a2;
    b2 = b.r + c.r, b2 *= b2;
    if (a2 > b2) {
      x = (d2 + b2 - a2) / (2 * d2);
      y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
      c.x = b.x - x * dx - y * dy;
      c.y = b.y - x * dy + y * dx;
    } else {
      x = (d2 + a2 - b2) / (2 * d2);
      y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
      c.x = a.x + x * dx - y * dy;
      c.y = a.y + x * dy + y * dx;
    }
  } else {
    c.x = a.x + c.r;
    c.y = a.y;
  }
}

function intersects(a, b) {
  var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function score(node) {
  var a = node._,
      b = node.next._,
      ab = a.r + b.r,
      dx = (a.x * b.r + b.x * a.r) / ab,
      dy = (a.y * b.r + b.y * a.r) / ab;
  return dx * dx + dy * dy;
}

function Node(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}

function packEnclose(circles) {
  if (!(n = circles.length)) return 0;

  var a, b, c, n, aa, ca, i, j, k, sj, sk;

  // Place the first circle.
  a = circles[0], a.x = 0, a.y = 0;
  if (!(n > 1)) return a.r;

  // Place the second circle.
  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
  if (!(n > 2)) return a.r + b.r;

  // Place the third circle.
  place(b, a, c = circles[2]);

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node(a), b = new Node(b), c = new Node(c);
  a.next = c.previous = b;
  b.next = a.previous = c;
  c.next = b.previous = a;

  // Attempt to place each remaining circle…
  pack: for (i = 3; i < n; ++i) {
    place(a._, b._, c = circles[i]), c = new Node(c);

    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c._)) {
          a = k, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);

    // Success! Insert the new circle c between a and b.
    c.previous = a, c.next = b, a.next = b.previous = b = c;

    // Compute the new closest circle pair to the centroid.
    aa = score(a);
    while ((c = c.next) !== b) {
      if ((ca = score(c)) < aa) {
        a = c, aa = ca;
      }
    }
    b = a.next;
  }

  // Compute the enclosing circle of the front chain.
  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = Object(__WEBPACK_IMPORTED_MODULE_0__enclose__["default"])(a);

  // Translate the circles to put the enclosing circle around the origin.
  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

  return c.r;
}

/* harmony default export */ __webpack_exports__["default"] = (function(circles) {
  packEnclose(circles);
  return circles;
});


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(384);


/* harmony default export */ __webpack_exports__["default"] = (function(circles) {
  var i = 0, n = (circles = Object(__WEBPACK_IMPORTED_MODULE_0__array__["shuffle"])(__WEBPACK_IMPORTED_MODULE_0__array__["slice"].call(circles))).length, B = [], p, e;

  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;
    else e = encloseBasis(B = extendBasis(B, p)), i = 0;
  }

  return e;
});

function extendBasis(B, p) {
  var i, j;

  if (enclosesWeakAll(p, B)) return [p];

  // If we get here then B must have at least one element.
  for (i = 0; i < B.length; ++i) {
    if (enclosesNot(p, B[i])
        && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
      return [B[i], p];
    }
  }

  // If we get here then B must have at least two elements.
  for (i = 0; i < B.length - 1; ++i) {
    for (j = i + 1; j < B.length; ++j) {
      if (enclosesNot(encloseBasis2(B[i], B[j]), p)
          && enclosesNot(encloseBasis2(B[i], p), B[j])
          && enclosesNot(encloseBasis2(B[j], p), B[i])
          && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
        return [B[i], B[j], p];
      }
    }
  }

  // If we get here then something is very wrong.
  throw new Error;
}

function enclosesNot(a, b) {
  var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}

function enclosesWeak(a, b) {
  var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function enclosesWeakAll(a, B) {
  for (var i = 0; i < B.length; ++i) {
    if (!enclosesWeak(a, B[i])) {
      return false;
    }
  }
  return true;
}

function encloseBasis(B) {
  switch (B.length) {
    case 1: return encloseBasis1(B[0]);
    case 2: return encloseBasis2(B[0], B[1]);
    case 3: return encloseBasis3(B[0], B[1], B[2]);
  }
}

function encloseBasis1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}

function encloseBasis2(a, b) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
      l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}

function encloseBasis3(a, b, c) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x3 = c.x, y3 = c.y, r3 = c.r,
      a2 = x1 - x2,
      a3 = x1 - x3,
      b2 = y1 - y2,
      b3 = y1 - y3,
      c2 = r2 - r1,
      c3 = r3 - r1,
      d1 = x1 * x1 + y1 * y1 - r1 * r1,
      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
      ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
      yb = (a2 * c3 - a3 * c2) / ab,
      A = xb * xb + yb * yb - 1,
      B = 2 * (r1 + xa * xb + ya * yb),
      C = xa * xa + ya * ya - r1 * r1,
      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
  return {
    x: x1 + xa + xb * r,
    y: y1 + ya + yb * r,
    r: r
  };
}


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["constantZero"] = constantZero;
function constantZero() {
  return 0;
}

/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
});


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__(22);


/* harmony default export */ __webpack_exports__["default"] = ((function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function() {
      var y;

      // If available, use the second previously-generated uniform random.
      if (x != null) y = x, x = null;

      // Otherwise, generate a new x and y.
      else do {
        x = source() * 2 - 1;
        y = source() * 2 - 1;
        r = x * x + y * y;
      } while (!r || r > 1);

      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    };
  }

  randomNormal.source = sourceRandomNormal;

  return randomNormal;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["default"]));


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__(22);


/* harmony default export */ __webpack_exports__["default"] = ((function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    return function() {
      for (var sum = 0, i = 0; i < n; ++i) sum += source();
      return sum;
    };
  }

  randomIrwinHall.source = sourceRandomIrwinHall;

  return randomIrwinHall;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["default"]));


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (immutable) */ __webpack_exports__["default"] = ordinal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(16);



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["map"])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : __WEBPACK_IMPORTED_MODULE_1__array__["slice"].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["map"])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["slice"].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["calendar"] = calendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continuous__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nice__ = __webpack_require__(152);








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["default"])(__WEBPACK_IMPORTED_MODULE_5__continuous__["deinterpolateLinear"], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateNumber"]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(__WEBPACK_IMPORTED_MODULE_4__array__["map"].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(__WEBPACK_IMPORTED_MODULE_6__nice__["default"])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return calendar(__WEBPACK_IMPORTED_MODULE_2_d3_time__["timeYear"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["timeMonth"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["timeWeek"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["timeDay"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["timeHour"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["timeMinute"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["timeSecond"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["timeMillisecond"], __WEBPACK_IMPORTED_MODULE_3_d3_time_format__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(45);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["utcMonday"].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["utcMonday"])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["utcDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["timeMonday"].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["timeMonday"])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["timeDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["timeDay"].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["timeYear"])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["timeSunday"].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["timeYear"])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["timeThursday"])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["timeThursday"].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["timeThursday"].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["timeYear"])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["timeYear"])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["timeMonday"].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["timeYear"])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["utcDay"].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["utcYear"])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["utcSunday"].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["utcYear"])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["utcThursday"])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["utcThursday"].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["utcThursday"].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["utcYear"])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["utcYear"])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["utcMonday"].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["utcYear"])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoSpecifier", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(82);


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["utcFormat"])(isoSpecifier);

/* harmony default export */ __webpack_exports__["default"] = (formatIso);


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point__ = __webpack_require__(84);






/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = __WEBPACK_IMPORTED_MODULE_4__point__["x"],
      x1 = null,
      y0 = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(0),
      y1 = __WEBPACK_IMPORTED_MODULE_4__point__["y"],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["default"],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(__WEBPACK_IMPORTED_MODULE_3__line__["default"])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curveRadialLinear", function() { return curveRadialLinear; });
/* harmony export (immutable) */ __webpack_exports__["default"] = curveRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(46);


var curveRadialLinear = curveRadial(__WEBPACK_IMPORTED_MODULE_0__linear__["default"]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["lineRadial"] = lineRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line__ = __webpack_require__(83);



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["default"])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return lineRadial(Object(__WEBPACK_IMPORTED_MODULE_1__line__["default"])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["curveRadialLinear"]));
});


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(29);


/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / __WEBPACK_IMPORTED_MODULE_0__math__["pi"]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, __WEBPACK_IMPORTED_MODULE_0__math__["tau"]);
  }
});


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(29);


var ka = 0.89081309152928522810,
    kr = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["pi"] / 10) / Math.sin(7 * __WEBPACK_IMPORTED_MODULE_0__math__["pi"] / 10),
    kx = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["tau"] / 10) * kr,
    ky = -Math.cos(__WEBPACK_IMPORTED_MODULE_0__math__["tau"] / 10) * kr;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = __WEBPACK_IMPORTED_MODULE_0__math__["tau"] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["CardinalClosed"] = CardinalClosed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(49);



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["default"],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(__WEBPACK_IMPORTED_MODULE_1__cardinal__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["CardinalOpen"] = CardinalOpen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinal__ = __webpack_require__(49);


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_0__cardinal__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createCell"] = createCell;
/* harmony export (immutable) */ __webpack_exports__["cellHalfedgeStart"] = cellHalfedgeStart;
/* harmony export (immutable) */ __webpack_exports__["cellHalfedgeEnd"] = cellHalfedgeEnd;
/* harmony export (immutable) */ __webpack_exports__["sortCellHalfedges"] = sortCellHalfedges;
/* harmony export (immutable) */ __webpack_exports__["clipCells"] = clipCells;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Edge__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Diagram__ = __webpack_require__(32);



function createCell(site) {
  return __WEBPACK_IMPORTED_MODULE_1__Diagram__["cells"][site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}

function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}

function sortCellHalfedges() {
  for (var i = 0, n = __WEBPACK_IMPORTED_MODULE_1__Diagram__["cells"].length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["cells"][i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);
      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, __WEBPACK_IMPORTED_MODULE_1__Diagram__["edges"][halfedges[j]]);
      index.sort(function(i, j) { return array[j] - array[i]; });
      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array[j];
    }
  }
}

function clipCells(x0, y0, x1, y1) {
  var nCells = __WEBPACK_IMPORTED_MODULE_1__Diagram__["cells"].length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["cells"][iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;

      // Remove any dangling clipped edges.
      while (iHalfedge--) {
        if (!__WEBPACK_IMPORTED_MODULE_1__Diagram__["edges"][halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }

      // Insert any border edges as necessary.
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, __WEBPACK_IMPORTED_MODULE_1__Diagram__["edges"][halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, __WEBPACK_IMPORTED_MODULE_1__Diagram__["edges"][halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] || Math.abs(endY - startY) > __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"]) {
          halfedges.splice(iHalfedge, 0, __WEBPACK_IMPORTED_MODULE_1__Diagram__["edges"].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["createBorderEdge"])(site, end,
              Math.abs(endX - x0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] && y1 - endY > __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] ? [x0, Math.abs(startX - x0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] ? startY : y1]
              : Math.abs(endY - y1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] && x1 - endX > __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] ? [Math.abs(startY - y1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] ? startX : x1, y1]
              : Math.abs(endX - x1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] && endY - y0 > __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] ? [x1, Math.abs(startX - x1) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] ? startY : y0]
              : Math.abs(endY - y0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] && endX - x0 > __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] ? [Math.abs(startY - y0) < __WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon"] ? startX : x0, y0]
              : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  }

  // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!
  if (cover) {
    var dx, dy, d2, dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["cells"][iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
      cover.halfedges.push(
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["edges"].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["createBorderEdge"])(site = cover.site, v00, v01)) - 1,
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["edges"].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["createBorderEdge"])(site, v01, v11)) - 1,
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["edges"].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["createBorderEdge"])(site, v11, v10)) - 1,
        __WEBPACK_IMPORTED_MODULE_1__Diagram__["edges"].push(Object(__WEBPACK_IMPORTED_MODULE_0__Edge__["createBorderEdge"])(site, v10, v00)) - 1
      );
    }
  }

  // Lastly delete any cells with no edges; these were entirely clipped.
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = __WEBPACK_IMPORTED_MODULE_1__Diagram__["cells"][iCell]) {
      if (!cell.halfedges.length) {
        delete __WEBPACK_IMPORTED_MODULE_1__Diagram__["cells"][iCell];
      }
    }
  }
}


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstCircle", function() { return firstCircle; });
/* harmony export (immutable) */ __webpack_exports__["attachCircle"] = attachCircle;
/* harmony export (immutable) */ __webpack_exports__["detachCircle"] = detachCircle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RedBlackTree__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Diagram__ = __webpack_require__(32);



var circlePool = [];

var firstCircle;

function Circle() {
  Object(__WEBPACK_IMPORTED_MODULE_0__RedBlackTree__["RedBlackNode"])(this);
  this.x =
  this.y =
  this.arc =
  this.site =
  this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;

  if (!lArc || !rArc) return;

  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;

  if (lSite === rSite) return;

  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;

  var d = 2 * (ax * cy - ay * cx);
  if (d >= -__WEBPACK_IMPORTED_MODULE_1__Diagram__["epsilon2"]) return;

  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;

  var circle = circlePool.pop() || new Circle;
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;

  var before = null,
      node = __WEBPACK_IMPORTED_MODULE_1__Diagram__["circles"]._;

  while (node) {
    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
      if (node.L) node = node.L;
      else { before = node.P; break; }
    } else {
      if (node.R) node = node.R;
      else { before = node; break; }
    }
  }

  __WEBPACK_IMPORTED_MODULE_1__Diagram__["circles"].insert(before, circle);
  if (!before) firstCircle = circle;
}

function detachCircle(arc) {
  var circle = arc.circle;
  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    __WEBPACK_IMPORTED_MODULE_1__Diagram__["circles"].remove(circle);
    circlePool.push(circle);
    Object(__WEBPACK_IMPORTED_MODULE_0__RedBlackTree__["RedBlackNode"])(circle);
    arc.circle = null;
  }
}


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["Transform"] = Transform;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (immutable) */ __webpack_exports__["default"] = transform;
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  return node.__zoom || identity;
}


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__;

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_package__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_package__["version"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_array__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["bisect"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["bisectRight"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["bisectLeft"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["ascending"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["bisector"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["cross"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["descending"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["deviation"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["extent"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["histogram"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["thresholdFreedmanDiaconis"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["thresholdScott"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["thresholdSturges"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["max"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["mean"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "median", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["median"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["merge"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["min"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["pairs"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["permute"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["quantile"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "range", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["range"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["scan"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["shuffle"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["sum"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["ticks"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["tickIncrement"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["tickStep"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["transpose"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["variance"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return __WEBPACK_IMPORTED_MODULE_1_d3_array__["zip"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_axis__ = __webpack_require__(192);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return __WEBPACK_IMPORTED_MODULE_2_d3_axis__["axisTop"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return __WEBPACK_IMPORTED_MODULE_2_d3_axis__["axisRight"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return __WEBPACK_IMPORTED_MODULE_2_d3_axis__["axisBottom"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return __WEBPACK_IMPORTED_MODULE_2_d3_axis__["axisLeft"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_brush__ = __webpack_require__(196);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "brush", function() { return __WEBPACK_IMPORTED_MODULE_3_d3_brush__["brush"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "brushX", function() { return __WEBPACK_IMPORTED_MODULE_3_d3_brush__["brushX"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "brushY", function() { return __WEBPACK_IMPORTED_MODULE_3_d3_brush__["brushY"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "brushSelection", function() { return __WEBPACK_IMPORTED_MODULE_3_d3_brush__["brushSelection"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_chord__ = __webpack_require__(284);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "chord", function() { return __WEBPACK_IMPORTED_MODULE_4_d3_chord__["chord"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ribbon", function() { return __WEBPACK_IMPORTED_MODULE_4_d3_chord__["ribbon"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_collection__ = __webpack_require__(38);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["nest"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "set", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["set"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["map"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["keys"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "values", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["values"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return __WEBPACK_IMPORTED_MODULE_5_d3_collection__["entries"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3_color__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "color", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["color"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["rgb"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["hsl"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["lab"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["hcl"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["lch"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["gray"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return __WEBPACK_IMPORTED_MODULE_6_d3_color__["cubehelix"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_d3_contour__ = __webpack_require__(295);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "contours", function() { return __WEBPACK_IMPORTED_MODULE_7_d3_contour__["contours"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "contourDensity", function() { return __WEBPACK_IMPORTED_MODULE_7_d3_contour__["contourDensity"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3_dispatch__ = __webpack_require__(19);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return __WEBPACK_IMPORTED_MODULE_8_d3_dispatch__["dispatch"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_d3_drag__ = __webpack_require__(51);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "drag", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_drag__["drag"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dragDisable", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_drag__["dragDisable"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dragEnable", function() { return __WEBPACK_IMPORTED_MODULE_9_d3_drag__["dragEnable"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_d3_dsv__ = __webpack_require__(124);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_dsv__["dsvFormat"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_dsv__["csvParse"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_dsv__["csvParseRows"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_dsv__["csvFormat"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_dsv__["csvFormatRows"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_dsv__["tsvParse"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_dsv__["tsvParseRows"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_dsv__["tsvFormat"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_10_d3_dsv__["tsvFormatRows"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_d3_ease__ = __webpack_require__(119);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeLinear"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeQuad"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeQuadIn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeQuadOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeQuadInOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeCubic"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeCubicIn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeCubicOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeCubicInOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easePoly"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easePolyIn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easePolyOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easePolyInOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeSin"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeSinIn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeSinOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeSinInOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeExp"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeExpIn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeExpOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeExpInOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeCircle"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeCircleIn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeCircleOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeCircleInOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeBounce"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeBounceIn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeBounceOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeBounceInOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeBack"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeBackIn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeBackOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeBackInOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeElastic"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeElasticIn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeElasticOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return __WEBPACK_IMPORTED_MODULE_11_d3_ease__["easeElasticInOut"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_d3_fetch__ = __webpack_require__(304);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "blob", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["blob"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["buffer"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dsv", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["dsv"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "csv", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["csv"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tsv", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["tsv"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "image", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["image"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "json", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["json"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "text", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["text"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "xml", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["xml"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "html", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["html"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return __WEBPACK_IMPORTED_MODULE_12_d3_fetch__["svg"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_d3_force__ = __webpack_require__(311);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceCenter", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_force__["forceCenter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceCollide", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_force__["forceCollide"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceLink", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_force__["forceLink"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceManyBody", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_force__["forceManyBody"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceRadial", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_force__["forceRadial"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceSimulation", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_force__["forceSimulation"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceX", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_force__["forceX"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forceY", function() { return __WEBPACK_IMPORTED_MODULE_13_d3_force__["forceY"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_d3_format__ = __webpack_require__(70);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_format__["formatDefaultLocale"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "format", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_format__["format"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_format__["formatPrefix"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_format__["formatLocale"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_format__["formatSpecifier"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_format__["precisionFixed"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_format__["precisionPrefix"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return __WEBPACK_IMPORTED_MODULE_14_d3_format__["precisionRound"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_d3_geo__ = __webpack_require__(342);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoArea", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoArea"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoBounds", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoBounds"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoCentroid"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoCircle", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoCircle"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoClipAntimeridian", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoClipAntimeridian"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoClipCircle", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoClipCircle"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoClipExtent"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoClipRectangle", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoClipRectangle"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoContains"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoDistance", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoDistance"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoGraticule"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoGraticule10"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoInterpolate"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoLength", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoLength"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoPath", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoPath"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoAlbers"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoAlbersUsa"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoAzimuthalEqualArea"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoAzimuthalEqualAreaRaw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoAzimuthalEquidistant"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoAzimuthalEquidistantRaw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoConicConformal"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoConicConformalRaw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoConicEqualArea"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoConicEqualAreaRaw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoConicEquidistant"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoConicEquidistantRaw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoEquirectangular"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoEquirectangularRaw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoGnomonic"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoGnomonicRaw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoIdentity"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoProjection", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoProjection"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoProjectionMutator"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoMercator", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoMercator"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoMercatorRaw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoNaturalEarth1"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1Raw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoNaturalEarth1Raw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoOrthographic"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoOrthographicRaw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoStereographic"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoStereographicRaw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoTransverseMercator"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoTransverseMercatorRaw"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoRotation", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoRotation"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoStream", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoStream"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "geoTransform", function() { return __WEBPACK_IMPORTED_MODULE_15_d3_geo__["geoTransform"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__ = __webpack_require__(370);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cluster", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["cluster"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hierarchy", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["hierarchy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["pack"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "packSiblings", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["packSiblings"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["packEnclose"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["partition"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stratify", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["stratify"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tree", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["tree"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemap", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["treemap"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapBinary", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["treemapBinary"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapDice", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["treemapDice"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapSlice", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["treemapSlice"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapSliceDice", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["treemapSliceDice"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapSquarify", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["treemapSquarify"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "treemapResquarify", function() { return __WEBPACK_IMPORTED_MODULE_16_d3_hierarchy__["treemapResquarify"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolate"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateArray"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateBasis"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateBasisClosed"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateDate"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateNumber"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateObject"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateRound"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateString"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateTransformCss"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateTransformSvg"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateZoom"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateRgb"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateRgbBasis"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateRgbBasisClosed"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateHsl"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateHslLong"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateLab"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateHcl"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateHclLong"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateCubehelix"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["interpolateCubehelixLong"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["piecewise"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return __WEBPACK_IMPORTED_MODULE_17_d3_interpolate__["quantize"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_d3_path__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "path", function() { return __WEBPACK_IMPORTED_MODULE_18_d3_path__["path"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_d3_polygon__ = __webpack_require__(392);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "polygonArea", function() { return __WEBPACK_IMPORTED_MODULE_19_d3_polygon__["polygonArea"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "polygonCentroid", function() { return __WEBPACK_IMPORTED_MODULE_19_d3_polygon__["polygonCentroid"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "polygonHull", function() { return __WEBPACK_IMPORTED_MODULE_19_d3_polygon__["polygonHull"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "polygonContains", function() { return __WEBPACK_IMPORTED_MODULE_19_d3_polygon__["polygonContains"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "polygonLength", function() { return __WEBPACK_IMPORTED_MODULE_19_d3_polygon__["polygonLength"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_d3_quadtree__ = __webpack_require__(68);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "quadtree", function() { return __WEBPACK_IMPORTED_MODULE_20_d3_quadtree__["quadtree"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_d3_random__ = __webpack_require__(399);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomUniform", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_random__["randomUniform"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomNormal", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_random__["randomNormal"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomLogNormal", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_random__["randomLogNormal"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomBates", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_random__["randomBates"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomIrwinHall", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_random__["randomIrwinHall"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomExponential", function() { return __WEBPACK_IMPORTED_MODULE_21_d3_random__["randomExponential"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_d3_scale__ = __webpack_require__(404);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleBand"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scalePoint"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleIdentity"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleLinear"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleLog"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleOrdinal"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleImplicit"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scalePow"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleSqrt"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleQuantile"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleQuantize"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleThreshold"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleTime"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleUtc"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return __WEBPACK_IMPORTED_MODULE_22_d3_scale__["scaleSequential"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__ = __webpack_require__(430);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeCategory10"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeAccent", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeAccent"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeDark2", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeDark2"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemePaired", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemePaired"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemePastel1", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemePastel1"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemePastel2", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemePastel2"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeSet1", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeSet1"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeSet2", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeSet2"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeSet3", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeSet3"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateBrBG", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateBrBG"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeBrBG", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeBrBG"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolatePRGn", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolatePRGn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemePRGn", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemePRGn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolatePiYG", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolatePiYG"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemePiYG", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemePiYG"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolatePuOr", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolatePuOr"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemePuOr", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemePuOr"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRdBu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateRdBu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeRdBu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeRdBu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRdGy", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateRdGy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeRdGy", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeRdGy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRdYlBu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateRdYlBu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeRdYlBu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeRdYlBu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRdYlGn", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateRdYlGn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeRdYlGn", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeRdYlGn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateSpectral", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateSpectral"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeSpectral", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeSpectral"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateBuGn", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateBuGn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeBuGn", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeBuGn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateBuPu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateBuPu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeBuPu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeBuPu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateGnBu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateGnBu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeGnBu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeGnBu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateOrRd", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateOrRd"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeOrRd", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeOrRd"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolatePuBuGn", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolatePuBuGn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemePuBuGn", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemePuBuGn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolatePuBu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolatePuBu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemePuBu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemePuBu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolatePuRd", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolatePuRd"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemePuRd", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemePuRd"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRdPu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateRdPu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeRdPu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeRdPu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateYlGnBu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateYlGnBu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeYlGnBu", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeYlGnBu"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateYlGn", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateYlGn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeYlGn", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeYlGn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateYlOrBr", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateYlOrBr"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeYlOrBr", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeYlOrBr"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateYlOrRd", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateYlOrRd"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeYlOrRd", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeYlOrRd"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateBlues", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateBlues"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeBlues", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeBlues"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateGreens", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateGreens"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeGreens", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeGreens"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateGreys", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateGreys"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeGreys", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeGreys"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolatePurples", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolatePurples"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemePurples", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemePurples"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateReds", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateReds"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeReds", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeReds"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateOranges", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateOranges"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "schemeOranges", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["schemeOranges"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateCubehelixDefault"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateRainbow"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateWarm"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateCool"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateSinebow", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateSinebow"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateViridis"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateMagma"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolateInferno"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return __WEBPACK_IMPORTED_MODULE_23_d3_scale_chromatic__["interpolatePlasma"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_d3_selection__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "create", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["create"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["creator"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "local", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["local"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["matcher"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["mouse"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["namespace"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["namespaces"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["clientPoint"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["select"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["selectAll"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["selection"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["selector"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["selectorAll"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "style", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["style"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["touch"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["touches"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "window", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["window"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "event", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["event"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return __WEBPACK_IMPORTED_MODULE_24_d3_selection__["customEvent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_d3_shape__ = __webpack_require__(471);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["arc"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "area", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["area"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "line", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["line"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["pie"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["areaRadial"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["radialArea"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["lineRadial"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["radialLine"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["pointRadial"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["linkHorizontal"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["linkVertical"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["linkRadial"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["symbol"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["symbols"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["symbolCircle"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["symbolCross"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["symbolDiamond"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["symbolSquare"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["symbolStar"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["symbolTriangle"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["symbolWye"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveBasisClosed"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveBasisOpen"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveBasis"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveBundle"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveCardinalClosed"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveCardinalOpen"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveCardinal"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveCatmullRomClosed"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveCatmullRomOpen"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveCatmullRom"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveLinearClosed"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveLinear"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveMonotoneX"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveMonotoneY"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveNatural"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveStep"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveStepAfter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["curveStepBefore"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["stack"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["stackOffsetExpand"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["stackOffsetDiverging"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["stackOffsetNone"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["stackOffsetSilhouette"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["stackOffsetWiggle"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["stackOrderAscending"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["stackOrderDescending"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["stackOrderInsideOut"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["stackOrderNone"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return __WEBPACK_IMPORTED_MODULE_25_d3_shape__["stackOrderReverse"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_d3_time__ = __webpack_require__(45);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeInterval"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeMillisecond"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeMilliseconds"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcMillisecond"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcMilliseconds"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSecond", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeSecond"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeSeconds"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSecond", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcSecond"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcSeconds"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMinute", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeMinute"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeMinutes"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeHour", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeHour"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeHours", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeHours"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeDay", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeDay"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeDays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeDays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeWeek", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeWeek"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeWeeks"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSunday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeSunday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSundays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeSundays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMonday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeMonday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMondays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeMondays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeTuesday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeTuesdays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeWednesday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeWednesdays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeThursday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeThursday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeThursdays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeFriday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeFriday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeFridays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeFridays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeSaturday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeSaturdays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMonth", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeMonth"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeMonths", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeMonths"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeYear", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeYear"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeYears", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["timeYears"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMinute", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcMinute"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcMinutes"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcHour", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcHour"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcHours"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcDay", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcDay"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcDays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcWeek", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcWeek"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcWeeks"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcSunday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcSundays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcMonday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcMondays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcTuesday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcTuesdays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcWednesday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcWednesdays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcThursday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcThursdays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcFriday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcFridays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcSaturday"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcSaturdays"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMonth", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcMonth"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcMonths"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcYear", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcYear"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return __WEBPACK_IMPORTED_MODULE_26_d3_time__["utcYears"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_d3_time_format__ = __webpack_require__(81);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_time_format__["timeFormatDefaultLocale"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_time_format__["timeFormat"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_time_format__["timeParse"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_time_format__["utcFormat"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_time_format__["utcParse"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_time_format__["timeFormatLocale"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isoFormat", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_time_format__["isoFormat"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isoParse", function() { return __WEBPACK_IMPORTED_MODULE_27_d3_time_format__["isoParse"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_d3_timer__ = __webpack_require__(36);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "now", function() { return __WEBPACK_IMPORTED_MODULE_28_d3_timer__["now"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return __WEBPACK_IMPORTED_MODULE_28_d3_timer__["timer"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return __WEBPACK_IMPORTED_MODULE_28_d3_timer__["timerFlush"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return __WEBPACK_IMPORTED_MODULE_28_d3_timer__["timeout"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return __WEBPACK_IMPORTED_MODULE_28_d3_timer__["interval"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_d3_transition__ = __webpack_require__(62);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return __WEBPACK_IMPORTED_MODULE_29_d3_transition__["transition"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "active", function() { return __WEBPACK_IMPORTED_MODULE_29_d3_transition__["active"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return __WEBPACK_IMPORTED_MODULE_29_d3_transition__["interrupt"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_d3_voronoi__ = __webpack_require__(496);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "voronoi", function() { return __WEBPACK_IMPORTED_MODULE_30_d3_voronoi__["voronoi"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_d3_zoom__ = __webpack_require__(501);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zoom", function() { return __WEBPACK_IMPORTED_MODULE_31_d3_zoom__["zoom"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zoomTransform", function() { return __WEBPACK_IMPORTED_MODULE_31_d3_zoom__["zoomTransform"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zoomIdentity", function() { return __WEBPACK_IMPORTED_MODULE_31_d3_zoom__["zoomIdentity"]; });


































/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keywords", function() { return keywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homepage", function() { return homepage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "license", function() { return license; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "author", function() { return author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpkg", function() { return unpkg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsdelivr", function() { return jsdelivr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module", function() { return module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repository", function() { return repository; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scripts", function() { return scripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devDependencies", function() { return devDependencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dependencies", function() { return dependencies; });
var name = "d3";
var version = "5.4.0";
var description = "Data-Driven Documents";
var keywords = ["dom","visualization","svg","animation","canvas"];
var homepage = "https://d3js.org";
var license = "BSD-3-Clause";
var author = {"name":"Mike Bostock","url":"https://bost.ocks.org/mike"};
var main = "dist/d3.node.js";
var unpkg = "dist/d3.min.js";
var jsdelivr = "dist/d3.min.js";
var module = "index";
var repository = {"type":"git","url":"https://github.com/d3/d3.git"};
var scripts = {"pretest":"rimraf dist && mkdir dist && json2module package.json > dist/package.js && node rollup.node","test":"tape 'test/**/*-test.js'","prepublishOnly":"npm run test && rollup -c --banner \"$(preamble)\" && uglifyjs -b beautify=false,preamble=\"'$(preamble)'\" dist/d3.js -c negate_iife=false -m -o dist/d3.min.js","postpublish":"git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v5.js && cp ../d3/dist/d3.min.js d3.v5.min.js && git add d3.v5.js d3.v5.min.js && git commit -m \"d3 ${npm_package_version}\" && git push && cd - && cd ../d3-bower && git pull && cp ../d3/LICENSE ../d3/README.md ../d3/dist/d3.js ../d3/dist/d3.min.js . && git add -- LICENSE README.md d3.js d3.min.js && git commit -m \"${npm_package_version}\" && git tag -am \"${npm_package_version}\" v${npm_package_version} && git push && git push --tags && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js"};
var devDependencies = {"json2module":"0.0","package-preamble":"0.1","rimraf":"2","rollup":"0.57","rollup-plugin-ascii":"0.0","rollup-plugin-node-resolve":"3","tape":"4","uglify-js":"3.2"};
var dependencies = {"d3-array":"1","d3-axis":"1","d3-brush":"1","d3-chord":"1","d3-collection":"1","d3-color":"1","d3-contour":"1","d3-dispatch":"1","d3-drag":"1","d3-dsv":"1","d3-ease":"1","d3-fetch":"1","d3-force":"1","d3-format":"1","d3-geo":"1","d3-hierarchy":"1","d3-interpolate":"1","d3-path":"1","d3-polygon":"1","d3-quadtree":"1","d3-random":"1","d3-scale":"2","d3-scale-chromatic":"1","d3-selection":"1","d3-shape":"1","d3-time":"1","d3-time-format":"2","d3-timer":"1","d3-transition":"1","d3-voronoi":"1","d3-zoom":"1"};


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(91);


/* harmony default export */ __webpack_exports__["default"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["pair"];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(98);









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["default"],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["default"],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["default"];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(__WEBPACK_IMPORTED_MODULE_6__ticks__["tickStep"])(x0, x1, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_5__range__["default"])(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(__WEBPACK_IMPORTED_MODULE_1__bisect__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_2__constant__["default"])(__WEBPACK_IMPORTED_MODULE_0__array__["slice"].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(50);





/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["map"].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["default"]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["default"]);
  return Math.ceil((max - min) / (2 * (Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["default"])(values, 0.75) - Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["default"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(92);


/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(__WEBPACK_IMPORTED_MODULE_0__deviation__["default"])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(23);


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["default"])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["default"])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(50);




/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["default"])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["default"])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__quantile__["default"])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["default"]), 0.5);
});


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(18);


/* harmony default export */ __webpack_exports__["default"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["default"];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(100);


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__transpose__["default"])(arguments);
});


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_axis__ = __webpack_require__(193);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["axisTop"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["axisRight"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["axisBottom"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["axisLeft"]; });



/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["axisTop"] = axisTop;
/* harmony export (immutable) */ __webpack_exports__["axisRight"] = axisRight;
/* harmony export (immutable) */ __webpack_exports__["axisBottom"] = axisBottom;
/* harmony export (immutable) */ __webpack_exports__["axisLeft"] = axisLeft;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(195);



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : __WEBPACK_IMPORTED_MODULE_1__identity__["default"]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "#000"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "#000")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "#000")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
            : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = __WEBPACK_IMPORTED_MODULE_0__array__["slice"].call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : __WEBPACK_IMPORTED_MODULE_0__array__["slice"].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : __WEBPACK_IMPORTED_MODULE_0__array__["slice"].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_brush__ = __webpack_require__(197);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "brush", function() { return __WEBPACK_IMPORTED_MODULE_0__src_brush__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "brushX", function() { return __WEBPACK_IMPORTED_MODULE_0__src_brush__["brushX"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "brushY", function() { return __WEBPACK_IMPORTED_MODULE_0__src_brush__["brushY"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "brushSelection", function() { return __WEBPACK_IMPORTED_MODULE_0__src_brush__["brushSelection"]; });



/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["brushSelection"] = brushSelection;
/* harmony export (immutable) */ __webpack_exports__["brushX"] = brushX;
/* harmony export (immutable) */ __webpack_exports__["brushY"] = brushY;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_drag__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_transition__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__noevent__ = __webpack_require__(283);









var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

var X = {
  name: "x",
  handles: ["e", "w"].map(type),
  input: function(x, e) { return x && [[x[0], e[0][1]], [x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y && [[e[0][0], y[0]], [e[1][0], y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(type),
  input: function(xy) { return xy; },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush(X);
}

function brushY() {
  return brush(Y);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return brush(XY);
});

function brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      listeners = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["dispatch"])(brush, "start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        .on("mousedown.brush touchstart.brush", started);
  }

  brush.move = function(group, selection) {
    if (group.selection) {
      group
          .on("start.brush", function() { emitter(this, arguments).beforestart().start(); })
          .on("interrupt.brush end.brush", function() { emitter(this, arguments).end(); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = Object(__WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["interpolate"])(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && empty(selection1) ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 && selection1 ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["interrupt"])(that);
            state.selection = selection1 == null || empty(selection1) ? null : selection1;
            redraw.call(that);
            emit.start().brush().end();
          });
    }
  };

  function redraw() {
    var group = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args) {
    return that.__brush.emitter || new Emitter(that, args);
  }

  function Emitter(that, args) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function() {
      if (this.starting) this.starting = false, this.emit("start");
      return this;
    },
    brush: function() {
      this.emit("brush");
      return this;
    },
    end: function() {
      if (--this.active === 0) delete this.state.emitter, this.emit("end");
      return this;
    },
    emit: function(type) {
      Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["customEvent"])(new __WEBPACK_IMPORTED_MODULE_6__event__["default"](brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function started() {
    if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].touches) { if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].changedTouches.length < __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].touches.length) return Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["default"])(); }
    else if (touchending) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].target.__data__.type,
        mode = (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx,
        dy,
        moving,
        shifting = signX && signY && __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].shiftKey,
        lockX,
        lockY,
        point0 = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(that),
        point = point0,
        emit = emitter(that, arguments).beforestart();

    if (type === "overlay") {
      state.selection = selection = [
        [w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]],
        [e0 = dim === Y ? E : w0, s0 = dim === X ? S : n0]
      ];
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].touches) {
      group
          .on("touchmove.brush", moved, true)
          .on("touchend.brush touchcancel.brush", ended, true);
    } else {
      var view = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view)
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);

      Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["dragDisable"])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view);
    }

    Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["nopropagation"])();
    Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["interrupt"])(that);
    redraw.call(that);
    emit.start();

    function moved() {
      var point1 = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(that);
      if (shifting && !lockX && !lockY) {
        if (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1])) lockY = true;
        else lockX = true;
      }
      point = point1;
      moving = true;
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["default"])();
      move();
    }

    function move() {
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (signX < 0) dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
          else if (signX > 0) dx = Math.max(W - e0, Math.min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
          if (signY < 0) dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
          else if (signY > 0) dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX));
          if (signY) n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush();
      }
    }

    function ended() {
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["nopropagation"])();
      if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].touches) {
        if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
        group.on("touchmove.brush touchend.brush touchcancel.brush", null);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["dragEnable"])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (empty(selection)) state.selection = null, redraw.call(that);
      emit.end();
    }

    function keydowned() {
      switch (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move();
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move();
          }
          break;
        }
        default: return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["default"])();
    }

    function keyupped() {
      switch (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move();
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move();
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move();
          }
          break;
        }
        default: return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_7__noevent__["default"])();
    }
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = extent.apply(this, arguments);
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["default"])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["default"])(!!_), brush) : filter;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["default"] = (dispatch);


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodrag__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noevent__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event__ = __webpack_require__(235);







// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(d) {
  return d == null ? {x: __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].x, y: __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].y} : d;
}

function defaultTouchable() {
  return "ontouchstart" in this;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["dispatch"])("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var gesture = beforestart("mouse", container.apply(this, arguments), __WEBPACK_IMPORTED_MODULE_1_d3_selection__["mouse"], this, arguments);
    if (!gesture) return;
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["select"])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    Object(__WEBPACK_IMPORTED_MODULE_2__nodrag__["default"])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view);
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["nopropagation"])();
    mousemoving = false;
    mousedownx = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientX;
    mousedowny = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientY;
    gesture("start");
  }

  function mousemoved() {
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["default"])();
    if (!mousemoving) {
      var dx = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientX - mousedownx, dy = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag");
  }

  function mouseupped() {
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["select"])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view).on("mousemove.drag mouseup.drag", null);
    Object(__WEBPACK_IMPORTED_MODULE_2__nodrag__["yesdrag"])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view, mousemoving);
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["default"])();
    gestures.mouse("end");
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].changedTouches,
        c = container.apply(this, arguments),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(touches[i].identifier, c, __WEBPACK_IMPORTED_MODULE_1_d3_selection__["touch"], this, arguments)) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["nopropagation"])();
        gesture("start");
      }
    }
  }

  function touchmoved() {
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["default"])();
        gesture("drag");
      }
    }
  }

  function touchended() {
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["nopropagation"])();
        gesture("end");
      }
    }
  }

  function beforestart(id, container, point, that, args) {
    var p = point(container, id), s, dx, dy,
        sublisteners = listeners.copy();

    if (!Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["customEvent"])(new __WEBPACK_IMPORTED_MODULE_5__event__["default"](drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
      if ((__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].subject = s = subject.apply(that, args)) == null) return false;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return true;
    })) return;

    return function gesture(type) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[id] = gesture, n = active++; break;
        case "end": delete gestures[id], --active; // nobreak
        case "drag": p = point(container, id), n = active; break;
      }
      Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["customEvent"])(new __WEBPACK_IMPORTED_MODULE_5__event__["default"](drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["default"])(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["default"])(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["default"])(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["default"])(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
});


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(101);



/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__select__["default"])(Object(__WEBPACK_IMPORTED_MODULE_0__creator__["default"])(name).call(document.documentElement));
});


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(54);



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selector__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["Selection"](subgroups, this._parents);
});


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(102);



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selectorAll__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["Selection"](subgroups, parents);
});


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(103);



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_1__matcher__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["Selection"](subgroups, this._parents);
});


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(205);




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["EnterNode"](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["EnterNode"](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(__WEBPACK_IMPORTED_MODULE_2__constant__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index__["Selection"](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["Selection"](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["default"]), this._parents);
});


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["default"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["Selection"](merges, this._parents);
});


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["Selection"](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return !this.node();
});


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(52);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(raise);
});


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(lower);
});


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(33);


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(54);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(__WEBPACK_IMPORTED_MODULE_1__selector__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(remove);
});


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

/* harmony default export */ __webpack_exports__["default"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(55);


function dispatchEvent(node, type, params) {
  var window = Object(__WEBPACK_IMPORTED_MODULE_0__window__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = local;
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(34);



/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  var event = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["default"])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(__WEBPACK_IMPORTED_MODULE_1__point__["default"])(node, event);
});


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["Selection"]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["Selection"]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["root"]);
});


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(34);



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["default"])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__point__["default"])(node, touch);
    }
  }

  return null;
});


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(34);



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches) {
  if (touches == null) touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["default"])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(__WEBPACK_IMPORTED_MODULE_1__point__["default"])(node, touches[i]);
  }

  return points;
});


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = DragEvent;
function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
  this.target = target;
  this.type = type;
  this.subject = subject;
  this.identifier = id;
  this.active = active;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this._ = dispatch;
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["gray"] = gray;
/* harmony export (immutable) */ __webpack_exports__["default"] = lab;
/* harmony export (immutable) */ __webpack_exports__["Lab"] = Lab;
/* harmony export (immutable) */ __webpack_exports__["lch"] = lch;
/* harmony export (immutable) */ __webpack_exports__["hcl"] = hcl;
/* harmony export (immutable) */ __webpack_exports__["Hcl"] = Hcl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(109);




// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["deg2rad"];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["Rgb"])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["rgbConvert"])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["default"])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["extend"])(__WEBPACK_IMPORTED_MODULE_1__color__["Color"], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["Rgb"](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["rad2deg"];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["default"])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["extend"])(__WEBPACK_IMPORTED_MODULE_1__color__["Color"], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = cubehelix;
/* harmony export (immutable) */ __webpack_exports__["Cubehelix"] = Cubehelix;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(109);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["Rgb"])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["rgbConvert"])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["rad2deg"] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["default"])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["extend"])(__WEBPACK_IMPORTED_MODULE_1__color__["Color"], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["brighter"] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["brighter"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["darker"] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["darker"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["deg2rad"],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["Rgb"](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(240);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["default"])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["default"])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["parseSvg"], ", ", ")", ")");


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["parseCss"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["parseSvg"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(241);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["identity"];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["default"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["identity"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["identity"];
  value = value.matrix;
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["default"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(24);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["hsl"])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["hsl"])(end)).h),
        s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.s, end.s),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["hue"]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["default"]);


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = lab;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(24);



function lab(start, end) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["lab"])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["lab"])(end)).l),
      a = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.a, end.a),
      b = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.b, end.b),
      opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(24);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["hcl"])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["hcl"])(end)).h),
        c = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.c, end.c),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["hue"]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["default"]);


/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(24);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["cubehelix"])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["cubehelix"])(end)).h),
          s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.s, end.s),
          l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.l, end.l),
          opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["hue"]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["default"]);


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = piecewise;
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interrupt__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transition__ = __webpack_require__(253);




__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.interrupt = __WEBPACK_IMPORTED_MODULE_1__interrupt__["default"];
__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.transition = __WEBPACK_IMPORTED_MODULE_2__transition__["default"];


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interrupt__ = __webpack_require__(117);


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return this.each(function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__interrupt__["default"])(this, name);
  });
});


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(63);


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["Timer"];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(63);


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["Timer"], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(__WEBPACK_IMPORTED_MODULE_0__timer__["now"])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ease__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_timer__ = __webpack_require__(36);





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: __WEBPACK_IMPORTED_MODULE_2_d3_ease__["easeCubicInOut"]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["now"])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var id,
      timing;

  if (name instanceof __WEBPACK_IMPORTED_MODULE_0__transition_index__["Transition"]) {
    id = name._id, name = name._name;
  } else {
    id = Object(__WEBPACK_IMPORTED_MODULE_0__transition_index__["newId"])(), (timing = defaultTiming).time = Object(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["now"])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(__WEBPACK_IMPORTED_MODULE_1__transition_schedule__["default"])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["Transition"](groups, this._parents, name, id);
});


/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate__ = __webpack_require__(118);





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["namespace"])(name), i = fullname === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["interpolateTransformSvg"] : __WEBPACK_IMPORTED_MODULE_3__interpolate__["default"];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(__WEBPACK_IMPORTED_MODULE_2__tween__["tweenValue"])(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value + ""));
});


/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);


function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["namespace"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});


/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(9);


function delayFunction(id, value) {
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["init"])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["init"])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["get"])(this.node(), id).delay;
});


/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(9);


function durationFunction(id, value) {
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["set"])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["set"])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["get"])(this.node(), id).duration;
});


/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(9);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["set"])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["get"])(this.node(), id).ease;
});


/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(12);



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["matcher"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["Transition"](subgroups, this._parents, this._name, this._id);
});


/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(12);


/* harmony default export */ __webpack_exports__["default"] = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["Transition"](merges, this._parents, this._name, this._id);
});


/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(9);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? __WEBPACK_IMPORTED_MODULE_0__schedule__["init"] : __WEBPACK_IMPORTED_MODULE_0__schedule__["set"];
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["get"])(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});


/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.on("end.remove", removeFunction(this._id));
});


/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(9);




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selector"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["default"])(subgroup[i], name, id, i, subgroup, Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["get"])(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["Transition"](subgroups, this._parents, name, id);
});


/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(9);




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selectorAll"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["get"])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["default"])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["Transition"](subgroups, parents, name, id);
});


/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);


var Selection = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.constructor;

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new Selection(this._groups, this._parents);
});


/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate__ = __webpack_require__(118);





function styleRemove(name, interpolate) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name),
        value1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name),
        value1 = value(this);
    if (value1 == null) value1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var i = (name += "") === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["interpolateTransformCss"] : __WEBPACK_IMPORTED_MODULE_3__interpolate__["default"];
  return value == null ? this
          .styleTween(name, styleRemove(name, i))
          .on("end.style." + name, styleRemoveEnd(name))
      : this.styleTween(name, typeof value === "function"
          ? styleFunction(name, i, Object(__WEBPACK_IMPORTED_MODULE_2__tween__["tweenValue"])(this, "style." + name, value))
          : styleConstant(name, i, value + ""), priority);
});


/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});


/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tween__ = __webpack_require__(37);


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(Object(__WEBPACK_IMPORTED_MODULE_0__tween__["tweenValue"])(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});


/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule__ = __webpack_require__(9);



/* harmony default export */ __webpack_exports__["default"] = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = Object(__WEBPACK_IMPORTED_MODULE_0__index__["newId"])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["get"])(node, id0);
        Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["default"])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["Transition"](groups, this._parents, name, id1);
});


/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["linear"] = linear;
function linear(t) {
  return +t;
}


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["quadIn"] = quadIn;
/* harmony export (immutable) */ __webpack_exports__["quadOut"] = quadOut;
/* harmony export (immutable) */ __webpack_exports__["quadInOut"] = quadInOut;
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["cubicIn"] = cubicIn;
/* harmony export (immutable) */ __webpack_exports__["cubicOut"] = cubicOut;
/* harmony export (immutable) */ __webpack_exports__["cubicInOut"] = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyIn", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyOut", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyInOut", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["sinIn"] = sinIn;
/* harmony export (immutable) */ __webpack_exports__["sinOut"] = sinOut;
/* harmony export (immutable) */ __webpack_exports__["sinInOut"] = sinInOut;
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["expIn"] = expIn;
/* harmony export (immutable) */ __webpack_exports__["expOut"] = expOut;
/* harmony export (immutable) */ __webpack_exports__["expInOut"] = expInOut;
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["circleIn"] = circleIn;
/* harmony export (immutable) */ __webpack_exports__["circleOut"] = circleOut;
/* harmony export (immutable) */ __webpack_exports__["circleInOut"] = circleInOut;
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["bounceIn"] = bounceIn;
/* harmony export (immutable) */ __webpack_exports__["bounceOut"] = bounceOut;
/* harmony export (immutable) */ __webpack_exports__["bounceInOut"] = bounceInOut;
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(9);



var root = [null];

/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > __WEBPACK_IMPORTED_MODULE_1__transition_schedule__["SCHEDULED"] && schedule.name === name) {
        return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["Transition"]([[node]], root, name, +i);
      }
    }
  }

  return null;
});


/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(target, type, selection) {
  this.target = target;
  this.type = type;
  this.selection = selection;
});


/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["nopropagation"] = nopropagation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);


function nopropagation() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].preventDefault();
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
});


/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_chord__ = __webpack_require__(285);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "chord", function() { return __WEBPACK_IMPORTED_MODULE_0__src_chord__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ribbon__ = __webpack_require__(286);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ribbon", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ribbon__["default"]; });




/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(120);



function compareValue(compare) {
  return function(a, b) {
    return compare(
      a.source.value + a.target.value,
      b.source.value + b.target.value
    );
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var padAngle = 0,
      sortGroups = null,
      sortSubgroups = null,
      sortChords = null;

  function chord(matrix) {
    var n = matrix.length,
        groupSums = [],
        groupIndex = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(n),
        subgroupIndex = [],
        chords = [],
        groups = chords.groups = new Array(n),
        subgroups = new Array(n * n),
        k,
        x,
        x0,
        dx,
        i,
        j;

    // Compute the sum.
    k = 0, i = -1; while (++i < n) {
      x = 0, j = -1; while (++j < n) {
        x += matrix[i][j];
      }
      groupSums.push(x);
      subgroupIndex.push(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(n));
      k += x;
    }

    // Sort groups…
    if (sortGroups) groupIndex.sort(function(a, b) {
      return sortGroups(groupSums[a], groupSums[b]);
    });

    // Sort subgroups…
    if (sortSubgroups) subgroupIndex.forEach(function(d, i) {
      d.sort(function(a, b) {
        return sortSubgroups(matrix[i][a], matrix[i][b]);
      });
    });

    // Convert the sum to scaling factor for [0, 2pi].
    // TODO Allow start and end angle to be specified?
    // TODO Allow padding to be specified as percentage?
    k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["max"])(0, __WEBPACK_IMPORTED_MODULE_1__math__["tau"] - padAngle * n) / k;
    dx = k ? padAngle : __WEBPACK_IMPORTED_MODULE_1__math__["tau"] / n;

    // Compute the start and end angle for each group and subgroup.
    // Note: Opera has a bug reordering object literal properties!
    x = 0, i = -1; while (++i < n) {
      x0 = x, j = -1; while (++j < n) {
        var di = groupIndex[i],
            dj = subgroupIndex[di][j],
            v = matrix[di][dj],
            a0 = x,
            a1 = x += v * k;
        subgroups[dj * n + di] = {
          index: di,
          subindex: dj,
          startAngle: a0,
          endAngle: a1,
          value: v
        };
      }
      groups[di] = {
        index: di,
        startAngle: x0,
        endAngle: x,
        value: groupSums[di]
      };
      x += dx;
    }

    // Generate chords for each (non-empty) subgroup-subgroup link.
    i = -1; while (++i < n) {
      j = i - 1; while (++j < n) {
        var source = subgroups[j * n + i],
            target = subgroups[i * n + j];
        if (source.value || target.value) {
          chords.push(source.value < target.value
              ? {source: target, target: source}
              : {source: source, target: target});
        }
      }
    }

    return sortChords ? chords.sort(sortChords) : chords;
  }

  chord.padAngle = function(_) {
    return arguments.length ? (padAngle = Object(__WEBPACK_IMPORTED_MODULE_1__math__["max"])(0, _), chord) : padAngle;
  };

  chord.sortGroups = function(_) {
    return arguments.length ? (sortGroups = _, chord) : sortGroups;
  };

  chord.sortSubgroups = function(_) {
    return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
  };

  chord.sortChords = function(_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
  };

  return chord;
});


/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_path__ = __webpack_require__(14);





function defaultSource(d) {
  return d.source;
}

function defaultTarget(d) {
  return d.target;
}

function defaultRadius(d) {
  return d.radius;
}

function defaultStartAngle(d) {
  return d.startAngle;
}

function defaultEndAngle(d) {
  return d.endAngle;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var source = defaultSource,
      target = defaultTarget,
      radius = defaultRadius,
      startAngle = defaultStartAngle,
      endAngle = defaultEndAngle,
      context = null;

  function ribbon() {
    var buffer,
        argv = __WEBPACK_IMPORTED_MODULE_0__array__["slice"].call(arguments),
        s = source.apply(this, argv),
        t = target.apply(this, argv),
        sr = +radius.apply(this, (argv[0] = s, argv)),
        sa0 = startAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["halfPi"],
        sa1 = endAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["halfPi"],
        sx0 = sr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(sa0),
        sy0 = sr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(sa0),
        tr = +radius.apply(this, (argv[0] = t, argv)),
        ta0 = startAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["halfPi"],
        ta1 = endAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["halfPi"];

    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_3_d3_path__["path"])();

    context.moveTo(sx0, sy0);
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) { // TODO sr !== tr?
      context.quadraticCurveTo(0, 0, tr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(ta0), tr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(ta0));
      context.arc(0, 0, tr, ta0, ta1);
    }
    context.quadraticCurveTo(0, 0, sx0, sy0);
    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  ribbon.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), ribbon) : radius;
  };

  ribbon.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), ribbon) : startAngle;
  };

  ribbon.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), ribbon) : endAngle;
  };

  ribbon.source = function(_) {
    return arguments.length ? (source = _, ribbon) : source;
  };

  ribbon.target = function(_) {
    return arguments.length ? (target = _, ribbon) : target;
  };

  ribbon.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), ribbon) : context;
  };

  return ribbon;
});


/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) {}

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (path);


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(64);


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(__WEBPACK_IMPORTED_MODULE_0__map__["default"])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__map__["default"])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(64);


function Set() {}

var proto = __WEBPACK_IMPORTED_MODULE_0__map__["default"].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[__WEBPACK_IMPORTED_MODULE_0__map__["prefix"] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* harmony default export */ __webpack_exports__["default"] = (set);


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_contours__ = __webpack_require__(121);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "contours", function() { return __WEBPACK_IMPORTED_MODULE_0__src_contours__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_density__ = __webpack_require__(300);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "contourDensity", function() { return __WEBPACK_IMPORTED_MODULE_1__src_density__["default"]; });




/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a - b;
});


/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ring) {
  var i = 0, n = ring.length, area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
  while (++i < n) area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  return area;
});


/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ring, hole) {
  var i = -1, n = hole.length, c;
  while (++i < n) if (c = ringContains(ring, hole[i])) return c;
  return 0;
});

function ringContains(ring, point) {
  var x = point[0], y = point[1], contains = -1;
  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi = ring[i], xi = pi[0], yi = pi[1], pj = ring[j], xj = pj[0], yj = pj[1];
    if (segmentContains(pi, pj, point)) return 0;
    if (((yi > y) !== (yj > y)) && ((x < (xj - xi) * (y - yi) / (yj - yi) + xi))) contains = -contains;
  }
  return contains;
}

function segmentContains(a, b, c) {
  var i; return collinear(a, b, c) && within(a[i = +(a[0] === b[0])], c[i], b[i]);
}

function collinear(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) === (c[0] - a[0]) * (b[1] - a[1]);
}

function within(p, q, r) {
  return p <= q && q <= r || r <= q && q <= p;
}


/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {});


/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blur__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contours__ = __webpack_require__(121);






function defaultX(d) {
  return d[0];
}

function defaultY(d) {
  return d[1];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = defaultX,
      y = defaultY,
      dx = 960,
      dy = 500,
      r = 20, // blur radius
      k = 2, // log2(grid cell size)
      o = r * 3, // grid offset, to pad for blur
      n = (dx + o * 2) >> k, // grid width
      m = (dy + o * 2) >> k, // grid height
      threshold = Object(__WEBPACK_IMPORTED_MODULE_3__constant__["default"])(20);

  function density(data) {
    var values0 = new Float32Array(n * m),
        values1 = new Float32Array(n * m);

    data.forEach(function(d, i, data) {
      var xi = (x(d, i, data) + o) >> k,
          yi = (y(d, i, data) + o) >> k;
      if (xi >= 0 && xi < n && yi >= 0 && yi < m) {
        ++values0[xi + yi * n];
      }
    });

    // TODO Optimize.
    Object(__WEBPACK_IMPORTED_MODULE_2__blur__["blurX"])({width: n, height: m, data: values0}, {width: n, height: m, data: values1}, r >> k);
    Object(__WEBPACK_IMPORTED_MODULE_2__blur__["blurY"])({width: n, height: m, data: values1}, {width: n, height: m, data: values0}, r >> k);
    Object(__WEBPACK_IMPORTED_MODULE_2__blur__["blurX"])({width: n, height: m, data: values0}, {width: n, height: m, data: values1}, r >> k);
    Object(__WEBPACK_IMPORTED_MODULE_2__blur__["blurY"])({width: n, height: m, data: values1}, {width: n, height: m, data: values0}, r >> k);
    Object(__WEBPACK_IMPORTED_MODULE_2__blur__["blurX"])({width: n, height: m, data: values0}, {width: n, height: m, data: values1}, r >> k);
    Object(__WEBPACK_IMPORTED_MODULE_2__blur__["blurY"])({width: n, height: m, data: values1}, {width: n, height: m, data: values0}, r >> k);

    var tz = threshold(values0);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      var stop = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["max"])(values0);
      tz = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(0, stop, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(0, Math.floor(stop / tz) * tz, tz);
      tz.shift();
    }

    return Object(__WEBPACK_IMPORTED_MODULE_4__contours__["default"])()
        .thresholds(tz)
        .size([n, m])
      (values0)
        .map(transform);
  }

  function transform(geometry) {
    geometry.value *= Math.pow(2, -2 * k); // Density in points per square pixel.
    geometry.coordinates.forEach(transformPolygon);
    return geometry;
  }

  function transformPolygon(coordinates) {
    coordinates.forEach(transformRing);
  }

  function transformRing(coordinates) {
    coordinates.forEach(transformPoint);
  }

  // TODO Optimize.
  function transformPoint(coordinates) {
    coordinates[0] = coordinates[0] * Math.pow(2, k) - o;
    coordinates[1] = coordinates[1] * Math.pow(2, k) - o;
  }

  function resize() {
    o = r * 3;
    n = (dx + o * 2) >> k;
    m = (dy + o * 2) >> k;
    return density;
  }

  density.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["default"])(+_), density) : x;
  };

  density.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["default"])(+_), density) : y;
  };

  density.size = function(_) {
    if (!arguments.length) return [dx, dy];
    var _0 = Math.ceil(_[0]), _1 = Math.ceil(_[1]);
    if (!(_0 >= 0) && !(_0 >= 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, resize();
  };

  density.cellSize = function(_) {
    if (!arguments.length) return 1 << k;
    if (!((_ = +_) >= 1)) throw new Error("invalid cell size");
    return k = Math.floor(Math.log(_) / Math.LN2), resize();
  };

  density.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_3__constant__["default"])(__WEBPACK_IMPORTED_MODULE_1__array__["slice"].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["default"])(_), density) : threshold;
  };

  density.bandwidth = function(_) {
    if (!arguments.length) return Math.sqrt(r * (r + 1));
    if (!((_ = +_) >= 0)) throw new Error("invalid bandwidth");
    return r = Math.round((Math.sqrt(4 * _ * _ + 1) - 1) / 2), resize();
  };

  return density;
});


/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["blurX"] = blurX;
/* harmony export (immutable) */ __webpack_exports__["blurY"] = blurY;
// TODO Optimize edge cases.
// TODO Optimize index calculation.
// TODO Optimize arguments.
function blurX(source, target, r) {
  var n = source.width,
      m = source.height,
      w = (r << 1) + 1;
  for (var j = 0; j < m; ++j) {
    for (var i = 0, sr = 0; i < n + r; ++i) {
      if (i < n) {
        sr += source.data[i + j * n];
      }
      if (i >= r) {
        if (i >= w) {
          sr -= source.data[i - w + j * n];
        }
        target.data[i - r + j * n] = sr / Math.min(i + 1, n - 1 + w - i, w);
      }
    }
  }
}

// TODO Optimize edge cases.
// TODO Optimize index calculation.
// TODO Optimize arguments.
function blurY(source, target, r) {
  var n = source.width,
      m = source.height,
      w = (r << 1) + 1;
  for (var i = 0; i < n; ++i) {
    for (var j = 0, sr = 0; j < m + r; ++j) {
      if (j < m) {
        sr += source.data[i + j * n];
      }
      if (j >= r) {
        if (j >= w) {
          sr -= source.data[i + (j - w) * n];
        }
        target.data[i + (j - r) * n] = sr / Math.min(j + 1, m - 1 + w - j, w);
      }
    }
  }
}


/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return csvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return csvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return csvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return csvFormatRows; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(65);


var csv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv__["default"])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatRows = csv.formatRows;


/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return tsvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return tsvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return tsvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return tsvFormatRows; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(65);


var tsv = Object(__WEBPACK_IMPORTED_MODULE_0__dsv__["default"])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatRows = tsv.formatRows;


/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_blob__ = __webpack_require__(305);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "blob", function() { return __WEBPACK_IMPORTED_MODULE_0__src_blob__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_buffer__ = __webpack_require__(306);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return __WEBPACK_IMPORTED_MODULE_1__src_buffer__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_dsv__ = __webpack_require__(307);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dsv", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dsv__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csv", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dsv__["csv"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsv", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dsv__["tsv"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_image__ = __webpack_require__(308);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return __WEBPACK_IMPORTED_MODULE_3__src_image__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_json__ = __webpack_require__(309);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "json", function() { return __WEBPACK_IMPORTED_MODULE_4__src_json__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_text__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return __WEBPACK_IMPORTED_MODULE_5__src_text__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_xml__ = __webpack_require__(310);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "xml", function() { return __WEBPACK_IMPORTED_MODULE_6__src_xml__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return __WEBPACK_IMPORTED_MODULE_6__src_xml__["html"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return __WEBPACK_IMPORTED_MODULE_6__src_xml__["svg"]; });









/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function responseBlob(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.blob();
}

/* harmony default export */ __webpack_exports__["default"] = (function(input, init) {
  return fetch(input, init).then(responseBlob);
});


/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function responseArrayBuffer(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.arrayBuffer();
}

/* harmony default export */ __webpack_exports__["default"] = (function(input, init) {
  return fetch(input, init).then(responseArrayBuffer);
});


/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = dsv;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csv", function() { return csv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsv", function() { return tsv; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dsv__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text__ = __webpack_require__(66);



function dsvParse(parse) {
  return function(input, init, row) {
    if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
    return Object(__WEBPACK_IMPORTED_MODULE_1__text__["default"])(input, init).then(function(response) {
      return parse(response, row);
    });
  };
}

function dsv(delimiter, input, init, row) {
  if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
  var format = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dsv__["dsvFormat"])(delimiter);
  return Object(__WEBPACK_IMPORTED_MODULE_1__text__["default"])(input, init).then(function(response) {
    return format.parse(response, row);
  });
}

var csv = dsvParse(__WEBPACK_IMPORTED_MODULE_0_d3_dsv__["csvParse"]);
var tsv = dsvParse(__WEBPACK_IMPORTED_MODULE_0_d3_dsv__["tsvParse"]);


/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(input, init) {
  return new Promise(function(resolve, reject) {
    var image = new Image;
    for (var key in init) image[key] = init[key];
    image.onerror = reject;
    image.onload = function() { resolve(image); };
    image.src = input;
  });
});


/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function responseJson(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.json();
}

/* harmony default export */ __webpack_exports__["default"] = (function(input, init) {
  return fetch(input, init).then(responseJson);
});


/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text__ = __webpack_require__(66);


function parser(type) {
  return function(input, init)  {
    return Object(__WEBPACK_IMPORTED_MODULE_0__text__["default"])(input, init).then(function(text) {
      return (new DOMParser).parseFromString(text, type);
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = (parser("application/xml"));

var html = parser("text/html");

var svg = parser("image/svg+xml");


/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_center__ = __webpack_require__(312);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forceCenter", function() { return __WEBPACK_IMPORTED_MODULE_0__src_center__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_collide__ = __webpack_require__(313);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forceCollide", function() { return __WEBPACK_IMPORTED_MODULE_1__src_collide__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_link__ = __webpack_require__(327);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forceLink", function() { return __WEBPACK_IMPORTED_MODULE_2__src_link__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_manyBody__ = __webpack_require__(328);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forceManyBody", function() { return __WEBPACK_IMPORTED_MODULE_3__src_manyBody__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_radial__ = __webpack_require__(329);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forceRadial", function() { return __WEBPACK_IMPORTED_MODULE_4__src_radial__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_simulation__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forceSimulation", function() { return __WEBPACK_IMPORTED_MODULE_5__src_simulation__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_x__ = __webpack_require__(330);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forceX", function() { return __WEBPACK_IMPORTED_MODULE_6__src_x__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_y__ = __webpack_require__(331);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forceY", function() { return __WEBPACK_IMPORTED_MODULE_7__src_y__["default"]; });










/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  var nodes;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function(_) {
    nodes = _;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
});


/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jiggle__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_quadtree__ = __webpack_require__(68);




function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

/* harmony default export */ __webpack_exports__["default"] = (function(radius) {
  var nodes,
      radii,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(radius == null ? 1 : +radius);

  function force() {
    var i, n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = Object(__WEBPACK_IMPORTED_MODULE_2_d3_quadtree__["quadtree"])(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = Object(__WEBPACK_IMPORTED_MODULE_1__jiggle__["default"])(), l += x * x;
            if (y === 0) y = Object(__WEBPACK_IMPORTED_MODULE_1__jiggle__["default"])(), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), initialize(), force) : radius;
  };

  return force;
});


/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = quadtree;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cover__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remove__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__root__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__size__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visit__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__visitAfter__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__x__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__y__ = __webpack_require__(326);













function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? __WEBPACK_IMPORTED_MODULE_10__x__["defaultX"] : x, y == null ? __WEBPACK_IMPORTED_MODULE_11__y__["defaultY"] : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = __WEBPACK_IMPORTED_MODULE_0__add__["default"];
treeProto.addAll = __WEBPACK_IMPORTED_MODULE_0__add__["addAll"];
treeProto.cover = __WEBPACK_IMPORTED_MODULE_1__cover__["default"];
treeProto.data = __WEBPACK_IMPORTED_MODULE_2__data__["default"];
treeProto.extent = __WEBPACK_IMPORTED_MODULE_3__extent__["default"];
treeProto.find = __WEBPACK_IMPORTED_MODULE_4__find__["default"];
treeProto.remove = __WEBPACK_IMPORTED_MODULE_5__remove__["default"];
treeProto.removeAll = __WEBPACK_IMPORTED_MODULE_5__remove__["removeAll"];
treeProto.root = __WEBPACK_IMPORTED_MODULE_6__root__["default"];
treeProto.size = __WEBPACK_IMPORTED_MODULE_7__size__["default"];
treeProto.visit = __WEBPACK_IMPORTED_MODULE_8__visit__["default"];
treeProto.visitAfter = __WEBPACK_IMPORTED_MODULE_9__visitAfter__["default"];
treeProto.x = __WEBPACK_IMPORTED_MODULE_10__x__["default"];
treeProto.y = __WEBPACK_IMPORTED_MODULE_11__y__["default"];


/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["addAll"] = addAll;
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  var x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
});

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {data: d},
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d, i, n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, inherit the existing extent.
  if (x1 < x0) x0 = this._x0, x1 = this._x1;
  if (y1 < y0) y0 = this._y0, y1 = this._y1;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}


/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else if (x0 > x || x > x1 || y0 > y || y > y1) {
    var z = x1 - x0,
        node = this._root,
        parent,
        i;

    switch (i = (y < (y0 + y1) / 2) << 1 | (x < (x0 + x1) / 2)) {
      case 0: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1);
        break;
      }
      case 1: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1);
        break;
      }
      case 2: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y);
        break;
      }
      case 3: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y);
        break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  // If the quadtree covers the point already, just return.
  else return this;

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
});


/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do data.push(node.data); while (node = node.next)
  });
  return data;
});


/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(_) {
  return arguments.length
      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
});


/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quad__ = __webpack_require__(69);


/* harmony default export */ __webpack_exports__["default"] = (function(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(
        new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](node[3], xm, ym, x2, y2),
        new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](node[2], x1, ym, xm, y2),
        new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](node[1], xm, y1, x2, ym),
        new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](node[0], x1, y1, xm, ym)
      );

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | (x >= xm)) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
});


/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["removeAll"] = removeAll;
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return (next ? previous.next = next : delete previous.next), this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3])
      && node === (parent[3] || parent[2] || parent[1] || parent[0])
      && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }

  return this;
});

function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}


/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this._root;
});


/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do ++size; while (node = node.next)
  });
  return size;
});


/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quad__ = __webpack_require__(69);


/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](child, x0, y0, xm, ym));
    }
  }
  return this;
});


/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quad__ = __webpack_require__(69);


/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new __WEBPACK_IMPORTED_MODULE_0__quad__["default"](child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
});


/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["defaultX"] = defaultX;
function defaultX(d) {
  return d[0];
}

/* harmony default export */ __webpack_exports__["default"] = (function(_) {
  return arguments.length ? (this._x = _, this) : this._x;
});


/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["defaultY"] = defaultY;
function defaultY(d) {
  return d[1];
}

/* harmony default export */ __webpack_exports__["default"] = (function(_) {
  return arguments.length ? (this._y = _, this) : this._y;
});


/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jiggle__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_collection__ = __webpack_require__(38);




function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("missing: " + nodeId);
  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (function(links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(30),
      distances,
      nodes,
      count,
      bias,
      iterations = 1;

  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || Object(__WEBPACK_IMPORTED_MODULE_1__jiggle__["default"])();
        y = target.y + target.vy - source.y - source.vy || Object(__WEBPACK_IMPORTED_MODULE_1__jiggle__["default"])();
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;

    var i,
        n = nodes.length,
        m = links.length,
        nodeById = Object(__WEBPACK_IMPORTED_MODULE_2_d3_collection__["map"])(nodes, id),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function(_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), initializeStrength(), force) : strength;
  };

  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), initializeDistance(), force) : distance;
  };

  return force;
});


/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jiggle__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_quadtree__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simulation__ = __webpack_require__(125);





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes,
      node,
      alpha,
      strength = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i, n = nodes.length, tree = Object(__WEBPACK_IMPORTED_MODULE_2_d3_quadtree__["quadtree"])(nodes, __WEBPACK_IMPORTED_MODULE_3__simulation__["x"], __WEBPACK_IMPORTED_MODULE_3__simulation__["y"]).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }

  function accumulate(quad) {
    var strength = 0, q, c, weight = 0, x, y, i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }
      quad.x = x / weight;
      quad.y = y / weight;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do strength += strengths[q.data.index];
      while (q = q.next);
    }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;

    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = Object(__WEBPACK_IMPORTED_MODULE_1__jiggle__["default"])(), l += x * x;
        if (y === 0) y = Object(__WEBPACK_IMPORTED_MODULE_1__jiggle__["default"])(), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x === 0) x = Object(__WEBPACK_IMPORTED_MODULE_1__jiggle__["default"])(), l += x * x;
      if (y === 0) y = Object(__WEBPACK_IMPORTED_MODULE_1__jiggle__["default"])(), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x * w;
      node.vy += y * w;
    } while (quad = quad.next);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), initialize(), force) : strength;
  };

  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
});


/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(20);


/* harmony default export */ __webpack_exports__["default"] = (function(radius, x, y) {
  var nodes,
      strength = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(0.1),
      strengths,
      radiuses;

  if (typeof radius !== "function") radius = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+radius);
  if (x == null) x = 0;
  if (y == null) y = 0;

  function force(alpha) {
    for (var i = 0, n = nodes.length; i < n; ++i) {
      var node = nodes[i],
          dx = node.x - x || 1e-6,
          dy = node.y - y || 1e-6,
          r = Math.sqrt(dx * dx + dy * dy),
          k = (radiuses[i] - r) * strengths[i] * alpha / r;
      node.vx += dx * k;
      node.vy += dy * k;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    radiuses = new Array(n);
    for (i = 0; i < n; ++i) {
      radiuses[i] = +radius(nodes[i], i, nodes);
      strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _, initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), initialize(), force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), initialize(), force) : radius;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
});


/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(20);


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  var strength = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(0.1),
      nodes,
      strengths,
      xz;

  if (typeof x !== "function") x = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(x == null ? 0 : +x);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), initialize(), force) : strength;
  };

  force.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), initialize(), force) : x;
  };

  return force;
});


/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(20);


/* harmony default export */ __webpack_exports__["default"] = (function(y) {
  var strength = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(0.1),
      nodes,
      strengths,
      yz;

  if (typeof y !== "function") y = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(y == null ? 0 : +y);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), initialize(), force) : strength;
  };

  force.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), initialize(), force) : y;
  };

  return force;
});


/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return formatPrefix; });
/* harmony export (immutable) */ __webpack_exports__["default"] = defaultLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(126);


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatPrefixAuto__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatRounded__ = __webpack_require__(337);



/* harmony default export */ __webpack_exports__["default"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(__WEBPACK_IMPORTED_MODULE_1__formatRounded__["default"])(x * 100, p); },
  "r": __WEBPACK_IMPORTED_MODULE_1__formatRounded__["default"],
  "s": __WEBPACK_IMPORTED_MODULE_0__formatPrefixAuto__["default"],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(71);


/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(39);


/* harmony default export */ __webpack_exports__["default"] = (function(step) {
  return Math.max(0, -Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["default"])(Math.abs(step)));
});


/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(39);


/* harmony default export */ __webpack_exports__["default"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["default"])(value) / 3))) * 3 - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["default"])(Math.abs(step)));
});


/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(39);


/* harmony default export */ __webpack_exports__["default"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["default"])(max) - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["default"])(step)) + 1;
});


/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_area__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoArea", function() { return __WEBPACK_IMPORTED_MODULE_0__src_area__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_bounds__ = __webpack_require__(343);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBounds", function() { return __WEBPACK_IMPORTED_MODULE_1__src_bounds__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_centroid__ = __webpack_require__(344);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return __WEBPACK_IMPORTED_MODULE_2__src_centroid__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_circle__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCircle", function() { return __WEBPACK_IMPORTED_MODULE_3__src_circle__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_clip_antimeridian__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipAntimeridian", function() { return __WEBPACK_IMPORTED_MODULE_4__src_clip_antimeridian__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_clip_circle__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipCircle", function() { return __WEBPACK_IMPORTED_MODULE_5__src_clip_circle__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_clip_extent__ = __webpack_require__(346);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return __WEBPACK_IMPORTED_MODULE_6__src_clip_extent__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_clip_rectangle__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipRectangle", function() { return __WEBPACK_IMPORTED_MODULE_7__src_clip_rectangle__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_contains__ = __webpack_require__(348);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return __WEBPACK_IMPORTED_MODULE_8__src_contains__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_distance__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoDistance", function() { return __WEBPACK_IMPORTED_MODULE_9__src_distance__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_graticule__ = __webpack_require__(349);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return __WEBPACK_IMPORTED_MODULE_10__src_graticule__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return __WEBPACK_IMPORTED_MODULE_10__src_graticule__["graticule10"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_interpolate__ = __webpack_require__(350);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return __WEBPACK_IMPORTED_MODULE_11__src_interpolate__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_length__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLength", function() { return __WEBPACK_IMPORTED_MODULE_12__src_length__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_path_index__ = __webpack_require__(351);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPath", function() { return __WEBPACK_IMPORTED_MODULE_13__src_path_index__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_projection_albers__ = __webpack_require__(142);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return __WEBPACK_IMPORTED_MODULE_14__src_projection_albers__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_projection_albersUsa__ = __webpack_require__(359);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return __WEBPACK_IMPORTED_MODULE_15__src_projection_albersUsa__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_projection_azimuthalEqualArea__ = __webpack_require__(360);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_16__src_projection_azimuthalEqualArea__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_16__src_projection_azimuthalEqualArea__["azimuthalEqualAreaRaw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_projection_azimuthalEquidistant__ = __webpack_require__(361);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_17__src_projection_azimuthalEquidistant__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_17__src_projection_azimuthalEquidistant__["azimuthalEquidistantRaw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_projection_conicConformal__ = __webpack_require__(362);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return __WEBPACK_IMPORTED_MODULE_18__src_projection_conicConformal__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return __WEBPACK_IMPORTED_MODULE_18__src_projection_conicConformal__["conicConformalRaw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_projection_conicEqualArea__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_19__src_projection_conicEqualArea__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_19__src_projection_conicEqualArea__["conicEqualAreaRaw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_projection_conicEquidistant__ = __webpack_require__(363);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_20__src_projection_conicEquidistant__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_20__src_projection_conicEquidistant__["conicEquidistantRaw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_projection_equirectangular__ = __webpack_require__(143);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return __WEBPACK_IMPORTED_MODULE_21__src_projection_equirectangular__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return __WEBPACK_IMPORTED_MODULE_21__src_projection_equirectangular__["equirectangularRaw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_projection_gnomonic__ = __webpack_require__(364);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return __WEBPACK_IMPORTED_MODULE_22__src_projection_gnomonic__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return __WEBPACK_IMPORTED_MODULE_22__src_projection_gnomonic__["gnomonicRaw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_projection_identity__ = __webpack_require__(365);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return __WEBPACK_IMPORTED_MODULE_23__src_projection_identity__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_projection_index__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProjection", function() { return __WEBPACK_IMPORTED_MODULE_24__src_projection_index__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return __WEBPACK_IMPORTED_MODULE_24__src_projection_index__["projectionMutator"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_projection_mercator__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMercator", function() { return __WEBPACK_IMPORTED_MODULE_25__src_projection_mercator__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_25__src_projection_mercator__["mercatorRaw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_projection_naturalEarth1__ = __webpack_require__(366);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1", function() { return __WEBPACK_IMPORTED_MODULE_26__src_projection_naturalEarth1__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1Raw", function() { return __WEBPACK_IMPORTED_MODULE_26__src_projection_naturalEarth1__["naturalEarth1Raw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_projection_orthographic__ = __webpack_require__(367);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return __WEBPACK_IMPORTED_MODULE_27__src_projection_orthographic__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_27__src_projection_orthographic__["orthographicRaw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_projection_stereographic__ = __webpack_require__(368);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return __WEBPACK_IMPORTED_MODULE_28__src_projection_stereographic__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_28__src_projection_stereographic__["stereographicRaw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_projection_transverseMercator__ = __webpack_require__(369);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return __WEBPACK_IMPORTED_MODULE_29__src_projection_transverseMercator__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_29__src_projection_transverseMercator__["transverseMercatorRaw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_rotation__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRotation", function() { return __WEBPACK_IMPORTED_MODULE_30__src_rotation__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_stream__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStream", function() { return __WEBPACK_IMPORTED_MODULE_31__src_stream__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_transform__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransform", function() { return __WEBPACK_IMPORTED_MODULE_32__src_transform__["default"]; });






 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).




























/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartesian__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream__ = __webpack_require__(15);






var lambda0, phi0, lambda1, phi1, // bounds
    lambda2, // previous lambda-coordinate
    lambda00, phi00, // first point
    p0, // previous 3D point
    deltaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["default"])(),
    ranges,
    range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    __WEBPACK_IMPORTED_MODULE_1__area__["areaStream"].polygonStart();
  },
  polygonEnd: function() {
    __WEBPACK_IMPORTED_MODULE_1__area__["areaStream"].polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (__WEBPACK_IMPORTED_MODULE_1__area__["areaRingSum"] < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > __WEBPACK_IMPORTED_MODULE_3__math__["epsilon"]) phi1 = 90;
    else if (deltaSum < -__WEBPACK_IMPORTED_MODULE_3__math__["epsilon"]) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["cartesian"])([lambda * __WEBPACK_IMPORTED_MODULE_3__math__["radians"], phi * __WEBPACK_IMPORTED_MODULE_3__math__["radians"]]);
  if (p0) {
    var normal = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["cartesianCross"])(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["cartesianCross"])(equatorial, normal);
    Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["cartesianNormalizeInPlace"])(inflection);
    inflection = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["spherical"])(inflection);
    var delta = lambda - lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * __WEBPACK_IMPORTED_MODULE_3__math__["degrees"] * sign,
        phii,
        antimeridian = Object(__WEBPACK_IMPORTED_MODULE_3__math__["abs"])(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["degrees"];
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["degrees"];
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(Object(__WEBPACK_IMPORTED_MODULE_3__math__["abs"])(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  __WEBPACK_IMPORTED_MODULE_1__area__["areaStream"].point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  __WEBPACK_IMPORTED_MODULE_1__area__["areaStream"].lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  __WEBPACK_IMPORTED_MODULE_1__area__["areaStream"].lineEnd();
  if (Object(__WEBPACK_IMPORTED_MODULE_3__math__["abs"])(deltaSum) > __WEBPACK_IMPORTED_MODULE_3__math__["epsilon"]) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* harmony default export */ __webpack_exports__["default"] = (function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  Object(__WEBPACK_IMPORTED_MODULE_4__stream__["default"])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0, phi0], [lambda1, phi1]];
});


/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stream__ = __webpack_require__(15);




var W0, W1,
    X0, Y0, Z0,
    X1, Y1, Z1,
    X2, Y2, Z2,
    lambda00, phi00, // first point
    x0, y0, z0; // previous point

var centroidStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_1__noop__["default"],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["radians"], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["radians"];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(phi);
  centroidPointCartesian(cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(lambda), cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(lambda), Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["radians"], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["radians"];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(phi);
  x0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(lambda);
  y0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(lambda);
  z0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["radians"], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["radians"];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(phi),
      x = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(lambda),
      y = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(lambda),
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(phi),
      w = Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan2"])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["radians"], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["radians"];
  centroidStream.point = centroidRingPoint;
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(phi);
  x0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(lambda);
  y0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(lambda);
  z0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["radians"], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["radians"];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(phi),
      x = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(lambda),
      y = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(lambda),
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(cx * cx + cy * cy + cz * cz),
      w = Object(__WEBPACK_IMPORTED_MODULE_0__math__["asin"])(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  Object(__WEBPACK_IMPORTED_MODULE_2__stream__["default"])(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < __WEBPACK_IMPORTED_MODULE_0__math__["epsilon2"]) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < __WEBPACK_IMPORTED_MODULE_0__math__["epsilon2"]) return [NaN, NaN];
  }

  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan2"])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["degrees"], Object(__WEBPACK_IMPORTED_MODULE_0__math__["asin"])(z / Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(m)) * __WEBPACK_IMPORTED_MODULE_0__math__["degrees"]];
});


/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rectangle__ = __webpack_require__(41);


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = Object(__WEBPACK_IMPORTED_MODULE_0__rectangle__["default"])(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});


/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});


/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polygonContains__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__distance__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);




var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__distance__["default"])(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ab = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["default"])(coordinates[0], coordinates[1]),
      ao = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["default"])(coordinates[0], point),
      ob = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["default"])(point, coordinates[1]);
  return ao + ob <= ab + __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"];
}

function containsPolygon(coordinates, point) {
  return !!Object(__WEBPACK_IMPORTED_MODULE_0__polygonContains__["default"])(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * __WEBPACK_IMPORTED_MODULE_2__math__["radians"], point[1] * __WEBPACK_IMPORTED_MODULE_2__math__["radians"]];
}

/* harmony default export */ __webpack_exports__["default"] = (function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
});


/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = graticule;
/* harmony export (immutable) */ __webpack_exports__["graticule10"] = graticule10;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



function graticuleX(y0, y1, dy) {
  var y = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(y0, y1 - __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"], dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(x0, x1 - __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"], dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["ceil"])(X0 / DX) * DX, X1, DX).map(X)
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["ceil"])(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["ceil"])(x0 / dx) * dx, x1, dx).filter(function(x) { return Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(x % DX) > __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]; }).map(x))
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["ceil"])(y0 / dy) * dy, y1, dy).filter(function(y) { return Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(y % DY) > __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]], [180, 90 - __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]]])
      .extentMinor([[-180, -80 - __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]], [180, 80 + __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"]]]);
}

function graticule10() {
  return graticule()();
}


/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var x0 = a[0] * __WEBPACK_IMPORTED_MODULE_0__math__["radians"],
      y0 = a[1] * __WEBPACK_IMPORTED_MODULE_0__math__["radians"],
      x1 = b[0] * __WEBPACK_IMPORTED_MODULE_0__math__["radians"],
      y1 = b[1] * __WEBPACK_IMPORTED_MODULE_0__math__["radians"],
      cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(y0),
      sy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(y0),
      cy1 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(y1),
      sy1 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(y1),
      kx0 = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(x0),
      ky0 = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(x0),
      kx1 = cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(x1),
      ky1 = cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(x1),
      d = 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["asin"])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["haversin"])(y1 - y0) + cy0 * cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["haversin"])(x1 - x0))),
      k = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(d);

  var interpolate = d ? function(t) {
    var B = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(t *= d) / k,
        A = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan2"])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["degrees"],
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan2"])(z, Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(x * x + y * y)) * __WEBPACK_IMPORTED_MODULE_0__math__["degrees"]
    ];
  } : function() {
    return [x0 * __WEBPACK_IMPORTED_MODULE_0__math__["degrees"], y0 * __WEBPACK_IMPORTED_MODULE_0__math__["degrees"]];
  };

  interpolate.distance = d;

  return interpolate;
});


/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stream__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bounds__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__centroid__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__measure__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string__ = __webpack_require__(356);









/* harmony default export */ __webpack_exports__["default"] = (function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      Object(__WEBPACK_IMPORTED_MODULE_1__stream__["default"])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["default"])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_2__area__["default"]));
    return __WEBPACK_IMPORTED_MODULE_2__area__["default"].result();
  };

  path.measure = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["default"])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_6__measure__["default"]));
    return __WEBPACK_IMPORTED_MODULE_6__measure__["default"].result();
  };

  path.bounds = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["default"])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_3__bounds__["default"]));
    return __WEBPACK_IMPORTED_MODULE_3__bounds__["default"].result();
  };

  path.centroid = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["default"])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_4__centroid__["default"]));
    return __WEBPACK_IMPORTED_MODULE_4__centroid__["default"].result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, __WEBPACK_IMPORTED_MODULE_0__identity__["default"]) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new __WEBPACK_IMPORTED_MODULE_7__string__["default"]) : new __WEBPACK_IMPORTED_MODULE_5__context__["default"](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});


/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(13);




var areaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["default"])(),
    areaRingSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["default"])(),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["default"],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["default"],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["default"],
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["default"];
    areaSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(areaRingSum));
    areaRingSum.reset();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum.reset();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ __webpack_exports__["default"] = (areaStream);


/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
        : Z1 ? [X1 / Z1, Y1 / Z1]
        : Z0 ? [X0 / Z0, Y0 / Z0]
        : [NaN, NaN];
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0, dy = y - y0, z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ __webpack_exports__["default"] = (centroidStream);


/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = PathContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(13);



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, __WEBPACK_IMPORTED_MODULE_0__math__["tau"]);
        break;
      }
    }
  },
  result: __WEBPACK_IMPORTED_MODULE_1__noop__["default"]
};


/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(13);




var lengthSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["default"])(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["default"],
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["default"];
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum.reset();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["sqrt"])(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ __webpack_exports__["default"] = (lengthStream);


/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = PathString;
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}


/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__(42);




var maxDepth = 16, // maximum depth of subdivision
    cosMinDistance = Object(__WEBPACK_IMPORTED_MODULE_1__math__["cos"])(30 * __WEBPACK_IMPORTED_MODULE_1__math__["radians"]); // cos(minimum angular distance)

/* harmony default export */ __webpack_exports__["default"] = (function(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__transform__["transformer"])({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = Object(__WEBPACK_IMPORTED_MODULE_1__math__["sqrt"])(a * a + b * b + c * c),
          phi2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["asin"])(c /= m),
          lambda2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(c) - 1) < __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(lambda0 - lambda1) < __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"] ? (lambda0 + lambda1) / 2 : Object(__WEBPACK_IMPORTED_MODULE_1__math__["atan2"])(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["cartesian"])([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}


/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["cylindricalEqualAreaRaw"] = cylindricalEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math__["asin"])(y * cosPhi0)];
  };

  return forward;
}


/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albers__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conicEqualArea__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__(75);





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var cache,
      cacheStream,
      lower48 = Object(__WEBPACK_IMPORTED_MODULE_1__albers__["default"])(), lower48Point,
      alaska = Object(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["default"])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = Object(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["default"])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"], y + 0.120 * k + __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]], [x - 0.214 * k - __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"], y + 0.166 * k + __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]], [x - 0.115 * k - __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["fitExtent"])(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["fitSize"])(albersUsa, size, object);
  };

  albersUsa.fitWidth = function(width, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["fitWidth"])(albersUsa, width, object);
  };

  albersUsa.fitHeight = function(height, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["fitHeight"])(albersUsa, height, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});


/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalEqualAreaRaw", function() { return azimuthalEqualAreaRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(10);




var azimuthalEqualAreaRaw = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["azimuthalRaw"])(function(cxcy) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["azimuthalInvert"])(function(z) {
  return 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["asin"])(z / 2);
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["default"])(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalEquidistantRaw", function() { return azimuthalEquidistantRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(10);




var azimuthalEquidistantRaw = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["azimuthalRaw"])(function(c) {
  return (c = Object(__WEBPACK_IMPORTED_MODULE_0__math__["acos"])(c)) && c / Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(c);
});

azimuthalEquidistantRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["azimuthalInvert"])(function(z) {
  return z;
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["default"])(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["conicConformalRaw"] = conicConformalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mercator__ = __webpack_require__(76);




function tany(y) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["tan"])((__WEBPACK_IMPORTED_MODULE_0__math__["halfPi"] + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(y0),
      n = y0 === y1 ? Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(y0) : Object(__WEBPACK_IMPORTED_MODULE_0__math__["log"])(cy0 / Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(y1)) / Object(__WEBPACK_IMPORTED_MODULE_0__math__["log"])(tany(y1) / tany(y0)),
      f = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["pow"])(tany(y0), n) / n;

  if (!n) return __WEBPACK_IMPORTED_MODULE_2__mercator__["mercatorRaw"];

  function project(x, y) {
    if (f > 0) { if (y < -__WEBPACK_IMPORTED_MODULE_0__math__["halfPi"] + __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]) y = -__WEBPACK_IMPORTED_MODULE_0__math__["halfPi"] + __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]; }
    else { if (y > __WEBPACK_IMPORTED_MODULE_0__math__["halfPi"] - __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]) y = __WEBPACK_IMPORTED_MODULE_0__math__["halfPi"] - __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]; }
    var r = f / Object(__WEBPACK_IMPORTED_MODULE_0__math__["pow"])(tany(y), n);
    return [r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(n * x), f - r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = Object(__WEBPACK_IMPORTED_MODULE_0__math__["sign"])(n) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(x * x + fy * fy);
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan2"])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["abs"])(fy)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sign"])(fy), 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan"])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["pow"])(f / r, 1 / n)) - __WEBPACK_IMPORTED_MODULE_0__math__["halfPi"]];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["conicProjection"])(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
});


/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["conicEquidistantRaw"] = conicEquidistantRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equirectangular__ = __webpack_require__(143);




function conicEquidistantRaw(y0, y1) {
  var cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(y0),
      n = y0 === y1 ? Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(y0) : (cy0 - Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__math__["abs"])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]) return __WEBPACK_IMPORTED_MODULE_2__equirectangular__["equirectangularRaw"];

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(nx), g - gy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan2"])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["abs"])(gy)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sign"])(gy), g - Object(__WEBPACK_IMPORTED_MODULE_0__math__["sign"])(n) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sqrt"])(x * x + gy * gy)];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["conicProjection"])(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
});


/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["gnomonicRaw"] = gnomonicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(10);




function gnomonicRaw(x, y) {
  var cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(y), k = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(x) * cy;
  return [cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(x) / k, Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(y) / k];
}

gnomonicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["azimuthalInvert"])(__WEBPACK_IMPORTED_MODULE_0__math__["atan"]);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["default"])(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
});


/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_rectangle__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__(75);





function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? __WEBPACK_IMPORTED_MODULE_1__identity__["default"] : Object(__WEBPACK_IMPORTED_MODULE_2__transform__["transformer"])({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = __WEBPACK_IMPORTED_MODULE_1__identity__["default"], // scale, translate and reflect
      x0 = null, y0, x1, y1, // clip extent
      postclip = __WEBPACK_IMPORTED_MODULE_1__identity__["default"],
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    },
    postclip: function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    },
    clipExtent: function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_1__identity__["default"]) : Object(__WEBPACK_IMPORTED_MODULE_0__clip_rectangle__["default"])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["fitExtent"])(projection, extent, object);
    },
    fitSize: function(size, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["fitSize"])(projection, size, object);
    },
    fitWidth: function(width, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["fitWidth"])(projection, width, object);
    },
    fitHeight: function(height, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["fitHeight"])(projection, height, object);
    }
  };
});


/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["naturalEarth1Raw"] = naturalEarth1Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarth1Raw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["abs"])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["epsilon"] && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index__["default"])(naturalEarth1Raw)
      .scale(175.295);
});


/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["orthographicRaw"] = orthographicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(10);




function orthographicRaw(x, y) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(y) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(x), Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(y)];
}

orthographicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["azimuthalInvert"])(__WEBPACK_IMPORTED_MODULE_0__math__["asin"]);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["default"])(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + __WEBPACK_IMPORTED_MODULE_0__math__["epsilon"]);
});


/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["stereographicRaw"] = stereographicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(10);




function stereographicRaw(x, y) {
  var cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(y), k = 1 + Object(__WEBPACK_IMPORTED_MODULE_0__math__["cos"])(x) * cy;
  return [cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(x) / k, Object(__WEBPACK_IMPORTED_MODULE_0__math__["sin"])(y) / k];
}

stereographicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["azimuthalInvert"])(function(z) {
  return 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan"])(z);
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["default"])(stereographicRaw)
      .scale(250)
      .clipAngle(142);
});


/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["transverseMercatorRaw"] = transverseMercatorRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mercator__ = __webpack_require__(76);



function transverseMercatorRaw(lambda, phi) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["log"])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["tan"])((__WEBPACK_IMPORTED_MODULE_0__math__["halfPi"] + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["atan"])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["exp"])(x)) - __WEBPACK_IMPORTED_MODULE_0__math__["halfPi"]];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var m = Object(__WEBPACK_IMPORTED_MODULE_1__mercator__["mercatorProjection"])(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
});


/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_cluster__ = __webpack_require__(371);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cluster", function() { return __WEBPACK_IMPORTED_MODULE_0__src_cluster__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_hierarchy_index__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hierarchy", function() { return __WEBPACK_IMPORTED_MODULE_1__src_hierarchy_index__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_pack_index__ = __webpack_require__(383);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return __WEBPACK_IMPORTED_MODULE_2__src_pack_index__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pack_siblings__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "packSiblings", function() { return __WEBPACK_IMPORTED_MODULE_3__src_pack_siblings__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_pack_enclose__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pack_enclose__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_partition__ = __webpack_require__(385);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return __WEBPACK_IMPORTED_MODULE_5__src_partition__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_stratify__ = __webpack_require__(386);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stratify", function() { return __WEBPACK_IMPORTED_MODULE_6__src_stratify__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_tree__ = __webpack_require__(387);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tree", function() { return __WEBPACK_IMPORTED_MODULE_7__src_tree__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_treemap_index__ = __webpack_require__(388);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemap", function() { return __WEBPACK_IMPORTED_MODULE_8__src_treemap_index__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_treemap_binary__ = __webpack_require__(389);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapBinary", function() { return __WEBPACK_IMPORTED_MODULE_9__src_treemap_binary__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_treemap_dice__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapDice", function() { return __WEBPACK_IMPORTED_MODULE_10__src_treemap_dice__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_treemap_slice__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapSlice", function() { return __WEBPACK_IMPORTED_MODULE_11__src_treemap_slice__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_treemap_sliceDice__ = __webpack_require__(390);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapSliceDice", function() { return __WEBPACK_IMPORTED_MODULE_12__src_treemap_sliceDice__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_treemap_squarify__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapSquarify", function() { return __WEBPACK_IMPORTED_MODULE_13__src_treemap_squarify__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_treemap_resquarify__ = __webpack_require__(391);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapResquarify", function() { return __WEBPACK_IMPORTED_MODULE_14__src_treemap_resquarify__["default"]; });

















/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

function meanX(children) {
  return children.reduce(meanXReduce, 0) / children.length;
}

function meanXReduce(x, c) {
  return x + c.x;
}

function maxY(children) {
  return 1 + children.reduce(maxYReduce, 0);
}

function maxYReduce(y, c) {
  return Math.max(y, c.y);
}

function leafLeft(node) {
  var children;
  while (children = node.children) node = children[0];
  return node;
}

function leafRight(node) {
  var children;
  while (children = node.children) node = children[children.length - 1];
  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = false;

  function cluster(root) {
    var previousNode,
        x = 0;

    // First walk, computing the initial x & y values.
    root.eachAfter(function(node) {
      var children = node.children;
      if (children) {
        node.x = meanX(children);
        node.y = maxY(children);
      } else {
        node.x = previousNode ? x += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    var left = leafLeft(root),
        right = leafRight(root),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2;

    // Second walk, normalizing x & y to the desired size.
    return root.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root.x) * dx;
      node.y = (root.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x0) / (x1 - x0) * dx;
      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
    });
  }

  cluster.separation = function(x) {
    return arguments.length ? (separation = x, cluster) : separation;
  };

  cluster.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
  };

  cluster.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
  };

  return cluster;
});


/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.eachAfter(count);
});


/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        next.push(children[i]);
      }
    }
  } while (next.length);
  return this;
});


/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children) for (i = children.length - 1; i >= 0; --i) {
      nodes.push(children[i]);
    }
  }
  return this;
});


/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children) for (i = 0, n = children.length; i < n; ++i) {
      nodes.push(children[i]);
    }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
});


/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
});


/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
});


/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
});

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}


/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
});


/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
});


/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
});


/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
});


/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siblings__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessors__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(146);




function defaultRadius(d) {
  return Math.sqrt(d.value);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var radius = null,
      dx = 1,
      dy = 1,
      padding = __WEBPACK_IMPORTED_MODULE_2__constant__["constantZero"];

  function pack(root) {
    root.x = dx / 2, root.y = dy / 2;
    if (radius) {
      root.eachBefore(radiusLeaf(radius))
          .eachAfter(packChildren(padding, 0.5))
          .eachBefore(translateChild(1));
    } else {
      root.eachBefore(radiusLeaf(defaultRadius))
          .eachAfter(packChildren(__WEBPACK_IMPORTED_MODULE_2__constant__["constantZero"], 1))
          .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
          .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
    }
    return root;
  }

  pack.radius = function(x) {
    return arguments.length ? (radius = Object(__WEBPACK_IMPORTED_MODULE_1__accessors__["optional"])(x), pack) : radius;
  };

  pack.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
  };

  pack.padding = function(x) {
    return arguments.length ? (padding = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["default"])(+x), pack) : padding;
  };

  return pack;
});

function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}

function packChildren(padding, k) {
  return function(node) {
    if (children = node.children) {
      var children,
          i,
          n = children.length,
          r = padding(node) * k || 0,
          e;

      if (r) for (i = 0; i < n; ++i) children[i].r += r;
      e = Object(__WEBPACK_IMPORTED_MODULE_0__siblings__["packEnclose"])(children);
      if (r) for (i = 0; i < n; ++i) children[i].r -= r;
      node.r = e + r;
    }
  };
}

function translateChild(k) {
  return function(node) {
    var parent = node.parent;
    node.r *= k;
    if (parent) {
      node.x = parent.x + k * node.x;
      node.y = parent.y + k * node.y;
    }
  };
}


/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (immutable) */ __webpack_exports__["shuffle"] = shuffle;
var slice = Array.prototype.slice;

function shuffle(array) {
  var m = array.length,
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__treemap_round__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__treemap_dice__ = __webpack_require__(27);



/* harmony default export */ __webpack_exports__["default"] = (function() {
  var dx = 1,
      dy = 1,
      padding = 0,
      round = false;

  function partition(root) {
    var n = root.height + 1;
    root.x0 =
    root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round) root.eachBefore(__WEBPACK_IMPORTED_MODULE_0__treemap_round__["default"]);
    return root;
  }

  function positionNode(dy, n) {
    return function(node) {
      if (node.children) {
        Object(__WEBPACK_IMPORTED_MODULE_1__treemap_dice__["default"])(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
      }
      var x0 = node.x0,
          y0 = node.y0,
          x1 = node.x1 - padding,
          y1 = node.y1 - padding;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
    };
  }

  partition.round = function(x) {
    return arguments.length ? (round = !!x, partition) : round;
  };

  partition.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
  };

  partition.padding = function(x) {
    return arguments.length ? (padding = +x, partition) : padding;
  };

  return partition;
});


/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accessors__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hierarchy_index__ = __webpack_require__(77);



var keyPrefix = "$", // Protect against keys like “__proto__”.
    preroot = {depth: -1},
    ambiguous = {};

function defaultId(d) {
  return d.id;
}

function defaultParentId(d) {
  return d.parentId;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var id = defaultId,
      parentId = defaultParentId;

  function stratify(data) {
    var d,
        i,
        n = data.length,
        root,
        parent,
        node,
        nodes = new Array(n),
        nodeId,
        nodeKey,
        nodeByKey = {};

    for (i = 0; i < n; ++i) {
      d = data[i], node = nodes[i] = new __WEBPACK_IMPORTED_MODULE_1__hierarchy_index__["Node"](d);
      if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
        nodeKey = keyPrefix + (node.id = nodeId);
        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
      }
    }

    for (i = 0; i < n; ++i) {
      node = nodes[i], nodeId = parentId(data[i], i, data);
      if (nodeId == null || !(nodeId += "")) {
        if (root) throw new Error("multiple roots");
        root = node;
      } else {
        parent = nodeByKey[keyPrefix + nodeId];
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);
        else parent.children = [node];
        node.parent = parent;
      }
    }

    if (!root) throw new Error("no root");
    root.parent = preroot;
    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(__WEBPACK_IMPORTED_MODULE_1__hierarchy_index__["computeHeight"]);
    root.parent = null;
    if (n > 0) throw new Error("cycle");

    return root;
  }

  stratify.id = function(x) {
    return arguments.length ? (id = Object(__WEBPACK_IMPORTED_MODULE_0__accessors__["required"])(x), stratify) : id;
  };

  stratify.parentId = function(x) {
    return arguments.length ? (parentId = Object(__WEBPACK_IMPORTED_MODULE_0__accessors__["required"])(x), stratify) : parentId;
  };

  return stratify;
});


/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hierarchy_index__ = __webpack_require__(77);


function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__hierarchy_index__["Node"].prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
          right = root,
          bottom = root;
      root.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
          tx = s - left.x,
          kx = dx / (right.x + s + tx),
          ky = dy / (bottom.depth || 1);
      root.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
  };

  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
  };

  return tree;
});


/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__round__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__squarify__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accessors__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(146);





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var tile = __WEBPACK_IMPORTED_MODULE_1__squarify__["default"],
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = __WEBPACK_IMPORTED_MODULE_3__constant__["constantZero"],
      paddingTop = __WEBPACK_IMPORTED_MODULE_3__constant__["constantZero"],
      paddingRight = __WEBPACK_IMPORTED_MODULE_3__constant__["constantZero"],
      paddingBottom = __WEBPACK_IMPORTED_MODULE_3__constant__["constantZero"],
      paddingLeft = __WEBPACK_IMPORTED_MODULE_3__constant__["constantZero"];

  function treemap(root) {
    root.x0 =
    root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(__WEBPACK_IMPORTED_MODULE_0__round__["default"]);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function(x) {
    return arguments.length ? (tile = Object(__WEBPACK_IMPORTED_MODULE_2__accessors__["required"])(x), treemap) : tile;
  };

  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["default"])(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["default"])(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["default"])(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["default"])(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["default"])(+x), treemap) : paddingLeft;
  };

  return treemap;
});


/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      i, n = nodes.length,
      sum, sums = new Array(n + 1);

  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }

  partition(0, n, parent.value, x0, y0, x1, y1);

  function partition(i, j, value, x0, y0, x1, y1) {
    if (i >= j - 1) {
      var node = nodes[i];
      node.x0 = x0, node.y0 = y0;
      node.x1 = x1, node.y1 = y1;
      return;
    }

    var valueOffset = sums[i],
        valueTarget = (value / 2) + valueOffset,
        k = i + 1,
        hi = j - 1;

    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;
      else hi = mid;
    }

    if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;

    var valueLeft = sums[k] - valueOffset,
        valueRight = value - valueLeft;

    if ((x1 - x0) > (y1 - y0)) {
      var xk = (x0 * valueRight + x1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, xk, y1);
      partition(k, j, valueRight, xk, y0, x1, y1);
    } else {
      var yk = (y0 * valueRight + y1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, x1, yk);
      partition(k, j, valueRight, x0, yk, x1, y1);
    }
  }
});


/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dice__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(43);



/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? __WEBPACK_IMPORTED_MODULE_1__slice__["default"] : __WEBPACK_IMPORTED_MODULE_0__dice__["default"])(parent, x0, y0, x1, y1);
});


/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dice__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__squarify__ = __webpack_require__(79);




/* harmony default export */ __webpack_exports__["default"] = ((function custom(ratio) {

  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && (rows.ratio === ratio)) {
      var rows,
          row,
          nodes,
          i,
          j = -1,
          n,
          m = rows.length,
          value = parent.value;

      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
        if (row.dice) Object(__WEBPACK_IMPORTED_MODULE_0__dice__["default"])(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
        else Object(__WEBPACK_IMPORTED_MODULE_1__slice__["default"])(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = Object(__WEBPACK_IMPORTED_MODULE_2__squarify__["squarifyRatio"])(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }

  resquarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return resquarify;
})(__WEBPACK_IMPORTED_MODULE_2__squarify__["phi"]));


/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_area__ = __webpack_require__(393);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "polygonArea", function() { return __WEBPACK_IMPORTED_MODULE_0__src_area__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_centroid__ = __webpack_require__(394);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "polygonCentroid", function() { return __WEBPACK_IMPORTED_MODULE_1__src_centroid__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_hull__ = __webpack_require__(395);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "polygonHull", function() { return __WEBPACK_IMPORTED_MODULE_2__src_hull__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_contains__ = __webpack_require__(397);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "polygonContains", function() { return __WEBPACK_IMPORTED_MODULE_3__src_contains__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_length__ = __webpack_require__(398);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "polygonLength", function() { return __WEBPACK_IMPORTED_MODULE_4__src_length__["default"]; });







/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(polygon) {
  var i = -1,
      n = polygon.length,
      a,
      b = polygon[n - 1],
      area = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    area += a[1] * b[0] - a[0] * b[1];
  }

  return area / 2;
});


/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(polygon) {
  var i = -1,
      n = polygon.length,
      x = 0,
      y = 0,
      a,
      b = polygon[n - 1],
      c,
      k = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    k += c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }

  return k *= 3, [x / k, y / k];
});


/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cross__ = __webpack_require__(396);


function lexicographicOrder(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}

// Computes the upper convex hull per the monotone chain algorithm.
// Assumes points.length >= 3, is sorted by x, unique in y.
// Returns an array of indices into points in left-to-right order.
function computeUpperHullIndexes(points) {
  var n = points.length,
      indexes = [0, 1],
      size = 2;

  for (var i = 2; i < n; ++i) {
    while (size > 1 && Object(__WEBPACK_IMPORTED_MODULE_0__cross__["default"])(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
    indexes[size++] = i;
  }

  return indexes.slice(0, size); // remove popped points
}

/* harmony default export */ __webpack_exports__["default"] = (function(points) {
  if ((n = points.length) < 3) return null;

  var i,
      n,
      sortedPoints = new Array(n),
      flippedPoints = new Array(n);

  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
  sortedPoints.sort(lexicographicOrder);
  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];

  var upperIndexes = computeUpperHullIndexes(sortedPoints),
      lowerIndexes = computeUpperHullIndexes(flippedPoints);

  // Construct the hull polygon, removing possible duplicate endpoints.
  var skipLeft = lowerIndexes[0] === upperIndexes[0],
      skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
      hull = [];

  // Add upper hull in right-to-l order.
  // Then add lower hull in left-to-right order.
  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);

  return hull;
});


/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
// right, +y is up). Returns a positive value if ABC is counter-clockwise,
// negative if clockwise, and zero if the points are collinear.
/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
});


/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(polygon, point) {
  var n = polygon.length,
      p = polygon[n - 1],
      x = point[0], y = point[1],
      x0 = p[0], y0 = p[1],
      x1, y1,
      inside = false;

  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1];
    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
    x0 = x1, y0 = y1;
  }

  return inside;
});


/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(polygon) {
  var i = -1,
      n = polygon.length,
      b = polygon[n - 1],
      xa,
      ya,
      xb = b[0],
      yb = b[1],
      perimeter = 0;

  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.sqrt(xa * xa + ya * ya);
  }

  return perimeter;
});


/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_uniform__ = __webpack_require__(400);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomUniform", function() { return __WEBPACK_IMPORTED_MODULE_0__src_uniform__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_normal__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomNormal", function() { return __WEBPACK_IMPORTED_MODULE_1__src_normal__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_logNormal__ = __webpack_require__(401);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomLogNormal", function() { return __WEBPACK_IMPORTED_MODULE_2__src_logNormal__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_bates__ = __webpack_require__(402);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomBates", function() { return __WEBPACK_IMPORTED_MODULE_3__src_bates__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_irwinHall__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomIrwinHall", function() { return __WEBPACK_IMPORTED_MODULE_4__src_irwinHall__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exponential__ = __webpack_require__(403);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "randomExponential", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exponential__["default"]; });








/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__(22);


/* harmony default export */ __webpack_exports__["default"] = ((function sourceRandomUniform(source) {
  function randomUniform(min, max) {
    min = min == null ? 0 : +min;
    max = max == null ? 1 : +max;
    if (arguments.length === 1) max = min, min = 0;
    else max -= min;
    return function() {
      return source() * max + min;
    };
  }

  randomUniform.source = sourceRandomUniform;

  return randomUniform;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["default"]));


/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__normal__ = __webpack_require__(148);



/* harmony default export */ __webpack_exports__["default"] = ((function sourceRandomLogNormal(source) {
  function randomLogNormal() {
    var randomNormal = __WEBPACK_IMPORTED_MODULE_1__normal__["default"].source(source).apply(this, arguments);
    return function() {
      return Math.exp(randomNormal());
    };
  }

  randomLogNormal.source = sourceRandomLogNormal;

  return randomLogNormal;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["default"]));


/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__irwinHall__ = __webpack_require__(149);



/* harmony default export */ __webpack_exports__["default"] = ((function sourceRandomBates(source) {
  function randomBates(n) {
    var randomIrwinHall = __WEBPACK_IMPORTED_MODULE_1__irwinHall__["default"].source(source)(n);
    return function() {
      return randomIrwinHall() / n;
    };
  }

  randomBates.source = sourceRandomBates;

  return randomBates;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["default"]));


/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultSource__ = __webpack_require__(22);


/* harmony default export */ __webpack_exports__["default"] = ((function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function() {
      return -Math.log(1 - source()) / lambda;
    };
  }

  randomExponential.source = sourceRandomExponential;

  return randomExponential;
})(__WEBPACK_IMPORTED_MODULE_0__defaultSource__["default"]));


/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_band__ = __webpack_require__(405);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["point"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_identity__ = __webpack_require__(406);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return __WEBPACK_IMPORTED_MODULE_1__src_identity__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_linear__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return __WEBPACK_IMPORTED_MODULE_2__src_linear__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_log__ = __webpack_require__(408);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return __WEBPACK_IMPORTED_MODULE_3__src_log__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ordinal__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["implicit"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pow__ = __webpack_require__(409);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["sqrt"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_quantile__ = __webpack_require__(410);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return __WEBPACK_IMPORTED_MODULE_6__src_quantile__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_quantize__ = __webpack_require__(411);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return __WEBPACK_IMPORTED_MODULE_7__src_quantize__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold__ = __webpack_require__(412);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_time__ = __webpack_require__(153);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return __WEBPACK_IMPORTED_MODULE_9__src_time__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcTime__ = __webpack_require__(428);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcTime__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_sequential__ = __webpack_require__(429);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return __WEBPACK_IMPORTED_MODULE_11__src_sequential__["default"]; });

























/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = band;
/* harmony export (immutable) */ __webpack_exports__["point"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordinal__ = __webpack_require__(150);



function band() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_1__ordinal__["default"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = identity;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(151);




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_0__array__["map"].call(_, __WEBPACK_IMPORTED_MODULE_2__number__["default"]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["linearish"])(scale);
}


/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(70);



/* harmony default export */ __webpack_exports__["default"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["format"])(specifier);
});


/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = log;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nice__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__continuous__ = __webpack_require__(44);






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["default"])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["default"])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(__WEBPACK_IMPORTED_MODULE_3__nice__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["copy"])(scale, log().base(base));
  };

  return scale;
}


/***/ }),
/* 409 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = pow;
/* harmony export (immutable) */ __webpack_exports__["sqrt"] = sqrt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(44);




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["default"])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["copy"])(scale, pow().exponent(exponent));
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["linearish"])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),
/* 410 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = quantile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(16);



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["slice"].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = quantize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear__ = __webpack_require__(28);




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = __WEBPACK_IMPORTED_MODULE_1__array__["slice"].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_2__linear__["linearish"])(scale);
}


/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = threshold;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(16);



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_1__array__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);


var millisecond = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(11);



var second = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["durationSecond"]) * __WEBPACK_IMPORTED_MODULE_1__duration__["durationSecond"]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["durationSecond"]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["durationSecond"];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["default"] = (second);
var seconds = second.range;


/***/ }),
/* 415 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(11);



var minute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["durationMinute"]) * __WEBPACK_IMPORTED_MODULE_1__duration__["durationMinute"]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["durationMinute"]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["durationMinute"];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (minute);
var minutes = minute.range;


/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(11);



var hour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
  var offset = date.getTimezoneOffset() * __WEBPACK_IMPORTED_MODULE_1__duration__["durationMinute"] % __WEBPACK_IMPORTED_MODULE_1__duration__["durationHour"];
  if (offset < 0) offset += __WEBPACK_IMPORTED_MODULE_1__duration__["durationHour"];
  date.setTime(Math.floor((+date - offset) / __WEBPACK_IMPORTED_MODULE_1__duration__["durationHour"]) * __WEBPACK_IMPORTED_MODULE_1__duration__["durationHour"] + offset);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["durationHour"]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["durationHour"];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["default"] = (hour);
var hours = hour.range;


/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(11);



var day = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["durationMinute"]) / __WEBPACK_IMPORTED_MODULE_1__duration__["durationDay"];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (day);
var days = day.range;


/***/ }),
/* 418 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunday", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monday", function() { return monday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesday", function() { return tuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesday", function() { return wednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursday", function() { return thursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friday", function() { return friday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturday", function() { return saturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sundays", function() { return sundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mondays", function() { return mondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesdays", function() { return tuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesdays", function() { return wednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursdays", function() { return thursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fridays", function() { return fridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturdays", function() { return saturdays; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(11);



function weekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["durationMinute"]) / __WEBPACK_IMPORTED_MODULE_1__duration__["durationWeek"];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),
/* 419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);


var month = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (month);
var months = month.range;


/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);


var year = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (year);
var years = year.range;


/***/ }),
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return utcMinutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(11);



var utcMinute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["durationMinute"]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["durationMinute"];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),
/* 422 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return utcHours; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(11);



var utcHour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["durationHour"]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["durationHour"];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["default"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),
/* 423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return utcDays; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(11);



var utcDay = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["durationDay"];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return utcMonday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return utcTuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return utcWednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return utcThursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return utcFriday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return utcSaturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return utcSundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return utcMondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return utcTuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return utcWednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return utcThursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return utcFridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return utcSaturdays; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(11);



function utcWeekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["durationWeek"];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return utcMonths; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);


var utcMonth = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return utcYears; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(5);


var utcYear = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["default"])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isoFormat__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultLocale__ = __webpack_require__(82);



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_1__defaultLocale__["utcParse"])(__WEBPACK_IMPORTED_MODULE_0__isoFormat__["isoSpecifier"]);

/* harmony default export */ __webpack_exports__["default"] = (parseIso);


/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(45);




/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__time__["calendar"])(__WEBPACK_IMPORTED_MODULE_2_d3_time__["utcYear"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["utcMonth"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["utcWeek"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["utcDay"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["utcHour"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["utcMinute"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["utcSecond"], __WEBPACK_IMPORTED_MODULE_2_d3_time__["utcMillisecond"], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = sequential;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(28);


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["linearish"])(scale);
}


/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_categorical_category10__ = __webpack_require__(431);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return __WEBPACK_IMPORTED_MODULE_0__src_categorical_category10__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_categorical_Accent__ = __webpack_require__(432);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeAccent", function() { return __WEBPACK_IMPORTED_MODULE_1__src_categorical_Accent__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_categorical_Dark2__ = __webpack_require__(433);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeDark2", function() { return __WEBPACK_IMPORTED_MODULE_2__src_categorical_Dark2__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_categorical_Paired__ = __webpack_require__(434);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePaired", function() { return __WEBPACK_IMPORTED_MODULE_3__src_categorical_Paired__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_categorical_Pastel1__ = __webpack_require__(435);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePastel1", function() { return __WEBPACK_IMPORTED_MODULE_4__src_categorical_Pastel1__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_categorical_Pastel2__ = __webpack_require__(436);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePastel2", function() { return __WEBPACK_IMPORTED_MODULE_5__src_categorical_Pastel2__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_categorical_Set1__ = __webpack_require__(437);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet1", function() { return __WEBPACK_IMPORTED_MODULE_6__src_categorical_Set1__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_categorical_Set2__ = __webpack_require__(438);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet2", function() { return __WEBPACK_IMPORTED_MODULE_7__src_categorical_Set2__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_categorical_Set3__ = __webpack_require__(439);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet3", function() { return __WEBPACK_IMPORTED_MODULE_8__src_categorical_Set3__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_diverging_BrBG__ = __webpack_require__(440);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBrBG", function() { return __WEBPACK_IMPORTED_MODULE_9__src_diverging_BrBG__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBrBG", function() { return __WEBPACK_IMPORTED_MODULE_9__src_diverging_BrBG__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_diverging_PRGn__ = __webpack_require__(441);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePRGn", function() { return __WEBPACK_IMPORTED_MODULE_10__src_diverging_PRGn__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePRGn", function() { return __WEBPACK_IMPORTED_MODULE_10__src_diverging_PRGn__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_diverging_PiYG__ = __webpack_require__(442);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePiYG", function() { return __WEBPACK_IMPORTED_MODULE_11__src_diverging_PiYG__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePiYG", function() { return __WEBPACK_IMPORTED_MODULE_11__src_diverging_PiYG__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_diverging_PuOr__ = __webpack_require__(443);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuOr", function() { return __WEBPACK_IMPORTED_MODULE_12__src_diverging_PuOr__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuOr", function() { return __WEBPACK_IMPORTED_MODULE_12__src_diverging_PuOr__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_diverging_RdBu__ = __webpack_require__(444);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdBu", function() { return __WEBPACK_IMPORTED_MODULE_13__src_diverging_RdBu__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdBu", function() { return __WEBPACK_IMPORTED_MODULE_13__src_diverging_RdBu__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_diverging_RdGy__ = __webpack_require__(445);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdGy", function() { return __WEBPACK_IMPORTED_MODULE_14__src_diverging_RdGy__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdGy", function() { return __WEBPACK_IMPORTED_MODULE_14__src_diverging_RdGy__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_diverging_RdYlBu__ = __webpack_require__(446);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdYlBu", function() { return __WEBPACK_IMPORTED_MODULE_15__src_diverging_RdYlBu__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdYlBu", function() { return __WEBPACK_IMPORTED_MODULE_15__src_diverging_RdYlBu__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_diverging_RdYlGn__ = __webpack_require__(447);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdYlGn", function() { return __WEBPACK_IMPORTED_MODULE_16__src_diverging_RdYlGn__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdYlGn", function() { return __WEBPACK_IMPORTED_MODULE_16__src_diverging_RdYlGn__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_diverging_Spectral__ = __webpack_require__(448);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateSpectral", function() { return __WEBPACK_IMPORTED_MODULE_17__src_diverging_Spectral__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSpectral", function() { return __WEBPACK_IMPORTED_MODULE_17__src_diverging_Spectral__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_sequential_multi_BuGn__ = __webpack_require__(449);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBuGn", function() { return __WEBPACK_IMPORTED_MODULE_18__src_sequential_multi_BuGn__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBuGn", function() { return __WEBPACK_IMPORTED_MODULE_18__src_sequential_multi_BuGn__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_sequential_multi_BuPu__ = __webpack_require__(450);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBuPu", function() { return __WEBPACK_IMPORTED_MODULE_19__src_sequential_multi_BuPu__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBuPu", function() { return __WEBPACK_IMPORTED_MODULE_19__src_sequential_multi_BuPu__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_sequential_multi_GnBu__ = __webpack_require__(451);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGnBu", function() { return __WEBPACK_IMPORTED_MODULE_20__src_sequential_multi_GnBu__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGnBu", function() { return __WEBPACK_IMPORTED_MODULE_20__src_sequential_multi_GnBu__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_sequential_multi_OrRd__ = __webpack_require__(452);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateOrRd", function() { return __WEBPACK_IMPORTED_MODULE_21__src_sequential_multi_OrRd__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeOrRd", function() { return __WEBPACK_IMPORTED_MODULE_21__src_sequential_multi_OrRd__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sequential_multi_PuBuGn__ = __webpack_require__(453);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuBuGn", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sequential_multi_PuBuGn__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuBuGn", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sequential_multi_PuBuGn__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_sequential_multi_PuBu__ = __webpack_require__(454);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuBu", function() { return __WEBPACK_IMPORTED_MODULE_23__src_sequential_multi_PuBu__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuBu", function() { return __WEBPACK_IMPORTED_MODULE_23__src_sequential_multi_PuBu__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_sequential_multi_PuRd__ = __webpack_require__(455);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuRd", function() { return __WEBPACK_IMPORTED_MODULE_24__src_sequential_multi_PuRd__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuRd", function() { return __WEBPACK_IMPORTED_MODULE_24__src_sequential_multi_PuRd__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_sequential_multi_RdPu__ = __webpack_require__(456);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdPu", function() { return __WEBPACK_IMPORTED_MODULE_25__src_sequential_multi_RdPu__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdPu", function() { return __WEBPACK_IMPORTED_MODULE_25__src_sequential_multi_RdPu__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_sequential_multi_YlGnBu__ = __webpack_require__(457);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlGnBu", function() { return __WEBPACK_IMPORTED_MODULE_26__src_sequential_multi_YlGnBu__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlGnBu", function() { return __WEBPACK_IMPORTED_MODULE_26__src_sequential_multi_YlGnBu__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_sequential_multi_YlGn__ = __webpack_require__(458);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlGn", function() { return __WEBPACK_IMPORTED_MODULE_27__src_sequential_multi_YlGn__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlGn", function() { return __WEBPACK_IMPORTED_MODULE_27__src_sequential_multi_YlGn__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_sequential_multi_YlOrBr__ = __webpack_require__(459);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlOrBr", function() { return __WEBPACK_IMPORTED_MODULE_28__src_sequential_multi_YlOrBr__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlOrBr", function() { return __WEBPACK_IMPORTED_MODULE_28__src_sequential_multi_YlOrBr__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_sequential_multi_YlOrRd__ = __webpack_require__(460);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlOrRd", function() { return __WEBPACK_IMPORTED_MODULE_29__src_sequential_multi_YlOrRd__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlOrRd", function() { return __WEBPACK_IMPORTED_MODULE_29__src_sequential_multi_YlOrRd__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_sequential_single_Blues__ = __webpack_require__(461);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBlues", function() { return __WEBPACK_IMPORTED_MODULE_30__src_sequential_single_Blues__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBlues", function() { return __WEBPACK_IMPORTED_MODULE_30__src_sequential_single_Blues__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_sequential_single_Greens__ = __webpack_require__(462);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGreens", function() { return __WEBPACK_IMPORTED_MODULE_31__src_sequential_single_Greens__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGreens", function() { return __WEBPACK_IMPORTED_MODULE_31__src_sequential_single_Greens__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_sequential_single_Greys__ = __webpack_require__(463);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGreys", function() { return __WEBPACK_IMPORTED_MODULE_32__src_sequential_single_Greys__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGreys", function() { return __WEBPACK_IMPORTED_MODULE_32__src_sequential_single_Greys__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_sequential_single_Purples__ = __webpack_require__(464);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePurples", function() { return __WEBPACK_IMPORTED_MODULE_33__src_sequential_single_Purples__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePurples", function() { return __WEBPACK_IMPORTED_MODULE_33__src_sequential_single_Purples__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_sequential_single_Reds__ = __webpack_require__(465);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateReds", function() { return __WEBPACK_IMPORTED_MODULE_34__src_sequential_single_Reds__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeReds", function() { return __WEBPACK_IMPORTED_MODULE_34__src_sequential_single_Reds__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_sequential_single_Oranges__ = __webpack_require__(466);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateOranges", function() { return __WEBPACK_IMPORTED_MODULE_35__src_sequential_single_Oranges__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeOranges", function() { return __WEBPACK_IMPORTED_MODULE_35__src_sequential_single_Oranges__["scheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_sequential_multi_cubehelix__ = __webpack_require__(467);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return __WEBPACK_IMPORTED_MODULE_36__src_sequential_multi_cubehelix__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__ = __webpack_require__(468);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__["warm"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return __WEBPACK_IMPORTED_MODULE_37__src_sequential_multi_rainbow__["cool"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_sequential_multi_sinebow__ = __webpack_require__(469);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateSinebow", function() { return __WEBPACK_IMPORTED_MODULE_38__src_sequential_multi_sinebow__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__ = __webpack_require__(470);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["magma"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["inferno"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return __WEBPACK_IMPORTED_MODULE_39__src_sequential_multi_viridis__["plasma"]; });










































/***/ }),
/* 431 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));


/***/ }),
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"));


/***/ }),
/* 433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"));


/***/ }),
/* 434 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"));


/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"));


/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"));


/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"));


/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"));


/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"));


/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 459 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 461 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 465 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheme", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(2);



var scheme = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["default"])(scheme));


/***/ }),
/* 467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateCubehelixLong"])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["cubehelix"])(300, 0.5, 0.0), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["cubehelix"])(-240, 0.5, 1.0)));


/***/ }),
/* 468 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warm", function() { return warm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cool", function() { return cool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(6);



var warm = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateCubehelixLong"])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["cubehelix"])(-100, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["cubehelix"])(80, 1.50, 0.8));

var cool = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateCubehelixLong"])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["cubehelix"])(260, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["cubehelix"])(80, 1.50, 0.8));

var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["cubehelix"])();

/* harmony default export */ __webpack_exports__["default"] = (function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c.h = 360 * t - 100;
  c.s = 1.5 - 1.5 * ts;
  c.l = 0.8 - 0.9 * ts;
  return c + "";
});


/***/ }),
/* 469 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(8);


var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["rgb"])(),
    pi_1_3 = Math.PI / 3,
    pi_2_3 = Math.PI * 2 / 3;

/* harmony default export */ __webpack_exports__["default"] = (function(t) {
  var x;
  t = (0.5 - t) * Math.PI;
  c.r = 255 * (x = Math.sin(t)) * x;
  c.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
  c.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
  return c + "";
});


/***/ }),
/* 470 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magma", function() { return magma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inferno", function() { return inferno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plasma", function() { return plasma; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(1);


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["default"])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


/***/ }),
/* 471 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_arc__ = __webpack_require__(472);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return __WEBPACK_IMPORTED_MODULE_0__src_arc__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_area__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "area", function() { return __WEBPACK_IMPORTED_MODULE_1__src_area__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_line__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return __WEBPACK_IMPORTED_MODULE_2__src_line__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pie__ = __webpack_require__(473);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return __WEBPACK_IMPORTED_MODULE_3__src_pie__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__ = __webpack_require__(476);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_pointRadial__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return __WEBPACK_IMPORTED_MODULE_6__src_pointRadial__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_link_index__ = __webpack_require__(477);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["linkHorizontal"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["linkVertical"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["linkRadial"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_symbol__ = __webpack_require__(478);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return __WEBPACK_IMPORTED_MODULE_8__src_symbol__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return __WEBPACK_IMPORTED_MODULE_8__src_symbol__["symbols"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_symbol_circle__ = __webpack_require__(161);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return __WEBPACK_IMPORTED_MODULE_9__src_symbol_circle__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_symbol_cross__ = __webpack_require__(162);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return __WEBPACK_IMPORTED_MODULE_10__src_symbol_cross__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_symbol_diamond__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return __WEBPACK_IMPORTED_MODULE_11__src_symbol_diamond__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_symbol_square__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return __WEBPACK_IMPORTED_MODULE_12__src_symbol_square__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_symbol_star__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return __WEBPACK_IMPORTED_MODULE_13__src_symbol_star__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_symbol_triangle__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return __WEBPACK_IMPORTED_MODULE_14__src_symbol_triangle__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_symbol_wye__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return __WEBPACK_IMPORTED_MODULE_15__src_symbol_wye__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_curve_basisClosed__ = __webpack_require__(479);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_16__src_curve_basisClosed__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_curve_basisOpen__ = __webpack_require__(480);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return __WEBPACK_IMPORTED_MODULE_17__src_curve_basisOpen__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_curve_basis__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return __WEBPACK_IMPORTED_MODULE_18__src_curve_basis__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_curve_bundle__ = __webpack_require__(481);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return __WEBPACK_IMPORTED_MODULE_19__src_curve_bundle__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinalClosed__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinalClosed__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_curve_cardinalOpen__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return __WEBPACK_IMPORTED_MODULE_21__src_curve_cardinalOpen__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_curve_cardinal__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return __WEBPACK_IMPORTED_MODULE_22__src_curve_cardinal__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRomClosed__ = __webpack_require__(482);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRomClosed__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_curve_catmullRomOpen__ = __webpack_require__(483);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return __WEBPACK_IMPORTED_MODULE_24__src_curve_catmullRomOpen__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_curve_catmullRom__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return __WEBPACK_IMPORTED_MODULE_25__src_curve_catmullRom__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_curve_linearClosed__ = __webpack_require__(484);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return __WEBPACK_IMPORTED_MODULE_26__src_curve_linearClosed__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_curve_linear__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return __WEBPACK_IMPORTED_MODULE_27__src_curve_linear__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__ = __webpack_require__(485);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__["monotoneX"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__["monotoneY"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_curve_natural__ = __webpack_require__(486);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return __WEBPACK_IMPORTED_MODULE_29__src_curve_natural__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_curve_step__ = __webpack_require__(487);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["stepAfter"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["stepBefore"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_stack__ = __webpack_require__(488);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return __WEBPACK_IMPORTED_MODULE_31__src_stack__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_offset_expand__ = __webpack_require__(489);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return __WEBPACK_IMPORTED_MODULE_32__src_offset_expand__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_offset_diverging__ = __webpack_require__(490);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return __WEBPACK_IMPORTED_MODULE_33__src_offset_diverging__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_offset_none__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return __WEBPACK_IMPORTED_MODULE_34__src_offset_none__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_offset_silhouette__ = __webpack_require__(491);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return __WEBPACK_IMPORTED_MODULE_35__src_offset_silhouette__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_offset_wiggle__ = __webpack_require__(492);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return __WEBPACK_IMPORTED_MODULE_36__src_offset_wiggle__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_order_ascending__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return __WEBPACK_IMPORTED_MODULE_37__src_order_ascending__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_order_descending__ = __webpack_require__(493);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return __WEBPACK_IMPORTED_MODULE_38__src_order_descending__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_order_insideOut__ = __webpack_require__(494);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return __WEBPACK_IMPORTED_MODULE_39__src_order_insideOut__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_order_none__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return __WEBPACK_IMPORTED_MODULE_40__src_order_none__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__src_order_reverse__ = __webpack_require__(495);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return __WEBPACK_IMPORTED_MODULE_41__src_order_reverse__["default"]; });




 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!









































/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(29);




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(__WEBPACK_IMPORTED_MODULE_2__math__["sqrt"])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sqrt"])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["max"])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["halfPi"],
        a1 = endAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["halfPi"],
        da = Object(__WEBPACK_IMPORTED_MODULE_2__math__["abs"])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["path"])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > __WEBPACK_IMPORTED_MODULE_2__math__["tau"] - __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) {
      context.moveTo(r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(a0), r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) {
        context.moveTo(r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(a1), r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) && (padRadius ? +padRadius.apply(this, arguments) : Object(__WEBPACK_IMPORTED_MODULE_2__math__["sqrt"])(r0 * r0 + r1 * r1)),
          rc = Object(__WEBPACK_IMPORTED_MODULE_2__math__["min"])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) {
        var p0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["asin"])(rp / r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(ap)),
            p1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["asin"])(rp / r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(ap));
        if ((da0 -= p0 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(a01),
          y01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(a01),
          x10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(a10),
          y10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(a10);

      // Apply rounded corners?
      if (rc > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) {
        var x11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(a11),
            y11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(a11),
            x00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(a00),
            y00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < __WEBPACK_IMPORTED_MODULE_2__math__["pi"]) {
          var oc = da0 > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["acos"])((ax * bx + ay * by) / (Object(__WEBPACK_IMPORTED_MODULE_2__math__["sqrt"])(ax * ax + ay * ay) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["sqrt"])(bx * bx + by * by))) / 2),
              lc = Object(__WEBPACK_IMPORTED_MODULE_2__math__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["min"])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["min"])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) || !(da0 > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > __WEBPACK_IMPORTED_MODULE_2__math__["epsilon"]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - __WEBPACK_IMPORTED_MODULE_2__math__["pi"] / 2;
    return [Object(__WEBPACK_IMPORTED_MODULE_2__math__["cos"])(a) * r, Object(__WEBPACK_IMPORTED_MODULE_2__math__["sin"])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),
/* 473 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__descending__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(29);





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_2__identity__["default"],
      sortValues = __WEBPACK_IMPORTED_MODULE_1__descending__["default"],
      sort = null,
      startAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(0),
      endAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(__WEBPACK_IMPORTED_MODULE_3__math__["tau"]),
      padAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(__WEBPACK_IMPORTED_MODULE_3__math__["tau"], Math.max(-__WEBPACK_IMPORTED_MODULE_3__math__["tau"], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),
/* 474 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  return d;
});


/***/ }),
/* 476 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lineRadial__ = __webpack_require__(158);




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var a = Object(__WEBPACK_IMPORTED_MODULE_1__area__["default"])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["curveRadialLinear"]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["lineRadial"])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["lineRadial"])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["lineRadial"])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["lineRadial"])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["default"])(_)) : c()._curve;
  };

  return a;
});


/***/ }),
/* 477 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["linkHorizontal"] = linkHorizontal;
/* harmony export (immutable) */ __webpack_exports__["linkVertical"] = linkVertical;
/* harmony export (immutable) */ __webpack_exports__["linkRadial"] = linkRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pointRadial__ = __webpack_require__(159);






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = __WEBPACK_IMPORTED_MODULE_3__point__["x"],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["y"],
      context = null;

  function link() {
    var buffer, argv = __WEBPACK_IMPORTED_MODULE_1__array__["slice"].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["path"])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["default"])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["default"])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["default"])(x0, y0),
      p1 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["default"])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["default"])(x1, y0),
      p3 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["default"])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbol_circle__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__symbol_cross__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__symbol_star__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symbol_square__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__symbol_wye__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constant__ = __webpack_require__(17);










var symbols = [
  __WEBPACK_IMPORTED_MODULE_1__symbol_circle__["default"],
  __WEBPACK_IMPORTED_MODULE_2__symbol_cross__["default"],
  __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__["default"],
  __WEBPACK_IMPORTED_MODULE_5__symbol_square__["default"],
  __WEBPACK_IMPORTED_MODULE_4__symbol_star__["default"],
  __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__["default"],
  __WEBPACK_IMPORTED_MODULE_7__symbol_wye__["default"]
];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var type = Object(__WEBPACK_IMPORTED_MODULE_8__constant__["default"])(__WEBPACK_IMPORTED_MODULE_1__symbol_circle__["default"]),
      size = Object(__WEBPACK_IMPORTED_MODULE_8__constant__["default"])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["path"])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant__["default"])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant__["default"])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),
/* 479 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(48);



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["default"],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(__WEBPACK_IMPORTED_MODULE_1__basis__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),
/* 480 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(48);


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_0__basis__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),
/* 481 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(48);


function Bundle(context, beta) {
  this._basis = new __WEBPACK_IMPORTED_MODULE_0__basis__["Basis"](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new __WEBPACK_IMPORTED_MODULE_0__basis__["Basis"](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),
/* 482 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catmullRom__ = __webpack_require__(85);




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_1__noop__["default"],
  areaEnd: __WEBPACK_IMPORTED_MODULE_1__noop__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(__WEBPACK_IMPORTED_MODULE_2__catmullRom__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__["CardinalClosed"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 483 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catmullRom__ = __webpack_require__(85);



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_1__catmullRom__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__["CardinalOpen"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(47);


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["default"],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["default"],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),
/* 485 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["monotoneX"] = monotoneX;
/* harmony export (immutable) */ __webpack_exports__["monotoneY"] = monotoneY;
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),
/* 486 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Natural(context);
});


/***/ }),
/* 487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["stepBefore"] = stepBefore;
/* harmony export (immutable) */ __webpack_exports__["stepAfter"] = stepAfter;
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),
/* 488 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offset_none__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_none__ = __webpack_require__(31);





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])([]),
      order = __WEBPACK_IMPORTED_MODULE_3__order_none__["default"],
      offset = __WEBPACK_IMPORTED_MODULE_2__offset_none__["default"],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(__WEBPACK_IMPORTED_MODULE_0__array__["slice"].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? __WEBPACK_IMPORTED_MODULE_3__order_none__["default"] : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["default"])(__WEBPACK_IMPORTED_MODULE_0__array__["slice"].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? __WEBPACK_IMPORTED_MODULE_2__offset_none__["default"] : _, stack) : offset;
  };

  return stack;
});


/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(30);


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["default"])(series, order);
});


/***/ }),
/* 490 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
});


/***/ }),
/* 491 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(30);


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["default"])(series, order);
});


/***/ }),
/* 492 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(30);


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["default"])(series, order);
});


/***/ }),
/* 493 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(86);


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["default"])(series).reverse();
});


/***/ }),
/* 494 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(86);



/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(__WEBPACK_IMPORTED_MODULE_1__ascending__["sum"]),
      order = Object(__WEBPACK_IMPORTED_MODULE_0__none__["default"])(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),
/* 495 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(31);


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__none__["default"])(series).reverse();
});


/***/ }),
/* 496 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_voronoi__ = __webpack_require__(497);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "voronoi", function() { return __WEBPACK_IMPORTED_MODULE_0__src_voronoi__["default"]; });



/***/ }),
/* 497 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Diagram__ = __webpack_require__(32);




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = __WEBPACK_IMPORTED_MODULE_1__point__["x"],
      y = __WEBPACK_IMPORTED_MODULE_1__point__["y"],
      extent = null;

  function voronoi(data) {
    return new __WEBPACK_IMPORTED_MODULE_2__Diagram__["default"](data.map(function(d, i) {
      var s = [Math.round(x(d, i, data) / __WEBPACK_IMPORTED_MODULE_2__Diagram__["epsilon"]) * __WEBPACK_IMPORTED_MODULE_2__Diagram__["epsilon"], Math.round(y(d, i, data) / __WEBPACK_IMPORTED_MODULE_2__Diagram__["epsilon"]) * __WEBPACK_IMPORTED_MODULE_2__Diagram__["epsilon"]];
      s.index = i;
      s.data = d;
      return s;
    }), extent);
  }

  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };

  voronoi.links = function(data) {
    return voronoi(data).links();
  };

  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };

  voronoi.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), voronoi) : x;
  };

  voronoi.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["default"])(+_), voronoi) : y;
  };

  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };

  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };

  return voronoi;
});


/***/ }),
/* 498 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 499 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["x"] = x;
/* harmony export (immutable) */ __webpack_exports__["y"] = y;
function x(d) {
  return d[0];
}

function y(d) {
  return d[1];
}


/***/ }),
/* 500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["removeBeach"] = removeBeach;
/* harmony export (immutable) */ __webpack_exports__["addBeach"] = addBeach;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RedBlackTree__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Cell__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Circle__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Edge__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Diagram__ = __webpack_require__(32);






var beachPool = [];

function Beach() {
  Object(__WEBPACK_IMPORTED_MODULE_0__RedBlackTree__["RedBlackNode"])(this);
  this.edge =
  this.site =
  this.circle = null;
}

function createBeach(site) {
  var beach = beachPool.pop() || new Beach;
  beach.site = site;
  return beach;
}

function detachBeach(beach) {
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["detachCircle"])(beach);
  __WEBPACK_IMPORTED_MODULE_4__Diagram__["beaches"].remove(beach);
  beachPool.push(beach);
  Object(__WEBPACK_IMPORTED_MODULE_0__RedBlackTree__["RedBlackNode"])(beach);
}

function removeBeach(beach) {
  var circle = beach.circle,
      x = circle.x,
      y = circle.cy,
      vertex = [x, y],
      previous = beach.P,
      next = beach.N,
      disappearing = [beach];

  detachBeach(beach);

  var lArc = previous;
  while (lArc.circle
      && Math.abs(x - lArc.circle.x) < __WEBPACK_IMPORTED_MODULE_4__Diagram__["epsilon"]
      && Math.abs(y - lArc.circle.cy) < __WEBPACK_IMPORTED_MODULE_4__Diagram__["epsilon"]) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }

  disappearing.unshift(lArc);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["detachCircle"])(lArc);

  var rArc = next;
  while (rArc.circle
      && Math.abs(x - rArc.circle.x) < __WEBPACK_IMPORTED_MODULE_4__Diagram__["epsilon"]
      && Math.abs(y - rArc.circle.cy) < __WEBPACK_IMPORTED_MODULE_4__Diagram__["epsilon"]) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }

  disappearing.push(rArc);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["detachCircle"])(rArc);

  var nArcs = disappearing.length,
      iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["setEdgeEnd"])(rArc.edge, lArc.site, rArc.site, vertex);
  }

  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["createEdge"])(lArc.site, rArc.site, null, vertex);

  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["attachCircle"])(lArc);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["attachCircle"])(rArc);
}

function addBeach(site) {
  var x = site[0],
      directrix = site[1],
      lArc,
      rArc,
      dxl,
      dxr,
      node = __WEBPACK_IMPORTED_MODULE_4__Diagram__["beaches"]._;

  while (node) {
    dxl = leftBreakPoint(node, directrix) - x;
    if (dxl > __WEBPACK_IMPORTED_MODULE_4__Diagram__["epsilon"]) node = node.L; else {
      dxr = x - rightBreakPoint(node, directrix);
      if (dxr > __WEBPACK_IMPORTED_MODULE_4__Diagram__["epsilon"]) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -__WEBPACK_IMPORTED_MODULE_4__Diagram__["epsilon"]) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -__WEBPACK_IMPORTED_MODULE_4__Diagram__["epsilon"]) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__Cell__["createCell"])(site);
  var newArc = createBeach(site);
  __WEBPACK_IMPORTED_MODULE_4__Diagram__["beaches"].insert(lArc, newArc);

  if (!lArc && !rArc) return;

  if (lArc === rArc) {
    Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["detachCircle"])(lArc);
    rArc = createBeach(lArc.site);
    __WEBPACK_IMPORTED_MODULE_4__Diagram__["beaches"].insert(newArc, rArc);
    newArc.edge = rArc.edge = Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["createEdge"])(lArc.site, newArc.site);
    Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["attachCircle"])(lArc);
    Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["attachCircle"])(rArc);
    return;
  }

  if (!rArc) { // && lArc
    newArc.edge = Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["createEdge"])(lArc.site, newArc.site);
    return;
  }

  // else lArc !== rArc
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["detachCircle"])(lArc);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["detachCircle"])(rArc);

  var lSite = lArc.site,
      ax = lSite[0],
      ay = lSite[1],
      bx = site[0] - ax,
      by = site[1] - ay,
      rSite = rArc.site,
      cx = rSite[0] - ax,
      cy = rSite[1] - ay,
      d = 2 * (bx * cy - by * cx),
      hb = bx * bx + by * by,
      hc = cx * cx + cy * cy,
      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

  Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["setEdgeEnd"])(rArc.edge, lSite, rSite, vertex);
  newArc.edge = Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["createEdge"])(lSite, site, null, vertex);
  rArc.edge = Object(__WEBPACK_IMPORTED_MODULE_3__Edge__["createEdge"])(site, rSite, null, vertex);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["attachCircle"])(lArc);
  Object(__WEBPACK_IMPORTED_MODULE_2__Circle__["attachCircle"])(rArc);
}

function leftBreakPoint(arc, directrix) {
  var site = arc.site,
      rfocx = site[0],
      rfocy = site[1],
      pby2 = rfocy - directrix;

  if (!pby2) return rfocx;

  var lArc = arc.P;
  if (!lArc) return -Infinity;

  site = lArc.site;
  var lfocx = site[0],
      lfocy = site[1],
      plby2 = lfocy - directrix;

  if (!plby2) return lfocx;

  var hl = lfocx - rfocx,
      aby2 = 1 / pby2 - 1 / plby2,
      b = hl / plby2;

  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

  return (rfocx + lfocx) / 2;
}

function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}


/***/ }),
/* 501 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_zoom__ = __webpack_require__(502);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zoom", function() { return __WEBPACK_IMPORTED_MODULE_0__src_zoom__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_transform__ = __webpack_require__(172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zoomTransform", function() { return __WEBPACK_IMPORTED_MODULE_1__src_transform__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zoomIdentity", function() { return __WEBPACK_IMPORTED_MODULE_1__src_transform__["identity"]; });




/***/ }),
/* 502 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_drag__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_transition__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__noevent__ = __webpack_require__(505);










// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].button;
}

function defaultExtent() {
  var e = this, w, h;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    w = e.width.baseVal.value;
    h = e.height.baseVal.value;
  } else {
    w = e.clientWidth;
    h = e.clientHeight;
  }
  return [[0, 0], [w, h]];
}

function defaultTransform() {
  return this.__zoom || __WEBPACK_IMPORTED_MODULE_7__transform__["identity"];
}

function defaultWheelDelta() {
  return -__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].deltaY * (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].deltaMode ? 120 : 1) / 500;
}

function defaultTouchable() {
  return "ontouchstart" in this;
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["interpolateZoom"],
      gestures = [],
      listeners = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["dispatch"])("start", "zoom", "end"),
      touchstarting,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled)
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
            .start()
            .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
            .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    });
  };

  zoom.scaleTo = function(selection, k) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = centroid(e),
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    });
  };

  zoom.translateBy = function(selection, x, y) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    });
  };

  zoom.translateTo = function(selection, x, y) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p = centroid(e);
      return constrain(__WEBPACK_IMPORTED_MODULE_7__transform__["identity"].translate(p[0], p[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    });
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new __WEBPACK_IMPORTED_MODULE_7__transform__["Transform"](k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new __WEBPACK_IMPORTED_MODULE_7__transform__["Transform"](transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, center) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args),
              e = extent.apply(that, args),
              p = center || centroid(e),
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new __WEBPACK_IMPORTED_MODULE_7__transform__["Transform"](k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args) {
    for (var i = 0, n = gestures.length, g; i < n; ++i) {
      if ((g = gestures[i]).that === that) {
        return g;
      }
    }
    return new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.index = -1;
    this.active = 0;
    this.extent = extent.apply(that, args);
  }

  Gesture.prototype = {
    start: function() {
      if (++this.active === 1) {
        this.index = gestures.push(this) - 1;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        gestures.splice(this.index, 1);
        this.index = -1;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["customEvent"])(new __WEBPACK_IMPORTED_MODULE_6__event__["default"](zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function wheeled() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(this);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["interrupt"])(this);
      g.start();
    }

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["default"])();
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        v = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(this),
        x0 = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientX,
        y0 = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientY;

    Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["dragDisable"])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view);
    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["nopropagation"])();
    g.mouse = [p, this.__zoom.invert(p)];
    Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["interrupt"])(this);
    g.start();

    function mousemoved() {
      Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["default"])();
      if (!g.moved) {
        var dx = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientX - x0, dy = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(g.that), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped() {
      v.on("mousemove.zoom mouseup.zoom", null);
      Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["dragEnable"])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view, g.moved);
      Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["default"])();
      g.end();
    }
  }

  function dblclicked() {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(this),
        p1 = t0.invert(p0),
        k1 = t0.k * (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments), translateExtent);

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["default"])();
    if (duration > 0) Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this).transition().duration(duration).call(schedule, t1, p0);
    else Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this).call(zoom.transform, t1);
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        touches = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].changedTouches,
        started,
        n = touches.length, i, t, p;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["nopropagation"])();
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["touch"])(this, touches, t.identifier);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true;
      else if (!g.touch1) g.touch1 = p;
    }

    // If this is a dbltap, reroute to the (optional) dblclick.zoom handler.
    if (touchstarting) {
      touchstarting = clearTimeout(touchstarting);
      if (!g.touch1) {
        g.end();
        p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this).on("dblclick.zoom");
        if (p) p.apply(this, arguments);
        return;
      }
    }

    if (started) {
      touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["interrupt"])(this);
      g.start();
    }
  }

  function touchmoved() {
    var g = gesture(this, arguments),
        touches = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].changedTouches,
        n = touches.length, i, t, p, l;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["default"])();
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["touch"])(this, touches, t.identifier);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended() {
    var g = gesture(this, arguments),
        touches = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].changedTouches,
        n = touches.length, i, t;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["nopropagation"])();
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else g.end();
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["default"])(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["default"])(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["default"])(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["default"])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  return zoom;
});


/***/ }),
/* 503 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 504 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = ZoomEvent;
function ZoomEvent(target, type, transform) {
  this.target = target;
  this.type = type;
  this.transform = transform;
}


/***/ }),
/* 505 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["nopropagation"] = nopropagation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);


function nopropagation() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].preventDefault();
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
});


/***/ })
/******/ ]);