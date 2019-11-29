import { withPrefix } from './PathPrefixContext'

const includesPathPrefix = (location, pathPrefix) => {
  const re = new RegExp(`^${withPrefix('/', pathPrefix)}`)
  return re.test(location)
}

const removePathPrefix = (location, pathPrefix) => {
  const re = new RegExp(`^${withPrefix('/', pathPrefix)}`)
  return location.replace(re, '')
}

const normalizeLocationPath = (location, pathPrefix) => {
  let normalizedPath = location.pathname.replace(/\/$/, '')
  if (includesPathPrefix(normalizedPath, pathPrefix)) {
    normalizedPath = removePathPrefix(normalizedPath, pathPrefix)
  }
  return {
    path: normalizedPath,
    pathWithHash: `${normalizedPath}${location.hash}`
  }
}

export { normalizeLocationPath }
