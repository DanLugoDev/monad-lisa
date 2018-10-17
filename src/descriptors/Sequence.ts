import Token from '@app/Token'
import Type from '@app/Type'

import { zipWith } from '../utils'
import defaultTransform from './defaultTransform'

type Sequence = (of: ReadonlyArray<Type>, name?: string) => Type

const Sequence: Sequence = (of, name) => {
  if (of.length < 2) {
    throw new TypeError(
      'Please specifiy more than one type to Sequence descriptor'
    )
  }

  return {
    getName() {
      return name
    },
    dependencies() {
      const dependenciesOfDependencies = of
        .map(type => type.dependencies())
        .flat()

      return new Set([...of, ...dependenciesOfDependencies])
    },
    matches(tokens) {
      if (tokens.size < 1) {
        return false
      }
      if (tokens.size !== of.length) {
        return false
      }
      const toks = Array.from(tokens)

      const matches = zipWith<Type, Token, boolean>(
        (type, token) => token.matchedBy === type,
        of,
        toks
      )

      return matches.every(b => b)
    },
    transform: defaultTransform
  }
}

export default Sequence
