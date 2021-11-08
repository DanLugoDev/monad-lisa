import { Nothing, Tokenizer } from '@app/builtin'
import Either from '@app/descriptors/Either'
import Glyph from '@app/descriptors/Glyph'
import Many from '@app/descriptors/Many'
import Sequence from '@app/descriptors/Sequence'
import Token from '@app/Token'

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
