import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context( 'enqueue()', () => {
    it( 'adds an element to the back of the queue', () => {
      const queue = new Queue()

      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.length(), { from: 0, to: 1 })
    })
  })

  context( 'dequeue()', () => {
    it('removes an element from the front of the queue', () => {
      const queue = new Queue()
      const element = 'hi'

      queue.enqueue( element )
      queue.enqueue( 'another thing' )

      expect( queue.dequeue() ).to.equal( element )
    })

    it('updates size of queue', () => {
      const queue = new Queue()
      const element = 'hi'

      queue.enqueue( element )
      queue.enqueue( 'another thing' )

      expect(() => queue.dequeue()).to.alter(() => queue.length(), { from: 2, to: 1 })
    })

    it('returns null on empty queue', () => {
      const queue = new Queue()

      expect( queue.dequeue() ).to.equal( null )
    })
  })

  context( 'front()', () => {
    it( 'returns the front element in queue', () => {
      const queue = new Queue()
      const element = 'hi'

      queue.enqueue( element )
      queue.enqueue( 'another thing' )

      expect( queue.front() ).to.equal( element )
    })

    it( 'does not change size of queue', () => {
      const queue = new Queue()
      const element = 'hi'

      queue.enqueue( element )
      queue.enqueue( 'another thing' )
      queue.front()

      expect( queue.length() ).to.equal( 2 )
    })

    it( 'returns null on empty queue', () => {
      const queue = new Queue()

      expect( queue.front() ).to.equal( null )
    })
  })

  context( 'back()', () => {
    it( 'returns the back element in queue', () => {
      const queue = new Queue()
      const element = 'hi'

      queue.enqueue( 'first thing' )
      queue.enqueue( element )

      expect( queue.back() ).to.equal( element )
    })

    it( 'does not change size of queue', () => {
      const queue = new Queue()
      const element = 'hi'

      queue.enqueue( 'first thing' )
      queue.enqueue( element )
      queue.back()

      expect( queue.length() ).to.equal( 2 )
    })

    it( 'returns null on empty queue', () => {
      const queue = new Queue()

      expect( queue.back() ).to.equal( null )
    })
  })

  context( 'isEmpty()', () => {
    it( 'is true when queue empty', () => {
      const queue = new Queue()

      expect( queue.isEmpty() ).to.be.true
    })

    it( 'is false when queue is not empty', () => {
      const queue = new Queue()
      queue.enqueue( 1 )

      expect( queue.isEmpty() ).to.be.false
    })
  })

  context( 'length()', () => {
    it( 'returns 0 for an empty queue', () => {
      const queue = new Queue()

      expect( queue.length() ).to.equal( 0 )
    })

    it( 'returns number of elements in queue', () => {
      const queue = new Queue()
      const size = 5

      for( let i = 0; i < size; i++ ) {
        queue.enqueue( i )
      }

      expect( queue.length() ).to.equal( size )
    })
  })
})
