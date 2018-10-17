import Type from '@app/Type'
import { isSet } from '../utils'
import defaultTransform from './defaultTransform'

type Either = (of: ReadonlyArray<Type>, name?: string) => Type

const Either: Either = (of, name) => {
  if (of.length < 2) {
    throw new TypeError('Either accepts at least 2 types')
  }
  if (!isSet(of)) {
    throw new TypeError('Types provided to Either must be unique')
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
      return of.some(type => type.matches(tokens))
    },
    transform: defaultTransform
  }
}

export default Either
