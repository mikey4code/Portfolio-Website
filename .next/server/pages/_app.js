(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.js");


var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\Portfolio_Website\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_theme__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./src/styles/globals.js":
/*!*******************************!*\
  !*** ./src/styles/globals.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ "styled-normalize");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);


const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .read-more-less--more,
  .read-more-less--less {
    color: #999;
  }
  #see {
    color: #999;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/default */ "./src/themes/default.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ "./src/styles/globals.js");

var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\Portfolio_Website\\src\\styles\\theme.js";




const Theme = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
  theme: _themes_default__WEBPACK_IMPORTED_MODULE_2__.default,
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_globals__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), children]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Theme);

/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)"
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }
});

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-normalize");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9zdHlsZXMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3RoZW1lcy9kZWZhdWx0LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwic3R5bGVkLW5vcm1hbGl6ZVwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwibm9ybWFsaXplIiwicHJvcHMiLCJ0aGVtZSIsImZvbnRzIiwibWFpbiIsImNvbG9ycyIsImJhY2tncm91bmQxIiwicHJpbWFyeTEiLCJ0aXRsZSIsIlRoZW1lIiwiY2hpbGRyZW4iLCJhY2NlbnQxIiwiYnV0dG9uIiwiYmFja2dyb3VuZDIiLCJicmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUNwRCxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ0E7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLGdFQUFrQjtBQUN2QyxJQUFJQyx1REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkMsSUFBSztBQUNuRDtBQUNBLGtCQUFrQkgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkMsV0FBWTtBQUMxRCxhQUFhTCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CRSxRQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CTixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFaLENBQWtCSyxLQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBekNBO0FBMkNBLCtEQUFlVixZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNVyxLQUFLLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsa0JBQ1osOERBQUMsNERBQUQ7QUFBZSxPQUFLLEVBQUVSLG9EQUF0QjtBQUFBLDBCQUNFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHUSxRQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQU9BLCtEQUFlRCxLQUFmLEU7Ozs7Ozs7Ozs7OztBQ1pBLCtEQUFlO0FBQ2I7QUFDQU4sT0FBSyxFQUFFO0FBQ0xLLFNBQUssRUFBRSwyQkFERjtBQUVMSixRQUFJLEVBQUU7QUFGRCxHQUZNO0FBTWI7QUFDQUMsUUFBTSxFQUFFO0FBQ05FLFlBQVEsRUFBRSxzQkFESjtBQUVORCxlQUFXLEVBQUUsU0FGUDtBQUdOSyxXQUFPLEVBQUUsdUJBSEg7QUFJTkMsVUFBTSxFQUFFLHVCQUpGO0FBS05DLGVBQVcsRUFBRTtBQUxQLEdBUEs7QUFjYjtBQUNBQyxhQUFXLEVBQUU7QUFDWEMsTUFBRSxFQUFFLCtCQURPO0FBRVhDLE1BQUUsRUFBRSwrQkFGTztBQUdYQyxNQUFFLEVBQUUsZ0NBSE87QUFJWEMsTUFBRSxFQUFFO0FBSk87QUFmQSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUaGVtZT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiAiLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ3N0eWxlZC1ub3JtYWxpemUnO1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgJHtub3JtYWxpemV9O1xuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcblxuICB9XG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRzLm1haW59O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmQxfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeTF9O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICB9XG4gIGgxLGgyLGgzLGg0LGg1LGg2LGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udHMudGl0bGV9O1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBsaXtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIC5yZWFkLW1vcmUtbGVzcy0tbW9yZSxcbiAgLnJlYWQtbW9yZS1sZXNzLS1sZXNzIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxuICAjc2VlIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzOyIsImltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVzL2RlZmF1bHRcIjtcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi9nbG9iYWxzJztcblxuY29uc3QgVGhlbWUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9UaGVtZVByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlbWU7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAvLyBUZW1wIGZvbnRzXG4gIGZvbnRzOiB7XG4gICAgdGl0bGU6IFwiU3BhY2UgR3JvdGVzaywgc2Fucy1zZXJpZlwiLFxuICAgIG1haW46IFwiU3BhY2UgR3JvdGVzaywgc2Fucy1zZXJpZlwiXG4gIH0sXG4gIC8vIENvbG9ycyBmb3IgbGF5b3V0XG4gIGNvbG9yczoge1xuICAgIHByaW1hcnkxOiBcImhzbCgyMDQsMjMuOCUsOTUuOSUpXCIsXG4gICAgYmFja2dyb3VuZDE6IFwiIzBGMTYyNFwiLFxuICAgIGFjY2VudDE6IFwiaHNsKDM0LjksOTguNiUsNzIuOSUpXCIsXG4gICAgYnV0dG9uOiBcImhzbCgyMDUuMSwxMDAlLDM2LjElKVwiLFxuICAgIGJhY2tncm91bmQyOiBcImhzbCgyMzIuNywyNy4zJSwyMy43JSlcIixcbiAgfSxcbiAgLy8gQnJlYWtwb2ludHMgZm9yIHJlc3BvbnNpdmUgZGVzaWduXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgc206ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KScsXG4gICAgbWQ6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KScsXG4gICAgbGc6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCknLFxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpJ1xuICB9LFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLW5vcm1hbGl6ZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==