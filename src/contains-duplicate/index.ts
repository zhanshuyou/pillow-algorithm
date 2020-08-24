export function containsDuplicate(nums: number[]) {
  const temp = []
  for (let i = 0; i < nums.length; i++){
    if (temp.indexOf(nums[i]) < 0) {
      temp.push(nums[i])
    } else {
      return true
    }
  }
  return false
};
