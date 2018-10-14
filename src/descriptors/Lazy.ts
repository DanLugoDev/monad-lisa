import Token from '../Token'
import Type from '../Type'

interface Lazy extends Type {
  $$isLazy: boolean
  pointedType?: Type
}

const Lazy = (): Lazy => ({
  $$isLazy: true,
  pointedType: undefined,
  dependencies() {
    if (typeof this.pointedType === 'undefined') {
      throw new Error(
        'called dependencies() on an instance of Lazy without defining pointedType first'
      )
    }

    // this is just to keep typescript from bugging us.
    return this.pointedType.dependencies()
  },
  matches(tokens) {
    if (typeof this.pointedType === 'undefined') {
      throw new Error(
        'called transform() on an instance of Lazy without defining pointedType first'
      )
    }

    return tokens && false
  },
  transform(tokens) {
    if (typeof this.pointedType === 'undefined') {
      throw new Error(
        'called transform() on an instance of Lazy without defining pointedType first'
      )
    }

    return this.pointedType.transform(tokens)
  }
})

export const isLazy = (type: any): type is Lazy => type.$$isLazy
export default Lazy
