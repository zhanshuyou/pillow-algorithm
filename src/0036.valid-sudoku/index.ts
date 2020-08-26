export function isValidSudoku(board: string[][]) {
  const extra = []

  for (let i = 0; i < 9; i++) {
    extra.push([])
  }

  const length = board.length
  for (let i = 0; i < length; i++) {
    const row = board[i]

    if (!isValid(row)) {
      return false
    }

    const column = []
    for (let j = 0; j < length; j++) {
      column.push(board[j][i])

      const extraIndex = Math.floor(j / 3) + Math.floor(i / 3) * 3
      extra[extraIndex].push(board[i][j])
    }

    if (!isValid(column)) {
      return false
    }
  }

  return extra.every(item => isValid(item))
}

export function isValid(arr: string[]) {
  return isValidCharacter(arr) && !hasRepeatNum(arr)
}

export function isValidCharacter(arr: string[]) {
  const reg = /[1-9]|\./
  return arr.every(item => reg.test(item))
}

export function hasRepeatNum(arr: string[]) {
  const filterArr = arr.filter(item => item !== '.')
  for (let i = 0; i < filterArr.length; i++) {
    const current = filterArr[i]
    const rest = filterArr.slice(i + 1)
    if (rest.includes(current)) {
      return true
    }
  }
  return false
}
