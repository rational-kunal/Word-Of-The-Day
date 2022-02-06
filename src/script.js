import { getMostRecentWordOfTheDay } from './wordy'
import { $ } from './util'
import { animator } from './animations'

const WORD_MAIN_ID = 'word-main'
const WORD_ATTRIBUTE_ID = 'word-attr'
const WORD_SYLLABLES_ID = 'word-syllables'
const WORD_MEANING_ID = 'word-meaning'
const WORD_DATE_ID = 'word-date'
const WORD_EXAMPLE_ID = 'word-example'
const ARCHIVED = 'Archived'

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

const SHORT_DELAY = 1000

async function onWindowLoad() {
  let isPreloaded = false
  const wordOfTheDay = await getMostRecentWordOfTheDay((preloaded) => {
    isPreloaded = preloaded
    animator.initiateLoaderOnScreen(preloaded)
    animator.startLoading()
  })

  updateUIForWordOfTheDay(wordOfTheDay)

  animator.stopThenHideLoading()
  // Add delay to Main component for smoother transition.
  setTimeout(
    () => animator.initiateMainComponent(),
    isPreloaded ? 0 : SHORT_DELAY
  )
}

window.onload = async () => {
  await onWindowLoad()
}
