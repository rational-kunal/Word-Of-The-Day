import storage from '../storage'
import MockStorage from './MockStorage'

const MOCK_WORD_OF_THE_DAY_FN = (word) => {
  return {
    word: word,
    attribute: 'Error',
    syllables: '💭',
    meaning: 'You are currently offline.',
    example: '',
    date: '',
  }
}

const FALLBACK_WORD_OF_THE_DAY = MOCK_WORD_OF_THE_DAY_FN('Offline')

describe('On website storage does not break', () => {
  it('getter returns fallback word', async () => {
    expect(await storage.getRecentWordOfTheDay()).toEqual(
      FALLBACK_WORD_OF_THE_DAY
    )
  })
  it('setter is noop', async () => {
    await storage.setRecentWordOfTheDay({})
  })
})

describe("On chrome extension storage works as a cache for most recent (today's) word", () => {
  beforeAll(() => {
    // Mock chrome storage
    const mockStorage = new MockStorage()
    window.chrome = {
      storage: {
        local: mockStorage,
      },
    }
  })

  it('If no recent word is available (at start) then fallback word will be returned', async () => {
    expect(await storage.getRecentWordOfTheDay()).toEqual(
      FALLBACK_WORD_OF_THE_DAY
    )
  })

  it('If word is added through setter then same word will be returned through getter', async () => {
    const someWord = MOCK_WORD_OF_THE_DAY_FN('some')
    expect(await storage.setRecentWordOfTheDay(someWord))
    expect(await storage.getRecentWordOfTheDay()).toEqual(someWord)
  })

  it('If word is added again through setter then recently added word will be returned through getter', async () => {
    const someWord = MOCK_WORD_OF_THE_DAY_FN('some')
    expect(await storage.setRecentWordOfTheDay(someWord))
    expect(await storage.getRecentWordOfTheDay()).toEqual(someWord)

    const anotherWord = MOCK_WORD_OF_THE_DAY_FN('another')
    expect(await storage.setRecentWordOfTheDay(anotherWord))
    expect(await storage.getRecentWordOfTheDay()).toEqual(anotherWord)
  })
})
