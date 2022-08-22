"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Backend_Manager_Layout_SideDrawer_Index_js"],{

/***/ "./resources/js/src/containers/Backend/Manager/Layout/SideDrawer/Index.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Manager/Layout/SideDrawer/Index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _SideDrawerItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideDrawerItem */ "./resources/js/src/containers/Backend/Manager/Layout/SideDrawer/SideDrawerItem/index.js");
/* harmony import */ var _components_UI_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/UI/Logo */ "./resources/js/src/components/UI/Logo/index.js");
/* harmony import */ var _SideDrawer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideDrawer.scss */ "./resources/js/src/containers/Backend/Manager/Layout/SideDrawer/SideDrawer.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var props = _ref.props,
      toggle = _ref.toggle,
      selectItem = _ref.selectItem,
      selectedItem = _ref.selectedItem;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var modalToggle = function modalToggle() {
    return setModal(!modal);
  };

  var cms = props.content.cms.pages.backend,
      _props$auth = props.auth,
      role = _props$auth.role,
      data = _props$auth.data;
  var resources = Object.keys(cms.sidebar.menu).filter(function (resource) {
    return !['admins', 'dashboard', 'cms', 'notifications', 'settings'].includes(resource);
  });

  var SDI = function SDI(_ref2) {
    var _ref2$fixed = _ref2.fixed,
        fixed = _ref2$fixed === void 0 ? false : _ref2$fixed,
        _ref2$id = _ref2.id,
        id = _ref2$id === void 0 ? null : _ref2$id,
        _ref2$dropdown = _ref2.dropdown,
        dropdown = _ref2$dropdown === void 0 ? null : _ref2$dropdown,
        icon = _ref2.icon,
        path = _ref2.path,
        _ref2$custom = _ref2.custom,
        custom = _ref2$custom === void 0 ? false : _ref2$custom,
        _ref2$addon = _ref2.addon,
        addon = _ref2$addon === void 0 ? [] : _ref2$addon;
    if (id && fixed) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SideDrawerItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: id,
      sideDrawerToggle: toggle,
      select: selectItem,
      selected: selectedItem,
      icon: icon,
      href: path,
      children: id
    });

    if (fixed) {
      var _items = [];

      if (!custom) {
        _items.push({
          link: '/add',
          text: dropdown.add
        });

        _items.push({
          link: '/',
          text: dropdown.index
        });

        _items = _items.concat(addon);
      } else _items = custom;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SideDrawerItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: dropdown.title,
        sideDrawerToggle: toggle,
        select: selectItem,
        selected: selectedItem,
        icon: icon,
        dropdown: true,
        path: path,
        items: _items,
        children: dropdown.title
      });
    }

    if (id) {
      var feature = data.role && data.role.features.find(function (f) {
        return path.includes('/user/' + f.prefix);
      });
      if (!feature) return null;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SideDrawerItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: id,
        sideDrawerToggle: toggle,
        select: selectItem,
        selected: selectedItem,
        icon: icon,
        href: path,
        children: id
      });
    }

    var items = [];

    if (!custom) {
      var _feature = data.role && data.role.features.find(function (f) {
        return path.includes('/user/' + f.prefix);
      });

      if (!_feature) return null;
      var permissions = _feature.permissions;
      if (permissions && permissions.includes('c')) items.push({
        link: '/add',
        text: dropdown.add
      });
      items.push({
        link: '/',
        text: dropdown.index
      });
      items = items.concat(addon);
    } else items = custom;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SideDrawerItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: dropdown.title,
      sideDrawerToggle: toggle,
      select: selectItem,
      selected: selectedItem,
      icon: icon,
      dropdown: true,
      path: path,
      items: items,
      children: dropdown.title
    });
  };

  var sideDrawerItems = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SDI, {
      fixed: true,
      id: cms.sidebar.menu.dashboard.title,
      icon: cms.sidebar.menu.dashboard.icon,
      path: "/".concat(role, "/dashboard")
    }), role === 'admin' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SDI, {
      fixed: true,
      id: cms.sidebar.menu.admins.title,
      icon: cms.sidebar.menu.admins.icon,
      path: "/".concat(role, "/admins")
    }), resources.map(function (resource) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SDI, {
        fixed: role === 'admin',
        id: cms.sidebar.menu[resource].title,
        icon: cms.sidebar.menu[resource].icon,
        path: "/".concat(role, "/").concat(resource)
      }, JSON.stringify(cms.sidebar.menu[resource]));
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SDI, {
      fixed: role === 'admin',
      dropdown: cms.sidebar.menu.cms,
      icon: cms.sidebar.menu.cms.icon,
      path: "/".concat(role, "/cms"),
      custom: [{
        link: '/global',
        text: cms.sidebar.menu.cms.global
      }, {
        link: '/general',
        text: cms.sidebar.menu.cms.general
      }, {
        link: '/messages',
        text: cms.sidebar.menu.cms.messages
      }, {
        link: '/components',
        text: cms.sidebar.menu.cms.components
      }, {
        link: '/auth',
        text: cms.sidebar.menu.cms.auth
      }, {
        link: '/backend',
        text: cms.sidebar.menu.cms.backend
      }, {
        link: '/frontend',
        text: cms.sidebar.menu.cms.frontend
      }]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SDI, {
      fixed: true,
      dropdown: cms.sidebar.menu.settings,
      icon: cms.sidebar.menu.settings.icon,
      path: "/".concat(role, "/settings"),
      custom: [{
        link: '/language',
        text: cms.sidebar.menu.settings.language
      }]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "mt-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "py-2 px-3 text-300 rounded-4 cursor-pointer",
        onClick: modalToggle,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
          className: "fas fa-fw fa-power-off text-blue mr-3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-border text-700",
          children: cms.header.logout
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isOpen: modal,
      toggle: modalToggle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        toggle: modalToggle,
        children: cms.header.logout
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
          children: [cms.header.sure_logout, "?"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
            color: "blue",
            onClick: props.logout,
            children: [cms.header.logout, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
              className: "fas fa-power-off fa-fw"
            })]
          }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
            color: "red",
            onClick: modalToggle,
            children: [cms.header.close, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
              className: "fas fa-times fa-fw"
            })]
          })]
        })]
      })]
    })]
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "SideDrawer nav-left-sidebar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "content vh-100 d-flex flex-column",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "d-flex align-items-stretch mb-5 pb-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_UI_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "named"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "flex-fill",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
          className: "navbar-nav scrollbar-blue flex-column pr-3",
          children: sideDrawerItems
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "backdrop d-md-none",
      onClick: toggle
    })]
  });
});

/***/ })

}]);