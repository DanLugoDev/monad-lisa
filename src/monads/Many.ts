import SingleMonad from '@app/monads/int/SingleMonad'
import Token from '@app/Token'
import Type from '@app/Type'

export interface Many extends Type {
  separatedBy(separator: Type): this
  allowTraillingSeparator(): this
}

class _Many extends SingleMonad {
  private traillingSeparatorAllowed: boolean = false
  private separator: Type|undefined = undefined

  separatedBy(type: Type): this {
    this.separator = type
    return this
  }

  allowTraillingSeparator() {
    if (typeof this.separator === 'undefined') {
      throw new Error('Specify separator before calling this method')
    }
    if (this.traillingSeparatorAllowed) {
      throw new Error('Method called twice')
    }
    this.traillingSeparatorAllowed = true
    return this
  }

  matches(tokens: Set<Token>): boolean {
    if (typeof this.separator === 'undefined') {
      throw new Error('Specify separator first')
    }
    if (tokens.size < 1) return false
    const separator = <Type>this.separator
    const trailling = this.traillingSeparatorAllowed
    // MDN says insertion order
    const tokenList = Array.from(tokens)
    // even - indexed tokens are of the type of "of"
    const actualTokens = tokenList.filter((_, i) => i % 2 === 0)
    // odd - indexed tokens are of the type of the separator (separatedBy)
    const separators = actualTokens.filter((_, i) => i % 2 === 1)

    // if any of the candidate tokens don't match the "of" type, don't match.
    if (actualTokens.some(token => token.matchedBy !== this.of)) return false

    // if any of the candidate separators is of the wrong type, there's no match
    if (separators.some(sep => sep.matchedBy !== separator)) return false

    if (trailling) {
      return separators.length === actualTokens.length -1
        || separators.length === actualTokens.length
    } else {
      return separators.length === actualTokens.length
    }
  }
}

export const Many = (of: Type, name?: string): Many => new _Many(of, name)