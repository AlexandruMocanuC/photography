webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/main.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_DefaultContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/DefaultContext */ \"./components/DefaultContext/index.js\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/Menu */ \"./components/Menu/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./pages/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/elena/projects/photography/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_components_DefaultContext__WEBPACK_IMPORTED_MODULE_2__[\"Dispatch\"]);\n  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_components_DefaultContext__WEBPACK_IMPORTED_MODULE_2__[\"State\"]); // const { isMenuOpened, menu, colors } = state;\n  // const menuColors = {\n  // \tprimary: colors.palette[colors.menu.primary],\n  // \taccent: colors.palette[colors.menu.accent],\n  // };\n  // useEffect(() => {\n  // \tfetch(`${BASE}/data.json`, {})\n  // \t\t.then((reply) => {\n  // \t\t\tconsole.log(reply);\n  // \t\t\treply.json();\n  // \t\t})\n  // \t\t.then((selected) => {\n  // \t\t\tsetData({\n  // \t\t\t\tlogo: selected.logo,\n  // \t\t\t\tstaticBackground: selected.staticBackground,\n  // \t\t\t\tcolors:\n  // \t\t\t\t\tselected.colors[getRandomInt(selected.colors.length)],\n  // \t\t\t});\n  // \t\t})\n  // \t\t.catch((reply) => {\n  // \t\t\tconsole.log(\"HTTP Error\", reply);\n  // \t\t});\n  // }, []);\n\n  return __jsx(\"b\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.application,\n    onClick: function onClick() {\n      return dispatch({\n        type: \"toggleMenu\"\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 3\n    }\n  }, \"home\");\n}, \"J1t0UJnM5Arn82pBJQRWhuS6/tA=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRpc3BhdGNoIiwic3RhdGUiLCJTdGF0ZSIsIiQiLCJhcHBsaWNhdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVlLDhFQUFNO0FBQUE7O0FBQ3BCLE1BQU1BLFFBQVEsR0FBR0Msd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FBM0I7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLHdEQUFVLENBQUNHLGdFQUFELENBQXhCLENBRm9CLENBSXBCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FDQztBQUNDLGFBQVMsRUFBRUMsaURBQUMsQ0FBQ0MsV0FEZDtBQUVDLFdBQU8sRUFBRTtBQUFBLGFBQU1OLFFBQVEsQ0FBQztBQUFFTyxZQUFJLEVBQUU7QUFBUixPQUFELENBQWQ7QUFBQSxLQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQW1CQSxDQWhERCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcbmltcG9ydCB7IFN0YXRlLCBEaXNwYXRjaCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvRGVmYXVsdENvbnRleHRcIjtcblxuaW1wb3J0IE1lbnUgZnJvbSBcIn4vY29tcG9uZW50cy9NZW51XCI7XG5cbmltcG9ydCAkIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaCk7XG5cdGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChTdGF0ZSk7XG5cblx0Ly8gY29uc3QgeyBpc01lbnVPcGVuZWQsIG1lbnUsIGNvbG9ycyB9ID0gc3RhdGU7XG5cblx0Ly8gY29uc3QgbWVudUNvbG9ycyA9IHtcblx0Ly8gXHRwcmltYXJ5OiBjb2xvcnMucGFsZXR0ZVtjb2xvcnMubWVudS5wcmltYXJ5XSxcblx0Ly8gXHRhY2NlbnQ6IGNvbG9ycy5wYWxldHRlW2NvbG9ycy5tZW51LmFjY2VudF0sXG5cdC8vIH07XG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XG5cdC8vIFx0ZmV0Y2goYCR7QkFTRX0vZGF0YS5qc29uYCwge30pXG5cdC8vIFx0XHQudGhlbigocmVwbHkpID0+IHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2cocmVwbHkpO1xuXHQvLyBcdFx0XHRyZXBseS5qc29uKCk7XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LnRoZW4oKHNlbGVjdGVkKSA9PiB7XG5cdC8vIFx0XHRcdHNldERhdGEoe1xuXHQvLyBcdFx0XHRcdGxvZ286IHNlbGVjdGVkLmxvZ28sXG5cdC8vIFx0XHRcdFx0c3RhdGljQmFja2dyb3VuZDogc2VsZWN0ZWQuc3RhdGljQmFja2dyb3VuZCxcblx0Ly8gXHRcdFx0XHRjb2xvcnM6XG5cdC8vIFx0XHRcdFx0XHRzZWxlY3RlZC5jb2xvcnNbZ2V0UmFuZG9tSW50KHNlbGVjdGVkLmNvbG9ycy5sZW5ndGgpXSxcblx0Ly8gXHRcdFx0fSk7XG5cdC8vIFx0XHR9KVxuXHQvLyBcdFx0LmNhdGNoKChyZXBseSkgPT4ge1xuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhcIkhUVFAgRXJyb3JcIiwgcmVwbHkpO1xuXHQvLyBcdFx0fSk7XG5cdC8vIH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxiXG5cdFx0XHRjbGFzc05hbWU9eyQuYXBwbGljYXRpb259XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwidG9nZ2xlTWVudVwiIH0pfVxuXHRcdD5cblx0XHRcdGhvbWVcblx0XHRcdHsvKjxNZW51XG5cdFx0XHRcdGlzT3Blbj17aXNNZW51T3BlbmVkfVxuXHRcdFx0XHRpdGVtcz17bWVudX1cblx0XHRcdFx0Y29sb3JzPXttZW51Q29sb3JzfVxuXHRcdFx0XHRvblNlbGVjdD17KHZpZXcpID0+XG5cdFx0XHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxlY3RWaWV3XCIsXG5cdFx0XHRcdFx0XHR2aWV3OiB2aWV3LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdC8+Ki99XG5cdFx0PC9iPlxuXHQpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})