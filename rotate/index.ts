export function rotate(nums: number[], k: number) {
  k = k % nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
}

export function reverse(
  nums: number[],
  start: number,
  end: number
) {
  while (start < end) {
    const temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start ++
    end --
  }
}

const nums = [-1,-100,3,99] // [1,2,3,4,5,6,7]
const k = 2
rotate(nums, k)
console.info('nums: ', nums)
