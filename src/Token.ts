import Type from './Type'

/**
 * A token, in common parsing argo token, represents an indivisible
 * unit of source code, breaking a token up into further smaller parts
 * is of no use for a language interpreter, since the smaller subparts are not
 * relevant or outright meaningless to the interpretation of the source code.
 * For example a parser has no need to know individual digits in a number,
 * or individual letters in a word.
 * However in this parser, it is allowed to break up tokens up or
 * rather create new higher order tokens by building them up from
 * other tokens which are contained within these.
 * The consumer of this type can interpret it as a algebraic set,
 * with operations described by the attributes of the data structure.
 */
export default interface Token {
  /**
   * Reference to the Type that matched this token's children.
   * It is not necessarily the only type that can match this token's children.
   */
  readonly matchedBy: Type
  /**
   * The underlying text that this token represents, made up from the
   * concatenation (in-order) of all of the childrens' text, down until
   * undivisible tokens letters, digits, symbols, collectively called glyphs.
   * @see {Glyph}
   */
  readonly text: string
  /**
   * The set of children that matches the {Type} that generated this token.
   * Other children could match, and other types could match these same
   * children.
   */
  readonly children: ReadonlySet<Token>
}
