function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import { jsx as ___EmotionJSX } from "@emotion/core";

var Collapsable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Collapsable, _React$Component);

  function Collapsable(props) {
    var _this;

    _classCallCheck(this, Collapsable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapsable).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      folded: true,
      delta: 0,
      style: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        maxHeight: 0,
        overflow: 'hidden',
        transition: 'max-height 0.2s ease-out'
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unfold", function () {
      if (_this.state.folded) {
        _this.props.onChange && _this.props.onChange(_this.divRef.current.scrollHeight, _this.wrapperRef.current);

        _this.setState({
          folded: false,
          style: _objectSpread({}, _this.state.style, {
            maxHeight: "".concat(_this.divRef.current.scrollHeight, "px")
          })
        }, function () {
          if (typeof window !== 'undefined') {
            localStorage.setItem(_this.props.id, JSON.stringify(_this.state));
          }
        });
      } else {
        _this.props.onChange && _this.props.onChange(0, _this.wrapperRef.current);

        _this.setState({
          folded: true,
          style: _objectSpread({}, _this.state.style, {
            maxHeight: 0
          })
        }, function () {
          if (typeof window !== 'undefined') {
            localStorage.setItem(_this.props.id, JSON.stringify(_this.state));
          }
        });
      }
    });

    if (typeof window !== 'undefined') {
      var stateJSON = localStorage.getItem(props.id);

      if (stateJSON) {
        _this.state = JSON.parse(stateJSON);
      }
    }

    _this.divRef = React.createRef();
    _this.wrapperRef = React.createRef();
    return _this;
  }

  _createClass(Collapsable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var actualHeight = this.divRef.current.scrollHeight;
      var restoredHeight = Number(RegExp(/\d+/).exec(this.state.style.maxHeight)[0]);

      if (restoredHeight > 0 && restoredHeight < actualHeight) {
        this.props.onChange && this.props.onChange(actualHeight, this.wrapperRef.current);
        this.setState({
          style: _objectSpread({}, this.state.style, {
            maxHeight: "".concat(actualHeight, "px")
          })
        }, function () {
          if (typeof window !== 'undefined') {
            localStorage.setItem(_this2.props.id, JSON.stringify(_this2.state));
          }
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      if (this.props.delta !== prevProps.delta) {
        if (!this.state.folded) {
          this.setState({
            delta: this.props.delta,
            style: _objectSpread({}, this.state.style, {
              maxHeight: "".concat(this.divRef.current.scrollHeight + this.props.delta, "px")
            })
          }, function () {
            if (typeof window !== 'undefined') {
              localStorage.setItem(_this3.props.id, JSON.stringify(_this3.state));
            }
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return ___EmotionJSX("div", {
        ref: this.wrapperRef
      }, this.props.trigger(this.unfold, this.state.folded), ___EmotionJSX("div", {
        style: this.state.style,
        ref: this.divRef
      }, this.props.children));
    }
  }]);

  return Collapsable;
}(React.Component);

export { Collapsable };
//# sourceMappingURL=Collapsable.js.map