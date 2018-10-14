import Either from './descriptors/Either'

import { LowercaseC, Nothing, Tokenizer, Word } from './builtin'

import Glyph from './descriptors/Glyph'
import Many from './descriptors/Many'
import Sequence from './descriptors/Sequence'
import transform from './parsing/transform'
import Token from './Token'
import { intersperseWithNothing } from './utils'

const buildTokenizerTokens = (text: string): Set<Token> =>
  new Set(
    intersperseWithNothing(text.split('')).map<Token>(char => ({
      children: new Set(),
      matchedBy: Tokenizer,
      text: char
    }))
  )

const tokens = buildTokenizerTokens(`p { color: red; }`)

console.log(LowercaseC.matches(buildTokenizerTokens('c')))
