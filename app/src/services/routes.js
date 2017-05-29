
import WordList from '../components/WordList'
import Card from '../containers/Cards'

export const routes = [
  {
    label: 'flashcards',
    screen: Card,
  },
  {
    label: 'words',
    screen: WordList,
  }
]

export default routes