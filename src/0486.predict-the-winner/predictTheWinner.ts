function PredictTheWinner(nums: number[]): boolean {
  const length = nums.length
  if (length % 2 === 0) {
    return true
  }

  const dp = [] as number[][]
  for (let i = 0; i < length; i++) {
    dp[i] = []
    for (let j = i; j < length; j++) {
      if (i === j) {
        dp[i][i] = nums[i]
      } else {
        dp[i][j] = 0
      }
    }
  }

  for (let i = length - 2; i >= 0; i--) {
    for (let j = i + 1; j < length; j ++) {
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1])
    }
  }

  return dp[0][length - 1] >= 0
}