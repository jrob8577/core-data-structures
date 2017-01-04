export default class Queue {
  constructor() {
    this.size = 0
    this.frontElement = null
    this.backElement = null
  }

  enqueue( element ) {
    if( this.frontElement === null ) {
      this.frontElement = this.backElement = new Node( element, null )
    } else {
      this.backElement.next = new Node( element, null )
      this.backElement = this.backElement.next
    }

    this.size++
  }

  dequeue() {
    if( this.frontElement !== null ) {
      this.size--

      const temp = this.frontElement.data
      this.frontElement = this.frontElement.next

      return temp
    }

    return null
  }

  front() {
    if( this.frontElement !== null ) {
      return this.frontElement.data
    }

    return null
  }

  back() {
    if( this.backElement !== null ) {
      return this.backElement.data
    }

    return null
  }

  length() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }
}

class Node {
  constructor( data, next=null ) {
    this.data = data
    this.next = next
  }
}
