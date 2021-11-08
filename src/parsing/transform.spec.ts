import 'jasmine'

import transform from '@app/parsing/transform'
import Token from '@app/Token'
import {
  AnyCaseLetter,
  Colon,
  Nothing,
  Word
} from '@app/builtin'


const word: readonly Token[] = [
  {
    children: new Set(),
    matchedBy: AnyCaseLetter,
    text: 'a'
  },
  {
    children: new Set(),
    matchedBy: Nothing,
    text: ''
  },
  {
    children: new Set(),
    matchedBy: AnyCaseLetter,
    text: 'b'
  },
  {
    children: new Set(),
    matchedBy: Nothing,
    text: ''
  },
  {
    children: new Set(),
    matchedBy: AnyCaseLetter,
    text: 'c'
  }
]

const notAWord: readonly Token[] = [
  {
    children: new Set(),
    matchedBy: Colon,
    text: ':'
  },
  {
    children: new Set(),
    matchedBy: AnyCaseLetter,
    text: 'b'
  },
  {
    children: new Set(),
    matchedBy: Nothing,
    text: ''
  }
]

describe('transform()', () => {
  it('throws an error if no tokens are provided to it', () => {
    expect(() => {
      transform(Word, new Set())
    }).toThrowError(RangeError)
  })
  it('throws if tokens provided are not matched by the type provided', () => {
    expect(() => {
      transform(Word, new Set(notAWord))
    }).toThrowError(TypeError)
  })
  it('returns a new token', () => {
    const res     = transform(Word, new Set(word));

    expect(res.text).toBe(word.map(w => w.text).join(''))
    expect(res.matchedBy).toBe(Word)
    expect(res.children).toEqual(new Set(word))
  })
})
