import { Either, Glyph, Many } from '@app/monads'

/**
 * The essential Nothing type. Basically matches groups of tokens for which
 * the concatenation of their text content equals an empty string.
 * Enables nice type definitions such as
 * `Word = Many(Letters).separatedBy(Nothing)`
 * An utility is provided to intersperse your starting chars with empty chars
 * (empty strings) matching the Nothing type
 */
export const Nothing = Glyph('')

export const LowercaseA = Glyph('a', 'LowercaseA')
export const LowercaseB = Glyph('b', 'LowercaseB')
export const LowercaseC = Glyph('c', 'LowercaseC')
export const LowercaseD = Glyph('d', 'LowercaseD')
export const LowercaseE = Glyph('e', 'LowercaseE')
export const LowercaseF = Glyph('f', 'LowercaseF')
export const LowercaseG = Glyph('g', 'LowercaseG')
export const LowercaseH = Glyph('h', 'LowercaseH')
export const LowercaseI = Glyph('i', 'LowercaseI')
export const LowercaseJ = Glyph('j', 'LowercaseJ')
export const LowercaseK = Glyph('k', 'LowercaseK')
export const LowercaseL = Glyph('l', 'LowercaseL')
export const LowercaseM = Glyph('m', 'LowercaseM')
export const LowercaseN = Glyph('n', 'LowercaseN')
export const LowercaseO = Glyph('o', 'LowercaseO')
export const LowercaseP = Glyph('p', 'LowercaseP')
export const LowercaseQ = Glyph('q', 'LowercaseQ')
export const LowercaseR = Glyph('r', 'LowercaseR')
export const LowercaseS = Glyph('s', 'LowercaseS')
export const LowercaseT = Glyph('t', 'LowercaseT')
export const LowercaseU = Glyph('u', 'LowercaseU')
export const LowercaseV = Glyph('v', 'LowercaseV')
export const LowercaseW = Glyph('w', 'LowercaseW')
export const LowercaseX = Glyph('x', 'LowercaseX')
export const LowercaseY = Glyph('y', 'LowercaseY')
export const LowercaseZ = Glyph('z', 'LowercaseZ')

export const LowerCaseLetter = Either([
  LowercaseA, LowercaseB, LowercaseC, LowercaseD, LowercaseE, LowercaseF,
  LowercaseG, LowercaseH, LowercaseI, LowercaseJ, LowercaseK, LowercaseL,
  LowercaseM, LowercaseN, LowercaseO, LowercaseP, LowercaseQ, LowercaseR,
  LowercaseS, LowercaseT, LowercaseU, LowercaseV, LowercaseW, LowercaseX,
  LowercaseY, LowercaseZ,
], 'LowercaseLetter')

export const UppercaseA = Glyph('A', 'UppercaseA')
export const UppercaseB = Glyph('B', 'UppercaseB')
export const UppercaseC = Glyph('C', 'UppercaseC')
export const UppercaseD = Glyph('D', 'UppercaseD')
export const UppercaseE = Glyph('E', 'UppercaseE')
export const UppercaseF = Glyph('F', 'UppercaseF')
export const UppercaseG = Glyph('G', 'UppercaseG')
export const UppercaseH = Glyph('H', 'UppercaseH')
export const UppercaseI = Glyph('I', 'UppercaseI')
export const UppercaseJ = Glyph('J', 'UppercaseJ')
export const UppercaseK = Glyph('K', 'UppercaseK')
export const UppercaseL = Glyph('L', 'UppercaseL')
export const UppercaseM = Glyph('M', 'UppercaseM')
export const UppercaseN = Glyph('N', 'UppercaseN')
export const UppercaseO = Glyph('O', 'UppercaseO')
export const UppercaseP = Glyph('P', 'UppercaseP')
export const UppercaseQ = Glyph('Q', 'UppercaseQ')
export const UppercaseR = Glyph('R', 'UppercaseR')
export const UppercaseS = Glyph('S', 'UppercaseS')
export const UppercaseT = Glyph('T', 'UppercaseT')
export const UppercaseU = Glyph('U', 'UppercaseU')
export const UppercaseV = Glyph('V', 'UppercaseV')
export const UppercaseW = Glyph('W', 'UppercaseW')
export const UppercaseX = Glyph('X', 'UppercaseX')
export const UppercaseY = Glyph('Y', 'UppercaseY')
export const UppercaseZ = Glyph('Z', 'UppercaseZ')

export const UpperCaseLetter = Either([
UppercaseA, UppercaseB, UppercaseC, UppercaseD, UppercaseE, UppercaseF,
UppercaseG, UppercaseH, UppercaseI, UppercaseJ, UppercaseK, UppercaseL,
UppercaseM, UppercaseN, UppercaseO, UppercaseP, UppercaseQ, UppercaseR,
UppercaseS, UppercaseT, UppercaseU, UppercaseV, UppercaseW, UppercaseX,
UppercaseY, UppercaseZ,
], 'UpperCaseLetter')

export const AnyCaseLetter =
  Either([LowerCaseLetter, UpperCaseLetter], 'AnyCaseLetter')

export const LeftParen          = Glyph('(', 'LeftParen')
export const RightParen         = Glyph('(', 'RightParen')
export const LeftSquareBracket  = Glyph('[', 'LeftSquareBracket')
export const RightSquareBracket = Glyph(']', 'RightSquareBracket')
export const LeftCurly          = Glyph('{', 'LeftCurly')
export const RightCurly         = Glyph('}', 'RightCurly')
export const Slash              = Glyph('/', 'Slash')
export const Ampersand          = Glyph('&', 'Ampersand')
export const Percentage         = Glyph('%', 'Percentage')
export const Exclamation        = Glyph('!', 'Exclamation')
export const DoubleQuote        = Glyph('"', 'DoubleQuote')
export const Sharp              = Glyph('#', 'Sharp')
export const Dollar             = Glyph('$', 'Dollar')
export const Equals             = Glyph('=', 'Equals')
export const LeftInterr         = Glyph('¿', 'LeftInterr')
export const RightInterr        = Glyph('?', 'RightInterr')
export const BackSlash          = Glyph('\\', 'backSlash')
export const LeftExclamation    = Glyph('¡', 'LeftExclamation')
export const Pipe               = Glyph('|', 'Pipe')
export const Plus               = Glyph('+', 'Plus')
export const Asterisk           = Glyph('*', 'Asterisk')
export const Tilde              = Glyph('~', 'Tilde')
export const Circumflex         = Glyph('^', 'Circumflex')
export const Backtick           = Glyph('`', 'Backtick')
export const Dash               = Glyph('-', 'Dash')
export const LoDash             = Glyph('_', 'LoDash')
export const Dot                = Glyph('.', 'Dot')
export const Comma              = Glyph(',', 'Comma')
export const Colon              = Glyph(':', 'Colon')
export const SemiColon          = Glyph(';', 'SemiColon')
export const Degree             = Glyph('°', 'Degree')
export const Eye                = Glyph('¬', 'Eye')
export const At                 = Glyph('@', 'At')

export const Zero  = Glyph('0', 'Zero')
export const One   = Glyph('1', 'One')
export const Two   = Glyph('2', 'Two')
export const Three = Glyph('3', 'Three')
export const Four  = Glyph('4', 'Four')
export const Five  = Glyph('5', 'Five')
export const Six   = Glyph('6', 'Six')
export const Seven = Glyph('7', 'Seven')
export const Eight = Glyph('8', 'Eight')
export const Nine  = Glyph('9', 'Nine')

export const Digit = Either(
  [Zero, One, Two, Three, Four, Five, Seven, Eight, Nine]
, 'Digit')

export const Number = Many(Digit, 'Number').separatedBy(Nothing)

