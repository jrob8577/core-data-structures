export default class Node {
  constructor( element, node=null ) {
    this.element = element
    this.nextNode = node
  }

  data() {
    return this.element
  }

  next() {
    return this.nextNode
  }

  setNext( node ) {
    this.nextNode = node
  }
}
