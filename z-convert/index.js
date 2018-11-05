const convert = (s, numRows) => {
  let x = 0
  let y = 0
  let temp = {}
  let direction = ''
  for (let i = 0; i < s.length; i ++) {
    temp[`${x}${y}`] = s[i]
    if (y === 0) {
      direction = 'down'
    } else if (y === numRows - 1) {
      direction = 'up'
    }
    if (direction === 'down') {
      y += 1
    } else {
      x += 1
      y -= 1
    }
  }

  let result = ''
  for (let n = 0; n <= numRows - 1; n++) {
    for (let m = 0; m <=x; m++) {
      if (temp[`${m}${n}`]) {
        result += temp[`${m}${n}`]
      }
    }
  }
  return result
}

console.log(convert("PAYPALISHIRING", 3))
console.log(convert('PAYPALISHIRING', 4))