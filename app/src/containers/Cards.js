import React from 'react'
import Types from 'prop-types'
import { connect } from 'react-redux'
import { getLessKnownWord } from '../utils/wordLib'
import Card from '../components/Card'
import { addSuccessAction, addFailureAction } from '../actions'


const Cards = ({
  words,
  stats,
  addSuccess,
  addFailure,
}) => {
  const word = getLessKnownWord(words, stats)
  console.log('render', stats)

  return (
    <Card
      word={word}
      onSuccess={addSuccess}
      onFailure={addFailure}
    />
  )
}

Cards.propTypes = {
  words: Types.array,
  stats: Types.object,
  addSuccess: Types.func.isRequired,
  addFailure: Types.func.isRequired,
}

const mapStateToProps = state => ({
  words: state.wordList,
  stats: state.stats.words,
})

const mapDispatchToProps = dispatch => ({
  addSuccess: (word) => dispatch(addSuccessAction(word)),
  addFailure: (word) => dispatch(addFailureAction(word)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)