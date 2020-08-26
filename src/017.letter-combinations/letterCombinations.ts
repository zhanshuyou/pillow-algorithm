function letterCombinations(digits: string): string[] {
  const combinations = new Combinations(digits)
  combinations.backtrack(0)
  return combinations.getCombinations()
};

class Combinations {
  private combinations: string[] = []
  private combination: string[] = []
  private phoneMap = new Map([
      ['2', ['a', 'b', 'c']],
      ['3', ['d', 'e', 'f']],
      ['4', ['g', 'h', 'i']],
      ['5', ['j', 'k', 'l']],
      ['6', ['m', 'n', 'o']],
      ['7', ['p', 'q', 'r', 's']],
      ['8', ['t', 'u', 'v']],
      ['9', ['w', 'x', 'y', 'z']],
  ])
  private digits: string

  constructor(digits: string) {
      this.digits = digits
  }

  public backtrack(index: number) {
      if (index === this.digits.length) {
          this.combinations.push(this.combination.join(''))
      } else {
          const digit = this.digits[index]
          for (const item of (this.phoneMap.get(digit) || [])) {
              this.combination.push(item)
              this.backtrack(index + 1)
              this.combination.pop()
          }
      }
  }

  public getCombinations() {
      return this.combinations
  }
}