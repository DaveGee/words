import './WordList.css'
import React, { Component } from 'react'
import Types from 'prop-types'

class WordList extends Component {

  static propTypes = {
    words: Types.array
  }

  render() {
    return (
      <div className="WordList">
        {this.props.words.map(w => (
          <div className="Word">
            <div className="Word__Lang1">{w.lang1}</div>
            <div className="Word__Lang2">{w.lang2}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default WordList