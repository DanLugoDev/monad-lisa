import 'jasmine'

import { Zero } from '../../src/builtin'
import Lazy from '../../src/descriptors/Lazy'
import Type from '../../src/Type'

describe('Lazy', () => {
  const instance: Type = Lazy()

  it('returns something resembling a type', () => {
    expect(instance.dependencies).toBeDefined()
    expect(instance.matches).toBeDefined()
  })

  it('throws Error if any of the type methods are called on it before giving it the pointed type', () => {
    expect(() => {
      instance.dependencies()
    }).toThrowError(Error)

    expect(() => {
      instance.matches(new Set())
    }).toThrowError()
  })

  it("shouldn't countain a name, as it's going to be picked up from the original type", () => {
    expect(instance.name).toBeUndefined()
  })

  it('has a $$isLazy: true property', () => {
    expect((instance as Lazy).$$isLazy).toBeTruthy()
  })

  it('can be assigned a pointedType property', () => {
    const lazy: Lazy = Lazy()

    lazy.pointedType = Zero

    expect(lazy.pointedType).toBe(Zero)
  })
})
