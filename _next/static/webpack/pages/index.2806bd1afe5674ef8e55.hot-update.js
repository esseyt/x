webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/FileManager/IconsView.tsx":
/*!*****************************************************!*\
  !*** ./components/System/FileManager/IconsView.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime.js */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_FileManager_IconsView_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/FileManager/IconsView.module.scss */ \"./styles/System/FileManager/IconsView.module.scss\");\n/* harmony import */ var _styles_System_FileManager_IconsView_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_FileManager_IconsView_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_System_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/Icon */ \"./components/System/Icon.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/FileManager/IconsView.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar DirectoryIcons = function DirectoryIcons(_ref) {\n  _s();\n\n  var entries = _ref.entries,\n      onDoubleClick = _ref.onDoubleClick;\n  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useRef\"])(null);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"nav\", {\n    className: _styles_System_FileManager_IconsView_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.directoryIcons,\n    ref: navRef,\n    tabIndex: -1,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ol\", {\n      tabIndex: -1,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"AnimatePresence\"], {\n        children: entries.map(function (_ref2) {\n          var icon = _ref2.icon,\n              name = _ref2.name,\n              kind = _ref2.kind,\n              path = _ref2.path,\n              url = _ref2.url;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].li, _objectSpread(_objectSpread(_objectSpread({\n            drag: true,\n            dragConstraints: navRef,\n            onClick: new _utils_events__WEBPACK_IMPORTED_MODULE_5__[\"ClickHandler\"]({\n              doubleClick: onDoubleClick({\n                path: path,\n                url: url,\n                icon: icon,\n                name: name\n              })\n            }).clickHandler,\n            tabIndex: -1,\n            title: \"\".concat(name).concat(kind ? \"\\r\\nType: \".concat(kind) : '')\n          }, _utils_motions__WEBPACK_IMPORTED_MODULE_6__[\"desktopIconDragSettings\"]), _utils_motions__WEBPACK_IMPORTED_MODULE_6__[\"desktopIconMotionSettings\"]), {}, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"figure\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_System_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                src: icon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"figcaption\", {\n                children: name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, _this)\n          }), path, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DirectoryIcons, \"rHA/vuAAXoiUfw/iUIRJEHlIXI0=\");\n\n_c = DirectoryIcons;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DirectoryIcons);\n\nvar _c;\n\n$RefreshReg$(_c, \"DirectoryIcons\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvSWNvbnNWaWV3LnRzeD9jNjIwIl0sIm5hbWVzIjpbIkRpcmVjdG9yeUljb25zIiwiZW50cmllcyIsIm9uRG91YmxlQ2xpY2siLCJuYXZSZWYiLCJ1c2VSZWYiLCJzdHlsZXMiLCJkaXJlY3RvcnlJY29ucyIsIm1hcCIsImljb24iLCJuYW1lIiwia2luZCIsInBhdGgiLCJ1cmwiLCJDbGlja0hhbmRsZXIiLCJkb3VibGVDbGljayIsImNsaWNrSGFuZGxlciIsImRlc2t0b3BJY29uRHJhZ1NldHRpbmdzIiwiZGVza3RvcEljb25Nb3Rpb25TZXR0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBRUEsSUFBTUEsY0FBdUMsR0FBRyxTQUExQ0EsY0FBMEMsT0FHMUM7QUFBQTs7QUFBQSxNQUZKQyxPQUVJLFFBRkpBLE9BRUk7QUFBQSxNQURKQyxhQUNJLFFBREpBLGFBQ0k7QUFDSixNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQWMsSUFBZCxDQUFyQjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx1RkFBTSxDQUFDQyxjQUF2QjtBQUF1QyxPQUFHLEVBQUVILE1BQTVDO0FBQW9ELFlBQVEsRUFBRSxDQUFDLENBQS9EO0FBQUEsMkJBQ0U7QUFBSSxjQUFRLEVBQUUsQ0FBQyxDQUFmO0FBQUEsNkJBQ0Usd0VBQUMsNkRBQUQ7QUFBQSxrQkFDR0YsT0FBTyxDQUFDTSxHQUFSLENBQVk7QUFBQSxjQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxjQUFTQyxJQUFULFNBQVNBLElBQVQ7QUFBQSxjQUFlQyxJQUFmLFNBQWVBLElBQWY7QUFBQSxjQUFxQkMsSUFBckIsU0FBcUJBLElBQXJCO0FBQUEsY0FBMkJDLEdBQTNCLFNBQTJCQSxHQUEzQjtBQUFBLDhCQUNYLHdFQUFDLG9EQUFELENBQVEsRUFBUjtBQUVFLGdCQUFJLE1BRk47QUFHRSwyQkFBZSxFQUFFVCxNQUhuQjtBQUlFLG1CQUFPLEVBQ0wsSUFBSVUsMERBQUosQ0FBaUI7QUFDZkMseUJBQVcsRUFBRVosYUFBYSxDQUFDO0FBQUVTLG9CQUFJLEVBQUpBLElBQUY7QUFBUUMsbUJBQUcsRUFBSEEsR0FBUjtBQUFhSixvQkFBSSxFQUFKQSxJQUFiO0FBQW1CQyxvQkFBSSxFQUFKQTtBQUFuQixlQUFEO0FBRFgsYUFBakIsRUFFR00sWUFQUDtBQVNFLG9CQUFRLEVBQUUsQ0FBQyxDQVRiO0FBVUUsaUJBQUssWUFBS04sSUFBTCxTQUFZQyxJQUFJLHVCQUFnQkEsSUFBaEIsSUFBeUIsRUFBekM7QUFWUCxhQVdNTSxzRUFYTixHQVlNQyx3RUFaTjtBQUFBLG1DQWNFO0FBQUEsc0NBQ0Usd0VBQUMsK0RBQUQ7QUFBTSxtQkFBRyxFQUFFVDtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLDBCQUFhQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZEYsY0FDT0UsSUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURXO0FBQUEsU0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkJELENBbkNEOztHQUFNWCxjOztLQUFBQSxjO0FBcUNTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0ljb25zVmlldy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9GaWxlTWFuYWdlci9JY29uc1ZpZXcubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IERpcmVjdG9yeVZpZXcgfSBmcm9tICdAL3R5cGVzL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0ZpbGVNYW5hZ2VyJztcblxuaW1wb3J0IEljb24gZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9JY29uJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBDbGlja0hhbmRsZXIgfSBmcm9tICdAL3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQge1xuICBkZXNrdG9wSWNvbkRyYWdTZXR0aW5ncyxcbiAgZGVza3RvcEljb25Nb3Rpb25TZXR0aW5nc1xufSBmcm9tICdAL3V0aWxzL21vdGlvbnMnO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBEaXJlY3RvcnlJY29uczogUmVhY3QuRkM8RGlyZWN0b3J5Vmlldz4gPSAoe1xuICBlbnRyaWVzLFxuICBvbkRvdWJsZUNsaWNrXG59KSA9PiB7XG4gIGNvbnN0IG5hdlJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmRpcmVjdG9yeUljb25zfSByZWY9e25hdlJlZn0gdGFiSW5kZXg9ey0xfT5cbiAgICAgIDxvbCB0YWJJbmRleD17LTF9PlxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIHtlbnRyaWVzLm1hcCgoeyBpY29uLCBuYW1lLCBraW5kLCBwYXRoLCB1cmwgfSkgPT4gKFxuICAgICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgICAgIGRyYWdcbiAgICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXtuYXZSZWZ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgIG5ldyBDbGlja0hhbmRsZXIoe1xuICAgICAgICAgICAgICAgICAgZG91YmxlQ2xpY2s6IG9uRG91YmxlQ2xpY2soeyBwYXRoLCB1cmwsIGljb24sIG5hbWUgfSlcbiAgICAgICAgICAgICAgICB9KS5jbGlja0hhbmRsZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgIHRpdGxlPXtgJHtuYW1lfSR7a2luZCA/IGBcXHJcXG5UeXBlOiAke2tpbmR9YCA6ICcnfWB9XG4gICAgICAgICAgICAgIHsuLi5kZXNrdG9wSWNvbkRyYWdTZXR0aW5nc31cbiAgICAgICAgICAgICAgey4uLmRlc2t0b3BJY29uTW90aW9uU2V0dGluZ3N9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgPEljb24gc3JjPXtpY29ufSAvPlxuICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPntuYW1lfTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICA8L29sPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0b3J5SWNvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/FileManager/IconsView.tsx\n");

/***/ })

})