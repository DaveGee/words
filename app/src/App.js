import './App.css'
import Component from 'inferno-component'
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
