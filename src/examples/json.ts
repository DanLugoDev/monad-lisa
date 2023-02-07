import {
  Colon,
  Comma,
  DoubleQuote,
  LeftCurly,
  LeftSquareBracket,
  NumberGlyph,
  RightCurly,
  RightSquareBracket,
  Space,
  Word
} from '@app/builtin'

import Either from '@app/descriptors/Either'
import Many from '@app/descriptors/Many'
import Lazy from '@app/descriptors/Lazy'
import Sequence from '@app/descriptors/Sequence'

const StringContent = Either([
  Space,
  Many(Word)
    .separatedBy(Space)
    .allowTraillingSeparator()
])

const String = Sequence([DoubleQuote, StringContent, DoubleQuote], 'String')

const Array = Lazy()

const Object = Lazy()

const ArrayOrObjItem = Either([Array, Object, NumberGlyph, String])

const ArrayContents = Many(ArrayOrObjItem, 'ArrayContents').separatedBy(Comma)

Array.define(Sequence([LeftSquareBracket, ArrayContents, RightSquareBracket]))

const ObjectKey = Either([Word, NumberGlyph], 'ObjectKey')

const ObjectKeyValuePair = Sequence(
  [ObjectKey, Colon, ArrayOrObjItem],
  'ObjectKeyValuePair'
)

const ObjectContents = Many(ObjectKeyValuePair, 'ObjectContents').separatedBy(
  Comma
)

Object.define(Sequence([LeftCurly, ObjectContents, RightCurly]))
