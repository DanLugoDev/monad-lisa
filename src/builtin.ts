import Either from '@app/descriptors/Either'
import Glyph from '@app/descriptors/Glyph'
import Many from '@app/descriptors/Many'
import Type from '@app/Type'

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

/**
 * `a`
 */
export const LowercaseA = Glyph(Tokenizer, 'a', 'LowercaseA')
/**
 * `b`
 */
export const LowercaseB = Glyph(Tokenizer, 'b', 'LowercaseB')
/**
 * `c`
 */
export const LowercaseC = Glyph(Tokenizer, 'c', 'LowercaseC')
/**
 * `d`
 */
export const LowercaseD = Glyph(Tokenizer, 'd', 'LowercaseD')
/**
 * `e`
 */
export const LowercaseE = Glyph(Tokenizer, 'e', 'LowercaseE')
/**
 * `f`
 */
export const LowercaseF = Glyph(Tokenizer, 'f', 'LowercaseF')
/**
 * `g`
 */
export const LowercaseG = Glyph(Tokenizer, 'g', 'LowercaseG')
/**
 * `h`
 */
export const LowercaseH = Glyph(Tokenizer, 'h', 'LowercaseH')
/**
 * `i`
 */
export const LowercaseI = Glyph(Tokenizer, 'i', 'LowercaseI')
/**
 * `j`
 */
export const LowercaseJ = Glyph(Tokenizer, 'j', 'LowercaseJ')
/**
 * `k`
 */
export const LowercaseK = Glyph(Tokenizer, 'k', 'LowercaseK')
/**
 * `l`
 */
export const LowercaseL = Glyph(Tokenizer, 'l', 'LowercaseL')
/**
 * `m`
 */
export const LowercaseM = Glyph(Tokenizer, 'm', 'LowercaseM')
/**
 * `n`
 */
export const LowercaseN = Glyph(Tokenizer, 'n', 'LowercaseN')
/**
 * `o`
 */
export const LowercaseO = Glyph(Tokenizer, 'o', 'LowercaseO')
/**
 * `p`
 */
export const LowercaseP = Glyph(Tokenizer, 'p', 'LowercaseP')
/**
 * `q`
 */
export const LowercaseQ = Glyph(Tokenizer, 'q', 'LowercaseQ')
/**
 * `r`
 */
export const LowercaseR = Glyph(Tokenizer, 'r', 'LowercaseR')
/**
 * `s`
 */
export const LowercaseS = Glyph(Tokenizer, 's', 'LowercaseS')
/**
 * `t`
 */
export const LowercaseT = Glyph(Tokenizer, 't', 'LowercaseT')
/**
 * `u`
 */
export const LowercaseU = Glyph(Tokenizer, 'u', 'LowercaseU')
/**
 * `v`
 */
export const LowercaseV = Glyph(Tokenizer, 'v', 'LowercaseV')
/**
 * `w`
 */
export const LowercaseW = Glyph(Tokenizer, 'w', 'LowercaseW')
/**
 * `x`
 */
export const LowercaseX = Glyph(Tokenizer, 'x', 'LowercaseX')
/**
 * `y`
 */
export const LowercaseY = Glyph(Tokenizer, 'y', 'LowercaseY')
/**
 * `z`
 */
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

/**
 * `A`
 */
export const UppercaseA = Glyph(Tokenizer, 'A', 'UppercaseA')
/**
 * `B`
 */
export const UppercaseB = Glyph(Tokenizer, 'B', 'UppercaseB')
/**
 * `C`
 */
export const UppercaseC = Glyph(Tokenizer, 'C', 'UppercaseC')
/**
 * `D`
 */
export const UppercaseD = Glyph(Tokenizer, 'D', 'UppercaseD')
/**
 * `E`
 */
export const UppercaseE = Glyph(Tokenizer, 'E', 'UppercaseE')
/**
 * `F`
 */
export const UppercaseF = Glyph(Tokenizer, 'F', 'UppercaseF')
/**
 * `G`
 */
export const UppercaseG = Glyph(Tokenizer, 'G', 'UppercaseG')
/**
 * `H`
 */
export const UppercaseH = Glyph(Tokenizer, 'H', 'UppercaseH')
/**
 * `I`
 */
export const UppercaseI = Glyph(Tokenizer, 'I', 'UppercaseI')
/**
 * `J`
 */
export const UppercaseJ = Glyph(Tokenizer, 'J', 'UppercaseJ')
/**
 * `K`
 */
export const UppercaseK = Glyph(Tokenizer, 'K', 'UppercaseK')
/**
 * `L`
 */
export const UppercaseL = Glyph(Tokenizer, 'L', 'UppercaseL')
/**
 * `M`
 */
export const UppercaseM = Glyph(Tokenizer, 'M', 'UppercaseM')
/**
 * `N`
 */
export const UppercaseN = Glyph(Tokenizer, 'N', 'UppercaseN')
/**
 * `O`
 */
export const UppercaseO = Glyph(Tokenizer, 'O', 'UppercaseO')
/**
 * `P`
 */
export const UppercaseP = Glyph(Tokenizer, 'P', 'UppercaseP')
/**
 * `Q`
 */
export const UppercaseQ = Glyph(Tokenizer, 'Q', 'UppercaseQ')
/**
 * `R`
 */
export const UppercaseR = Glyph(Tokenizer, 'R', 'UppercaseR')
/**
 * `S`
 */
export const UppercaseS = Glyph(Tokenizer, 'S', 'UppercaseS')
/**
 * `T`
 */
export const UppercaseT = Glyph(Tokenizer, 'T', 'UppercaseT')
/**
 * `U`
 */
export const UppercaseU = Glyph(Tokenizer, 'U', 'UppercaseU')
/**
 * `V`
 */
export const UppercaseV = Glyph(Tokenizer, 'V', 'UppercaseV')
/**
 * `W`
 */
export const UppercaseW = Glyph(Tokenizer, 'W', 'UppercaseW')
/**
 * `X`
 */
export const UppercaseX = Glyph(Tokenizer, 'X', 'UppercaseX')
/**
 * `Y`
 */
export const UppercaseY = Glyph(Tokenizer, 'Y', 'UppercaseY')
/**
 * `Z`
 */
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

/**
 * `(`
 */
export const LeftParen = Glyph(Tokenizer, '(', 'LeftParen')
/**
 * `(`
 */
export const RightParen = Glyph(Tokenizer, '(', 'RightParen')
/**
 * `[`
 */
export const LeftSquareBracket = Glyph(Tokenizer, '[', 'LeftSquareBracket')
/**
 * `]`
 */
export const RightSquareBracket = Glyph(Tokenizer, ']', 'RightSquareBracket')
/**
 * `{`
 */
export const LeftCurly = Glyph(Tokenizer, '{', 'LeftCurly')
/**
 * `}`
 */
export const RightCurly = Glyph(Tokenizer, '}', 'RightCurly')
/**
 * `/`
 */
export const Slash = Glyph(Tokenizer, '/', 'Slash')
/**
 * `&`
 */
export const Ampersand = Glyph(Tokenizer, '&', 'Ampersand')
/**
 * `%`
 */
export const Percentage = Glyph(Tokenizer, '%', 'Percentage')
/**
 * `!`
 */
export const Exclamation = Glyph(Tokenizer, '!', 'Exclamation')
/**
 * `"`
 */
export const DoubleQuote = Glyph(Tokenizer, '"', 'DoubleQuote')
/**
 * `#`
 */
export const Sharp = Glyph(Tokenizer, '#', 'Sharp')
/**
 * `$`
 */
export const Dollar = Glyph(Tokenizer, '$', 'Dollar')
/**
 * `=`
 */
export const Equals = Glyph(Tokenizer, '=', 'Equals')
/**
 * `¿`
 */
export const LeftInterr = Glyph(Tokenizer, '¿', 'LeftInterr')
/**
 * `?`
 */
export const RightInterr = Glyph(Tokenizer, '?', 'RightInterr')
/**
 * `\`
 */
export const BackSlash = Glyph(Tokenizer, '\\', 'backSlash')
/**
 * `¡`
 */
export const LeftExclamation = Glyph(Tokenizer, '¡', 'LeftExclamation')
/**
 * `|`
 */
export const Pipe = Glyph(Tokenizer, '|', 'Pipe')
/**
 * `+`
 */
export const Plus = Glyph(Tokenizer, '+', 'Plus')
/**
 * `*`
 */
export const Asterisk = Glyph(Tokenizer, '*', 'Asterisk')
/**
 * `~`
 */
export const Tilde = Glyph(Tokenizer, '~', 'Tilde')
/**
 * `^`
 */
export const Circumflex = Glyph(Tokenizer, '^', 'Circumflex')
/**
 * ```
 */
export const Backtick = Glyph(Tokenizer, '`', 'Backtick')
/**
 * `-`
 */
export const Dash = Glyph(Tokenizer, '-', 'Dash')
/**
 * `_`
 */
export const LoDash = Glyph(Tokenizer, '_', 'LoDash')
/**
 * `.`
 */
export const Dot = Glyph(Tokenizer, '.', 'Dot')
/**
 * `,`
 */
export const Comma = Glyph(Tokenizer, ',', 'Comma')
/**
 * `:`
 */
export const Colon = Glyph(Tokenizer, ':', 'Colon')
/**
 * `;`
 */
export const SemiColon = Glyph(Tokenizer, ';', 'SemiColon')
/**
 * `°`
 */
export const Degree = Glyph(Tokenizer, '°', 'Degree')
/**
 * `¬`
 */
export const Eye = Glyph(Tokenizer, '¬', 'Eye')
/**
 * `@`
 */
export const At = Glyph(Tokenizer, '@', 'At')

/**
 * `0`
 */
export const Zero = Glyph(Tokenizer, '0', 'Zero')
/**
 * `1`
 */
export const One = Glyph(Tokenizer, '1', 'One')
/**
 * `2`
 */
export const Two = Glyph(Tokenizer, '2', 'Two')
/**
 * `3`
 */
export const Three = Glyph(Tokenizer, '3', 'Three')
/**
 * `4`
 */
export const Four = Glyph(Tokenizer, '4', 'Four')
/**
 * `5`
 */
export const Five = Glyph(Tokenizer, '5', 'Five')
/**
 * `6`
 */
export const Six = Glyph(Tokenizer, '6', 'Six')
/**
 * `7`
 */
export const Seven = Glyph(Tokenizer, '7', 'Seven')
/**
 * `8`
 */
export const Eight = Glyph(Tokenizer, '8', 'Eight')
/**
 * `9`
 */
export const Nine = Glyph(Tokenizer, '9', 'Nine')

export const Digit = Either(
  [Zero, One, Two, Three, Four, Five, Seven, Eight, Nine],
  'Digit'
)

export const NumberGlyph = Many(Digit, 'Number').separatedBy(Nothing)
