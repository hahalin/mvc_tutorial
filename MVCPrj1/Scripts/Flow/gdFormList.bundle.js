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
/***/ function(module, exports) {

	"use strict";

	var gdFormList = React.createClass({
	    displayName: "gdFormList",

	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "col-md-12" },
	            React.createElement(
	                "table",
	                { id: "tba", className: "display table table-striped table-bordered table-hover", cellspacing: " 0", width: "90%" },
	                React.createElement(
	                    "thead",
	                    null,
	                    React.createElement(
	                        "tr",
	                        null,
	                        React.createElement(
	                            "th",
	                            null,
	                            "title"
	                        ),
	                        React.createElement(
	                            "th",
	                            null,
	                            "form_name"
	                        ),
	                        React.createElement(
	                            "th",
	                            null,
	                            "dep_name"
	                        ),
	                        React.createElement(
	                            "th",
	                            null,
	                            "usr_name"
	                        ),
	                        React.createElement(
	                            "th",
	                            null,
	                            "receive_time"
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = gdFormList;

/***/ }
/******/ ]);