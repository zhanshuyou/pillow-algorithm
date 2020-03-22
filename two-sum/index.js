"use strict";
exports.__esModule = true;
function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var first = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            var second = nums[j];
            if (first + second === target) {
                return [i, j];
            }
        }
    }
}
exports.twoSum = twoSum;
