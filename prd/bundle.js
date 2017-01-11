/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);
	var Header = __webpack_require__(5);
	var Root = __webpack_require__(6);
	var Footer = __webpack_require__(7);

	ReactDOM.render(React.createElement(Root, null), document.getElementById('app'));
	ReactDOM.render(React.createElement(Header, null), document.getElementById('header'));
	ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var Header = React.createClass({ displayName: "Header",
		render: function render() {
			return React.createElement("div", null, React.createElement("ul", null, React.createElement("li", null), React.createElement("li", null, "首页"), React.createElement("li", null, React.createElement("img", { src: "/images/home_search_black_icon.png" }))));
		}
	});
	module.exports = Header;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var Root = React.createClass({ displayName: "Root",
		render: function render() {
			return React.createElement("div", { id: "box" }, React.createElement("div", { id: "header" }), React.createElement("div", { id: "content" }), React.createElement("div", { id: "footer" }));
		}
	});
	module.exports = Root;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	var Footer = React.createClass({ displayName: "Footer",
		render: function render() {
			return React.createElement("div", null, React.createElement("ul", null, React.createElement("li", null, React.createElement("img", { src: "/images/widget_bar_home_nor.png" }), React.createElement("p", null, "首页")), React.createElement("li", null, React.createElement("img", { src: "/images/widget_bar_location_nor.png" }), React.createElement("p", null, "乡情馆")), React.createElement("li", null, React.createElement("img", { src: "/images/widget_bar_cart_nor.png" }), React.createElement("p", null, "购物车")), React.createElement("li", null, React.createElement("img", { src: "/images/widget_bar_me_nor.png" }), React.createElement("p", null, "我的"))));
		}
	});

	module.exports = Footer;

/***/ }
/******/ ]);