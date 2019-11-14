function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

import React from 'react'; // import styled from '@emotion/styled'

import { Link } from 'gatsby';
import { jsx as ___EmotionJSX } from "@emotion/core";

var _ref = process.env.NODE_ENV === "production" ? {
  name: "r1n3w2-NavigationLink",
  styles: "display:inline-block;position:relative;left:1rem;width:calc(100% - 1.5rem);color:black;font-family:Roboto Mono, monospace;font-weight:300;font-size:0.8rem;line-height:1.5rem;text-decoration:none;&:hover{color:black;text-decoration:none;&:before{visibility:visible;transform:scaleY(1);}}&:before{background-color:#F486CA;content:' ';position:absolute;width:1px;height:100%;top:0;left:-5px;visibility:hidden;transform:scaleY(0.3);transition:all 0.3s ease-in-out 0s;}&.active{color:black;font-family:Roboto Mono, monospace;font-weight:500;font-size:0.8rem;transition:color 0.2s ease-in-out 0s;};label:NavigationLink;"
} : {
  name: "r1n3w2-NavigationLink",
  styles: "display:inline-block;position:relative;left:1rem;width:calc(100% - 1.5rem);color:black;font-family:Roboto Mono, monospace;font-weight:300;font-size:0.8rem;line-height:1.5rem;text-decoration:none;&:hover{color:black;text-decoration:none;&:before{visibility:visible;transform:scaleY(1);}}&:before{background-color:#F486CA;content:' ';position:absolute;width:1px;height:100%;top:0;left:-5px;visibility:hidden;transform:scaleY(0.3);transition:all 0.3s ease-in-out 0s;}&.active{color:black;font-family:Roboto Mono, monospace;font-weight:500;font-size:0.8rem;transition:color 0.2s ease-in-out 0s;};label:NavigationLink;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9uYXZpZ2F0aW9uL05hdmlnYXRpb25MaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUs2QiIsImZpbGUiOiIuLi8uLi9zb3VyY2UvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2dhdHNieSdcblxuY29uc3QgTmF2aWdhdGlvbkxpbmsgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiAoXG4gIDxMaW5rIHsuLi5wcm9wc30gcmVmPXtyZWZ9IGNzcz17e1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGxlZnQ6ICcxcmVtJyxcbiAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDEuNXJlbSknLFxuICAgIGNvbG9yOiAnYmxhY2snLFxuICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8gTW9ubywgbW9ub3NwYWNlJyxcbiAgICBmb250V2VpZ2h0OiAnMzAwJyxcbiAgICBmb250U2l6ZTogJzAuOHJlbScsXG4gICAgbGluZUhlaWdodDogJzEuNXJlbScsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknXG4gICAgICB9XG4gICAgfSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjQ4NkNBJyxcbiAgICAgIGNvbnRlbnQ6IFwiJyAnXCIsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogJy01cHgnLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMC4zKScsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnXG4gICAgfSxcbiAgICAnJi5hY3RpdmUnOiB7XG4gICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8gTW9ubywgbW9ub3NwYWNlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgZm9udFNpemU6ICcwLjhyZW0nLFxuICAgICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuMnMgZWFzZS1pbi1vdXQgMHMnXG4gICAgfVxuICB9fT5cbiAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgPC9MaW5rPlxuKSlcblxuLy8gY29uc3QgTmF2aWdhdGlvbkxpbmsgPSBzdHlsZWQoTGluaykocHJvcHMgPT4gKHtcbi8vICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4vLyAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuLy8gICBsZWZ0OiAnMXJlbScsXG4vLyAgIHdpZHRoOiAnY2FsYygxMDAlIC0gMS41cmVtKScsXG4vLyAgIGNvbG9yOiAnYmxhY2snLFxuLy8gICBmb250RmFtaWx5OiAnUm9ib3RvIE1vbm8sIG1vbm9zcGFjZScsXG4vLyAgIGZvbnRXZWlnaHQ6ICczMDAnLFxuLy8gICBmb250U2l6ZTogJzAuOHJlbScsXG4vLyAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4vLyAgICcmOmhvdmVyJzoge1xuLy8gICAgIGNvbG9yOiAnYmxhY2snLFxuLy8gICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4vLyAgICAgJyY6YmVmb3JlJzoge1xuLy8gICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuLy8gICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJ1xuLy8gICAgIH1cbi8vICAgfSxcbi8vICAgJyY6YmVmb3JlJzoge1xuLy8gICAgIGJhY2tncm91bmRDb2xvcjogJyNGNDg2Q0EnLFxuLy8gICAgIGNvbnRlbnQ6IFwiJyAnXCIsXG4vLyAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4vLyAgICAgd2lkdGg6ICcxcHgnLFxuLy8gICAgIGhlaWdodDogJzEwMCUnLFxuLy8gICAgIHRvcDogMCxcbi8vICAgICBsZWZ0OiAnLTVweCcsXG4vLyAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4vLyAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDAuMyknLFxuLy8gICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCAwcydcbi8vICAgfSxcbi8vICAgJyYuYWN0aXZlJzoge1xuLy8gICAgIGNvbG9yOiAnYmxhY2snLFxuLy8gICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8gTW9ubywgbW9ub3NwYWNlJyxcbi8vICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbi8vICAgICBmb250U2l6ZTogJzAuOHJlbScsXG4vLyAgICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuMnMgZWFzZS1pbi1vdXQgMHMnXG4vLyAgIH1cbi8vIH0pKVxuXG5leHBvcnQgeyBOYXZpZ2F0aW9uTGluayB9XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var NavigationLink = React.forwardRef(function (props, ref) {
  return ___EmotionJSX(Link, _extends({}, props, {
    ref: ref,
    css: _ref
  }), props.children);
}); // const NavigationLink = styled(Link)(props => ({
//   display: 'inline-block',
//   position: 'relative',
//   left: '1rem',
//   width: 'calc(100% - 1.5rem)',
//   color: 'black',
//   fontFamily: 'Roboto Mono, monospace',
//   fontWeight: '300',
//   fontSize: '0.8rem',
//   textDecoration: 'none',
//   '&:hover': {
//     color: 'black',
//     textDecoration: 'none',
//     '&:before': {
//       visibility: 'visible',
//       transform: 'scaleY(1)'
//     }
//   },
//   '&:before': {
//     backgroundColor: '#F486CA',
//     content: "' '",
//     position: 'absolute',
//     width: '1px',
//     height: '100%',
//     top: 0,
//     left: '-5px',
//     visibility: 'hidden',
//     transform: 'scaleY(0.3)',
//     transition: 'all 0.3s ease-in-out 0s'
//   },
//   '&.active': {
//     color: 'black',
//     fontFamily: 'Roboto Mono, monospace',
//     fontWeight: '500',
//     fontSize: '0.8rem',
//     transition: 'color 0.2s ease-in-out 0s'
//   }
// }))

export { NavigationLink };
//# sourceMappingURL=NavigationLink.js.map