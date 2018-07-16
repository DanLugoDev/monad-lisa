import Type from '@app/Type'
import BaseMonad from '@app/monads/int/BaseMonad'

export default abstract class SingleMonad extends BaseMonad {
  constructor(
    protected readonly of: Type,
    public readonly name?: string
  ) { super() }

  dependencies() {
    return this.of.dependencies().add(this.of)
  }
}
