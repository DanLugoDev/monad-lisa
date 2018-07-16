import Token from '@app/Token'
import Type from '@app/Type'


export default (withTypes: Set<Type>, ofTokens: Set<Token>): Set<Set<Token>> =>
{
  return withTypes && ofTokens && new Set()
}