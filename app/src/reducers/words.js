
import entireWordLib from '../services/initialState'
import routes from '../services/routes'

const initialState = {
  wordList: entireWordLib,
  screen: routes[0].label,
  stats: {
    words: {}
  },
}

const wordsApp = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, screen: action.navigateTo }

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