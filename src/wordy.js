import { getWordOfTheDayOverInternet } from './requester'
import storage from './storage'
import { noop } from './util'

// Returns today's or recently archived word of the day.
// If the extension is online it will return today's word of the day.
// Else if extension is offline then it will return recently archived word of the day.
const getMostRecentWordOfTheDay = async (isWordPreloadedCallback = noop) => {
  const recentWordOfTheDay = await storage.getRecentWordOfTheDay()
  const todaysDate = new Date().toDateString()

  if (recentWordOfTheDay.date === todaysDate) {
    isWordPreloadedCallback(true)
    return recentWordOfTheDay
  }
  isWordPreloadedCallback(false)

  const wordOfTheDay =
    (await getWordOfTheDayOverInternet()) ?? recentWordOfTheDay
  storage.setRecentWordOfTheDay(wordOfTheDay)
  return wordOfTheDay
}

export { getMostRecentWordOfTheDay }
