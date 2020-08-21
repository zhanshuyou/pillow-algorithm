function myAtoi(str: string): number {
  let trimStr = str.trim()

  let symbol = ''
  if (trimStr[0] === '-' || trimStr[0] === '+') {
    symbol = trimStr[0]
    trimStr = trimStr.slice(1, trimStr.length)
  }

  if (!trimStr) {
    return 0
  }

  const minCharCode = '0'.charCodeAt(0)
  const maxCharCode = '9'.charCodeAt(0)

  if (trimStr.charCodeAt(0) < minCharCode || trimStr.charCodeAt(0) > maxCharCode) {
    return 0
  }

  let numStr = ''
  for (const item of trimStr) {
    if (item.charCodeAt(0) < minCharCode || item.charCodeAt(0) > maxCharCode) {
      break
    }
    numStr += item
  }

  const num = parseInt(`${symbol}${numStr}`, 10)

  if (num > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  }

  if (num < 0 - Math.pow(2, 31)) {
    return 0 - Math.pow(2, 31)
  }

  return num
};