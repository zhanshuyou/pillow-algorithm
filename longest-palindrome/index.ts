function longestPalindrome(s: string): string {
  const len = s.length
  if (len < 2) {
    return s
  }

  let maxLen = 1
  let begin = 0

  // dp[i][j] 表示 s[s...j] 是否是回文子串
  const dp = [] as boolean[][]
  for (let i = 0; i < len; i++) {
    dp[i] = []
    dp[i][i] = true
  }

  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else {
        j - 1 - (i + 1) - 1 < 2
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j -1]
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }

  return s.slice(begin, begin + maxLen)
};
