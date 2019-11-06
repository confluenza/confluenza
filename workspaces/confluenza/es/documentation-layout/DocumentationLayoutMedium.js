import _css from "@emotion/css";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect } from 'react';
import { rhythm } from '../typography';
import { Navigation } from '../navigation';
import { MenuButton } from '../navigation/MenuButton';
import { SiteTitle } from './SiteTitle';
import { jsx as ___EmotionJSX } from "@emotion/core";

var MobileNavigation = function MobileNavigation(_ref) {
  var menuActive = _ref.menuActive,
      title = _ref.title,
      docs = _ref.docs,
      location = _ref.location,
      onStateChanged = _ref.onStateChanged,
      deltas = _ref.deltas;
  return ___EmotionJSX("div", {
    css:
    /*#__PURE__*/
    _css({
      position: 'fixed',
      zIndex: 20,
      height: "calc(100vh - ".concat(rhythm(3), ")"),
      minWidth: '300px',
      maxWidth: '300px',
      '@media (max-width: 568px)': {
        minWidth: '100vw',
        maxWidth: '100vw',
        height: '100vh'
      },
      backgroundColor: 'rgba(247, 247, 247, 0.9)',
      WebkitOverflowScrolling: "touch",
      '::-webkit-scrollbar': {
        width: "6px",
        height: "6px"
      },
      '::-webkit-scrollbar-thumb': {
        background: '#ccc'
      },
      top: 0,
      right: '100vw',
      // height: '100vh',
      display: 'block',
      // justifyContent: 'center',
      // alignItems: 'center',
      // background: 'white',
      transition: 'transform 0.2s ease-in-out 0s',
      transform: menuActive ? 'translate(100%, 0)' : 'none'
    }, ";label:MobileNavigation;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9kb2N1bWVudGF0aW9uLWxheW91dC9Eb2N1bWVudGF0aW9uTGF5b3V0TWVkaXVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNTIiwiZmlsZSI6Ii4uLy4uL3NvdXJjZS9kb2N1bWVudGF0aW9uLWxheW91dC9Eb2N1bWVudGF0aW9uTGF5b3V0TWVkaXVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJoeXRobSB9IGZyb20gJy4uL3R5cG9ncmFwaHknXG5cbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuLi9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uL25hdmlnYXRpb24vTWVudUJ1dHRvbidcbmltcG9ydCB7IFNpdGVUaXRsZSB9IGZyb20gJy4vU2l0ZVRpdGxlJ1xuXG5jb25zdCBNb2JpbGVOYXZpZ2F0aW9uID0gKHsgbWVudUFjdGl2ZSwgdGl0bGUsIGRvY3MsIGxvY2F0aW9uLCBvblN0YXRlQ2hhbmdlZCwgZGVsdGFzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17e1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB6SW5kZXg6IDIwLFxuICAgICAgaGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7cmh5dGhtKDMpfSlgLFxuICAgICAgbWluV2lkdGg6ICczMDBweCcsXG4gICAgICBtYXhXaWR0aDogJzMwMHB4JyxcbiAgICAgICdAbWVkaWEgKG1heC13aWR0aDogNTY4cHgpJzoge1xuICAgICAgICBtaW5XaWR0aDogJzEwMHZ3JyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDB2dycsXG4gICAgICAgIGhlaWdodDogJzEwMHZoJ1xuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjQ3LCAyNDcsIDI0NywgMC45KScsXG4gICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogYHRvdWNoYCxcbiAgICAgICc6Oi13ZWJraXQtc2Nyb2xsYmFyJzoge1xuICAgICAgICB3aWR0aDogYDZweGAsXG4gICAgICAgIGhlaWdodDogYDZweGBcbiAgICAgIH0sXG4gICAgICAnOjotd2Via2l0LXNjcm9sbGJhci10aHVtYic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyNjY2MnXG4gICAgICB9LFxuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6ICcxMDB2dycsXG4gICAgICAvLyBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgLy8ganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgLy8gYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAvLyBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0IDBzJyxcbiAgICAgIHRyYW5zZm9ybTogbWVudUFjdGl2ZSA/ICd0cmFuc2xhdGUoMTAwJSwgMCknIDogJ25vbmUnXG4gICAgfX0+XG4gICAgICA8U2l0ZVRpdGxlIHRpdGxlPXt0aXRsZX0gLz5cbiAgICAgIDxOYXZpZ2F0aW9uIGRvY3M9e2RvY3N9IGxvY2F0aW9uPXtsb2NhdGlvbn0gb25TdGF0ZUNoYW5nZWQ9e29uU3RhdGVDaGFuZ2VkfSBkZWx0YXM9e2RlbHRhc30gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBEb2N1bWVudGF0aW9uTGF5b3V0TWVkaXVtID0gKHsgY2hpbGRyZW4sIGxvY2F0aW9uLCBkYXRhLCBvblN0YXRlQ2hhbmdlZCwgZGVsdGFzIH0pID0+IHtcbiAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwcmV2TG9jYXRpb24sIHNldFByZXZMb2NhdGlvbl0gPSB1c2VTdGF0ZSgpXG5cbiAgY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gICAgc2V0TWVudUFjdGl2ZSghbWVudUFjdGl2ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBhdGhOYW1lID0gbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKVxuICAgIGNvbnN0IGN1cnJlbnRIYXNoID0gbG9jYXRpb24uaGFzaFxuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGAke2N1cnJlbnRQYXRoTmFtZX0ke2N1cnJlbnRIYXNofWBcbiAgICBpZiAocHJldkxvY2F0aW9uICE9PSBjdXJyZW50TG9jYXRpb24pIHtcbiAgICAgIHNldFByZXZMb2NhdGlvbihjdXJyZW50TG9jYXRpb24pXG4gICAgICBzZXRNZW51QWN0aXZlKGZhbHNlKVxuICAgIH1cbiAgfSwgW2xvY2F0aW9uXSlcblxuICBjb25zdCB7IHNpdGU6IHsgc2l0ZU1ldGFkYXRhOiB7IHRpdGxlIH0gfSwgbmF2aWdhdGlvbjogeyBkb2NzIH0sIGZpbGU6IHsgcHVibGljVVJMOiBtZW51QnV0dG9uQmFja2dyb3VuZEltYWdlIH0gfSA9IGRhdGFcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17e1xuICAgICAgcGFkZGluZzogJzFyZW0nXG4gICAgfX0+XG4gICAgICA8TW9iaWxlTmF2aWdhdGlvbiBtZW51QWN0aXZlPXttZW51QWN0aXZlfSB0aXRsZT17dGl0bGV9IGRvY3M9e2RvY3N9IGxvY2F0aW9uPXtsb2NhdGlvbn0gb25TdGF0ZUNoYW5nZWQ9e29uU3RhdGVDaGFuZ2VkfSBkZWx0YXM9e2RlbHRhc30gLz5cbiAgICAgIDxNZW51QnV0dG9uIG9uQ2xpY2s9e3Nob3dNZW51fSBiYWNrZ3JvdW5kSW1hZ2U9e21lbnVCdXR0b25CYWNrZ3JvdW5kSW1hZ2V9IGNzcz17e1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgekluZGV4OiAyMCxcbiAgICAgICAgYm90dG9tOiAnMzBweCcsXG4gICAgICAgIHJpZ2h0OiAnMzBweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbWVudUFjdGl2ZSA/ICcjRjQ4NkNBJyA6ICd3aGl0ZSdcbiAgICAgICAgLy8gbWFyZ2luQm90dG9tOiAnMTBweCdcbiAgICAgIH19IC8+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgeyBEb2N1bWVudGF0aW9uTGF5b3V0TWVkaXVtIH1cbiJdfQ== */"))
  }, ___EmotionJSX(SiteTitle, {
    title: title
  }), ___EmotionJSX(Navigation, {
    docs: docs,
    location: location,
    onStateChanged: onStateChanged,
    deltas: deltas
  }));
};

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "1cg5l3x-DocumentationLayoutMedium",
  styles: "padding:1rem;;label:DocumentationLayoutMedium;"
} : {
  name: "1cg5l3x-DocumentationLayoutMedium",
  styles: "padding:1rem;;label:DocumentationLayoutMedium;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9kb2N1bWVudGF0aW9uLWxheW91dC9Eb2N1bWVudGF0aW9uTGF5b3V0TWVkaXVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFUyIsImZpbGUiOiIuLi8uLi9zb3VyY2UvZG9jdW1lbnRhdGlvbi1sYXlvdXQvRG9jdW1lbnRhdGlvbkxheW91dE1lZGl1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByaHl0aG0gfSBmcm9tICcuLi90eXBvZ3JhcGh5J1xuXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi4vbmF2aWdhdGlvbidcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi9uYXZpZ2F0aW9uL01lbnVCdXR0b24nXG5pbXBvcnQgeyBTaXRlVGl0bGUgfSBmcm9tICcuL1NpdGVUaXRsZSdcblxuY29uc3QgTW9iaWxlTmF2aWdhdGlvbiA9ICh7IG1lbnVBY3RpdmUsIHRpdGxlLCBkb2NzLCBsb2NhdGlvbiwgb25TdGF0ZUNoYW5nZWQsIGRlbHRhcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3tcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgekluZGV4OiAyMCxcbiAgICAgIGhlaWdodDogYGNhbGMoMTAwdmggLSAke3JoeXRobSgzKX0pYCxcbiAgICAgIG1pbldpZHRoOiAnMzAwcHgnLFxuICAgICAgbWF4V2lkdGg6ICczMDBweCcsXG4gICAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSc6IHtcbiAgICAgICAgbWluV2lkdGg6ICcxMDB2dycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwdncnLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCdcbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI0NywgMjQ3LCAyNDcsIDAuOSknLFxuICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IGB0b3VjaGAsXG4gICAgICAnOjotd2Via2l0LXNjcm9sbGJhcic6IHtcbiAgICAgICAgd2lkdGg6IGA2cHhgLFxuICAgICAgICBoZWlnaHQ6IGA2cHhgXG4gICAgICB9LFxuICAgICAgJzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWInOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjY2NjJ1xuICAgICAgfSxcbiAgICAgIHRvcDogMCxcbiAgICAgIHJpZ2h0OiAnMTAwdncnLFxuICAgICAgLy8gaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIC8vIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIC8vIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgLy8gYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dCAwcycsXG4gICAgICB0cmFuc2Zvcm06IG1lbnVBY3RpdmUgPyAndHJhbnNsYXRlKDEwMCUsIDApJyA6ICdub25lJ1xuICAgIH19PlxuICAgICAgPFNpdGVUaXRsZSB0aXRsZT17dGl0bGV9IC8+XG4gICAgICA8TmF2aWdhdGlvbiBkb2NzPXtkb2NzfSBsb2NhdGlvbj17bG9jYXRpb259IG9uU3RhdGVDaGFuZ2VkPXtvblN0YXRlQ2hhbmdlZH0gZGVsdGFzPXtkZWx0YXN9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRG9jdW1lbnRhdGlvbkxheW91dE1lZGl1bSA9ICh7IGNoaWxkcmVuLCBsb2NhdGlvbiwgZGF0YSwgb25TdGF0ZUNoYW5nZWQsIGRlbHRhcyB9KSA9PiB7XG4gIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcHJldkxvY2F0aW9uLCBzZXRQcmV2TG9jYXRpb25dID0gdXNlU3RhdGUoKVxuXG4gIGNvbnN0IHNob3dNZW51ID0gKCkgPT4ge1xuICAgIHNldE1lbnVBY3RpdmUoIW1lbnVBY3RpdmUpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQYXRoTmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyQvLCAnJylcbiAgICBjb25zdCBjdXJyZW50SGFzaCA9IGxvY2F0aW9uLmhhc2hcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBgJHtjdXJyZW50UGF0aE5hbWV9JHtjdXJyZW50SGFzaH1gXG4gICAgaWYgKHByZXZMb2NhdGlvbiAhPT0gY3VycmVudExvY2F0aW9uKSB7XG4gICAgICBzZXRQcmV2TG9jYXRpb24oY3VycmVudExvY2F0aW9uKVxuICAgICAgc2V0TWVudUFjdGl2ZShmYWxzZSlcbiAgICB9XG4gIH0sIFtsb2NhdGlvbl0pXG5cbiAgY29uc3QgeyBzaXRlOiB7IHNpdGVNZXRhZGF0YTogeyB0aXRsZSB9IH0sIG5hdmlnYXRpb246IHsgZG9jcyB9LCBmaWxlOiB7IHB1YmxpY1VSTDogbWVudUJ1dHRvbkJhY2tncm91bmRJbWFnZSB9IH0gPSBkYXRhXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3tcbiAgICAgIHBhZGRpbmc6ICcxcmVtJ1xuICAgIH19PlxuICAgICAgPE1vYmlsZU5hdmlnYXRpb24gbWVudUFjdGl2ZT17bWVudUFjdGl2ZX0gdGl0bGU9e3RpdGxlfSBkb2NzPXtkb2NzfSBsb2NhdGlvbj17bG9jYXRpb259IG9uU3RhdGVDaGFuZ2VkPXtvblN0YXRlQ2hhbmdlZH0gZGVsdGFzPXtkZWx0YXN9IC8+XG4gICAgICA8TWVudUJ1dHRvbiBvbkNsaWNrPXtzaG93TWVudX0gYmFja2dyb3VuZEltYWdlPXttZW51QnV0dG9uQmFja2dyb3VuZEltYWdlfSBjc3M9e3tcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHpJbmRleDogMjAsXG4gICAgICAgIGJvdHRvbTogJzMwcHgnLFxuICAgICAgICByaWdodDogJzMwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG1lbnVBY3RpdmUgPyAnI0Y0ODZDQScgOiAnd2hpdGUnXG4gICAgICAgIC8vIG1hcmdpbkJvdHRvbTogJzEwcHgnXG4gICAgICB9fSAvPlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHsgRG9jdW1lbnRhdGlvbkxheW91dE1lZGl1bSB9XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var DocumentationLayoutMedium = function DocumentationLayoutMedium(_ref2) {
  var children = _ref2.children,
      location = _ref2.location,
      data = _ref2.data,
      onStateChanged = _ref2.onStateChanged,
      deltas = _ref2.deltas;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuActive = _useState2[0],
      setMenuActive = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      prevLocation = _useState4[0],
      setPrevLocation = _useState4[1];

  var showMenu = function showMenu() {
    setMenuActive(!menuActive);
  };

  useEffect(function () {
    var currentPathName = location.pathname.replace(/\/$/, '');
    var currentHash = location.hash;
    var currentLocation = "".concat(currentPathName).concat(currentHash);

    if (prevLocation !== currentLocation) {
      setPrevLocation(currentLocation);
      setMenuActive(false);
    }
  }, [location]);
  var title = data.site.siteMetadata.title,
      docs = data.navigation.docs,
      menuButtonBackgroundImage = data.file.publicURL;
  return ___EmotionJSX("div", {
    css: _ref3
  }, ___EmotionJSX(MobileNavigation, {
    menuActive: menuActive,
    title: title,
    docs: docs,
    location: location,
    onStateChanged: onStateChanged,
    deltas: deltas
  }), ___EmotionJSX(MenuButton, {
    onClick: showMenu,
    backgroundImage: menuButtonBackgroundImage,
    css:
    /*#__PURE__*/
    _css({
      position: 'fixed',
      zIndex: 20,
      bottom: '30px',
      right: '30px',
      backgroundColor: menuActive ? '#F486CA' : 'white' // marginBottom: '10px'

    }, ";label:DocumentationLayoutMedium;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9kb2N1bWVudGF0aW9uLWxheW91dC9Eb2N1bWVudGF0aW9uTGF5b3V0TWVkaXVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFaUYiLCJmaWxlIjoiLi4vLi4vc291cmNlL2RvY3VtZW50YXRpb24tbGF5b3V0L0RvY3VtZW50YXRpb25MYXlvdXRNZWRpdW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmh5dGhtIH0gZnJvbSAnLi4vdHlwb2dyYXBoeSdcblxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJy4uL25hdmlnYXRpb24nXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9NZW51QnV0dG9uJ1xuaW1wb3J0IHsgU2l0ZVRpdGxlIH0gZnJvbSAnLi9TaXRlVGl0bGUnXG5cbmNvbnN0IE1vYmlsZU5hdmlnYXRpb24gPSAoeyBtZW51QWN0aXZlLCB0aXRsZSwgZG9jcywgbG9jYXRpb24sIG9uU3RhdGVDaGFuZ2VkLCBkZWx0YXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXt7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHpJbmRleDogMjAsXG4gICAgICBoZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHtyaHl0aG0oMyl9KWAsXG4gICAgICBtaW5XaWR0aDogJzMwMHB4JyxcbiAgICAgIG1heFdpZHRoOiAnMzAwcHgnLFxuICAgICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA1NjhweCknOiB7XG4gICAgICAgIG1pbldpZHRoOiAnMTAwdncnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMHZ3JyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnXG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNDcsIDI0NywgMjQ3LCAwLjkpJyxcbiAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBgdG91Y2hgLFxuICAgICAgJzo6LXdlYmtpdC1zY3JvbGxiYXInOiB7XG4gICAgICAgIHdpZHRoOiBgNnB4YCxcbiAgICAgICAgaGVpZ2h0OiBgNnB4YFxuICAgICAgfSxcbiAgICAgICc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2NjYydcbiAgICAgIH0sXG4gICAgICB0b3A6IDAsXG4gICAgICByaWdodDogJzEwMHZ3JyxcbiAgICAgIC8vIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAvLyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAvLyBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIC8vIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQgMHMnLFxuICAgICAgdHJhbnNmb3JtOiBtZW51QWN0aXZlID8gJ3RyYW5zbGF0ZSgxMDAlLCAwKScgOiAnbm9uZSdcbiAgICB9fT5cbiAgICAgIDxTaXRlVGl0bGUgdGl0bGU9e3RpdGxlfSAvPlxuICAgICAgPE5hdmlnYXRpb24gZG9jcz17ZG9jc30gbG9jYXRpb249e2xvY2F0aW9ufSBvblN0YXRlQ2hhbmdlZD17b25TdGF0ZUNoYW5nZWR9IGRlbHRhcz17ZGVsdGFzfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IERvY3VtZW50YXRpb25MYXlvdXRNZWRpdW0gPSAoeyBjaGlsZHJlbiwgbG9jYXRpb24sIGRhdGEsIG9uU3RhdGVDaGFuZ2VkLCBkZWx0YXMgfSkgPT4ge1xuICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3ByZXZMb2NhdGlvbiwgc2V0UHJldkxvY2F0aW9uXSA9IHVzZVN0YXRlKClcblxuICBjb25zdCBzaG93TWVudSA9ICgpID0+IHtcbiAgICBzZXRNZW51QWN0aXZlKCFtZW51QWN0aXZlKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UGF0aE5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgJycpXG4gICAgY29uc3QgY3VycmVudEhhc2ggPSBsb2NhdGlvbi5oYXNoXG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gYCR7Y3VycmVudFBhdGhOYW1lfSR7Y3VycmVudEhhc2h9YFxuICAgIGlmIChwcmV2TG9jYXRpb24gIT09IGN1cnJlbnRMb2NhdGlvbikge1xuICAgICAgc2V0UHJldkxvY2F0aW9uKGN1cnJlbnRMb2NhdGlvbilcbiAgICAgIHNldE1lbnVBY3RpdmUoZmFsc2UpXG4gICAgfVxuICB9LCBbbG9jYXRpb25dKVxuXG4gIGNvbnN0IHsgc2l0ZTogeyBzaXRlTWV0YWRhdGE6IHsgdGl0bGUgfSB9LCBuYXZpZ2F0aW9uOiB7IGRvY3MgfSwgZmlsZTogeyBwdWJsaWNVUkw6IG1lbnVCdXR0b25CYWNrZ3JvdW5kSW1hZ2UgfSB9ID0gZGF0YVxuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXt7XG4gICAgICBwYWRkaW5nOiAnMXJlbSdcbiAgICB9fT5cbiAgICAgIDxNb2JpbGVOYXZpZ2F0aW9uIG1lbnVBY3RpdmU9e21lbnVBY3RpdmV9IHRpdGxlPXt0aXRsZX0gZG9jcz17ZG9jc30gbG9jYXRpb249e2xvY2F0aW9ufSBvblN0YXRlQ2hhbmdlZD17b25TdGF0ZUNoYW5nZWR9IGRlbHRhcz17ZGVsdGFzfSAvPlxuICAgICAgPE1lbnVCdXR0b24gb25DbGljaz17c2hvd01lbnV9IGJhY2tncm91bmRJbWFnZT17bWVudUJ1dHRvbkJhY2tncm91bmRJbWFnZX0gY3NzPXt7XG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB6SW5kZXg6IDIwLFxuICAgICAgICBib3R0b206ICczMHB4JyxcbiAgICAgICAgcmlnaHQ6ICczMHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtZW51QWN0aXZlID8gJyNGNDg2Q0EnIDogJ3doaXRlJ1xuICAgICAgICAvLyBtYXJnaW5Cb3R0b206ICcxMHB4J1xuICAgICAgfX0gLz5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7IERvY3VtZW50YXRpb25MYXlvdXRNZWRpdW0gfVxuIl19 */"))
  }), children);
};

export { DocumentationLayoutMedium };
//# sourceMappingURL=DocumentationLayoutMedium.js.map