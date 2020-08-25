class Lazyman {
  private tasks: any[]

  constructor(name: string) {
    console.info(`I am ${name}`)
    this.tasks = []
    Promise.resolve().then(() => {
      this.next()
    })
  }

  public eat() {
    const fn = () => {
      console.info(`eat`)
      this.next()
    }
    this.tasks.push(fn)
    return this
  }

  public sleep(time: number) {
    const fn = () => {
      console.info(`sleep`)
      this.delay(time * 1000).then(() => {
        console.info(`after ${time}s`)
        this.next()
      })
    }
    this.tasks.push(fn)
    return this
  }

  private delay(ms: number) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), ms)
    })
  }

  private next() {
    const fn = this.tasks.shift()
    if (!fn) {
      return
    }
    fn()
  }
}