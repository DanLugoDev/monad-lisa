import { Nothing, Tokenizer } from '../../src/builtin'
import Either from '../../src/descriptors/Either'
import Glyph from '../../src/descriptors/Glyph'
import Many from '../../src/descriptors/Many'
import Sequence from '../../src/descriptors/Sequence'
import Token from '../../src/Token'

describe('Descriptor', () => {
  it('returns a type which never matches when given an empty set', () => {
    const emptySet = new Set<Token>()

    const either = Either([Nothing, Tokenizer])
    const glyph = Glyph(Tokenizer, 'foo')
    const many = Many(Tokenizer).separatedBy(Nothing)
    const seq = Sequence([Nothing, Tokenizer])

    expect(
      either.matches(emptySet) ||
        glyph.matches(emptySet) ||
        many.matches(emptySet) ||
        seq.matches(emptySet)
    ).toBeFalsy()
  })
})
