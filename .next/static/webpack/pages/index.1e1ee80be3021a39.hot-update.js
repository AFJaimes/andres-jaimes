"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Card/Card.tsx":
/*!**************************************!*\
  !*** ./src/components/Card/Card.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_extends.mjs */ \"./node_modules/@swc/helpers/src/_extends.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.module.scss */ \"./src/components/Card/Card.module.scss\");\n/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\n\nvar Card = function(_param) {\n    var card = (0,_swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _param);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().innerContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: card.image,\n                    className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().image),\n                    alt: \"dvd screensaver minigame\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Card\\\\Card.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().text),\n                    children: card.text\n                }, void 0, false, {\n                    fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Card\\\\Card.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Card\\\\Card.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Card\\\\Card.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBcUM7QUFJckMsSUFBTUMsSUFBSSxHQUFpQyxpQkFBaUI7UUFBWEMsSUFBSTtJQUNuRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVKLG9FQUFhO2tCQUMzQiw0RUFBQ0csS0FBRztZQUFDQyxTQUFTLEVBQUVKLHlFQUFrQjs7OEJBQ2hDLDhEQUFDTyxLQUFHO29CQUNGQyxHQUFHLEVBQUVOLElBQUksQ0FBQ08sS0FBSztvQkFDZkwsU0FBUyxFQUFFSixnRUFBUztvQkFDcEJVLEdBQUcsRUFBQywwQkFBMEI7Ozs7O3lCQUM5Qjs4QkFDRiw4REFBQ0MsTUFBSTtvQkFBQ1AsU0FBUyxFQUFFSiwrREFBUTs4QkFBR0UsSUFBSSxDQUFDVSxJQUFJOzs7Ozt5QkFBUTs7Ozs7O2lCQUN6Qzs7Ozs7YUFDRixDQUNOO0NBQ0g7QUFiS1gsS0FBQUEsSUFBSTtBQWVWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkLnRzeD83YjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcIi4vQ2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkUHJvcHMgfSBmcm9tIFwiLi9DYXJkLnByb3B0eXBlc1wiO1xyXG5cclxuY29uc3QgQ2FyZDogRnVuY3Rpb25Db21wb25lbnQ8Q2FyZFByb3BzPiA9ICh7IC4uLmNhcmQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaW5uZXJDb250YWluZXJ9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17Y2FyZC5pbWFnZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmltYWdlfVxyXG4gICAgICAgICAgYWx0PVwiZHZkIHNjcmVlbnNhdmVyIG1pbmlnYW1lXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3NzLnRleHR9PntjYXJkLnRleHR9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXSwibmFtZXMiOlsiY3NzIiwiQ2FyZCIsImNhcmQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbm5lckNvbnRhaW5lciIsImltZyIsInNyYyIsImltYWdlIiwiYWx0Iiwic3BhbiIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Card/Card.tsx\n"));

/***/ })

});