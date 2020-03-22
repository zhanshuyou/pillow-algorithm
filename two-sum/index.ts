export function twoSum(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const second = nums[j]
      if (first + second === target) {
        return [i, j]
      }
    }
  }
}
