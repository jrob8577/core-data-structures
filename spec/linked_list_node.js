import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/linked_list_node'

chai.use(chaiChange)

describe('Node', () => {
  'use strict'

  it('exists', () => {
    expect(Node).to.be.a('function')
  })

  context( 'data()', () => {
    it( 'is the data element contained in the node', () => {
      const node = new Node( 'hi' )

      expect( node.data() ).to.equal( 'hi' )
    })
  })

  context( 'next()', () => {
    it( 'exists', () => {
      const node = new Node()

      expect( node.next ).to.be.a( 'function' )
    })
  })
})
