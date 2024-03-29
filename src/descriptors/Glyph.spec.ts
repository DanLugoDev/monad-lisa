import 'jasmine'

import { LowercaseA, Nothing, Tokenizer } from '@app/builtin'
import Glyph from '@app/descriptors/Glyph'
import Token from '@app/Token'
import Type from '@app/Type'

const createTestTokenSet = (strs: string[]): ReadonlySet<Token> =>
  new Set<Token>(
    strs.map<Token>(str => ({
      children: new Set(),
      matchedBy: Tokenizer,
      text: str
    }))
  )

const emptyTokenSet: ReadonlySet<Token> = new Set()
const singleTokenEmptyString = createTestTokenSet([''])
const multipleTokensEmptyStrings = createTestTokenSet(['', ''])
const fooStringLeadingEmptyString = createTestTokenSet(['', 'foo'])
const fooStringTraillingEmptyString = createTestTokenSet(['foo', ''])
const fooStringWrappingEmptyString = createTestTokenSet(['', 'foo', ''])
const fooStringEmptyInBetween = createTestTokenSet(['fo', '', 'o'])
const fooStringAlone = createTestTokenSet(['foo'])
const fooStringTwice = createTestTokenSet(['foo', 'foo'])
const fooSpaceBaz = createTestTokenSet(['foo', ' ', 'baz'])
const fooSpaceBazSpace = createTestTokenSet(['foo', ' ', 'baz', ' '])
const spaceFoo = createTestTokenSet([' ', 'foo'])
const fooSpace = createTestTokenSet(['foo', ' '])
const spaceFooSpace = createTestTokenSet([' ', 'foo', ' '])
const spaceFooSpaceBaz = createTestTokenSet([' ', 'foo', ' ', 'baz'])
const spaceFooSpaceBazSpace = createTestTokenSet([
  ' ',
  'foo',
  ' ',
  'baz',
  'space'
])
const fooSpaceSpaceBaz = createTestTokenSet(['foo', ' ', ' ', 'baz'])

describe('Glyph', () => {
  it("Doesn't match tokens that weren't matched themselves by the `matchedBy` argument to the constructor", () => {
    const instance = Glyph({} as Type, 'foo')

    expect(instance.matches(fooStringAlone)).toBeFalsy()
  })

  describe('when constructed with an empty string', () => {
    const instance = Glyph(Tokenizer, '')

    it("doesn't match an empty set", () => {
      expect(instance.matches(emptyTokenSet)).toBeFalsy()
    })

    it('matches one token with an empty string', () => {
      expect(instance.matches(singleTokenEmptyString)).toBeTruthy()
    })

    it('matches several tokens with empty strings', () => {
      expect(instance.matches(multipleTokensEmptyStrings)).toBeTruthy()
    })

    it("doesn't match non-empty strings", () => {
      expect(instance.matches(fooStringLeadingEmptyString)).toBeFalsy()
      expect(instance.matches(fooStringTraillingEmptyString)).toBeFalsy()
      expect(instance.matches(fooStringWrappingEmptyString)).toBeFalsy()
      expect(instance.matches(fooStringEmptyInBetween)).toBeFalsy()
      expect(instance.matches(fooStringAlone)).toBeFalsy()
      expect(instance.matches(fooStringTwice)).toBeFalsy()
      expect(instance.matches(fooSpaceBaz)).toBeFalsy()
      expect(instance.matches(fooSpaceBazSpace)).toBeFalsy()
      expect(instance.matches(spaceFoo)).toBeFalsy()
      expect(instance.matches(spaceFooSpace)).toBeFalsy()
      expect(instance.matches(spaceFooSpaceBaz)).toBeFalsy()
      expect(instance.matches(spaceFooSpaceBazSpace)).toBeFalsy()
    })
  })

  describe('when constructed with non empty string', () => {
    const instance = Glyph(Tokenizer, 'foo')

    it('matches that exact string', () => {
      expect(instance.matches(fooStringAlone)).toBeTruthy()
    })

    it("isn't fooled by leading or trailling spaces", () => {
      expect(instance.matches(fooSpace)).toBeFalsy()
      expect(instance.matches(spaceFoo)).toBeFalsy()
    })
  })

  describe('when constructed with spaces in the string', () => {
    it('matches leading spaces', () => {
      const instance = Glyph(Tokenizer, ' foo')

      expect(instance.matches(spaceFoo)).toBeTruthy()
    })

    it('matches trailling spaces', () => {
      const instance = Glyph(Tokenizer, 'foo ')

      expect(instance.matches(fooSpace)).toBeTruthy()
    })
  })

  describe('when constructed with several words', () => {
    const instance = Glyph(Tokenizer, 'foo baz')

    it('matches the sentence supplied', () => {
      expect(instance.matches(fooSpaceBaz)).toBeTruthy()
    })

    it("isn't fooled by extra spaces", () => {
      expect(instance.matches(fooSpaceSpaceBaz)).toBeFalsy()
    })
  })

  it('works as expected with some example definitions', () => {
    const nothingTest1 = createTestTokenSet([''])
    const nothingTest2 = createTestTokenSet(['', ''])
    expect(Nothing.matches(nothingTest1)).toBeTruthy()
    expect(Nothing.matches(nothingTest2)).toBeTruthy()

    const aTest1 = createTestTokenSet(['a'])
    const aTest2 = createTestTokenSet(['', 'a'])
    const aTest3 = createTestTokenSet(['a', ''])
    const aTest4 = createTestTokenSet(['', 'a', ''])

    expect(LowercaseA.matches(aTest1)).toBeTruthy()
    expect(LowercaseA.matches(aTest2)).toBeTruthy()
    expect(LowercaseA.matches(aTest3)).toBeTruthy()
    expect(LowercaseA.matches(aTest4)).toBeTruthy()

    const lineBreakTest = createTestTokenSet(['\n'])

    expect(Glyph(Tokenizer, '\n').matches(lineBreakTest)).toBeTruthy()
  })
})
