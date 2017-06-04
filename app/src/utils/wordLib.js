
const getStat = wordStats => word =>
  Object.assign({}, { succeeded: 0, failed: 0 }, (wordStats || {})[word.lang1])

/**
 * wordStats have the following shape :
 * { 'word': {succeeded: X, failed: Y}, ... }
 *
 * wordList:
 * { lang1: 'word', lang2: 'word in other lang' }
 *
 * priority between 2 words is calculated like this :
 * -> f = number of failed of word / nb of failed for 2 words
 * -> t = total appearance of word / total appearance of the 2 words
 * -> weight = importance of failure vs appearance (e.g. 0.5 if it's 2x less important)
 * -> limit = f * weight + t
 * -> sel = random number between 0..1+weight
 * if sel <= limit => word1 is selected, word 2 otherwise
 */

const weight = 1

export const getLessKnownWord = (wordList, wordStats) => {
  if (!wordList || !wordList.length)
    throw new Error('No word in the list!')

  wordList = wordList.sort(() => Math.random() - Math.random())

  const stat = getStat(wordStats)

  return wordList.reduce((w1, w2) => {
    const s1 = stat(w1)
    const s2 = stat(w2)
    const f = (s1.failed / (s1.failed + s2.failed)) || 1
    const t = 1 - ((s1.failed + s1.succeeded) / (s1.failed + s1.succeeded + s2.failed + s2.succeeded)) || 0
    const limit = f * weight + t

    const sel = Math.random() * (1 + weight)

    return sel <= limit ? w1 : w2

  }, wordList[0])
}