import Type from '@app/Type'

export interface Many extends Type {
  separator?: Type
  traillingSeparatorAllowed: boolean
  separatedBy(separator: Type): Many
  allowTraillingSeparator(): Many
}

const Many = (of: Type, name?: string): Many => ({
  name,
  traillingSeparatorAllowed: false,
  allowTraillingSeparator() {
    if (typeof this.separator === 'undefined') {
      throw new Error('Specify separator before calling this method')
    }
    if (this.traillingSeparatorAllowed) {
      throw new Error('Method called twice')
    }
    this.traillingSeparatorAllowed = true
    return this
  },
  dependencies() {
    return new Set([of, ...of.dependencies()])
  },
  matches(tokens) {
    if (typeof this.separator === 'undefined') {
      throw new ReferenceError('Specify separator first')
    }
    if (tokens.size < 1) return false
    const separator = this.separator as Type
    const trailling = this.traillingSeparatorAllowed
    // MDN says insertion order
    const tokenList = Array.from(tokens)
    // even - indexed tokens are of the type of "of"
    const actualTokens = tokenList.filter((_, i) => i % 2 === 0)
    // odd - indexed tokens are of the type of the separator (separatedBy)
    const separators = actualTokens.filter((_, i) => i % 2 === 1)

    // if any of the candidate tokens don't match the "of" type, don't match.
    if (actualTokens.some(token => token.matchedBy !== of)) return false

    // if any of the candidate separators is of the wrong type, there's no match
    if (separators.some(sep => sep.matchedBy !== separator)) return false

    if (trailling) {
      return (
        separators.length === actualTokens.length - 1 ||
        separators.length === actualTokens.length
      )
    } else {
      return separators.length === actualTokens.length
    }
  },
  separatedBy(separator) {
    this.separator = separator
    return this
  }
})

export default Many
