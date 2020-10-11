webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Programs/Dos.tsx":
/*!*************************************!*\
  !*** ./components/Programs/Dos.tsx ***!
  \*************************************/
/*! exports provided: default, loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderOptions\", function() { return loaderOptions; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Programs_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Programs/Dos.module.scss */ \"./styles/Programs/Dos.module.scss\");\n/* harmony import */ var _styles_Programs_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Programs_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_dos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/dos */ \"./utils/dos.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/Programs/Dos.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar defaultDimensions = {\n  width: 640,\n  height: 400 + _utils_constants__WEBPACK_IMPORTED_MODULE_6__[\"TITLEBAR_HEIGHT\"]\n};\nvar dosOptions = {\n  wdosboxUrl: '/libs/wdosbox.js',\n\n  /* eslint @typescript-eslint/no-empty-function: off */\n  onprogress: function onprogress() {}\n};\n\nvar Dos = function Dos(_ref) {\n  _s();\n\n  var _ref$args = _ref.args,\n      args = _ref$args === void 0 ? ['-c', 'CLS'] : _ref$args,\n      _ref$file = _ref.file;\n  _ref$file = _ref$file === void 0 ? {} : _ref$file;\n  var url = _ref$file.url,\n      _ref$file$name = _ref$file.name,\n      name = _ref$file$name === void 0 ? '' : _ref$file$name,\n      maximized = _ref.maximized;\n  var ci;\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var loadMain = function loadMain(main) {\n    var prependedArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    return main([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prependedArgs), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(args))).then(function (value) {\n      ci = value;\n    });\n  };\n\n  var loadDos = function loadDos(_ref2) {\n    var fs = _ref2.fs,\n        main = _ref2.main;\n\n    if (url) {\n      var appPath = name.replace(/ /g, '').substring(0, 8);\n      fs.extract(url, appPath).then(function () {\n        return loadMain(main, ['-c', \"CD \".concat(appPath)]);\n      });\n    } else {\n      loadMain(main);\n    }\n  };\n\n  var maximizedStyle = maximized ? Object(_utils_dos__WEBPACK_IMPORTED_MODULE_5__[\"getLockedAspectRatioDimensions\"])(defaultDimensions.width, defaultDimensions.height) : {};\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var _ref3 = canvasRef,\n        canvasElement = _ref3.current;\n    var _ref4 = window,\n        DosModule = _ref4.Dos;\n    DosModule(canvasElement, dosOptions).then(loadDos);\n    return function () {\n      var _ci;\n\n      (_ci = ci) === null || _ci === void 0 ? void 0 : _ci.exit();\n    };\n  }, []);\n  /* eslint global-require: off */\n\n  __webpack_require__(/*! js-dos */ \"./node_modules/js-dos/dist/js-dos.js\");\n\n  return __jsx(\"div\", {\n    className: _styles_Programs_Dos_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dos,\n    style: maximizedStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"canvas\", {\n    onTouchStart: Object(_utils_elements__WEBPACK_IMPORTED_MODULE_4__[\"focusClosestFocusableElementFromRef\"])(canvasRef),\n    onClick: Object(_utils_elements__WEBPACK_IMPORTED_MODULE_4__[\"focusClosestFocusableElementFromRef\"])(canvasRef),\n    ref: canvasRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Dos, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n\n_c = Dos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dos);\nvar loaderOptions = _objectSpread({\n  lockAspectRatio: true,\n  bgColor: '#000000'\n}, defaultDimensions);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmFtcy9Eb3MudHN4Pzk5OTkiXSwibmFtZXMiOlsiZGVmYXVsdERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsIlRJVExFQkFSX0hFSUdIVCIsImRvc09wdGlvbnMiLCJ3ZG9zYm94VXJsIiwib25wcm9ncmVzcyIsIkRvcyIsImFyZ3MiLCJmaWxlIiwidXJsIiwibmFtZSIsIm1heGltaXplZCIsImNpIiwiY2FudmFzUmVmIiwidXNlUmVmIiwibG9hZE1haW4iLCJtYWluIiwicHJlcGVuZGVkQXJncyIsInRoZW4iLCJ2YWx1ZSIsImxvYWREb3MiLCJmcyIsImFwcFBhdGgiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwiZXh0cmFjdCIsIm1heGltaXplZFN0eWxlIiwiZ2V0TG9ja2VkQXNwZWN0UmF0aW9EaW1lbnNpb25zIiwidXNlRWZmZWN0IiwiY2FudmFzRWxlbWVudCIsImN1cnJlbnQiLCJ3aW5kb3ciLCJEb3NNb2R1bGUiLCJleGl0IiwicmVxdWlyZSIsInN0eWxlcyIsImRvcyIsImZvY3VzQ2xvc2VzdEZvY3VzYWJsZUVsZW1lbnRGcm9tUmVmIiwibG9hZGVyT3B0aW9ucyIsImxvY2tBc3BlY3RSYXRpbyIsImJnQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUc7QUFDeEJDLE9BQUssRUFBRSxHQURpQjtBQUV4QkMsUUFBTSxFQUFFLE1BQU1DLGdFQUFlQTtBQUZMLENBQTFCO0FBS0EsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxZQUFVLEVBQUUsa0JBREs7O0FBRWpCO0FBQ0FDLFlBQVUsRUFBRSxzQkFBTSxDQUFFO0FBSEgsQ0FBbkI7O0FBTUEsSUFBTUMsR0FBMkIsR0FBRyxTQUE5QkEsR0FBOEIsT0FJOUI7QUFBQTs7QUFBQSx1QkFISkMsSUFHSTtBQUFBLE1BSEpBLElBR0ksMEJBSEcsQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUdIO0FBQUEsdUJBRkpDLElBRUk7QUFBQSxxQ0FGdUIsRUFFdkI7QUFBQSxNQUZJQyxHQUVKLGFBRklBLEdBRUo7QUFBQSxpQ0FGU0MsSUFFVDtBQUFBLE1BRlNBLElBRVQsK0JBRmdCLEVBRWhCO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJO0FBQ0osTUFBSUMsRUFBSjtBQUNBLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBb0IsSUFBcEIsQ0FBeEI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLFFBQWtCQyxhQUFsQix1RUFBNEMsRUFBNUM7QUFBQSxXQUNmRCxJQUFJLHdHQUFLQyxhQUFMLGdHQUF1QlYsSUFBdkIsR0FBSixDQUFrQ1csSUFBbEMsQ0FBdUMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hEUCxRQUFFLEdBQUdPLEtBQUw7QUFDRCxLQUZELENBRGU7QUFBQSxHQUFqQjs7QUFJQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUE4QjtBQUFBLFFBQTNCQyxFQUEyQixTQUEzQkEsRUFBMkI7QUFBQSxRQUF2QkwsSUFBdUIsU0FBdkJBLElBQXVCOztBQUM1QyxRQUFJUCxHQUFKLEVBQVM7QUFDUCxVQUFNYSxPQUFPLEdBQUdaLElBQUksQ0FBQ2EsT0FBTCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsRUFBdUJDLFNBQXZCLENBQWlDLENBQWpDLEVBQW9DLENBQXBDLENBQWhCO0FBRUFILFFBQUUsQ0FBQ0ksT0FBSCxDQUFXaEIsR0FBWCxFQUFnQmEsT0FBaEIsRUFBeUJKLElBQXpCLENBQThCO0FBQUEsZUFDNUJILFFBQVEsQ0FBQ0MsSUFBRCxFQUFPLENBQUMsSUFBRCxlQUFhTSxPQUFiLEVBQVAsQ0FEb0I7QUFBQSxPQUE5QjtBQUdELEtBTkQsTUFNTztBQUNMUCxjQUFRLENBQUNDLElBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FWRDs7QUFXQSxNQUFNVSxjQUFjLEdBQUdmLFNBQVMsR0FDNUJnQixpRkFBOEIsQ0FBQzVCLGlCQUFpQixDQUFDQyxLQUFuQixFQUEwQkQsaUJBQWlCLENBQUNFLE1BQTVDLENBREYsR0FFNUIsRUFGSjtBQUlBMkIseURBQVMsQ0FBQyxZQUFNO0FBQUEsZ0JBQ3FCZixTQURyQjtBQUFBLFFBQ0dnQixhQURILFNBQ05DLE9BRE07QUFBQSxnQkFJYUMsTUFKYjtBQUFBLFFBSURDLFNBSkMsU0FJTjFCLEdBSk07QUFNZDBCLGFBQVMsQ0FBQ0gsYUFBRCxFQUFnQjFCLFVBQWhCLENBQVQsQ0FBcUNlLElBQXJDLENBQTBDRSxPQUExQztBQUVBLFdBQU8sWUFBTTtBQUFBOztBQUNYLGFBQUFSLEVBQUUsVUFBRixrQ0FBSXFCLElBQUo7QUFDRCxLQUZEO0FBR0QsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBOztBQUNBQyxxQkFBTyxDQUFDLG9EQUFELENBQVA7O0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsdUVBQU0sQ0FBQ0MsR0FBdkI7QUFBNEIsU0FBSyxFQUFFVixjQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxnQkFBWSxFQUFFVywyRkFBbUMsQ0FBQ3hCLFNBQUQsQ0FEbkQ7QUFFRSxXQUFPLEVBQUV3QiwyRkFBbUMsQ0FBQ3hCLFNBQUQsQ0FGOUM7QUFHRSxPQUFHLEVBQUVBLFNBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFTRCxDQW5ERDs7R0FBTVAsRzs7S0FBQUEsRztBQXFEU0Esa0VBQWY7QUFFTyxJQUFNZ0MsYUFBYTtBQUN4QkMsaUJBQWUsRUFBRSxJQURPO0FBRXhCQyxTQUFPLEVBQUU7QUFGZSxHQUdyQnpDLGlCQUhxQixDQUFuQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZ3JhbXMvRG9zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvUHJvZ3JhbXMvRG9zLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAL3R5cGVzL3V0aWxzL3Byb2dyYW1zJztcbmltcG9ydCB0eXBlIHsgRG9zQ29tbWFuZEludGVyZmFjZSB9IGZyb20gJ2pzLWRvcy9kaXN0L3R5cGVzY3JpcHQvanMtZG9zLWNpJztcbmltcG9ydCB0eXBlIHsgRG9zTWFpbkZuLCBEb3NSdW50aW1lIH0gZnJvbSAnanMtZG9zJztcbmltcG9ydCB0eXBlIHsgV2luZG93V2l0aERvc01vZHVsZSB9IGZyb20gJ0AvdHlwZXMvY29tcG9uZW50cy9Qcm9ncmFtcy9kb3MnO1xuXG5pbXBvcnQgeyBmb2N1c0Nsb3Nlc3RGb2N1c2FibGVFbGVtZW50RnJvbVJlZiB9IGZyb20gJ0AvdXRpbHMvZWxlbWVudHMnO1xuaW1wb3J0IHsgZ2V0TG9ja2VkQXNwZWN0UmF0aW9EaW1lbnNpb25zIH0gZnJvbSAnQC91dGlscy9kb3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUSVRMRUJBUl9IRUlHSFQgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IGRlZmF1bHREaW1lbnNpb25zID0ge1xuICB3aWR0aDogNjQwLFxuICBoZWlnaHQ6IDQwMCArIFRJVExFQkFSX0hFSUdIVFxufTtcblxuY29uc3QgZG9zT3B0aW9ucyA9IHtcbiAgd2Rvc2JveFVybDogJy9saWJzL3dkb3Nib3guanMnLFxuICAvKiBlc2xpbnQgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uOiBvZmYgKi9cbiAgb25wcm9ncmVzczogKCkgPT4ge31cbn07XG5cbmNvbnN0IERvczogUmVhY3QuRkM8QXBwQ29tcG9uZW50PiA9ICh7XG4gIGFyZ3MgPSBbJy1jJywgJ0NMUyddLFxuICBmaWxlOiB7IHVybCwgbmFtZSA9ICcnIH0gPSB7fSxcbiAgbWF4aW1pemVkXG59KSA9PiB7XG4gIGxldCBjaTogRG9zQ29tbWFuZEludGVyZmFjZTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgY29uc3QgbG9hZE1haW4gPSAobWFpbjogRG9zTWFpbkZuLCBwcmVwZW5kZWRBcmdzOiBzdHJpbmdbXSA9IFtdKSA9PlxuICAgIG1haW4oWy4uLnByZXBlbmRlZEFyZ3MsIC4uLmFyZ3NdKS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgY2kgPSB2YWx1ZTtcbiAgICB9KTtcbiAgY29uc3QgbG9hZERvcyA9ICh7IGZzLCBtYWluIH06IERvc1J1bnRpbWUpID0+IHtcbiAgICBpZiAodXJsKSB7XG4gICAgICBjb25zdCBhcHBQYXRoID0gbmFtZS5yZXBsYWNlKC8gL2csICcnKS5zdWJzdHJpbmcoMCwgOCk7XG5cbiAgICAgIGZzLmV4dHJhY3QodXJsLCBhcHBQYXRoKS50aGVuKCgpID0+XG4gICAgICAgIGxvYWRNYWluKG1haW4sIFsnLWMnLCBgQ0QgJHthcHBQYXRofWBdKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9hZE1haW4obWFpbik7XG4gICAgfVxuICB9O1xuICBjb25zdCBtYXhpbWl6ZWRTdHlsZSA9IG1heGltaXplZFxuICAgID8gZ2V0TG9ja2VkQXNwZWN0UmF0aW9EaW1lbnNpb25zKGRlZmF1bHREaW1lbnNpb25zLndpZHRoLCBkZWZhdWx0RGltZW5zaW9ucy5oZWlnaHQpXG4gICAgOiB7fTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudDogY2FudmFzRWxlbWVudCB9ID0gY2FudmFzUmVmIGFzIHtcbiAgICAgIGN1cnJlbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIH07XG4gICAgY29uc3QgeyBEb3M6IERvc01vZHVsZSB9ID0gd2luZG93IGFzIFdpbmRvd1dpdGhEb3NNb2R1bGU7XG5cbiAgICBEb3NNb2R1bGUoY2FudmFzRWxlbWVudCwgZG9zT3B0aW9ucykudGhlbihsb2FkRG9zKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjaT8uZXhpdCgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvKiBlc2xpbnQgZ2xvYmFsLXJlcXVpcmU6IG9mZiAqL1xuICByZXF1aXJlKCdqcy1kb3MnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG9zfSBzdHlsZT17bWF4aW1pemVkU3R5bGV9PlxuICAgICAgPGNhbnZhc1xuICAgICAgICBvblRvdWNoU3RhcnQ9e2ZvY3VzQ2xvc2VzdEZvY3VzYWJsZUVsZW1lbnRGcm9tUmVmKGNhbnZhc1JlZil9XG4gICAgICAgIG9uQ2xpY2s9e2ZvY3VzQ2xvc2VzdEZvY3VzYWJsZUVsZW1lbnRGcm9tUmVmKGNhbnZhc1JlZil9XG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvcztcblxuZXhwb3J0IGNvbnN0IGxvYWRlck9wdGlvbnMgPSB7XG4gIGxvY2tBc3BlY3RSYXRpbzogdHJ1ZSxcbiAgYmdDb2xvcjogJyMwMDAwMDAnLFxuICAuLi5kZWZhdWx0RGltZW5zaW9uc1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Programs/Dos.tsx\n");

/***/ })

})