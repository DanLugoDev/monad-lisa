import Lazy, { isLazy } from '@app/descriptors/Lazy'
import Type from '@app/Type'
import { map } from '@app/utils/set'

type LazyToReal = (typeOrLazy: Type | Lazy) => Type

const lazyToReal: LazyToReal = typeOrLazy => {
  if (isLazy(typeOrLazy)) {
    if (typeof typeOrLazy.pointedType === 'undefined') {
      throw new Error(
        'Tried to create a parser given a Lazy type with undefined pointedType key'
      )
    }
    return typeOrLazy.pointedType
  }
  return typeOrLazy
}

export default lazyToReal
