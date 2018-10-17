import Either from '@app/descriptors/Either'

import { LowercaseC, Nothing, Tokenizer, Word } from './builtin'

import Glyph from '@app/descriptors/Glyph'
import Many from '@app/descriptors/Many'
import Sequence from '@app/descriptors/Sequence'
import transform from '@app/parsing/transform'
import Token from '@app/Token'
import { intersperseWithNothing } from '@app/utils'

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
