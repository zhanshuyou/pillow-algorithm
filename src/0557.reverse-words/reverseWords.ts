function reverseWords(s: string): string {
  const array = s.split(' ')
  return array.map(item => {
    const subArray = item.split('')
    let i = 0
    let j = subArray.length - 1
    while (i <= j) {
      [subArray[i], subArray[j]] = [subArray[j], subArray[i]]
      i++
      j--
    }
    return subArray.join('')
  }).join(' ')
};

// function reverseWords(s: string): string {
//   const array = s.split(' ')
//   return array.map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// };