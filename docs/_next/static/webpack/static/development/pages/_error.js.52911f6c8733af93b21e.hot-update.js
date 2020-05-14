webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/Menu/MenuItem/index.js":
/*!*******************************************!*\
  !*** ./components/Menu/MenuItem/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_DefaultContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/DefaultContext */ \"./components/DefaultContext/index.js\");\n/* harmony import */ var _playground_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/playground.js */ \"./playground.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./components/Menu/MenuItem/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/elena/projects/photography/components/Menu/MenuItem/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var isSubItem = _ref.isSubItem,\n      view = _ref.view,\n      isSelected = _ref.isSelected;\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_components_DefaultContext__WEBPACK_IMPORTED_MODULE_3__[\"Dispatch\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])(); // console.log(router);\n\n  return (// <Link\n    // \t// href={`/${view == \"home\" ? \"\" : view}`}\n    // \thref={`/${view == \"home\" ? \"\" : view}`}\n    // \tshallow\n    // >\n    __jsx(\"b\", {\n      className: \"\".concat(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.item, \" \").concat(isSelected ? _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.is_selected : \"\", \" \").concat(isSubItem ? _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.sub_menu : \"\"),\n      onClick: function onClick() {\n        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({\n          patname: view\n        });\n        next_router__WEBPACK_IMPORTED_MODULE_2___default.a;\n        dispatch({\n          type: \"toggleMenu\"\n        });\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 3\n      }\n    }, view) // </Link>\n\n  );\n}, \"hNsPwrQi7bZh7mmglJNIRicplHU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUvTWVudUl0ZW0vaW5kZXguanM/N2Y3MSJdLCJuYW1lcyI6WyJpc1N1Ykl0ZW0iLCJ2aWV3IiwiaXNTZWxlY3RlZCIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiJCIsIml0ZW0iLCJpc19zZWxlY3RlZCIsInN1Yl9tZW51IiwiUm91dGVyIiwicHVzaCIsInBhdG5hbWUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsa0ZBQXFDO0FBQUE7O0FBQUEsTUFBbENBLFNBQWtDLFFBQWxDQSxTQUFrQztBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQ25ELE1BQU1DLFFBQVEsR0FBR0Msd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FBM0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRm1ELENBR25EOztBQUNBLFNBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsZUFBUyxZQUFLQyxpREFBQyxDQUFDQyxJQUFQLGNBQWVQLFVBQVUsR0FBR00saURBQUMsQ0FBQ0UsV0FBTCxHQUFtQixFQUE1QyxjQUNSVixTQUFTLEdBQUdRLGlEQUFDLENBQUNHLFFBQUwsR0FBZ0IsRUFEakIsQ0FEVjtBQUlDLGFBQU8sRUFBRSxtQkFBTTtBQUNkQywwREFBTSxDQUFDQyxJQUFQLENBQVk7QUFDWEMsaUJBQU8sRUFBRWI7QUFERSxTQUFaO0FBR0FXLDBEQUFNO0FBQ05ULGdCQUFRLENBQUM7QUFBRVksY0FBSSxFQUFFO0FBQVIsU0FBRCxDQUFSO0FBQ0EsT0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BWUVkLElBWkYsQ0FORCxDQW9CQzs7QUFwQkQ7QUFzQkEsQ0ExQkQ7QUFBQSxVQUVnQk0scURBRmhCO0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUvTWVudUl0ZW0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSBcIn4vY29tcG9uZW50cy9EZWZhdWx0Q29udGV4dFwiO1xuaW1wb3J0IHsgQkFTRSB9IGZyb20gXCJ+L3BsYXlncm91bmQuanNcIjtcbmltcG9ydCAkLCB7IGNzcyB9IGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBpc1N1Ykl0ZW0sIHZpZXcsIGlzU2VsZWN0ZWQgfSkgPT4ge1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2gpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Ly8gY29uc29sZS5sb2cocm91dGVyKTtcblx0cmV0dXJuIChcblx0XHQvLyA8TGlua1xuXHRcdC8vIFx0Ly8gaHJlZj17YC8ke3ZpZXcgPT0gXCJob21lXCIgPyBcIlwiIDogdmlld31gfVxuXHRcdC8vIFx0aHJlZj17YC8ke3ZpZXcgPT0gXCJob21lXCIgPyBcIlwiIDogdmlld31gfVxuXHRcdC8vIFx0c2hhbGxvd1xuXHRcdC8vID5cblx0XHQ8YlxuXHRcdFx0Y2xhc3NOYW1lPXtgJHskLml0ZW19ICR7aXNTZWxlY3RlZCA/ICQuaXNfc2VsZWN0ZWQgOiBcIlwifSAke1xuXHRcdFx0XHRpc1N1Ykl0ZW0gPyAkLnN1Yl9tZW51IDogXCJcIlxuXHRcdFx0fWB9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFJvdXRlci5wdXNoKHtcblx0XHRcdFx0XHRwYXRuYW1lOiB2aWV3LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Um91dGVyO1xuXHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6IFwidG9nZ2xlTWVudVwiIH0pO1xuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7dmlld31cblx0XHQ8L2I+XG5cdFx0Ly8gPC9MaW5rPlxuXHQpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Menu/MenuItem/index.js\n");

/***/ })

})