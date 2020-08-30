function shortestPalindrome(s: string): string {
  if (isPalindrome(s)) {
    return s
  }

  /**
   * 去除最右侧的字符判断是否是回文字符串，并记录该字符
   * 如果是的话则把记录的字符串反向添加到原字符串的头部
   * 否则重复上面的步骤
   */
  const temp = []
  for (let i = s.length - 1; i > 0; i--) {
    temp.push(s[i])
    const resStr = s.slice(0, i)
    if (isPalindrome(resStr)) {
      break
    }
  }
  const prefix = temp.join('')

  return prefix + s
};

function isPalindrome(s: string): boolean {
  if (s.length < 2) {
    return true
  }

  let i = 0
  let j = s.length - 1
  let result = true
  while (i <= j) {
    if (s[i] !== s[j]) {
      result = false
      break
    }
    i++
    j--
  }

  return result
}