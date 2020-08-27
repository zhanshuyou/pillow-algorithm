function judgeCircle(moves: string): boolean {
  const stepMap = new Map([
    ['R', 1],
    ['L', -1],
    ['U', 2],
    ['D', -2]
  ])

  let result = 0
  for(const move of moves) {
    result += stepMap.get(move) || 0
  }
  return result === 0
};