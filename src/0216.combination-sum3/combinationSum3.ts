function combinationSum3(k: number, n: number): number[][] {
  const combination = new Combination(k, n)
  const max = n / k
  for (let i = 1; i < max; i++) {
    combination.temp = [i]
    combination.traceback(i)
  }
  return combination.getResult()
}

class Combination {
  private k: number
  private n: number
  private result: number[][]
  private end: number
  public temp: number[]

  constructor(k: number, n: number) {
    this.k = k
    this.n = n
    this.result = []
    this.temp = []
    this.end = n > 9 ? 9 : n
  }

  traceback(i: number) {
    if (this.temp.length === this.k) {
      let sum = 0
      this.temp.forEach((item) => {
        sum += item
      })

      if (sum === this.n) {
        this.result.push(this.temp.slice())
      }

      return
    }

    for (let j = i + 1; j <= this.end; j++) {
      this.temp.push(j)
      this.traceback(j)
      this.temp.pop()
    }
  }

  getResult() {
    return this.result
  }
}
