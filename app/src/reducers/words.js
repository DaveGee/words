
const defaultStat = { failed: 0, succeeded: 0 }

const initialState = {
  currentWord: null,
  wordList: [],
  screen: null,
  wordsStats: {},
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

    case 'SET_NEXT_WORD':
      return {
        ...state,
        currentWord: action.word
      }

    case 'INC_FAILURE': {
      const { wordsStats } = state
      const stat = wordsStats[action.word.lang1] || defaultStat
      stat.failed++
      return {
        ...state,
        wordsStats: {
          ...wordsStats,
          [action.word.lang1]: { ...stat },
        }
      }
    }

    case 'INC_SUCCESS': {
      const { wordsStats } = state
      const stat = wordsStats[action.word.lang1] || defaultStat
      stat.succeeded++
      return {
        ...state,
        wordsStats: {
          ...wordsStats,
          [action.word.lang1]: { ...stat },
        }
      }
    }

    default:
      return state
  }
}

export default wordsApp