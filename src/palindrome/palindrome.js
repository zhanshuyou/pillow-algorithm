function isPalidrome(string) {
  let start = 0
  let end = string.length -1
  let result = true

  for (; start <= end; start ++, end --) {
    if (string[start] !== string[end]) {
      result = false
      break
    }
  }

  return result
}

// isPalidrome('121')
console.log(isPalidrome('上海自来水来自海上'))