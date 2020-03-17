"use strict";
exports.__esModule = true;
function rotate(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}
exports.rotate = rotate;
function reverse(nums, start, end) {
    while (start < end) {
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
exports.reverse = reverse;
var nums = [-1, -100, 3, 99]; // [1,2,3,4,5,6,7]
var k = 2;
rotate(nums, k);
console.info('nums: ', nums);
