/** 滑动窗口方法 Todo: 还可以优化 */
const longSubstring = (str) => {
  const length = str.length
  let result = 0
  let start = 0
  let end = 0
  let tempArr = []
  while (start < length && end < length) {
    if (!tempArr.includes(str[end])) {
      tempArr.push(str[end])
      end += 1
      result = Math.max(result, end - start)
    } else {
      const index = tempArr.indexOf(str[end])
      tempArr = tempArr.splice(index + 1)
      tempArr.push(str[end])
      start += index + 1
      end += 1
    }
  }
  return result
}

// console.log('longSubstring: ', longSubstring("cfxhowcgimmupeovulclalqcghiuaphcwfkn")) // 10
