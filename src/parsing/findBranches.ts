import Token from '@app/Token'
import Type from '@app/Type'
import { filter } from '@app/utils/set'

const tokensToMatches = (
  typesThatCouldMatch: ReadonlySet<Type>,
  tokensToBeMatched: ReadonlySet<Token>
) => filter(type => type.matches(tokensToBeMatched), typesThatCouldMatch)

export const findBranches = (
  typesSet: ReadonlySet<Type>,
  initialTokensSet: ReadonlySet<Token>
): ReadonlySet<ReadonlySet<Token>> => {
  // no user facing code here. Lets switch to arrays
  const types = Array.from(typesSet)
  const initialTokens = Array.from(initialTokensSet)

  return new Set()
}

export const __createBranchFinder = (types: ReadonlyArray<Type>) => (
  alreadyMatched: ReadonlyArray<Token>,
  toMatch: ReadonlyArray<Token>
): ReadonlyArray<ReadonlyArray<Token>> => {
  const workingArea: Token[] = []

  if (toMatch.length === 0) {
    return [alreadyMatched]
  }

  toMatch.forEach(token => {
    workingArea.push(token)

    const typesCouldMatch = types.filter(type =>
      type.matches(new Set(workingArea))
    )
  })
}

export default findBranches
