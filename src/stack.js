'use strict'

export default class Stack {
  constructor() {
    this.top = null
    this.size = 0
  }

  push( data ) {
    this.top = new Node( data, this.top )
    this.size++
  }

  pop() {
    if( this.top !== null ) {
      this.size--

      const result = this.top.data
      this.top = this.top.next

      return result
    }

    return null
  }

  peek() {
    return this.top !== null ? this.top.data : null
  }

  length() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }
}

class Node {
  constructor( data, next ) {
    this.data = data
    this.next = next
  }
}
