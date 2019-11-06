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
import { jsx as ___EmotionJSX } from "@emotion/core";

var A = _styled("a", {
  target: "euqcha90",
  label: "A"
})(process.env.NODE_ENV === "production" ? {
  name: "1f5f09y",
  styles: "font-family:Roboto Condensed, sans-serif;font-weight:100;font-size:0.9rem;color:#FF55BE;margin-right:2rem;@media (max-width: 420px){margin-right:10px;}&:hover{text-decoration:underline;color:#FF55BE;}"
} : {
  name: "1f5f09y",
  styles: "font-family:Roboto Condensed, sans-serif;font-weight:100;font-size:0.9rem;color:#FF55BE;margin-right:2rem;@media (max-width: 420px){margin-right:10px;}&:hover{text-decoration:underline;color:#FF55BE;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9FZGl0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdVIiwiZmlsZSI6Ii4uL3NvdXJjZS9FZGl0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IEEgPSBzdHlsZWQuYSh7XG4gIC8vIGZvbnRGYW1pbHk6ICdSb2JvdG8gTW9ubywgbW9ub3NwYWNlJyxcbiAgZm9udEZhbWlseTogJ1JvYm90byBDb25kZW5zZWQsIHNhbnMtc2VyaWYnLFxuICBmb250V2VpZ2h0OiAnMTAwJyxcbiAgZm9udFNpemU6ICcwLjlyZW0nLFxuICBjb2xvcjogJyNGRjU1QkUnLFxuICBtYXJnaW5SaWdodDogJzJyZW0nLFxuICAnQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSc6IHtcbiAgICBtYXJnaW5SaWdodDogJzEwcHgnXG4gIH0sXG4gICcmOmhvdmVyJzoge1xuICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICBjb2xvcjogJyNGRjU1QkUnXG4gIH1cbn0pXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RmxvdzogJ3JvdyBub3dyYXAnLFxuICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICBwYWRkaW5nTGVmdDogJzNweCdcbn0pXG5cbmNsYXNzIEVkaXRGaWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyRWRpdFRoaXNQYWdlTGluayA9IChmaWxlQWJzb2x1dGVQYXRoLCBsaW5rVGV4dCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoID0gZmlsZUFic29sdXRlUGF0aC5tYXRjaCgvLipcXC8od29ya3NwYWNlcy4qKSQvKSB8fCBmaWxlQWJzb2x1dGVQYXRoLm1hdGNoKC8uKlxcLyguKikkLylcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IGZpbGVSZWxhdGl2ZVBhdGggPSBtYXRjaFsxXVxuICAgICAgY29uc3QgeyBlZGl0QmFzZVVybCB9ID0gdGhpcy5wcm9wc1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEEgaHJlZj17YCR7ZWRpdEJhc2VVcmx9LyR7ZmlsZVJlbGF0aXZlUGF0aH1gfT57bGlua1RleHR9PC9BPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmVuZGVyT3JpZ2luYWxDb250ZW50ID0gZmlsZUFic29sdXRlUGF0aCA9PiB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyRWRpdFRoaXNQYWdlTGluayhmaWxlQWJzb2x1dGVQYXRoLCAnRWRpdCB0aGlzIHBhZ2UnKVxuICB9XG5cbiAgcmVuZGVyRXh0ZXJuYWxDb250ZW50ID0gZXh0ZXJuYWxDb250ZW50ID0+IHtcbiAgICBpZiAoZXh0ZXJuYWxDb250ZW50KSB7XG4gICAgICBjb25zdCBmaWxlQWJzb2x1dGVQYXRoID0gZXh0ZXJuYWxDb250ZW50LmNoaWxkTWFya2Rvd25SZW1hcmsuZmlsZUFic29sdXRlUGF0aFxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRWRpdFRoaXNQYWdlTGluayhmaWxlQWJzb2x1dGVQYXRoLCAnRWRpdCBleHRlcm5hbCBjb250ZW50IHBhZ2UnKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGZpbGVBYnNvbHV0ZVBhdGgsIGV4dGVybmFsQ29udGVudCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICB7IHRoaXMucmVuZGVyT3JpZ2luYWxDb250ZW50KGZpbGVBYnNvbHV0ZVBhdGgpIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlckV4dGVybmFsQ29udGVudChleHRlcm5hbENvbnRlbnQpIH1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IHsgRWRpdEZpbGUgfVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var Wrapper = _styled("div", {
  target: "euqcha91",
  label: "Wrapper"
})(process.env.NODE_ENV === "production" ? {
  name: "wey3qt",
  styles: "display:flex;flex-flow:row nowrap;justify-content:flex-start;padding-left:3px;"
} : {
  name: "wey3qt",
  styles: "display:flex;flex-flow:row nowrap;justify-content:flex-start;padding-left:3px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9FZGl0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CZ0IiLCJmaWxlIjoiLi4vc291cmNlL0VkaXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgQSA9IHN0eWxlZC5hKHtcbiAgLy8gZm9udEZhbWlseTogJ1JvYm90byBNb25vLCBtb25vc3BhY2UnLFxuICBmb250RmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCwgc2Fucy1zZXJpZicsXG4gIGZvbnRXZWlnaHQ6ICcxMDAnLFxuICBmb250U2l6ZTogJzAuOXJlbScsXG4gIGNvbG9yOiAnI0ZGNTVCRScsXG4gIG1hcmdpblJpZ2h0OiAnMnJlbScsXG4gICdAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpJzoge1xuICAgIG1hcmdpblJpZ2h0OiAnMTBweCdcbiAgfSxcbiAgJyY6aG92ZXInOiB7XG4gICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICAgIGNvbG9yOiAnI0ZGNTVCRSdcbiAgfVxufSlcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhGbG93OiAncm93IG5vd3JhcCcsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gIHBhZGRpbmdMZWZ0OiAnM3B4J1xufSlcblxuY2xhc3MgRWRpdEZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJFZGl0VGhpc1BhZ2VMaW5rID0gKGZpbGVBYnNvbHV0ZVBhdGgsIGxpbmtUZXh0KSA9PiB7XG4gICAgY29uc3QgbWF0Y2ggPSBmaWxlQWJzb2x1dGVQYXRoLm1hdGNoKC8uKlxcLyh3b3Jrc3BhY2VzLiopJC8pIHx8IGZpbGVBYnNvbHV0ZVBhdGgubWF0Y2goLy4qXFwvKC4qKSQvKVxuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgZmlsZVJlbGF0aXZlUGF0aCA9IG1hdGNoWzFdXG4gICAgICBjb25zdCB7IGVkaXRCYXNlVXJsIH0gPSB0aGlzLnByb3BzXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QSBocmVmPXtgJHtlZGl0QmFzZVVybH0vJHtmaWxlUmVsYXRpdmVQYXRofWB9PntsaW5rVGV4dH08L0E+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZW5kZXJPcmlnaW5hbENvbnRlbnQgPSBmaWxlQWJzb2x1dGVQYXRoID0+IHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJFZGl0VGhpc1BhZ2VMaW5rKGZpbGVBYnNvbHV0ZVBhdGgsICdFZGl0IHRoaXMgcGFnZScpXG4gIH1cblxuICByZW5kZXJFeHRlcm5hbENvbnRlbnQgPSBleHRlcm5hbENvbnRlbnQgPT4ge1xuICAgIGlmIChleHRlcm5hbENvbnRlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGVBYnNvbHV0ZVBhdGggPSBleHRlcm5hbENvbnRlbnQuY2hpbGRNYXJrZG93blJlbWFyay5maWxlQWJzb2x1dGVQYXRoXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJFZGl0VGhpc1BhZ2VMaW5rKGZpbGVBYnNvbHV0ZVBhdGgsICdFZGl0IGV4dGVybmFsIGNvbnRlbnQgcGFnZScpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZmlsZUFic29sdXRlUGF0aCwgZXh0ZXJuYWxDb250ZW50IH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJPcmlnaW5hbENvbnRlbnQoZmlsZUFic29sdXRlUGF0aCkgfVxuICAgICAgICB7IHRoaXMucmVuZGVyRXh0ZXJuYWxDb250ZW50KGV4dGVybmFsQ29udGVudCkgfVxuICAgICAgPC9XcmFwcGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgeyBFZGl0RmlsZSB9XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var EditFile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditFile, _React$Component);

  function EditFile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EditFile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditFile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderEditThisPageLink", function (fileAbsolutePath, linkText) {
      var match = fileAbsolutePath.match(/.*\/(workspaces.*)$/) || fileAbsolutePath.match(/.*\/(.*)$/);

      if (match) {
        var fileRelativePath = match[1];
        var editBaseUrl = _this.props.editBaseUrl;
        return ___EmotionJSX(A, {
          href: "".concat(editBaseUrl, "/").concat(fileRelativePath)
        }, linkText);
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderOriginalContent", function (fileAbsolutePath) {
      return _this.renderEditThisPageLink(fileAbsolutePath, 'Edit this page');
    });

    _defineProperty(_assertThisInitialized(_this), "renderExternalContent", function (externalContent) {
      if (externalContent) {
        var fileAbsolutePath = externalContent.childMarkdownRemark.fileAbsolutePath;
        return _this.renderEditThisPageLink(fileAbsolutePath, 'Edit external content page');
      }

      return null;
    });

    return _this;
  }

  _createClass(EditFile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fileAbsolutePath = _this$props.fileAbsolutePath,
          externalContent = _this$props.externalContent;
      return ___EmotionJSX(Wrapper, null, this.renderOriginalContent(fileAbsolutePath), this.renderExternalContent(externalContent));
    }
  }]);

  return EditFile;
}(React.Component);

export { EditFile };
//# sourceMappingURL=Editing.js.map