import './App.css'
import React from 'react'
import wordsApp from './reducers/words'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Menu from './components/Menu'
import Screen from './containers/Screen'
import entireWordLib from './services/initialState'
import routes from './services/routes'
import { getLessKnownWord } from './utils/wordLib'

const stats = {}

const initialState = {
  currentWord: getLessKnownWord(entireWordLib, stats),
  wordList: entireWordLib,
  screen: routes[0].label,
  wordsStats: stats,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  wordsApp,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

const App = () => (
  <Provider store={store}>
    <div className="App">
      <div className="App__Screen">
        <Screen />
      </div>
      <div className="App__Menu">
        <Menu />
      </div>
    </div>
  </Provider>
)

export default App
