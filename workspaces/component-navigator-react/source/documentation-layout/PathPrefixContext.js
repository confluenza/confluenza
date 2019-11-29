import React from 'react'

const PathPrefixContext = React.createContext('/')

const withPrefix = (path, pathPrefix) => {
  return `${pathPrefix}${path}`.replace(/\/$/, '')
}

export { PathPrefixContext, withPrefix }
