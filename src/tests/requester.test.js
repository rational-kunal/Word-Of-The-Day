import { getWordOfTheDayOverInternet } from '../requester'
import fetch from 'node-fetch'

beforeEach(() => {
  global.fetch = fetch
})

describe('Fetching Word of the Day through merriam-webster works', () => {
  it('Returns undefined when script is offline', async () => {
    global.fetch = (_) => Promise.reject('Offline!')
    expect(await getWordOfTheDayOverInternet()).toBeUndefined()
  })

  it('Returns (some) Word of the Day when script is online', async () => {
    expect(await getWordOfTheDayOverInternet()).not.toBeUndefined()
  })

  // Verifies that class path used in parsing values through dom (of merriam-webster webpage) is still holds.
  it('Returns Word of the Day with correctly parsed properties', async () => {
    const word = await getWordOfTheDayOverInternet()
    expect(word).toHaveProperty('word')
    expect(word).toHaveProperty('attribute')
    expect(word).toHaveProperty('syllables')
    expect(word).toHaveProperty('meaning')
    expect(word).toHaveProperty('example')
    expect(word).toHaveProperty('date')
  })
})
