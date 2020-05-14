webpackHotUpdate("static/development/pages/index.js",{

/***/ "./initialState.js":
/*!*************************!*\
  !*** ./initialState.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _public_staticData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/public/staticData */ \"./public/staticData.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction getRandomInt(max) {\n  return Math.floor(Math.random() * Math.floor(max));\n}\n\nvar initialState = _objectSpread(_objectSpread({}, _public_staticData__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), {}, {\n  colors: _public_staticData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colors[getRandomInt(_public_staticData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colors.length)],\n  isMenuOpened: false\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialState);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbml0aWFsU3RhdGUuanM/OGU1YiJdLCJuYW1lcyI6WyJnZXRSYW5kb21JbnQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbml0aWFsU3RhdGUiLCJkYXRhIiwiY29sb3JzIiwibGVuZ3RoIiwiaXNNZW51T3BlbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUMxQixTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCRixJQUFJLENBQUNDLEtBQUwsQ0FBV0YsR0FBWCxDQUEzQixDQUFQO0FBQ0E7O0FBRUQsSUFBTUksWUFBWSxtQ0FDZEMsMERBRGM7QUFFakJDLFFBQU0sRUFBRUQsMERBQUksQ0FBQ0MsTUFBTCxDQUFZUCxZQUFZLENBQUNNLDBEQUFJLENBQUNDLE1BQUwsQ0FBWUMsTUFBYixDQUF4QixDQUZTO0FBR2pCQyxjQUFZLEVBQUU7QUFIRyxFQUFsQjs7QUFNZUosMkVBQWYiLCJmaWxlIjoiLi9pbml0aWFsU3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YSBmcm9tIFwifi9wdWJsaWMvc3RhdGljRGF0YVwiO1xuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdC4uLmRhdGEsXG5cdGNvbG9yczogZGF0YS5jb2xvcnNbZ2V0UmFuZG9tSW50KGRhdGEuY29sb3JzLmxlbmd0aCldLFxuXHRpc01lbnVPcGVuZWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./initialState.js\n");

/***/ })

})