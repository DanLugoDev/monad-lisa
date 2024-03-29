import 'jasmine'

import { Tokenizer } from '@app/builtin'
import Either from '@app/descriptors/Either'
import Glyph from '@app/descriptors/Glyph'
import Token from '@app/Token'
import Type from '@app/Type'

const getName = () => undefined

const falseType: Type = {
  getName,
  dependencies() {
    return new Set()
  },
  matches() {
    return false
  },
  transform() {
    return {} as Token
  }
}

const falseTypeB: Type = {
  getName,
  dependencies() {
    return new Set()
  },
  matches() {
    return false
  },
  transform() {
    return {} as Token
  }
}

const trueType: Type = {
  getName,
  dependencies() {
    return new Set()
  },
  matches() {
    return true
  },
  transform() {
    return {} as Token
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
