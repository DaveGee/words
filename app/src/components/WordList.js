import './WordList.css'
import Component from 'inferno-component'

class WordList extends Component {

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