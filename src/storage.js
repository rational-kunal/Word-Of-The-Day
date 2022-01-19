const RECENT_WORD_OF_THE_DAY_KEY = 'RECENT_WORD_OF_THE_DAY_KEY'
const FALLBACK_WORD_OF_THE_DAY = {
  word: 'Offline',
  attribute: 'Error',
  syllables: '💭',
  meaning: 'You are currently offline.',
  example: '',
  date: '',
}

const getRecentWordOfTheDay = async () => {
  return new Promise((resolve) => {
    chrome.storage.local.get([RECENT_WORD_OF_THE_DAY_KEY], (result) => {
      if (result[RECENT_WORD_OF_THE_DAY_KEY] === undefined) {
        resolve(FALLBACK_WORD_OF_THE_DAY)
      } else {
        resolve(JSON.parse(result[RECENT_WORD_OF_THE_DAY_KEY]))
      }
    })
  })
}

const setRecentWordOfTheDay = async (wordOfTheDay) => {
  chrome.storage.local.set({ RECENT_WORD_OF_THE_DAY_KEY: wordOfTheDay })
}

export { getRecentWordOfTheDay, setRecentWordOfTheDay }
