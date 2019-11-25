import { withPrefix } from 'gatsby'

const includesPathPrefix = location => {
  const re = new RegExp(`^${withPrefix('/')}`)
  return re.test(location)
}

const removePathPrefix = location => {
  const re = new RegExp(`^${withPrefix('/').replace(/\/$/, '')}`)
  return location.replace(re, '')
}

const normalizeLocationPath = location => {
  let normalizedPath = location.pathname.replace(/\/$/, '')
  if (includesPathPrefix(normalizedPath)) {
    normalizedPath = removePathPrefix(normalizedPath)
  }
  return {
    path: normalizedPath,
    pathWithHash: `${normalizedPath}${location.hash}`
  }
}

export { normalizeLocationPath }
