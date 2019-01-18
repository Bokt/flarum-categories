module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/CategoryView.js":
/*!**********************************************!*\
  !*** ./src/forum/components/CategoryView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryView; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__);






var CategoryView =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CategoryView, _Component);

  function CategoryView() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = CategoryView.prototype;

  _proto.init = function init() {
    var _this = this;

    _Component.prototype.init.call(this);

    this.tags = flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_2___default()(app.store.all('tags').filter(function (tag) {
      return tag.parent() === _this.props.tag;
    }));
  };

  _proto.view = function view() {
    var tag = this.props.tag;
    var lastDiscussion = this.props.tag.lastPostedDiscussion();
    var unread = lastDiscussion && lastDiscussion.isUnread();
    var isChild = this.props.tag.isChild();
    return m("div", {
      className: 'Category' + (unread ? ' unread' : '', isChild ? ' child' : '')
    }, isChild ? m("div", {
      class: "Category--Child"
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-angle-right')) : '', m("div", {
      class: "Category--Name"
    }, m("a", {
      href: app.route.tag(tag)
    }, tag.name())), m("div", {
      class: "Category--DiscussionCount"
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-book'), tag.discussionCount()), m("div", {
      className: "Category--CommentCount"
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-comments'), tag.commentCount()), m("div", {
      className: "Category--ParticipantCount"
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-users'), tag.participantCount()), this.viewLastDiscussion(lastDiscussion));
  };

  _proto.viewLastDiscussion = function viewLastDiscussion(discussion) {
    var author = discussion ? discussion.user() : null;
    var user = discussion ? discussion.lastPostedUser() : null;
    return m("div", {
      className: "Category--LastDiscussion"
    }, discussion ? (m("div", {
      className: "Title"
    }, discussion.title()), m("div", {
      className: "DateAuthor DiscussionListItem-info"
    }, user ? m("span", null, user.displayName(), " replied ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default()(discussion.lastPostedAt())) : m("span", null, author.displayName(), " created ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default()(discussion.createdAt())))) : '-');
  };

  return CategoryView;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_CategoriesPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/CategoriesPage */ "./src/forum/pages/CategoriesPage.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/tags/models/Tag */ "flarum/tags/models/Tag");
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3__);




app.initializers.add('bokt-categories', function (app) {
  app.routes.categories = {
    path: '/categories',
    component: _pages_CategoriesPage__WEBPACK_IMPORTED_MODULE_1__["default"].component()
  };
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.hasChild = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('hasChild');
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.discussionCount = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('discussionCount');
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.commentCount = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('commentCount');
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.participantCount = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('participantCount');
}, -50);

/***/ }),

/***/ "./src/forum/pages/CategoriesPage.js":
/*!*******************************************!*\
  !*** ./src/forum/pages/CategoriesPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoriesPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CategoryView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/CategoryView */ "./src/forum/components/CategoryView.js");






var CategoriesPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CategoriesPage, _Page);

  function CategoriesPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = CategoriesPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    this.tags = flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_3___default()(app.store.all('tags').filter(function (tag) {
      return tag.isPrimary() && !tag.isHidden();
    }));
  };

  _proto.view = function view() {
    var _this = this;

    return m("div", {
      className: "CategoryIndexPage"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      class: "container"
    }, m("div", {
      className: "Categories"
    }, this.tags.map(function (tag) {
      return _this.categoryView(tag);
    }))));
  };

  _proto.categoryView = function categoryView(tag) {
    var subTags = flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_3___default()(app.store.all('tags').filter(function (sub) {
      return sub.isChild() && !sub.isHidden() && sub.parent() == tag;
    }));
    return m("div", {
      className: 'Primary-Category Primary-Category--' + tag.slug()
    }, _components_CategoryView__WEBPACK_IMPORTED_MODULE_4__["default"].component({
      tag: tag
    }), subTags.map(function (sub) {
      return _components_CategoryView__WEBPACK_IMPORTED_MODULE_4__["default"].component({
        tag: sub
      });
    }));
  };

  return CategoriesPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/tags/models/Tag":
/*!********************************************************!*\
  !*** external "flarum.core.compat['tags/models/Tag']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/models/Tag'];

/***/ }),

/***/ "flarum/tags/utils/sortTags":
/*!************************************************************!*\
  !*** external "flarum.core.compat['tags/utils/sortTags']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/utils/sortTags'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map