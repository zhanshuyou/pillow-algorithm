"use strict";
exports.__esModule = true;
function intersect(nums1, nums2) {
    var sort1 = nums1.sort(function (a, b) { return a - b; });
    var sort2 = nums2.sort(function (a, b) { return a - b; });
    var result = [];
    var i = 0;
    var j = 0;
    while (i < sort1.length && j < sort2.length) {
        if (sort1[i] === sort2[j]) {
            result.push(sort1[i]);
            i += 1;
            j += 1;
        }
        else if (sort1[i] > sort2[j]) {
            j += 1;
        }
        else {
            i += 1;
        }
    }
    return result;
}
exports.intersect = intersect;
;
