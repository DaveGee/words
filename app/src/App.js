import React from 'react'
import './App.css'
import wordsApp from './reducers/words'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import WordList from './components/WordList'
import Menu from './components/Menu'

const store = createStore(wordsApp)

const App = () => (
  <Provider store={store}>
    <div className="App">
      <div className="App__Screen">
        <WordList />
      </div>
      <div className="App__Menu">
        <Menu />
      </div>
    </div>
  </Provider>
)

export default App
