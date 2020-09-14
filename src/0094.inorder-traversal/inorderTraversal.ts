class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }

  const treeTraveral = new TreeTraversal(root)
  return treeTraveral.getResult()
}

class TreeTraversal {
  private root: TreeNode
  private stack: TreeNode[]
  private result: number[]

  constructor(root: TreeNode) {
    this.root = root
    this.stack = []
    this.result = []

    this.inorder()
  }

  public getResult() {
    return this.result
  }

  private inorder() {
    this.stack.push(this.root)
    while (this.stack.length > 0) {
      const node = this.stack.pop()
      if (node?.left) {
        this.stack.push(node)
        this.stack.push(node.left)
        node.left = null
      } else {
        if (!node?.left) {
          this.result.push(node?.val as number)
        }

        if (node?.right) {
          this.stack.push(node.right)
        }
      }
    }
  }
}

const tree = new TreeNode(1)
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(3)

console.info(inorderTraversal(tree))
