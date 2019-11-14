function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { normalizeLocationPath } from './normalizeLocationPath';

var useUnusualReloader = function useUnusualReloader(location) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  useEffect(function () {
    var _normalizeLocationPat = normalizeLocationPath(location),
        path = _normalizeLocationPat.path,
        pathWithHash = _normalizeLocationPat.pathWithHash;

    setTimeout(function () {
      setReady(true);
      navigate(pathWithHash, {
        replace: true
      });
    }, 300);
    navigate(path, {
      replace: true
    });
  }, []);
  return ready;
};

export { useUnusualReloader };
//# sourceMappingURL=useUnusualReloader.js.map