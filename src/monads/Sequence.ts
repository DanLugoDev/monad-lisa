import Type, { Types } from '@app/Type'
import Token from '@app/Token'
import MultiMonad from '@app/monads/int/MultiMonad'

class _Sequence extends MultiMonad {
  matches(tokens: Set<Token>): boolean {
    return tokens && true
  }
}

export const Sequence =
  (of: Types, name?: string): Type => new _Sequence(of, name)
