/** 暴力法 */
const longSubstring = (str) => {
  const length = str.length
  let result = 0
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      if (isUniq(str, i, j)) {
        result = Math.max(result, j - i)
      }
    }
  }
  return result
}

const isUniq = (str, start, end) => {
  let tempStr = ''
  for (let i = start; i < end; i ++) {
    if (!tempStr.includes(str[i])) {
      tempStr += str[i]
    } else {
      return false
    }
  }
  return true
}

// console.log('longSubstring: ', longSubstring("cfxhowcgimmupeovulclalqcghiuaphcwfkn"))