webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DefaultContext/index.js":
/*!********************************************!*\
  !*** ./components/DefaultContext/index.js ***!
  \********************************************/
/*! exports provided: State, Dispatch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dispatch\", function() { return Dispatch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _initialState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/initialState.js */ \"./initialState.js\");\n/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/reducer.js */ \"./reducer.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/elena/projects/photography/components/DefaultContext/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar State = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);\nvar Dispatch = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (props) {\n  _s();\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_reducer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _initialState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var isMenuOpened = state.isMenuOpened,\n      menu = state.menu,\n      colors = state.colors;\n  return __jsx(Dispatch.Provider, {\n    value: dispatch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 3\n    }\n  }, __jsx(State.Provider, {\n    value: state,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 4\n    }\n  }, props.children));\n}, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlZmF1bHRDb250ZXh0L2luZGV4LmpzP2VlNDkiXSwibmFtZXMiOlsiU3RhdGUiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJEaXNwYXRjaCIsInByb3BzIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwiaXNNZW51T3BlbmVkIiwibWVudSIsImNvbG9ycyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxLQUFLLEdBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsSUFBcEIsQ0FBZDtBQUNBLElBQU1DLFFBQVEsR0FBR0YsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixDQUFqQjtBQUVRLDRFQUFDRSxLQUFELEVBQVc7QUFBQTs7QUFBQSxvQkFDQ0Msd0RBQVUsQ0FBQ0MsbURBQUQsRUFBVUMsd0RBQVYsQ0FEWDtBQUFBLE1BQ2xCQyxLQURrQjtBQUFBLE1BQ1hDLFFBRFc7O0FBQUEsTUFHakJDLFlBSGlCLEdBR2NGLEtBSGQsQ0FHakJFLFlBSGlCO0FBQUEsTUFHSEMsSUFIRyxHQUdjSCxLQUhkLENBR0hHLElBSEc7QUFBQSxNQUdHQyxNQUhILEdBR2NKLEtBSGQsQ0FHR0ksTUFISDtBQUt6QixTQUNDLE1BQUMsUUFBRCxDQUFVLFFBQVY7QUFBbUIsU0FBSyxFQUFFSCxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxLQUFELENBQU8sUUFBUDtBQUFnQixTQUFLLEVBQUVELEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JKLEtBQUssQ0FBQ1MsUUFBckMsQ0FERCxDQUREO0FBS0EsQ0FWRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGVmYXVsdENvbnRleHQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tIFwifi9pbml0aWFsU3RhdGUuanNcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCJ+L3JlZHVjZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IFN0YXRlID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBjb25zdCBEaXNwYXRjaCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuXHRjb25zdCB7IGlzTWVudU9wZW5lZCwgbWVudSwgY29sb3JzIH0gPSBzdGF0ZTtcblxuXHRyZXR1cm4gKFxuXHRcdDxEaXNwYXRjaC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuXHRcdFx0PFN0YXRlLlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e3Byb3BzLmNoaWxkcmVufTwvU3RhdGUuUHJvdmlkZXI+XG5cdFx0PC9EaXNwYXRjaC5Qcm92aWRlcj5cblx0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DefaultContext/index.js\n");

/***/ })

})