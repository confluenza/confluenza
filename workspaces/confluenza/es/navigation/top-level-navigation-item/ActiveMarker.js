import _styled from "@emotion/styled-base";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

import React from 'react';
import { jsx as ___EmotionJSX } from "@emotion/core";

var MarkerPositioner = _styled("div", {
  target: "e1mtydiy0",
  label: "MarkerPositioner"
})(process.env.NODE_ENV === "production" ? {
  name: "1mi95tu",
  styles: "position:absolute;left:10px;"
} : {
  name: "1mi95tu",
  styles: "position:absolute;left:10px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL3RvcC1sZXZlbC1uYXZpZ2F0aW9uLWl0ZW0vQWN0aXZlTWFya2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd5QiIsImZpbGUiOiIuLi8uLi8uLi9zb3VyY2UvbmF2aWdhdGlvbi90b3AtbGV2ZWwtbmF2aWdhdGlvbi1pdGVtL0FjdGl2ZU1hcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBNYXJrZXJQb3NpdGlvbmVyID0gc3R5bGVkLmRpdih7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBsZWZ0OiAnMTBweCdcbn0pXG5cbmNvbnN0IENpcmNsZSA9IHN0eWxlZC5kaXYoKHsgcmFkaXVzIH0pID0+ICh7XG4gIGhlaWdodDogcmFkaXVzLFxuICB3aWR0aDogcmFkaXVzLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjQ4NkNBJyxcbiAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xufSkpXG5cbmNvbnN0IEFjdGl2ZU1hcmtlciA9ICh7IGFjdGl2ZSB9KSA9PiAoXG4gIDxNYXJrZXJQb3NpdGlvbmVyPlxuICAgIDxDaXJjbGUgcmFkaXVzPSc1cHgnIC8+XG4gIDwvTWFya2VyUG9zaXRpb25lcj5cbilcblxuZXhwb3J0IHsgQWN0aXZlTWFya2VyIH1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var Circle = _styled("div", {
  target: "e1mtydiy1",
  label: "Circle"
})(function (_ref) {
  var radius = _ref.radius;
  return {
    height: radius,
    width: radius,
    backgroundColor: '#F486CA',
    borderRadius: '50%'
  };
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL3RvcC1sZXZlbC1uYXZpZ2F0aW9uLWl0ZW0vQWN0aXZlTWFya2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFlIiwiZmlsZSI6Ii4uLy4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL3RvcC1sZXZlbC1uYXZpZ2F0aW9uLWl0ZW0vQWN0aXZlTWFya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IE1hcmtlclBvc2l0aW9uZXIgPSBzdHlsZWQuZGl2KHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGxlZnQ6ICcxMHB4J1xufSlcblxuY29uc3QgQ2lyY2xlID0gc3R5bGVkLmRpdigoeyByYWRpdXMgfSkgPT4gKHtcbiAgaGVpZ2h0OiByYWRpdXMsXG4gIHdpZHRoOiByYWRpdXMsXG4gIGJhY2tncm91bmRDb2xvcjogJyNGNDg2Q0EnLFxuICBib3JkZXJSYWRpdXM6ICc1MCUnXG59KSlcblxuY29uc3QgQWN0aXZlTWFya2VyID0gKHsgYWN0aXZlIH0pID0+IChcbiAgPE1hcmtlclBvc2l0aW9uZXI+XG4gICAgPENpcmNsZSByYWRpdXM9JzVweCcgLz5cbiAgPC9NYXJrZXJQb3NpdGlvbmVyPlxuKVxuXG5leHBvcnQgeyBBY3RpdmVNYXJrZXIgfVxuIl19 */");

var ActiveMarker = function ActiveMarker(_ref2) {
  var active = _ref2.active;
  return ___EmotionJSX(MarkerPositioner, null, ___EmotionJSX(Circle, {
    radius: "5px"
  }));
};

export { ActiveMarker };
//# sourceMappingURL=ActiveMarker.js.map