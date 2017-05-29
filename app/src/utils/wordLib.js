
/**
 * wordStats have the following form :
 * { 'word': {succeeded: X, failed: Y}, ... }
 *
 * priority of word is calculated like this :
 * -> word is not in the stat (never shown): MAX priority
 * -> P = -succeeded + failed
 *
 * MAX is the highest P. => (1 - 1/P) becomes the chance that the word show up next
 *
 *
 */

export const getLessKnownWord = (wordList, wordStats) => {
  if (!wordList || !wordList.length)
    throw new Error('No word in the list!')

  // assigns a grade to the word:
  //
}