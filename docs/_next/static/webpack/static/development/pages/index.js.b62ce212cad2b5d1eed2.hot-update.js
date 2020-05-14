webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DefaultContext/App/index.js":
/*!************************************************!*\
  !*** ./components/DefaultContext/App/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/View */ \"./components/View/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./components/DefaultContext/App/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/elena/projects/photography/components/DefaultContext/App/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var isMenuOpened = props.isMenuOpened,\n      colors = props.colors,\n      staticBackground = props.staticBackground;\n  var order = [\"primary\", \"secondary\", \"accent\", \"neutral\", \"complementary\"];\n  var colorsVar = \"\";\n  colors.palette.map(function (color, index) {\n    colorsVar += \"--data_color_\".concat(order[index], \": \").concat(color, \";\");\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"style\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }, \".\".concat(_style_css__WEBPACK_IMPORTED_MODULE_2___default.a.application, \" {\\n\\t\\t\\t\\t\").concat(colorsVar, \"\\n\\t\\t\\t}\")), __jsx(\"b\", {\n    className: \"\".concat(_style_css__WEBPACK_IMPORTED_MODULE_2___default.a.application, \" \").concat(isMenuOpened ? _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.opened_menu : \"\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }\n  }, __jsx(\"b\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,\n    style: {\n      backgroundImage: \"url(\".concat(staticBackground, \")\")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"b\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 6\n    }\n  }, __jsx(_components_View__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, props.children)))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlZmF1bHRDb250ZXh0L0FwcC9pbmRleC5qcz9hZGU0Il0sIm5hbWVzIjpbInByb3BzIiwiaXNNZW51T3BlbmVkIiwiY29sb3JzIiwic3RhdGljQmFja2dyb3VuZCIsIm9yZGVyIiwiY29sb3JzVmFyIiwicGFsZXR0ZSIsIm1hcCIsImNvbG9yIiwiaW5kZXgiLCIkIiwiYXBwbGljYXRpb24iLCJvcGVuZWRfbWVudSIsIndyYXBwZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb250YWluZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLHlFQUFDQSxLQUFELEVBQVc7QUFBQSxNQUNqQkMsWUFEaUIsR0FDMEJELEtBRDFCLENBQ2pCQyxZQURpQjtBQUFBLE1BQ0hDLE1BREcsR0FDMEJGLEtBRDFCLENBQ0hFLE1BREc7QUFBQSxNQUNLQyxnQkFETCxHQUMwQkgsS0FEMUIsQ0FDS0csZ0JBREw7QUFHekIsTUFBTUMsS0FBSyxHQUFHLENBQ2IsU0FEYSxFQUViLFdBRmEsRUFHYixRQUhhLEVBSWIsU0FKYSxFQUtiLGVBTGEsQ0FBZDtBQVFBLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBSCxRQUFNLENBQUNJLE9BQVAsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDcENKLGFBQVMsMkJBQW9CRCxLQUFLLENBQUNLLEtBQUQsQ0FBekIsZUFBcUNELEtBQXJDLE1BQVQ7QUFDQSxHQUZEO0FBSUEsU0FDQyxtRUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFZRSxpREFBQyxDQUFDQyxXQUFkLHlCQUNHTixTQURILGVBREQsRUFJQztBQUNDLGFBQVMsWUFBS0ssaURBQUMsQ0FBQ0MsV0FBUCxjQUNSVixZQUFZLEdBQUdTLGlEQUFDLENBQUNFLFdBQUwsR0FBbUIsRUFEdkIsQ0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0M7QUFDQyxhQUFTLEVBQUVGLGlEQUFDLENBQUNHLE9BRGQ7QUFFQyxTQUFLLEVBQUU7QUFBRUMscUJBQWUsZ0JBQVNYLGdCQUFUO0FBQWpCLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlDO0FBQUcsYUFBUyxFQUFFTyxpREFBQyxDQUFDSyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9mLEtBQUssQ0FBQ2dCLFFBQWIsQ0FERCxDQUpELENBTEQsQ0FKRCxDQUREO0FBcUJBLENBckNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EZWZhdWx0Q29udGV4dC9BcHAvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIn4vY29tcG9uZW50cy9WaWV3XCI7XG5cbmltcG9ydCAkLCB7IGNzcyB9IGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBpc01lbnVPcGVuZWQsIGNvbG9ycywgc3RhdGljQmFja2dyb3VuZCB9ID0gcHJvcHM7XG5cblx0Y29uc3Qgb3JkZXIgPSBbXG5cdFx0XCJwcmltYXJ5XCIsXG5cdFx0XCJzZWNvbmRhcnlcIixcblx0XHRcImFjY2VudFwiLFxuXHRcdFwibmV1dHJhbFwiLFxuXHRcdFwiY29tcGxlbWVudGFyeVwiLFxuXHRdO1xuXG5cdGxldCBjb2xvcnNWYXIgPSBcIlwiO1xuXHRjb2xvcnMucGFsZXR0ZS5tYXAoKGNvbG9yLCBpbmRleCkgPT4ge1xuXHRcdGNvbG9yc1ZhciArPSBgLS1kYXRhX2NvbG9yXyR7b3JkZXJbaW5kZXhdfTogJHtjb2xvcn07YDtcblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHN0eWxlPntgLiR7JC5hcHBsaWNhdGlvbn0ge1xuXHRcdFx0XHQke2NvbG9yc1Zhcn1cblx0XHRcdH1gfTwvc3R5bGU+XG5cdFx0XHQ8YlxuXHRcdFx0XHRjbGFzc05hbWU9e2AkeyQuYXBwbGljYXRpb259ICR7XG5cdFx0XHRcdFx0aXNNZW51T3BlbmVkID8gJC5vcGVuZWRfbWVudSA6IFwiXCJcblx0XHRcdFx0fWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXskLndyYXBwZXJ9XG5cdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c3RhdGljQmFja2dyb3VuZH0pYCB9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGIgY2xhc3NOYW1lPXskLmNvbnRhaW5lcn0+XG5cdFx0XHRcdFx0XHQ8Vmlldz57cHJvcHMuY2hpbGRyZW59PC9WaWV3PlxuXHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0PC9iPlxuXHRcdFx0PC9iPlxuXHRcdDwvPlxuXHQpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DefaultContext/App/index.js\n");

/***/ })

})