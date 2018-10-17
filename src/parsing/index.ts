import { Tokenizer } from '@app/builtin'
import Lazy, { isLazy } from '@app/descriptors/Lazy'
import Token from '@app/Token'
import Type from '@app/Type'
import { filter, map, pickFirst } from '@app/utils/set'
import findBranches from './findBranches'

// returns one single token representing the root of the AST
type Parser = (sourceCodeCharArray: ReadonlyArray<string>) => Token

export const createParser = (rootType: Type): Parser => {
  const allTypesIncludingLazy = rootType.dependencies()

  const allTypes = map(lazyToReal, allTypesIncludingLazy)

  return (sourceCodeCharArray: ReadonlyArray<string>) => {
    const chars = sourceCodeCharArray

    const initialTokens = new Set<Token>(
      chars.map(char => ({
        children: new Set(),
        matchedBy: Tokenizer,
        text: char
      }))
    )

    const branchesFound = findBranches(allTypes, initialTokens)

    // only branches with one single token might actually be matched by the
    // root type
    const branchesWithPossibleRoot = filter(
      branch => branch.size === 1,
      branchesFound
    )

    const possiblyRoot = map(
      branch => pickFirst(branch),
      branchesWithPossibleRoot
    )

    if (possiblyRoot.size === 0) {
      throw new Error(
        'Not able to parse, no ast possibility with root type found'
      )
    } else if (possiblyRoot.size > 1) {
      throw new Error(
        'Multiple root type matches, type tree provided is ambiguous'
      )
    } else {
      return pickFirst(possiblyRoot)
    }
  }
}
