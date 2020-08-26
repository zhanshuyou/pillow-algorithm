function myAtoi(str: string): number {
  const automaton = new Automaton()

  for (const item of str) {
    automaton.get(item)
  }

  return automaton.sign * automaton.ans
}

const enum AutomatonState {
  start = 'start',
  signed= 'signed',
  int_number = 'int_number',
  end = 'end',
}

class Automaton {
  public sign = 1
  public ans = 0
  private state = AutomatonState.start

  private stateMap = new Map<AutomatonState, AutomatonState[]>([
    [AutomatonState.start, [AutomatonState.start, AutomatonState.signed, AutomatonState.int_number, AutomatonState.end]],
    [AutomatonState.signed, [AutomatonState.end, AutomatonState.end, AutomatonState.int_number, AutomatonState.end]],
    [AutomatonState.int_number, [AutomatonState.end, AutomatonState.end, AutomatonState.int_number, AutomatonState.end]],
    [AutomatonState.end, [AutomatonState.end, AutomatonState.end, AutomatonState.end, AutomatonState.end]]
  ])

  private isNumber(c: string) {
    const minCharCode = '0'.charCodeAt(0)
    const maxCharCode = '9'.charCodeAt(0)

    if (c.charCodeAt(0) < minCharCode || c.charCodeAt(0) > maxCharCode) {
      return false
    }

    return true
  }

  private getCol(c: string) {
    if (c === ' ') return 0
    if (c === '+' || c === '-') return 1
    if (this.isNumber(c)) return 2
    return 3
  }

  public get(c: string) {
    const row = this.stateMap.get(this.state)
    if (row) {
      this.state = row[this.getCol(c)]
    }
    if (this.state === AutomatonState.int_number) {
      this.ans = this.ans * 10 + c.charCodeAt(0) - '0'.charCodeAt(0)
      this.ans = this.sign === 1
        ? Math.min(this.ans, Math.pow(2, 31) - 1)
        : Math.min(this.ans, Math.pow(2, 31))
    } else if (this.state === AutomatonState.signed) {
      this.sign = c === '+' ? 1 : -1
    }
  }
}

// function myAtoi(str: string): number {
//   let trimStr = str.trim()

//   let symbol = ''
//   if (trimStr[0] === '-' || trimStr[0] === '+') {
//     symbol = trimStr[0]
//     trimStr = trimStr.slice(1, trimStr.length)
//   }

//   if (!trimStr) {
//     return 0
//   }

//   const minCharCode = '0'.charCodeAt(0)
//   const maxCharCode = '9'.charCodeAt(0)

//   if (trimStr.charCodeAt(0) < minCharCode || trimStr.charCodeAt(0) > maxCharCode) {
//     return 0
//   }

//   let numStr = ''
//   for (const item of trimStr) {
//     if (item.charCodeAt(0) < minCharCode || item.charCodeAt(0) > maxCharCode) {
//       break
//     }
//     numStr += item
//   }

//   const num = parseInt(`${symbol}${numStr}`, 10)

//   if (num > Math.pow(2, 31) - 1) {
//     return Math.pow(2, 31) - 1
//   }

//   if (num < 0 - Math.pow(2, 31)) {
//     return 0 - Math.pow(2, 31)
//   }

//   return num
// };