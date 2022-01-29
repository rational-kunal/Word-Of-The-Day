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
// Chrome may not be available on host.
// Fallback to noop storage if chrome is not available.
const chromeStorage = isChromeStorageAvailable
  ? window.chrome.storage.local
  : {
      get: (_, callback) => callback(FALLBACK_WORD_OF_THE_DAY),
      set: (_) => {},
    }

const getRecentWordOfTheDay = async () => {
  return new Promise((resolve) => {
    chromeStorage.get([RECENT_WORD_OF_THE_DAY_KEY], (result) => {
      if (result[RECENT_WORD_OF_THE_DAY_KEY] === undefined) {
        resolve(FALLBACK_WORD_OF_THE_DAY)
      } else {
        resolve(result[RECENT_WORD_OF_THE_DAY_KEY])
      }
    })
  })
}

const setRecentWordOfTheDay = async (wordOfTheDay) => {
  chromeStorage.set({ RECENT_WORD_OF_THE_DAY_KEY: wordOfTheDay })
}

const storage = {
  getRecentWordOfTheDay,
  setRecentWordOfTheDay,
}

export default storage
