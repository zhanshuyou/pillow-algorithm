"use strict";
exports.__esModule = true;
function containsDuplicate(nums) {
    var temp = [];
    for (var i = 0; i < nums.length; i++) {
        if (temp.indexOf(nums[i]) < 0) {
            temp.push(nums[i]);
        }
        else {
            return true;
        }
    }
    return false;
}
exports.containsDuplicate = containsDuplicate;
;
