function repeatedSubstringPattern(s: string): boolean {
  const newStr = s + s
  return newStr.slice(1, newStr.length - 1).indexOf(s) > -1
}
