import Type from '@app/Type'
import defaultTransform from './defaultTransform'

interface Lazy extends Type {
  readonly $$isLazy: boolean
  define(type: Type): void
}

const Lazy = (): Lazy => {
  let pointedType: Type

  return {
    getName() {
      if (pointedType) {
        return pointedType.getName()
      } else {
        throw new ReferenceError(
          "Try to access a Lazy type's name before giving it its pointedtype"
        )
      }
    },
    $$isLazy: true,
    define(type) {
      pointedType = type
    },
    dependencies() {
      if (typeof pointedType === 'undefined') {
        throw new Error(
          'called dependencies() on an instance of Lazy without defining pointedType first'
        )
      }

      // this is just to keep typescript from bugging us.
      return pointedType.dependencies()
    },
    matches(tokens) {
      if (typeof pointedType === 'undefined') {
        throw new Error(
          'called transform() on an instance of Lazy without defining pointedType first'
        )
      }

      return pointedType.matches(tokens)
    },
    transform: defaultTransform
  }
}

export const isLazy = (type: any): type is Lazy => type.$$isLazy
export default Lazy
