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
import { ArrowUp, ArrowDown } from './arrows';
import { ActiveMarker } from './ActiveMarker';
import { jsx as ___EmotionJSX } from "@emotion/core";

var Wrapper = _styled("div", {
  target: "e15g9rcr0",
  label: "Wrapper"
})(process.env.NODE_ENV === "production" ? {
  name: "c3e0v4",
  styles: "position:relative;display:flex;flex-flow:row nowrap;align-items:center;background-color:black;color:white;padding:8px 13px 9px 22px;&:hover{cursor:pointer;}"
} : {
  name: "c3e0v4",
  styles: "position:relative;display:flex;flex-flow:row nowrap;align-items:center;background-color:black;color:white;padding:8px 13px 9px 22px;&:hover{cursor:pointer;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL3RvcC1sZXZlbC1uYXZpZ2F0aW9uLWl0ZW0vVG9wTGV2ZWxOYXZpZ2F0aW9uSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0IiLCJmaWxlIjoiLi4vLi4vLi4vc291cmNlL25hdmlnYXRpb24vdG9wLWxldmVsLW5hdmlnYXRpb24taXRlbS9Ub3BMZXZlbE5hdmlnYXRpb25JdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCB7IENvbGxhcHNhYmxlIH0gZnJvbSAnLi4vQ29sbGFwc2FibGUnXG5pbXBvcnQgeyBBcnJvd1VwLCBBcnJvd0Rvd24gfSBmcm9tICcuL2Fycm93cydcbmltcG9ydCB7IEFjdGl2ZU1hcmtlciB9IGZyb20gJy4vQWN0aXZlTWFya2VyJ1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhGbG93OiAncm93IG5vd3JhcCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG4gIGNvbG9yOiAnd2hpdGUnLFxuICBwYWRkaW5nOiAnOHB4IDEzcHggOXB4IDIycHgnLFxuICAnJjpob3Zlcic6IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9XG59KVxuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdigoeyBjb2xvciA9ICdibGFjaycgfSkgPT4gKHtcbiAgZm9udEZhbWlseTogJ1JvYm90byBNb25vLCBtb25vc3BhY2UnLFxuICBmb250V2VpZ2h0OiAnMzAwJyxcbiAgZm9udFNpemU6ICcwLjhyZW0nLFxuICBjb2xvcjogYCR7Y29sb3J9YFxufSkpXG5cbmNvbnN0IEFycm93UG9zaXRpb25lciA9IHN0eWxlZC5kaXYoe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcxM3B4J1xufSlcblxuY2xhc3MgVG9wTGV2ZWxOYXZpZ2F0aW9uSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy50cmlnZ2VyUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGRlbHRhLCBjb2xscGFzYWJsZUVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGRlbHRhLCBjb2xscGFzYWJsZUVsZW1lbnQsIHRoaXMudHJpZ2dlclJlZi5jdXJyZW50KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbGxhcHNhYmxlIGlkPXtgY29sbGFwc2FibGUke3RoaXMucHJvcHMudGFnfSR7dGhpcy5wcm9wcy50aXRsZX1gfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gZGVsdGE9e3RoaXMucHJvcHMuZGVsdGF9IHRyaWdnZXI9eyh1bmZvbGQsIGZvbGRlZCkgPT4gKFxuICAgICAgICA8V3JhcHBlciBvbkNsaWNrPXsoKSA9PiB1bmZvbGQoKX0gcmVmPXt0aGlzLnRyaWdnZXJSZWZ9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGl2ZSAmJiA8QWN0aXZlTWFya2VyIGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmV9IC8+fVxuICAgICAgICAgIDxUZXh0IGNvbG9yPSd3aGl0ZSc+e3RoaXMucHJvcHMudGl0bGV9PC9UZXh0PlxuICAgICAgICAgIDxBcnJvd1Bvc2l0aW9uZXI+XG4gICAgICAgICAgICB7IGZvbGRlZCA/IDxBcnJvd0Rvd24gLz4gOiA8QXJyb3dVcCAvPiB9XG4gICAgICAgICAgPC9BcnJvd1Bvc2l0aW9uZXI+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICl9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnMXB4IHNvbGlkICNGN0Y3RjcnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db2xsYXBzYWJsZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHsgVG9wTGV2ZWxOYXZpZ2F0aW9uSXRlbSB9XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var Text = _styled("div", {
  target: "e15g9rcr1",
  label: "Text"
})(function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'black' : _ref$color;
  return {
    fontFamily: 'Roboto Mono, monospace',
    fontWeight: '300',
    fontSize: '0.8rem',
    color: "".concat(color)
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL3RvcC1sZXZlbC1uYXZpZ2F0aW9uLWl0ZW0vVG9wTGV2ZWxOYXZpZ2F0aW9uSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmEiLCJmaWxlIjoiLi4vLi4vLi4vc291cmNlL25hdmlnYXRpb24vdG9wLWxldmVsLW5hdmlnYXRpb24taXRlbS9Ub3BMZXZlbE5hdmlnYXRpb25JdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCB7IENvbGxhcHNhYmxlIH0gZnJvbSAnLi4vQ29sbGFwc2FibGUnXG5pbXBvcnQgeyBBcnJvd1VwLCBBcnJvd0Rvd24gfSBmcm9tICcuL2Fycm93cydcbmltcG9ydCB7IEFjdGl2ZU1hcmtlciB9IGZyb20gJy4vQWN0aXZlTWFya2VyJ1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhGbG93OiAncm93IG5vd3JhcCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG4gIGNvbG9yOiAnd2hpdGUnLFxuICBwYWRkaW5nOiAnOHB4IDEzcHggOXB4IDIycHgnLFxuICAnJjpob3Zlcic6IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9XG59KVxuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdigoeyBjb2xvciA9ICdibGFjaycgfSkgPT4gKHtcbiAgZm9udEZhbWlseTogJ1JvYm90byBNb25vLCBtb25vc3BhY2UnLFxuICBmb250V2VpZ2h0OiAnMzAwJyxcbiAgZm9udFNpemU6ICcwLjhyZW0nLFxuICBjb2xvcjogYCR7Y29sb3J9YFxufSkpXG5cbmNvbnN0IEFycm93UG9zaXRpb25lciA9IHN0eWxlZC5kaXYoe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICcxM3B4J1xufSlcblxuY2xhc3MgVG9wTGV2ZWxOYXZpZ2F0aW9uSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy50cmlnZ2VyUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGRlbHRhLCBjb2xscGFzYWJsZUVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGRlbHRhLCBjb2xscGFzYWJsZUVsZW1lbnQsIHRoaXMudHJpZ2dlclJlZi5jdXJyZW50KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbGxhcHNhYmxlIGlkPXtgY29sbGFwc2FibGUke3RoaXMucHJvcHMudGFnfSR7dGhpcy5wcm9wcy50aXRsZX1gfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gZGVsdGE9e3RoaXMucHJvcHMuZGVsdGF9IHRyaWdnZXI9eyh1bmZvbGQsIGZvbGRlZCkgPT4gKFxuICAgICAgICA8V3JhcHBlciBvbkNsaWNrPXsoKSA9PiB1bmZvbGQoKX0gcmVmPXt0aGlzLnRyaWdnZXJSZWZ9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGl2ZSAmJiA8QWN0aXZlTWFya2VyIGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmV9IC8+fVxuICAgICAgICAgIDxUZXh0IGNvbG9yPSd3aGl0ZSc+e3RoaXMucHJvcHMudGl0bGV9PC9UZXh0PlxuICAgICAgICAgIDxBcnJvd1Bvc2l0aW9uZXI+XG4gICAgICAgICAgICB7IGZvbGRlZCA/IDxBcnJvd0Rvd24gLz4gOiA8QXJyb3dVcCAvPiB9XG4gICAgICAgICAgPC9BcnJvd1Bvc2l0aW9uZXI+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICl9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnMXB4IHNvbGlkICNGN0Y3RjcnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db2xsYXBzYWJsZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHsgVG9wTGV2ZWxOYXZpZ2F0aW9uSXRlbSB9XG4iXX0= */");

var ArrowPositioner = _styled("div", {
  target: "e15g9rcr2",
  label: "ArrowPositioner"
})(process.env.NODE_ENV === "production" ? {
  name: "1hvayz0",
  styles: "position:absolute;right:13px;"
} : {
  name: "1hvayz0",
  styles: "position:absolute;right:13px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL3RvcC1sZXZlbC1uYXZpZ2F0aW9uLWl0ZW0vVG9wTGV2ZWxOYXZpZ2F0aW9uSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQndCIiwiZmlsZSI6Ii4uLy4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL3RvcC1sZXZlbC1uYXZpZ2F0aW9uLWl0ZW0vVG9wTGV2ZWxOYXZpZ2F0aW9uSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5pbXBvcnQgeyBDb2xsYXBzYWJsZSB9IGZyb20gJy4uL0NvbGxhcHNhYmxlJ1xuaW1wb3J0IHsgQXJyb3dVcCwgQXJyb3dEb3duIH0gZnJvbSAnLi9hcnJvd3MnXG5pbXBvcnQgeyBBY3RpdmVNYXJrZXIgfSBmcm9tICcuL0FjdGl2ZU1hcmtlcidcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RmxvdzogJ3JvdyBub3dyYXAnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICBjb2xvcjogJ3doaXRlJyxcbiAgcGFkZGluZzogJzhweCAxM3B4IDlweCAyMnB4JyxcbiAgJyY6aG92ZXInOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfVxufSlcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXYoKHsgY29sb3IgPSAnYmxhY2snIH0pID0+ICh7XG4gIGZvbnRGYW1pbHk6ICdSb2JvdG8gTW9ubywgbW9ub3NwYWNlJyxcbiAgZm9udFdlaWdodDogJzMwMCcsXG4gIGZvbnRTaXplOiAnMC44cmVtJyxcbiAgY29sb3I6IGAke2NvbG9yfWBcbn0pKVxuXG5jb25zdCBBcnJvd1Bvc2l0aW9uZXIgPSBzdHlsZWQuZGl2KHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnMTNweCdcbn0pXG5cbmNsYXNzIFRvcExldmVsTmF2aWdhdGlvbkl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMudHJpZ2dlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gIH1cblxuICBvbkNoYW5nZSA9IChkZWx0YSwgY29sbHBhc2FibGVFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShkZWx0YSwgY29sbHBhc2FibGVFbGVtZW50LCB0aGlzLnRyaWdnZXJSZWYuY3VycmVudClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2xsYXBzYWJsZSBpZD17YGNvbGxhcHNhYmxlJHt0aGlzLnByb3BzLnRhZ30ke3RoaXMucHJvcHMudGl0bGV9YH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGRlbHRhPXt0aGlzLnByb3BzLmRlbHRhfSB0cmlnZ2VyPXsodW5mb2xkLCBmb2xkZWQpID0+IChcbiAgICAgICAgPFdyYXBwZXIgb25DbGljaz17KCkgPT4gdW5mb2xkKCl9IHJlZj17dGhpcy50cmlnZ2VyUmVmfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5hY3RpdmUgJiYgPEFjdGl2ZU1hcmtlciBhY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlfSAvPn1cbiAgICAgICAgICA8VGV4dCBjb2xvcj0nd2hpdGUnPnt0aGlzLnByb3BzLnRpdGxlfTwvVGV4dD5cbiAgICAgICAgICA8QXJyb3dQb3NpdGlvbmVyPlxuICAgICAgICAgICAgeyBmb2xkZWQgPyA8QXJyb3dEb3duIC8+IDogPEFycm93VXAgLz4gfVxuICAgICAgICAgIDwvQXJyb3dQb3NpdGlvbmVyPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICApfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJzFweCBzb2xpZCAjRjdGN0Y3Jywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29sbGFwc2FibGU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCB7IFRvcExldmVsTmF2aWdhdGlvbkl0ZW0gfVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var TopLevelNavigationItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopLevelNavigationItem, _React$Component);

  function TopLevelNavigationItem(props) {
    var _this;

    _classCallCheck(this, TopLevelNavigationItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopLevelNavigationItem).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (delta, collpasableElement) {
      _this.props.onChange(delta, collpasableElement, _this.triggerRef.current);
    });

    _this.triggerRef = React.createRef();
    return _this;
  }

  _createClass(TopLevelNavigationItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return ___EmotionJSX(Collapsable, {
        id: "collapsable".concat(this.props.tag).concat(this.props.title),
        onChange: this.onChange,
        delta: this.props.delta,
        trigger: function trigger(unfold, folded) {
          return ___EmotionJSX(Wrapper, {
            onClick: function onClick() {
              return unfold();
            },
            ref: _this2.triggerRef
          }, _this2.props.active && ___EmotionJSX(ActiveMarker, {
            active: _this2.props.active
          }), ___EmotionJSX(Text, {
            color: "white"
          }, _this2.props.title), ___EmotionJSX(ArrowPositioner, null, folded ? ___EmotionJSX(ArrowDown, null) : ___EmotionJSX(ArrowUp, null)));
        }
      }, ___EmotionJSX("div", {
        style: {
          backgroundColor: 'white',
          border: '1px solid #F7F7F7',
          width: '100%'
        }
      }, this.props.children));
    }
  }]);

  return TopLevelNavigationItem;
}(React.Component);

export { TopLevelNavigationItem };
//# sourceMappingURL=TopLevelNavigationItem.js.map