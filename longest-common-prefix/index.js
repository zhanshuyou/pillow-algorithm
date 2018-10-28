const longestCommonPrefix = (strs) =>  {
  if (!strs.length) { return '' }

  let result = ''
  for (let i = 0; i < strs[0].length; i++) {
    let isCommon = true
    for(let j = 1; j < strs.length; j ++) {
      if (strs[0][i] !== strs[j][i]) {
        isCommon = false
        return result
      }
    }
    if (isCommon) {
      result += strs[0][i]
    }
  }
  return result
}

// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["aca","cba"]))
