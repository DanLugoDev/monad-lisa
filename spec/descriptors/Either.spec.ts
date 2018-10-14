import 'jasmine'

import { Tokenizer } from '../../src/builtin'
import Either from '../../src/descriptors/Either'
import Glyph from '../../src/descriptors/Glyph'
import Token from '../../src/Token'
import Type from '../../src/Type'

const createTestTokenSet = (strs: string[]): ReadonlySet<Token> =>
  new Set<Token>(
    strs.map<Token>(str => ({
      children: new Set(),
      matchedBy: Tokenizer,
      text: str
    }))
  )

const falseType: Type = {
  dependencies() {
    return new Set()
  },
  matches() {
    return false
  }
}

const falseTypeB: Type = {
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

const testSet = new Set<Token>([
  {
    children: new Set(),
    matchedBy: Tokenizer,
    text: ''
  }
])

describe('Either', () => {
  it('throws if supplied with fewer than two types', () => {
    expect(() => {
      Either([])
    }).toThrow()
    expect(() => {
      Either([falseType])
    }).toThrow()
  })

  it('throws if any of the types provided is repeated', () => {
    expect(() => {
      Either([falseType, falseType])
    }).toThrow()
  })

  it("doesn't match when supplied with two always-false types", () => {
    const instance = Either([falseType, falseTypeB])
    expect(instance.matches(testSet)).toBeFalsy()
  })

  it('matches when given at least one always-true type', () => {
    const instance = Either([trueType, falseType])
    expect(instance.matches(testSet))
  })

  it('Matches A or B when given A and B', () => {
    const testTypeA = Glyph(Tokenizer, 'foo')
    const testTypeB = Glyph(Tokenizer, 'baz')
    const eitherTest = Either([testTypeA, testTypeB])

    const foo = new Set<Token>([
      {
        children: new Set(),
        matchedBy: Tokenizer,
        text: 'foo'
      }
    ])

    const baz = new Set<Token>([
      {
        children: new Set(),
        matchedBy: Tokenizer,
        text: 'baz'
      }
    ])

    expect(eitherTest.matches(foo) && eitherTest.matches(baz)).toBeTruthy()
  })
})
