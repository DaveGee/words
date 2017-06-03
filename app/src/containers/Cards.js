import React from 'react'
import Types from 'prop-types'
import { connect } from 'react-redux'
import { getLessKnownWord } from '../utils/wordLib'

/**
 * From the word list and the statistics :
 * - Display the next word (lang2)
 * - probability to show word is inverse of the number of time it was successfully guessed
 * -
 */


const Cards = ({
  words,
  stats,
}) => {
  const word = getLessKnownWord(words, stats)

  return (
    <div>
      <div>{word.lesson}</div>
      <div>{word.lang1}</div>
      <div>{word.lang2}</div>
    </div>
  )
}

Cards.propTypes = {
  words: Types.array,
  stats: Types.object,
}

const mapStateToProps = state => ({
  words: state.wordList,
  stats: state.stats.words,
})

export default connect(mapStateToProps)(Cards)