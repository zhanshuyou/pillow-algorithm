function findItinerary(tickets: string[][]): string[] {
  const start = 'JFK'
  const plan = new Plan(tickets, start)
  return plan.getPlan()
};

class Plan {
  private result = ['JFK']
  private ticketMap = new Map()
  private tickets: string[][] = []

  constructor(tickets: string[][], start: string) {
    this.tickets = tickets
    this.buildMap(tickets)
    this.dfs(start, 0)
  }

  private buildMap(tickets: string[][]) {
    tickets.forEach((ticket) => {
      const [from , to] = ticket
      if (this.ticketMap.has(from)) {
        const target = this.ticketMap.get(from)
        this.ticketMap.set(from, target.concat(to).sort((item1: string, item2: string) => item1 > item2 ? 1 : -1))
      } else {
        this.ticketMap.set(from , [to])
      }
    })
  }

  private dfs(city: string, usedTickets: number) {
    if (usedTickets === this.tickets.length) {
      return true
    }

    const nextCities = this.ticketMap.get(city)
    if (!nextCities) {
      return false
    }

    for (let i = 0; i < nextCities.length; i++) {
      const nextCity = nextCities[i]
      this.result.push(nextCity)
      nextCities.splice(i, 1)

      if (this.dfs(nextCity, usedTickets + 1)) {
        return true
      } else {
        nextCities.splice(i, 0, nextCity)
        this.result.pop()
      }
    }

    return false
  }

  public getPlan() {
    return this.result
  }
}