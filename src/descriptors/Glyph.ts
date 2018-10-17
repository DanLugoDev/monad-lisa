import Token from '@app/Token'
import Type from '@app/Type'
import { every, reduceWithInitial } from '@app/utils/set'
import defaultTransform from './defaultTransform'

type Glyph = (matchedByType: Type, of: string, name?: string) => Type

const stringifyTokens = (tokens: ReadonlySet<Token>) =>
  reduceWithInitial<Token, string>((str, { text }) => str + text, '', tokens)

/**
 * The glyph descriptor creates types from provided strings, allowing easy
 * creation of keywords. E.g.:
 * ```
 * const VarKeyword = Sequence([lowerCaseA, lowerCaseB, lowerCaseC])
 * // vs
 * const VarKeyWord = Glyph(Tokenizer, 'var')
 * ```
 * @param matchedByType The glyph created, will only match the tokens provided
 * if those, in addition to their strings concatenated matching the provided
 * string, their `matchedBy` attributes are of the type `matchedByType`. This
 * prevents infinite loops of Glyph types matching themselves in the parsing
 * process. This parameter is the `Tokenizer` type in built-in glyph types, this
 * type can be found inside the built-in types too for reference.
 * @see Tokenizer
 * @param of The string that the tokens must make up (when their underlying
 * string content is concatenated) for a match to occur
 * @param name Optional name if a readable AST is to be created
 */
const Glyph: Glyph = (matchedByType, of, name) => ({
  getName() {
    return name
  },
  dependencies() {
    return new Set()
  },
  matches(tokens) {
    if (tokens.size === 0) {
      return false
    }
    const tokensAsString = stringifyTokens(tokens)

    const allTokensMatchedByCorrectType = every(
      tokens,
      token => token.matchedBy === matchedByType
    )

    return tokensAsString === of && allTokensMatchedByCorrectType
  },
  transform: defaultTransform
})

export default Glyph
