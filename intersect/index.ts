export function intersect(
  nums1: number[],
  nums2: number[]
): number[] {
  const sort1 = nums1.sort((a, b) => a - b)
  const sort2 = nums2.sort((a, b) => a - b)

  const result = []
  let i = 0
  let j = 0

  while (i < sort1.length && j < sort2.length) {
    if (sort1[i] === sort2[j]) {
      result.push(sort1[i])
      i += 1
      j += 1
    } else if (sort1[i] > sort2[j]) {
      j += 1
    } else {
      i += 1
    }
  }
  return result
};
