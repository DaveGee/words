import React, { Component } from 'react'
import WordList from '../components/WordList'
import Types from 'prop-types'
import words from '../data/polski.json'

const csvMapper = ([
  lesson,
  lang1,
  lang2
]) => ({
  lesson,
  lang1,
  lang2
})

class WordListContainer extends Component {

  static propTypes = {
    lesson: Types.array
  }

  static defaultProps = {
    lesson: [],
  }

  state = {
    words: []
  }

  _getWords (lesson) {
    return words
      .filter(w => !lesson.length || lesson.includes(w[0]))
      .map(csvMapper)
  }

  render() {
    return (
      <WordList
        words={this._getWords(this.props.lesson)}
      />)
  }
}

export default WordListContainer