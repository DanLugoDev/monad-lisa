import 'jasmine'

import { Nothing, One, Zero } from '../../src/builtin'
import Sequence from '../../src/descriptors/Sequence'
import Token from '../../src/Token'

describe('Sequence', () => {
  it('throws TypeError when supplied with fewer than 2 types', () => {
    expect(() => {
      Sequence([])
    }).toThrowError(TypeError)

    expect(() => {
      Sequence([Zero])
    }).toThrowError(TypeError)
  })

  it('matches sequences', () => {
    const zeroOneNothing = new Set<Token>([
      {
        children: new Set(),
        matchedBy: Zero,
        text: '0'
      },
      {
        children: new Set(),
        matchedBy: One,
        text: '1'
      },
      {
        children: new Set(),
        matchedBy: Nothing,
        text: ''
      }
    ])

    const instance = Sequence([Zero, One, Nothing])

    expect(instance.matches(zeroOneNothing))
  })
})
