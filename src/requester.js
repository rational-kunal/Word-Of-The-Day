const WORD_OF_THE_DAY_URL = 'https://www.merriam-webster.com/word-of-the-day'
const WORD_OF_THE_DAY_QUERY = {
  word: 'div.quick-def-box div.word-header div.word-and-pronunciation h1',
  attribute: 'div.quick-def-box div.word-attributes span.main-attr',
  syllables: 'div.quick-def-box div.word-attributes span.word-syllables',
  meaning: 'div.wod-article-container div.wod-definition-container p',
  example:
    'div.wod-article-container div.wod-definition-container div.wotd-examples div.left-content-box p',
}

const _getWordOfTheDayOverInternet = async () => {
  const response = await fetch(WORD_OF_THE_DAY_URL)
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

const getWordOfTheDayOverInternet = async () => {
  try {
    return await _getWordOfTheDayOverInternet()
  } catch {
    return undefined
  }
}

export { getWordOfTheDayOverInternet }
