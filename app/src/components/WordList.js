import './WordList.css'
import React from 'react'
import Types from 'prop-types'
import { connect } from 'react-redux'

const WordList = ({
  words
}) => (
  <div className="WordList">
    {words.map((w, i) => (
      <div className="Word" key={i}>
        <div className="Word__Lang1">{w.lang1}</div>
        <div className="Word__Lang2">{w.lang2}</div>
      </div>
    ))}
  </div>
)

WordList.propTypes = {
  words: Types.array
}

const mapStateToProps = state => ({
  words: state.wordList
})

export default connect(mapStateToProps)(WordList)