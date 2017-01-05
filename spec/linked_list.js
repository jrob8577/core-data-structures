import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linked_list'
import Node from '../src/linked_list_node'

chai.use(chaiChange)

describe.only('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context( 'getHeadNode()', () => {
    it( 'is a Node', () => {
      const list = new LinkedList()

      list.insert( 'hi' )

      expect( list.getHeadNode() ).to.be.an.instanceof( Node )
    })

    it( 'is the first node in the list', () => {
      const list = new LinkedList()

      list.insert( 'hi' )
      list.insert( 'world' )

      expect( list.getHeadNode().data() ).to.equal( 'hi' )
    })

    it( 'is null when the list is empty', () => {
      const list = new LinkedList()

      expect( list.getHeadNode() ).to.be.null
    })
  })

  context( 'getTailNode()', () => {
    it( 'is a Node', () => {
      const list = new LinkedList()

      list.insert( 'hi' )

      expect( list.getTailNode() ).to.be.an.instanceof( Node )
    })

    it( 'is the first node in the list', () => {
      const list = new LinkedList()

      list.insert( 'hi' )
      list.insert( 'world' )

      expect( list.getTailNode().data() ).to.equal( 'world' )
    })

    it( 'is null when the list is empty', () => {
      const list = new LinkedList()

      expect( list.getTailNode() ).to.be.null
    })
  })

  context( 'contains()', () => {
    it( 'is true when the element is in the list', () => {
      const list = new LinkedList()
      const data = 'who cares'

      list.insert( data )

      expect( list.contains( data ) ).to.be.true
    })

    it( 'is false when the element is not in the list', () => {
      const list = new LinkedList()

      expect( list.contains( 'who cares' ) ).to.be.false
    })
  })

  context( 'find()', () => {
    it( 'is a node', () => {
      const list = new LinkedList()
      const data = 'hi'

      list.insert( data )

      expect( list.find( data ) ).to.be.an.instanceof( Node )
    })

    it( 'is a node with the requested element', () => {
      const list = new LinkedList()
      const data = 'hi'

      list.insert( 'blarg' )
      list.insert( data )
      list.insert( 'other blarg' )

      expect( list.find( data ).data() ).to.equal( data )
    })

    it( 'is -1 when the element is not found', () => {
      const list = new LinkedList()

      list.insert( 'blarg' )
      list.insert( 'other blarg' )

      expect( list.find( 'hi' )).to.equal( -1 )
    })
  })

  context( 'insert()', () => {
    it( 'adds an element to the list', () => {
      const list = new LinkedList()

      expect( () => list.insert( 'hi' ) )
        .to.alter( () => list.size(), { by: 1 })
    })

    it( 'adds an element to the tail of the list', () => {
      const list = new LinkedList()
      const data = 'hi'

      list.insert( data )

      expect( list.getTailNode().data() ).to.equal( data )
    })
  })

  context( 'insertFirst()', () => {
    it( 'adds an element to the list', () => {
      const list = new LinkedList()

      expect( () => list.insertFirst( 'hi' ) )
        .to.alter( () => list.size(), { by: 1 })
    })

    it( 'adds an element to the head of the list', () => {
      const list = new LinkedList()
      const data = 'hi'

      list.insertFirst( data )

      expect( list.getHeadNode().data() ).to.equal( data )
    })
  })

  context( 'insertBefore()', () => {
    it( 'inserts an element into the list', () => {
      const list = new LinkedList()

      list.insert( 'hi' )

      expect( () => list.insertBefore( 'hi', 'blarg' ) )
        .to.alter( () => list.size(), { from: 1, to : 2 })
    })

    it( 'inserts the element in the correct position', () => {
      const list = new LinkedList()

      list.insert( 'A' )
      list.insert( 'B' )
      list.insert( 'D' )
      list.insert( 'E' )
      list.insertBefore( 'D', 'C' )

      expect( list.find( 'C' ).next().data() ).to.equal( 'D' )
    })
  })

  context( 'insertAfter()', () => {
    it( 'inserts an element into the list', () => {
      const list = new LinkedList()

      list.insert( 'hi' )

      expect( () => list.insertAfter( 'hi', 'blarg' ) )
        .to.alter( () => list.size(), { from: 1, to : 2 })
    })

    it( 'inserts the element in the correct position', () => {
      const list = new LinkedList()

      list.insert( 'A' )
      list.insert( 'B' )
      list.insert( 'D' )
      list.insert( 'E' )
      list.insertAfter( 'B', 'C' )

      expect( list.find( 'B' ).next().data() ).to.equal( 'C' )
    })

    it( 'does nothing if the before element does not exist', () => {
      const list = new LinkedList()

      list.insertBefore( 'A', 'B' )

      expect( list.size() ).to.equal( 0 )
    })
  })

  context( 'remove()', () => {
    it( 'removes an element from the list', () => {
      const list = new LinkedList()

      list.insert( 'hi' )
      list.insert( 'tis I' )

      expect( () => list.remove() )
        .to.alter( () => list.size(), { from: 2, to : 1 })
    })

    it( 'removes the last element from the list', () => {
      const list = new LinkedList()

      list.insert( 'hi' )
      list.insertFirst( 'tis I' )

      list.remove()

      expect( list.getTailNode().data() ).to.equal( 'tis I' )
    })
  })

  context( 'removeFirst()', () => {
    it( 'removes an element from the list', () => {
      const list = new LinkedList()

      list.insert( 'hi' )
      list.insertFirst( 'tis I' )

      expect( () => list.removeFirst() )
        .to.alter( () => list.size(), { from: 2, to : 1 })
    })

    it( 'removes the first element from the list', () => {
      const list = new LinkedList()

      list.insert( 'hi' )
      list.insertFirst( 'tis I' )

      list.removeFirst()

      expect( list.getHeadNode().data() ).to.equal( 'hi' )
    })
  })

  context( 'isEmpty()', () => {
    it( 'is true when the list has no elements', () => {
      const list = new LinkedList()

      expect( list.isEmpty() ).to.be.true
    })

    it( 'is false when the list has elements', () => {
      const list = new LinkedList()

      list.insert( 'slartibartfast' )

      expect( list.isEmpty() ).to.be.false
    })
  })

  context( 'size()', () => {
    it( 'is 0 for an empty list', () => {
      const list = new LinkedList()

      expect( list.size() ).to.equal( 0 )
    })

    it( 'is the number of items in the list', () => {
      const list = new LinkedList()
      const size = 2

      for( let i = 0; i < size; i++ ) {
        list.insert( i )
      }

      expect( list.size() ).to.equal( size )
    })
  })

  context( 'clear()', () => {
    it( 'removes all elements from the list', () => {
      const list = new LinkedList()
      const size = 2

      for( let i = 0; i < size; i++ ) {
        list.insert( i )
      }

      expect( () => list.clear() )
        .to.alter( () => list.size(), { from: size, to: 0 })
    })
  })
})
