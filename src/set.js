export default class Set {
  constructor( elements=[] ) {
    this.front = null
    this.back = null
    this.count = 0

    elements.forEach( element => this.add( element ))
  }

  add( element ) {
    if( ! this.contains( element ) ) {
      this.count++

      if( this.front === null ) {
        this.front = this.back = new Node( element, null, null )
      } else {
        this.back.next = new Node( element, this.back, null )
        this.back = this.back.next
      }
    }
  }

  isEmpty() {
    return this.count === 0
  }

  contains( element ) {
    return this.find( element ) !== null
  }

  remove( element ) {
    let walker = this.find( element )

    if( walker !== null ) {
      this.count--

      if( walker.previous !== null ) {
        walker.previous.next = walker.next
      }

      if( walker.next !== null ) {
        walker.next.previous = walker.previous
      }
    }

    if( walker === this.front ) {
      this.front = walker.next

      if( this.front !== null ) {
        this.front.previous = null
      }
    }

    if( walker === this.back ) {
      this.back = walker.previous

      if( this.back !== null ) {
        this.back.next = null
      }
    }
  }

  find( element ) {
    let walker = this.front

    while( walker !== null && walker.element !== element ) {
      walker = walker.next
    }

    return walker
  }

  size() {
    return this.count
  }

  members() {
    let result = []

    let walker = this.front

    while( walker !== null ) {
      result.push( walker.element )
      walker = walker.next
    }

    return result
  }

  union( otherSet ) {
    return new Set([ ...this.members(), ...otherSet.members() ])
  }

  intersect( otherSet ) {
    const resultSet = new Set()

    let walker = this.front

    while( walker !== null ) {
      if( otherSet.find( walker.element ) !== null ) {
        resultSet.add( walker.element )
      }
      walker = walker.next
    }

    return resultSet
  }

  difference( otherSet ) {
    const resultSet = new Set()

    let walker = this.front

    while( walker !== null ) {
      if( otherSet.find( walker.element ) === null ) {
        resultSet.add( walker.element )
      }
      walker = walker.next
    }

    return resultSet
  }

  isSubset( otherSet ) {
    let found = 0
    let walker = this.front

    while( walker !== null ) {
      if( otherSet.find( walker.element ) !== null ) {
        found++
      }

      walker = walker.next
    }

    return found === this.size()
  }

  clone() {
    return new Set( this.members() )
  }
}

class Node {
  constructor( element, previous, next ) {
    this.element = element
    this.previous = previous
    this.next = next
  }
}
