export function stringify(object: any) {
  if (object === null || object === undefined || typeof object === 'number') {
    return `${object}`
  }

  if (Array.isArray(object)) {
    return stringifyArray(object)
  }

  if (typeof object === 'object') {
    return stringifyObject(object)
  }

  return `"${object}"`
}

export function stringifyArray(array: any[]) {
  const itemsToStr = array.map(item => stringify(item)).join(',')
  return `[${itemsToStr}]`
}

export function stringifyObject(object: object) {
  const keys = Object.keys(object)
  const str = keys.map(key => {
    return `${stringify(key)}:${stringify(object[key])}`
  }).join(',')
  return `{${str}}`
}