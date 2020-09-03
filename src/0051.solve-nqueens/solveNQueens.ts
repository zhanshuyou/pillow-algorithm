function solveNQueens(n: number) {
  const nQueens = new Queens(n)
  return nQueens.getBoards()
}

type Board = string[][]

class Queens {
  private board: Board
  private result: string[][]

  constructor(n: number) {
      this.board = this.initBoard(n)
      this.result = []
      this.traceback(this.board, 0)
  }

  public getBoards() {
      return this.result
  }

  private traceback(board: Board, row: number) {
      const length = board.length

      if (row === length) {
          this.result.push(this.record(this.board))
          return
      }

      for (let col = 0; col < length; col++) {
          if (this.isValid(row, col)) {
              this.board[row][col] = 'Q'
              this.traceback(this.board, row + 1)
              this.board[row][col] = '.'
          }
      }
  }

  private initBoard(n: number) {
      const board: Board = []
      for (let i = 0; i < n; i++) {
          board[i] = []
          for (let j = 0; j < n; j++) {
              board[i][j] = '.'
          }
      }
      return board
  }

  private isValid(row: number, col: number) {
      const length = this.board.length

      // 检测上方行
      for (let i = 0; i < row; i++) {
          if (this.board[i][col] === 'Q') {
              return false
          }
      }

      // 检测左上角
      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
          if (this.board[i][j] === 'Q') {
              return false
          }
      }

      // 检测右上键
      for (let i = row - 1, j = col + 1; i >= 0 && j < length; i--, j++) {
          if (this.board[i][j] === 'Q') {
              return false
          }
      }

      return true
  }

  private record(board: Board): string[] {
      const newBoard: string[] = []
      for (let i = 0; i < board.length; i++) {
          newBoard[i] = ''
          for (let j = 0; j < board.length; j++) {
              newBoard[i] += board[i][j]
          }
      }
      return newBoard
  }
}
