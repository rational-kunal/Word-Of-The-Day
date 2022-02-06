- [ ] TODO: Add https://shields.io/ badges.

<br />
<div align="center">
  <a href="https://github.com/rational-kunal/Word-Of-The-Day">
    <img src="assets/favicon/icon128.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">Word of the Day - Chrome Extension</h2>

  <p align="center">
    A new word to learn everyday.
    <br />
    <a href="https://rational-kunal.github.io/Word-Of-The-Dayw">View as a Website 🌐</a>
    ·
    <a href="https://github.com/rational-kunal/Word-Of-The-Day/issues">Report Bug 🐛</a>
    ·
    <a href="https://github.com/rational-kunal/Word-Of-The-Day/issues">Request Feature ✨</a>
  </p>
</div>


## About
See **Word of the Day** everyday on a New Tab.
Assumption is that you will surely learn the word once you see it throught the day.

My main motivation is to expand my own vocabulary.
So please don't expect any other features.
But I am happy to implement any need-to-have Quality of Life features.
Once I got some free time to do it (still have many pending projects 😅!).

- [ ] TODO: Screenshots/Video

## How to install
1. Clone the repository.
```
git clone https://github.com/rational-kunal/Word-Of-The-Day.git
```
2. Change directory to cloned repository.
```
cd Word-Of-The-Day
```
3. Install dependecies.
```
npm ci
```
4. Build sorce code. This should create a `dist` folder.
```
npm run build
```
5. Go to `chrome://extensions/` on chrome browser.
6. Make sure Developer mode is checked.
7. Click on `Load Extensions`.
8. Select the dist folder.
9. Open a new tab and check that the Word of the Day appears.

## How it works
Word of the Day is fetched (webscraped) from [merriam-webster.com/word-of-the-day](https://www.merriam-webster.com/word-of-the-day). To minimise repetative webscraping the Extention will store recent Word of the Day in local storage. To ensure that webscraping still works correctly, tests runs every other day.

---

<a href="https://www.flaticon.com/free-icons/bookmark" title="bookmark icons">Bookmark icons created by Ilham Fitrotul Hayat - Flaticon</a>
