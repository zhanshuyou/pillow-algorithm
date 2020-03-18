export function singleNumber(nums: number[]): number {
  while (nums.length > 0) {
    const current = nums.shift()
    if (nums.indexOf(current) < 0) {
        return current
    } else {
        nums = nums.filter(num => num !== current)
    }
  }
}