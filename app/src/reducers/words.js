
import entireWordLib from '../services/initialState'

const initialState = {
  wordList: entireWordLib,
  menu: 'PLAY'
}

const wordsApp = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, menu: action.menu }

    case 'SET_WORD_LIST':
      return {
        ...state,
        wordList: [...action.wordList],
      }

    default:
      return state
  }
}

export default wordsApp