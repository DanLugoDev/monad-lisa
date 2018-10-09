import Token from '@app/Token'
import Type from '@app/Type'
import { reduceWithInitial } from '../utils/set'

type Transform = (
  matchingType: Type,
  matchedTokens: ReadonlySet<Token>
) => Token

/**
 * Given a set of tokens, and a type that matches them. Checks that the type
 * actually matches, and returns a new token with `matchedTokens` as children,
 * their text concatenated as `text`, and matchedBy set to `matchingType`.
 * @param matchedTokens The tokens that were mached by matchingType
 * @param matchingType The type that maches the tokens
 */
const transform: Transform = (matchingType, matchedTokens) => {
  if (matchedTokens.size < 1) {
    throw new TypeError(
      'Must provide tokens to transform(), an empty set was provided'
    )
  }

  if (!matchingType.matches(matchedTokens)) {
    throw new Error(
      "matchingType argument given to transform() doesn't match the tokens supplied, there is probably an error in the calling code"
    )
  }

  return {
    children: matchedTokens,
    matchedBy: matchingType,
    text: reduceWithInitial<Token, string>(
      (str, { text }) => str + text,
      '',
      matchedTokens
    )
  }
}

export default transform
