export default class MockStorage {
  _cache = {}
  get = (keyList, resultCallback) => {
    const result = {}
    for (const key of keyList) {
      result[key] = this._cache[key]
    }
    resultCallback(result)
  }
  set = (keyValues) => {
    for (const key in keyValues) {
      this._cache[key] = keyValues[key]
    }
  }
}
