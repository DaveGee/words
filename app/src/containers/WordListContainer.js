import React, { Component } from 'react'
import WordList from '../components/WordList'
import { get } from '../services/api'
import Types from 'prop-types'

class WordListContainer extends Component {
  
  static propTypes = {
    lesson: Types.array
  }

  state = {
    words: []
  }

  componentWillMount() {
    this._getWords(this.props.lesson)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.lesson !== this.props.lesson)
      this._getWords(nextProps.lesson)
  }

  _getWords (lesson) {
    const filter = { lesson }

    get('/parse/classes/Word', { where: filter })
      .then(res => this.setState({ words: res.results }))
  }
  
  render() {
    return (
      <WordList 
        words={this.state.words}
      />)
  }
}

export default WordListContainer