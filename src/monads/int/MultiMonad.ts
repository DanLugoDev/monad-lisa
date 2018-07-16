import BaseMonad from '@app/monads/int/BaseMonad'
import { Types } from '@app/Type'

export default abstract class MultiMonad extends BaseMonad {
  constructor(
    protected readonly of: Types,
    public readonly name?: string
  ) { super() }

  dependencies() {
    const depsDeps: Types = this.of.map(t => t.dependencies()).flatten()
    return new Set([...this.of, ...depsDeps])
  }
}
