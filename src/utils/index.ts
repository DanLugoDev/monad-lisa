import Char, { Chars, isChar } from '@app/Char'

export const intersperseWith = (interspersor: string, chars: Chars): Chars => {
  if (!chars.every(isChar)) throw new TypeError()

  const out: Char[] = []

  chars.forEach((char, i) => {
    out.push(char)
    if (i === chars.length - 1) return;
    out.push(interspersor)

  })

  return out
}

export const intersperseWithNothing = (chars: Chars): Chars =>
  intersperseWith('', chars)

