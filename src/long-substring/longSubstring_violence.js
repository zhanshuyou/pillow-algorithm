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
  let tempSet = new Set()
  for (let i = start; i < end; i ++) {
    if (!tempSet.has(str[i])) {
      tempSet.add(str[i])
    } else {
      return false
    }
  }
  return true
}

// console.log('longSubstring: ', longSubstring("cfxhowcgimmupeovulclalqcghiuaphcwfkn"))