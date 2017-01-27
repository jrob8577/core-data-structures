import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
  })

  context('pop()', () => {
    it( 'absolutely, positively returns the right thing while leaving the stack in the right state', () => {
      const stack = new Stack()
      const testValues = [ 1, 2, 3, 4 ]

      testValues.forEach( item => stack.push( item ))

      expect( stack.length() ).to.equal( testValues.length )

      testValues.reverse().forEach( item => expect( stack.pop() ).to.equal( item ))

      expect( stack.length() ).to.equal( 0 )
    })

    it('removes an element from the stack', () => {
      const stack = new Stack()
      const element = 'hi'

      stack.push( element )

      expect(stack.pop()).to.equal( element )
    })

    it('updates size of stack', () => {
      const stack = new Stack()
      const element = 'hi'

      stack.push( element )

      expect(() => stack.pop()).to.alter(() => stack.length(), { from: 1, to: 0 })
    })

    it('returns null on empty stack', () => {
      const stack = new Stack()

      expect( stack.pop() ).to.equal( null )
    })
  })

  context( 'peek()', () => {
    it( 'returns the top element of the stack', () => {
      const stack = new Stack()
      const element = 'hi'

      stack.push( element )

      expect( stack.peek() ).to.equal( element )
    })

    it( 'does not change the size of the stack', () => {
      const stack = new Stack()
      const element = 'hi'

      stack.push( element )
      stack.peek()

      expect( stack.length() ).to.equal( 1 )
    })

    it('returns null on empty stack', () => {
      const stack = new Stack()

      expect( stack.peek() ).to.equal( null )
    })
  })

  context( 'isEmpty()', () => {
    it( 'is true when stack empty', () => {
      const stack = new Stack()

      expect( stack.isEmpty() ).to.be.true
    })

    it( 'is false when stack is not empty', () => {
      const stack = new Stack()
      stack.push( 1 )

      expect( stack.isEmpty() ).to.be.false
    })
  })

  context( 'length()', () => {
    it( 'returns 0 for an empty stack', () => {
      const stack = new Stack()

      expect( stack.length() ).to.equal( 0 )
    })

    it( 'returns number of elements in stack', () => {
      const stack = new Stack()
      const size = 5

      for( let i = 0; i < size; i++ ) {
        stack.push( i )
      }

      expect( stack.length() ).to.equal( size )
    })
  })
})
