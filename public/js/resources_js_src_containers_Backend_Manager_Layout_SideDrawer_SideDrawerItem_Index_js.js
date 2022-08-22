"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Backend_Manager_Layout_SideDrawer_SideDrawerItem_Index_js"],{

/***/ "./resources/js/src/containers/Backend/Manager/Layout/SideDrawer/SideDrawerItem/Index.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Manager/Layout/SideDrawer/SideDrawerItem/Index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Collapse.js");
/* harmony import */ var _SideDrawerItem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideDrawerItem.scss */ "./resources/js/src/containers/Backend/Manager/Layout/SideDrawer/SideDrawerItem/SideDrawerItem.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var SideDrawerItem = function SideDrawerItem(_ref) {
  var children = _ref.children,
      dropdown = _ref.dropdown,
      icon = _ref.icon,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '' : _ref$href,
      items = _ref.items,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? '' : _ref$path,
      sideDrawerToggle = _ref.sideDrawerToggle,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? false : _ref$exact,
      select = _ref.select,
      selected = _ref.selected,
      id = _ref.id,
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? true : _ref$dark;
  var match = window.location.pathname.includes(path);

  var toggle = function toggle() {
    var match = selected === id;
    match ? select(null) : select(id);
  };

  var onSelect = function onSelect() {
    return toggle();
  };

  var onSideDrawerToggle = function onSideDrawerToggle() {
    sideDrawerToggle();
    toggle();
  };

  var isSelected = selected === id;
  if (selected === '') isSelected = match;
  var content;
  if (!dropdown) content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
      onClick: onSideDrawerToggle,
      exact: exact,
      className: "SideDrawerItem d-block d-sm-none nav-link",
      activeClassName: "active",
      to: href,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
          className: "fas fa-" + icon + " fa-fw mr-3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "text",
          children: children
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
      onClick: onSelect,
      exact: exact,
      className: "SideDrawerItem nav-link d-none d-sm-block",
      activeClassName: "active",
      to: href,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
          className: "fas fa-" + icon + " fa-fw mr-3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "text",
          children: children
        })]
      })
    })]
  });else {
    var itemEls = items.map(function (_ref2) {
      var _ref2$link = _ref2.link,
          link = _ref2$link === void 0 ? '' : _ref2$link,
          text = _ref2.text;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
        className: "nav-item text-400",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
          onClick: sideDrawerToggle,
          exact: true,
          className: "nav-link d-sm-none",
          activeClassName: "text-700",
          to: path + link,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "position-relative text-400",
            style: {
              left: -8
            },
            children: "-"
          }), " ", text]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
          exact: true,
          className: "nav-link d-none d-sm-block",
          activeClassName: "text-700",
          to: path + link,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "position-relative text-400",
            style: {
              left: -8
            },
            children: "-"
          }), " ", text]
        })]
      }, text);
    });
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "link",
        onClick: toggle,
        className: "SideDrawerItem dropdown nav-link ".concat(match ? 'active' : ''),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
            className: "fas fa-" + icon + " fa-fw mr-3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "text",
            children: children
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
          className: "fas fa-angle-down fa-fw angle-down ".concat(isSelected ? 'open' : '')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isOpen: isSelected,
        className: "pl-3 bg-".concat(dark ? "transparent" : "gray-0"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
          className: "nav",
          children: itemEls
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
    className: "nav-item",
    children: content
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideDrawerItem);

/***/ })

}]);