import Component from 'inferno-component'
import WordList from '../components/WordList'
import { get } from '../services/api'

class WordListContainer extends Component {
  
  state = {
    words: []
  }

  componentWillMount() {
    get('/parse/classes/Word', { where: JSON.stringify({ lesson: '1' }) })
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