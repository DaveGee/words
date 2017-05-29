import { getLessKnownWord } from './wordLib'

const words = [
  { lang1: 'Good morning', lang2: 'Bonjour' },
  { lang1: 'Bye bye', lang2: 'Aurevoir' },
  { lang1: 'Hello world', lang2: 'Bonjour, monde' },
  { lang1: 'Hey', lang2: 'Salut' },
]
const stats = {
  'Good morning': { succeeded: 0, failed: 3 },
  'Hello world': { succeeded: 7, failed: 30 },
  'Hey': { succeeded: 10, failed: 2 },
}

const _wordShape = expect.objectContaining({
  lang1: expect.any(String),
  lang2: expect.any(String),
})

const getWordsLotsOfTimes = length =>
  Array.from({ length }).reduce(acc => {
    const x = getLessKnownWord(words, stats)
    return {
      ...acc,
      [x.lang1]: acc[x.lang1] || 0  + 1
    }
  }, {})

describe('getLessKnownWord', () => {
  it('finds a word whatever the stats', () => {
    expect(getLessKnownWord(words, undefined)).toEqual(_wordShape)
    expect(getLessKnownWord(words, {})).toEqual(_wordShape)
    expect(getLessKnownWord(words, 'test')).toEqual(_wordShape)
  })

  it('Mostly returns the less known words', () => {
    expect(getLessKnownWord(words, stats)).toEqual(_wordShape)

    const count = getWordsLotsOfTimes(100)

    expect(count['Hello world']).toBeDefined()

    Object.keys(count).forEach(w =>
      expect(count['Hello world']).toBeGreaterThanOrEqual(count[w])
    )
  })

  it('Returns at least once all the words in the long run', () => {
    const count = getWordsLotsOfTimes(1000)

    expect(Object.keys(count).length).toBe(4)
  })

  it('throws an error when theres no word to return', () => {
    expect(() => getLessKnownWord(null)).toThrow()
  })
})