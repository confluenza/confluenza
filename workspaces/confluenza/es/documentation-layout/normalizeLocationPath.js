var normalizeLocationPath = function normalizeLocationPath(location) {
  var normalizedPath = location.pathname.replace(/\/$/, '');
  return {
    path: normalizedPath,
    pathWithHash: "".concat(normalizedPath).concat(location.hash)
  };
};

export { normalizeLocationPath };
//# sourceMappingURL=normalizeLocationPath.js.map