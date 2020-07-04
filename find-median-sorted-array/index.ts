function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums1Length = nums1.length
  const nums2Length = nums2.length
  const totalLength = nums1Length + nums2Length

  if (totalLength % 2 === 1) {
    const midIndex = (totalLength + 1) / 2
    return getKthElement(nums1, nums2, midIndex)
  } else {
    const midIndex1 = totalLength / 2
    const midIndex2 = totalLength / 2 + 1
    return (getKthElement(nums1, nums2, midIndex1) + getKthElement(nums1, nums2, midIndex2)) / 2
  }
}

function getKthElement(nums1: number[], nums2: number[], k: number) {
  const length1 = nums1.length
  const length2 = nums2.length

  let index1 = 0
  let index2 = 0

  while (true) {
    if (index1 === length1) {
      return nums2[index2 + k - 1]
    }
    if (index2 === length2) {
      return nums1[index1 + k - 1]
    }
    if (k === 1) {
      return Math.min(nums1[index1], nums2[index2])
    }

    const half = Math.floor(k / 2)
    const newIndex1 = Math.min(index1 + half, length1) - 1
    const newIndex2 = Math.min(index2 + half, length2) - 1
    const pivot1 = nums1[newIndex1]
    const pivot2 = nums2[newIndex2]
    if (pivot1 <= pivot2) {
        k -= (newIndex1 - index1 + 1)
        index1 = newIndex1 + 1
    } else {
        k -= (newIndex2 - index2 + 1)
        index2 = newIndex2 + 1
    }
  }
}

// const nums1 = [1, 3]
// const nums2 = [2, 4]
// console.info(findMedianSortedArrays(nums1, nums2))