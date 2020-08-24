export function rotateMatrix(matrix: number[][]) {
  const n = matrix.length
  for (let start = 0, end = n - 1; start < end; start++, end--) {
    for (let s = start, e = end; s < end; s++, e--) {
      const temp = matrix[start][s]
      matrix[start][s] = matrix[e][start]
      matrix[e][start] = matrix[end][e]
      matrix[end][e] = matrix[s][end]
      matrix[s][end] = temp
    }
  }
}

// const matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ]

// rotateMatrix(matrix)
