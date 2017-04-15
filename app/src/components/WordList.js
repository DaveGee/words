import Component from 'inferno-component'

class WordList extends Component {

  render() {
    return (
      <div className="WordList">
        {this.props.words.map(w => (
          <div className="Word">
            <div>{w.lang1}</div>
            <div>{w.lang2}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default WordList