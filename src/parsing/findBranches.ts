import Token from '@app/Token'
import Type from '@app/Type'
import { filter } from '@app/utils/set'

const toMatches = (tokens: ReadonlyArray<Token>) => (type: Type) =>
  type.transform(new Set(tokens))

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
  const branches = []

  if (toMatch.length === 0) {
    return []
  }

  toMatch.forEach(token => {
    workingArea.push(token)
    const workingAreaSet = new Set(workingArea)
    const typesThatCouldMatch = types.filter(type =>
      type.matches(workingAreaSet)
    )
    const transforms = typesThatCouldMatch.map(type =>
      type.transform(workingAreaSet)
    )

    const moreBranches = alreadyMatched.forEach(token => {})
  })
}

export default findBranches
