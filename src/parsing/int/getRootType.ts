import Type from '@app/Type'
import { filter } from '@app/utils/set'

export default (types: Set<Type>): Type => {
  if (types.size < 2) {
    throw new RangeError('getRootType called with fewer than 2 types')
  }
  const mostDeps: number = Array.from(types)
    .sort((a, b) =>
      b.dependencies().size - a.dependencies().size
    )
    [0]
    .dependencies()
    .size

  // There shouldn't be more than one type with the same biggest dependencies
  // amount
  const biggest = filter(types, type => 
    type.dependencies().size === mostDeps
  )

  if (biggest.size !== 1) {
    throw new Error("Can't determine root type")
  }

  let theType
  for (const item of biggest) {
    theType = item
  }
  return theType as Type
}
