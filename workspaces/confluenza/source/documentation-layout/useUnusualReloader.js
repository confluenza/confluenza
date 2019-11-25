import { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import { normalizeLocationPath } from './normalizeLocationPath'

const useUnusualReloader = location => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const { pathWithHash } = normalizeLocationPath(location)

    setTimeout(() => {
      setReady(true)
      navigate(pathWithHash, { replace: true })
    }, 300)
    // eslint-disable-next-line
  }, [])

  return ready
}

export { useUnusualReloader }
