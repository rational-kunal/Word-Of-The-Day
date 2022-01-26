import storage from './storage'

const WORD_OF_THE_DAY_URL = 'https://www.merriam-webster.com/word-of-the-day'
const WORD_OF_THE_DAY_QUERY = {
  word: 'div.quick-def-box div.word-header div.word-and-pronunciation h1',
  attribute: 'div.quick-def-box div.word-attributes span.main-attr',
  syllables: 'div.quick-def-box div.word-attributes span.word-syllables',
  meaning: 'div.wod-article-container div.wod-definition-container p',
  example:
    'div.wod-article-container div.wod-definition-container div.wotd-examples div.left-content-box p',
}

const getWordOfTheDayOverInternet = async () => {
  const wordOfTheDayRequest = new Request(WORD_OF_THE_DAY_URL)
  const response = await fetch(wordOfTheDayRequest)
  const responseText = await response.text()

  let domFromResponse = new DOMParser().parseFromString(
    responseText,
    'text/html'
  )

  const innerTextForQuery = (query) => {
    return domFromResponse.querySelector(query).innerHTML
  }

  return {
    word: innerTextForQuery(WORD_OF_THE_DAY_QUERY.word),
    attribute: innerTextForQuery(WORD_OF_THE_DAY_QUERY.attribute),
    syllables: innerTextForQuery(WORD_OF_THE_DAY_QUERY.syllables),
    meaning: innerTextForQuery(WORD_OF_THE_DAY_QUERY.meaning), // TODO: Get the complete meaning
    example: innerTextForQuery(WORD_OF_THE_DAY_QUERY.example),
    date: new Date().toDateString(),
  }
}

// Returns today's or recently archived word of the day.
// If the extension is online it will return today's word of the day.
// Else if extension is offline then it will return recently archived word of the day.
const getMostRecentWordOfTheDay = async () => {
  const recentWordOfTheDay = await storage.getRecentWordOfTheDay()
  const todaysDate = new Date().toDateString()

  if (recentWordOfTheDay.date === todaysDate) {
    return recentWordOfTheDay
  }

  try {
    const wordOfTheDay = await getWordOfTheDayOverInternet()
    storage.setRecentWordOfTheDay(wordOfTheDay)
    return wordOfTheDay
  } catch {
    return recentWordOfTheDay
  }
}

export { getMostRecentWordOfTheDay }
