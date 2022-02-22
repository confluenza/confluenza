import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { normalizeLocationPath } from './normalizeLocationPath'

const useUnusualReloader = location => {
  const [ready, setReady] = useState(false)
  const navigate = useNavigate()

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
