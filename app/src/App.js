import React, { Component } from 'react'
import './App.css'
import WordList from './containers/WordListContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WordList />
      </div>
    )
  }
}

export default App
