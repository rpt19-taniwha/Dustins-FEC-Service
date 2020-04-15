webpackHotUpdate("main",{

/***/ "./client/src/components/imageList.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/imageList.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _imageThumbnail_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageThumbnail.jsx */ \"./client/src/components/imageThumbnail.jsx\");\n\n\n\nvar ImageList = function ImageList(_ref) {\n  var images = _ref.images,\n      thumbnailHover = _ref.thumbnailHover,\n      thumbnailClick = _ref.thumbnailClick;\n\n  if (!images) {\n    images = [];\n  }\n\n  return images.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"No Images to Render\") : images.map(function (image, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"imagelist\",\n      key: image.toString()\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imageThumbnail_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      image: image,\n      thumbnailHover: thumbnailHover,\n      thumbnailClick: thumbnailClick,\n      index: i\n    }));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageList);\n\n//# sourceURL=webpack:///./client/src/components/imageList.jsx?");

/***/ }),

/***/ "./client/src/components/imageThumbnail.jsx":
/*!**************************************************!*\
  !*** ./client/src/components/imageThumbnail.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ImageThumbnail = function ImageThumbnail(_ref) {\n  var image = _ref.image,\n      thumbnailHover = _ref.thumbnailHover,\n      index = _ref.index;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: image,\n    onMouseEnter: function onMouseEnter(e) {\n      thumbnailHover(e.target, index);\n    },\n    onMouseExit: function onMouseExit(e) {\n      thumbnailHover(e.target, index);\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageThumbnail);\n\n//# sourceURL=webpack:///./client/src/components/imageThumbnail.jsx?");

/***/ })

})