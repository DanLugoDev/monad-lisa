import { every , isSet, pickFirst } from '@app/utils/set'

import Char from '@app/Char'
import Type from '@app/Type'
import Token from '@app/Token'

import getRootType from '@app/parsing/int/getRootType'
import Parser from '@app/parsing/int/Parser'
import findBranches from '@app/parsing/int/findBranches'

const Tokenizer: Type = {
  name: 'Tokenizer',
  matches(tokens) {
    throw new Error('Unsupported operation') && tokens
  },
  dependencies() {
    return new Set<Type>()
  }
}

/**
 * 
 * @param types The types from which the parser will be created
 */
export const createParser = (types: Set<Type>): Parser => {
  const rootType = getRootType(types)
  const rootTypeDeps = new Set(rootType.dependencies())

  if (!isSet(types)) {
    throw new Error('Duplicate types')
  }

  if (!every(rootTypeDeps, type => types.has(type))) {
    throw new Error('not all root type deps are in the types provided')
  }

  return (sourceCode: string): Token => {
    const chars: Char[] = sourceCode.split('')
    const initialTokens = new Set<Token>(chars.map(char => ({
      children: new Set(),
      matchedBy: Tokenizer,
      text: char,
    })))

    const branches = findBranches(types, initialTokens)
    
    if (branches.size === 0) {
      throw new Error('Not able to parse')
    }
    else if (branches.size > 1) {
      if (every(branches, branch => pickFirst(branch) === rootType)) {
        throw new Error('Multiple root type matches, type tree is ambiguous')
      } else {
        throw new Error('Multiple root type matches, type tree is ambiguous')
      }
    }
    else /* branch.size is 1 */ {
      const theBranch = pickFirst(branches)
      if (theBranch.size !== 1) {

      } else {

      }
    }
  
    if (!every(branches, branch => branch.size === 1)) {
      throw new TypeError("Unexpected branch format, all branches should be of \
        size 1, otherwise the root type wasn't matched or ")
    }
  
    

    
    
    return {} as Token
  }
}
