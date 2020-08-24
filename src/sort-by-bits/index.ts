function sortByBits(arr: number[]): number[] {
  const binaryMap = new Map()

  const binaryArr = arr.map(item => {
      const binary = toBinary(item)
      binaryMap.set(binary, item)
      return binary
  })

  binaryArr.sort(compare)

  return binaryArr.map(item => binaryMap.get(item))
};

function toBinary(num: number) {
  return num.toString(2)
}

function compare(binary1: string, binary2: string) {
  const differ = count(binary1, '1') - count(binary2, '1')
  if (differ !== 0) {
      return differ
  }
  return parseInt(binary1, 2) - parseInt(binary2, 2)
}

function count(str: string, target: string) {
  let count = 0
  for (const i of str) {
      if (i === target) {
          count++
      }
  }
  return count
}