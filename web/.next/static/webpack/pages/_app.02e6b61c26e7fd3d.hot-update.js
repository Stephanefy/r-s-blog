"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useWindowDimension */ \"./hooks/useWindowDimension.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/sti/my-next-js-blog/web/components/Header.tsx\",\n    _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _templateObject4,\n    _templateObject5,\n    _templateObject6,\n    _s = $RefreshSig$();\n\n/* eslint-disable react/no-unescaped-entities */\n\n\n\n\n\nvar Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject || (_templateObject = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  min-height: 100vh;\\n  padding: 4rem 0;\\n  flex: 1;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n\"])));\nvar HeaderNav = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].header(_templateObject2 || (_templateObject2 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: center;\\n    margin: auto;\\n    @media only screen and (max-width: 1170px) {\\n      max-width: 700px;\\n      justify-content: space-between;\\n      align-items: center;\\n      padding:0 2em;\\n\\n    }\\n\"])));\n_c = HeaderNav;\nvar NavBar = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav(_templateObject3 || (_templateObject3 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    .nav-item {\\n      margin-left: 5rem;\\n    }\\n    @media only screen and (max-width: 1170px) {\\n          position: fixed;\\n          left: -100%;\\n          top: 5rem;\\n          flex-direction: column;\\n          background-color: #fff;\\n          width: 100%;\\n          border-radius: 10px;\\n          text-align: center;\\n          transition: 0.2s;\\n          box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);\\n          left: \", \";\\n\\n        \\n          .nav-item {\\n                margin: \", \";\\n          }\\n      }\\n\"])), function (props) {\n  return props.windowWidth < 1170 && props.isOpen && 0;\n}, function (props) {\n  return props.windowWidth < 1170 && props.isOpen && \"2.5rem 0\";\n});\n_c2 = NavBar;\nvar ListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li(_templateObject4 || (_templateObject4 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    list-style-type: none;\\n    cursor: pointer;\\n    font-size: 1.5em;\\n    margin-left: 5rem;\\n    &:hover {\\n        text-decoration: underline;\\n    }\\n\"])));\n_c3 = ListItem;\nvar Hamburger = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5 || (_templateObject5 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n    opacity: \", \";\\n    @media only screen and (max-width: 1170px) {\\n      display: block;\\n      cursor: pointer;\\n\\n      & :nth-of-type(2) {\\n        opacity: \", \";\\n      }\\n      & :nth-of-type(1) {\\n          transform: \", \";\\n      }\\n\\n      & :nth-of-type(3) {\\n          transform: \", \";\\n      }\\n    }  \\n\\n\"])), function (props) {\n  return props.windowWidth > 1170 ? 0 : 1;\n}, function (props) {\n  return props.isOpen && 0;\n}, function (props) {\n  return props.isOpen && 'translateY(8px) rotate(45deg)';\n}, function (props) {\n  return props.isOpen && 'translateY(-8px) rotate(-45deg)';\n});\n_c4 = Hamburger;\nvar Bar = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span(_templateObject6 || (_templateObject6 = (0,_home_sti_my_next_js_blog_web_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: block;\\n    width: 25px;\\n    height: 3px;\\n    margin: 5px auto;\\n    -webkit-transition: all 0.3s ease-in-out;\\n    transition: all 0.3s ease-in-out;\\n    background-color: #101010;\\n\"])));\n_c5 = Bar;\nvar navLinks = [{\n  id: 1,\n  name: \"ホーム\",\n  path: \"/\"\n}, {\n  id: 2,\n  name: \"à propos de moi\",\n  path: \"/about\"\n}, {\n  id: 3,\n  name: \"旅行\",\n  path: \"/travel\"\n} // {\n//   name: \"Blog\",\n//   path: \"/blog\",\n// },\n// {\n//   id:4,\n//   name: \"Contact\",\n//   path: \"#contact\",\n// },\n];\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useWindowDimensions = (0,_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      width = _useWindowDimensions.width,\n      height = _useWindowDimensions.height;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeaderNav, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"brand\",\n      style: {\n        cursor: 'pointer'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n          children: \"Lilly's blog\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NavBar, {\n      className: \"nav-menu\",\n      windowWidth: width ? width : 0,\n      isOpen: isOpen,\n      children: navLinks.map(function (link, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: link.path,\n          passHref: true,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ListItem, {\n            className: \"nav-item\",\n            children: link.name\n          }, link.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 17\n          }, _this)\n        }, link.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 15\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Hamburger, {\n      id: \"hamburger\",\n      windowWidth: width ? width : 0,\n      isOpen: isOpen,\n      onClick: function onClick() {\n        return setIsOpen(!isOpen);\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Bar, {\n        className: \"bar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Bar, {\n        className: \"bar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 167,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Bar, {\n        className: \"bar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 168,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 141,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"SBoS8HZ08UheWOnbU3A74PzGRCI=\", false, function () {\n  return [_hooks_useWindowDimension__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c6 = Header;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"HeaderNav\");\n$RefreshReg$(_c2, \"NavBar\");\n$RefreshReg$(_c3, \"ListItem\");\n$RefreshReg$(_c4, \"Hamburger\");\n$RefreshReg$(_c5, \"Bar\");\n$RefreshReg$(_c6, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDLGtEQUFEO0FBQW9CLGNBQUksRUFBRUQsSUFBSSxDQUFDUCxJQUEvQjtBQUFxQyxrQkFBUSxNQUE3QztBQUFBLGlDQUNFLDhEQUFDLFFBQUQ7QUFBd0IscUJBQVMsRUFBQyxVQUFsQztBQUFBLHNCQUE4Q08sSUFBSSxDQUFDUjtBQUFuRCxhQUFlUSxJQUFJLENBQUNULEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFXUyxJQUFJLENBQUNULEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFLRCxPQU5BO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBbUJFLDhEQUFDLFNBQUQ7QUFDRSxRQUFFLEVBQUMsV0FETDtBQUVFLGlCQUFXLEVBQUVJLEtBQUssR0FBR0EsS0FBSCxHQUFXLENBRi9CO0FBR0UsWUFBTSxFQUFFWCxNQUhWO0FBSUUsYUFBTyxFQUFFO0FBQUEsZUFBTWEsU0FBUyxDQUFDLENBQUNiLE1BQUYsQ0FBZjtBQUFBLE9BSlg7QUFBQSw4QkFNRSw4REFBQyxHQUFEO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FLDhEQUFDLEdBQUQ7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUUsOERBQUMsR0FBRDtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQXRDdUJVO1VBRUluQjs7O01BRkptQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uJztcblxuaW50ZXJmYWNlIEhhbWJ1cmdlcklzQWN0aXZle1xuICB3aW5kb3dXaWR0aDogbnVtYmVyO1xuICBpc09wZW46IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5hdkJhcntcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHdpbmRvd1dpZHRoOiBudW1iZXI7XG4gIGlzT3BlbjogYm9vbGVhblxufVxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuY29uc3QgSGVhZGVyTmF2ID0gc3R5bGVkLmhlYWRlcmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNzBweCkge1xuICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOjAgMmVtO1xuXG4gICAgfVxuYFxuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQubmF2PE5hdkJhcj5gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAubmF2LWl0ZW0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDVyZW07XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE3MHB4KSB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgICAgICAgIHRvcDogNXJlbTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjdweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgIGxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMud2luZG93V2lkdGggPCAxMTcwICYmIHByb3BzLmlzT3BlbiAmJiAwIH07XG5cbiAgICAgICAgXG4gICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46ICR7cHJvcHMgPT4gcHJvcHMud2luZG93V2lkdGggPCAxMTcwICYmIHByb3BzLmlzT3BlbiAmJiBcIjIuNXJlbSAwXCIgfTtcbiAgICAgICAgICB9XG4gICAgICB9XG5gXG5cbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuYFxuY29uc3QgSGFtYnVyZ2VyID0gc3R5bGVkLmRpdjxIYW1idXJnZXJJc0FjdGl2ZT5gXG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAke3Byb3BzID0+IHByb3BzLndpbmRvd1dpZHRoICA+IDExNzAgPyAwIDogMX07XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTcwcHgpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmIDpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgIG9wYWNpdHk6ICR7cHJvcHMgPT4gcHJvcHMuaXNPcGVuICYmIDB9O1xuICAgICAgfVxuICAgICAgJiA6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICAgIHRyYW5zZm9ybTogJHtwcm9wcyA9PiBwcm9wcy5pc09wZW4gJiYgJ3RyYW5zbGF0ZVkoOHB4KSByb3RhdGUoNDVkZWcpJ307XG4gICAgICB9XG5cbiAgICAgICYgOm50aC1vZi10eXBlKDMpIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICR7cHJvcHMgPT4gcHJvcHMuaXNPcGVuICYmICd0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpJ307XG4gICAgICB9XG4gICAgfSAgXG5cbmBcblxuY29uc3QgQmFyID0gc3R5bGVkLnNwYW5gXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XG5gXG5cbmNvbnN0IG5hdkxpbmtzID0gW1xuICAgIHsgXG4gICAgIGlkOiAxLCBcbiAgICAgbmFtZTogXCLjg5vjg7zjg6BcIiwgXG4gICAgIHBhdGg6IFwiL1wiIFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiBcIsOgIHByb3BvcyBkZSBtb2lcIixcbiAgICAgIHBhdGg6IFwiL2Fib3V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIG5hbWU6IFwi5peF6KGMXCIsXG4gICAgICBwYXRoOiBcIi90cmF2ZWxcIixcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIG5hbWU6IFwiQmxvZ1wiLFxuICAgIC8vICAgcGF0aDogXCIvYmxvZ1wiLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgaWQ6NCxcbiAgICAvLyAgIG5hbWU6IFwiQ29udGFjdFwiLFxuICAgIC8vICAgcGF0aDogXCIjY29udGFjdFwiLFxuICAgIC8vIH0sXG4gIF07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpXG5cbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPEhlYWRlck5hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRcIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aDI+TGlsbHkncyBibG9nPC9oMj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8TmF2QmFyIFxuICAgICAgICBjbGFzc05hbWU9XCJuYXYtbWVudVwiXG4gICAgICAgIHdpbmRvd1dpZHRoPXt3aWR0aCA/IHdpZHRoIDogMH1cbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgID5cbiAgICAgICAge25hdkxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGluayBrZXk9e2xpbmsuaWR9IGhyZWY9e2xpbmsucGF0aH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17bGluay5pZH0gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj57bGluay5uYW1lfTwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTmF2QmFyPlxuICAgICAgPEhhbWJ1cmdlciBcbiAgICAgICAgaWQ9XCJoYW1idXJnZXJcIiBcbiAgICAgICAgd2luZG93V2lkdGg9e3dpZHRoID8gd2lkdGggOiAwfSBcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgPlxuICAgICAgICA8QmFyIGNsYXNzTmFtZT1cImJhclwiLz5cbiAgICAgICAgPEJhciBjbGFzc05hbWU9XCJiYXJcIi8+XG4gICAgICAgIDxCYXIgY2xhc3NOYW1lPVwiYmFyXCIvPlxuICAgICAgPC9IYW1idXJnZXI+XG4gICAgPC9IZWFkZXJOYXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsInN0eWxlZCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJDb250YWluZXIiLCJkaXYiLCJIZWFkZXJOYXYiLCJoZWFkZXIiLCJOYXZCYXIiLCJuYXYiLCJwcm9wcyIsIndpbmRvd1dpZHRoIiwiaXNPcGVuIiwiTGlzdEl0ZW0iLCJsaSIsIkhhbWJ1cmdlciIsIkJhciIsInNwYW4iLCJuYXZMaW5rcyIsImlkIiwibmFtZSIsInBhdGgiLCJIZWFkZXIiLCJ3aWR0aCIsImhlaWdodCIsInNldElzT3BlbiIsImN1cnNvciIsIm1hcCIsImxpbmsiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ })

});