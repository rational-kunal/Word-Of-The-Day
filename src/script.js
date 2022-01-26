import { getMostRecentWordOfTheDay } from './wordy'

const WORD_MAIN_ID = 'word-main'
const WORD_ATTRIBUTE_ID = 'word-attr'
const WORD_SYLLABLES_ID = 'word-syllables'
const WORD_MEANING_ID = 'word-meaning'
const WORD_DATE_ID = 'word-date'
const WORD_EXAMPLE_ID = 'word-example'
const ARCHIVED = 'Archived'

// Short hand for getElementById
const $ = (id) => document.getElementById(id)

const updateUIForWordOfTheDay = async (wordOfTheDay) => {
  const todaysDate = new Date().toDateString()
  const isArchived = todaysDate !== wordOfTheDay.date
  $(WORD_DATE_ID).innerText = isArchived ? wordOfTheDay.date : ARCHIVED
  $(WORD_MAIN_ID).innerText = wordOfTheDay.word
  $(WORD_ATTRIBUTE_ID).innerText = wordOfTheDay.attribute
  $(WORD_SYLLABLES_ID).innerText = wordOfTheDay.syllables
  $(WORD_MEANING_ID).innerHTML = wordOfTheDay.meaning
  $(WORD_EXAMPLE_ID).innerHTML = wordOfTheDay.example
}

async function onWindowLoad() {
  const wordOfTheDay = await getMostRecentWordOfTheDay()
  updateUIForWordOfTheDay(wordOfTheDay)
}

window.onload = async () => {
  await onWindowLoad()
}
