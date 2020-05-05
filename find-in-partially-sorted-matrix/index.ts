export function findNum(arr: number[][], target: number) {
  if (!arr || arr.length === 0) {
    return false
  }

  const rows = arr.length
  const columns = arr[0].length

  let row = 0
  let column = columns - 1
  while(row < rows && column >= 0) {
    const current = arr[row][column]
    console.info(`current: `, current)
    if (current === target) {
      return { row, column }
    } else if (current > target) {
      column -= 1
    } else {
      row += 1
    }
  }

  return false
}


// const arr = [
//   [1, 2, 8, 9],
//   [2, 4, 9, 12],
//   [4, 7, 10, 13],
//   [6, 8, 11, 15],
// ]
// const target = 7
// console.info(findNum(arr, target))