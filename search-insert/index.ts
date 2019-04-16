const searchInsert = (nums: number[], target: number) => {
  const index = nums.findIndex(num => num >= target);
  return index < 0 ? nums.length : index;
};
