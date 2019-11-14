import _styled from "@emotion/styled-base";

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

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

import React from 'react';
import { Collapsable } from '../Collapsable';
import { NavigationLink } from '../NavigationLink';
import { jsx as ___EmotionJSX } from "@emotion/core";

var Wrapper = _styled("div", {
  target: "e16qk55l0",
  label: "Wrapper"
})(process.env.NODE_ENV === "production" ? {
  name: "1mykjqn",
  styles: "position:relative;display:flex;flex-flow:row nowrap;align-items:center;"
} : {
  name: "1mykjqn",
  styles: "position:relative;display:flex;flex-flow:row nowrap;align-items:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL21pZC1sZXZlbC1uYXZpZ2F0aW9uLWl0ZW0vTWlkTGV2ZWxOYXZpZ2F0aW9uSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNZ0IiLCJmaWxlIjoiLi4vLi4vLi4vc291cmNlL25hdmlnYXRpb24vbWlkLWxldmVsLW5hdmlnYXRpb24taXRlbS9NaWRMZXZlbE5hdmlnYXRpb25JdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCB7IENvbGxhcHNhYmxlIH0gZnJvbSAnLi4vQ29sbGFwc2FibGUnXG5pbXBvcnQgeyBOYXZpZ2F0aW9uTGluayB9IGZyb20gJy4uL05hdmlnYXRpb25MaW5rJ1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhGbG93OiAncm93IG5vd3JhcCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jbGFzcyBNaWRMZXZlbE5hdmlnYXRpb25JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnRyaWdnZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgZ2V0QWN0aXZlUHJvcHMgPSAoY3VycmVudExvY2F0aW9uLCBocmVmKSA9PiB7XG4gICAgY29uc3Qgbm9ybWFsaXplZFBhdGhOYW1lID0gY3VycmVudExvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyQvLCAnJylcbiAgICBpZiAoYCR7bm9ybWFsaXplZFBhdGhOYW1lfWAgPT09IGhyZWYpIHtcbiAgICAgIHJldHVybiAnYWN0aXZlJ1xuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGRlbHRhLCBjb2xscGFzYWJsZUVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGRlbHRhLCBjb2xscGFzYWJsZUVsZW1lbnQsIHRoaXMudHJpZ2dlclJlZi5jdXJyZW50KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBwYXRoLCBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2xsYXBzYWJsZSBpZD17YGNvbGxhcHNhYmxlJHt0aGlzLnByb3BzLnBhdGh9JHt0aGlzLnByb3BzLnRpdGxlfWB9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSB0cmlnZ2VyPXsodW5mb2xkLCBmb2xkZWQpID0+IChcbiAgICAgICAgPFdyYXBwZXIgb25DbGljaz17KCkgPT4gdW5mb2xkKCl9PlxuICAgICAgICAgIDxOYXZpZ2F0aW9uTGlua1xuICAgICAgICAgICAgcmVmPXt0aGlzLnRyaWdnZXJSZWZ9XG4gICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5nZXRBY3RpdmVQcm9wcyhsb2NhdGlvbiwgcGF0aCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvTmF2aWdhdGlvbkxpbms+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICl9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxcmVtJywgd2lkdGg6ICdjYWxjKDEwMCUgLSAxcmVtKScgfX0+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbGxhcHNhYmxlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgeyBNaWRMZXZlbE5hdmlnYXRpb25JdGVtIH1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var MidLevelNavigationItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MidLevelNavigationItem, _React$Component);

  function MidLevelNavigationItem(props) {
    var _this;

    _classCallCheck(this, MidLevelNavigationItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MidLevelNavigationItem).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getActiveProps", function (currentLocation, href) {
      var normalizedPathName = currentLocation.pathname.replace(/\/$/, '');

      if ("".concat(normalizedPathName) === href) {
        return 'active';
      }

      return '';
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (delta, collpasableElement) {
      _this.props.onChange(delta, collpasableElement, _this.triggerRef.current);
    });

    _this.triggerRef = React.createRef();
    return _this;
  }

  _createClass(MidLevelNavigationItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          path = _this$props.path,
          location = _this$props.location;
      return ___EmotionJSX(Collapsable, {
        id: "collapsable".concat(this.props.path).concat(this.props.title),
        onChange: this.onChange,
        trigger: function trigger(unfold, folded) {
          return ___EmotionJSX(Wrapper, {
            onClick: function onClick() {
              return unfold();
            }
          }, ___EmotionJSX(NavigationLink, {
            ref: _this2.triggerRef,
            to: path,
            className: _this2.getActiveProps(location, path)
          }, title));
        }
      }, ___EmotionJSX("div", {
        style: {
          marginLeft: '1rem',
          width: 'calc(100% - 1rem)'
        }
      }, this.props.children));
    }
  }]);

  return MidLevelNavigationItem;
}(React.Component);

export { MidLevelNavigationItem };
//# sourceMappingURL=MidLevelNavigationItem.js.map