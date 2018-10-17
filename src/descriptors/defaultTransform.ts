import Token from '@app/Token'
import Type from '@app/Type'
import { reduceWithInitial } from '@app/utils/set'

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
    text: reduceWithInitial<Token, string>(
      (str, { text }) => (str += text),
      '',
      tokens
    )
  }
}
