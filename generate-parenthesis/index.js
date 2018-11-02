const generateParenthesis = (n) => {
  const ansArr = []
  insertParentheses(ansArr, '', 0, 0, n)
  return ansArr
}

const insertParentheses = (ansArr, currentStr, leftParenthesesCount, rightParenthesesCount, n) => {
  if (currentStr.length === n * 2) {
    ansArr.push(currentStr)
    return
  }

  if (leftParenthesesCount < n) {
    insertParentheses(ansArr, currentStr +'(', leftParenthesesCount + 1, rightParenthesesCount, n)
  }

  if (rightParenthesesCount < leftParenthesesCount) {
    insertParentheses(ansArr, currentStr + ')', leftParenthesesCount, rightParenthesesCount + 1, n)
  }
}

// console.log(generateParenthesis(3))