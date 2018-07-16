import Type from '@app/Type'
import Token from '@app/Token'
import BaseMonad from '@app/monads/int/BaseMonad'

import { reduce } from '@app/utils/set'

// tslint:disable-next-line: class-name
class _Glyph extends BaseMonad {
  constructor(
    protected readonly of: string,
    public readonly name?: string,
  ) { super() }

  dependencies() {
    return new Set()
  }

  matches(tokens: Set<Token>): boolean {
    return reduce(tokens, (str, nxtToken) => str + nxtToken, '') === this.of
  }  
}

export default (of: string, name?: string): Type => new _Glyph(of, name)
