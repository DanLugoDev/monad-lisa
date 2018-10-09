import 'jasmine'

import { Nothing, Tokenizer } from '../../src/builtin'
import Glyph from '../../src/descriptors/Glyph'
import transform from '../../src/parsing/transform'
import Token from '../../src/Token'
import Type from '../../src/Type'

const falseType: Type = {
  dependencies() {
    return new Set()
  },
  matches() {
    return false
  }
}

const trueType: Type = {
  dependencies() {
    return new Set()
  },
  matches() {
    return true
  }
}

const buildTokenizerTokens = (text: string): Set<Token> =>
  new Set(
    text.split('').map<Token>(char => ({
      children: new Set(),
      matchedBy: Tokenizer,
      text: char
    }))
  )

const testTokens = buildTokenizerTokens('foo')
const testType = Glyph(Tokenizer, 'foo')

describe('transform', () => {
  it('throws Error when given an empty set', () => {
    expect(() => {
      transform(falseType, new Set())
    }).toThrowError(Error)
  })

  it("throws Error when given a type that doesn't match the given set of tokens", () => {
    expect(() => {
      transform(falseType, testTokens)
    }).toThrowError(Error)
  })

  it('returns a correct token for some given value types', () => {
    const correctReturn: Token = {
      children: testTokens,
      matchedBy: testType,
      text: 'foo'
    }

    const testReturn = transform(testType, testTokens)

    expect(testReturn).toEqual(correctReturn)
  })

  it('handles the Nothing type correctly', () => {
    const a1 = buildTokenizerTokens('a')
    const a2 = buildTokenizerTokens('a')
    const midNothing: Token = {
      children: new Set(),
      matchedBy: Nothing,
      text: ''
    }

    const nothingTestTokens = new Set<Token>([...a1, midNothing, ...a2])

    const result = transform(trueType, nothingTestTokens)

    expect(result).toEqual({
      children: nothingTestTokens,
      matchedBy: trueType,
      text: 'aa'
    })
  })
})
