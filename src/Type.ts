import Token from '@app/Token'
import { isSet } from './utils'

/**
 * Category theory
 * A type is a set descriptor/linear regression.
 * It matches a set of tokens, and it is said that this set of tokens
 * is of type X.
 * The methods in this interface should be ideally be package level, and
 * the package level internal functions should non-contravariantly accept it
 * (to differentiate it from an empty object), however this is not possible
 * with typescript.
 */
export default interface Type {
  /**
   * Optional if you want a JSON/string representation of the AST.
   */
  readonly name?: string

  /**
   * Returns a set of types on which this type is fundamented and is dependant
   * on them being present in memory for a sucessful and correct matches() call.
   * This contract shall not be broken.
   * Dependencies are then loaded into the constructor @see {Constructor} and
   * checked for referential integrity, name duplication, etc.
   * It's also useful for importing a Root type definition and bringing all of
   * its dependencies with it as oppossed to having to do several imports to
   * feed into a Constructor.
   * @see {Constructor} for details on how this set is used.
   */
  dependencies(): Set<Type>

  /**
   * Given a set of tokens, returns whether this set of tokens represents this
   * type or doesn't.
   */
  matches(tokens: ReadonlySet<Token>): boolean
}

export const isType = (x: any): x is Type => {
  if (typeof x !== 'object') {
    return false
  }
  if (typeof x.matches !== 'function') {
    return false
  }
  if (typeof x.dependencies !== 'function') {
    return false
  }
  if (!isSet(x.dependencies())) {
    return false
  }

  let allDepsAreTypes = true

  for (const dep of x.dependencies()) {
    allDepsAreTypes = isType(dep)
  }

  return allDepsAreTypes
}
