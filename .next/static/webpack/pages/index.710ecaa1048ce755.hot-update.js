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

/***/ "./src/components/Experience/Header/Header.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Experience/Header/Header.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_extends.mjs */ \"./node_modules/@swc/helpers/src/_extends.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.scss */ \"./src/components/Experience/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\n\nvar Header = function(_param) {\n    var job = (0,_swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _param);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \" \",\n                    job.initialDate\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Experience\\\\Header\\\\Header.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"<=>\"\n            }, void 0, false, {\n                fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Experience\\\\Header\\\\Header.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().colorBlueLight),\n                children: job.finalDate\n            }, void 0, false, {\n                fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Experience\\\\Header\\\\Header.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Experience\\\\Header\\\\Header.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            job.job\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\Experience\\\\Header\\\\Header.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL0hlYWRlci9IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBdUM7QUFJdkMsSUFBTUMsTUFBTSxHQUFtQyxpQkFBZ0I7UUFBVkMsR0FBRztJQUN0RCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVKLHNFQUFhOzswQkFDM0IsOERBQUNNLE1BQUk7O29CQUFDLEdBQUM7b0JBQUNKLEdBQUcsQ0FBQ0ssV0FBVzs7Ozs7O3FCQUFROzBCQUMvQiw4REFBQ0QsTUFBSTswQkFBRSxLQUFLOzs7OztxQkFBUTswQkFDcEIsOERBQUNBLE1BQUk7Z0JBQUNGLFNBQVMsRUFBRUosMkVBQWtCOzBCQUFHRSxHQUFHLENBQUNPLFNBQVM7Ozs7O3FCQUFROzBCQUMzRCw4REFBQ0MsSUFBRTs7OztxQkFBRTtZQUNKUixHQUFHLENBQUNBLEdBQUc7Ozs7OzthQUNKLENBQ047Q0FDSDtBQVZLRCxLQUFBQSxNQUFNO0FBWVosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL0hlYWRlci9IZWFkZXIudHN4P2VmODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi9IZWFkZXIucHJvcHR5cGVzXCI7XHJcblxyXG5jb25zdCBIZWFkZXI6IEZ1bmN0aW9uQ29tcG9uZW50PEhlYWRlclByb3BzPiA9ICh7IC4uLmpvYiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cclxuICAgICAgPHNwYW4+IHtqb2IuaW5pdGlhbERhdGV9PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57XCI8PT5cIn08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3NzLmNvbG9yQmx1ZUxpZ2h0fT57am9iLmZpbmFsRGF0ZX08L3NwYW4+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIHtqb2Iuam9ifVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbImNzcyIsIkhlYWRlciIsImpvYiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInNwYW4iLCJpbml0aWFsRGF0ZSIsImNvbG9yQmx1ZUxpZ2h0IiwiZmluYWxEYXRlIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Experience/Header/Header.tsx\n"));

/***/ })

});