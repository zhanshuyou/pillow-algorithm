function canVisitAllRooms(rooms: number[][]): boolean {
  const visit = new Visit(rooms)
  return visit.getResult(0)
};

class Visit {
  private visited = new Map()
  private rooms: number[][]

  constructor(rooms: number[][]) {
    this.rooms = rooms
  }

  private dfs(keys: number[]) {
    for (let i = 0; i < keys.length; i++) {
      if (this.visited.has(keys[i])) {
        continue
      }

      this.visited.set(keys[i], true)
      this.dfs(this.rooms[keys[i]])
    }
  }

  public getResult(index: number) {
    this.dfs(this.rooms[index])
    this.visited.set(index, true)
    return this.visited.size === this.rooms.length
  }
}