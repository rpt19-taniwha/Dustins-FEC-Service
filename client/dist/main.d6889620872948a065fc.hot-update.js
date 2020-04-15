webpackHotUpdate("main",{

/***/ "./client/src/components/imageView.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/imageView.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mainImage_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainImage.jsx */ \"./client/src/components/mainImage.jsx\");\n/* harmony import */ var _imageList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageList.jsx */ \"./client/src/components/imageList.jsx\");\n\n\n\n\nvar ImageView = function ImageView(_ref) {\n  var images = _ref.images,\n      mainImage = _ref.mainImage,\n      arrowClick = _ref.arrowClick,\n      thumbnailClick = _ref.thumbnailClick;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"imageviewcontainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    id: \"thumbnailcontainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imageList_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    images: images,\n    thumbnailHover: thumbnailHover,\n    thumbnailClick: thumbnailClick\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"mainimagecontainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mainImage_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    mainImage: mainImage,\n    arrowClick: arrowClick,\n    mainImageHover: mainImageHover\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageView);\n\n//# sourceURL=webpack:///./client/src/components/imageView.jsx?");

/***/ })

})