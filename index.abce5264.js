const e={word:"Offline",attribute:"Error",syllables:"💭",meaning:"You are currently offline.",example:"",date:""},t=(void 0!==window.chrome&&window.chrome.storage,(t,n)=>n(e)),n="div.quick-def-box div.word-header div.word-and-pronunciation h1",i="div.quick-def-box div.word-attributes span.main-attr",o="div.quick-def-box div.word-attributes span.word-syllables",d="div.wod-article-container div.wod-definition-container p",r="div.wod-article-container div.wod-definition-container div.wotd-examples div.left-content-box p",a=e=>{document.getElementById("word-date").innerText=e.date,document.getElementById("word-main").innerText=e.word,document.getElementById("word-attr").innerText=e.attribute,document.getElementById("word-syllables").innerText=e.syllables,document.getElementById("word-meaning").innerHTML=e.meaning,document.getElementById("word-example").innerHTML=e.example};async function l(){const l=await(async()=>new Promise((n=>{t(["RECENT_WORD_OF_THE_DAY_KEY"],(t=>{void 0===t.RECENT_WORD_OF_THE_DAY_KEY?n(e):n(JSON.parse(t.RECENT_WORD_OF_THE_DAY_KEY))}))})))(),w=(new Date).toDateString();l.date!==w?(async()=>{const e=new Request("https://www.merriam-webster.com/word-of-the-day"),t=await fetch(e),a=await t.text();let l=(new DOMParser).parseFromString(a,"text/html");const w=e=>l.querySelector(e).innerHTML;return{word:w(n),attribute:w(i),syllables:w(o),meaning:w(d),example:w(r),date:(new Date).toDateString()}})().then((e=>{a(e),(async e=>{chrome.storage.local.set({RECENT_WORD_OF_THE_DAY_KEY:e})})(JSON.stringify(e))})).catch((()=>{l.date="Archived",a(l)})):a(l)}window.onload=()=>{l()};
//# sourceMappingURL=index.abce5264.js.map
