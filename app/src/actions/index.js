
import { getLessKnownWord } from '../utils/wordLib'

export const navigateAction = navigateTo => ({
  type: 'NAVIGATE',
  navigateTo
})

const addSuccessAction = word => ({
  type: 'INC_SUCCESS',
  word
})

const addFailureAction = word => ({
  type: 'INC_FAILURE',
  word
})

const nextWordAction = word => ({
  type: 'SET_NEXT_WORD',
  word,
})

const setResult = (action) => (dispatch, getState) => {
  const currentWord = getState().currentWord
  const wordLib = getState().wordList

  dispatch(action(currentWord))

  const stats = getState().wordsStats
  const nextWord = getLessKnownWord(wordLib, stats)

  dispatch(nextWordAction(nextWord))
}

export const setSucceeded = () => (dispatch, getState) =>
  dispatch(setResult(addSuccessAction))

export const setFailed = () => (dispatch, getState) =>
  dispatch(setResult(addFailureAction))