import React from 'react'
import './App.css'
import wordsApp from './reducers/words'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Menu from './components/Menu'
import Screen from './containers/Screen'

const store = createStore(wordsApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
