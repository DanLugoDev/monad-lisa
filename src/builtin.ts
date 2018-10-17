import Either from './descriptors/Either'
import Glyph from './descriptors/Glyph'
import Many from './descriptors/Many'
import Type from './Type'

/**
 * The tokenizer type is the one that will be found in the `matchedBy` attribute
 * of tokens in the initial tokenizing process. It's what should normally be
 * provided to the `matchedByType` parameter of the Glyph constructor.
 * @see Glyph
 */
export const Tokenizer: Type = {
  getName() {
    return 'Tokenizer'
  },
  dependencies() {
    return new Set()
  },
  matches() {
    return false
  },
  transform() {
    throw new Error('Fatal error: transform() called on Tokenizer')
  }
}

/**
 * The essential Nothing type. Basically matches groups of tokens for which
 * the concatenation of their text content equals an empty string.
 * Enables nice type definitions such as
 * `Word = Many(Letters).separatedBy(Nothing)`
 * An utility is provided to intersperse your starting chars with empty chars
 * (empty strings) matching the Nothing type
 */
export const Nothing = Glyph(Tokenizer, '', 'Nothing')

export const LowercaseA = Glyph(Tokenizer, 'a', 'LowercaseA')
export const LowercaseB = Glyph(Tokenizer, 'b', 'LowercaseB')
export const LowercaseC = Glyph(Tokenizer, 'c', 'LowercaseC')
export const LowercaseD = Glyph(Tokenizer, 'd', 'LowercaseD')
export const LowercaseE = Glyph(Tokenizer, 'e', 'LowercaseE')
export const LowercaseF = Glyph(Tokenizer, 'f', 'LowercaseF')
export const LowercaseG = Glyph(Tokenizer, 'g', 'LowercaseG')
export const LowercaseH = Glyph(Tokenizer, 'h', 'LowercaseH')
export const LowercaseI = Glyph(Tokenizer, 'i', 'LowercaseI')
export const LowercaseJ = Glyph(Tokenizer, 'j', 'LowercaseJ')
export const LowercaseK = Glyph(Tokenizer, 'k', 'LowercaseK')
export const LowercaseL = Glyph(Tokenizer, 'l', 'LowercaseL')
export const LowercaseM = Glyph(Tokenizer, 'm', 'LowercaseM')
export const LowercaseN = Glyph(Tokenizer, 'n', 'LowercaseN')
export const LowercaseO = Glyph(Tokenizer, 'o', 'LowercaseO')
export const LowercaseP = Glyph(Tokenizer, 'p', 'LowercaseP')
export const LowercaseQ = Glyph(Tokenizer, 'q', 'LowercaseQ')
export const LowercaseR = Glyph(Tokenizer, 'r', 'LowercaseR')
export const LowercaseS = Glyph(Tokenizer, 's', 'LowercaseS')
export const LowercaseT = Glyph(Tokenizer, 't', 'LowercaseT')
export const LowercaseU = Glyph(Tokenizer, 'u', 'LowercaseU')
export const LowercaseV = Glyph(Tokenizer, 'v', 'LowercaseV')
export const LowercaseW = Glyph(Tokenizer, 'w', 'LowercaseW')
export const LowercaseX = Glyph(Tokenizer, 'x', 'LowercaseX')
export const LowercaseY = Glyph(Tokenizer, 'y', 'LowercaseY')
export const LowercaseZ = Glyph(Tokenizer, 'z', 'LowercaseZ')

export const LowerCaseLetter = Either(
  [
    LowercaseA,
    LowercaseB,
    LowercaseC,
    LowercaseD,
    LowercaseE,
    LowercaseF,
    LowercaseG,
    LowercaseH,
    LowercaseI,
    LowercaseJ,
    LowercaseK,
    LowercaseL,
    LowercaseM,
    LowercaseN,
    LowercaseO,
    LowercaseP,
    LowercaseQ,
    LowercaseR,
    LowercaseS,
    LowercaseT,
    LowercaseU,
    LowercaseV,
    LowercaseW,
    LowercaseX,
    LowercaseY,
    LowercaseZ
  ],
  'LowercaseLetter'
)

export const UppercaseA = Glyph(Tokenizer, 'A', 'UppercaseA')
export const UppercaseB = Glyph(Tokenizer, 'B', 'UppercaseB')
export const UppercaseC = Glyph(Tokenizer, 'C', 'UppercaseC')
export const UppercaseD = Glyph(Tokenizer, 'D', 'UppercaseD')
export const UppercaseE = Glyph(Tokenizer, 'E', 'UppercaseE')
export const UppercaseF = Glyph(Tokenizer, 'F', 'UppercaseF')
export const UppercaseG = Glyph(Tokenizer, 'G', 'UppercaseG')
export const UppercaseH = Glyph(Tokenizer, 'H', 'UppercaseH')
export const UppercaseI = Glyph(Tokenizer, 'I', 'UppercaseI')
export const UppercaseJ = Glyph(Tokenizer, 'J', 'UppercaseJ')
export const UppercaseK = Glyph(Tokenizer, 'K', 'UppercaseK')
export const UppercaseL = Glyph(Tokenizer, 'L', 'UppercaseL')
export const UppercaseM = Glyph(Tokenizer, 'M', 'UppercaseM')
export const UppercaseN = Glyph(Tokenizer, 'N', 'UppercaseN')
export const UppercaseO = Glyph(Tokenizer, 'O', 'UppercaseO')
export const UppercaseP = Glyph(Tokenizer, 'P', 'UppercaseP')
export const UppercaseQ = Glyph(Tokenizer, 'Q', 'UppercaseQ')
export const UppercaseR = Glyph(Tokenizer, 'R', 'UppercaseR')
export const UppercaseS = Glyph(Tokenizer, 'S', 'UppercaseS')
export const UppercaseT = Glyph(Tokenizer, 'T', 'UppercaseT')
export const UppercaseU = Glyph(Tokenizer, 'U', 'UppercaseU')
export const UppercaseV = Glyph(Tokenizer, 'V', 'UppercaseV')
export const UppercaseW = Glyph(Tokenizer, 'W', 'UppercaseW')
export const UppercaseX = Glyph(Tokenizer, 'X', 'UppercaseX')
export const UppercaseY = Glyph(Tokenizer, 'Y', 'UppercaseY')
export const UppercaseZ = Glyph(Tokenizer, 'Z', 'UppercaseZ')

export const UpperCaseLetter = Either(
  [
    UppercaseA,
    UppercaseB,
    UppercaseC,
    UppercaseD,
    UppercaseE,
    UppercaseF,
    UppercaseG,
    UppercaseH,
    UppercaseI,
    UppercaseJ,
    UppercaseK,
    UppercaseL,
    UppercaseM,
    UppercaseN,
    UppercaseO,
    UppercaseP,
    UppercaseQ,
    UppercaseR,
    UppercaseS,
    UppercaseT,
    UppercaseU,
    UppercaseV,
    UppercaseW,
    UppercaseX,
    UppercaseY,
    UppercaseZ
  ],
  'UpperCaseLetter'
)

export const AnyCaseLetter = Either(
  [LowerCaseLetter, UpperCaseLetter],
  'AnyCaseLetter'
)

export const Word = Many(AnyCaseLetter).separatedBy(Nothing)

export const LeftParen = Glyph(Tokenizer, '(', 'LeftParen')
export const RightParen = Glyph(Tokenizer, '(', 'RightParen')
export const LeftSquareBracket = Glyph(Tokenizer, '[', 'LeftSquareBracket')
export const RightSquareBracket = Glyph(Tokenizer, ']', 'RightSquareBracket')
export const LeftCurly = Glyph(Tokenizer, '{', 'LeftCurly')
export const RightCurly = Glyph(Tokenizer, '}', 'RightCurly')
export const Slash = Glyph(Tokenizer, '/', 'Slash')
export const Ampersand = Glyph(Tokenizer, '&', 'Ampersand')
export const Percentage = Glyph(Tokenizer, '%', 'Percentage')
export const Exclamation = Glyph(Tokenizer, '!', 'Exclamation')
export const DoubleQuote = Glyph(Tokenizer, '"', 'DoubleQuote')
export const Sharp = Glyph(Tokenizer, '#', 'Sharp')
export const Dollar = Glyph(Tokenizer, '$', 'Dollar')
export const Equals = Glyph(Tokenizer, '=', 'Equals')
export const LeftInterr = Glyph(Tokenizer, '¿', 'LeftInterr')
export const RightInterr = Glyph(Tokenizer, '?', 'RightInterr')
export const BackSlash = Glyph(Tokenizer, '\\', 'backSlash')
export const LeftExclamation = Glyph(Tokenizer, '¡', 'LeftExclamation')
export const Pipe = Glyph(Tokenizer, '|', 'Pipe')
export const Plus = Glyph(Tokenizer, '+', 'Plus')
export const Asterisk = Glyph(Tokenizer, '*', 'Asterisk')
export const Tilde = Glyph(Tokenizer, '~', 'Tilde')
export const Circumflex = Glyph(Tokenizer, '^', 'Circumflex')
export const Backtick = Glyph(Tokenizer, '`', 'Backtick')
export const Dash = Glyph(Tokenizer, '-', 'Dash')
export const LoDash = Glyph(Tokenizer, '_', 'LoDash')
export const Dot = Glyph(Tokenizer, '.', 'Dot')
export const Comma = Glyph(Tokenizer, ',', 'Comma')
export const Colon = Glyph(Tokenizer, ':', 'Colon')
export const SemiColon = Glyph(Tokenizer, ';', 'SemiColon')
export const Degree = Glyph(Tokenizer, '°', 'Degree')
export const Eye = Glyph(Tokenizer, '¬', 'Eye')
export const At = Glyph(Tokenizer, '@', 'At')

export const Zero = Glyph(Tokenizer, '0', 'Zero')
export const One = Glyph(Tokenizer, '1', 'One')
export const Two = Glyph(Tokenizer, '2', 'Two')
export const Three = Glyph(Tokenizer, '3', 'Three')
export const Four = Glyph(Tokenizer, '4', 'Four')
export const Five = Glyph(Tokenizer, '5', 'Five')
export const Six = Glyph(Tokenizer, '6', 'Six')
export const Seven = Glyph(Tokenizer, '7', 'Seven')
export const Eight = Glyph(Tokenizer, '8', 'Eight')
export const Nine = Glyph(Tokenizer, '9', 'Nine')

export const Digit = Either(
  [Zero, One, Two, Three, Four, Five, Seven, Eight, Nine],
  'Digit'
)

export const NumberGlyph = Many(Digit, 'Number').separatedBy(Nothing)
