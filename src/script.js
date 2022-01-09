import { getWordOfTheDay } from './wordy'

const WORD_MAIN_ID = 'word-main'
const WORD_ATTRIBUTE_ID = 'word-attr'
const WORD_SYLLABLES_ID = 'word-syllables'
const WORD_MEANING_ID = 'word-meaning'
const WORD_DATE_ID = 'word-date'
const WORD_EXAMPLE_ID = 'word-example'

function onLoad() {
  const wordMainEl = document.getElementById(WORD_MAIN_ID)
  const wordAttributeEl = document.getElementById(WORD_ATTRIBUTE_ID)
  const wordSyllablesEl = document.getElementById(WORD_SYLLABLES_ID)
  const wordMeaningEl = document.getElementById(WORD_MEANING_ID)
  const wordDateEl = document.getElementById(WORD_DATE_ID)
  const wordExampleEl = document.getElementById(WORD_EXAMPLE_ID)

  getWordOfTheDay().then((wordOfTheDay) => {
    wordDateEl.innerText = new Date().toDateString()
    wordMainEl.innerText = wordOfTheDay.word
    wordAttributeEl.innerText = wordOfTheDay.attribute
    wordSyllablesEl.innerText = wordOfTheDay.syllables
    wordMeaningEl.innerHTML = wordOfTheDay.meaning
    wordExampleEl.innerHTML = wordOfTheDay.example
  })
}

onLoad()
