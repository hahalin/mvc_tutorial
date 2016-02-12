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

	
	//require('jquery');
	//require('jquery-ui');
	//var $ = require('jquery');
	//require('jquery-ui');

	//import 'jquery-ui';
	//require('jquery-ui/draggable');

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactBootstrapLibButton = __webpack_require__(1);

	var _reactBootstrapLibButton2 = _interopRequireDefault(_reactBootstrapLibButton);

	var _reactBootstrapLibButtonToolbar = __webpack_require__(34);

	var _reactBootstrapLibButtonToolbar2 = _interopRequireDefault(_reactBootstrapLibButtonToolbar);

	var React = __webpack_require__(19);

	var Example = __webpack_require__(35);

	ReactDOM.render(React.createElement(Example, null), document.getElementById('containera'));

	var buttonsInstance = React.createElement(
	    _reactBootstrapLibButtonToolbar2['default'],
	    null,
	    React.createElement(
	        _reactBootstrapLibButton2['default'],
	        null,
	        'Default'
	    ),
	    React.createElement(
	        _reactBootstrapLibButton2['default'],
	        { bsStyle: 'primary' },
	        'Primary'
	    ),
	    React.createElement(
	        _reactBootstrapLibButton2['default'],
	        { bsStyle: 'success' },
	        'Success'
	    ),
	    React.createElement(
	        _reactBootstrapLibButton2['default'],
	        { bsStyle: 'info' },
	        'Info'
	    ),
	    React.createElement(
	        _reactBootstrapLibButton2['default'],
	        { bsStyle: 'warning' },
	        'Warning'
	    ),
	    React.createElement(
	        _reactBootstrapLibButton2['default'],
	        { bsStyle: 'danger' },
	        'Danger'
	    ),
	    React.createElement(
	        _reactBootstrapLibButton2['default'],
	        { bsStyle: 'link' },
	        'Link'
	    )
	);

	ReactDOM.render(buttonsInstance, document.getElementById('toolbar'));
	/* Standard button */ /* Provides extra visual weight and identifies the primary action in a set of buttons */ /* Indicates a successful or positive action */ /* Contextual button for informational alert messages */ /* Indicates caution should be taken with this action */ /* Indicates a dangerous or potentially negative action */ /* Deemphasize a button by making it look like a link while maintaining button behavior */

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(18)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(19);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(20);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactPropTypesLibElementType = __webpack_require__(21);

	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

	var _utilsBootstrapUtils = __webpack_require__(23);

	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

	var _styleMaps = __webpack_require__(25);

	var types = ['button', 'reset', 'submit'];

	var ButtonStyles = _styleMaps.State.values().concat(_styleMaps.DEFAULT, _styleMaps.PRIMARY, _styleMaps.LINK);

	var Button = _react2['default'].createClass({
	  displayName: 'Button',

	  propTypes: {
	    active: _react2['default'].PropTypes.bool,
	    disabled: _react2['default'].PropTypes.bool,
	    block: _react2['default'].PropTypes.bool,
	    navItem: _react2['default'].PropTypes.bool,
	    navDropdown: _react2['default'].PropTypes.bool,
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _reactPropTypesLibElementType2['default'],
	    href: _react2['default'].PropTypes.string,
	    target: _react2['default'].PropTypes.string,
	    /**
	     * Defines HTML button type Attribute
	     * @type {("button"|"reset"|"submit")}
	     * @defaultValue 'button'
	     */
	    type: _react2['default'].PropTypes.oneOf(types)
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      active: false,
	      block: false,
	      disabled: false,
	      navItem: false,
	      navDropdown: false
	    };
	  },

	  render: function render() {
	    var _extends2;

	    var classes = this.props.navDropdown ? {} : _utilsBootstrapUtils2['default'].getClassSet(this.props);
	    var renderFuncName = undefined;

	    var blockClass = _utilsBootstrapUtils2['default'].prefix(this.props, 'block');

	    classes = _extends((_extends2 = {
	      active: this.props.active
	    }, _extends2[blockClass] = this.props.block, _extends2), classes);

	    if (this.props.navItem) {
	      return this.renderNavItem(classes);
	    }

	    renderFuncName = this.props.href || this.props.target || this.props.navDropdown ? 'renderAnchor' : 'renderButton';

	    return this[renderFuncName](classes);
	  },

	  renderAnchor: function renderAnchor(classes) {
	    var Component = this.props.componentClass || 'a';
	    var href = this.props.href || '#';
	    classes.disabled = this.props.disabled;

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, this.props, {
	        href: href,
	        className: _classnames2['default'](this.props.className, classes),
	        role: 'button' }),
	      this.props.children
	    );
	  },

	  renderButton: function renderButton(classes) {
	    var Component = this.props.componentClass || 'button';

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, this.props, {
	        type: this.props.type || 'button',
	        className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  },

	  renderNavItem: function renderNavItem(classes) {
	    var liClasses = {
	      active: this.props.active
	    };

	    return _react2['default'].createElement(
	      'li',
	      { className: _classnames2['default'](liClasses) },
	      this.renderAnchor(classes)
	    );
	  }
	});

	Button.types = types;

	exports['default'] = _utilsBootstrapUtils.bsStyles(ButtonStyles, _styleMaps.DEFAULT, _utilsBootstrapUtils.bsSizes([_styleMaps.Sizes.LARGE, _styleMaps.Sizes.SMALL, _styleMaps.Sizes.XSMALL], _utilsBootstrapUtils.bsClass('btn', Button)));
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(3)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(6);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(11)});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , core      = __webpack_require__(8)
	  , ctx       = __webpack_require__(9)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(10);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(12)
	  , toObject = __webpack_require__(13)
	  , IObject  = __webpack_require__(15);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(17)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 12 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(14);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(16);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(19);

	var _react2 = _interopRequireDefault(_react);

	var _common = __webpack_require__(22);

	/**
	 * Checks whether a prop provides a type of element.
	 *
	 * The type of element can be provided in two forms:
	 * - tag name (string)
	 * - a return value of React.createClass(...)
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */

	function validate(props, propName, componentName) {
	  var errBeginning = _common.errMsg(props, propName, componentName, '. Expected an Element `type`');

	  if (typeof props[propName] !== 'function') {
	    if (_react2['default'].isValidElement(props[propName])) {
	      return new Error(errBeginning + ', not an actual Element');
	    }

	    if (typeof props[propName] !== 'string') {
	      return new Error(errBeginning + ' such as a tag name or return value of React.createClass(...)');
	    }
	  }
	}

	exports['default'] = _common.createChainableTypeChecker(validate);
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.errMsg = errMsg;
	exports.createChainableTypeChecker = createChainableTypeChecker;

	function errMsg(props, propName, componentName, msgContinuation) {
	  return 'Invalid prop \'' + propName + '\' of value \'' + props[propName] + '\'' + (' supplied to \'' + componentName + '\'' + msgContinuation);
	}

	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || '<<anonymous>>';
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(18)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(19);

	var _styleMaps = __webpack_require__(25);

	var _styleMaps2 = _interopRequireDefault(_styleMaps);

	var _invariant = __webpack_require__(32);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _warning = __webpack_require__(33);

	var _warning2 = _interopRequireDefault(_warning);

	function curry(fn) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var last = args[args.length - 1];
	    if (typeof last === 'function') {
	      return fn.apply(undefined, args);
	    }
	    return function (Component) {
	      return fn.apply(undefined, args.concat([Component]));
	    };
	  };
	}

	function prefix(props, variant) {
	  if (props === undefined) props = {};

	  !(props.bsClass || '').trim() ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'A `bsClass` prop is required for this component') : _invariant2['default'](false) : undefined;
	  return props.bsClass + (variant ? '-' + variant : '');
	}

	var bsClass = curry(function (defaultClass, Component) {
	  var propTypes = Component.propTypes || (Component.propTypes = {});
	  var defaultProps = Component.defaultProps || (Component.defaultProps = {});

	  propTypes.bsClass = _react.PropTypes.string;
	  defaultProps.bsClass = defaultClass;

	  return Component;
	});

	exports.bsClass = bsClass;
	var bsStyles = curry(function (styles, defaultStyle, Component) {
	  if (typeof defaultStyle !== 'string') {
	    Component = defaultStyle;
	    defaultStyle = undefined;
	  }

	  var existing = Component.STYLES || [];
	  var propTypes = Component.propTypes || {};

	  styles.forEach(function (style) {
	    if (existing.indexOf(style) === -1) {
	      existing.push(style);
	    }
	  });

	  var propType = _react.PropTypes.oneOf(existing);

	  // expose the values on the propType function for documentation
	  Component.STYLES = propType._values = existing;

	  Component.propTypes = _extends({}, propTypes, {
	    bsStyle: propType
	  });

	  if (defaultStyle !== undefined) {
	    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
	    defaultProps.bsStyle = defaultStyle;
	  }

	  return Component;
	});

	exports.bsStyles = bsStyles;
	var bsSizes = curry(function (sizes, defaultSize, Component) {
	  if (typeof defaultSize !== 'string') {
	    Component = defaultSize;
	    defaultSize = undefined;
	  }

	  var existing = Component.SIZES || [];
	  var propTypes = Component.propTypes || {};

	  sizes.forEach(function (size) {
	    if (existing.indexOf(size) === -1) {
	      existing.push(size);
	    }
	  });

	  var values = existing.reduce(function (result, size) {
	    if (_styleMaps2['default'].SIZES[size] && _styleMaps2['default'].SIZES[size] !== size) {
	      result.push(_styleMaps2['default'].SIZES[size]);
	    }
	    return result.concat(size);
	  }, []);

	  var propType = _react.PropTypes.oneOf(values);

	  propType._values = values;

	  // expose the values on the propType function for documentation
	  Component.SIZES = existing;

	  Component.propTypes = _extends({}, propTypes, {
	    bsSize: propType
	  });

	  if (defaultSize !== undefined) {
	    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
	    defaultProps.bsSize = defaultSize;
	  }

	  return Component;
	});

	exports.bsSizes = bsSizes;
	exports['default'] = {

	  prefix: prefix,

	  getClassSet: function getClassSet(props) {
	    var classes = {};
	    var bsClassName = prefix(props);

	    if (bsClassName) {
	      var bsSize = undefined;

	      classes[bsClassName] = true;

	      if (props.bsSize) {
	        bsSize = _styleMaps2['default'].SIZES[props.bsSize] || bsSize;
	      }

	      if (bsSize) {
	        classes[prefix(props, bsSize)] = true;
	      }

	      if (props.bsStyle) {
	        if (props.bsStyle.indexOf(prefix(props)) === 0) {
	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, // small migration convenience, since the old method required manual prefixing
	          'bsStyle will automatically prefix custom values with the bsClass, so there is no ' + 'need to append it manually. (bsStyle: ' + props.bsStyle + ', bsClass: ' + prefix(props) + ')') : undefined;
	          classes[props.bsStyle] = true;
	        } else {
	          classes[prefix(props, props.bsStyle)] = true;
	        }
	      }
	    }

	    return classes;
	  },

	  /**
	   * Add a style variant to a Component. Mutates the propTypes of the component
	   * in order to validate the new variant.
	   */
	  addStyle: function addStyle(Component, styleVariant) {
	    bsStyles(styleVariant, Component);
	  }
	};
	var _curry = curry;
	exports._curry = _curry;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 24 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$assign = __webpack_require__(3)['default'];

	var _Object$create = __webpack_require__(26)['default'];

	var _Object$keys = __webpack_require__(28)['default'];

	exports.__esModule = true;

	var constant = function constant(obj) {
	  return _Object$assign(_Object$create({
	    values: function values() {
	      var _this = this;

	      return _Object$keys(this).map(function (k) {
	        return _this[k];
	      });
	    }
	  }), obj);
	};

	var styleMaps = {

	  SIZES: {
	    'large': 'lg',
	    'medium': 'md',
	    'small': 'sm',
	    'xsmall': 'xs',
	    'lg': 'lg',
	    'md': 'md',
	    'sm': 'sm',
	    'xs': 'xs'
	  },
	  GRID_COLUMNS: 12
	};

	var Sizes = constant({
	  LARGE: 'large',
	  MEDIUM: 'medium',
	  SMALL: 'small',
	  XSMALL: 'xsmall'
	});

	exports.Sizes = Sizes;
	var State = constant({
	  SUCCESS: 'success',
	  WARNING: 'warning',
	  DANGER: 'danger',
	  INFO: 'info'
	});

	exports.State = State;
	var DEFAULT = 'default';
	exports.DEFAULT = DEFAULT;
	var PRIMARY = 'primary';
	exports.PRIMARY = PRIMARY;
	var LINK = 'link';
	exports.LINK = LINK;
	var INVERSE = 'inverse';

	exports.INVERSE = INVERSE;
	exports['default'] = styleMaps;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(27), __esModule: true };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	module.exports = __webpack_require__(8).Object.keys;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(13);

	__webpack_require__(31)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6)
	  , core    = __webpack_require__(8)
	  , fails   = __webpack_require__(17);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(18)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(19);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(20);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utilsBootstrapUtils = __webpack_require__(23);

	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

	var _Button = __webpack_require__(1);

	var _Button2 = _interopRequireDefault(_Button);

	var ButtonToolbar = _react2['default'].createClass({
	  displayName: 'ButtonToolbar',

	  propTypes: {
	    bsSize: _Button2['default'].propTypes.bsSize
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'btn-toolbar'
	    };
	  },

	  render: function render() {
	    var classes = _utilsBootstrapUtils2['default'].getClassSet(this.props);

	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        role: 'toolbar',
	        className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  }
	});

	exports['default'] = ButtonToolbar;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	
	//'use strict';
	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(19);

	// Simple pure-React component so we don't have to remember
	// Bootstrap's classes
	var BootstrapButton = React.createClass({
	  displayName: "BootstrapButton",

	  render: function render() {
	    return React.createElement("a", _extends({}, this.props, {
	      href: "javascript:;",
	      role: "button",
	      className: (this.props.className || '') + ' btn' }));
	  }
	});

	var BootstrapModal = React.createClass({
	  displayName: "BootstrapModal",

	  // The following two methods are the only places we need to
	  // integrate Bootstrap or jQuery with the components lifecycle methods.
	  componentDidMount: function componentDidMount() {
	    // When the component is added, turn it into a modal
	    $(this.refs.root).modal({ backdrop: 'static', keyboard: false, show: false });
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    $(this.refs.root).off('hidden', this.handleHidden);
	  },
	  close: function close() {
	    $(this.refs.root).modal('hide');
	  },
	  open: function open() {
	    $(this.refs.root).modal('show');
	  },
	  render: function render() {
	    var confirmButton = null;
	    var cancelButton = null;

	    if (this.props.confirm) {
	      confirmButton = React.createElement(
	        BootstrapButton,
	        {
	          onClick: this.handleConfirm,
	          className: "btn-primary" },
	        this.props.confirm
	      );
	    }
	    if (this.props.cancel) {
	      cancelButton = React.createElement(
	        BootstrapButton,
	        { onClick: this.handleCancel, className: "btn-default" },
	        this.props.cancel
	      );
	    }

	    return React.createElement(
	      "div",
	      { className: "modal fade", ref: "root" },
	      React.createElement(
	        "div",
	        { className: "modal-dialog" },
	        React.createElement(
	          "div",
	          { className: "modal-content" },
	          React.createElement(
	            "div",
	            { className: "modal-header" },
	            React.createElement(
	              "button",
	              {
	                type: "button",
	                className: "close",
	                onClick: this.handleCancel },
	              "×"
	            ),
	            React.createElement(
	              "h3",
	              null,
	              this.props.title
	            )
	          ),
	          React.createElement(
	            "div",
	            { className: "modal-body" },
	            this.props.children
	          ),
	          React.createElement(
	            "div",
	            { className: "modal-footer" },
	            cancelButton,
	            confirmButton
	          )
	        )
	      )
	    );
	  },
	  handleCancel: function handleCancel() {
	    if (this.props.onCancel) {
	      this.props.onCancel();
	    }
	  },
	  handleConfirm: function handleConfirm() {
	    if (this.props.onConfirm) {
	      this.props.onConfirm();
	    }
	  }
	});

	var Example = React.createClass({
	  displayName: "Example",

	  handleCancel: function handleCancel() {
	    if (confirm('Are you sure you want to cancel?')) {
	      this.refs.modal.close();
	    }
	  },
	  render: function render() {
	    var modal = null;
	    modal = React.createElement(
	      BootstrapModal,
	      {
	        ref: "modal",
	        confirm: "OK",
	        cancel: "Cancel",
	        onCancel: this.handleCancel,
	        onConfirm: this.closeModal,
	        title: "Hello, Bootstrap!" },
	      "This is a React component powered by jQuery and Bootstrap!"
	    );
	    return React.createElement(
	      "div",
	      { className: "example" },
	      modal,
	      React.createElement(
	        BootstrapButton,
	        { onClick: this.openModal, className: "btn-default" },
	        "Open modal"
	      )
	    );
	  },
	  openModal: function openModal() {
	    this.refs.modal.open();
	  },
	  closeModal: function closeModal() {
	    this.refs.modal.close();
	  }
	});

	module.exports = Example;

/***/ }
/******/ ]);