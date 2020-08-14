function solve(board: string[][]): void {
    const live = new Map() // 没有被围的 O

    const temp = new Map()
    const tree: Tree = { root: null }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            // 遇到 X 跳过
            if (board[i][j] === 'X') {
                continue
            }

            // 遇到边缘的 O 放入 live 中
            if (isBadge(i, j, board)) {
                live.set(`${i}${j}`, board[i][j])
                continue
            }

            // tree.root = { i, j, value: board[i][j] }
            // 执行遍历操作，


        }
    }
    console.info(board)
};

type Tree = {
    root: TreeNode
}

type TreeNode = {
    i: number
    j: number
    value: string
    left?: TreeNode | null
    top?: TreeNode | null
    right?: TreeNode | null
    bottom?: TreeNode | null
} | null

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
    const nodes = [[row, column]]
    const stack: Array<[number, number]> = [[row, column]]
    
    while(stack.length > 0) {
        const [i, j] = stack.pop()!
        nodes.push([i, j])

        const left = [i, j - 1]
        const top = [i - 1, j]
        const right = [i, j + 1]
        const bottom = [i + 1, j]

        const children = [left, top, right, bottom].filter(([subRow, subColumn]) => {
            return board[subRow][subColumn] && board[subRow][subColumn] === 'O'
        }) as Array<[number, number]>

        stack.push(...children)
    }

}





const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
]

solve(board)
