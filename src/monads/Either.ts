import Token from '@app/Token'
import Type, { Types } from '@app/Type'
import MultiMonad from '@app/monads/int/MultiMonad'

class _Either extends MultiMonad {
  matches(tokens: Set<Token>): boolean {
    return this.of.some(type => type.matches(tokens))
  }
}

export const Either = (of: Types, name?: string): Type => new _Either(of, name)
