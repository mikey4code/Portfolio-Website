self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\Portfolio_Website\\src\\components\\Acomplishments\\Acomplishments.js",
    _this = undefined;






var Acomplishments = function Acomplishments() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      children: "Personal Achievements"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.AcomplishmentsData.map(function (card, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
            children: "".concat(card.number, "+")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
            children: card.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 11
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, _this);
};

_c = Acomplishments;
/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

var _c;

$RefreshReg$(_c, "Acomplishments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "AccomplishmentData": function() { return /* binding */ AccomplishmentData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'ThingsToDo-Yelpcamp',
  description: "YelpCamp is a website where users can create and review campgrounds location. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on Udemy.",
  image: '/images/1.png',
  tags: ['Mongo', 'Express', 'Javascript', 'Node', 'Bootstrap'],
  source: 'https://fast-lake-75847.herokuapp.com/campgrounds',
  visit: 'https://github.com/mikey4code/ThingsToDo-Yelpcamp',
  id: 0
}, {
  title: 'BankingQue',
  description: "Banking Que is the name of the project and the goal of this project is to make an easy and smooth banking experience for customers and enforce the idea of social distancing in this current pandemic. The customers will be able to Register or Login, open a new account, get a credit card, debit card, transfer between accounts from the comforts of their car.",
  image: '/images/2.png',
  tags: ['Vue', 'Node', 'Express', 'SQLite'],
  source: '',
  visit: 'https://github.com/mikey4code/BankingQue',
  id: 1
}, {
  title: 'DocMerge',
  description: "This is a program that takes all the content from a doc as a string variable and populate them into a .doc or .txt file.",
  image: '/images/3.png',
  tags: ['Java', 'Apachi Poi'],
  source: '',
  visit: 'https://github.com/mikey4code/DocMerge',
  id: 2
}, {
  title: 'FlaskrProject',
  description: "This is a simple CRUD app that is coding in pyhon, flaskr and sqlite.",
  image: '/images/4.jpg',
  tags: ['Python', 'Flaskr', 'SQLite'],
  source: '',
  visit: 'https://github.com/mikey4code/flaskrProject/tree/master',
  id: 3
}];
var AccomplishmentData = [{
  number: 20,
  text: 'Open Source Projects'
}, {
  number: 1000,
  text: 'Students'
}, {
  number: 1900,
  text: 'Github Followers'
}, {
  number: 5000,
  text: 'Github Stars'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIkFjb21wbGlzaG1lbnRzIiwiQWNvbXBsaXNobWVudHNEYXRhIiwiY2FyZCIsImluZGV4IiwibnVtYmVyIiwidGV4dCIsInByb2plY3RzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGFncyIsInNvdXJjZSIsInZpc2l0IiwiaWQiLCJBY2NvbXBsaXNobWVudERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHNCQUNyQiw4REFBQyw2REFBRDtBQUFBLDRCQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBLGdCQUNHQyx3RUFBQSxDQUF1QixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDdEIsOERBQUMsc0RBQUQ7QUFBQSxrQ0FDRSw4REFBQyx5REFBRDtBQUFBLGdDQUFZRCxJQUFJLENBQUNFLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUEsc0JBQVVGLElBQUksQ0FBQ0c7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsV0FBVUYsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURzQjtBQUFBLE9BQXZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBVUUsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURxQjtBQUFBLENBQXZCOztLQUFNSCxjO0FBZU4sK0RBQWVBLGNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJPLElBQU1NLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUscUJBRFQ7QUFFRUMsYUFBVyxFQUFFLG9OQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLFlBQXJCLEVBQW1DLE1BQW5DLEVBQTJDLFdBQTNDLENBSlY7QUFLRUMsUUFBTSxFQUFFLG1EQUxWO0FBTUVDLE9BQUssRUFBRSxtREFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQUMsc1dBRmQ7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsU0FBaEIsRUFBMkIsUUFBM0IsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsRUFMVjtBQU1FQyxPQUFLLEVBQUUsMENBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FWc0IsRUFtQnRCO0FBQ0VOLE9BQUssRUFBRSxVQURUO0FBRUVDLGFBQVcsRUFBRSwwSEFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsWUFBVCxDQUpWO0FBS0VDLFFBQU0sRUFBRSxFQUxWO0FBTUVDLE9BQUssRUFBRSx3Q0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQW5Cc0IsRUE0QnRCO0FBQ0VOLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSx1RUFGZjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQixDQUpSO0FBS0VDLFFBQU0sRUFBRSxFQUxWO0FBTUVDLE9BQUssRUFBRSx5REFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTVCc0IsQ0FBakI7QUF1Q0EsSUFBTUMsa0JBQWtCLEdBQUksQ0FDN0I7QUFBRVYsUUFBTSxFQUFFLEVBQVY7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDZCLEVBRTdCO0FBQUVELFFBQU0sRUFBRSxJQUFWO0FBQWdCQyxNQUFJLEVBQUU7QUFBdEIsQ0FGNkIsRUFHN0I7QUFBRUQsUUFBTSxFQUFFLElBQVY7QUFBZ0JDLE1BQUksRUFBRTtBQUF0QixDQUg2QixFQUk3QjtBQUFFRCxRQUFNLEVBQUUsSUFBVjtBQUFnQkMsTUFBSSxFQUFFO0FBQXRCLENBSjZCLENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI3OGEwZTcwM2U5MzE4M2EzY2Q2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgQm94LCBCb3hlcywgQm94TnVtLCBCb3hUZXh0IH0gZnJvbSAnLi9BY29tcGxpc2htZW50c1N0eWxlcyc7XG5pbXBvcnQgeyBBY29tcGxpc2htZW50c0RhdGEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoKSA9PiAoXG4gIDxTZWN0aW9uPlxuICAgIDxTZWN0aW9uVGl0bGU+UGVyc29uYWwgQWNoaWV2ZW1lbnRzPC9TZWN0aW9uVGl0bGU+XG4gICAgPEJveGVzPlxuICAgICAge0Fjb21wbGlzaG1lbnRzRGF0YS5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxCb3gga2V5PXtpbmRleH0+XG4gICAgICAgICAgPEJveE51bT57YCR7Y2FyZC5udW1iZXJ9K2B9PC9Cb3hOdW0+XG4gICAgICAgICAgPEJveFRleHQ+e2NhcmQudGV4dH08L0JveFRleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgPC9Cb3hlcz5cbiAgICA8U2VjdGlvbkRpdmlkZXIvPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50cztcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnVGhpbmdzVG9Eby1ZZWxwY2FtcCcsXG4gICAgZGVzY3JpcHRpb246IFwiWWVscENhbXAgaXMgYSB3ZWJzaXRlIHdoZXJlIHVzZXJzIGNhbiBjcmVhdGUgYW5kIHJldmlldyBjYW1wZ3JvdW5kcyBsb2NhdGlvbi4gSW4gb3JkZXIgdG8gcmV2aWV3IG9yIGNyZWF0ZSBhIGNhbXBncm91bmQsIHlvdSBtdXN0IGhhdmUgYW4gYWNjb3VudC4gVGhpcyBwcm9qZWN0IHdhcyBwYXJ0IG9mIENvbHQgU3RlZWxlJ3Mgd2ViIGRldiBjb3Vyc2Ugb24gVWRlbXkuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMS5wbmcnLFxuICAgICAgdGFnczogWydNb25nbycsICdFeHByZXNzJywgJ0phdmFzY3JpcHQnLCAnTm9kZScsICdCb290c3RyYXAnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2Zhc3QtbGFrZS03NTg0Ny5oZXJva3VhcHAuY29tL2NhbXBncm91bmRzJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taWtleTRjb2RlL1RoaW5nc1RvRG8tWWVscGNhbXAnLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdCYW5raW5nUXVlJyxcbiAgICBkZXNjcmlwdGlvbjpcIkJhbmtpbmcgUXVlIGlzIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0IGFuZCB0aGUgZ29hbCBvZiB0aGlzIHByb2plY3QgaXMgdG8gbWFrZSBhbiBlYXN5IGFuZCBzbW9vdGggYmFua2luZyBleHBlcmllbmNlIGZvciBjdXN0b21lcnMgYW5kIGVuZm9yY2UgdGhlIGlkZWEgb2Ygc29jaWFsIGRpc3RhbmNpbmcgaW4gdGhpcyBjdXJyZW50IHBhbmRlbWljLiBUaGUgY3VzdG9tZXJzIHdpbGwgYmUgYWJsZSB0byBSZWdpc3RlciBvciBMb2dpbiwgb3BlbiBhIG5ldyBhY2NvdW50LCBnZXQgYSBjcmVkaXQgY2FyZCwgZGViaXQgY2FyZCwgdHJhbnNmZXIgYmV0d2VlbiBhY2NvdW50cyBmcm9tIHRoZSBjb21mb3J0cyBvZiB0aGVpciBjYXIuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzIucG5nJyxcbiAgICB0YWdzOiBbJ1Z1ZScsICdOb2RlJywgJ0V4cHJlc3MnLCAnU1FMaXRlJyBdLFxuICAgIHNvdXJjZTogJycsXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vbWlrZXk0Y29kZS9CYW5raW5nUXVlJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRG9jTWVyZ2UnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBwcm9ncmFtIHRoYXQgdGFrZXMgYWxsIHRoZSBjb250ZW50IGZyb20gYSBkb2MgYXMgYSBzdHJpbmcgdmFyaWFibGUgYW5kIHBvcHVsYXRlIHRoZW0gaW50byBhIC5kb2Mgb3IgLnR4dCBmaWxlLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzMucG5nJyxcbiAgICAgIHRhZ3M6IFsnSmF2YScsICdBcGFjaGkgUG9pJ10sXG4gICAgc291cmNlOiAnJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taWtleTRjb2RlL0RvY01lcmdlJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRmxhc2tyUHJvamVjdCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNpbXBsZSBDUlVEIGFwcCB0aGF0IGlzIGNvZGluZyBpbiBweWhvbiwgZmxhc2tyIGFuZCBzcWxpdGUuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzQuanBnJyxcbiAgICB0YWdzOiBbJ1B5dGhvbicsICdGbGFza3InLCAnU1FMaXRlJ10sXG4gICAgc291cmNlOiAnJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9taWtleTRjb2RlL2ZsYXNrclByb2plY3QvdHJlZS9tYXN0ZXInLFxuICAgIGlkOiAzLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEFjY29tcGxpc2htZW50RGF0YSA9ICBbXG4gICAgICB7IG51bWJlcjogMjAsIHRleHQ6ICdPcGVuIFNvdXJjZSBQcm9qZWN0cyd9LFxuICAgICAgeyBudW1iZXI6IDEwMDAsIHRleHQ6ICdTdHVkZW50cycsIH0sXG4gICAgICB7IG51bWJlcjogMTkwMCwgdGV4dDogJ0dpdGh1YiBGb2xsb3dlcnMnLCB9LFxuICAgICAgeyBudW1iZXI6IDUwMDAsIHRleHQ6ICdHaXRodWIgU3RhcnMnLCB9XG4gICAgXTtcbiAgICBcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==