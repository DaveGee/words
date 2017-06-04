import './Card.css'
import React from 'react'
import { connect } from 'react-redux'
import { withState } from 'recompose'
import Types from 'prop-types'
import { setSucceeded, setFailed } from '../actions'
import { TiThumbsUp, TiThumbsDown, TiArrowRepeat } from 'react-icons/lib/ti'

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
    <div className={`Card Card__${side}`}>
      <div className="Card__side Card__side--guess">
        <div className="Card__guess--word">{word.lang2}</div>
      </div>
      <div className="Card__side Card__side--result">
        <div className="Card__result--word">{word.lang1}</div>
      </div>
      <div className="Card__menu">
        <a className="Card__action Card--switch" onClick={() => switchSide(s => RESULT)}>
          <TiArrowRepeat />
        </a>
        <a className="Card__action Card--failed" onClick={failed}>
          <TiThumbsDown />
        </a>
        <a className="Card__action Card--success" onClick={success}>
          <TiThumbsUp />
        </a>
      </div>
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