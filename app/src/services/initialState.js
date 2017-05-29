
import words from '../data/polski.json'

const csvMapper = ([
  lesson,
  lang1,
  lang2
]) => ({
  lesson,
  lang1,
  lang2
})

export default words.map(csvMapper)