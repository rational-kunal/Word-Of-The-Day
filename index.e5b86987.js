const e={word:"Offline",attribute:"Error",syllables:"💭",meaning:"You are currently offline.",example:"",date:""},t=void 0!==window.chrome&&void 0!==window.chrome.storage?window.chrome.storage.local:{get:t=>e,set:e=>{}},n="div.quick-def-box div.word-header div.word-and-pronunciation h1",o="div.quick-def-box div.word-attributes span.main-attr",d="div.quick-def-box div.word-attributes span.word-syllables",i="div.wod-article-container div.wod-definition-container p",a="div.wod-article-container div.wod-definition-container div.wotd-examples div.left-content-box p",r=e=>{document.getElementById("word-date").innerText=e.date,document.getElementById("word-main").innerText=e.word,document.getElementById("word-attr").innerText=e.attribute,document.getElementById("word-syllables").innerText=e.syllables,document.getElementById("word-meaning").innerHTML=e.meaning,document.getElementById("word-example").innerHTML=e.example};async function l(){console.log("OnLoad");const l=await(async()=>new Promise((n=>{t.get(["RECENT_WORD_OF_THE_DAY_KEY"],(t=>{void 0===t.RECENT_WORD_OF_THE_DAY_KEY?n(e):n(JSON.parse(t.RECENT_WORD_OF_THE_DAY_KEY))}))})))(),c=(new Date).toDateString();l.date!==c?(async()=>{const e=new Request("https://www.merriam-webster.com/word-of-the-day"),t=await fetch(e),r=await t.text();let l=(new DOMParser).parseFromString(r,"text/html");const c=e=>l.querySelector(e).innerHTML;return{word:c(n),attribute:c(o),syllables:c(d),meaning:c(i),example:c(a),date:(new Date).toDateString()}})().then((e=>{r(e),(async e=>{chrome.storage.local.set({RECENT_WORD_OF_THE_DAY_KEY:e})})(JSON.stringify(e))})).catch((()=>{l.date="Archived",r(l)})):r(l)}window.onload=()=>{l()};
//# sourceMappingURL=index.e5b86987.js.map