function findItinerary(tickets: string[][]): string[] {
  let start = 'JFK'
  const ticketMap= new Map()

  tickets.forEach((ticket) => {
    const [from , to] = ticket
    if (ticketMap.has(from)) {
      const target = ticketMap.has(from)
      if (to < target[1]) {
        ticketMap.set(from, ticket)
      }
    } else {
      ticketMap.set(from , ticket)
    }
  })

  const result = [start]
  for (let i = 0; i < tickets.length; i++) {
    const [from, to] = ticketMap.get(start)
    result.push(to)
    start = to
  }
  console.info(result)
  return []
};