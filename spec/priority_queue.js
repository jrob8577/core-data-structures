import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priority_queue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context( 'enqueue()', () => {
    it( 'adds an element to the back of the queue', () => {
      const queue = new PriorityQueue()

      expect(() => queue.enqueue('foo', 100))
        .to.alter(() => queue.length(), { from: 0, to: 1 })
    })
  })

  context( 'dequeue()', () => {
    it('removes the highest priority element from the queue', () => {
      const queue = new PriorityQueue()
      const element = 'highest'

      queue.enqueue( 'lowest thing', 0 )
      queue.enqueue( element, 1000 )

      expect( queue.dequeue() ).to.equal( element )
    })

    it('updates size of queue', () => {
      const queue = new PriorityQueue()
      const element = 'highest'

      queue.enqueue( 'lowest thing', 0 )
      queue.enqueue( element, 1000 )

      expect(() => queue.dequeue()).to.alter(() => queue.length(), { from: 2, to: 1 })
    })

    it('returns null on empty queue', () => {
      const queue = new PriorityQueue()

      expect( queue.dequeue() ).to.equal( null )
    })
  })

  context( 'front()', () => {
    it( 'returns the highest priority element in queue', () => {
      const queue = new PriorityQueue()
      const element = 'highest'

      queue.enqueue( 'lowest thing', 0 )
      queue.enqueue( element, 1000 )

      expect( queue.front() ).to.equal( element )
    })

    it( 'does not change size of queue', () => {
      const queue = new PriorityQueue()
      const element = 'highest'

      queue.enqueue( 'lowest thing', 0 )
      queue.enqueue( element, 1000 )
      queue.front()

      expect( queue.length() ).to.equal( 2 )
    })

    it( 'returns null on empty queue', () => {
      const queue = new PriorityQueue()

      expect( queue.front() ).to.equal( null )
    })
  })

  context( 'back()', () => {
    it( 'returns the lowest priority element in queue', () => {
      const queue = new PriorityQueue()
      const element = 'highest'

      queue.enqueue( element, 0 )
      queue.enqueue( 'first thing', 1000 )

      expect( queue.back() ).to.equal( element )
    })

    it( 'does not change size of queue', () => {
      const queue = new PriorityQueue()
      const element = 'highest'

      queue.enqueue( element, 0 )
      queue.enqueue( 'first thing', 1000 )
      queue.back()

      expect( queue.length() ).to.equal( 2 )
    })

    it( 'returns null on empty queue', () => {
      const queue = new PriorityQueue()

      expect( queue.back() ).to.equal( null )
    })
  })

  context( 'isEmpty()', () => {
    it( 'is true when queue empty', () => {
      const queue = new PriorityQueue()

      expect( queue.isEmpty() ).to.be.true
    })

    it( 'is false when queue is not empty', () => {
      const queue = new PriorityQueue()
      queue.enqueue( 1 )

      expect( queue.isEmpty() ).to.be.false
    })
  })

  context( 'length()', () => {
    it( 'returns 0 for an empty queue', () => {
      const queue = new PriorityQueue()

      expect( queue.length() ).to.equal( 0 )
    })

    it( 'returns number of elements in queue', () => {
      const queue = new PriorityQueue()
      const size = 5

      for( let i = 0; i < size; i++ ) {
        queue.enqueue( i )
      }

      expect( queue.length() ).to.equal( size )
    })
  })
})
