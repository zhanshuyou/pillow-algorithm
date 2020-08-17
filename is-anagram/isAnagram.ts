function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const dict = new Map()

  for (let i = 97; i < 123; i++) {
    const letter = String.fromCharCode(i)
    dict.set(letter, 0)
  }

  for (const item of s) {
    const value = dict.get(item)
    dict.set(item, value + 1)
  }

  for (const item of t) {
    const value = dict.get(item)
    if (value > 0) {
      dict.set(item, value - 1)
    }
  }


  let result = 0
  dict.forEach((value) => {
    result += value
  })

  return result === 0
};