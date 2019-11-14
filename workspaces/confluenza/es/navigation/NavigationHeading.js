function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import GithubSlugger from 'github-slugger';
import { NavigationLink } from './NavigationLink';
import { jsx as ___EmotionJSX } from "@emotion/core";

var NavigationHeading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationHeading, _React$Component);

  function NavigationHeading() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavigationHeading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavigationHeading)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      cln: ''
    });

    _defineProperty(_assertThisInitialized(_this), "getActiveProps", function (currentLocation, href) {
      _this.location = currentLocation.pathname.replace(/\/$/, '');
      _this.hash = currentLocation.hash;
      _this.href = href;

      if (_this.linkClassName) {
        if ("".concat(_this.location).concat(_this.hash) === _this.href) {
          return {
            className: "".concat(_this.linkClassName, " active")
          };
        } else {
          return {
            className: _this.linkClassName
          };
        }
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "recordLinkNode", function (node) {
      _this.linkClassName = node && node.className;

      if ("".concat(_this.location).concat(_this.hash) === _this.href) {
        _this.setState({
          cln: "".concat(_this.linkClassName, " active")
        });
      } else {
        _this.setState({
          cln: _this.linkClassName
        });
      }
    });

    return _this;
  }

  _createClass(NavigationHeading, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          path = _this$props.path,
          value = _this$props.value,
          index = _this$props.index;
      var slugger = new GithubSlugger();
      var anchor = slugger.slug(value);
      return ___EmotionJSX("li", {
        key: index
      }, ___EmotionJSX(NavigationLink, {
        to: "".concat(path, "#").concat(anchor),
        ref: this.recordLinkNode,
        className: this.state.cln,
        getProps: function getProps(_ref) {
          var location = _ref.location,
              href = _ref.href;
          return _this2.getActiveProps(location, href);
        }
      }, value));
    }
  }]);

  return NavigationHeading;
}(React.Component);

export { NavigationHeading };
//# sourceMappingURL=NavigationHeading.js.map