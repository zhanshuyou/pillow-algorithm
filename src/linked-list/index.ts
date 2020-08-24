
export class LinkedList<T> {
  private count: number
  private head: Node<T>

  constructor() {
    this.count = 0
    this.head = null
  }

  public push(element: T) {
    const node = new Node<T>(element)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (!current.next) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  public insert(element: T, position: number) {
    if (!this.isValidateIndex(position)) {
      return false
    }

    const node = new Node<T>(element)
    if (position === 0) {
      const temp = this.head
      this.head = node
      node.next = temp
    } else {
      const previous = this.getElementAt(position - 1)
      const current = previous.next
      previous.next = node
      node.next = current
    }

    this.count++
    return true
  }

  public getElementAt(index: number): Node<T> {
    if (!this.isValidateIndex(index)) {
      return undefined
    }

    let node = this.head
    for (let i = 0; i < index && node.next !== null; i++) {
      node = node.next
    }
    return node
  }

  public remove(element: T) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  public removeAt(position: number): T {
    if (!this.isValidateIndex(position)) {
      return undefined
    }

    let current = this.head
    if (position === 0) {
      this.head = this.head.next
    } else {
      const previous = this.getElementAt(position - 1)
      const current = previous.next
      previous.next = current.next
    }
    this.count--
    return current.element
  }

  public indexOf(element: T) {
    let current = this.head
    for (let i = 0; i < this.count && !current.next; i++) {
      if (current.element === element) {
        return i
      }
      current = current.next
    }
    return -1
  }

  public isEmpty() {
    return this.size() === 0
  }

  public size() {
    return this.count
  }

  public toString() {
    if (this.head === null) {
      return ''
    }

    let objectString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && !current.next; i++) {
      objectString += `,${current.element}`
      current = current.next
    }
    return objectString
  }

  public getHead() {
    return this.head
  }

  private isValidateIndex(index: number) {
    if (index < 0 || index >= this.count) {
      return false
    }
    return true
  }
}

export class Node<T> {
  public element: T
  public next: Node<T>

  constructor(element: T) {
    this.element = element
    this.next = null
  }
}

const list = new LinkedList<number>()
list.push(12)
list.push(7)
const del = list.removeAt(1)
console.info(del)
list.size()
list.getHead()