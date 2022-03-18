"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/handle-like";
exports.ids = ["pages/api/handle-like"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: 'bposf7qg',\n  // you can find this in sanity.json\n  dataset: 'production',\n  // or the name you chose in step 1\n  apiVersion: '2022-03-10',\n  useCdn: true // `false` if you want to ensure fresh data\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxpRUFBZUEscURBQVksQ0FBQztBQUMxQkMsRUFBQUEsU0FBUyxFQUFFLFVBRGU7QUFDSDtBQUN2QkMsRUFBQUEsT0FBTyxFQUFFLFlBRmlCO0FBRUg7QUFDdkJDLEVBQUFBLFVBQVUsRUFBRSxZQUhjO0FBSTFCQyxFQUFBQSxNQUFNLEVBQUUsSUFKa0IsQ0FJYjs7QUFKYSxDQUFELENBQTNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1qcy1ibG9nLy4vY2xpZW50LmpzPzk3MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiAnYnBvc2Y3cWcnLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcbiAgYXBpVmVyc2lvbjogJzIwMjItMDMtMTAnLFxuICB1c2VDZG46IHRydWUgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxufSkiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./client.js\n");

/***/ }),

/***/ "(api)/./pages/api/handle-like.js":
/*!**********************************!*\
  !*** ./pages/api/handle-like.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../client */ \"(api)/./client.js\");\n\n_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config({\n  token: process.env.SANITY_WRITE_TOKEN\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const {\n    _id\n  } = JSON.parse(req.body);\n  const data = await _client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(_id).inc({\n    likes: 1\n  }).commit();\n  res.statusCode = 200;\n  res.json({\n    likes: data.likes\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGFuZGxlLWxpa2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUdBQSxzREFBQSxDQUFjO0FBQ1ZFLEVBQUFBLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBRFQsQ0FBZDtBQUtBLGlFQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUUvQixRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBVUMsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEdBQUcsQ0FBQ0ssSUFBZixDQUFoQjtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNWixxREFBQSxDQUFhUSxHQUFiLEVBQWtCTSxHQUFsQixDQUFzQjtBQUFFQyxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUF0QixFQUFtQ0MsTUFBbkMsRUFBbkI7QUFFQVQsRUFBQUEsR0FBRyxDQUFDVSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FWLEVBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTO0FBQUNILElBQUFBLEtBQUssRUFBRUgsSUFBSSxDQUFDRztBQUFiLEdBQVQ7QUFDSCxDQVBEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1qcy1ibG9nLy4vcGFnZXMvYXBpL2hhbmRsZS1saWtlLmpzPzIzMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xuXG5cbmNsaWVudC5jb25maWcoe1xuICAgIHRva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfV1JJVEVfVE9LRU5cbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cbiAgICBjb25zdCB7IF9pZCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNsaWVudC5wYXRjaChfaWQpLmluYyh7IGxpa2VzOiAxfSkuY29tbWl0KCk7XG5cbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMFxuICAgIHJlcy5qc29uKHtsaWtlczogZGF0YS5saWtlc30pXG59Il0sIm5hbWVzIjpbImNsaWVudCIsImNvbmZpZyIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIlNBTklUWV9XUklURV9UT0tFTiIsInJlcSIsInJlcyIsIl9pZCIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJkYXRhIiwicGF0Y2giLCJpbmMiLCJsaWtlcyIsImNvbW1pdCIsInN0YXR1c0NvZGUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/handle-like.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/handle-like.js"));
module.exports = __webpack_exports__;

})();