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

/***/ "./src/components/CssKey/CssKey.tsx":
/*!******************************************!*\
  !*** ./src/components/CssKey/CssKey.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CssKey.module.scss */ \"./src/components/CssKey/CssKey.module.scss\");\n/* harmony import */ var _CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar CssKey = function(param) {\n    var keyString = param.keyString;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), color = ref[0], setColor = ref[1];\n    var randomColor = function() {\n        setColor(Math.floor(Math.random() * 359));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        randomColor();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mainContainer),\n        style: {\n            filter: \"hue-rotate(\".concat(color, \"deg)\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),\n                onClick: function() {\n                    return randomColor();\n                },\n                children: \"try me\"\n            }, void 0, false, {\n                fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\CssKey\\\\CssKey.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default().secondaryContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default().keyboardContainer)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\CssKey\\\\CssKey.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default().keyboardBottom)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\CssKey\\\\CssKey.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    keyString.length > 0 && keyString.split(\"\").map(function(keyCap) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default().keyContainer),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default().keyLeft)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\CssKey\\\\CssKey.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default().keyCap),\n                                    children: keyCap\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\CssKey\\\\CssKey.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default().keyRight)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\CssKey\\\\CssKey.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default().keyBottom)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\CssKey\\\\CssKey.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_CssKey_module_scss__WEBPACK_IMPORTED_MODULE_2___default().keyTop)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\CssKey\\\\CssKey.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\CssKey\\\\CssKey.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\CssKey\\\\CssKey.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\users\\\\Documents\\\\GitHub\\\\afjaimes\\\\src\\\\components\\\\CssKey\\\\CssKey.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(CssKey, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = CssKey;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CssKey);\nvar _c;\n$RefreshReg$(_c, \"CssKey\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Dc3NLZXkvQ3NzS2V5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXVDO0FBQ3dCOztBQUcvRCxJQUFNRyxNQUFNLEdBQW1DLGdCQUFtQjtRQUFoQkMsU0FBUyxTQUFUQSxTQUFTOzs7SUFDekQsSUFBMEJGLEdBQW1CLEdBQW5CQSwrQ0FBUSxDQUFTLENBQUMsQ0FBQyxFQUF0Q0csS0FBSyxHQUFjSCxHQUFtQixHQUFqQyxFQUFFSSxRQUFRLEdBQUlKLEdBQW1CLEdBQXZCO0lBQ3RCLElBQU1LLFdBQVcsR0FBRyxXQUFNO1FBQ3hCRCxRQUFRLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0M7SUFDRFQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RNLFdBQVcsRUFBRSxDQUFDO0tBQ2YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFLDhEQUFDSSxLQUFHO1FBQ0ZDLFNBQVMsRUFBRVosMEVBQWlCO1FBQzVCYyxLQUFLLEVBQUU7WUFBRUMsTUFBTSxFQUFFLGFBQVksQ0FBUSxNQUFJLENBQVZWLEtBQUssRUFBQyxNQUFJLENBQUM7U0FBRTs7MEJBRTVDLDhEQUFDTSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVaLG1FQUFVO2dCQUFFaUIsT0FBTyxFQUFFOzJCQUFNVixXQUFXLEVBQUU7aUJBQUE7MEJBQUUsUUFFMUQ7Ozs7O3FCQUFNOzBCQUNOLDhEQUFDSSxLQUFHO2dCQUNGQyxTQUFTLEVBQUVaLCtFQUFzQjs7a0NBRWpDLDhEQUFDVyxLQUFHO3dCQUFDQyxTQUFTLEVBQUVaLDhFQUFxQjs7Ozs7NkJBQUk7a0NBQ3pDLDhEQUFDVyxLQUFHO3dCQUFDQyxTQUFTLEVBQUVaLDJFQUFrQjs7Ozs7NkJBQUk7b0JBRXJDSSxTQUFTLENBQUNpQixNQUFNLEdBQUcsQ0FBQyxJQUNuQmpCLFNBQVMsQ0FBQ2tCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLE1BQU07NkNBQzdCLDhEQUFDYixLQUFHOzRCQUFDQyxTQUFTLEVBQUVaLHlFQUFnQjs7OENBQzlCLDhEQUFDVyxLQUFHO29DQUFDQyxTQUFTLEVBQUVaLG9FQUFXOzs7OzswQ0FBSTs4Q0FDL0IsOERBQUNXLEtBQUc7b0NBQUNDLFNBQVMsRUFBRVosbUVBQVU7OENBQUd3QixNQUFNOzs7OzswQ0FBTzs4Q0FDMUMsOERBQUNiLEtBQUc7b0NBQUNDLFNBQVMsRUFBRVoscUVBQVk7Ozs7OzBDQUFJOzhDQUNoQyw4REFBQ1csS0FBRztvQ0FBQ0MsU0FBUyxFQUFFWixzRUFBYTs7Ozs7MENBQUk7OENBQ2pDLDhEQUFDVyxLQUFHO29DQUFDQyxTQUFTLEVBQUVaLG1FQUFVOzs7OzswQ0FBSTs7Ozs7O2tDQUMxQjtxQkFDUCxDQUFDOzs7Ozs7cUJBQ0E7Ozs7OzthQUNGLENBQ047Q0FDSDtHQW5DS0csTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBcUNaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3NzS2V5L0Nzc0tleS50c3g/YTFhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCIuL0Nzc0tleS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDc3NLZXlQcm9wcyB9IGZyb20gXCIuL0Nzc0tleS5wcm90b3R5cGVzXCI7XHJcblxyXG5jb25zdCBDc3NLZXk6IEZ1bmN0aW9uQ29tcG9uZW50PENzc0tleVByb3BzPiA9ICh7IGtleVN0cmluZyB9KSA9PiB7XHJcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gIGNvbnN0IHJhbmRvbUNvbG9yID0gKCkgPT4ge1xyXG4gICAgc2V0Q29sb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzU5KSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmFuZG9tQ29sb3IoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjc3MubWFpbkNvbnRhaW5lcn1cclxuICAgICAgc3R5bGU9e3sgZmlsdGVyOiBgaHVlLXJvdGF0ZSgke2NvbG9yfWRlZylgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiByYW5kb21Db2xvcigpfT5cclxuICAgICAgICB0cnkgbWVcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Nzcy5zZWNvbmRhcnlDb250YWluZXJ9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmtleWJvYXJkQ29udGFpbmVyfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Mua2V5Ym9hcmRCb3R0b219IC8+XHJcblxyXG4gICAgICAgIHtrZXlTdHJpbmcubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAga2V5U3RyaW5nLnNwbGl0KFwiXCIpLm1hcCgoa2V5Q2FwKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Mua2V5Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmtleUxlZnR9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5rZXlDYXB9PntrZXlDYXB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5rZXlSaWdodH0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmtleUJvdHRvbX0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmtleVRvcH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3NzS2V5O1xyXG4iXSwibmFtZXMiOlsiY3NzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDc3NLZXkiLCJrZXlTdHJpbmciLCJjb2xvciIsInNldENvbG9yIiwicmFuZG9tQ29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluQ29udGFpbmVyIiwic3R5bGUiLCJmaWx0ZXIiLCJidXR0b24iLCJvbkNsaWNrIiwic2Vjb25kYXJ5Q29udGFpbmVyIiwia2V5Ym9hcmRDb250YWluZXIiLCJrZXlib2FyZEJvdHRvbSIsImxlbmd0aCIsInNwbGl0IiwibWFwIiwia2V5Q2FwIiwia2V5Q29udGFpbmVyIiwia2V5TGVmdCIsImtleVJpZ2h0Iiwia2V5Qm90dG9tIiwia2V5VG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CssKey/CssKey.tsx\n"));

/***/ })

});