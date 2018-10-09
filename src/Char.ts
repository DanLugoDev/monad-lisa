/**
 * A char is an string of length one or zero.
 */
type Char = string
export default Char

/**
 * Determines wheter a given x is a Char. A char is an string of length one
 * or a zero-length one (to allow for Nothing to be checked as a Char in a
 * Array<Char> to be passed in to the corresponding functions).
 * @see Nothing
 * @param x The x to be tested
 */
export const isChar = (x: any): x is Char =>
  typeof x === 'string' && x.length <= 1
