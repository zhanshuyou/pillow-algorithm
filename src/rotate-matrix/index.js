"use strict";
exports.__esModule = true;
function rotateMatrix(matrix) {
    var n = matrix.length;
    for (var start = 0, end = n - 1; start < end; start++, end--) {
        for (var s = start, e = end; s < end; s++, e--) {
            var temp = matrix[start][s];
            matrix[start][s] = matrix[e][start];
            matrix[e][start] = matrix[end][e];
            matrix[end][e] = matrix[s][end];
            matrix[s][end] = temp;
        }
    }
}
exports.rotateMatrix = rotateMatrix;
// const matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ]
// rotateMatrix(matrix)
