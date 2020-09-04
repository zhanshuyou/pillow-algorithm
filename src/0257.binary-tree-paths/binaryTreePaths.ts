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

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) {
    return []
  }
  const treePath = new TreePath(root)
  return treePath.paths
}

class TreePath {
  public paths: string[]
  private tree: TreeNode
  private temp: number[]

  constructor(tree: TreeNode) {
    this.tree = tree
    this.paths = []
    this.temp = []

    this.temp.push(this.tree.val)
    this.traverse(this.tree)
  }

  traverse(treeNode: TreeNode) {
    if (!treeNode.left && !treeNode.right) {
      this.paths.push(this.temp.join('->'))
    }

    if (treeNode.left) {
      this.temp.push(treeNode.left.val)
      this.traverse(treeNode.left)
      this.temp.pop()
    }

    if (treeNode.right) {
      this.temp.push(treeNode.right.val)
      this.traverse(treeNode.right)
      this.temp.pop()
    }
  }
}
