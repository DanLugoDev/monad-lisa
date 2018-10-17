import Type from '@app/Type'
import { assert } from '@app/utils'
import { pickFirst } from '@app/utils/set'
import defaultTransform from './defaultTransform'

export interface Many extends Type {
  separatedBy(separator: Type): Many
  allowTraillingSeparator(): Many
}

const Many = (of: Type, name?: string): Many => {
  let traillingSeparatorAllowed = false
  let separator: Type

  return {
    getName() {
      return name
    },

    allowTraillingSeparator() {
      if (typeof separator === 'undefined') {
        throw new Error('Specify separator before calling this method')
      }
      if (traillingSeparatorAllowed) {
        throw new Error('Method called twice')
      }
      traillingSeparatorAllowed = true
      return this
    },
    dependencies() {
      return new Set([of, ...of.dependencies()])
    },
    matches(tokens) {
      if (typeof separator === 'undefined') {
        throw new ReferenceError('Specify separator first')
      }
      if (tokens.size < 1) return false

      // MDN says insertion order
      const tokenList = Array.from(tokens)
      assert(tokenList.length === tokens.size)
      assert(pickFirst(tokens) === tokenList[0])

      // even - indexed tokens are of the type of "of"
      const actualTokens = tokenList.filter((_, i) => i % 2 === 0)
      assert(actualTokens.length > 0)
      // odd - indexed tokens are of the type of the separator (separatedBy)
      const separators = tokenList.filter((_, i) => i % 2 !== 0)

      // if any of the candidate tokens don't match the "of" type, don't match.
      if (actualTokens.some(token => token.matchedBy !== of)) return false

      // dont check for separators
      if (actualTokens.length === 1) {
        return true
      }
      // if any of the candidate separators is of the wrong type, there's no match
      if (separators.some(sep => sep.matchedBy !== separator)) return false

      if (
        traillingSeparatorAllowed &&
        separators.length === actualTokens.length + 1
      ) {
        return true
      }

      return (
        separators.length === actualTokens.length - 1 ||
        separators.length === actualTokens.length
      )
    },
    separatedBy(separatorType) {
      separator = separatorType
      return this
    },
    transform: defaultTransform
  }
}

export default Many
