function findSubsequences(nums: number[]): number[][] {
  const origin = nums.map((item) => [item])
  let result: number[][] = []
  const record = new Map()

  for (let i = 1; i < nums.length; i++) {
    origin.slice(0, i).concat(result).forEach((item) => {
      const newItem = item.concat(nums[i])
      if (item[item.length - 1] <= nums[i] && !record.has(newItem.join(','))) {
        record.set(newItem.join(','), item)
        result.push(newItem)
      }
    })
  }

  return result
};