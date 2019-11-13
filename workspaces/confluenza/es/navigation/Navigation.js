import _css from "@emotion/css";
import _styled from "@emotion/styled-base";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
import { TopLevelNavigationItem } from './top-level-navigation-item';
import { NavigationItem } from './NavigationItem';
import { jsx as ___EmotionJSX } from "@emotion/core";

var List = _styled("ul", {
  target: "ehe2r5j0",
  label: "List"
})(process.env.NODE_ENV === "production" ? {
  name: "4y0pul",
  styles: "list-style:none;padding-top:0.5rem;padding-bottom:0;margin:0;"
} : {
  name: "4y0pul",
  styles: "list-style:none;padding-top:0.5rem;padding-bottom:0;margin:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWEiLCJmaWxlIjoiLi4vLi4vc291cmNlL25hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5pbXBvcnQgeyBUb3BMZXZlbE5hdmlnYXRpb25JdGVtIH0gZnJvbSAnLi90b3AtbGV2ZWwtbmF2aWdhdGlvbi1pdGVtJ1xuaW1wb3J0IHsgTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuL05hdmlnYXRpb25JdGVtJ1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsKHtcbiAgbGlzdFN0eWxlOiAnbm9uZScsXG4gIHBhZGRpbmdUb3A6ICcwLjVyZW0nLFxuICBwYWRkaW5nQm90dG9tOiAwLFxuICBtYXJnaW46IDBcbn0pXG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG90aGVyRGVsdGFzOiBbXSxcbiAgICB1c2VyRGVsdGFzOiBbXSxcbiAgICBkZXZlbG9wZXJEZWx0YXM6IFtdLFxuICAgIGRlbW8xRGVsdGFzOiBbXSxcbiAgICBkZW1vMkRlbHRhczogW11cbiAgfVxuXG4gIG5hdmlnYXRpb25Hcm91cHNcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc2Nyb2xsZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG4gICAgdGhpcy5yZXN0b3JlTmF2aWdhdGlvblN0YXRlKClcblxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMubmF2aWdhdGlvbkdyb3VwcylcblxuICAgIHRoaXMubmF2aWdhdGlvbkdyb3VwcyA9IFtcbiAgICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbkdyb3VwRm9yVGFnKHtcbiAgICAgICAgdGl0bGU6ICdVc2VyIERvY3VtZW50YXRpb24nLFxuICAgICAgICB0YWc6ICd1c2VyJyxcbiAgICAgICAgZGVsdGFHcm91cE5hbWU6ICd1c2VyJ1xuICAgICAgfSksXG4gICAgICB0aGlzLmNyZWF0ZU5hdmlnYXRpb25Hcm91cEZvclRhZyh7XG4gICAgICAgIHRpdGxlOiAnRGV2ZWxvcGVyIERvY3VtZW50YXRpb24nLFxuICAgICAgICB0YWc6ICdkZXZlbG9wZXInLFxuICAgICAgICBkZWx0YUdyb3VwTmFtZTogJ2RldmVsb3BlcidcbiAgICAgIH0pLFxuICAgICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uR3JvdXBGb3JUYWcoe1xuICAgICAgICB0aXRsZTogJ090aGVyIERvY3VtZW50cycsXG4gICAgICAgIHRhZzogJ290aGVyJyxcbiAgICAgICAgZGVsdGFHcm91cE5hbWU6ICdvdGhlcidcbiAgICAgIH0pLFxuICAgICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uR3JvdXBGb3JUYWcoe1xuICAgICAgICB0aXRsZTogJ0RlbW8gV29ya3NwYWNlIDEnLFxuICAgICAgICB0YWc6ICdkZW1vMScsXG4gICAgICAgIGRlbHRhR3JvdXBOYW1lOiAnZGVtbzEnXG4gICAgICB9KSxcbiAgICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbkdyb3VwRm9yVGFnKHtcbiAgICAgICAgdGl0bGU6ICdEZW1vIFdvcmtzcGFjZSAyJyxcbiAgICAgICAgdGFnOiAnZGVtbzInLFxuICAgICAgICBkZWx0YUdyb3VwTmFtZTogJ2RlbW8yJ1xuICAgICAgfSlcbiAgICBdXG4gIH1cblxuICByZXN0b3JlTmF2aWdhdGlvblN0YXRlID0gKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgcmVzdG9yZWRTdGF0ZSA9IHRoaXMucmVhZE5hdmlnYXRpb25TdGF0ZSgpXG4gICAgICBpZiAocmVzdG9yZWRTdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yaW5nIG5hdmlnYXRpb24gc3RhdGUnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHJlc3RvcmVkU3RhdGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbTmV3IFNpdGUhXTogY2xlYXJpbmcgcGVyc2lzdGVkIG5hdmlnYXRpb24gc3RhdGUnKVxuICAgICAgICB0aGlzLmNsZWFyTmF2aWdhdGlvblN0YXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWFkTmF2aWdhdGlvblN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlSlNPTiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmF2aWdhdGlvbicpXG4gICAgcmV0dXJuIHRoaXMudmFsaWROYXZpZ2F0aW9uU3RhdGUoc3RhdGVKU09OKVxuICB9XG5cbiAgY2xlYXJOYXZpZ2F0aW9uU3RhdGUgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpXG4gIH1cblxuICB2YWxpZE5hdmlnYXRpb25TdGF0ZSA9IHN0YXRlSlNPTiA9PiB7XG4gICAgaWYgKHN0YXRlSlNPTikge1xuICAgICAgY29uc3QgcmVzdG9yZWRTdGF0ZSA9IEpTT04ucGFyc2Uoc3RhdGVKU09OKVxuICAgICAgY29uc3QgcmVzdG9yZWRTdGF0ZUtleXMgPSBPYmplY3Qua2V5cyhyZXN0b3JlZFN0YXRlKVxuICAgICAgY29uc3QgY3VycmVudFN0YXRlS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpXG4gICAgICBpZiAoY3VycmVudFN0YXRlS2V5cy5ldmVyeShlID0+IHJlc3RvcmVkU3RhdGVLZXlzLmluY2x1ZGVzKGUpKSkge1xuICAgICAgICByZXR1cm4gcmVzdG9yZWRTdGF0ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBjcmVhdGVOYXZpZ2F0aW9uR3JvdXBGb3JUYWcgPSAoeyB0aXRsZSwgdGFnLCBkZWx0YUdyb3VwTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgZG9jczogdGhpcy5wcm9wcy5kb2NzLmZpbHRlcihkID0+IGQubm9kZS5mcm9udG1hdHRlci50YWcgPT09IHRhZyksXG4gICAgICB0YWcsXG4gICAgICBkZWx0YUdyb3VwTmFtZVxuICAgIH1cbiAgfVxuXG4gIGFnZ3JlZ2F0ZURlbHRhcyA9IGRlbHRhcyA9PiB7XG4gICAgaWYgKGRlbHRhcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZGVsdGFzLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYyArIHZhbClcbiAgICB9XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGlzQWN0aXZlID0gZG9jcyA9PiB7XG4gICAgaWYgKGRvY3MgJiYgZG9jcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IGRvY3MuZmlsdGVyKGQgPT4gZC5ub2RlLmZyb250bWF0dGVyLnBhdGggPT09IHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKSlcbiAgICAgIHJldHVybiBmaWx0ZXJlZC5sZW5ndGggPiAwXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdXBkYXRlRGVsdGFzID0gKGdyb3VwLCBpbmRleCwgZCkgPT4ge1xuICAgIGxldCBkZWx0YXMgPSBbLi4udGhpcy5zdGF0ZVtgJHtncm91cH1EZWx0YXNgXV1cbiAgICBkZWx0YXNbaW5kZXhdID0gZFxuICAgIGRlbHRhcyA9IFsuLi5kZWx0YXNdLm1hcChkID0+IHtcbiAgICAgIGlmIChkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIHJldHVybiBkXG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgW2Ake2dyb3VwfURlbHRhc2BdOiBkZWx0YXMgfSlcbiAgfVxuXG4gIGNhbGN1bGF0ZVJlcXVpcmVkU2Nyb2xsID0gKHsgdG9wLCBhZGRlZENvbnRlbnRIZWlnaHQsIG5hdmlnYXRpb25FbGVtZW50VG90YWxIZWlnaHQgfSkgPT4ge1xuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHRoaXMuc2Nyb2xsZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCByZXF1aXJlZEhlaWdodCA9IHRvcCArIG5hdmlnYXRpb25FbGVtZW50VG90YWxIZWlnaHQgKyBhZGRlZENvbnRlbnRIZWlnaHRcbiAgICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gY2xpZW50SGVpZ2h0ICsgdGhpcy5zY3JvbGxlclJlZi5jdXJyZW50LnNjcm9sbFRvcFxuICAgIHJldHVybiByZXF1aXJlZEhlaWdodCAtIGN1cnJlbnRIZWlnaHRcbiAgfVxuXG4gIHNjcm9sbEJ5ID0gc2Nyb2xsQW1vdW50ID0+IHtcbiAgICB0aGlzLnNjcm9sbGVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wICs9IHNjcm9sbEFtb3VudFxuICB9XG5cbiAgdXBkYXRlU2Nyb2xsUG9zaXRpb24gPSAoeyB0b3AsIGFkZGVkQ29udGVudEhlaWdodCwgbmF2aWdhdGlvbkVsZW1lbnRUb3RhbEhlaWdodCB9KSA9PiB7XG4gICAgaWYgKGFkZGVkQ29udGVudEhlaWdodCA+IDAgJiYgdGhpcy5zY3JvbGxlclJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRTY3JvbGwgPSB0aGlzLmNhbGN1bGF0ZVJlcXVpcmVkU2Nyb2xsKHtcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgYWRkZWRDb250ZW50SGVpZ2h0LFxuICAgICAgICAgIG5hdmlnYXRpb25FbGVtZW50VG90YWxIZWlnaHRcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHJlcXVpcmVkU2Nyb2xsID4gMCkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsQnkocmVxdWlyZWRTY3JvbGwpXG4gICAgICAgIH1cbiAgICAgIH0sIDUwMClcbiAgICB9XG4gIH1cblxuICBnZXRFbGVtZW50SGVpZ2h0ID0gZWwgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIE51bWJlcihSZWdFeHAoL1xcZCsvKS5leGVjKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5oZWlnaHQpWzBdKVxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgdG9wTGV2ZWxOYXZpZ2F0aW9uSXRlbUNoYW5nZWQgPSAoZGVsdGEsIGVsZW1lbnQsIHRyaWdnZXJFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbmF2aWdhdGlvbkVsZW1lbnRUb3RhbEhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudEhlaWdodCh0cmlnZ2VyRWxlbWVudClcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbFBvc2l0aW9uKHtcbiAgICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgICBhZGRlZENvbnRlbnRIZWlnaHQ6IGRlbHRhLFxuICAgICAgbmF2aWdhdGlvbkVsZW1lbnRUb3RhbEhlaWdodFxuICAgIH0pXG4gIH1cblxuICBtaWRMZXZlbE5hdmlnYXRpb25JdGVtQ2hhbmdlZCA9IChncm91cCwgaW5kZXgsIGRlbHRhLCBlbGVtZW50LCB0cmlnZ2VyRWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlRGVsdGFzKGdyb3VwLCBpbmRleCwgZGVsdGEpXG5cbiAgICBjb25zdCBuYXZpZ2F0aW9uRWxlbWVudFRvdGFsSGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50SGVpZ2h0KHRyaWdnZXJFbGVtZW50KVxuXG4gICAgdGhpcy51cGRhdGVTY3JvbGxQb3NpdGlvbih7XG4gICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgICAgYWRkZWRDb250ZW50SGVpZ2h0OiBkZWx0YSxcbiAgICAgIG5hdmlnYXRpb25FbGVtZW50VG90YWxIZWlnaHRcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyTmF2aWdhdGlvbkdyb3VwID0gZ3JvdXAgPT4gKFxuICAgIDxUb3BMZXZlbE5hdmlnYXRpb25JdGVtXG4gICAgICBrZXk9e2dyb3VwLnRhZ31cbiAgICAgIHRhZz17Z3JvdXAudGFnfVxuICAgICAgdGl0bGU9e2dyb3VwLnRpdGxlfVxuICAgICAgb25DaGFuZ2U9eyhkZWx0YSwgZWwsIHRyaWdnZXJFbGVtZW50KSA9PiB0aGlzLnRvcExldmVsTmF2aWdhdGlvbkl0ZW1DaGFuZ2VkKGRlbHRhLCBlbCwgdHJpZ2dlckVsZW1lbnQpfVxuICAgICAgYWN0aXZlPXt0aGlzLmlzQWN0aXZlKGdyb3VwLmRvY3MpfVxuICAgICAgZGVsdGE9e3RoaXMuYWdncmVnYXRlRGVsdGFzKHRoaXMuc3RhdGVbYCR7Z3JvdXAuZGVsdGFHcm91cE5hbWV9RGVsdGFzYF0pfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaXN0PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGdyb3VwLmRvY3MubWFwKChkb2MsIGkpID0+IChcbiAgICAgICAgICAgICAgPE5hdmlnYXRpb25JdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIHsuLi5kb2N9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkZWx0YSwgZWwsIHRyaWdnZXJFbGVtZW50KSA9PlxuICAgICAgICAgICAgICAgICAgdGhpcy5taWRMZXZlbE5hdmlnYXRpb25JdGVtQ2hhbmdlZChncm91cC5kZWx0YUdyb3VwTmFtZSwgaSwgZGVsdGEsIGVsLCB0cmlnZ2VyRWxlbWVudClcbiAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9Ub3BMZXZlbE5hdmlnYXRpb25JdGVtPlxuICApXG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuc2Nyb2xsZXJSZWYuY3VycmVudC5zY3JvbGxUb3AgPSBNYXRoLm1heCgxLCBNYXRoLm1pbih0aGlzLnNjcm9sbGVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wLCB0aGlzLnNjcm9sbGVyUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5zY3JvbGxlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCAtIDEpKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmF2aWdhdGlvbicsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgaXMgaW5zYW5lLCBidXQgc2VlbSB0byBkbyBtaXJhY2xlcyBvbiBpT1M6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81MTk5ODY5MC8xMjcyNjc5XG4gIG9uU2Nyb2xsID0gZSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc2Nyb2xsVGltZXIpXG4gICAgdGhpcy5zY3JvbGxUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsZXJSZWYuY3VycmVudCkge1xuICAgICAgICB0aGlzLnNjcm9sbGVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gTWF0aC5tYXgoMSwgTWF0aC5taW4odGhpcy5zY3JvbGxlclJlZi5jdXJyZW50LnNjcm9sbFRvcCwgdGhpcy5zY3JvbGxlclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCAtIHRoaXMuc2Nyb2xsZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgLSAxKSlcbiAgICAgIH1cbiAgICB9LCAyMDApXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uU2Nyb2xsPXt0aGlzLm9uU2Nyb2xsfSByZWY9e3RoaXMuc2Nyb2xsZXJSZWZ9IGNzcz17e1xuICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGhlaWdodDogJ2NhbGMoMTAwJSAtIDIwcHggLSAycmVtIC0gMS44cmVtIC0gOThweCknLFxuICAgICAgICAnQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSc6IHtcbiAgICAgICAgICBoZWlnaHQ6ICdjYWxjKDEwMCUgLSAyMHB4IC0gMnJlbSAtIDEuOHJlbSAtIDcwcHgpJ1xuICAgICAgICB9LFxuICAgICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogYHRvdWNoYCxcbiAgICAgICAgJzo6LXdlYmtpdC1zY3JvbGxiYXInOiB7XG4gICAgICAgICAgd2lkdGg6IGA2cHhgLFxuICAgICAgICAgIGhlaWdodDogYDZweGBcbiAgICAgICAgfSxcbiAgICAgICAgJzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWInOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyNjY2MnXG4gICAgICAgIH1cbiAgICAgIH19PlxuICAgICAgICB7IHRoaXMubmF2aWdhdGlvbkdyb3Vwcy5tYXAoZyA9PiB0aGlzLnJlbmRlck5hdmlnYXRpb25Hcm91cChnKSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

export var Navigation =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Navigation, _React$PureComponent);

  function Navigation(props) {
    var _this;

    _classCallCheck(this, Navigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navigation).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      otherDeltas: [],
      userDeltas: [],
      developerDeltas: [],
      demo1Deltas: [],
      demo2Deltas: []
    });

    _defineProperty(_assertThisInitialized(_this), "navigationGroups", void 0);

    _defineProperty(_assertThisInitialized(_this), "restoreNavigationState", function () {
      if (typeof window !== 'undefined') {
        var restoredState = _this.readNavigationState();

        if (restoredState) {
          console.log('Restoring navigation state'); // eslint-disable-next-line

          _this.state = restoredState;
        } else {
          console.log('[New Site!]: clearing persisted navigation state');

          _this.clearNavigationState();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "readNavigationState", function () {
      var stateJSON = window.localStorage.getItem('navigation');
      return _this.validNavigationState(stateJSON);
    });

    _defineProperty(_assertThisInitialized(_this), "clearNavigationState", function () {
      window.localStorage.clear();
    });

    _defineProperty(_assertThisInitialized(_this), "validNavigationState", function (stateJSON) {
      if (stateJSON) {
        var restoredState = JSON.parse(stateJSON);
        var restoredStateKeys = Object.keys(restoredState);
        var currentStateKeys = Object.keys(_this.state);

        if (currentStateKeys.every(function (e) {
          return restoredStateKeys.includes(e);
        })) {
          return restoredState;
        }
      }

      return undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "createNavigationGroupForTag", function (_ref) {
      var title = _ref.title,
          tag = _ref.tag,
          deltaGroupName = _ref.deltaGroupName;
      return {
        title: title,
        docs: _this.props.docs.filter(function (d) {
          return d.node.frontmatter.tag === tag;
        }),
        tag: tag,
        deltaGroupName: deltaGroupName
      };
    });

    _defineProperty(_assertThisInitialized(_this), "aggregateDeltas", function (deltas) {
      if (deltas.length > 0) {
        return deltas.reduce(function (acc, val) {
          return acc + val;
        });
      }

      return 0;
    });

    _defineProperty(_assertThisInitialized(_this), "isActive", function (docs) {
      if (docs && docs.length > 0) {
        var filtered = docs.filter(function (d) {
          return d.node.frontmatter.path === _this.props.location.pathname.replace(/\/$/, '');
        });
        return filtered.length > 0;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "updateDeltas", function (group, index, d) {
      var deltas = _toConsumableArray(_this.state["".concat(group, "Deltas")]);

      deltas[index] = d;
      deltas = _toConsumableArray(deltas).map(function (d) {
        if (d === undefined) {
          return 0;
        }

        return d;
      });

      _this.setState(_defineProperty({}, "".concat(group, "Deltas"), deltas));
    });

    _defineProperty(_assertThisInitialized(_this), "calculateRequiredScroll", function (_ref2) {
      var top = _ref2.top,
          addedContentHeight = _ref2.addedContentHeight,
          navigationElementTotalHeight = _ref2.navigationElementTotalHeight;
      var clientHeight = _this.scrollerRef.current.clientHeight;
      var requiredHeight = top + navigationElementTotalHeight + addedContentHeight;
      var currentHeight = clientHeight + _this.scrollerRef.current.scrollTop;
      return requiredHeight - currentHeight;
    });

    _defineProperty(_assertThisInitialized(_this), "scrollBy", function (scrollAmount) {
      _this.scrollerRef.current.scrollTop += scrollAmount;
    });

    _defineProperty(_assertThisInitialized(_this), "updateScrollPosition", function (_ref3) {
      var top = _ref3.top,
          addedContentHeight = _ref3.addedContentHeight,
          navigationElementTotalHeight = _ref3.navigationElementTotalHeight;

      if (addedContentHeight > 0 && _this.scrollerRef.current) {
        setTimeout(function () {
          var requiredScroll = _this.calculateRequiredScroll({
            top: top,
            addedContentHeight: addedContentHeight,
            navigationElementTotalHeight: navigationElementTotalHeight
          });

          if (requiredScroll > 0) {
            _this.scrollBy(requiredScroll);
          }
        }, 500);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getElementHeight", function (el) {
      if (typeof window !== 'undefined') {
        return Number(RegExp(/\d+/).exec(window.getComputedStyle(el).height)[0]);
      }

      return 0;
    });

    _defineProperty(_assertThisInitialized(_this), "topLevelNavigationItemChanged", function (delta, element, triggerElement) {
      var navigationElementTotalHeight = _this.getElementHeight(triggerElement);

      _this.updateScrollPosition({
        top: element.offsetTop,
        addedContentHeight: delta,
        navigationElementTotalHeight: navigationElementTotalHeight
      });
    });

    _defineProperty(_assertThisInitialized(_this), "midLevelNavigationItemChanged", function (group, index, delta, element, triggerElement) {
      _this.updateDeltas(group, index, delta);

      var navigationElementTotalHeight = _this.getElementHeight(triggerElement);

      _this.updateScrollPosition({
        top: element.offsetTop,
        addedContentHeight: delta,
        navigationElementTotalHeight: navigationElementTotalHeight
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderNavigationGroup", function (group) {
      return ___EmotionJSX(TopLevelNavigationItem, {
        key: group.tag,
        tag: group.tag,
        title: group.title,
        onChange: function onChange(delta, el, triggerElement) {
          return _this.topLevelNavigationItemChanged(delta, el, triggerElement);
        },
        active: _this.isActive(group.docs),
        delta: _this.aggregateDeltas(_this.state["".concat(group.deltaGroupName, "Deltas")])
      }, ___EmotionJSX("div", null, ___EmotionJSX(List, null, group.docs.map(function (doc, i) {
        return ___EmotionJSX(NavigationItem, _extends({
          key: i,
          location: _this.props.location
        }, doc, {
          onChange: function onChange(delta, el, triggerElement) {
            return _this.midLevelNavigationItemChanged(group.deltaGroupName, i, delta, el, triggerElement);
          }
        }));
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (e) {
      clearTimeout(_this.scrollTimer);
      _this.scrollTimer = setTimeout(function () {
        if (_this.scrollerRef.current) {
          _this.scrollerRef.current.scrollTop = Math.max(1, Math.min(_this.scrollerRef.current.scrollTop, _this.scrollerRef.current.scrollHeight - _this.scrollerRef.current.clientHeight - 1));
        }
      }, 200);
    });

    _this.scrollerRef = React.createRef();

    _this.restoreNavigationState();

    console.log(_this.props.navigationGroups);
    _this.navigationGroups = [_this.createNavigationGroupForTag({
      title: 'User Documentation',
      tag: 'user',
      deltaGroupName: 'user'
    }), _this.createNavigationGroupForTag({
      title: 'Developer Documentation',
      tag: 'developer',
      deltaGroupName: 'developer'
    }), _this.createNavigationGroupForTag({
      title: 'Other Documents',
      tag: 'other',
      deltaGroupName: 'other'
    }), _this.createNavigationGroupForTag({
      title: 'Demo Workspace 1',
      tag: 'demo1',
      deltaGroupName: 'demo1'
    }), _this.createNavigationGroupForTag({
      title: 'Demo Workspace 2',
      tag: 'demo2',
      deltaGroupName: 'demo2'
    })];
    return _this;
  }

  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollerRef.current.scrollTop = Math.max(1, Math.min(this.scrollerRef.current.scrollTop, this.scrollerRef.current.scrollHeight - this.scrollerRef.current.clientHeight - 1));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('navigation', JSON.stringify(this.state));
      }
    } // This is insane, but seem to do miracles on iOS: https://stackoverflow.com/a/51998690/1272679

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return ___EmotionJSX("div", {
        onScroll: this.onScroll,
        ref: this.scrollerRef,
        css:
        /*#__PURE__*/
        _css({
          overflowY: 'auto',
          position: 'relative',
          height: 'calc(100% - 20px - 2rem - 1.8rem - 98px)',
          '@media (orientation: landscape)': {
            height: 'calc(100% - 20px - 2rem - 1.8rem - 70px)'
          },
          WebkitOverflowScrolling: "touch",
          '::-webkit-scrollbar': {
            width: "6px",
            height: "6px"
          },
          '::-webkit-scrollbar-thumb': {
            background: '#ccc'
          }
        }, ";label:Navigation;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMk8yRCIsImZpbGUiOiIuLi8uLi9zb3VyY2UvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCB7IFRvcExldmVsTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuL3RvcC1sZXZlbC1uYXZpZ2F0aW9uLWl0ZW0nXG5pbXBvcnQgeyBOYXZpZ2F0aW9uSXRlbSB9IGZyb20gJy4vTmF2aWdhdGlvbkl0ZW0nXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWwoe1xuICBsaXN0U3R5bGU6ICdub25lJyxcbiAgcGFkZGluZ1RvcDogJzAuNXJlbScsXG4gIHBhZGRpbmdCb3R0b206IDAsXG4gIG1hcmdpbjogMFxufSlcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3RoZXJEZWx0YXM6IFtdLFxuICAgIHVzZXJEZWx0YXM6IFtdLFxuICAgIGRldmVsb3BlckRlbHRhczogW10sXG4gICAgZGVtbzFEZWx0YXM6IFtdLFxuICAgIGRlbW8yRGVsdGFzOiBbXVxuICB9XG5cbiAgbmF2aWdhdGlvbkdyb3Vwc1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zY3JvbGxlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG5cbiAgICB0aGlzLnJlc3RvcmVOYXZpZ2F0aW9uU3RhdGUoKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5uYXZpZ2F0aW9uR3JvdXBzKVxuXG4gICAgdGhpcy5uYXZpZ2F0aW9uR3JvdXBzID0gW1xuICAgICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uR3JvdXBGb3JUYWcoe1xuICAgICAgICB0aXRsZTogJ1VzZXIgRG9jdW1lbnRhdGlvbicsXG4gICAgICAgIHRhZzogJ3VzZXInLFxuICAgICAgICBkZWx0YUdyb3VwTmFtZTogJ3VzZXInXG4gICAgICB9KSxcbiAgICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbkdyb3VwRm9yVGFnKHtcbiAgICAgICAgdGl0bGU6ICdEZXZlbG9wZXIgRG9jdW1lbnRhdGlvbicsXG4gICAgICAgIHRhZzogJ2RldmVsb3BlcicsXG4gICAgICAgIGRlbHRhR3JvdXBOYW1lOiAnZGV2ZWxvcGVyJ1xuICAgICAgfSksXG4gICAgICB0aGlzLmNyZWF0ZU5hdmlnYXRpb25Hcm91cEZvclRhZyh7XG4gICAgICAgIHRpdGxlOiAnT3RoZXIgRG9jdW1lbnRzJyxcbiAgICAgICAgdGFnOiAnb3RoZXInLFxuICAgICAgICBkZWx0YUdyb3VwTmFtZTogJ290aGVyJ1xuICAgICAgfSksXG4gICAgICB0aGlzLmNyZWF0ZU5hdmlnYXRpb25Hcm91cEZvclRhZyh7XG4gICAgICAgIHRpdGxlOiAnRGVtbyBXb3Jrc3BhY2UgMScsXG4gICAgICAgIHRhZzogJ2RlbW8xJyxcbiAgICAgICAgZGVsdGFHcm91cE5hbWU6ICdkZW1vMSdcbiAgICAgIH0pLFxuICAgICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uR3JvdXBGb3JUYWcoe1xuICAgICAgICB0aXRsZTogJ0RlbW8gV29ya3NwYWNlIDInLFxuICAgICAgICB0YWc6ICdkZW1vMicsXG4gICAgICAgIGRlbHRhR3JvdXBOYW1lOiAnZGVtbzInXG4gICAgICB9KVxuICAgIF1cbiAgfVxuXG4gIHJlc3RvcmVOYXZpZ2F0aW9uU3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCByZXN0b3JlZFN0YXRlID0gdGhpcy5yZWFkTmF2aWdhdGlvblN0YXRlKClcbiAgICAgIGlmIChyZXN0b3JlZFN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JpbmcgbmF2aWdhdGlvbiBzdGF0ZScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB0aGlzLnN0YXRlID0gcmVzdG9yZWRTdGF0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tOZXcgU2l0ZSFdOiBjbGVhcmluZyBwZXJzaXN0ZWQgbmF2aWdhdGlvbiBzdGF0ZScpXG4gICAgICAgIHRoaXMuY2xlYXJOYXZpZ2F0aW9uU3RhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlYWROYXZpZ2F0aW9uU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVKU09OID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYXZpZ2F0aW9uJylcbiAgICByZXR1cm4gdGhpcy52YWxpZE5hdmlnYXRpb25TdGF0ZShzdGF0ZUpTT04pXG4gIH1cblxuICBjbGVhck5hdmlnYXRpb25TdGF0ZSA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgfVxuXG4gIHZhbGlkTmF2aWdhdGlvblN0YXRlID0gc3RhdGVKU09OID0+IHtcbiAgICBpZiAoc3RhdGVKU09OKSB7XG4gICAgICBjb25zdCByZXN0b3JlZFN0YXRlID0gSlNPTi5wYXJzZShzdGF0ZUpTT04pXG4gICAgICBjb25zdCByZXN0b3JlZFN0YXRlS2V5cyA9IE9iamVjdC5rZXlzKHJlc3RvcmVkU3RhdGUpXG4gICAgICBjb25zdCBjdXJyZW50U3RhdGVLZXlzID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZSlcbiAgICAgIGlmIChjdXJyZW50U3RhdGVLZXlzLmV2ZXJ5KGUgPT4gcmVzdG9yZWRTdGF0ZUtleXMuaW5jbHVkZXMoZSkpKSB7XG4gICAgICAgIHJldHVybiByZXN0b3JlZFN0YXRlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGNyZWF0ZU5hdmlnYXRpb25Hcm91cEZvclRhZyA9ICh7IHRpdGxlLCB0YWcsIGRlbHRhR3JvdXBOYW1lIH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBkb2NzOiB0aGlzLnByb3BzLmRvY3MuZmlsdGVyKGQgPT4gZC5ub2RlLmZyb250bWF0dGVyLnRhZyA9PT0gdGFnKSxcbiAgICAgIHRhZyxcbiAgICAgIGRlbHRhR3JvdXBOYW1lXG4gICAgfVxuICB9XG5cbiAgYWdncmVnYXRlRGVsdGFzID0gZGVsdGFzID0+IHtcbiAgICBpZiAoZGVsdGFzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBkZWx0YXMucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjICsgdmFsKVxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgaXNBY3RpdmUgPSBkb2NzID0+IHtcbiAgICBpZiAoZG9jcyAmJiBkb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gZG9jcy5maWx0ZXIoZCA9PiBkLm5vZGUuZnJvbnRtYXR0ZXIucGF0aCA9PT0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgJycpKVxuICAgICAgcmV0dXJuIGZpbHRlcmVkLmxlbmd0aCA+IDBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB1cGRhdGVEZWx0YXMgPSAoZ3JvdXAsIGluZGV4LCBkKSA9PiB7XG4gICAgbGV0IGRlbHRhcyA9IFsuLi50aGlzLnN0YXRlW2Ake2dyb3VwfURlbHRhc2BdXVxuICAgIGRlbHRhc1tpbmRleF0gPSBkXG4gICAgZGVsdGFzID0gWy4uLmRlbHRhc10ubWFwKGQgPT4ge1xuICAgICAgaWYgKGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgcmV0dXJuIGRcbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBbYCR7Z3JvdXB9RGVsdGFzYF06IGRlbHRhcyB9KVxuICB9XG5cbiAgY2FsY3VsYXRlUmVxdWlyZWRTY3JvbGwgPSAoeyB0b3AsIGFkZGVkQ29udGVudEhlaWdodCwgbmF2aWdhdGlvbkVsZW1lbnRUb3RhbEhlaWdodCB9KSA9PiB7XG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gdGhpcy5zY3JvbGxlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IHJlcXVpcmVkSGVpZ2h0ID0gdG9wICsgbmF2aWdhdGlvbkVsZW1lbnRUb3RhbEhlaWdodCArIGFkZGVkQ29udGVudEhlaWdodFxuICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBjbGllbnRIZWlnaHQgKyB0aGlzLnNjcm9sbGVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wXG4gICAgcmV0dXJuIHJlcXVpcmVkSGVpZ2h0IC0gY3VycmVudEhlaWdodFxuICB9XG5cbiAgc2Nyb2xsQnkgPSBzY3JvbGxBbW91bnQgPT4ge1xuICAgIHRoaXMuc2Nyb2xsZXJSZWYuY3VycmVudC5zY3JvbGxUb3AgKz0gc2Nyb2xsQW1vdW50XG4gIH1cblxuICB1cGRhdGVTY3JvbGxQb3NpdGlvbiA9ICh7IHRvcCwgYWRkZWRDb250ZW50SGVpZ2h0LCBuYXZpZ2F0aW9uRWxlbWVudFRvdGFsSGVpZ2h0IH0pID0+IHtcbiAgICBpZiAoYWRkZWRDb250ZW50SGVpZ2h0ID4gMCAmJiB0aGlzLnNjcm9sbGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXF1aXJlZFNjcm9sbCA9IHRoaXMuY2FsY3VsYXRlUmVxdWlyZWRTY3JvbGwoe1xuICAgICAgICAgIHRvcCxcbiAgICAgICAgICBhZGRlZENvbnRlbnRIZWlnaHQsXG4gICAgICAgICAgbmF2aWdhdGlvbkVsZW1lbnRUb3RhbEhlaWdodFxuICAgICAgICB9KVxuICAgICAgICBpZiAocmVxdWlyZWRTY3JvbGwgPiAwKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxCeShyZXF1aXJlZFNjcm9sbClcbiAgICAgICAgfVxuICAgICAgfSwgNTAwKVxuICAgIH1cbiAgfVxuXG4gIGdldEVsZW1lbnRIZWlnaHQgPSBlbCA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKFJlZ0V4cCgvXFxkKy8pLmV4ZWMod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmhlaWdodClbMF0pXG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cblxuICB0b3BMZXZlbE5hdmlnYXRpb25JdGVtQ2hhbmdlZCA9IChkZWx0YSwgZWxlbWVudCwgdHJpZ2dlckVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBuYXZpZ2F0aW9uRWxlbWVudFRvdGFsSGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50SGVpZ2h0KHRyaWdnZXJFbGVtZW50KVxuICAgIHRoaXMudXBkYXRlU2Nyb2xsUG9zaXRpb24oe1xuICAgICAgdG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICAgIGFkZGVkQ29udGVudEhlaWdodDogZGVsdGEsXG4gICAgICBuYXZpZ2F0aW9uRWxlbWVudFRvdGFsSGVpZ2h0XG4gICAgfSlcbiAgfVxuXG4gIG1pZExldmVsTmF2aWdhdGlvbkl0ZW1DaGFuZ2VkID0gKGdyb3VwLCBpbmRleCwgZGVsdGEsIGVsZW1lbnQsIHRyaWdnZXJFbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGVEZWx0YXMoZ3JvdXAsIGluZGV4LCBkZWx0YSlcblxuICAgIGNvbnN0IG5hdmlnYXRpb25FbGVtZW50VG90YWxIZWlnaHQgPSB0aGlzLmdldEVsZW1lbnRIZWlnaHQodHJpZ2dlckVsZW1lbnQpXG5cbiAgICB0aGlzLnVwZGF0ZVNjcm9sbFBvc2l0aW9uKHtcbiAgICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgICBhZGRlZENvbnRlbnRIZWlnaHQ6IGRlbHRhLFxuICAgICAgbmF2aWdhdGlvbkVsZW1lbnRUb3RhbEhlaWdodFxuICAgIH0pXG4gIH1cblxuICByZW5kZXJOYXZpZ2F0aW9uR3JvdXAgPSBncm91cCA9PiAoXG4gICAgPFRvcExldmVsTmF2aWdhdGlvbkl0ZW1cbiAgICAgIGtleT17Z3JvdXAudGFnfVxuICAgICAgdGFnPXtncm91cC50YWd9XG4gICAgICB0aXRsZT17Z3JvdXAudGl0bGV9XG4gICAgICBvbkNoYW5nZT17KGRlbHRhLCBlbCwgdHJpZ2dlckVsZW1lbnQpID0+IHRoaXMudG9wTGV2ZWxOYXZpZ2F0aW9uSXRlbUNoYW5nZWQoZGVsdGEsIGVsLCB0cmlnZ2VyRWxlbWVudCl9XG4gICAgICBhY3RpdmU9e3RoaXMuaXNBY3RpdmUoZ3JvdXAuZG9jcyl9XG4gICAgICBkZWx0YT17dGhpcy5hZ2dyZWdhdGVEZWx0YXModGhpcy5zdGF0ZVtgJHtncm91cC5kZWx0YUdyb3VwTmFtZX1EZWx0YXNgXSl9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZ3JvdXAuZG9jcy5tYXAoKGRvYywgaSkgPT4gKFxuICAgICAgICAgICAgICA8TmF2aWdhdGlvbkl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgey4uLmRvY31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRlbHRhLCBlbCwgdHJpZ2dlckVsZW1lbnQpID0+XG4gICAgICAgICAgICAgICAgICB0aGlzLm1pZExldmVsTmF2aWdhdGlvbkl0ZW1DaGFuZ2VkKGdyb3VwLmRlbHRhR3JvdXBOYW1lLCBpLCBkZWx0YSwgZWwsIHRyaWdnZXJFbGVtZW50KVxuICAgICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L1RvcExldmVsTmF2aWdhdGlvbkl0ZW0+XG4gIClcblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5zY3JvbGxlclJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IE1hdGgubWF4KDEsIE1hdGgubWluKHRoaXMuc2Nyb2xsZXJSZWYuY3VycmVudC5zY3JvbGxUb3AsIHRoaXMuc2Nyb2xsZXJSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgLSB0aGlzLnNjcm9sbGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0IC0gMSkpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYXZpZ2F0aW9uJywgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpXG4gICAgfVxuICB9XG5cbiAgLy8gVGhpcyBpcyBpbnNhbmUsIGJ1dCBzZWVtIHRvIGRvIG1pcmFjbGVzIG9uIGlPUzogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUxOTk4NjkwLzEyNzI2NzlcbiAgb25TY3JvbGwgPSBlID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxUaW1lcilcbiAgICB0aGlzLnNjcm9sbFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxlclJlZi5jdXJyZW50KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsZXJSZWYuY3VycmVudC5zY3JvbGxUb3AgPSBNYXRoLm1heCgxLCBNYXRoLm1pbih0aGlzLnNjcm9sbGVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wLCB0aGlzLnNjcm9sbGVyUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5zY3JvbGxlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCAtIDEpKVxuICAgICAgfVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgb25TY3JvbGw9e3RoaXMub25TY3JvbGx9IHJlZj17dGhpcy5zY3JvbGxlclJlZn0gY3NzPXt7XG4gICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgaGVpZ2h0OiAnY2FsYygxMDAlIC0gMjBweCAtIDJyZW0gLSAxLjhyZW0gLSA5OHB4KScsXG4gICAgICAgICdAbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJzoge1xuICAgICAgICAgIGhlaWdodDogJ2NhbGMoMTAwJSAtIDIwcHggLSAycmVtIC0gMS44cmVtIC0gNzBweCknXG4gICAgICAgIH0sXG4gICAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBgdG91Y2hgLFxuICAgICAgICAnOjotd2Via2l0LXNjcm9sbGJhcic6IHtcbiAgICAgICAgICB3aWR0aDogYDZweGAsXG4gICAgICAgICAgaGVpZ2h0OiBgNnB4YFxuICAgICAgICB9LFxuICAgICAgICAnOjotd2Via2l0LXNjcm9sbGJhci10aHVtYic6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2NjYydcbiAgICAgICAgfVxuICAgICAgfX0+XG4gICAgICAgIHsgdGhpcy5uYXZpZ2F0aW9uR3JvdXBzLm1hcChnID0+IHRoaXMucmVuZGVyTmF2aWdhdGlvbkdyb3VwKGcpKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */"))
      }, this.navigationGroups.map(function (g) {
        return _this2.renderNavigationGroup(g);
      }));
    }
  }]);

  return Navigation;
}(React.PureComponent);
//# sourceMappingURL=Navigation.js.map