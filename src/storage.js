const RECENT_WORD_OF_THE_DAY_KEY = 'RECENT_WORD_OF_THE_DAY_KEY'
const FALLBACK_WORD_OF_THE_DAY = {
  word: 'Offline',
  attribute: 'Error',
  syllables: '💭',
  meaning: 'You are currently offline.',
  example: '',
  date: '',
}

const isChromeStorageAvailable =
  window.chrome !== undefined && window.chrome.storage !== undefined
// Chrome object is not completely available on websites.
// Fallback storage if chrome is not available.
const storage = isChromeStorageAvailable
  ? window.chrome.storage.local
  : {
      get: (_, callback) => callback(FALLBACK_WORD_OF_THE_DAY),
      set: (_) => {},
    }

const getRecentWordOfTheDay = async () => {
  return new Promise((resolve) => {
    storage.get([RECENT_WORD_OF_THE_DAY_KEY], (result) => {
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
