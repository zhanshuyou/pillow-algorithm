function solve(board: string[][]): void {
    const live = new Map() // 没有被围的 O

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            // 遇到 X 跳过
            if (board[i][j] === 'X') {
                continue
            }

            // 遇到边缘的 O 放入 live 中
            if (isBadge(i, j, board)) {
                live.set(`${i},${j}`, board[i][j])
                continue
            }

            // 执行遍历操作
            const nodes = dfs(i, j, board)
            const isValid = nodes.some(([i, j]) => {
                return live.has(`${i},${j}`) || isBadge(i, j, board)
            })

            if (isValid) {
                nodes.forEach(([i, j]) => {
                    live.set(`${i},${j}`, board[i][j])
                })
            } else {
                nodes.forEach(([i, j]) => {
                    board[i][j] = 'X'
                })
            }

        }
    }
};

function isBadge(i: number, j: number, board: string[][]) {
    if (i === 0 || i === board.length - 1) {
        return true
    }

    if (j === 0 || j === board[i].length - 1) {
        return true
    }

    return false
}

function dfs(row: number, column: number, board: string[][]) {
    const nodes = []
    const stack: Array<[number, number]> = [[row, column]]

    const dirty = new Map()
    dirty.set(`${row}${column}`, true)

    while(stack.length > 0) {
        const [i, j] = stack.pop()!
        nodes.push([i, j])

        const left = [i, j - 1]
        const top = [i - 1, j]
        const right = [i, j + 1]
        const bottom = [i + 1, j]

        const children = [left, top, right, bottom].filter(([i, j]) => {
            return board[i] && board[i][j] && board[i][j] === 'O' && !dirty.has(`${i}${j}`)
        }) as Array<[number, number]>

        children.forEach(([i, j]) => {
            dirty.set(`${i}${j}`, true)
            stack.push([i, j])
        })

    }
    return nodes
}





// const board = [
//     ['X', 'X', 'X', 'X'],
//     ['X', 'O', 'O', 'X'],
//     ['X', 'X', 'O', 'X'],
//     ['X', 'O', 'X', 'X'],
// ]

// const board = [
//     ["O","X","X","O","X"],
//     ["X","O","O","X","O"],
//     ["X","O","X","O","X"],
//     ["O","X","O","O","O"],
//     ["X","X","O","X","O"]
// ]

// const board = [
//     ["O","X","O","O","X","X","X","O","O","O","O","O","X","O","O","O","O","X","O","X"], // 0
//     ["X","O","X","O","O","X","X","O","O","X","O","X","O","X","O","X","X","O","O","O"],
//     ["O","X","O","O","O","X","X","X","X","O","O","O","O","O","X","X","X","X","O","X"],
//     ["X","X","O","O","O","X","X","O","O","O","X","X","X","O","O","X","O","X","X","O"],
//     ["O","X","O","X","X","O","X","O","O","O","X","O","O","X","O","O","O","O","O","X"],
//     ["X","O","O","X","O","X","O","O","O","X","X","O","X","O","O","X","O","O","O","O"], // 5
//     ["X","O","O","O","X","X","O","O","O","O","O","X","O","O","X","O","O","O","O","X"],
//     ["X","O","O","O","X","O","X","X","X","O","X","O","X","X","X","X","O","O","O","X"],
//     ["X","O","O","X","O","O","O","X","O","O","O","O","O","O","O","O","O","X","O","X"],
//     ["O","O","O","X","O","X","X","X","X","X","X","X","X","X","O","O","O","O","X","O"],
//     ["X","O","X","O","X","O","O","X","X","X","O","X","X","O","O","X","X","O","O","O"], //10
//     ["O","X","O","O","X","O","O","O","O","O","O","X","X","X","X","O","O","O","X","O"],
//     ["X","O","O","O","X","X","X","O","X","O","O","O","X","O","X","O","X","O","O","X"],
//     ["O","O","O","O","X","O","X","X","O","X","O","X","O","X","X","X","X","O","O","O"],
//     ["O","X","X","O","O","O","O","X","O","O","X","X","X","O","O","X","X","O","X","O"],
//     ["X","O","X","X","X","X","X","X","O","X","X","O","X","O","O","X","O","O","O","X"],
//     ["X","O","O","O","X","O","X","O","O","X","O","X","O","O","X","O","O","X","X","X"],
//     ["O","O","X","O","O","O","O","X","O","O","X","X","O","X","X","X","O","O","O","O"],
//     ["O","O","X","O","O","O","O","O","O","X","X","O","X","O","X","O","O","O","X","X"],
//     ["X","O","O","O","X","O","X","X","X","O","O","X","O","X","O","X","X","O","O","O"]
// ]

// solve(board)
