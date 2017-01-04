export default class PriorityQueue {
  constructor() {
    this.frontElement = this.backElement = null
    this.size = 0
  }

  enqueue( element, priority ) {
    this.size++

    if( this.frontElement === null ) {
      this.frontElement = this.backElement = new Node( element, priority, null )
    } else if( this.frontElement.priority < priority ) {
      this.frontElement = new Node( element, priority, this.frontElement )
    } else if( this.backElement.priority > priority ) {
      this.backElement.next = new Node( element, priority, null )
      this.backElement = this.backElement.next
    } else {
      const walker = this.frontElement

      while( walker.next !== null && walker.next.priority > priority ) {
        walker = walker.next
      }

      walker.next = new Node( element, priority, walker.next )
    }
  }

  dequeue() {
    if( this.frontElement !== null ) {
      this.size--
      return this.frontElement.data
    }

    return null
  }

  front() {
    return this.frontElement !== null ? this.frontElement.data : null
  }

  back() {
    return this.backElement !== null ? this.backElement.data : null
  }

  isEmpty() {
    return this.size === 0
  }

  length() {
    return this.size
  }
}

class Node {
  constructor( data, priority, next ) {
    this.data = data
    this.priority = priority
    this.next = next
  }
}
