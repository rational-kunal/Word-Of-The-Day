import { getWordOfTheDay } from './wordy'

const WORD_MAIN_ID = 'word-main'
const WORD_ATTRIBUTE_ID = 'word-attr'
const WORD_SYLLABLES_ID = 'word-syllables'
const WORD_MEANING_ID = 'word-meaning'

function onLoad() {
  const wordMainEl = document.getElementById(WORD_MAIN_ID)
  const wordAttributeEl = document.getElementById(WORD_ATTRIBUTE_ID)
  const wordSyllablesEl = document.getElementById(WORD_SYLLABLES_ID)
  const wordMeaningEl = document.getElementById(WORD_MEANING_ID)

  getWordOfTheDay().then((wordOfTheDay) => {
    wordMainEl.innerText = wordOfTheDay.word
    wordAttributeEl.innerText = wordOfTheDay.attribute
    wordSyllablesEl.innerText = wordOfTheDay.syllables
    wordMeaningEl.innerHTML = wordOfTheDay.meaning
  })
}

onLoad()
