/**
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 */

const romanToInt = (s) => {
  const length = s.length
  let result = 0
  for (let i = length - 1; i >= 0; i--) {
    result += getIncrease(s[i], s[i + 1])
  }
  return result
}

const getIncrease  = (current, pre) => {
  const dicMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  if (current === 'I' && (pre === 'V' || pre === 'X')) {
    return -dicMap[current]
  } else if (current === 'X' && (pre === 'L' || pre === 'C')) {
    return -dicMap[current]
  } else if (current === 'C' && (pre === 'D' || pre === 'M')) {
    return -dicMap[current]
  } else {
    return dicMap[current]
  }
}

// console.log('III => ', romanToInt('III'))
// console.log('IV => ', romanToInt('IV'))
// console.log('IX => ', romanToInt('IX'))
// console.log('LVIII => ', romanToInt('LVIII'))
// console.log('MCMXCIV => ', romanToInt('MCMXCIV'))
