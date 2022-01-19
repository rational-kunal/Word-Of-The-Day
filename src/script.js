import { getRecentWordOfTheDay, setRecentWordOfTheDay } from './storage'
import { getWordOfTheDay } from './wordy'

const WORD_MAIN_ID = 'word-main'
const WORD_ATTRIBUTE_ID = 'word-attr'
const WORD_SYLLABLES_ID = 'word-syllables'
const WORD_MEANING_ID = 'word-meaning'
const WORD_DATE_ID = 'word-date'
const WORD_EXAMPLE_ID = 'word-example'

const updateUI = (wordOfTheDay) => {
  document.getElementById(WORD_DATE_ID).innerText = wordOfTheDay.date
  document.getElementById(WORD_MAIN_ID).innerText = wordOfTheDay.word
  document.getElementById(WORD_ATTRIBUTE_ID).innerText = wordOfTheDay.attribute
  document.getElementById(WORD_SYLLABLES_ID).innerText = wordOfTheDay.syllables
  document.getElementById(WORD_MEANING_ID).innerHTML = wordOfTheDay.meaning
  document.getElementById(WORD_EXAMPLE_ID).innerHTML = wordOfTheDay.example
}

async function onLoad() {
  const recentWordOfTheDay = await getRecentWordOfTheDay()
  const todaysDate = new Date().toDateString()

  if (recentWordOfTheDay.date === todaysDate) {
    // TODO: Add 'offline' to date if its using recent Word of the Day
    updateUI(recentWordOfTheDay)
    return
  }

  getWordOfTheDay()
    .then((wordOfTheDay) => {
      updateUI(wordOfTheDay)
      setRecentWordOfTheDay(JSON.stringify(wordOfTheDay))
    })
    .catch(() => {
      updateUI(recentWordOfTheDay)
    })
}

onLoad()
