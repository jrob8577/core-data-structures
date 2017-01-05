import Node from './linked_list_node'

export default class LinkedList {
  constructor() {
    this.count = 0
    this.head = null
    this.tail = null
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  contains( element ) {
    return this.find( element ) !== -1
  }

  find( element ) {
    let walker = this.head

    while( walker !== null && walker.data() !== element ) {
      walker = walker.next()
    }

    return walker === null ? -1 : walker
  }

  insert( element ) {
    this.count++

    if( this.tail === null ) {
      this.head = this.tail = new Node( element, null )
    } else {
      this.tail.setNext( new Node( element, null ) )
      this.tail = this.tail.next()
    }
  }

  insertFirst( element ) {
    this.count++

    if( this.head === null ) {
      this.head = this.tail = new Node( element, null )
    } else {
      this.head = new Node( element, this.head )
    }
  }

  remove() {
    if( this.isEmpty() ) {
      return
    }

    this.count--

    if( this.count === 0 ) {
      this.head = this.tail = null
    } else {
      let walker = this.head

      while( walker.next() !== this.tail ) {
        walker = walker.next()
      }

      this.tail = walker
      this.tail.setNext( null )
    }
  }

  removeFirst() {
    if( this.isEmpty() ) {
      return
    }

    this.count--

    if( this.head !== null ) {
      this.head = this.head.next()
    }

    if( this.head === null ) {
      this.tail = null
    }
  }

  insertBefore( beforeElement, element ) {
    if( this.isEmpty() ) {
      return
    }

    if( this.head !== null && this.head.data() === beforeElement ) {
      this.insertFirst( element )
    } else {
      let walker = this.head

      while( walker.next() !== null && walker.next().data() !== beforeElement ) {
        walker = walker.next()
      }

      if( walker.next() !== null ) {
        walker.setNext( new Node( element, walker.next() ))
      }
    }
  }

  insertAfter( beforeElement, element ) {
    let walker = this.head

    while( walker !== null && walker.data() !== beforeElement ) {
      walker = walker.next()
    }

    if( walker !== null ) {
      walker.setNext( new Node( element, walker.next() ))
      this.count++
    }
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  clear() {
    this.head = this.tail = null
    this.count = 0
  }
}
