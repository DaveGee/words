import React from 'react'
import { connect } from 'react-redux'
import { withState } from 'recompose'
import Types from 'prop-types'
import { setSucceeded, setFailed } from '../actions'

const GUESS = 'guess', RESULT = 'result'

const enhance = withState('side', 'switchSide', GUESS)

const Card = ({
  word,
  onSuccess,
  onFailure,
  switchSide,
  side,
}) => {

  const success = () => {
    switchSide(s => GUESS)
    onSuccess()
  }

  const failed = () => {
    switchSide(s => GUESS)
    onFailure()
  }

  return (
    <div className="Card">
      {side === GUESS &&
        <div className="Card__guess">
          <div className="Card__guess--word">{word.lang1}</div>
          <a className="Card__guess--show" onClick={() => switchSide(s => RESULT)}>Check</a>
        </div>
      }
      {side === RESULT &&
        <div className="Card__result">
          <div className="Card__result--word1">{word.lang1}</div>
          <div className="Card__result--word2">{word.lang2}</div>
          <div className="Card__result--actions">
            <a className="Card__result--correct" onClick={success}>:)</a>
            <a className="Card__result--wrong" onClick={failed}>:(</a>
          </div>
        </div>
      }
    </div>
  )
}

Card.propTypes = {
  word: Types.shape({
    lang1: Types.string.isRequired,
    lang2: Types.string.isRequired,
  }).isRequired,
  onSuccess: Types.func.isRequired,
  onFailure: Types.func.isRequired,
  switchSide: Types.func.isRequired,
  side: Types.oneOf([GUESS, RESULT]).isRequired,
}

const mapStateToProps = state => ({
  word: state.currentWord
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSuccess: () => dispatch(setSucceeded()),
  onFailure: () => dispatch(setFailed()),
})

export default connect(mapStateToProps, mapDispatchToProps)(enhance(Card))