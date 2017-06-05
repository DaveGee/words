import './WordList.css'
import React from 'react'
import Types from 'prop-types'
import { connect } from 'react-redux'

const appendStat = (w, stats) => ({
  ...w,
  succeeded: (stats[w.lang1] || {}).succeeded || 0,
  failed: (stats[w.lang1] || {}).failed || 0,
})

const wordSorter = (w1, w2) => {
  if (w1.succeeded !== w2.succeeded)
    return w2.succeeded - w1.succeeded
  return w2.failed - w1.failed
}

const WordList = ({
  words,
  stats,
}) => (
  <div className="WordList">
    {words
      .map((w) => appendStat(w, stats))
      .sort(wordSorter)
      .map((w, i) => (
      <div className="Word" key={i}>
        <div className="Word__Lang1">{w.lang1}</div>
        <div className="Word__Lang2">{w.lang2}</div>
        <div className="Word__stats">
          +{w.succeeded} /
          -{w.failed}
        </div>
      </div>
    ))}
  </div>
)

WordList.propTypes = {
  words: Types.array,
  stats: Types.object,
}

const mapStateToProps = state => ({
  words: state.wordList,
  stats: state.wordsStats,
})

export default connect(mapStateToProps)(WordList)