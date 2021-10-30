const sort = ({
  selector,
  data,
  descending = false
}) => {
  data.sort((a, b) => {
    const propA = selector(a)
    const propB = selector(b)
    if (propA === undefined || propB === undefined) {
      return 0
    }
    if (descending) {
      if (propA > propB) {
        return -1
      }
      if (propA < propB) {
        return 1
      }
    } else {
      if (propA < propB) {
        return -1
      }
      if (propA > propB) {
        return 1
      }
    }
    return 0
  })
  return data
}

export { sort }
