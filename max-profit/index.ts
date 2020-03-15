export function maxProfit(prices: number[]) {
  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1]
    }
  }
  return maxProfit
}

// 暴力法
export function calculate(prices: number[], index: number) {
  if (index >= prices.length) return
  let max = 0
  for (let start = index; start < prices.length; start ++) {
    let maxProfit = 0
    for (let i = start + 1; i < prices.length; i ++) {
      if (prices[i] > prices[start]) {
        const profit = prices[i] - prices[start] + calculate(prices, i + 1)
        if (profit > maxProfit) {
          maxProfit = profit
        }
      }
    }
    if (maxProfit > max) {
      max = maxProfit
    }
  }
  return max
}

console.info(maxProfit([7,6,4,3,1]))