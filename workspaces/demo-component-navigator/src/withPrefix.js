const withPrefix = () => {
  // Router will not function properly if undefined or '/' is returned for an empty basepath
  // In such a case either use '' or remove basepath property from the <Router>
  return process.env.REACT_APP_PATH_PREFIX || ''
}

export { withPrefix }
