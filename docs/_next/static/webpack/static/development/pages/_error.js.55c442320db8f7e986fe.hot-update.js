webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/main.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_DefaultContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/DefaultContext */ \"./components/DefaultContext/index.js\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/Menu */ \"./components/Menu/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./pages/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/elena/projects/photography/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_components_DefaultContext__WEBPACK_IMPORTED_MODULE_2__[\"Dispatch\"]);\n  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_components_DefaultContext__WEBPACK_IMPORTED_MODULE_2__[\"State\"]);\n  var isMenuOpened = state.isMenuOpened,\n      menu = state.menu,\n      colors = state.colors;\n  var menuColors = {\n    primary: colors.palette[colors.menu.primary],\n    accent: colors.palette[colors.menu.accent]\n  }; // useEffect(() => {\n  // \tfetch(`${BASE}/data.json`, {})\n  // \t\t.then((reply) => {\n  // \t\t\tconsole.log(reply);\n  // \t\t\treply.json();\n  // \t\t})\n  // \t\t.then((selected) => {\n  // \t\t\tsetData({\n  // \t\t\t\tlogo: selected.logo,\n  // \t\t\t\tstaticBackground: selected.staticBackground,\n  // \t\t\t\tcolors:\n  // \t\t\t\t\tselected.colors[getRandomInt(selected.colors.length)],\n  // \t\t\t});\n  // \t\t})\n  // \t\t.catch((reply) => {\n  // \t\t\tconsole.log(\"HTTP Error\", reply);\n  // \t\t});\n  // }, []);\n\n  return __jsx(\"b\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.application,\n    onClick: function onClick() {\n      return dispatch({\n        type: \"toggleMenu\"\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 3\n    }\n  }, \"home\");\n}, \"J1t0UJnM5Arn82pBJQRWhuS6/tA=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRpc3BhdGNoIiwic3RhdGUiLCJTdGF0ZSIsImlzTWVudU9wZW5lZCIsIm1lbnUiLCJjb2xvcnMiLCJtZW51Q29sb3JzIiwicHJpbWFyeSIsInBhbGV0dGUiLCJhY2NlbnQiLCIkIiwiYXBwbGljYXRpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFZSw4RUFBTTtBQUFBOztBQUNwQixNQUFNQSxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLG1FQUFELENBQTNCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRix3REFBVSxDQUFDRyxnRUFBRCxDQUF4QjtBQUZvQixNQUlaQyxZQUpZLEdBSW1CRixLQUpuQixDQUlaRSxZQUpZO0FBQUEsTUFJRUMsSUFKRixHQUltQkgsS0FKbkIsQ0FJRUcsSUFKRjtBQUFBLE1BSVFDLE1BSlIsR0FJbUJKLEtBSm5CLENBSVFJLE1BSlI7QUFNcEIsTUFBTUMsVUFBVSxHQUFHO0FBQ2xCQyxXQUFPLEVBQUVGLE1BQU0sQ0FBQ0csT0FBUCxDQUFlSCxNQUFNLENBQUNELElBQVAsQ0FBWUcsT0FBM0IsQ0FEUztBQUVsQkUsVUFBTSxFQUFFSixNQUFNLENBQUNHLE9BQVAsQ0FBZUgsTUFBTSxDQUFDRCxJQUFQLENBQVlLLE1BQTNCO0FBRlUsR0FBbkIsQ0FOb0IsQ0FVcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQ0M7QUFDQyxhQUFTLEVBQUVDLGlEQUFDLENBQUNDLFdBRGQ7QUFFQyxXQUFPLEVBQUU7QUFBQSxhQUFNYixRQUFRLENBQUM7QUFBRWMsWUFBSSxFQUFFO0FBQVIsT0FBRCxDQUFkO0FBQUEsS0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFtQkEsQ0FoREQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XG5pbXBvcnQgeyBTdGF0ZSwgRGlzcGF0Y2ggfSBmcm9tIFwifi9jb21wb25lbnRzL0RlZmF1bHRDb250ZXh0XCI7XG5cbmltcG9ydCBNZW51IGZyb20gXCJ+L2NvbXBvbmVudHMvTWVudVwiO1xuXG5pbXBvcnQgJCBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2gpO1xuXHRjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoU3RhdGUpO1xuXG5cdGNvbnN0IHsgaXNNZW51T3BlbmVkLCBtZW51LCBjb2xvcnMgfSA9IHN0YXRlO1xuXG5cdGNvbnN0IG1lbnVDb2xvcnMgPSB7XG5cdFx0cHJpbWFyeTogY29sb3JzLnBhbGV0dGVbY29sb3JzLm1lbnUucHJpbWFyeV0sXG5cdFx0YWNjZW50OiBjb2xvcnMucGFsZXR0ZVtjb2xvcnMubWVudS5hY2NlbnRdLFxuXHR9O1xuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xuXHQvLyBcdGZldGNoKGAke0JBU0V9L2RhdGEuanNvbmAsIHt9KVxuXHQvLyBcdFx0LnRoZW4oKHJlcGx5KSA9PiB7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKHJlcGx5KTtcblx0Ly8gXHRcdFx0cmVwbHkuanNvbigpO1xuXHQvLyBcdFx0fSlcblx0Ly8gXHRcdC50aGVuKChzZWxlY3RlZCkgPT4ge1xuXHQvLyBcdFx0XHRzZXREYXRhKHtcblx0Ly8gXHRcdFx0XHRsb2dvOiBzZWxlY3RlZC5sb2dvLFxuXHQvLyBcdFx0XHRcdHN0YXRpY0JhY2tncm91bmQ6IHNlbGVjdGVkLnN0YXRpY0JhY2tncm91bmQsXG5cdC8vIFx0XHRcdFx0Y29sb3JzOlxuXHQvLyBcdFx0XHRcdFx0c2VsZWN0ZWQuY29sb3JzW2dldFJhbmRvbUludChzZWxlY3RlZC5jb2xvcnMubGVuZ3RoKV0sXG5cdC8vIFx0XHRcdH0pO1xuXHQvLyBcdFx0fSlcblx0Ly8gXHRcdC5jYXRjaCgocmVwbHkpID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJIVFRQIEVycm9yXCIsIHJlcGx5KTtcblx0Ly8gXHRcdH0pO1xuXHQvLyB9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8YlxuXHRcdFx0Y2xhc3NOYW1lPXskLmFwcGxpY2F0aW9ufVxuXHRcdFx0b25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcInRvZ2dsZU1lbnVcIiB9KX1cblx0XHQ+XG5cdFx0XHRob21lXG5cdFx0XHR7Lyo8TWVudVxuXHRcdFx0XHRpc09wZW49e2lzTWVudU9wZW5lZH1cblx0XHRcdFx0aXRlbXM9e21lbnV9XG5cdFx0XHRcdGNvbG9ycz17bWVudUNvbG9yc31cblx0XHRcdFx0b25TZWxlY3Q9eyh2aWV3KSA9PlxuXHRcdFx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZWN0Vmlld1wiLFxuXHRcdFx0XHRcdFx0dmlldzogdmlldyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQvPiovfVxuXHRcdDwvYj5cblx0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})