// Dan: I trust ramda's philosophy in using the predicate as the first parameter
// but in this case I'll ignore it just for readability's sake.

export const map =
  <T, U>(set: Set<T>, predicate: (item: T) => U): Set<U> =>
{
  const newSet = new Set<U>()
  for (const item of set) {
    newSet.add(predicate(item))
  }
  return newSet
}

export const filter =
  <T>(set: Set<T>, predicate: (item: T) => boolean): Set<T> =>
{
  const newSet = new Set<T>()
  for (const item of set) {
    if (predicate(item)) {
      newSet.add(item)
    }
  }
  return newSet
}

export const every = <T>(set: Set<T>, predicate: (item: T) => boolean): boolean =>
{
  let every = true
  for (const item of set) {
    every = predicate(item)
  }
  return every
}

/**
 * Returns the first item from whatever iteration order the set provides.
 * @param set The set from which the item will be picked
 */
export const pickFirst = <T>(set: Set<T>): T => {
  if (set.size < 1) throw new Error()
  let first
  for (const item of set) {
    first = item
    break
  }
  return first as T
}

/**
 * Checks if a list is a set, that is, no elements repeat.
 * Primites are checked by value, objects by reference.
 * @param list The list to be checked
 */
export const isSet = <T>(list: ReadonlyArray<T>|Set<T>): boolean => {
  const asSet = new Set<T>(list)
  return Array.isArray(list) ? asSet.size === list.length : true
}



interface Reduce {
  <T, U>(set: Set<T>,predicate: (prev: U|undefined, nxt: T) => U): U|undefined
  <T, U>(
    set: Set<T>,
    predicate: (prev: U, nxt: T) => U,
    initialValue: U): U
}

export const reduce: Reduce =
  <T, U>(
    set: Set<T>,
    predicate: (prev: U|undefined, nxt: T) => U,
    initialValue?: U) =>
{
  let finalValue: U|undefined = initialValue
  for (const item of set) {
    finalValue = predicate(finalValue, item)
  }
  return finalValue
}