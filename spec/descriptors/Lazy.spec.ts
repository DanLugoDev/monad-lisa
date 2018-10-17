import 'jasmine'

import {
  Comma,
  LeftSquareBracket,
  RightSquareBracket,
  Tokenizer,
  Zero
} from '@app/builtin'
import Either from '@app/descriptors/Either'
import Lazy from '@app/descriptors/Lazy'
import Many from '@app/descriptors/Many'
import Sequence from '@app/descriptors/Sequence'
import Token from '@app/Token'

const zeroTestTokens = new Set<Token>([
  {
    children: new Set(),
    matchedBy: Tokenizer,
    text: '0'
  }
])

const otherTokens = new Set<Token>([
  {
    children: new Set(),
    matchedBy: Tokenizer,
    text: 'foo'
  }
])

describe('Lazy', () => {
  const instance: Lazy = Lazy()

  it('throws Error if any of the type methods are called on it before giving it the pointed type', () => {
    expect(() => {
      instance.getName()
    }).toThrowError(ReferenceError)

    expect(() => {
      instance.dependencies()
    }).toThrowError(Error)

    expect(() => {
      instance.matches(new Set())
    }).toThrowError()
  })

  it('has a $$isLazy: true property', () => {
    expect((instance as Lazy).$$isLazy).toBeTruthy()
  })

  it('has methods which work the same as its pointedType after givin it that type', () => {
    const lazyZero: Lazy = Lazy()

    lazyZero.define(Zero)

    const zeroName = Zero.getName()
    const zeroDeps = Zero.dependencies()
    const zeroMatchResult1 = Zero.matches(zeroTestTokens)
    const zeroMatchResult2 = Zero.matches(otherTokens)

    const lazyName = lazyZero.getName()
    const lazyDeps = lazyZero.dependencies()
    const lazyMatchResult1 = lazyZero.matches(zeroTestTokens)
    const lazyMatchResult2 = lazyZero.matches(otherTokens)

    expect(lazyName).toEqual(zeroName)
    expect(lazyDeps).toEqual(zeroDeps)
    expect(lazyMatchResult1).toEqual(zeroMatchResult1)
    expect(lazyMatchResult2).toEqual(zeroMatchResult2)
  })

  it('works for defining self-referencing types', () => {
    const ArrayType = Lazy()

    const ArrayItem = Either([ArrayType, Zero])

    const ArrayBody = Many(ArrayItem).separatedBy(Comma)

    ArrayType.define(
      Sequence([LeftSquareBracket, ArrayBody, RightSquareBracket])
    )

    const tokens = new Set<Token>([
      {
        children: new Set(),
        matchedBy: LeftSquareBracket,
        text: '['
      },
      {
        children: new Set(),
        matchedBy: ArrayBody,
        text: '[], 0'
      },
      {
        children: new Set(),
        matchedBy: RightSquareBracket,
        text: ']'
      }
    ])

    expect(ArrayType.matches(tokens)).toBeTruthy()
  })
})
