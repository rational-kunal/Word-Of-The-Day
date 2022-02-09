[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/rational-kunal/Word-Of-The-Day/Node.js%20CI?style=for-the-badge)](https://github.com/rational-kunal/Word-Of-The-Day/actions/workflows/node.js.yml)
[![GitHub issues](https://img.shields.io/github/issues/rational-kunal/Word-Of-The-Day?style=for-the-badge)](https://github.com/rational-kunal/Word-Of-The-Day/issues?q=is%3Aopen+is%3Aissue)
[![Twitter Follow](https://img.shields.io/twitter/follow/rational_kunal?style=for-the-badge)](https://twitter.com/rational_kunal)
[![GitHub followers](https://img.shields.io/github/followers/rational-kunal?style=for-the-badge)](https://github.com/rational-kunal)

<br />
<div align="center">
  <a href="https://github.com/rational-kunal/Word-Of-The-Day">
    <img src="assets/favicon/icon128.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">Word of the Day - Chrome Extension</h2>

  <p align="center">
    A new word to learn everyday.
    <br />
    <a href="https://rational-kunal.github.io/Word-Of-The-Day">View as a Website 🌐</a>
    ·
    <a href="https://github.com/rational-kunal/Word-Of-The-Day/issues">Report Bug 🐛</a>
    ·
    <a href="https://github.com/rational-kunal/Word-Of-The-Day/issues">Request Feature ✨</a>
  </p>
</div>

## About

See **Word of the Day** every day on a New Tab.
The assumption is that you will surely learn a new word once you see it throughout the day.

My main motivation is to expand my own vocabulary.
So please don't expect any other out-of-the-box features.
But I am happy to implement any essential Quality of Life features.
If and when I got some free time to do them (planning to work on some other noteworthy projects 😎🤞).

![screenshot](https://user-images.githubusercontent.com/28783605/153247797-febf4523-32ca-4797-9a6e-d902f4db5ba6.png)

## How to install

1. Clone the repository.

```
git clone https://github.com/rational-kunal/Word-Of-The-Day.git
```

2. Change the directory to the cloned repository.

```
cd Word-Of-The-Day
```

3. Install dependencies.

```
npm ci
```

4. Build source code. This should create a `dist` folder.

```
npm run build
```

5. Go to `chrome://extensions` on the chrome browser.
6. Make sure `Developer mode` is checked.
7. Click on `Load unpacked Extensions`.
8. Select the `dist` folder.
9. Open a new tab and check that the Word of the Day appears.

## How it works

- Word of the Day is fetched (i.e. web scraped) from [merriam-webster.com/word-of-the-day](https://www.merriam-webster.com/word-of-the-day).
- To minimize repetitive web scraping, the Extension will **store recent Word of the Day in local storage**.
- To ensure that web scraping still works correctly, tests on the parsing logic are scheduled to run every other day.

---

<a href="https://www.flaticon.com/free-icons/bookmark" title="bookmark icons">Bookmark icons created by Ilham Fitrotul Hayat - Flaticon</a>
