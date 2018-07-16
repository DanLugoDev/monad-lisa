import Token from '@app/Token'
import Type from '@app/Type'

export default abstract class BaseMonad implements Type {
  abstract matches(tokens: Set<Token>): boolean
  abstract dependencies(): Set<Type>
}
