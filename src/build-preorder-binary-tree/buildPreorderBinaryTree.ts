function buildPreorderBinaryTree(nums: Array<number | null>, index: number) {
  if (index < nums.length) {
    const root = new TreeNode(nums[index])
    root.left = buildPreorderBinaryTree(nums, 2 * index + 1)
    root.right = buildPreorderBinaryTree(nums, 2 * index + 2)
    return root
  }
  return null
}

class TreeNode {
  value: number | null
  left: TreeNode | null
  right: TreeNode | null

  constructor(value: number | null) {
    this.value = value
    this.left = null
    this.right = null
  }
}

console.info(buildPreorderBinaryTree([3,5,1,6,2,0,8,null,null,7,4], 0))