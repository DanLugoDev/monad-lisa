import Token from '@app/Token'

/**
 * @returns A token representing the root of the abstract syntax tree,
 */
type Parser = (sourceCode: string) => Token
export default Parser 