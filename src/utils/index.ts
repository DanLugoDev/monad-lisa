import Char, { isChar } from '../Char'

type Chars = ReadonlyArray<Char>

export const intersperseWith = (interspersor: string, chars: Chars): Chars => {
  if (!chars.every(isChar)) throw new TypeError()

  const out: Char[] = []

  chars.forEach((char, i) => {
    out.push(char)
    if (i === chars.length - 1) return
    out.push(interspersor)
  })

  return out
}

export const intersperseWithNothing = (chars: Chars): Chars =>
  intersperseWith('', chars)

type Zipper<T, U, V> = (a: T, b: U) => V

/**
 * @param zipper
 * @param a
 * @param b
 * @param out
 * @throws {Error} If the lists aren't the same size
 */
export const zipWith = <T, U, V>(
  zipper: Zipper<T, U, V>,
  a: ReadonlyArray<T>,
  b: ReadonlyArray<U>,
  out: V[] = []
): V[] => {
  if (a.length !== b.length) {
    throw new Error('both lists provided to zipWith must be of the same length')
  }

  for (let i = 0; i < a.length; i++) {
    out[i] = zipper(a[i], b[i])
  }

  return out
}

export const isSet = (
  list: ReadonlyArray<unknown> | ReadonlySet<unknown>
): boolean => {
  if (Array.isArray(list)) {
    return list.every((e, i, arr) => arr.lastIndexOf(e) === i)
  }

  return true
}

export const assert = (predicate: boolean, msg?: string): void => {
  if (!predicate) {
    throw new Error(msg ? `Assertion error: ${msg}` : 'Assertion error')
  }
}
