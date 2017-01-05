import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context( 'add()', () => {
    it( 'adds unique element to set', () => {
      const set = new Set()

      expect( () => set.add( 'A' ) )
        .to.alter( () => set.size(), { from: 0, to: 1 })
    })

    it( 'does not add element that exists', () => {
      const element = 'A'
      const set = new Set([ element ])

      expect( () => set.add( element ) )
        .not.to.alter( () => set.size() )
    })
  })

  context( 'isEmpty()', () => {
    it( 'is true when set contains no elements', () => {
      const set = new Set()

      expect( set.isEmpty() ).to.be.true
    })

    it( 'is false when set contains elements', () => {
      const set = new Set(['A', 'B', 'C'])

      expect( set.isEmpty() ).to.be.false
    })
  })

  context( 'contains()', () => {
    it( 'is true when the element is in the set', () => {
      const element = 'A'
      const set = new Set([ element, 'B', 'C'])

      expect( set.contains( element ) ).to.be.true
    })

    it( 'is false when the element is not in the set', () => {
      const element = 'D'
      const set = new Set([ 'A', 'B', 'C'])

      expect( set.contains( element ) ).to.be.false
    })
  })

  context( 'remove()', () => {
    it( 'removes element from the set', () => {
      const element = 'A'
      const set = new Set([ element, 'B', 'C'])

      expect( () => set.remove( element ))
        .to.alter( () => set.size(), { from: 3, to: 2 } )
    })

    it( 'does nothing when element is not present', () => {
      const element = 'D'
      const set = new Set([ 'A', 'B', 'C'])

      expect( () => set.remove( element ))
        .not.to.alter( () => set.size() )
    })
  })

  context( 'iterate()', () => {
    // set.iterate(elem => console.log(elem))  // takes a callback function and passes it each element in sequence.
  })

  context( 'size()', () => {
    it( 'is 0 when the set contains no elements', () => {
      const set = new Set()

      expect( set.size() ).to.equal( 0 )
    })

    it( 'is the number of elements in the set', () => {
      const set = new Set([ 1, 2, 3 ])

      expect( set.size() ).to.equal( 3 )
    })
  })

  context( 'members()', () => {
    it( 'provides an array containing all members', () => {
      const set = new Set([ 1, 2, 3 ])

      expect( set.members() ).to.have.members([ 1, 2, 3 ])
    })

    it( 'handles empty sets', () => {
      const set = new Set()

      expect( set.members() ).to.eql( [] )
    })
  })

  context( 'union()', () => {
    it( 'is the union of two sets', () => {
      const one = new Set([ 1, 2, 3 ])
      const two = new Set([ 'A', 'B', 'C' ])

      expect( one.union( two ).members() ).to.have.members([ 1, 2, 3, 'A', 'B', 'C' ])
    })

    it( 'handles repeat elements', () => {
      const one = new Set([ 1, 2, 3 ])
      const two = new Set([ 'A', 1, 2, 3 ])

      expect( one.union( two ).members() ).to.have.members([ 1, 2, 3, 'A' ])
    })

    it( 'handles empty sets', () => {
      const one = new Set([ 1, 2, 3 ])
      const two = new Set()

      expect( one.union( two ).members() ).to.have.members([ 1, 2, 3 ])
    })
  })

  context( 'intersect()', () => {
    it( 'is the intersection of two sets', () => {
      const one = new Set([ 1, 2, 3 ])
      const two = new Set([ 2, 3, 4 ])

      expect( one.intersect( two ).members() ).to.have.members([ 2, 3 ])
    })

    it( 'handles empty sets', () => {
      const one = new Set([ 1, 2, 3 ])
      const two = new Set()

      expect( one.intersect( two ).members() ).to.eql([])
    })
  })

  context( 'difference()', () => {
    it( 'is the difference of two sets', () => {
      const one = new Set([ 1, 2, 3 ])
      const two = new Set([ 2, 3, 4 ])

      expect( one.difference( two ).members() ).to.have.members([ 1 ])
    })

    it( 'handles empty sets', () => {
      const one = new Set([ 1, 2, 3 ])
      const two = new Set()

      expect( one.difference( two ).members() ).to.have.members([ 1, 2, 3 ])
    })
  })

  context( 'isSubset()', () => {
    it( 'is true when the set is a subset of another set', () => {
      const one = new Set([ 2 ])
      const two = new Set([ 2, 3, 4 ])

      expect( one.isSubset( two )).to.be.true
    })

    it( 'is false when the set is nota subset of another set', () => {
      const one = new Set([ 5 ])
      const two = new Set([ 2, 3, 4 ])

      expect( one.isSubset( two )).to.be.false
    })
  })

  context( 'clone()', () => {
    it( 'is a copy of the set', () => {
      const set = new Set([ 1, 2, 3 ])

      expect( set.clone().members() ).to.have.members([ 1, 2, 3 ])
    })
  })
})
