webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Menu/MenuItem/index.js":
/*!*******************************************!*\
  !*** ./components/Menu/MenuItem/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_DefaultContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/DefaultContext */ \"./components/DefaultContext/index.js\");\n/* harmony import */ var _playground_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/playground.js */ \"./playground.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./components/Menu/MenuItem/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/elena/projects/photography/components/Menu/MenuItem/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var isSubItem = _ref.isSubItem,\n      view = _ref.view,\n      isSelected = _ref.isSelected;\n  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_components_DefaultContext__WEBPACK_IMPORTED_MODULE_3__[\"Dispatch\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])(); // console.log(router);\n\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a // href={`/${view == \"home\" ? \"\" : view}`}\n  , {\n    href: \"/\".concat(view == \"home\" ? \"\" : view),\n    shallow: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 3\n    }\n  }, __jsx(\"b\", {\n    className: \"\".concat(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a.item, \" \").concat(isSelected ? _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.is_selected : \"\", \" \").concat(isSubItem ? _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.sub_menu : \"\"),\n    onClick: function onClick() {\n      return dispatch({\n        type: \"toggleMenu\"\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }\n  }, view));\n}, \"hNsPwrQi7bZh7mmglJNIRicplHU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUvTWVudUl0ZW0vaW5kZXguanM/N2Y3MSJdLCJuYW1lcyI6WyJpc1N1Ykl0ZW0iLCJ2aWV3IiwiaXNTZWxlY3RlZCIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiJCIsIml0ZW0iLCJpc19zZWxlY3RlZCIsInN1Yl9tZW51IiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLGtGQUFxQztBQUFBOztBQUFBLE1BQWxDQSxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUNuRCxNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLG1FQUFELENBQTNCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUZtRCxDQUduRDs7QUFDQSxTQUNDLE1BQUMsZ0RBQUQsQ0FDQztBQUREO0FBRUMsUUFBSSxhQUFNTixJQUFJLElBQUksTUFBUixHQUFpQixFQUFqQixHQUFzQkEsSUFBNUIsQ0FGTDtBQUdDLFdBQU8sTUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0M7QUFDQyxhQUFTLFlBQUtPLGlEQUFDLENBQUNDLElBQVAsY0FBZVAsVUFBVSxHQUFHTSxpREFBQyxDQUFDRSxXQUFMLEdBQW1CLEVBQTVDLGNBQ1JWLFNBQVMsR0FBR1EsaURBQUMsQ0FBQ0csUUFBTCxHQUFnQixFQURqQixDQURWO0FBSUMsV0FBTyxFQUFFO0FBQUEsYUFBTVIsUUFBUSxDQUFDO0FBQUVTLFlBQUksRUFBRTtBQUFSLE9BQUQsQ0FBZDtBQUFBLEtBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FWCxJQU5GLENBTEQsQ0FERDtBQWdCQSxDQXBCRDtBQUFBLFVBRWdCTSxxREFGaEI7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWVudS9NZW51SXRlbS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwifi9jb21wb25lbnRzL0RlZmF1bHRDb250ZXh0XCI7XG5pbXBvcnQgeyBCQVNFIH0gZnJvbSBcIn4vcGxheWdyb3VuZC5qc1wiO1xuaW1wb3J0ICQsIHsgY3NzIH0gZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlzU3ViSXRlbSwgdmlldywgaXNTZWxlY3RlZCB9KSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaCk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHQvLyBjb25zb2xlLmxvZyhyb3V0ZXIpO1xuXHRyZXR1cm4gKFxuXHRcdDxMaW5rXG5cdFx0XHQvLyBocmVmPXtgLyR7dmlldyA9PSBcImhvbWVcIiA/IFwiXCIgOiB2aWV3fWB9XG5cdFx0XHRocmVmPXtgLyR7dmlldyA9PSBcImhvbWVcIiA/IFwiXCIgOiB2aWV3fWB9XG5cdFx0XHRzaGFsbG93XG5cdFx0PlxuXHRcdFx0PGJcblx0XHRcdFx0Y2xhc3NOYW1lPXtgJHskLml0ZW19ICR7aXNTZWxlY3RlZCA/ICQuaXNfc2VsZWN0ZWQgOiBcIlwifSAke1xuXHRcdFx0XHRcdGlzU3ViSXRlbSA/ICQuc3ViX21lbnUgOiBcIlwiXG5cdFx0XHRcdH1gfVxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFwidG9nZ2xlTWVudVwiIH0pfVxuXHRcdFx0PlxuXHRcdFx0XHR7dmlld31cblx0XHRcdDwvYj5cblx0XHQ8L0xpbms+XG5cdCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Menu/MenuItem/index.js\n");

/***/ })

})