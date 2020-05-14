webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/DefaultContext/App/index.js":
/*!************************************************!*\
  !*** ./components/DefaultContext/App/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/View */ \"./components/View/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./components/DefaultContext/App/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/elena/projects/photography/components/DefaultContext/App/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var isMenuOpened = props.isMenuOpened,\n      colors = props.colors,\n      staticBackground = props.staticBackground;\n  var order = [\"primary\", \"secondary\", \"accent\", \"neutral\", \"complementary\"];\n  var colorsVar = \"\";\n  colors.palette.map(function (color, index) {\n    colorsVar += \"--data_color_\".concat(order[index], \": \").concat(color, \";\");\n  });\n  return __jsx(\"b\", {\n    className: \"\".concat(_style_css__WEBPACK_IMPORTED_MODULE_2___default.a.application, \" \").concat(isMenuOpened ? _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.opened_menu : \"\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(\"style\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }, \".\".concat(_style_css__WEBPACK_IMPORTED_MODULE_2___default.a.application, \" {\\n\\t\\t\\t\\t\").concat(colorsVar, \"\\n\\t\\t\\t}\")), __jsx(\"b\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,\n    style: {\n      backgroundImage: \"url(\".concat(staticBackground, \")\")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }\n  }, __jsx(\"b\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(_components_View__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 6\n    }\n  }, props.children))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlZmF1bHRDb250ZXh0L0FwcC9pbmRleC5qcz9hZGU0Il0sIm5hbWVzIjpbInByb3BzIiwiaXNNZW51T3BlbmVkIiwiY29sb3JzIiwic3RhdGljQmFja2dyb3VuZCIsIm9yZGVyIiwiY29sb3JzVmFyIiwicGFsZXR0ZSIsIm1hcCIsImNvbG9yIiwiaW5kZXgiLCIkIiwiYXBwbGljYXRpb24iLCJvcGVuZWRfbWVudSIsIndyYXBwZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb250YWluZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLHlFQUFDQSxLQUFELEVBQVc7QUFBQSxNQUNqQkMsWUFEaUIsR0FDMEJELEtBRDFCLENBQ2pCQyxZQURpQjtBQUFBLE1BQ0hDLE1BREcsR0FDMEJGLEtBRDFCLENBQ0hFLE1BREc7QUFBQSxNQUNLQyxnQkFETCxHQUMwQkgsS0FEMUIsQ0FDS0csZ0JBREw7QUFHekIsTUFBTUMsS0FBSyxHQUFHLENBQ2IsU0FEYSxFQUViLFdBRmEsRUFHYixRQUhhLEVBSWIsU0FKYSxFQUtiLGVBTGEsQ0FBZDtBQVFBLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBSCxRQUFNLENBQUNJLE9BQVAsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDcENKLGFBQVMsMkJBQW9CRCxLQUFLLENBQUNLLEtBQUQsQ0FBekIsZUFBcUNELEtBQXJDLE1BQVQ7QUFDQSxHQUZEO0FBSUEsU0FDQztBQUFHLGFBQVMsWUFBS0UsaURBQUMsQ0FBQ0MsV0FBUCxjQUFzQlYsWUFBWSxHQUFHUyxpREFBQyxDQUFDRSxXQUFMLEdBQW1CLEVBQXJELENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVlGLGlEQUFDLENBQUNDLFdBQWQseUJBQ0dOLFNBREgsZUFERCxFQUlDO0FBQ0MsYUFBUyxFQUFFSyxpREFBQyxDQUFDRyxPQURkO0FBRUMsU0FBSyxFQUFFO0FBQUVDLHFCQUFlLGdCQUFTWCxnQkFBVDtBQUFqQixLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQztBQUFHLGFBQVMsRUFBRU8saURBQUMsQ0FBQ0ssU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPZixLQUFLLENBQUNnQixRQUFiLENBREQsQ0FKRCxDQUpELENBREQ7QUFlQSxDQS9CRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGVmYXVsdENvbnRleHQvQXBwL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJ+L2NvbXBvbmVudHMvVmlld1wiO1xuXG5pbXBvcnQgJCwgeyBjc3MgfSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgaXNNZW51T3BlbmVkLCBjb2xvcnMsIHN0YXRpY0JhY2tncm91bmQgfSA9IHByb3BzO1xuXG5cdGNvbnN0IG9yZGVyID0gW1xuXHRcdFwicHJpbWFyeVwiLFxuXHRcdFwic2Vjb25kYXJ5XCIsXG5cdFx0XCJhY2NlbnRcIixcblx0XHRcIm5ldXRyYWxcIixcblx0XHRcImNvbXBsZW1lbnRhcnlcIixcblx0XTtcblxuXHRsZXQgY29sb3JzVmFyID0gXCJcIjtcblx0Y29sb3JzLnBhbGV0dGUubWFwKChjb2xvciwgaW5kZXgpID0+IHtcblx0XHRjb2xvcnNWYXIgKz0gYC0tZGF0YV9jb2xvcl8ke29yZGVyW2luZGV4XX06ICR7Y29sb3J9O2A7XG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGIgY2xhc3NOYW1lPXtgJHskLmFwcGxpY2F0aW9ufSAke2lzTWVudU9wZW5lZCA/ICQub3BlbmVkX21lbnUgOiBcIlwifWB9PlxuXHRcdFx0PHN0eWxlPntgLiR7JC5hcHBsaWNhdGlvbn0ge1xuXHRcdFx0XHQke2NvbG9yc1Zhcn1cblx0XHRcdH1gfTwvc3R5bGU+XG5cdFx0XHQ8YlxuXHRcdFx0XHRjbGFzc05hbWU9eyQud3JhcHBlcn1cblx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c3RhdGljQmFja2dyb3VuZH0pYCB9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8YiBjbGFzc05hbWU9eyQuY29udGFpbmVyfT5cblx0XHRcdFx0XHQ8Vmlldz57cHJvcHMuY2hpbGRyZW59PC9WaWV3PlxuXHRcdFx0XHQ8L2I+XG5cdFx0XHQ8L2I+XG5cdFx0PC9iPlxuXHQpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DefaultContext/App/index.js\n");

/***/ })

})