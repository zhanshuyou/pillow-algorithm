const search = (nums: number[], target: number) => {
  let start = 0;
  let end = nums.length - 1;
  return binary_search(nums, start, end, target);
};

const binary_search = (
  nums: number[],
  start: number,
  end: number,
  value: number
) => {
  if (start > end) return -1;
  const mid = start + Math.floor((end - start) / 2);
  if (nums[mid] === value) {
    return mid;
  } else if (value < nums[mid]) {
    return binary_search(nums, start, mid - 1, value);
  } else {
    return binary_search(nums, mid + 1, end, value);
  }
};

// let nums = [-1, 0, 3, 5, 9, 12];
// let target = 9;
// console.log(search(nums, target));
