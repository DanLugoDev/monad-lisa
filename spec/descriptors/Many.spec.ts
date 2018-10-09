import 'jasmine'

import { Nothing, One, Zero } from '../../src/builtin'
import Many from '../../src/descriptors/Many'
import Token from '../../src/Token'

describe('Many', () => {
  it('throws a TypeError if matches() is called before specifying a separator', () => {
    expect(() => {
      Many(Nothing).matches(new Set())
    }).toThrowError(ReferenceError)
  })

  const instance = Many(Zero).separatedBy(Nothing)

  it('matches one token of the type specified', () => {
    expect(
      instance.matches(
        new Set<Token>([
          {
            children: new Set(),
            matchedBy: Zero,
            text: '0'
          }
        ])
      )
    )
  })

  it('matches several tokens of the supplied type, if the separators are correct', () => {
    expect(
      instance.matches(
        new Set<Token>([
          {
            children: new Set(),
            matchedBy: Zero,
            text: '0'
          },
          {
            children: new Set(),
            matchedBy: Nothing,
            text: ''
          },
          {
            children: new Set(),
            matchedBy: Zero,
            text: '0'
          }
        ])
      )
    )
  })

  it("doesnt't match if a trailling separator occurs and it wasn't allowed", () => {
    expect(
      instance.matches(
        new Set<Token>([
          {
            children: new Set(),
            matchedBy: Zero,
            text: '0'
          },
          {
            children: new Set(),
            matchedBy: Nothing,
            text: ''
          },
          {
            children: new Set(),
            matchedBy: Zero,
            text: '0'
          },
          {
            children: new Set(),
            matchedBy: Nothing,
            text: ''
          }
        ])
      )
    )
  })

  it('matches if a trailling separator occurs and it was allowed', () => {
    const allowsTrailling = Many(Zero)
      .separatedBy(Nothing)
      .allowTraillingSeparator()

    expect(
      allowsTrailling.matches(
        new Set<Token>([
          {
            children: new Set(),
            matchedBy: Zero,
            text: '0'
          },
          {
            children: new Set(),
            matchedBy: Nothing,
            text: ''
          },
          {
            children: new Set(),
            matchedBy: Zero,
            text: '0'
          },
          {
            children: new Set(),
            matchedBy: Nothing,
            text: ''
          }
        ])
      )
    )
  })

  it("doesn't match tokens for which no type was supplied", () => {
    const allowsTrailling = Many(Zero)
      .separatedBy(Nothing)
      .allowTraillingSeparator()

    expect(
      instance.matches(
        new Set<Token>([
          {
            children: new Set(),
            matchedBy: One,
            text: '1'
          }
        ])
      )
    ).toBeFalsy()

    expect(
      instance.matches(
        new Set<Token>([
          {
            children: new Set(),
            matchedBy: One,
            text: '1'
          },
          {
            children: new Set(),
            matchedBy: Nothing,
            text: ''
          },
          {
            children: new Set(),
            matchedBy: Zero,
            text: '0'
          }
        ])
      )
    ).toBeFalsy()

    expect(
      allowsTrailling.matches(
        new Set<Token>([
          {
            children: new Set(),
            matchedBy: One,
            text: '1'
          },
          {
            children: new Set(),
            matchedBy: Nothing,
            text: ''
          }
        ])
      )
    ).toBeFalsy()
  })
})
