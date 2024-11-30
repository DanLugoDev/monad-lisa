import Token from '@app/Token'
import Type from '@app/Type'
import { reduce } from '@app/utils/set'

export default function defaultTransform(
  this: Type,
  tokens: Set<Token>
): Token {
  if (!this.matches(tokens)) {
    throw new Error('transform() called on tokens not matched by this type')
  }
  return {
    children: tokens,
    matchedBy: this,
    text: reduce<Token, string>(
      (
        str,
        { text } = {
          children: [],
          matchedBy: {},
          text: ''
        }
      ) => (str += text),
      '',
      tokens
    )
  }
}
