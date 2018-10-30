const removeElement = (nums, val) => {
  let i = 0
  for(let j = 0; j < nums.length; j ++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i += 1
    }
  }
  return i
}

// console.log('result1: ', removeElement([3,2,2,3], 3))
// console.log('result2: ', removeElement([0,1,2,2,3,0,4,2], 2))
