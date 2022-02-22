import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { normalizeLocationPath } from './normalizeLocationPath'

const useMobileDocumentNavigator = ({
  onNewPathSelected,
  location
}, deps) => {
  const [prevLocation, setPrevLocation] = useState(undefined)
  const navigate = useNavigate()

  const navigateUnusually = ({ path, pathWithHash }) => {
    setTimeout(() => {
      setPrevLocation(pathWithHash)
      navigate(pathWithHash, { replace: true })
    }, 300)
    setPrevLocation(path)
    navigate(path, { replace: true })
  }

  useEffect(() => {
    const { path, pathWithHash } = normalizeLocationPath(location)
    if (prevLocation === undefined) {
      setPrevLocation(pathWithHash)
    } else if (prevLocation !== pathWithHash) {
      navigateUnusually({ path, pathWithHash })
      onNewPathSelected && onNewPathSelected()
    }
  // eslint-disable-next-line
  }, deps)
}

export { useMobileDocumentNavigator }
