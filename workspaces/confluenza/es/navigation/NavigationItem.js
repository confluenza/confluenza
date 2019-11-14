import _styled from "@emotion/styled-base";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { MidLevelNavigationItem } from './mid-level-navigation-item';
import { NavigationHeading } from './NavigationHeading';
import { jsx as ___EmotionJSX } from "@emotion/core";

var List = _styled("ul", {
  target: "e92b1et0",
  label: "List"
})(process.env.NODE_ENV === "production" ? {
  name: "4y0pul",
  styles: "list-style:none;padding-top:0.5rem;padding-bottom:0;margin:0;"
} : {
  name: "4y0pul",
  styles: "list-style:none;padding-top:0.5rem;padding-bottom:0;margin:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL05hdmlnYXRpb25JdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1hIiwiZmlsZSI6Ii4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL05hdmlnYXRpb25JdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCB7IE1pZExldmVsTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuL21pZC1sZXZlbC1uYXZpZ2F0aW9uLWl0ZW0nXG5pbXBvcnQgeyBOYXZpZ2F0aW9uSGVhZGluZyB9IGZyb20gJy4vTmF2aWdhdGlvbkhlYWRpbmcnXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWwoe1xuICBsaXN0U3R5bGU6ICdub25lJyxcbiAgcGFkZGluZ1RvcDogJzAuNXJlbScsXG4gIHBhZGRpbmdCb3R0b206IDAsXG4gIG1hcmdpbjogMFxufSlcblxuY2xhc3MgTmF2aWdhdGlvbkl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJOYXZpZ2F0aW9uSGVhZGluZyA9IChoZWFkaW5nLCBpbmRleCwgcGF0aCkgPT4gKFxuICAgIDxOYXZpZ2F0aW9uSGVhZGluZyBrZXk9e2luZGV4fSB7Li4uaGVhZGluZ30gcGF0aD17cGF0aH0gaW5kZXg9e2luZGV4fSAvPlxuICApXG5cbiAgY29tYmluZUhlYWRpbmdzID0gKG9yaWdpbmFsSGVhZGluZ3MsIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBleHRlcm5hbEhlYWRpbmdzID0gY29udGVudCA/IGNvbnRlbnQuY2hpbGRNYXJrZG93blJlbWFyay5oZWFkaW5ncyA6IFtdXG4gICAgcmV0dXJuIGV4dGVybmFsSGVhZGluZ3MuY29uY2F0KG9yaWdpbmFsSGVhZGluZ3MpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgbm9kZTogeyBoZWFkaW5ncywgZnJvbnRtYXR0ZXI6IHsgdGl0bGUsIHBhdGgsIGNvbnRlbnQgfSB9LCBvbkNoYW5nZSwgbG9jYXRpb24gfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGFjdHVhbEhlYWRpbmdzID0gdGhpcy5jb21iaW5lSGVhZGluZ3MoaGVhZGluZ3MsIGNvbnRlbnQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17cGF0aH0+XG4gICAgICAgIDxNaWRMZXZlbE5hdmlnYXRpb25JdGVtIGxvY2F0aW9uPXtsb2NhdGlvbn0gcGF0aD17cGF0aH0gdGl0bGU9e3RpdGxlfSBvbkNoYW5nZT17b25DaGFuZ2V9PlxuICAgICAgICAgIHsgYWN0dWFsSGVhZGluZ3MubGVuZ3RoID4gMCAmJiA8TGlzdD5cbiAgICAgICAgICAgIHsgYWN0dWFsSGVhZGluZ3MubWFwKChoZWFkaW5nLCBpbmRleCkgPT4gdGhpcy5yZW5kZXJOYXZpZ2F0aW9uSGVhZGluZyhoZWFkaW5nLCBpbmRleCwgcGF0aCkpIH1cbiAgICAgICAgICA8L0xpc3Q+IH1cbiAgICAgICAgPC9NaWRMZXZlbE5hdmlnYXRpb25JdGVtPlxuICAgICAgPC9saT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHsgTmF2aWdhdGlvbkl0ZW0gfVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var NavigationItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationItem, _React$Component);

  function NavigationItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavigationItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavigationItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderNavigationHeading", function (heading, index, path) {
      return ___EmotionJSX(NavigationHeading, _extends({
        key: index
      }, heading, {
        path: path,
        index: index
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "combineHeadings", function (originalHeadings, content) {
      var externalHeadings = content ? content.childMarkdownRemark.headings : [];
      return externalHeadings.concat(originalHeadings);
    });

    return _this;
  }

  _createClass(NavigationItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$node = _this$props.node,
          headings = _this$props$node.headings,
          _this$props$node$fron = _this$props$node.frontmatter,
          title = _this$props$node$fron.title,
          path = _this$props$node$fron.path,
          content = _this$props$node$fron.content,
          onChange = _this$props.onChange,
          location = _this$props.location;
      var actualHeadings = this.combineHeadings(headings, content);
      return ___EmotionJSX("li", {
        key: path
      }, ___EmotionJSX(MidLevelNavigationItem, {
        location: location,
        path: path,
        title: title,
        onChange: onChange
      }, actualHeadings.length > 0 && ___EmotionJSX(List, null, actualHeadings.map(function (heading, index) {
        return _this2.renderNavigationHeading(heading, index, path);
      }))));
    }
  }]);

  return NavigationItem;
}(React.Component);

export { NavigationItem };
//# sourceMappingURL=NavigationItem.js.map