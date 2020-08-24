const isValid = (s) => {
  if (s.length % 2 === 1) { return false }

  let tempArr = []
  for (let i = 0; i < s.length; i++) {
    if (isMatch(s[i], tempArr[tempArr.length - 1])) {
      tempArr.pop()
    } else {
      tempArr.push(s[i])
    }
  }
  return tempArr.length === 0
}

const isMatch = (current, pre = '') => {
  const conditions = {
    '(': 1,
    ')': -1,
    '{': 2,
    '}': -2,
    '[': 3,
    ']': -3,
    '': 0,
  }
  return conditions[current] + conditions[pre] === 0
}

// console.log(isValid("()"))
// console.log(isValid("()[]{}"))
// console.log(isValid("(]"))
// console.log(isValid("([)]"))
// console.log(isValid("{[]}"))
