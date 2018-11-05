var convert = function(s, numRows) {
  if (numRows === 1) { return s }

  const maxRows = Math.min(numRows, s.length)
  const result = []
  for (let i = 0; i < maxRows; i++) {
    result[i] = ''
  }

  let currentRow = 0
  let isDown = false

  for (let i = 0; i < s.length; i ++) {
    result[currentRow] += s[i]
    if (currentRow == 0 || currentRow == numRows - 1) isDown = !isDown
    currentRow += isDown ? 1 : -1
  }

  let resultStr = ''
  result.forEach((str) => {
    resultStr += str
  })
  return resultStr
}

console.log(convert("PAYPALISHIRING", 3))
console.log(convert('PAYPALISHIRING', 4))
console.log(convert('AB', 1))
console.log(convert("Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers.", 55))