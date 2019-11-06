import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

moragaTheme.overrideThemeStyles = function (_ref, options) {
  var rhythm = _ref.rhythm;
  return {
    a: {
      textDecoration: 'none',
      color: '#F486CA'
    },
    'a:hover': {
      color: '#F486CA',
      textDecoration: 'underline'
    },
    'blockquote > p': {
      fontSize: '1rem'
    },
    'h2, h3': {
      marginTop: '1.5rem'
    }
  };
};

moragaTheme.googleFonts = [{
  name: 'Source Sans Pro',
  styles: ['200', '400', '400i', '700']
}, {
  name: 'Roboto Mono',
  styles: ['100', '100i', '300', '300i', '400', '400i', '500', '500i']
}, {
  name: 'Roboto Condensed',
  styles: ['100', '100i', '300', '300i', '400', '400i', '500', '500i']
}];
var typography = new Typography(moragaTheme);
var rhythm = typography.rhythm,
    scale = typography.scale;
export { rhythm, scale, typography as default };
//# sourceMappingURL=typography.js.map