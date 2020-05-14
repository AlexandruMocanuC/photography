webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/DefaultContext/index.js":
/*!********************************************!*\
  !*** ./components/DefaultContext/index.js ***!
  \********************************************/
/*! exports provided: State, Dispatch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dispatch\", function() { return Dispatch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/main.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _initialState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/initialState.js */ \"./initialState.js\");\n/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/reducer.js */ \"./reducer.js\");\n/* harmony import */ var _MobileApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MobileApp */ \"./components/DefaultContext/MobileApp/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ \"./components/DefaultContext/App/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/elena/projects/photography/components/DefaultContext/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar State = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);\nvar Dispatch = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (props) {\n  _s();\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_reducer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _initialState_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var isMenuOpened = state.isMenuOpened,\n      menu = state.menu,\n      colors = state.colors,\n      staticBackground = state.staticBackground;\n  console.lg(react_device_detect__WEBPACK_IMPORTED_MODULE_1__[\"isMobile\"]);\n  return __jsx(Dispatch.Provider, {\n    value: dispatch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 3\n    }\n  }, __jsx(State.Provider, {\n    value: state,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }\n  }, react_device_detect__WEBPACK_IMPORTED_MODULE_1__[\"isMobile\"] ? __jsx(_MobileApp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    isMenuOpened: isMenuOpened,\n    colors: colors,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 6\n    }\n  }, props.children) : __jsx(_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isMenuOpened: isMenuOpened,\n    colors: colors,\n    staticBackground: staticBackground,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 6\n    }\n  }, props.children)));\n}, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlZmF1bHRDb250ZXh0L2luZGV4LmpzP2VlNDkiXSwibmFtZXMiOlsiU3RhdGUiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJEaXNwYXRjaCIsInByb3BzIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwiaXNNZW51T3BlbmVkIiwibWVudSIsImNvbG9ycyIsInN0YXRpY0JhY2tncm91bmQiLCJjb25zb2xlIiwibGciLCJpc01vYmlsZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsS0FBSyxHQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLENBQWQ7QUFDQSxJQUFNQyxRQUFRLEdBQUdGLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsSUFBcEIsQ0FBakI7QUFFUSw0RUFBQ0UsS0FBRCxFQUFXO0FBQUE7O0FBQUEsb0JBQ0NDLHdEQUFVLENBQUNDLG1EQUFELEVBQVVDLHdEQUFWLENBRFg7QUFBQSxNQUNsQkMsS0FEa0I7QUFBQSxNQUNYQyxRQURXOztBQUFBLE1BR2pCQyxZQUhpQixHQUdnQ0YsS0FIaEMsQ0FHakJFLFlBSGlCO0FBQUEsTUFHSEMsSUFIRyxHQUdnQ0gsS0FIaEMsQ0FHSEcsSUFIRztBQUFBLE1BR0dDLE1BSEgsR0FHZ0NKLEtBSGhDLENBR0dJLE1BSEg7QUFBQSxNQUdXQyxnQkFIWCxHQUdnQ0wsS0FIaEMsQ0FHV0ssZ0JBSFg7QUFLekJDLFNBQU8sQ0FBQ0MsRUFBUixDQUFXQyw0REFBWDtBQUVBLFNBQ0MsTUFBQyxRQUFELENBQVUsUUFBVjtBQUFtQixTQUFLLEVBQUVQLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLEtBQUQsQ0FBTyxRQUFQO0FBQWdCLFNBQUssRUFBRUQsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFUSw0REFBUSxHQUNSLE1BQUMsa0RBQUQ7QUFBVyxnQkFBWSxFQUFFTixZQUF6QjtBQUF1QyxVQUFNLEVBQUVFLE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRVIsS0FBSyxDQUFDYSxRQURSLENBRFEsR0FLUixNQUFDLDRDQUFEO0FBQ0MsZ0JBQVksRUFBRVAsWUFEZjtBQUVDLFVBQU0sRUFBRUUsTUFGVDtBQUdDLG9CQUFnQixFQUFFQyxnQkFIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFVCxLQUFLLENBQUNhLFFBTFIsQ0FORixDQURELENBREQ7QUFtQkEsQ0ExQkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlZmF1bHRDb250ZXh0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSBcIn4vaW5pdGlhbFN0YXRlLmpzXCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tIFwifi9yZWR1Y2VyLmpzXCI7XG5pbXBvcnQgTW9iaWxlQXBwIGZyb20gXCIuL01vYmlsZUFwcFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblxuZXhwb3J0IGNvbnN0IFN0YXRlID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBjb25zdCBEaXNwYXRjaCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuXHRjb25zdCB7IGlzTWVudU9wZW5lZCwgbWVudSwgY29sb3JzLCBzdGF0aWNCYWNrZ3JvdW5kIH0gPSBzdGF0ZTtcblxuXHRjb25zb2xlLmxnKGlzTW9iaWxlKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxEaXNwYXRjaC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuXHRcdFx0PFN0YXRlLlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG5cdFx0XHRcdHtpc01vYmlsZSA/IChcblx0XHRcdFx0XHQ8TW9iaWxlQXBwIGlzTWVudU9wZW5lZD17aXNNZW51T3BlbmVkfSBjb2xvcnM9e2NvbG9yc30+XG5cdFx0XHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0PC9Nb2JpbGVBcHA+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PEFwcFxuXHRcdFx0XHRcdFx0aXNNZW51T3BlbmVkPXtpc01lbnVPcGVuZWR9XG5cdFx0XHRcdFx0XHRjb2xvcnM9e2NvbG9yc31cblx0XHRcdFx0XHRcdHN0YXRpY0JhY2tncm91bmQ9e3N0YXRpY0JhY2tncm91bmR9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0XHRcdDwvQXBwPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9TdGF0ZS5Qcm92aWRlcj5cblx0XHQ8L0Rpc3BhdGNoLlByb3ZpZGVyPlxuXHQpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DefaultContext/index.js\n");

/***/ })

})