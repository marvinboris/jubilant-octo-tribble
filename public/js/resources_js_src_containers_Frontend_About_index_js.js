(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Frontend_About_index_js"],{

/***/ "./resources/js/src/components/Frontend/UI/Blocks/ServiceBlock/index.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Blocks/ServiceBlock/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var _ServiceBlock_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceBlock.scss */ "./resources/js/src/components/Frontend/UI/Blocks/ServiceBlock/ServiceBlock.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var ServiceBlock = /*#__PURE__*/function (_Component) {
  _inherits(ServiceBlock, _Component);

  var _super = _createSuper(ServiceBlock);

  function ServiceBlock() {
    _classCallCheck(this, ServiceBlock);

    return _super.apply(this, arguments);
  }

  _createClass(ServiceBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cms = _this$props.content.cms.pages.frontend.components.service_block,
          icon = _this$props.icon,
          title = _this$props.title,
          body = _this$props.body,
          link = _this$props.link;
      var lang = localStorage.getItem('frontend_lang');
      var formattedBody = (0,_shared_utility__WEBPACK_IMPORTED_MODULE_2__.htmlEntities)(body[lang]);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "UI ServiceBlock shadow-lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "title text-truncate",
          children: title[lang]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "icon",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
              className: "fas fa-".concat(icon, " fa-fw")
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "text",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "body",
              children: !!formattedBody && formattedBody.length > 200 ? formattedBody.substr(0, 200) + '...' : formattedBody
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
              to: link,
              children: [cms.read_more, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                className: "fas fa-angle-double-right"
              })]
            })]
          })]
        })]
      });
    }
  }]);

  return ServiceBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(ServiceBlock));

/***/ }),

/***/ "./resources/js/src/components/Frontend/UI/Blocks/TeamMemberBlock/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Blocks/TeamMemberBlock/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _TeamMemberBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamMemberBlock.scss */ "./resources/js/src/components/Frontend/UI/Blocks/TeamMemberBlock/TeamMemberBlock.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var name = _ref.name,
      job = _ref.job,
      photo = _ref.photo;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "UI TeamMemberBlock",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "img",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "embed-responsive embed-responsive-1by1 bg-img",
        style: {
          backgroundImage: 'url("' + photo + '")'
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "name",
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "job",
      children: job
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/components/Frontend/UI/Title/PageTitle/index.js":
/*!**************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Title/PageTitle/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _PageTitle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.scss */ "./resources/js/src/components/Frontend/UI/Title/PageTitle/PageTitle.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "PageTitle",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "subtitle",
        children: subtitle
      })]
    })
  });
});

/***/ }),

/***/ "./resources/js/src/components/Frontend/UI/Title/SectionTitle/index.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Title/SectionTitle/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SectionTitle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionTitle.scss */ "./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      icon = _ref.icon,
      centered = _ref.centered;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: 'SectionTitle' + (centered ? " centered" : ""),
    children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "icon",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
          className: 'fas fa-' + icon
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "text",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "subtitle",
        children: subtitle
      })]
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/About/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/About/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-owl-carousel2 */ "./node_modules/react-owl-carousel2/lib/OwlCarousel.js");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_Preloaders_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/UI/Preloaders/Loading */ "./resources/js/src/components/UI/Preloaders/Loading/index.js");
/* harmony import */ var _components_Frontend_UI_Title_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Frontend/UI/Title/PageTitle */ "./resources/js/src/components/Frontend/UI/Title/PageTitle/index.js");
/* harmony import */ var _components_Frontend_UI_Title_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Frontend/UI/Title/SectionTitle */ "./resources/js/src/components/Frontend/UI/Title/SectionTitle/index.js");
/* harmony import */ var _components_Frontend_UI_Blocks_ServiceBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Frontend/UI/Blocks/ServiceBlock */ "./resources/js/src/components/Frontend/UI/Blocks/ServiceBlock/index.js");
/* harmony import */ var _components_Frontend_UI_Blocks_TeamMemberBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Frontend/UI/Blocks/TeamMemberBlock */ "./resources/js/src/components/Frontend/UI/Blocks/TeamMemberBlock/index.js");
/* harmony import */ var _store_actions_frontend_about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/actions/frontend/about */ "./resources/js/src/store/actions/frontend/about.js");
/* harmony import */ var _About_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./About.scss */ "./resources/js/src/containers/Frontend/About/About.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var About = /*#__PURE__*/function (_Component) {
  _inherits(About, _Component);

  var _super = _createSuper(About);

  function About() {
    var _this;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMounted: false
    });

    return _this;
  }

  _createClass(About, [{
    key: "componentDidMount",
    value: // Lifecycle methods
    function componentDidMount() {
      this.props.get();
      this.setState({
        isMounted: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$content = _this$props.content,
          cms = _this$props$content.cms.pages.frontend.pages.about,
          services = _this$props$content.services,
          _this$props$frontend$ = _this$props.frontend.about,
          loading = _this$props$frontend$.loading,
          _this$props$frontend$2 = _this$props$frontend$.team,
          team = _this$props$frontend$2 === void 0 ? [] : _this$props$frontend$2;
      var lang = localStorage.getItem('frontend_lang');
      var servicesContent = services.map(function (service) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "col-md-6 col-xxl-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Frontend_UI_Blocks_ServiceBlock__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({}, service))
        }, JSON.stringify(service));
      });
      var teamContent = team.map(function (member) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Frontend_UI_Blocks_TeamMemberBlock__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread({}, _objectSpread(_objectSpread({}, member), {}, {
          job: member.job[lang]
        })), JSON.stringify(member));
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_UI_Preloaders_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
        loading: this.state.isMounted && loading,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "About",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Frontend_UI_Title_PageTitle__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, cms)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("section", {
            className: "about",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Frontend_UI_Title_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, cms.about), {}, {
                centered: true
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                  className: "col-md-5 col-lg-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                    src: cms.about.photo,
                    className: "img-fluid"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                  className: "col-md-7 col-lg-8",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: cms.about.description
                    }
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("section", {
            className: "services",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Frontend_UI_Title_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, cms.services), {}, {
                centered: true
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                className: "row",
                children: servicesContent
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("section", {
            className: "team",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_Frontend_UI_Title_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, cms.team), {}, {
                centered: true
              })), team.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)((react_owl_carousel2__WEBPACK_IMPORTED_MODULE_2___default()), {
                ref: "team-carousel",
                options: {
                  responsive: {
                    0: {
                      items: 1
                    },
                    600: {
                      items: 2
                    },
                    900: {
                      items: 3
                    },
                    1200: {
                      items: 4
                    }
                  },
                  dots: false,
                  margin: 20
                },
                children: teamContent
              })]
            })
          })]
        })
      });
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get() {
      return dispatch((0,_store_actions_frontend_about__WEBPACK_IMPORTED_MODULE_8__.getAbout)());
    },
    reset: function reset() {
      return dispatch((0,_store_actions_frontend_about__WEBPACK_IMPORTED_MODULE_8__.resetAbout)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(About)));

/***/ }),

/***/ "./resources/js/src/store/actions/frontend/about.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/store/actions/frontend/about.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAbout": () => (/* binding */ getAbout),
/* harmony export */   "resetAbout": () => (/* binding */ resetAbout)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./resources/js/src/store/actions/actionTypes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var prefix = '/api/';
var resetAbout = function resetAbout() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.ABOUT_RESET
  };
};

var aboutStart = function aboutStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.ABOUT_START
  };
};

var aboutSuccess = function aboutSuccess(data) {
  return _objectSpread({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.ABOUT_SUCCESS
  }, data);
};

var aboutFail = function aboutFail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.ABOUT_FAIL,
    error: error
  };
};

var getAbout = function getAbout() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var res, resData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(aboutStart());
              _context.prev = 1;
              _context.next = 4;
              return fetch("".concat(prefix, "about"));

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.json();

            case 7:
              resData = _context.sent;
              dispatch(aboutSuccess(resData));
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              dispatch(aboutFail(_context.t0));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Blocks/ServiceBlock/ServiceBlock.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Blocks/ServiceBlock/ServiceBlock.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".UI.ServiceBlock {\n  padding: 24px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  background-color: var(--white);\n  border: 1px solid var(--border-10);\n  border-radius: var(--border-radius);\n}\n.UI.ServiceBlock .title {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--blue);\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\n.UI.ServiceBlock .info {\n  display: flex;\n  align-items: flex-start;\n}\n.UI.ServiceBlock .info .icon {\n  font-size: 60px;\n  padding-right: 20px;\n  color: var(--blue-50);\n}\n.UI.ServiceBlock .info .text .body {\n  max-height: 60px;\n  overflow: hidden;\n  margin-bottom: 15px;\n  text-overflow: ellipsis;\n}\n.UI.ServiceBlock .info .text a {\n  color: var(--blue);\n}\n.UI.ServiceBlock .info .text a i {\n  margin-left: 10px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Blocks/TeamMemberBlock/TeamMemberBlock.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Blocks/TeamMemberBlock/TeamMemberBlock.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".UI.TeamMemberBlock {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.UI.TeamMemberBlock .img {\n  width: 100% !important;\n  margin-bottom: 20px;\n}\n.UI.TeamMemberBlock .img .embed-responsive {\n  border: 1px solid var(--border-10);\n  border-radius: var(--border-radius);\n}\n.UI.TeamMemberBlock .name {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--blue);\n  text-transform: uppercase;\n}\n.UI.TeamMemberBlock .job {\n  text-align: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Title/PageTitle/PageTitle.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Title/PageTitle/PageTitle.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".PageTitle {\n  position: relative;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(var(--blue-80), var(--blue-80)), url(\"/images/african-african-american-at-at-symbol-bangkok-black-1457821-pxhere.com.jpg\");\n}\n.PageTitle::after {\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  z-index: -1;\n  height: 100%;\n  position: absolute;\n  background-color: var(--black);\n}\n.PageTitle .container {\n  display: flex;\n  padding-top: 80px;\n  padding-bottom: 80px;\n  align-items: center;\n  color: var(--white);\n  flex-direction: column;\n  justify-content: center;\n}\n.PageTitle .container .title {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 7px;\n  border-bottom: 0.5px solid var(--white);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".SectionTitle {\n  margin-bottom: 15px;\n  display: flex;\n  align-items: stretch;\n}\n.SectionTitle .icon {\n  padding-right: 11px;\n}\n.SectionTitle .icon .wrapper {\n  width: 57px;\n  height: 57px;\n  display: flex;\n  font-size: 20px;\n  color: var(--blue);\n  align-items: center;\n  justify-content: center;\n  background-color: var(--blue-10);\n  border-radius: var(--border-radius);\n}\n.SectionTitle .text .title {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--blue);\n  display: inline-block;\n  text-transform: uppercase;\n  border-bottom: 0.5px solid var(--border);\n}\n.SectionTitle.centered {\n  justify-content: center;\n}\n.SectionTitle.centered .text {\n  text-align: center;\n}\n\n@media (min-width: 800px) {\n  .SectionTitle {\n    margin-bottom: 20px;\n  }\n  .SectionTitle .icon {\n    display: block;\n    padding-right: 13px;\n  }\n  .SectionTitle .icon .wrapper {\n    width: 67px;\n    height: 67px;\n    font-size: 25px;\n  }\n  .SectionTitle .text .title {\n    font-size: 27px;\n    margin-bottom: 3px;\n  }\n}\n@media (min-width: 1280px) {\n  .SectionTitle {\n    margin-bottom: 25px;\n  }\n  .SectionTitle .icon {\n    padding-right: 15px;\n  }\n  .SectionTitle .icon .wrapper {\n    width: 77px;\n    height: 77px;\n    font-size: 30px;\n  }\n  .SectionTitle .text .title {\n    font-size: 30px;\n    margin-bottom: 7px;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/containers/Frontend/About/About.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/containers/Frontend/About/About.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Frontend .About section {\n  background-color: var(--white);\n}\n.Frontend .About section.services {\n  background-repeat: repeat;\n  background-position: center;\n  background-color: var(--blue-10);\n  background-image: url(\"/images/bg.png\");\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react-owl-carousel2/lib/OwlCarousel.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-owl-carousel2/lib/OwlCarousel.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __nested_webpack_require_850__(moduleId) {

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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_850__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_850__.m = modules;

/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_850__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_850__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_850__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(5);\n\nvar _propTypes = __webpack_require__(3);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\n__webpack_require__(2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar owlCarouselOptions = {\n\tcore: ['items', 'loop', 'center', 'rewind', 'mouseDrag', 'touchDrag', 'pullDrag', 'freeDrag', 'margin', 'stagePadding', 'merge', 'mergeFit', 'autoWidth', 'startPosition', 'rtl', 'smartSpeed', 'fluidSpeed', 'dragEndSpeed', 'responsive', 'responsiveRefreshRate', 'responsiveBaseElement', 'fallbackEasing', 'info', 'nestedItemSelector', 'itemElement', 'stageElement', 'refreshClass', 'loadedClass', 'loadingClass', 'rtlClass', 'responsiveClass', 'dragClass', 'itemClass', 'stageClass', 'stageOuterClass', 'grabClass'],\n\tautorefresh: ['autoRefresh', 'autoRefreshInterval'],\n\tlazy: ['lazyLoad'],\n\tautoHeight: ['autoHeight', 'autoHeightClass'],\n\tvideo: ['video', 'videoHeight', 'videoWidth'],\n\tanimate: ['animateOut', 'animateIn'],\n\tautoplay: ['autoplay', 'autoplayTimeout', 'autoplayHoverPause', 'autoplaySpeed'],\n\tnavigation: ['nav', 'navText', 'navSpeed', 'navElement', 'navContainer', 'navContainerClass', 'navClass', 'slideBy', 'dotClass', 'dotsClass', 'dots', 'dotsEach', 'dotsData', 'dotsSpeed', 'dotsContainer'],\n\thash: ['URLhashListener']\n};\n\nvar owlCarouselEvents = {\n\tcore: ['onInitialize', 'onInitialized', 'onResize', 'onResized', 'onRefresh', 'onRefreshed', 'onDrag', 'onDragged', 'onTranslate', 'onTranslated', 'onChange', 'onChanged'],\n\tlazy: ['onLoadLazy', 'onLoadedLazy'],\n\tvideo: ['onStopVideo', 'onPlayVideo']\n};\n\nvar OwlCarousel = function (_React$Component) {\n\t_inherits(OwlCarousel, _React$Component);\n\n\tfunction OwlCarousel(props, context) {\n\t\t_classCallCheck(this, OwlCarousel);\n\n\t\tvar _this = _possibleConstructorReturn(this, (OwlCarousel.__proto__ || Object.getPrototypeOf(OwlCarousel)).call(this, props, context));\n\n\t\t_this.onTranslate = function (next) {\n\t\t\treturn function (event) {\n\t\t\t\t_this.currentPosition = event.item.index;\n\t\t\t\tif (next) next(event);\n\t\t\t};\n\t\t};\n\n\t\t_this.next = function () {\n\t\t\treturn _this.$car.next();\n\t\t};\n\t\t_this.prev = function () {\n\t\t\treturn _this.$car.prev();\n\t\t};\n\t\t_this.goTo = function (x) {\n\t\t\treturn _this.$car.to(x);\n\t\t};\n\n\t\t_this.currentPosition = 0;\n\t\t_this.onTranslate = _this.onTranslate.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(OwlCarousel, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\t__webpack_require__(1);\n\t\t\tvar options = this.getOptions();\n\t\t\tthis.init(options);\n\t\t}\n\t}, {\n\t\tkey: 'componentWillReceiveProps',\n\t\tvalue: function componentWillReceiveProps(nextProps) {\n\t\t\tthis.destroy();\n\t\t}\n\t}, {\n\t\tkey: 'componentDidUpdate',\n\t\tvalue: function componentDidUpdate(prevProps, prevState) {\n\t\t\tvar options = this.getOptions();\n\t\t\toptions.startPosition = this.currentPosition;\n\t\t\tthis.init(options);\n\t\t}\n\t}, {\n\t\tkey: 'componentWillUnmount',\n\t\tvalue: function componentWillUnmount() {\n\t\t\tthis.destroy();\n\t\t}\n\t}, {\n\t\tkey: 'init',\n\t\tvalue: function init(options) {\n\t\t\tvar next = options.onTranslate;\n\t\t\toptions.onTranslate = this.onTranslate(next);\n\t\t\tthis.$node.owlCarousel(options);\n\t\t\tthis.$car = this.$node.data('owl.carousel');\n\t\t}\n\t}, {\n\t\tkey: 'destroy',\n\t\tvalue: function destroy() {\n\t\t\tthis.$car.destroy();\n\t\t}\n\t}, {\n\t\tkey: 'getOptions',\n\t\tvalue: function getOptions() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar options = {};\n\n\t\t\tvar carOptions = Object.values(owlCarouselOptions).reduce(function (a, v) {\n\t\t\t\treturn a.concat(v);\n\t\t\t}, []);\n\n\t\t\tcarOptions.forEach(function (val) {\n\t\t\t\tif (val in _this2.props.options) options[val] = _this2.props.options[val];\n\t\t\t});\n\n\t\t\tvar carEvents = Object.values(owlCarouselEvents).reduce(function (a, v) {\n\t\t\t\treturn a.concat(v);\n\t\t\t}, []);\n\n\t\t\tcarEvents.forEach(function (val) {\n\t\t\t\tif (val in _this2.props.events) options[val] = _this2.props.events[val];\n\t\t\t});\n\n\t\t\treturn options;\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this3 = this;\n\n\t\t\tvar _props = this.props,\n\t\t\t    options = _props.options,\n\t\t\t    events = _props.events,\n\t\t\t    children = _props.children,\n\t\t\t    props = _objectWithoutProperties(_props, ['options', 'events', 'children']);\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t_extends({ ref: function ref(item) {\n\t\t\t\t\t\treturn _this3.$node = $((0, _reactDom.findDOMNode)(item));\n\t\t\t\t\t}, className: 'owl-carousel owl-theme' }, props),\n\t\t\t\tchildren\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn OwlCarousel;\n}(_react2.default.Component);\n\nOwlCarousel.propTypes = {\n\tchildren: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element.isRequired)]).isRequired,\n\n\tstyle: _propTypes2.default.object,\n\tid: _propTypes2.default.string,\n\n\toptions: _propTypes2.default.shape({\n\t\t// core\n\t\titems: _propTypes2.default.number,\n\t\tloop: _propTypes2.default.bool,\n\t\tcenter: _propTypes2.default.bool,\n\t\trewind: _propTypes2.default.bool,\n\n\t\tmouseDrag: _propTypes2.default.bool,\n\t\ttouchDrag: _propTypes2.default.bool,\n\t\tpullDrag: _propTypes2.default.bool,\n\t\tfreeDrag: _propTypes2.default.bool,\n\n\t\tmargin: _propTypes2.default.number,\n\t\tstagePadding: _propTypes2.default.number,\n\n\t\tmerge: _propTypes2.default.bool,\n\t\tmergeFit: _propTypes2.default.bool,\n\t\tautoWidth: _propTypes2.default.bool,\n\n\t\tstartPosition: _propTypes2.default.number,\n\t\trtl: _propTypes2.default.bool,\n\n\t\tsmartSpeed: _propTypes2.default.number,\n\t\tfluidSpeed: _propTypes2.default.bool,\n\t\tdragEndSpeed: _propTypes2.default.bool,\n\n\t\tresponsive: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),\n\t\tresponsiveRefreshRate: _propTypes2.default.number,\n\t\tresponsiveBaseElement: _propTypes2.default.object,\n\n\t\tfallbackEasing: _propTypes2.default.string,\n\n\t\tinfo: _propTypes2.default.bool,\n\n\t\tnestedItemSelector: _propTypes2.default.bool,\n\t\titemElement: _propTypes2.default.string,\n\t\tstageElement: _propTypes2.default.string,\n\n\t\trefreshClass: _propTypes2.default.string,\n\t\tloadedClass: _propTypes2.default.string,\n\t\tloadingClass: _propTypes2.default.string,\n\t\trtlClass: _propTypes2.default.string,\n\t\tresponsiveClass: _propTypes2.default.string,\n\t\tdragClass: _propTypes2.default.string,\n\t\titemClass: _propTypes2.default.string,\n\t\tstageClass: _propTypes2.default.string,\n\t\tstageOuterClass: _propTypes2.default.string,\n\t\tgrabClass: _propTypes2.default.string,\n\n\t\t// autoRefresh\n\t\tautoRefresh: _propTypes2.default.bool,\n\t\tautoRefreshInterval: _propTypes2.default.number,\n\n\t\t// lazy\n\t\tlazyLoad: _propTypes2.default.bool,\n\n\t\t// autoHeight\n\t\tautoHeight: _propTypes2.default.bool,\n\t\tautoHeightClass: _propTypes2.default.string,\n\n\t\t// video\n\t\tvideo: _propTypes2.default.bool,\n\t\tvideoHeight: _propTypes2.default.bool,\n\t\tvideoWidth: _propTypes2.default.bool,\n\n\t\t// animate\n\t\tanimateOut: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),\n\t\tanimateIn: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),\n\n\t\t// autoplay\n\t\tautoplay: _propTypes2.default.bool,\n\t\tautoplayTimeout: _propTypes2.default.number,\n\t\tautoplayHoverPause: _propTypes2.default.bool,\n\t\tautoplaySpeed: _propTypes2.default.bool,\n\n\t\t// navigation\n\t\tnav: _propTypes2.default.bool,\n\t\tnavText: _propTypes2.default.array,\n\t\tnavSpeed: _propTypes2.default.bool,\n\t\tnavElement: _propTypes2.default.string,\n\t\tnavContainer: _propTypes2.default.bool,\n\t\tnavContainerClass: _propTypes2.default.string,\n\t\tnavClass: _propTypes2.default.array,\n\t\tslideBy: _propTypes2.default.number,\n\t\tdotClass: _propTypes2.default.string,\n\t\tdotsClass: _propTypes2.default.string,\n\t\tdots: _propTypes2.default.bool,\n\t\tdotsEach: _propTypes2.default.bool,\n\t\tdotsData: _propTypes2.default.bool,\n\t\tdotsSpeed: _propTypes2.default.bool,\n\t\tdotsContainer: _propTypes2.default.bool,\n\n\t\t// hash\n\t\tURLhashListener: _propTypes2.default.bool\n\t}),\n\n\tevents: _propTypes2.default.shape({\n\t\t// core\n\t\tonInitialize: _propTypes2.default.func,\n\t\tonInitialized: _propTypes2.default.func,\n\t\tonResize: _propTypes2.default.func,\n\t\tonResized: _propTypes2.default.func,\n\t\tonRefresh: _propTypes2.default.func,\n\t\tonRefreshed: _propTypes2.default.func,\n\t\tonDrag: _propTypes2.default.func,\n\t\tonDragged: _propTypes2.default.func,\n\t\tonTranslate: _propTypes2.default.func,\n\t\tonTranslated: _propTypes2.default.func,\n\t\tonChange: _propTypes2.default.func,\n\t\tonChanged: _propTypes2.default.func,\n\n\t\t// lazy\n\t\tonLoadLazy: _propTypes2.default.func,\n\t\tonLoadedLazy: _propTypes2.default.func,\n\n\t\t// video\n\t\tonStopVideo: _propTypes2.default.func,\n\t\tonPlayVideo: _propTypes2.default.func\n\t})\n};\n\nOwlCarousel.defaultProps = {\n\toptions: {},\n\tevents: {}\n};\n\nexports.default = OwlCarousel;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./components/OwlCarousel.jsx\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./components/OwlCarousel.jsx?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/**\n * Owl Carousel v2.2.1\n * Copyright 2013-2017 David Deutsch\n * Licensed under  ()\n */\n/**\n * Owl carousel\n * @version 2.1.6\n * @author Bartosz Wojciechowski\n * @author David Deutsch\n * @license The MIT License (MIT)\n * @todo Lazy Load Icon\n * @todo prevent animationend bubling\n * @todo itemsScaleUp\n * @todo Test Zepto\n * @todo stagePadding calculate wrong active classes\n */\n;(function ($, window, document, undefined) {\n\n\t/**\n  * Creates a carousel.\n  * @class The Owl Carousel.\n  * @public\n  * @param {HTMLElement|jQuery} element - The element to create the carousel for.\n  * @param {Object} [options] - The options\n  */\n\tfunction Owl(element, options) {\n\n\t\t/**\n   * Current settings for the carousel.\n   * @public\n   */\n\t\tthis.settings = null;\n\n\t\t/**\n   * Current options set by the caller including defaults.\n   * @public\n   */\n\t\tthis.options = $.extend({}, Owl.Defaults, options);\n\n\t\t/**\n   * Plugin element.\n   * @public\n   */\n\t\tthis.$element = $(element);\n\n\t\t/**\n   * Proxied event handlers.\n   * @protected\n   */\n\t\tthis._handlers = {};\n\n\t\t/**\n   * References to the running plugins of this carousel.\n   * @protected\n   */\n\t\tthis._plugins = {};\n\n\t\t/**\n   * Currently suppressed events to prevent them from beeing retriggered.\n   * @protected\n   */\n\t\tthis._supress = {};\n\n\t\t/**\n   * Absolute current position.\n   * @protected\n   */\n\t\tthis._current = null;\n\n\t\t/**\n   * Animation speed in milliseconds.\n   * @protected\n   */\n\t\tthis._speed = null;\n\n\t\t/**\n   * Coordinates of all items in pixel.\n   * @todo The name of this member is missleading.\n   * @protected\n   */\n\t\tthis._coordinates = [];\n\n\t\t/**\n   * Current breakpoint.\n   * @todo Real media queries would be nice.\n   * @protected\n   */\n\t\tthis._breakpoint = null;\n\n\t\t/**\n   * Current width of the plugin element.\n   */\n\t\tthis._width = null;\n\n\t\t/**\n   * All real items.\n   * @protected\n   */\n\t\tthis._items = [];\n\n\t\t/**\n   * All cloned items.\n   * @protected\n   */\n\t\tthis._clones = [];\n\n\t\t/**\n   * Merge values of all items.\n   * @todo Maybe this could be part of a plugin.\n   * @protected\n   */\n\t\tthis._mergers = [];\n\n\t\t/**\n   * Widths of all items.\n   */\n\t\tthis._widths = [];\n\n\t\t/**\n   * Invalidated parts within the update process.\n   * @protected\n   */\n\t\tthis._invalidated = {};\n\n\t\t/**\n   * Ordered list of workers for the update process.\n   * @protected\n   */\n\t\tthis._pipe = [];\n\n\t\t/**\n   * Current state information for the drag operation.\n   * @todo #261\n   * @protected\n   */\n\t\tthis._drag = {\n\t\t\ttime: null,\n\t\t\ttarget: null,\n\t\t\tpointer: null,\n\t\t\tstage: {\n\t\t\t\tstart: null,\n\t\t\t\tcurrent: null\n\t\t\t},\n\t\t\tdirection: null\n\t\t};\n\n\t\t/**\n   * Current state information and their tags.\n   * @type {Object}\n   * @protected\n   */\n\t\tthis._states = {\n\t\t\tcurrent: {},\n\t\t\ttags: {\n\t\t\t\t'initializing': ['busy'],\n\t\t\t\t'animating': ['busy'],\n\t\t\t\t'dragging': ['interacting']\n\t\t\t}\n\t\t};\n\n\t\t$.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {\n\t\t\tthis._handlers[handler] = $.proxy(this[handler], this);\n\t\t}, this));\n\n\t\t$.each(Owl.Plugins, $.proxy(function (key, plugin) {\n\t\t\tthis._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);\n\t\t}, this));\n\n\t\t$.each(Owl.Workers, $.proxy(function (priority, worker) {\n\t\t\tthis._pipe.push({\n\t\t\t\t'filter': worker.filter,\n\t\t\t\t'run': $.proxy(worker.run, this)\n\t\t\t});\n\t\t}, this));\n\n\t\tthis.setup();\n\t\tthis.initialize();\n\t}\n\n\t/**\n  * Default options for the carousel.\n  * @public\n  */\n\tOwl.Defaults = {\n\t\titems: 3,\n\t\tloop: false,\n\t\tcenter: false,\n\t\trewind: false,\n\n\t\tmouseDrag: true,\n\t\ttouchDrag: true,\n\t\tpullDrag: true,\n\t\tfreeDrag: false,\n\n\t\tmargin: 0,\n\t\tstagePadding: 0,\n\n\t\tmerge: false,\n\t\tmergeFit: true,\n\t\tautoWidth: false,\n\n\t\tstartPosition: 0,\n\t\trtl: false,\n\n\t\tsmartSpeed: 250,\n\t\tfluidSpeed: false,\n\t\tdragEndSpeed: false,\n\n\t\tresponsive: {},\n\t\tresponsiveRefreshRate: 200,\n\t\tresponsiveBaseElement: window,\n\n\t\tfallbackEasing: 'swing',\n\n\t\tinfo: false,\n\n\t\tnestedItemSelector: false,\n\t\titemElement: 'div',\n\t\tstageElement: 'div',\n\n\t\trefreshClass: 'owl-refresh',\n\t\tloadedClass: 'owl-loaded',\n\t\tloadingClass: 'owl-loading',\n\t\trtlClass: 'owl-rtl',\n\t\tresponsiveClass: 'owl-responsive',\n\t\tdragClass: 'owl-drag',\n\t\titemClass: 'owl-item',\n\t\tstageClass: 'owl-stage',\n\t\tstageOuterClass: 'owl-stage-outer',\n\t\tgrabClass: 'owl-grab'\n\t};\n\n\t/**\n  * Enumeration for width.\n  * @public\n  * @readonly\n  * @enum {String}\n  */\n\tOwl.Width = {\n\t\tDefault: 'default',\n\t\tInner: 'inner',\n\t\tOuter: 'outer'\n\t};\n\n\t/**\n  * Enumeration for types.\n  * @public\n  * @readonly\n  * @enum {String}\n  */\n\tOwl.Type = {\n\t\tEvent: 'event',\n\t\tState: 'state'\n\t};\n\n\t/**\n  * Contains all registered plugins.\n  * @public\n  */\n\tOwl.Plugins = {};\n\n\t/**\n  * List of workers involved in the update process.\n  */\n\tOwl.Workers = [{\n\t\tfilter: ['width', 'settings'],\n\t\trun: function run() {\n\t\t\tthis._width = this.$element.width();\n\t\t}\n\t}, {\n\t\tfilter: ['width', 'items', 'settings'],\n\t\trun: function run(cache) {\n\t\t\tcache.current = this._items && this._items[this.relative(this._current)];\n\t\t}\n\t}, {\n\t\tfilter: ['items', 'settings'],\n\t\trun: function run() {\n\t\t\tthis.$stage.children('.cloned').remove();\n\t\t}\n\t}, {\n\t\tfilter: ['width', 'items', 'settings'],\n\t\trun: function run(cache) {\n\t\t\tvar margin = this.settings.margin || '',\n\t\t\t    grid = !this.settings.autoWidth,\n\t\t\t    rtl = this.settings.rtl,\n\t\t\t    css = {\n\t\t\t\t'width': 'auto',\n\t\t\t\t'margin-left': rtl ? margin : '',\n\t\t\t\t'margin-right': rtl ? '' : margin\n\t\t\t};\n\n\t\t\t!grid && this.$stage.children().css(css);\n\n\t\t\tcache.css = css;\n\t\t}\n\t}, {\n\t\tfilter: ['width', 'items', 'settings'],\n\t\trun: function run(cache) {\n\t\t\tvar width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,\n\t\t\t    merge = null,\n\t\t\t    iterator = this._items.length,\n\t\t\t    grid = !this.settings.autoWidth,\n\t\t\t    widths = [];\n\n\t\t\tcache.items = {\n\t\t\t\tmerge: false,\n\t\t\t\twidth: width\n\t\t\t};\n\n\t\t\twhile (iterator--) {\n\t\t\t\tmerge = this._mergers[iterator];\n\t\t\t\tmerge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;\n\n\t\t\t\tcache.items.merge = merge > 1 || cache.items.merge;\n\n\t\t\t\twidths[iterator] = !grid ? this._items[iterator].width() : width * merge;\n\t\t\t}\n\n\t\t\tthis._widths = widths;\n\t\t}\n\t}, {\n\t\tfilter: ['items', 'settings'],\n\t\trun: function run() {\n\t\t\tvar clones = [],\n\t\t\t    items = this._items,\n\t\t\t    settings = this.settings,\n\n\t\t\t// TODO: Should be computed from number of min width items in stage\n\t\t\tview = Math.max(settings.items * 2, 4),\n\t\t\t    size = Math.ceil(items.length / 2) * 2,\n\t\t\t    repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,\n\t\t\t    append = '',\n\t\t\t    prepend = '';\n\n\t\t\trepeat /= 2;\n\n\t\t\twhile (repeat--) {\n\t\t\t\t// Switch to only using appended clones\n\t\t\t\tclones.push(this.normalize(clones.length / 2, true));\n\t\t\t\tappend = append + items[clones[clones.length - 1]][0].outerHTML;\n\t\t\t\tclones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));\n\t\t\t\tprepend = items[clones[clones.length - 1]][0].outerHTML + prepend;\n\t\t\t}\n\n\t\t\tthis._clones = clones;\n\n\t\t\t$(append).addClass('cloned').appendTo(this.$stage);\n\t\t\t$(prepend).addClass('cloned').prependTo(this.$stage);\n\t\t}\n\t}, {\n\t\tfilter: ['width', 'items', 'settings'],\n\t\trun: function run() {\n\t\t\tvar rtl = this.settings.rtl ? 1 : -1,\n\t\t\t    size = this._clones.length + this._items.length,\n\t\t\t    iterator = -1,\n\t\t\t    previous = 0,\n\t\t\t    current = 0,\n\t\t\t    coordinates = [];\n\n\t\t\twhile (++iterator < size) {\n\t\t\t\tprevious = coordinates[iterator - 1] || 0;\n\t\t\t\tcurrent = this._widths[this.relative(iterator)] + this.settings.margin;\n\t\t\t\tcoordinates.push(previous + current * rtl);\n\t\t\t}\n\n\t\t\tthis._coordinates = coordinates;\n\t\t}\n\t}, {\n\t\tfilter: ['width', 'items', 'settings'],\n\t\trun: function run() {\n\t\t\tvar padding = this.settings.stagePadding,\n\t\t\t    coordinates = this._coordinates,\n\t\t\t    css = {\n\t\t\t\t'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,\n\t\t\t\t'padding-left': padding || '',\n\t\t\t\t'padding-right': padding || ''\n\t\t\t};\n\n\t\t\tthis.$stage.css(css);\n\t\t}\n\t}, {\n\t\tfilter: ['width', 'items', 'settings'],\n\t\trun: function run(cache) {\n\t\t\tvar iterator = this._coordinates.length,\n\t\t\t    grid = !this.settings.autoWidth,\n\t\t\t    items = this.$stage.children();\n\n\t\t\tif (grid && cache.items.merge) {\n\t\t\t\twhile (iterator--) {\n\t\t\t\t\tcache.css.width = this._widths[this.relative(iterator)];\n\t\t\t\t\titems.eq(iterator).css(cache.css);\n\t\t\t\t}\n\t\t\t} else if (grid) {\n\t\t\t\tcache.css.width = cache.items.width;\n\t\t\t\titems.css(cache.css);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tfilter: ['items'],\n\t\trun: function run() {\n\t\t\tthis._coordinates.length < 1 && this.$stage.removeAttr('style');\n\t\t}\n\t}, {\n\t\tfilter: ['width', 'items', 'settings'],\n\t\trun: function run(cache) {\n\t\t\tcache.current = cache.current ? this.$stage.children().index(cache.current) : 0;\n\t\t\tcache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));\n\t\t\tthis.reset(cache.current);\n\t\t}\n\t}, {\n\t\tfilter: ['position'],\n\t\trun: function run() {\n\t\t\tthis.animate(this.coordinates(this._current));\n\t\t}\n\t}, {\n\t\tfilter: ['width', 'position', 'items', 'settings'],\n\t\trun: function run() {\n\t\t\tvar rtl = this.settings.rtl ? 1 : -1,\n\t\t\t    padding = this.settings.stagePadding * 2,\n\t\t\t    begin = this.coordinates(this.current()) + padding,\n\t\t\t    end = begin + this.width() * rtl,\n\t\t\t    inner,\n\t\t\t    outer,\n\t\t\t    matches = [],\n\t\t\t    i,\n\t\t\t    n;\n\n\t\t\tfor (i = 0, n = this._coordinates.length; i < n; i++) {\n\t\t\t\tinner = this._coordinates[i - 1] || 0;\n\t\t\t\touter = Math.abs(this._coordinates[i]) + padding * rtl;\n\n\t\t\t\tif (this.op(inner, '<=', begin) && this.op(inner, '>', end) || this.op(outer, '<', begin) && this.op(outer, '>', end)) {\n\t\t\t\t\tmatches.push(i);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.$stage.children('.active').removeClass('active');\n\t\t\tthis.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');\n\n\t\t\tif (this.settings.center) {\n\t\t\t\tthis.$stage.children('.center').removeClass('center');\n\t\t\t\tthis.$stage.children().eq(this.current()).addClass('center');\n\t\t\t}\n\t\t}\n\t}];\n\n\t/**\n  * Initializes the carousel.\n  * @protected\n  */\n\tOwl.prototype.initialize = function () {\n\t\tthis.enter('initializing');\n\t\tthis.trigger('initialize');\n\n\t\tthis.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);\n\n\t\tif (this.settings.autoWidth && !this.is('pre-loading')) {\n\t\t\tvar imgs, nestedSelector, width;\n\t\t\timgs = this.$element.find('img');\n\t\t\tnestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;\n\t\t\twidth = this.$element.children(nestedSelector).width();\n\n\t\t\tif (imgs.length && width <= 0) {\n\t\t\t\tthis.preloadAutoWidthImages(imgs);\n\t\t\t}\n\t\t}\n\n\t\tthis.$element.addClass(this.options.loadingClass);\n\n\t\t// HACK: DISABLE SCROLLBAR\n\t\tvar overflowVal = $('body').css('overflow');\n\t\t$('body').css({ 'overflow': 'hidden' });\n\n\t\t// create stage\n\t\tthis.$stage = $('<' + this.settings.stageElement + ' class=\"' + this.settings.stageClass + '\"/>').wrap('<div class=\"' + this.settings.stageOuterClass + '\"/>');\n\n\t\t// append stage\n\t\tthis.$element.append(this.$stage.parent());\n\n\t\t// append content\n\t\tthis.replace(this.$element.children().not(this.$stage.parent()));\n\n\t\t// check visibility\n\t\tif (this.$element.is(':visible')) {\n\t\t\t// update view\n\t\t\tthis.refresh();\n\t\t} else {\n\t\t\t// invalidate width\n\t\t\tthis.invalidate('width');\n\t\t}\n\n\t\t// HACK: RESTORE SCROLLBAR\n\t\t$('body').css({ 'overflow': overflowVal });\n\n\t\tthis.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);\n\n\t\t// register event handlers\n\t\tthis.registerEventHandlers();\n\n\t\tthis.leave('initializing');\n\t\tthis.trigger('initialized');\n\t};\n\n\t/**\n  * Setups the current settings.\n  * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?\n  * @todo Support for media queries by using `matchMedia` would be nice.\n  * @public\n  */\n\tOwl.prototype.setup = function () {\n\t\tvar viewport = this.viewport(),\n\t\t    overwrites = this.options.responsive,\n\t\t    match = -1,\n\t\t    settings = null;\n\n\t\tif (!overwrites) {\n\t\t\tsettings = $.extend({}, this.options);\n\t\t} else {\n\t\t\t$.each(overwrites, function (breakpoint) {\n\t\t\t\tif (breakpoint <= viewport && breakpoint > match) {\n\t\t\t\t\tmatch = Number(breakpoint);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tsettings = $.extend({}, this.options, overwrites[match]);\n\t\t\tif (typeof settings.stagePadding === 'function') {\n\t\t\t\tsettings.stagePadding = settings.stagePadding();\n\t\t\t}\n\t\t\tdelete settings.responsive;\n\n\t\t\t// responsive class\n\t\t\tif (settings.responsiveClass) {\n\t\t\t\tthis.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\\\S+\\\\s', 'g'), '$1' + match));\n\t\t\t}\n\t\t}\n\n\t\tthis.trigger('change', { property: { name: 'settings', value: settings } });\n\t\tthis._breakpoint = match;\n\t\tthis.settings = settings;\n\t\tthis.invalidate('settings');\n\t\tthis.trigger('changed', { property: { name: 'settings', value: this.settings } });\n\t};\n\n\t/**\n  * Updates option logic if necessery.\n  * @protected\n  */\n\tOwl.prototype.optionsLogic = function () {\n\t\tif (this.settings.autoWidth) {\n\t\t\tthis.settings.stagePadding = false;\n\t\t\tthis.settings.merge = false;\n\t\t}\n\t};\n\n\t/**\n  * Prepares an item before add.\n  * @todo Rename event parameter `content` to `item`.\n  * @protected\n  * @returns {jQuery|HTMLElement} - The item container.\n  */\n\tOwl.prototype.prepare = function (item) {\n\t\tvar event = this.trigger('prepare', { content: item });\n\n\t\tif (!event.data) {\n\t\t\tevent.data = $('<' + this.settings.itemElement + '/>').addClass(this.options.itemClass).append(item);\n\t\t}\n\n\t\tthis.trigger('prepared', { content: event.data });\n\n\t\treturn event.data;\n\t};\n\n\t/**\n  * Updates the view.\n  * @public\n  */\n\tOwl.prototype.update = function () {\n\t\tvar i = 0,\n\t\t    n = this._pipe.length,\n\t\t    filter = $.proxy(function (p) {\n\t\t\treturn this[p];\n\t\t}, this._invalidated),\n\t\t    cache = {};\n\n\t\twhile (i < n) {\n\t\t\tif (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {\n\t\t\t\tthis._pipe[i].run(cache);\n\t\t\t}\n\t\t\ti++;\n\t\t}\n\n\t\tthis._invalidated = {};\n\n\t\t!this.is('valid') && this.enter('valid');\n\t};\n\n\t/**\n  * Gets the width of the view.\n  * @public\n  * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.\n  * @returns {Number} - The width of the view in pixel.\n  */\n\tOwl.prototype.width = function (dimension) {\n\t\tdimension = dimension || Owl.Width.Default;\n\t\tswitch (dimension) {\n\t\t\tcase Owl.Width.Inner:\n\t\t\tcase Owl.Width.Outer:\n\t\t\t\treturn this._width;\n\t\t\tdefault:\n\t\t\t\treturn this._width - this.settings.stagePadding * 2 + this.settings.margin;\n\t\t}\n\t};\n\n\t/**\n  * Refreshes the carousel primarily for adaptive purposes.\n  * @public\n  */\n\tOwl.prototype.refresh = function () {\n\t\tthis.enter('refreshing');\n\t\tthis.trigger('refresh');\n\n\t\tthis.setup();\n\n\t\tthis.optionsLogic();\n\n\t\tthis.$element.addClass(this.options.refreshClass);\n\n\t\tthis.update();\n\n\t\tthis.$element.removeClass(this.options.refreshClass);\n\n\t\tthis.leave('refreshing');\n\t\tthis.trigger('refreshed');\n\t};\n\n\t/**\n  * Checks window `resize` event.\n  * @protected\n  */\n\tOwl.prototype.onThrottledResize = function () {\n\t\twindow.clearTimeout(this.resizeTimer);\n\t\tthis.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);\n\t};\n\n\t/**\n  * Checks window `resize` event.\n  * @protected\n  */\n\tOwl.prototype.onResize = function () {\n\t\tif (!this._items.length) {\n\t\t\treturn false;\n\t\t}\n\n\t\tif (this._width === this.$element.width()) {\n\t\t\treturn false;\n\t\t}\n\n\t\tif (!this.$element.is(':visible')) {\n\t\t\treturn false;\n\t\t}\n\n\t\tthis.enter('resizing');\n\n\t\tif (this.trigger('resize').isDefaultPrevented()) {\n\t\t\tthis.leave('resizing');\n\t\t\treturn false;\n\t\t}\n\n\t\tthis.invalidate('width');\n\n\t\tthis.refresh();\n\n\t\tthis.leave('resizing');\n\t\tthis.trigger('resized');\n\t};\n\n\t/**\n  * Registers event handlers.\n  * @todo Check `msPointerEnabled`\n  * @todo #261\n  * @protected\n  */\n\tOwl.prototype.registerEventHandlers = function () {\n\t\tif ($.support.transition) {\n\t\t\tthis.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));\n\t\t}\n\n\t\tif (this.settings.responsive !== false) {\n\t\t\tthis.on(window, 'resize', this._handlers.onThrottledResize);\n\t\t}\n\n\t\tif (this.settings.mouseDrag) {\n\t\t\tthis.$element.addClass(this.options.dragClass);\n\t\t\tthis.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));\n\t\t\tthis.$stage.on('dragstart.owl.core selectstart.owl.core', function () {\n\t\t\t\treturn false;\n\t\t\t});\n\t\t}\n\n\t\tif (this.settings.touchDrag) {\n\t\t\tthis.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));\n\t\t\tthis.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));\n\t\t}\n\t};\n\n\t/**\n  * Handles `touchstart` and `mousedown` events.\n  * @todo Horizontal swipe threshold as option\n  * @todo #261\n  * @protected\n  * @param {Event} event - The event arguments.\n  */\n\tOwl.prototype.onDragStart = function (event) {\n\t\tvar stage = null;\n\n\t\tif (event.which === 3) {\n\t\t\treturn;\n\t\t}\n\n\t\tif ($.support.transform) {\n\t\t\tstage = this.$stage.css('transform').replace(/.*\\(|\\)| /g, '').split(',');\n\t\t\tstage = {\n\t\t\t\tx: stage[stage.length === 16 ? 12 : 4],\n\t\t\t\ty: stage[stage.length === 16 ? 13 : 5]\n\t\t\t};\n\t\t} else {\n\t\t\tstage = this.$stage.position();\n\t\t\tstage = {\n\t\t\t\tx: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,\n\t\t\t\ty: stage.top\n\t\t\t};\n\t\t}\n\n\t\tif (this.is('animating')) {\n\t\t\t$.support.transform ? this.animate(stage.x) : this.$stage.stop();\n\t\t\tthis.invalidate('position');\n\t\t}\n\n\t\tthis.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');\n\n\t\tthis.speed(0);\n\n\t\tthis._drag.time = new Date().getTime();\n\t\tthis._drag.target = $(event.target);\n\t\tthis._drag.stage.start = stage;\n\t\tthis._drag.stage.current = stage;\n\t\tthis._drag.pointer = this.pointer(event);\n\n\t\t$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));\n\n\t\t$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {\n\t\t\tvar delta = this.difference(this._drag.pointer, this.pointer(event));\n\n\t\t\t$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));\n\n\t\t\tif (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tevent.preventDefault();\n\n\t\t\tthis.enter('dragging');\n\t\t\tthis.trigger('drag');\n\t\t}, this));\n\t};\n\n\t/**\n  * Handles the `touchmove` and `mousemove` events.\n  * @todo #261\n  * @protected\n  * @param {Event} event - The event arguments.\n  */\n\tOwl.prototype.onDragMove = function (event) {\n\t\tvar minimum = null,\n\t\t    maximum = null,\n\t\t    pull = null,\n\t\t    delta = this.difference(this._drag.pointer, this.pointer(event)),\n\t\t    stage = this.difference(this._drag.stage.start, delta);\n\n\t\tif (!this.is('dragging')) {\n\t\t\treturn;\n\t\t}\n\n\t\tevent.preventDefault();\n\n\t\tif (this.settings.loop) {\n\t\t\tminimum = this.coordinates(this.minimum());\n\t\t\tmaximum = this.coordinates(this.maximum() + 1) - minimum;\n\t\t\tstage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;\n\t\t} else {\n\t\t\tminimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());\n\t\t\tmaximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());\n\t\t\tpull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;\n\t\t\tstage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);\n\t\t}\n\n\t\tthis._drag.stage.current = stage;\n\n\t\tthis.animate(stage.x);\n\t};\n\n\t/**\n  * Handles the `touchend` and `mouseup` events.\n  * @todo #261\n  * @todo Threshold for click event\n  * @protected\n  * @param {Event} event - The event arguments.\n  */\n\tOwl.prototype.onDragEnd = function (event) {\n\t\tvar delta = this.difference(this._drag.pointer, this.pointer(event)),\n\t\t    stage = this._drag.stage.current,\n\t\t    direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';\n\n\t\t$(document).off('.owl.core');\n\n\t\tthis.$element.removeClass(this.options.grabClass);\n\n\t\tif (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {\n\t\t\tthis.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);\n\t\t\tthis.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));\n\t\t\tthis.invalidate('position');\n\t\t\tthis.update();\n\n\t\t\tthis._drag.direction = direction;\n\n\t\t\tif (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {\n\t\t\t\tthis._drag.target.one('click.owl.core', function () {\n\t\t\t\t\treturn false;\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\n\t\tif (!this.is('dragging')) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis.leave('dragging');\n\t\tthis.trigger('dragged');\n\t};\n\n\t/**\n  * Gets absolute position of the closest item for a coordinate.\n  * @todo Setting `freeDrag` makes `closest` not reusable. See #165.\n  * @protected\n  * @param {Number} coordinate - The coordinate in pixel.\n  * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.\n  * @return {Number} - The absolute position of the closest item.\n  */\n\tOwl.prototype.closest = function (coordinate, direction) {\n\t\tvar position = -1,\n\t\t    pull = 30,\n\t\t    width = this.width(),\n\t\t    coordinates = this.coordinates();\n\n\t\tif (!this.settings.freeDrag) {\n\t\t\t// check closest item\n\t\t\t$.each(coordinates, $.proxy(function (index, value) {\n\t\t\t\t// on a left pull, check on current index\n\t\t\t\tif (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {\n\t\t\t\t\tposition = index;\n\t\t\t\t\t// on a right pull, check on previous index\n\t\t\t\t\t// to do so, subtract width from value and set position = index + 1\n\t\t\t\t} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {\n\t\t\t\t\tposition = index + 1;\n\t\t\t\t} else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {\n\t\t\t\t\tposition = direction === 'left' ? index + 1 : index;\n\t\t\t\t}\n\t\t\t\treturn position === -1;\n\t\t\t}, this));\n\t\t}\n\n\t\tif (!this.settings.loop) {\n\t\t\t// non loop boundries\n\t\t\tif (this.op(coordinate, '>', coordinates[this.minimum()])) {\n\t\t\t\tposition = coordinate = this.minimum();\n\t\t\t} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {\n\t\t\t\tposition = coordinate = this.maximum();\n\t\t\t}\n\t\t}\n\n\t\treturn position;\n\t};\n\n\t/**\n  * Animates the stage.\n  * @todo #270\n  * @public\n  * @param {Number} coordinate - The coordinate in pixels.\n  */\n\tOwl.prototype.animate = function (coordinate) {\n\t\tvar animate = this.speed() > 0;\n\n\t\tthis.is('animating') && this.onTransitionEnd();\n\n\t\tif (animate) {\n\t\t\tthis.enter('animating');\n\t\t\tthis.trigger('translate');\n\t\t}\n\n\t\tif ($.support.transform3d && $.support.transition) {\n\t\t\tthis.$stage.css({\n\t\t\t\ttransform: 'translate3d(' + coordinate + 'px,0px,0px)',\n\t\t\t\ttransition: this.speed() / 1000 + 's'\n\t\t\t});\n\t\t} else if (animate) {\n\t\t\tthis.$stage.animate({\n\t\t\t\tleft: coordinate + 'px'\n\t\t\t}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));\n\t\t} else {\n\t\t\tthis.$stage.css({\n\t\t\t\tleft: coordinate + 'px'\n\t\t\t});\n\t\t}\n\t};\n\n\t/**\n  * Checks whether the carousel is in a specific state or not.\n  * @param {String} state - The state to check.\n  * @returns {Boolean} - The flag which indicates if the carousel is busy.\n  */\n\tOwl.prototype.is = function (state) {\n\t\treturn this._states.current[state] && this._states.current[state] > 0;\n\t};\n\n\t/**\n  * Sets the absolute position of the current item.\n  * @public\n  * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.\n  * @returns {Number} - The absolute position of the current item.\n  */\n\tOwl.prototype.current = function (position) {\n\t\tif (position === undefined) {\n\t\t\treturn this._current;\n\t\t}\n\n\t\tif (this._items.length === 0) {\n\t\t\treturn undefined;\n\t\t}\n\n\t\tposition = this.normalize(position);\n\n\t\tif (this._current !== position) {\n\t\t\tvar event = this.trigger('change', { property: { name: 'position', value: position } });\n\n\t\t\tif (event.data !== undefined) {\n\t\t\t\tposition = this.normalize(event.data);\n\t\t\t}\n\n\t\t\tthis._current = position;\n\n\t\t\tthis.invalidate('position');\n\n\t\t\tthis.trigger('changed', { property: { name: 'position', value: this._current } });\n\t\t}\n\n\t\treturn this._current;\n\t};\n\n\t/**\n  * Invalidates the given part of the update routine.\n  * @param {String} [part] - The part to invalidate.\n  * @returns {Array.<String>} - The invalidated parts.\n  */\n\tOwl.prototype.invalidate = function (part) {\n\t\tif ($.type(part) === 'string') {\n\t\t\tthis._invalidated[part] = true;\n\t\t\tthis.is('valid') && this.leave('valid');\n\t\t}\n\t\treturn $.map(this._invalidated, function (v, i) {\n\t\t\treturn i;\n\t\t});\n\t};\n\n\t/**\n  * Resets the absolute position of the current item.\n  * @public\n  * @param {Number} position - The absolute position of the new item.\n  */\n\tOwl.prototype.reset = function (position) {\n\t\tposition = this.normalize(position);\n\n\t\tif (position === undefined) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis._speed = 0;\n\t\tthis._current = position;\n\n\t\tthis.suppress(['translate', 'translated']);\n\n\t\tthis.animate(this.coordinates(position));\n\n\t\tthis.release(['translate', 'translated']);\n\t};\n\n\t/**\n  * Normalizes an absolute or a relative position of an item.\n  * @public\n  * @param {Number} position - The absolute or relative position to normalize.\n  * @param {Boolean} [relative=false] - Whether the given position is relative or not.\n  * @returns {Number} - The normalized position.\n  */\n\tOwl.prototype.normalize = function (position, relative) {\n\t\tvar n = this._items.length,\n\t\t    m = relative ? 0 : this._clones.length;\n\n\t\tif (!this.isNumeric(position) || n < 1) {\n\t\t\tposition = undefined;\n\t\t} else if (position < 0 || position >= n + m) {\n\t\t\tposition = ((position - m / 2) % n + n) % n + m / 2;\n\t\t}\n\n\t\treturn position;\n\t};\n\n\t/**\n  * Converts an absolute position of an item into a relative one.\n  * @public\n  * @param {Number} position - The absolute position to convert.\n  * @returns {Number} - The converted position.\n  */\n\tOwl.prototype.relative = function (position) {\n\t\tposition -= this._clones.length / 2;\n\t\treturn this.normalize(position, true);\n\t};\n\n\t/**\n  * Gets the maximum position for the current item.\n  * @public\n  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.\n  * @returns {Number}\n  */\n\tOwl.prototype.maximum = function (relative) {\n\t\tvar settings = this.settings,\n\t\t    maximum = this._coordinates.length,\n\t\t    iterator,\n\t\t    reciprocalItemsWidth,\n\t\t    elementWidth;\n\n\t\tif (settings.loop) {\n\t\t\tmaximum = this._clones.length / 2 + this._items.length - 1;\n\t\t} else if (settings.autoWidth || settings.merge) {\n\t\t\titerator = this._items.length;\n\t\t\treciprocalItemsWidth = this._items[--iterator].width();\n\t\t\telementWidth = this.$element.width();\n\t\t\twhile (iterator--) {\n\t\t\t\treciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;\n\t\t\t\tif (reciprocalItemsWidth > elementWidth) {\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmaximum = iterator + 1;\n\t\t} else if (settings.center) {\n\t\t\tmaximum = this._items.length - 1;\n\t\t} else {\n\t\t\tmaximum = this._items.length - settings.items;\n\t\t}\n\n\t\tif (relative) {\n\t\t\tmaximum -= this._clones.length / 2;\n\t\t}\n\n\t\treturn Math.max(maximum, 0);\n\t};\n\n\t/**\n  * Gets the minimum position for the current item.\n  * @public\n  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.\n  * @returns {Number}\n  */\n\tOwl.prototype.minimum = function (relative) {\n\t\treturn relative ? 0 : this._clones.length / 2;\n\t};\n\n\t/**\n  * Gets an item at the specified relative position.\n  * @public\n  * @param {Number} [position] - The relative position of the item.\n  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.\n  */\n\tOwl.prototype.items = function (position) {\n\t\tif (position === undefined) {\n\t\t\treturn this._items.slice();\n\t\t}\n\n\t\tposition = this.normalize(position, true);\n\t\treturn this._items[position];\n\t};\n\n\t/**\n  * Gets an item at the specified relative position.\n  * @public\n  * @param {Number} [position] - The relative position of the item.\n  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.\n  */\n\tOwl.prototype.mergers = function (position) {\n\t\tif (position === undefined) {\n\t\t\treturn this._mergers.slice();\n\t\t}\n\n\t\tposition = this.normalize(position, true);\n\t\treturn this._mergers[position];\n\t};\n\n\t/**\n  * Gets the absolute positions of clones for an item.\n  * @public\n  * @param {Number} [position] - The relative position of the item.\n  * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.\n  */\n\tOwl.prototype.clones = function (position) {\n\t\tvar odd = this._clones.length / 2,\n\t\t    even = odd + this._items.length,\n\t\t    map = function map(index) {\n\t\t\treturn index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;\n\t\t};\n\n\t\tif (position === undefined) {\n\t\t\treturn $.map(this._clones, function (v, i) {\n\t\t\t\treturn map(i);\n\t\t\t});\n\t\t}\n\n\t\treturn $.map(this._clones, function (v, i) {\n\t\t\treturn v === position ? map(i) : null;\n\t\t});\n\t};\n\n\t/**\n  * Sets the current animation speed.\n  * @public\n  * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.\n  * @returns {Number} - The current animation speed in milliseconds.\n  */\n\tOwl.prototype.speed = function (speed) {\n\t\tif (speed !== undefined) {\n\t\t\tthis._speed = speed;\n\t\t}\n\n\t\treturn this._speed;\n\t};\n\n\t/**\n  * Gets the coordinate of an item.\n  * @todo The name of this method is missleanding.\n  * @public\n  * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.\n  * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.\n  */\n\tOwl.prototype.coordinates = function (position) {\n\t\tvar multiplier = 1,\n\t\t    newPosition = position - 1,\n\t\t    coordinate;\n\n\t\tif (position === undefined) {\n\t\t\treturn $.map(this._coordinates, $.proxy(function (coordinate, index) {\n\t\t\t\treturn this.coordinates(index);\n\t\t\t}, this));\n\t\t}\n\n\t\tif (this.settings.center) {\n\t\t\tif (this.settings.rtl) {\n\t\t\t\tmultiplier = -1;\n\t\t\t\tnewPosition = position + 1;\n\t\t\t}\n\n\t\t\tcoordinate = this._coordinates[position];\n\t\t\tcoordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;\n\t\t} else {\n\t\t\tcoordinate = this._coordinates[newPosition] || 0;\n\t\t}\n\n\t\tcoordinate = Math.ceil(coordinate);\n\n\t\treturn coordinate;\n\t};\n\n\t/**\n  * Calculates the speed for a translation.\n  * @protected\n  * @param {Number} from - The absolute position of the start item.\n  * @param {Number} to - The absolute position of the target item.\n  * @param {Number} [factor=undefined] - The time factor in milliseconds.\n  * @returns {Number} - The time in milliseconds for the translation.\n  */\n\tOwl.prototype.duration = function (from, to, factor) {\n\t\tif (factor === 0) {\n\t\t\treturn 0;\n\t\t}\n\n\t\treturn Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);\n\t};\n\n\t/**\n  * Slides to the specified item.\n  * @public\n  * @param {Number} position - The position of the item.\n  * @param {Number} [speed] - The time in milliseconds for the transition.\n  */\n\tOwl.prototype.to = function (position, speed) {\n\t\tvar current = this.current(),\n\t\t    revert = null,\n\t\t    distance = position - this.relative(current),\n\t\t    direction = (distance > 0) - (distance < 0),\n\t\t    items = this._items.length,\n\t\t    minimum = this.minimum(),\n\t\t    maximum = this.maximum();\n\n\t\tif (this.settings.loop) {\n\t\t\tif (!this.settings.rewind && Math.abs(distance) > items / 2) {\n\t\t\t\tdistance += direction * -1 * items;\n\t\t\t}\n\n\t\t\tposition = current + distance;\n\t\t\trevert = ((position - minimum) % items + items) % items + minimum;\n\n\t\t\tif (revert !== position && revert - distance <= maximum && revert - distance > 0) {\n\t\t\t\tcurrent = revert - distance;\n\t\t\t\tposition = revert;\n\t\t\t\tthis.reset(current);\n\t\t\t}\n\t\t} else if (this.settings.rewind) {\n\t\t\tmaximum += 1;\n\t\t\tposition = (position % maximum + maximum) % maximum;\n\t\t} else {\n\t\t\tposition = Math.max(minimum, Math.min(maximum, position));\n\t\t}\n\n\t\tthis.speed(this.duration(current, position, speed));\n\t\tthis.current(position);\n\n\t\tif (this.$element.is(':visible')) {\n\t\t\tthis.update();\n\t\t}\n\t};\n\n\t/**\n  * Slides to the next item.\n  * @public\n  * @param {Number} [speed] - The time in milliseconds for the transition.\n  */\n\tOwl.prototype.next = function (speed) {\n\t\tspeed = speed || false;\n\t\tthis.to(this.relative(this.current()) + 1, speed);\n\t};\n\n\t/**\n  * Slides to the previous item.\n  * @public\n  * @param {Number} [speed] - The time in milliseconds for the transition.\n  */\n\tOwl.prototype.prev = function (speed) {\n\t\tspeed = speed || false;\n\t\tthis.to(this.relative(this.current()) - 1, speed);\n\t};\n\n\t/**\n  * Handles the end of an animation.\n  * @protected\n  * @param {Event} event - The event arguments.\n  */\n\tOwl.prototype.onTransitionEnd = function (event) {\n\n\t\t// if css2 animation then event object is undefined\n\t\tif (event !== undefined) {\n\t\t\tevent.stopPropagation();\n\n\t\t\t// Catch only owl-stage transitionEnd event\n\t\t\tif ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\n\t\tthis.leave('animating');\n\t\tthis.trigger('translated');\n\t};\n\n\t/**\n  * Gets viewport width.\n  * @protected\n  * @return {Number} - The width in pixel.\n  */\n\tOwl.prototype.viewport = function () {\n\t\tvar width;\n\t\tif (this.options.responsiveBaseElement !== window) {\n\t\t\twidth = $(this.options.responsiveBaseElement).width();\n\t\t} else if (window.innerWidth) {\n\t\t\twidth = window.innerWidth;\n\t\t} else if (document.documentElement && document.documentElement.clientWidth) {\n\t\t\twidth = document.documentElement.clientWidth;\n\t\t} else {\n\t\t\tconsole.warn('Can not detect viewport width.');\n\t\t}\n\t\treturn width;\n\t};\n\n\t/**\n  * Replaces the current content.\n  * @public\n  * @param {HTMLElement|jQuery|String} content - The new content.\n  */\n\tOwl.prototype.replace = function (content) {\n\t\tthis.$stage.empty();\n\t\tthis._items = [];\n\n\t\tif (content) {\n\t\t\tcontent = content instanceof jQuery ? content : $(content);\n\t\t}\n\n\t\tif (this.settings.nestedItemSelector) {\n\t\t\tcontent = content.find('.' + this.settings.nestedItemSelector);\n\t\t}\n\n\t\tcontent.filter(function () {\n\t\t\treturn this.nodeType === 1;\n\t\t}).each($.proxy(function (index, item) {\n\t\t\titem = this.prepare(item);\n\t\t\tthis.$stage.append(item);\n\t\t\tthis._items.push(item);\n\t\t\tthis._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);\n\t\t}, this));\n\n\t\tthis.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);\n\n\t\tthis.invalidate('items');\n\t};\n\n\t/**\n  * Adds an item.\n  * @todo Use `item` instead of `content` for the event arguments.\n  * @public\n  * @param {HTMLElement|jQuery|String} content - The item content to add.\n  * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.\n  */\n\tOwl.prototype.add = function (content, position) {\n\t\tvar current = this.relative(this._current);\n\n\t\tposition = position === undefined ? this._items.length : this.normalize(position, true);\n\t\tcontent = content instanceof jQuery ? content : $(content);\n\n\t\tthis.trigger('add', { content: content, position: position });\n\n\t\tcontent = this.prepare(content);\n\n\t\tif (this._items.length === 0 || position === this._items.length) {\n\t\t\tthis._items.length === 0 && this.$stage.append(content);\n\t\t\tthis._items.length !== 0 && this._items[position - 1].after(content);\n\t\t\tthis._items.push(content);\n\t\t\tthis._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);\n\t\t} else {\n\t\t\tthis._items[position].before(content);\n\t\t\tthis._items.splice(position, 0, content);\n\t\t\tthis._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);\n\t\t}\n\n\t\tthis._items[current] && this.reset(this._items[current].index());\n\n\t\tthis.invalidate('items');\n\n\t\tthis.trigger('added', { content: content, position: position });\n\t};\n\n\t/**\n  * Removes an item by its position.\n  * @todo Use `item` instead of `content` for the event arguments.\n  * @public\n  * @param {Number} position - The relative position of the item to remove.\n  */\n\tOwl.prototype.remove = function (position) {\n\t\tposition = this.normalize(position, true);\n\n\t\tif (position === undefined) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis.trigger('remove', { content: this._items[position], position: position });\n\n\t\tthis._items[position].remove();\n\t\tthis._items.splice(position, 1);\n\t\tthis._mergers.splice(position, 1);\n\n\t\tthis.invalidate('items');\n\n\t\tthis.trigger('removed', { content: null, position: position });\n\t};\n\n\t/**\n  * Preloads images with auto width.\n  * @todo Replace by a more generic approach\n  * @protected\n  */\n\tOwl.prototype.preloadAutoWidthImages = function (images) {\n\t\timages.each($.proxy(function (i, element) {\n\t\t\tthis.enter('pre-loading');\n\t\t\telement = $(element);\n\t\t\t$(new Image()).one('load', $.proxy(function (e) {\n\t\t\t\telement.attr('src', e.target.src);\n\t\t\t\telement.css('opacity', 1);\n\t\t\t\tthis.leave('pre-loading');\n\t\t\t\t!this.is('pre-loading') && !this.is('initializing') && this.refresh();\n\t\t\t}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));\n\t\t}, this));\n\t};\n\n\t/**\n  * Destroys the carousel.\n  * @public\n  */\n\tOwl.prototype.destroy = function () {\n\n\t\tthis.$element.off('.owl.core');\n\t\tthis.$stage.off('.owl.core');\n\t\t$(document).off('.owl.core');\n\n\t\tif (this.settings.responsive !== false) {\n\t\t\twindow.clearTimeout(this.resizeTimer);\n\t\t\tthis.off(window, 'resize', this._handlers.onThrottledResize);\n\t\t}\n\n\t\tfor (var i in this._plugins) {\n\t\t\tthis._plugins[i].destroy();\n\t\t}\n\n\t\tthis.$stage.children('.cloned').remove();\n\n\t\tthis.$stage.unwrap();\n\t\tthis.$stage.children().contents().unwrap();\n\t\tthis.$stage.children().unwrap();\n\n\t\tthis.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\\\S+\\\\s', 'g'), '')).removeData('owl.carousel');\n\t};\n\n\t/**\n  * Operators to calculate right-to-left and left-to-right.\n  * @protected\n  * @param {Number} [a] - The left side operand.\n  * @param {String} [o] - The operator.\n  * @param {Number} [b] - The right side operand.\n  */\n\tOwl.prototype.op = function (a, o, b) {\n\t\tvar rtl = this.settings.rtl;\n\t\tswitch (o) {\n\t\t\tcase '<':\n\t\t\t\treturn rtl ? a > b : a < b;\n\t\t\tcase '>':\n\t\t\t\treturn rtl ? a < b : a > b;\n\t\t\tcase '>=':\n\t\t\t\treturn rtl ? a <= b : a >= b;\n\t\t\tcase '<=':\n\t\t\t\treturn rtl ? a >= b : a <= b;\n\t\t\tdefault:\n\t\t\t\tbreak;\n\t\t}\n\t};\n\n\t/**\n  * Attaches to an internal event.\n  * @protected\n  * @param {HTMLElement} element - The event source.\n  * @param {String} event - The event name.\n  * @param {Function} listener - The event handler to attach.\n  * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.\n  */\n\tOwl.prototype.on = function (element, event, listener, capture) {\n\t\tif (element.addEventListener) {\n\t\t\telement.addEventListener(event, listener, capture);\n\t\t} else if (element.attachEvent) {\n\t\t\telement.attachEvent('on' + event, listener);\n\t\t}\n\t};\n\n\t/**\n  * Detaches from an internal event.\n  * @protected\n  * @param {HTMLElement} element - The event source.\n  * @param {String} event - The event name.\n  * @param {Function} listener - The attached event handler to detach.\n  * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.\n  */\n\tOwl.prototype.off = function (element, event, listener, capture) {\n\t\tif (element.removeEventListener) {\n\t\t\telement.removeEventListener(event, listener, capture);\n\t\t} else if (element.detachEvent) {\n\t\t\telement.detachEvent('on' + event, listener);\n\t\t}\n\t};\n\n\t/**\n  * Triggers a public event.\n  * @todo Remove `status`, `relatedTarget` should be used instead.\n  * @protected\n  * @param {String} name - The event name.\n  * @param {*} [data=null] - The event data.\n  * @param {String} [namespace=carousel] - The event namespace.\n  * @param {String} [state] - The state which is associated with the event.\n  * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.\n  * @returns {Event} - The event arguments.\n  */\n\tOwl.prototype.trigger = function (name, data, namespace, state, enter) {\n\t\tvar status = {\n\t\t\titem: { count: this._items.length, index: this.current() }\n\t\t},\n\t\t    handler = $.camelCase($.grep(['on', name, namespace], function (v) {\n\t\t\treturn v;\n\t\t}).join('-').toLowerCase()),\n\t\t    event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({ relatedTarget: this }, status, data));\n\n\t\tif (!this._supress[name]) {\n\t\t\t$.each(this._plugins, function (name, plugin) {\n\t\t\t\tif (plugin.onTrigger) {\n\t\t\t\t\tplugin.onTrigger(event);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tthis.register({ type: Owl.Type.Event, name: name });\n\t\t\tthis.$element.trigger(event);\n\n\t\t\tif (this.settings && typeof this.settings[handler] === 'function') {\n\t\t\t\tthis.settings[handler].call(this, event);\n\t\t\t}\n\t\t}\n\n\t\treturn event;\n\t};\n\n\t/**\n  * Enters a state.\n  * @param name - The state name.\n  */\n\tOwl.prototype.enter = function (name) {\n\t\t$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {\n\t\t\tif (this._states.current[name] === undefined) {\n\t\t\t\tthis._states.current[name] = 0;\n\t\t\t}\n\n\t\t\tthis._states.current[name]++;\n\t\t}, this));\n\t};\n\n\t/**\n  * Leaves a state.\n  * @param name - The state name.\n  */\n\tOwl.prototype.leave = function (name) {\n\t\t$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {\n\t\t\tthis._states.current[name]--;\n\t\t}, this));\n\t};\n\n\t/**\n  * Registers an event or state.\n  * @public\n  * @param {Object} object - The event or state to register.\n  */\n\tOwl.prototype.register = function (object) {\n\t\tif (object.type === Owl.Type.Event) {\n\t\t\tif (!$.event.special[object.name]) {\n\t\t\t\t$.event.special[object.name] = {};\n\t\t\t}\n\n\t\t\tif (!$.event.special[object.name].owl) {\n\t\t\t\tvar _default = $.event.special[object.name]._default;\n\t\t\t\t$.event.special[object.name]._default = function (e) {\n\t\t\t\t\tif (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {\n\t\t\t\t\t\treturn _default.apply(this, arguments);\n\t\t\t\t\t}\n\t\t\t\t\treturn e.namespace && e.namespace.indexOf('owl') > -1;\n\t\t\t\t};\n\t\t\t\t$.event.special[object.name].owl = true;\n\t\t\t}\n\t\t} else if (object.type === Owl.Type.State) {\n\t\t\tif (!this._states.tags[object.name]) {\n\t\t\t\tthis._states.tags[object.name] = object.tags;\n\t\t\t} else {\n\t\t\t\tthis._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);\n\t\t\t}\n\n\t\t\tthis._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {\n\t\t\t\treturn $.inArray(tag, this._states.tags[object.name]) === i;\n\t\t\t}, this));\n\t\t}\n\t};\n\n\t/**\n  * Suppresses events.\n  * @protected\n  * @param {Array.<String>} events - The events to suppress.\n  */\n\tOwl.prototype.suppress = function (events) {\n\t\t$.each(events, $.proxy(function (index, event) {\n\t\t\tthis._supress[event] = true;\n\t\t}, this));\n\t};\n\n\t/**\n  * Releases suppressed events.\n  * @protected\n  * @param {Array.<String>} events - The events to release.\n  */\n\tOwl.prototype.release = function (events) {\n\t\t$.each(events, $.proxy(function (index, event) {\n\t\t\tdelete this._supress[event];\n\t\t}, this));\n\t};\n\n\t/**\n  * Gets unified pointer coordinates from event.\n  * @todo #261\n  * @protected\n  * @param {Event} - The `mousedown` or `touchstart` event.\n  * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.\n  */\n\tOwl.prototype.pointer = function (event) {\n\t\tvar result = { x: null, y: null };\n\n\t\tevent = event.originalEvent || event || window.event;\n\n\t\tevent = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;\n\n\t\tif (event.pageX) {\n\t\t\tresult.x = event.pageX;\n\t\t\tresult.y = event.pageY;\n\t\t} else {\n\t\t\tresult.x = event.clientX;\n\t\t\tresult.y = event.clientY;\n\t\t}\n\n\t\treturn result;\n\t};\n\n\t/**\n  * Determines if the input is a Number or something that can be coerced to a Number\n  * @protected\n  * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested\n  * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number\n  */\n\tOwl.prototype.isNumeric = function (number) {\n\t\treturn !isNaN(parseFloat(number));\n\t};\n\n\t/**\n  * Gets the difference of two vectors.\n  * @todo #261\n  * @protected\n  * @param {Object} - The first vector.\n  * @param {Object} - The second vector.\n  * @returns {Object} - The difference.\n  */\n\tOwl.prototype.difference = function (first, second) {\n\t\treturn {\n\t\t\tx: first.x - second.x,\n\t\t\ty: first.y - second.y\n\t\t};\n\t};\n\n\t/**\n  * The jQuery Plugin for the Owl Carousel\n  * @todo Navigation plugin `next` and `prev`\n  * @public\n  */\n\t$.fn.owlCarousel = function (option) {\n\t\tvar args = Array.prototype.slice.call(arguments, 1);\n\n\t\treturn this.each(function () {\n\t\t\tvar $this = $(this),\n\t\t\t    data = $this.data('owl.carousel');\n\n\t\t\tif (!data) {\n\t\t\t\tdata = new Owl(this, (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);\n\t\t\t\t$this.data('owl.carousel', data);\n\n\t\t\t\t$.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function (i, event) {\n\t\t\t\t\tdata.register({ type: Owl.Type.Event, name: event });\n\t\t\t\t\tdata.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {\n\t\t\t\t\t\tif (e.namespace && e.relatedTarget !== this) {\n\t\t\t\t\t\t\tthis.suppress([event]);\n\t\t\t\t\t\t\tdata[event].apply(this, [].slice.call(arguments, 1));\n\t\t\t\t\t\t\tthis.release([event]);\n\t\t\t\t\t\t}\n\t\t\t\t\t}, data));\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tif (typeof option == 'string' && option.charAt(0) !== '_') {\n\t\t\t\tdata[option].apply(data, args);\n\t\t\t}\n\t\t});\n\t};\n\n\t/**\n  * The constructor for the jQuery Plugin\n  * @public\n  */\n\t$.fn.owlCarousel.Constructor = Owl;\n})(window.Zepto || window.jQuery, window, document);\n\n/**\n * AutoRefresh Plugin\n * @version 2.1.0\n * @author Artus Kolanowski\n * @author David Deutsch\n * @license The MIT License (MIT)\n */\n;(function ($, window, document, undefined) {\n\n\t/**\n  * Creates the auto refresh plugin.\n  * @class The Auto Refresh Plugin\n  * @param {Owl} carousel - The Owl Carousel\n  */\n\tvar AutoRefresh = function AutoRefresh(carousel) {\n\t\t/**\n   * Reference to the core.\n   * @protected\n   * @type {Owl}\n   */\n\t\tthis._core = carousel;\n\n\t\t/**\n   * Refresh interval.\n   * @protected\n   * @type {number}\n   */\n\t\tthis._interval = null;\n\n\t\t/**\n   * Whether the element is currently visible or not.\n   * @protected\n   * @type {Boolean}\n   */\n\t\tthis._visible = null;\n\n\t\t/**\n   * All event handlers.\n   * @protected\n   * @type {Object}\n   */\n\t\tthis._handlers = {\n\t\t\t'initialized.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._core.settings.autoRefresh) {\n\t\t\t\t\tthis.watch();\n\t\t\t\t}\n\t\t\t}, this)\n\t\t};\n\n\t\t// set default options\n\t\tthis._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);\n\n\t\t// register event handlers\n\t\tthis._core.$element.on(this._handlers);\n\t};\n\n\t/**\n  * Default options.\n  * @public\n  */\n\tAutoRefresh.Defaults = {\n\t\tautoRefresh: true,\n\t\tautoRefreshInterval: 500\n\t};\n\n\t/**\n  * Watches the element.\n  */\n\tAutoRefresh.prototype.watch = function () {\n\t\tif (this._interval) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis._visible = this._core.$element.is(':visible');\n\t\tthis._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);\n\t};\n\n\t/**\n  * Refreshes the element.\n  */\n\tAutoRefresh.prototype.refresh = function () {\n\t\tif (this._core.$element.is(':visible') === this._visible) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis._visible = !this._visible;\n\n\t\tthis._core.$element.toggleClass('owl-hidden', !this._visible);\n\n\t\tthis._visible && this._core.invalidate('width') && this._core.refresh();\n\t};\n\n\t/**\n  * Destroys the plugin.\n  */\n\tAutoRefresh.prototype.destroy = function () {\n\t\tvar handler, property;\n\n\t\twindow.clearInterval(this._interval);\n\n\t\tfor (handler in this._handlers) {\n\t\t\tthis._core.$element.off(handler, this._handlers[handler]);\n\t\t}\n\t\tfor (property in Object.getOwnPropertyNames(this)) {\n\t\t\ttypeof this[property] != 'function' && (this[property] = null);\n\t\t}\n\t};\n\n\t$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;\n})(window.Zepto || window.jQuery, window, document);\n\n/**\n * Lazy Plugin\n * @version 2.1.0\n * @author Bartosz Wojciechowski\n * @author David Deutsch\n * @license The MIT License (MIT)\n */\n;(function ($, window, document, undefined) {\n\n\t/**\n  * Creates the lazy plugin.\n  * @class The Lazy Plugin\n  * @param {Owl} carousel - The Owl Carousel\n  */\n\tvar Lazy = function Lazy(carousel) {\n\n\t\t/**\n   * Reference to the core.\n   * @protected\n   * @type {Owl}\n   */\n\t\tthis._core = carousel;\n\n\t\t/**\n   * Already loaded items.\n   * @protected\n   * @type {Array.<jQuery>}\n   */\n\t\tthis._loaded = [];\n\n\t\t/**\n   * Event handlers.\n   * @protected\n   * @type {Object}\n   */\n\t\tthis._handlers = {\n\t\t\t'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (!e.namespace) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (!this._core.settings || !this._core.settings.lazyLoad) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (e.property && e.property.name == 'position' || e.type == 'initialized') {\n\t\t\t\t\tvar settings = this._core.settings,\n\t\t\t\t\t    n = settings.center && Math.ceil(settings.items / 2) || settings.items,\n\t\t\t\t\t    i = settings.center && n * -1 || 0,\n\t\t\t\t\t    position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,\n\t\t\t\t\t    clones = this._core.clones().length,\n\t\t\t\t\t    load = $.proxy(function (i, v) {\n\t\t\t\t\t\tthis.load(v);\n\t\t\t\t\t}, this);\n\n\t\t\t\t\twhile (i++ < n) {\n\t\t\t\t\t\tthis.load(clones / 2 + this._core.relative(position));\n\t\t\t\t\t\tclones && $.each(this._core.clones(this._core.relative(position)), load);\n\t\t\t\t\t\tposition++;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, this)\n\t\t};\n\n\t\t// set the default options\n\t\tthis._core.options = $.extend({}, Lazy.Defaults, this._core.options);\n\n\t\t// register event handler\n\t\tthis._core.$element.on(this._handlers);\n\t};\n\n\t/**\n  * Default options.\n  * @public\n  */\n\tLazy.Defaults = {\n\t\tlazyLoad: false\n\t};\n\n\t/**\n  * Loads all resources of an item at the specified position.\n  * @param {Number} position - The absolute position of the item.\n  * @protected\n  */\n\tLazy.prototype.load = function (position) {\n\t\tvar $item = this._core.$stage.children().eq(position),\n\t\t    $elements = $item && $item.find('.owl-lazy');\n\n\t\tif (!$elements || $.inArray($item.get(0), this._loaded) > -1) {\n\t\t\treturn;\n\t\t}\n\n\t\t$elements.each($.proxy(function (index, element) {\n\t\t\tvar $element = $(element),\n\t\t\t    image,\n\t\t\t    url = window.devicePixelRatio > 1 && $element.attr('data-src-retina') || $element.attr('data-src');\n\n\t\t\tthis._core.trigger('load', { element: $element, url: url }, 'lazy');\n\n\t\t\tif ($element.is('img')) {\n\t\t\t\t$element.one('load.owl.lazy', $.proxy(function () {\n\t\t\t\t\t$element.css('opacity', 1);\n\t\t\t\t\tthis._core.trigger('loaded', { element: $element, url: url }, 'lazy');\n\t\t\t\t}, this)).attr('src', url);\n\t\t\t} else {\n\t\t\t\timage = new Image();\n\t\t\t\timage.onload = $.proxy(function () {\n\t\t\t\t\t$element.css({\n\t\t\t\t\t\t'background-image': 'url(\"' + url + '\")',\n\t\t\t\t\t\t'opacity': '1'\n\t\t\t\t\t});\n\t\t\t\t\tthis._core.trigger('loaded', { element: $element, url: url }, 'lazy');\n\t\t\t\t}, this);\n\t\t\t\timage.src = url;\n\t\t\t}\n\t\t}, this));\n\n\t\tthis._loaded.push($item.get(0));\n\t};\n\n\t/**\n  * Destroys the plugin.\n  * @public\n  */\n\tLazy.prototype.destroy = function () {\n\t\tvar handler, property;\n\n\t\tfor (handler in this.handlers) {\n\t\t\tthis._core.$element.off(handler, this.handlers[handler]);\n\t\t}\n\t\tfor (property in Object.getOwnPropertyNames(this)) {\n\t\t\ttypeof this[property] != 'function' && (this[property] = null);\n\t\t}\n\t};\n\n\t$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;\n})(window.Zepto || window.jQuery, window, document);\n\n/**\n * AutoHeight Plugin\n * @version 2.1.0\n * @author Bartosz Wojciechowski\n * @author David Deutsch\n * @license The MIT License (MIT)\n */\n;(function ($, window, document, undefined) {\n\n\t/**\n  * Creates the auto height plugin.\n  * @class The Auto Height Plugin\n  * @param {Owl} carousel - The Owl Carousel\n  */\n\tvar AutoHeight = function AutoHeight(carousel) {\n\t\t/**\n   * Reference to the core.\n   * @protected\n   * @type {Owl}\n   */\n\t\tthis._core = carousel;\n\n\t\t/**\n   * All event handlers.\n   * @protected\n   * @type {Object}\n   */\n\t\tthis._handlers = {\n\t\t\t'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._core.settings.autoHeight) {\n\t\t\t\t\tthis.update();\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'changed.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._core.settings.autoHeight && e.property.name == 'position') {\n\t\t\t\t\tthis.update();\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'loaded.owl.lazy': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {\n\t\t\t\t\tthis.update();\n\t\t\t\t}\n\t\t\t}, this)\n\t\t};\n\n\t\t// set default options\n\t\tthis._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);\n\n\t\t// register event handlers\n\t\tthis._core.$element.on(this._handlers);\n\t};\n\n\t/**\n  * Default options.\n  * @public\n  */\n\tAutoHeight.Defaults = {\n\t\tautoHeight: false,\n\t\tautoHeightClass: 'owl-height'\n\t};\n\n\t/**\n  * Updates the view.\n  */\n\tAutoHeight.prototype.update = function () {\n\t\tvar start = this._core._current,\n\t\t    end = start + this._core.settings.items,\n\t\t    visible = this._core.$stage.children().toArray().slice(start, end),\n\t\t    heights = [],\n\t\t    maxheight = 0;\n\n\t\t$.each(visible, function (index, item) {\n\t\t\theights.push($(item).height());\n\t\t});\n\n\t\tmaxheight = Math.max.apply(null, heights);\n\n\t\tthis._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);\n\t};\n\n\tAutoHeight.prototype.destroy = function () {\n\t\tvar handler, property;\n\n\t\tfor (handler in this._handlers) {\n\t\t\tthis._core.$element.off(handler, this._handlers[handler]);\n\t\t}\n\t\tfor (property in Object.getOwnPropertyNames(this)) {\n\t\t\ttypeof this[property] != 'function' && (this[property] = null);\n\t\t}\n\t};\n\n\t$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;\n})(window.Zepto || window.jQuery, window, document);\n\n/**\n * Video Plugin\n * @version 2.1.0\n * @author Bartosz Wojciechowski\n * @author David Deutsch\n * @license The MIT License (MIT)\n */\n;(function ($, window, document, undefined) {\n\n\t/**\n  * Creates the video plugin.\n  * @class The Video Plugin\n  * @param {Owl} carousel - The Owl Carousel\n  */\n\tvar Video = function Video(carousel) {\n\t\t/**\n   * Reference to the core.\n   * @protected\n   * @type {Owl}\n   */\n\t\tthis._core = carousel;\n\n\t\t/**\n   * Cache all video URLs.\n   * @protected\n   * @type {Object}\n   */\n\t\tthis._videos = {};\n\n\t\t/**\n   * Current playing item.\n   * @protected\n   * @type {jQuery}\n   */\n\t\tthis._playing = null;\n\n\t\t/**\n   * All event handlers.\n   * @todo The cloned content removale is too late\n   * @protected\n   * @type {Object}\n   */\n\t\tthis._handlers = {\n\t\t\t'initialized.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace) {\n\t\t\t\t\tthis._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'resize.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._core.settings.video && this.isInFullScreen()) {\n\t\t\t\t\te.preventDefault();\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'refreshed.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._core.is('resizing')) {\n\t\t\t\t\tthis._core.$stage.find('.cloned .owl-video-frame').remove();\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'changed.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && e.property.name === 'position' && this._playing) {\n\t\t\t\t\tthis.stop();\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'prepared.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (!e.namespace) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tvar $element = $(e.content).find('.owl-video');\n\n\t\t\t\tif ($element.length) {\n\t\t\t\t\t$element.css('display', 'none');\n\t\t\t\t\tthis.fetch($element, $(e.content));\n\t\t\t\t}\n\t\t\t}, this)\n\t\t};\n\n\t\t// set default options\n\t\tthis._core.options = $.extend({}, Video.Defaults, this._core.options);\n\n\t\t// register event handlers\n\t\tthis._core.$element.on(this._handlers);\n\n\t\tthis._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {\n\t\t\tthis.play(e);\n\t\t}, this));\n\t};\n\n\t/**\n  * Default options.\n  * @public\n  */\n\tVideo.Defaults = {\n\t\tvideo: false,\n\t\tvideoHeight: false,\n\t\tvideoWidth: false\n\t};\n\n\t/**\n  * Gets the video ID and the type (YouTube/Vimeo/vzaar only).\n  * @protected\n  * @param {jQuery} target - The target containing the video data.\n  * @param {jQuery} item - The item containing the video.\n  */\n\tVideo.prototype.fetch = function (target, item) {\n\t\tvar type = function () {\n\t\t\tif (target.attr('data-vimeo-id')) {\n\t\t\t\treturn 'vimeo';\n\t\t\t} else if (target.attr('data-vzaar-id')) {\n\t\t\t\treturn 'vzaar';\n\t\t\t} else {\n\t\t\t\treturn 'youtube';\n\t\t\t}\n\t\t}(),\n\t\t    id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),\n\t\t    width = target.attr('data-width') || this._core.settings.videoWidth,\n\t\t    height = target.attr('data-height') || this._core.settings.videoHeight,\n\t\t    url = target.attr('href');\n\n\t\tif (url) {\n\n\t\t\t/*\n   \t\tParses the id's out of the following urls (and probably more):\n   \t\thttps://www.youtube.com/watch?v=:id\n   \t\thttps://youtu.be/:id\n   \t\thttps://vimeo.com/:id\n   \t\thttps://vimeo.com/channels/:channel/:id\n   \t\thttps://vimeo.com/groups/:group/videos/:id\n   \t\thttps://app.vzaar.com/videos/:id\n   \t\t\tVisual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F\n   */\n\n\t\t\tid = url.match(/(http:|https:|)\\/\\/(player.|www.|app.)?(vimeo\\.com|youtu(be\\.com|\\.be|be\\.googleapis\\.com)|vzaar\\.com)\\/(video\\/|videos\\/|embed\\/|channels\\/.+\\/|groups\\/.+\\/|watch\\?v=|v\\/)?([A-Za-z0-9._%-]*)(\\&\\S+)?/);\n\n\t\t\tif (id[3].indexOf('youtu') > -1) {\n\t\t\t\ttype = 'youtube';\n\t\t\t} else if (id[3].indexOf('vimeo') > -1) {\n\t\t\t\ttype = 'vimeo';\n\t\t\t} else if (id[3].indexOf('vzaar') > -1) {\n\t\t\t\ttype = 'vzaar';\n\t\t\t} else {\n\t\t\t\tthrow new Error('Video URL not supported.');\n\t\t\t}\n\t\t\tid = id[6];\n\t\t} else {\n\t\t\tthrow new Error('Missing video URL.');\n\t\t}\n\n\t\tthis._videos[url] = {\n\t\t\ttype: type,\n\t\t\tid: id,\n\t\t\twidth: width,\n\t\t\theight: height\n\t\t};\n\n\t\titem.attr('data-video', url);\n\n\t\tthis.thumbnail(target, this._videos[url]);\n\t};\n\n\t/**\n  * Creates video thumbnail.\n  * @protected\n  * @param {jQuery} target - The target containing the video data.\n  * @param {Object} info - The video info object.\n  * @see `fetch`\n  */\n\tVideo.prototype.thumbnail = function (target, video) {\n\t\tvar tnLink,\n\t\t    icon,\n\t\t    path,\n\t\t    dimensions = video.width && video.height ? 'style=\"width:' + video.width + 'px;height:' + video.height + 'px;\"' : '',\n\t\t    customTn = target.find('img'),\n\t\t    srcType = 'src',\n\t\t    lazyClass = '',\n\t\t    settings = this._core.settings,\n\t\t    create = function create(path) {\n\t\t\ticon = '<div class=\"owl-video-play-icon\"></div>';\n\n\t\t\tif (settings.lazyLoad) {\n\t\t\t\ttnLink = '<div class=\"owl-video-tn ' + lazyClass + '\" ' + srcType + '=\"' + path + '\"></div>';\n\t\t\t} else {\n\t\t\t\ttnLink = '<div class=\"owl-video-tn\" style=\"opacity:1;background-image:url(' + path + ')\"></div>';\n\t\t\t}\n\t\t\ttarget.after(tnLink);\n\t\t\ttarget.after(icon);\n\t\t};\n\n\t\t// wrap video content into owl-video-wrapper div\n\t\ttarget.wrap('<div class=\"owl-video-wrapper\"' + dimensions + '></div>');\n\n\t\tif (this._core.settings.lazyLoad) {\n\t\t\tsrcType = 'data-src';\n\t\t\tlazyClass = 'owl-lazy';\n\t\t}\n\n\t\t// custom thumbnail\n\t\tif (customTn.length) {\n\t\t\tcreate(customTn.attr(srcType));\n\t\t\tcustomTn.remove();\n\t\t\treturn false;\n\t\t}\n\n\t\tif (video.type === 'youtube') {\n\t\t\tpath = \"//img.youtube.com/vi/\" + video.id + \"/hqdefault.jpg\";\n\t\t\tcreate(path);\n\t\t} else if (video.type === 'vimeo') {\n\t\t\t$.ajax({\n\t\t\t\ttype: 'GET',\n\t\t\t\turl: '//vimeo.com/api/v2/video/' + video.id + '.json',\n\t\t\t\tjsonp: 'callback',\n\t\t\t\tdataType: 'jsonp',\n\t\t\t\tsuccess: function success(data) {\n\t\t\t\t\tpath = data[0].thumbnail_large;\n\t\t\t\t\tcreate(path);\n\t\t\t\t}\n\t\t\t});\n\t\t} else if (video.type === 'vzaar') {\n\t\t\t$.ajax({\n\t\t\t\ttype: 'GET',\n\t\t\t\turl: '//vzaar.com/api/videos/' + video.id + '.json',\n\t\t\t\tjsonp: 'callback',\n\t\t\t\tdataType: 'jsonp',\n\t\t\t\tsuccess: function success(data) {\n\t\t\t\t\tpath = data.framegrab_url;\n\t\t\t\t\tcreate(path);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t};\n\n\t/**\n  * Stops the current video.\n  * @public\n  */\n\tVideo.prototype.stop = function () {\n\t\tthis._core.trigger('stop', null, 'video');\n\t\tthis._playing.find('.owl-video-frame').remove();\n\t\tthis._playing.removeClass('owl-video-playing');\n\t\tthis._playing = null;\n\t\tthis._core.leave('playing');\n\t\tthis._core.trigger('stopped', null, 'video');\n\t};\n\n\t/**\n  * Starts the current video.\n  * @public\n  * @param {Event} event - The event arguments.\n  */\n\tVideo.prototype.play = function (event) {\n\t\tvar target = $(event.target),\n\t\t    item = target.closest('.' + this._core.settings.itemClass),\n\t\t    video = this._videos[item.attr('data-video')],\n\t\t    width = video.width || '100%',\n\t\t    height = video.height || this._core.$stage.height(),\n\t\t    html;\n\n\t\tif (this._playing) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis._core.enter('playing');\n\t\tthis._core.trigger('play', null, 'video');\n\n\t\titem = this._core.items(this._core.relative(item.index()));\n\n\t\tthis._core.reset(item.index());\n\n\t\tif (video.type === 'youtube') {\n\t\t\thtml = '<iframe width=\"' + width + '\" height=\"' + height + '\" src=\"//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id + '\" frameborder=\"0\" allowfullscreen></iframe>';\n\t\t} else if (video.type === 'vimeo') {\n\t\t\thtml = '<iframe src=\"//player.vimeo.com/video/' + video.id + '?autoplay=1\" width=\"' + width + '\" height=\"' + height + '\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';\n\t\t} else if (video.type === 'vzaar') {\n\t\t\thtml = '<iframe frameborder=\"0\"' + 'height=\"' + height + '\"' + 'width=\"' + width + '\" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' + 'src=\"//view.vzaar.com/' + video.id + '/player?autoplay=true\"></iframe>';\n\t\t}\n\n\t\t$('<div class=\"owl-video-frame\">' + html + '</div>').insertAfter(item.find('.owl-video'));\n\n\t\tthis._playing = item.addClass('owl-video-playing');\n\t};\n\n\t/**\n  * Checks whether an video is currently in full screen mode or not.\n  * @todo Bad style because looks like a readonly method but changes members.\n  * @protected\n  * @returns {Boolean}\n  */\n\tVideo.prototype.isInFullScreen = function () {\n\t\tvar element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;\n\n\t\treturn element && $(element).parent().hasClass('owl-video-frame');\n\t};\n\n\t/**\n  * Destroys the plugin.\n  */\n\tVideo.prototype.destroy = function () {\n\t\tvar handler, property;\n\n\t\tthis._core.$element.off('click.owl.video');\n\n\t\tfor (handler in this._handlers) {\n\t\t\tthis._core.$element.off(handler, this._handlers[handler]);\n\t\t}\n\t\tfor (property in Object.getOwnPropertyNames(this)) {\n\t\t\ttypeof this[property] != 'function' && (this[property] = null);\n\t\t}\n\t};\n\n\t$.fn.owlCarousel.Constructor.Plugins.Video = Video;\n})(window.Zepto || window.jQuery, window, document);\n\n/**\n * Animate Plugin\n * @version 2.1.0\n * @author Bartosz Wojciechowski\n * @author David Deutsch\n * @license The MIT License (MIT)\n */\n;(function ($, window, document, undefined) {\n\n\t/**\n  * Creates the animate plugin.\n  * @class The Navigation Plugin\n  * @param {Owl} scope - The Owl Carousel\n  */\n\tvar Animate = function Animate(scope) {\n\t\tthis.core = scope;\n\t\tthis.core.options = $.extend({}, Animate.Defaults, this.core.options);\n\t\tthis.swapping = true;\n\t\tthis.previous = undefined;\n\t\tthis.next = undefined;\n\n\t\tthis.handlers = {\n\t\t\t'change.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && e.property.name == 'position') {\n\t\t\t\t\tthis.previous = this.core.current();\n\t\t\t\t\tthis.next = e.property.value;\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace) {\n\t\t\t\t\tthis.swapping = e.type == 'translated';\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'translate.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {\n\t\t\t\t\tthis.swap();\n\t\t\t\t}\n\t\t\t}, this)\n\t\t};\n\n\t\tthis.core.$element.on(this.handlers);\n\t};\n\n\t/**\n  * Default options.\n  * @public\n  */\n\tAnimate.Defaults = {\n\t\tanimateOut: false,\n\t\tanimateIn: false\n\t};\n\n\t/**\n  * Toggles the animation classes whenever an translations starts.\n  * @protected\n  * @returns {Boolean|undefined}\n  */\n\tAnimate.prototype.swap = function () {\n\n\t\tif (this.core.settings.items !== 1) {\n\t\t\treturn;\n\t\t}\n\n\t\tif (!$.support.animation || !$.support.transition) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis.core.speed(0);\n\n\t\tvar left,\n\t\t    clear = $.proxy(this.clear, this),\n\t\t    previous = this.core.$stage.children().eq(this.previous),\n\t\t    next = this.core.$stage.children().eq(this.next),\n\t\t    incoming = this.core.settings.animateIn,\n\t\t    outgoing = this.core.settings.animateOut;\n\n\t\tif (this.core.current() === this.previous) {\n\t\t\treturn;\n\t\t}\n\n\t\tif (outgoing) {\n\t\t\tleft = this.core.coordinates(this.previous) - this.core.coordinates(this.next);\n\t\t\tprevious.one($.support.animation.end, clear).css({ 'left': left + 'px' }).addClass('animated owl-animated-out').addClass(outgoing);\n\t\t}\n\n\t\tif (incoming) {\n\t\t\tnext.one($.support.animation.end, clear).addClass('animated owl-animated-in').addClass(incoming);\n\t\t}\n\t};\n\n\tAnimate.prototype.clear = function (e) {\n\t\t$(e.target).css({ 'left': '' }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);\n\t\tthis.core.onTransitionEnd();\n\t};\n\n\t/**\n  * Destroys the plugin.\n  * @public\n  */\n\tAnimate.prototype.destroy = function () {\n\t\tvar handler, property;\n\n\t\tfor (handler in this.handlers) {\n\t\t\tthis.core.$element.off(handler, this.handlers[handler]);\n\t\t}\n\t\tfor (property in Object.getOwnPropertyNames(this)) {\n\t\t\ttypeof this[property] != 'function' && (this[property] = null);\n\t\t}\n\t};\n\n\t$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;\n})(window.Zepto || window.jQuery, window, document);\n\n/**\n * Autoplay Plugin\n * @version 2.1.0\n * @author Bartosz Wojciechowski\n * @author Artus Kolanowski\n * @author David Deutsch\n * @license The MIT License (MIT)\n */\n;(function ($, window, document, undefined) {\n\n\t/**\n  * Creates the autoplay plugin.\n  * @class The Autoplay Plugin\n  * @param {Owl} scope - The Owl Carousel\n  */\n\tvar Autoplay = function Autoplay(carousel) {\n\t\t/**\n   * Reference to the core.\n   * @protected\n   * @type {Owl}\n   */\n\t\tthis._core = carousel;\n\n\t\t/**\n   * The autoplay timeout.\n   * @type {Timeout}\n   */\n\t\tthis._timeout = null;\n\n\t\t/**\n   * Indicates whenever the autoplay is paused.\n   * @type {Boolean}\n   */\n\t\tthis._paused = false;\n\n\t\t/**\n   * All event handlers.\n   * @protected\n   * @type {Object}\n   */\n\t\tthis._handlers = {\n\t\t\t'changed.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && e.property.name === 'settings') {\n\t\t\t\t\tif (this._core.settings.autoplay) {\n\t\t\t\t\t\tthis.play();\n\t\t\t\t\t} else {\n\t\t\t\t\t\tthis.stop();\n\t\t\t\t\t}\n\t\t\t\t} else if (e.namespace && e.property.name === 'position') {\n\t\t\t\t\t//console.log('play?', e);\n\t\t\t\t\tif (this._core.settings.autoplay) {\n\t\t\t\t\t\tthis._setAutoPlayInterval();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'initialized.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._core.settings.autoplay) {\n\t\t\t\t\tthis.play();\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'play.owl.autoplay': $.proxy(function (e, t, s) {\n\t\t\t\tif (e.namespace) {\n\t\t\t\t\tthis.play(t, s);\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'stop.owl.autoplay': $.proxy(function (e) {\n\t\t\t\tif (e.namespace) {\n\t\t\t\t\tthis.stop();\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'mouseover.owl.autoplay': $.proxy(function () {\n\t\t\t\tif (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {\n\t\t\t\t\tthis.pause();\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'mouseleave.owl.autoplay': $.proxy(function () {\n\t\t\t\tif (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {\n\t\t\t\t\tthis.play();\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'touchstart.owl.core': $.proxy(function () {\n\t\t\t\tif (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {\n\t\t\t\t\tthis.pause();\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'touchend.owl.core': $.proxy(function () {\n\t\t\t\tif (this._core.settings.autoplayHoverPause) {\n\t\t\t\t\tthis.play();\n\t\t\t\t}\n\t\t\t}, this)\n\t\t};\n\n\t\t// register event handlers\n\t\tthis._core.$element.on(this._handlers);\n\n\t\t// set default options\n\t\tthis._core.options = $.extend({}, Autoplay.Defaults, this._core.options);\n\t};\n\n\t/**\n  * Default options.\n  * @public\n  */\n\tAutoplay.Defaults = {\n\t\tautoplay: false,\n\t\tautoplayTimeout: 5000,\n\t\tautoplayHoverPause: false,\n\t\tautoplaySpeed: false\n\t};\n\n\t/**\n  * Starts the autoplay.\n  * @public\n  * @param {Number} [timeout] - The interval before the next animation starts.\n  * @param {Number} [speed] - The animation speed for the animations.\n  */\n\tAutoplay.prototype.play = function (timeout, speed) {\n\t\tthis._paused = false;\n\n\t\tif (this._core.is('rotating')) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis._core.enter('rotating');\n\n\t\tthis._setAutoPlayInterval();\n\t};\n\n\t/**\n  * Gets a new timeout\n  * @private\n  * @param {Number} [timeout] - The interval before the next animation starts.\n  * @param {Number} [speed] - The animation speed for the animations.\n  * @return {Timeout}\n  */\n\tAutoplay.prototype._getNextTimeout = function (timeout, speed) {\n\t\tif (this._timeout) {\n\t\t\twindow.clearTimeout(this._timeout);\n\t\t}\n\t\treturn window.setTimeout($.proxy(function () {\n\t\t\tif (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tthis._core.next(speed || this._core.settings.autoplaySpeed);\n\t\t}, this), timeout || this._core.settings.autoplayTimeout);\n\t};\n\n\t/**\n  * Sets autoplay in motion.\n  * @private\n  */\n\tAutoplay.prototype._setAutoPlayInterval = function () {\n\t\tthis._timeout = this._getNextTimeout();\n\t};\n\n\t/**\n  * Stops the autoplay.\n  * @public\n  */\n\tAutoplay.prototype.stop = function () {\n\t\tif (!this._core.is('rotating')) {\n\t\t\treturn;\n\t\t}\n\n\t\twindow.clearTimeout(this._timeout);\n\t\tthis._core.leave('rotating');\n\t};\n\n\t/**\n  * Stops the autoplay.\n  * @public\n  */\n\tAutoplay.prototype.pause = function () {\n\t\tif (!this._core.is('rotating')) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis._paused = true;\n\t};\n\n\t/**\n  * Destroys the plugin.\n  */\n\tAutoplay.prototype.destroy = function () {\n\t\tvar handler, property;\n\n\t\tthis.stop();\n\n\t\tfor (handler in this._handlers) {\n\t\t\tthis._core.$element.off(handler, this._handlers[handler]);\n\t\t}\n\t\tfor (property in Object.getOwnPropertyNames(this)) {\n\t\t\ttypeof this[property] != 'function' && (this[property] = null);\n\t\t}\n\t};\n\n\t$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;\n})(window.Zepto || window.jQuery, window, document);\n\n/**\n * Navigation Plugin\n * @version 2.1.0\n * @author Artus Kolanowski\n * @author David Deutsch\n * @license The MIT License (MIT)\n */\n;(function ($, window, document, undefined) {\n\t'use strict';\n\n\t/**\n  * Creates the navigation plugin.\n  * @class The Navigation Plugin\n  * @param {Owl} carousel - The Owl Carousel.\n  */\n\n\tvar Navigation = function Navigation(carousel) {\n\t\t/**\n   * Reference to the core.\n   * @protected\n   * @type {Owl}\n   */\n\t\tthis._core = carousel;\n\n\t\t/**\n   * Indicates whether the plugin is initialized or not.\n   * @protected\n   * @type {Boolean}\n   */\n\t\tthis._initialized = false;\n\n\t\t/**\n   * The current paging indexes.\n   * @protected\n   * @type {Array}\n   */\n\t\tthis._pages = [];\n\n\t\t/**\n   * All DOM elements of the user interface.\n   * @protected\n   * @type {Object}\n   */\n\t\tthis._controls = {};\n\n\t\t/**\n   * Markup for an indicator.\n   * @protected\n   * @type {Array.<String>}\n   */\n\t\tthis._templates = [];\n\n\t\t/**\n   * The carousel element.\n   * @type {jQuery}\n   */\n\t\tthis.$element = this._core.$element;\n\n\t\t/**\n   * Overridden methods of the carousel.\n   * @protected\n   * @type {Object}\n   */\n\t\tthis._overrides = {\n\t\t\tnext: this._core.next,\n\t\t\tprev: this._core.prev,\n\t\t\tto: this._core.to\n\t\t};\n\n\t\t/**\n   * All event handlers.\n   * @protected\n   * @type {Object}\n   */\n\t\tthis._handlers = {\n\t\t\t'prepared.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._core.settings.dotsData) {\n\t\t\t\t\tthis._templates.push('<div class=\"' + this._core.settings.dotClass + '\">' + $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'added.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._core.settings.dotsData) {\n\t\t\t\t\tthis._templates.splice(e.position, 0, this._templates.pop());\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'remove.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._core.settings.dotsData) {\n\t\t\t\t\tthis._templates.splice(e.position, 1);\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'changed.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && e.property.name == 'position') {\n\t\t\t\t\tthis.draw();\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'initialized.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && !this._initialized) {\n\t\t\t\t\tthis._core.trigger('initialize', null, 'navigation');\n\t\t\t\t\tthis.initialize();\n\t\t\t\t\tthis.update();\n\t\t\t\t\tthis.draw();\n\t\t\t\t\tthis._initialized = true;\n\t\t\t\t\tthis._core.trigger('initialized', null, 'navigation');\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'refreshed.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._initialized) {\n\t\t\t\t\tthis._core.trigger('refresh', null, 'navigation');\n\t\t\t\t\tthis.update();\n\t\t\t\t\tthis.draw();\n\t\t\t\t\tthis._core.trigger('refreshed', null, 'navigation');\n\t\t\t\t}\n\t\t\t}, this)\n\t\t};\n\n\t\t// set default options\n\t\tthis._core.options = $.extend({}, Navigation.Defaults, this._core.options);\n\n\t\t// register event handlers\n\t\tthis.$element.on(this._handlers);\n\t};\n\n\t/**\n  * Default options.\n  * @public\n  * @todo Rename `slideBy` to `navBy`\n  */\n\tNavigation.Defaults = {\n\t\tnav: false,\n\t\tnavText: ['prev', 'next'],\n\t\tnavSpeed: false,\n\t\tnavElement: 'div',\n\t\tnavContainer: false,\n\t\tnavContainerClass: 'owl-nav',\n\t\tnavClass: ['owl-prev', 'owl-next'],\n\t\tslideBy: 1,\n\t\tdotClass: 'owl-dot',\n\t\tdotsClass: 'owl-dots',\n\t\tdots: true,\n\t\tdotsEach: false,\n\t\tdotsData: false,\n\t\tdotsSpeed: false,\n\t\tdotsContainer: false\n\t};\n\n\t/**\n  * Initializes the layout of the plugin and extends the carousel.\n  * @protected\n  */\n\tNavigation.prototype.initialize = function () {\n\t\tvar override,\n\t\t    settings = this._core.settings;\n\n\t\t// create DOM structure for relative navigation\n\t\tthis._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');\n\n\t\tthis._controls.$previous = $('<' + settings.navElement + '>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click', $.proxy(function (e) {\n\t\t\tthis.prev(settings.navSpeed);\n\t\t}, this));\n\t\tthis._controls.$next = $('<' + settings.navElement + '>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click', $.proxy(function (e) {\n\t\t\tthis.next(settings.navSpeed);\n\t\t}, this));\n\n\t\t// create DOM structure for absolute navigation\n\t\tif (!settings.dotsData) {\n\t\t\tthis._templates = [$('<div>').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];\n\t\t}\n\n\t\tthis._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');\n\n\t\tthis._controls.$absolute.on('click', 'div', $.proxy(function (e) {\n\t\t\tvar index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();\n\n\t\t\te.preventDefault();\n\n\t\t\tthis.to(index, settings.dotsSpeed);\n\t\t}, this));\n\n\t\t// override public methods of the carousel\n\t\tfor (override in this._overrides) {\n\t\t\tthis._core[override] = $.proxy(this[override], this);\n\t\t}\n\t};\n\n\t/**\n  * Destroys the plugin.\n  * @protected\n  */\n\tNavigation.prototype.destroy = function () {\n\t\tvar handler, control, property, override;\n\n\t\tfor (handler in this._handlers) {\n\t\t\tthis.$element.off(handler, this._handlers[handler]);\n\t\t}\n\t\tfor (control in this._controls) {\n\t\t\tthis._controls[control].remove();\n\t\t}\n\t\tfor (override in this.overides) {\n\t\t\tthis._core[override] = this._overrides[override];\n\t\t}\n\t\tfor (property in Object.getOwnPropertyNames(this)) {\n\t\t\ttypeof this[property] != 'function' && (this[property] = null);\n\t\t}\n\t};\n\n\t/**\n  * Updates the internal state.\n  * @protected\n  */\n\tNavigation.prototype.update = function () {\n\t\tvar i,\n\t\t    j,\n\t\t    k,\n\t\t    lower = this._core.clones().length / 2,\n\t\t    upper = lower + this._core.items().length,\n\t\t    maximum = this._core.maximum(true),\n\t\t    settings = this._core.settings,\n\t\t    size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;\n\n\t\tif (settings.slideBy !== 'page') {\n\t\t\tsettings.slideBy = Math.min(settings.slideBy, settings.items);\n\t\t}\n\n\t\tif (settings.dots || settings.slideBy == 'page') {\n\t\t\tthis._pages = [];\n\n\t\t\tfor (i = lower, j = 0, k = 0; i < upper; i++) {\n\t\t\t\tif (j >= size || j === 0) {\n\t\t\t\t\tthis._pages.push({\n\t\t\t\t\t\tstart: Math.min(maximum, i - lower),\n\t\t\t\t\t\tend: i - lower + size - 1\n\t\t\t\t\t});\n\t\t\t\t\tif (Math.min(maximum, i - lower) === maximum) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t\tj = 0, ++k;\n\t\t\t\t}\n\t\t\t\tj += this._core.mergers(this._core.relative(i));\n\t\t\t}\n\t\t}\n\t};\n\n\t/**\n  * Draws the user interface.\n  * @todo The option `dotsData` wont work.\n  * @protected\n  */\n\tNavigation.prototype.draw = function () {\n\t\tvar difference,\n\t\t    settings = this._core.settings,\n\t\t    disabled = this._core.items().length <= settings.items,\n\t\t    index = this._core.relative(this._core.current()),\n\t\t    loop = settings.loop || settings.rewind;\n\n\t\tthis._controls.$relative.toggleClass('disabled', !settings.nav || disabled);\n\n\t\tif (settings.nav) {\n\t\t\tthis._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));\n\t\t\tthis._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));\n\t\t}\n\n\t\tthis._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);\n\n\t\tif (settings.dots) {\n\t\t\tdifference = this._pages.length - this._controls.$absolute.children().length;\n\n\t\t\tif (settings.dotsData && difference !== 0) {\n\t\t\t\tthis._controls.$absolute.html(this._templates.join(''));\n\t\t\t} else if (difference > 0) {\n\t\t\t\tthis._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));\n\t\t\t} else if (difference < 0) {\n\t\t\t\tthis._controls.$absolute.children().slice(difference).remove();\n\t\t\t}\n\n\t\t\tthis._controls.$absolute.find('.active').removeClass('active');\n\t\t\tthis._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');\n\t\t}\n\t};\n\n\t/**\n  * Extends event data.\n  * @protected\n  * @param {Event} event - The event object which gets thrown.\n  */\n\tNavigation.prototype.onTrigger = function (event) {\n\t\tvar settings = this._core.settings;\n\n\t\tevent.page = {\n\t\t\tindex: $.inArray(this.current(), this._pages),\n\t\t\tcount: this._pages.length,\n\t\t\tsize: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)\n\t\t};\n\t};\n\n\t/**\n  * Gets the current page position of the carousel.\n  * @protected\n  * @returns {Number}\n  */\n\tNavigation.prototype.current = function () {\n\t\tvar current = this._core.relative(this._core.current());\n\t\treturn $.grep(this._pages, $.proxy(function (page, index) {\n\t\t\treturn page.start <= current && page.end >= current;\n\t\t}, this)).pop();\n\t};\n\n\t/**\n  * Gets the current succesor/predecessor position.\n  * @protected\n  * @returns {Number}\n  */\n\tNavigation.prototype.getPosition = function (successor) {\n\t\tvar position,\n\t\t    length,\n\t\t    settings = this._core.settings;\n\n\t\tif (settings.slideBy == 'page') {\n\t\t\tposition = $.inArray(this.current(), this._pages);\n\t\t\tlength = this._pages.length;\n\t\t\tsuccessor ? ++position : --position;\n\t\t\tposition = this._pages[(position % length + length) % length].start;\n\t\t} else {\n\t\t\tposition = this._core.relative(this._core.current());\n\t\t\tlength = this._core.items().length;\n\t\t\tsuccessor ? position += settings.slideBy : position -= settings.slideBy;\n\t\t}\n\n\t\treturn position;\n\t};\n\n\t/**\n  * Slides to the next item or page.\n  * @public\n  * @param {Number} [speed=false] - The time in milliseconds for the transition.\n  */\n\tNavigation.prototype.next = function (speed) {\n\t\t$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);\n\t};\n\n\t/**\n  * Slides to the previous item or page.\n  * @public\n  * @param {Number} [speed=false] - The time in milliseconds for the transition.\n  */\n\tNavigation.prototype.prev = function (speed) {\n\t\t$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);\n\t};\n\n\t/**\n  * Slides to the specified item or page.\n  * @public\n  * @param {Number} position - The position of the item or page.\n  * @param {Number} [speed] - The time in milliseconds for the transition.\n  * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.\n  */\n\tNavigation.prototype.to = function (position, speed, standard) {\n\t\tvar length;\n\n\t\tif (!standard && this._pages.length) {\n\t\t\tlength = this._pages.length;\n\t\t\t$.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);\n\t\t} else {\n\t\t\t$.proxy(this._overrides.to, this._core)(position, speed);\n\t\t}\n\t};\n\n\t$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;\n})(window.Zepto || window.jQuery, window, document);\n\n/**\n * Hash Plugin\n * @version 2.1.0\n * @author Artus Kolanowski\n * @author David Deutsch\n * @license The MIT License (MIT)\n */\n;(function ($, window, document, undefined) {\n\t'use strict';\n\n\t/**\n  * Creates the hash plugin.\n  * @class The Hash Plugin\n  * @param {Owl} carousel - The Owl Carousel\n  */\n\n\tvar Hash = function Hash(carousel) {\n\t\t/**\n   * Reference to the core.\n   * @protected\n   * @type {Owl}\n   */\n\t\tthis._core = carousel;\n\n\t\t/**\n   * Hash index for the items.\n   * @protected\n   * @type {Object}\n   */\n\t\tthis._hashes = {};\n\n\t\t/**\n   * The carousel element.\n   * @type {jQuery}\n   */\n\t\tthis.$element = this._core.$element;\n\n\t\t/**\n   * All event handlers.\n   * @protected\n   * @type {Object}\n   */\n\t\tthis._handlers = {\n\t\t\t'initialized.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && this._core.settings.startPosition === 'URLHash') {\n\t\t\t\t\t$(window).trigger('hashchange.owl.navigation');\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'prepared.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace) {\n\t\t\t\t\tvar hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');\n\n\t\t\t\t\tif (!hash) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\n\t\t\t\t\tthis._hashes[hash] = e.content;\n\t\t\t\t}\n\t\t\t}, this),\n\t\t\t'changed.owl.carousel': $.proxy(function (e) {\n\t\t\t\tif (e.namespace && e.property.name === 'position') {\n\t\t\t\t\tvar current = this._core.items(this._core.relative(this._core.current())),\n\t\t\t\t\t    hash = $.map(this._hashes, function (item, hash) {\n\t\t\t\t\t\treturn item === current ? hash : null;\n\t\t\t\t\t}).join();\n\n\t\t\t\t\tif (!hash || window.location.hash.slice(1) === hash) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\n\t\t\t\t\twindow.location.hash = hash;\n\t\t\t\t}\n\t\t\t}, this)\n\t\t};\n\n\t\t// set default options\n\t\tthis._core.options = $.extend({}, Hash.Defaults, this._core.options);\n\n\t\t// register the event handlers\n\t\tthis.$element.on(this._handlers);\n\n\t\t// register event listener for hash navigation\n\t\t$(window).on('hashchange.owl.navigation', $.proxy(function (e) {\n\t\t\tvar hash = window.location.hash.substring(1),\n\t\t\t    items = this._core.$stage.children(),\n\t\t\t    position = this._hashes[hash] && items.index(this._hashes[hash]);\n\n\t\t\tif (position === undefined || position === this._core.current()) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tthis._core.to(this._core.relative(position), false, true);\n\t\t}, this));\n\t};\n\n\t/**\n  * Default options.\n  * @public\n  */\n\tHash.Defaults = {\n\t\tURLhashListener: false\n\t};\n\n\t/**\n  * Destroys the plugin.\n  * @public\n  */\n\tHash.prototype.destroy = function () {\n\t\tvar handler, property;\n\n\t\t$(window).off('hashchange.owl.navigation');\n\n\t\tfor (handler in this._handlers) {\n\t\t\tthis._core.$element.off(handler, this._handlers[handler]);\n\t\t}\n\t\tfor (property in Object.getOwnPropertyNames(this)) {\n\t\t\ttypeof this[property] != 'function' && (this[property] = null);\n\t\t}\n\t};\n\n\t$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;\n})(window.Zepto || window.jQuery, window, document);\n\n/**\n * Support Plugin\n *\n * @version 2.1.0\n * @author Vivid Planet Software GmbH\n * @author Artus Kolanowski\n * @author David Deutsch\n * @license The MIT License (MIT)\n */\n;(function ($, window, document, undefined) {\n\n\tvar style = $('<support>').get(0).style,\n\t    prefixes = 'Webkit Moz O ms'.split(' '),\n\t    events = {\n\t\ttransition: {\n\t\t\tend: {\n\t\t\t\tWebkitTransition: 'webkitTransitionEnd',\n\t\t\t\tMozTransition: 'transitionend',\n\t\t\t\tOTransition: 'oTransitionEnd',\n\t\t\t\ttransition: 'transitionend'\n\t\t\t}\n\t\t},\n\t\tanimation: {\n\t\t\tend: {\n\t\t\t\tWebkitAnimation: 'webkitAnimationEnd',\n\t\t\t\tMozAnimation: 'animationend',\n\t\t\t\tOAnimation: 'oAnimationEnd',\n\t\t\t\tanimation: 'animationend'\n\t\t\t}\n\t\t}\n\t},\n\t    tests = {\n\t\tcsstransforms: function csstransforms() {\n\t\t\treturn !!test('transform');\n\t\t},\n\t\tcsstransforms3d: function csstransforms3d() {\n\t\t\treturn !!test('perspective');\n\t\t},\n\t\tcsstransitions: function csstransitions() {\n\t\t\treturn !!test('transition');\n\t\t},\n\t\tcssanimations: function cssanimations() {\n\t\t\treturn !!test('animation');\n\t\t}\n\t};\n\n\tfunction test(property, prefixed) {\n\t\tvar result = false,\n\t\t    upper = property.charAt(0).toUpperCase() + property.slice(1);\n\n\t\t$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {\n\t\t\tif (style[property] !== undefined) {\n\t\t\t\tresult = prefixed ? property : true;\n\t\t\t\treturn false;\n\t\t\t}\n\t\t});\n\n\t\treturn result;\n\t}\n\n\tfunction prefixed(property) {\n\t\treturn test(property, true);\n\t}\n\n\tif (tests.csstransitions()) {\n\t\t/* jshint -W053 */\n\t\t$.support.transition = new String(prefixed('transition'));\n\t\t$.support.transition.end = events.transition.end[$.support.transition];\n\t}\n\n\tif (tests.cssanimations()) {\n\t\t/* jshint -W053 */\n\t\t$.support.animation = new String(prefixed('animation'));\n\t\t$.support.animation.end = events.animation.end[$.support.animation];\n\t}\n\n\tif (tests.csstransforms()) {\n\t\t/* jshint -W053 */\n\t\t$.support.transform = new String(prefixed('transform'));\n\t\t$.support.transform3d = tests.csstransforms3d();\n\t}\n})(window.Zepto || window.jQuery, window, document);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/owl.carousel.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/owl.carousel.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/owl.carousel.css\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/owl.carousel.css?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_3__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"PropTypes\",\"commonjs2\":\"prop-types\",\"commonjs\":\"prop-types\",\"amd\":\"prop-types\"}\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22PropTypes%22,%22commonjs2%22:%22prop-types%22,%22commonjs%22:%22prop-types%22,%22amd%22:%22prop-types%22%7D?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_4__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"React\",\"commonjs2\":\"react\",\"commonjs\":\"react\",\"amd\":\"react\"}\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_5__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"ReactDOM\",\"commonjs2\":\"react-dom\",\"commonjs\":\"react-dom\",\"amd\":\"react-dom\"}\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22ReactDOM%22,%22commonjs2%22:%22react-dom%22,%22commonjs%22:%22react-dom%22,%22amd%22:%22react-dom%22%7D?");

/***/ }
/******/ ])
});
;

/***/ }),

/***/ "./resources/js/src/components/Frontend/UI/Blocks/ServiceBlock/ServiceBlock.scss":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Blocks/ServiceBlock/ServiceBlock.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_ServiceBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./ServiceBlock.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Blocks/ServiceBlock/ServiceBlock.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_ServiceBlock_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_ServiceBlock_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Frontend/UI/Blocks/TeamMemberBlock/TeamMemberBlock.scss":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Blocks/TeamMemberBlock/TeamMemberBlock.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_TeamMemberBlock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./TeamMemberBlock.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Blocks/TeamMemberBlock/TeamMemberBlock.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_TeamMemberBlock_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_TeamMemberBlock_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Frontend/UI/Title/PageTitle/PageTitle.scss":
/*!********************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Title/PageTitle/PageTitle.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_PageTitle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./PageTitle.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Title/PageTitle/PageTitle.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_PageTitle_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_PageTitle_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_SectionTitle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./SectionTitle.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_SectionTitle_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_SectionTitle_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/About/About.scss":
/*!***************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/About/About.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_About_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./About.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/containers/Frontend/About/About.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_About_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_About_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);