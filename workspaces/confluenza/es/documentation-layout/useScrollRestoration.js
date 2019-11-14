function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useState, useRef } from 'react';

var useScrollResoration = function useScrollResoration() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      enabled = _useState2[0],
      setEnabled = _useState2[1];

  var scrollPos = useRef(null);

  var recordScrollPosition = function recordScrollPosition() {
    scrollPos.current = document.documentElement.scrollTop || document.body.scrollTop;
    setEnabled(true);
  };

  var restoreScrollPosition = function restoreScrollPosition() {
    if (enabled) {
      document.documentElement.scrollTop = document.body.scrollTop = scrollPos.current;
    }
  };

  var disableScrollRestoration = function disableScrollRestoration() {
    setEnabled(false);
  };

  return {
    recordScrollPosition: recordScrollPosition,
    restoreScrollPosition: restoreScrollPosition,
    disableScrollRestoration: disableScrollRestoration
  };
};

export { useScrollResoration };
//# sourceMappingURL=useScrollRestoration.js.map