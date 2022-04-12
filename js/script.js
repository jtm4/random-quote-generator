/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "A day wasted on others is not wasted on one's self.",
    source: 'Charles Dickens',
    citation: 'A Tale of Two Cities',
    year: 1859
  },
  {
    quote: "No one is useless in this world who lightens the burdens of another.",
    source: 'Charles Dickens',
    citation: 'Our Mutual Friend',
    year: 1865
  },
  {
    quote: "There's some good in this world, Mr.Frodo… and it's worth fighting for.",
    source: 'J.R.R. Tolkien (Samwise Gamgee)',
    citation: 'Lord of the Rings',
    year: 1954
  },
  {
    quote: "Those who look for the bad in people will surely find it.",
    source: "Abraham Lincoln",
  },
  {
    quote: "To ease another's heartache is to forget one's own.",
    source: "Abraham Lincoln",
  },
  {
    quote: "Christianity, if false, is of no importance, and if true, of infinite importance. The only thing it cannot be is moderately important.",
    source: "C.S. Lewis",
  }
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote(array) {
  let randomIndexNum = Math.floor((Math.random() * array.length));
  let randomQuoteObject = quotes[randomIndexNum];
  return randomQuoteObject;
}


/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  html += `</p>`;

  return document.getElementById('quote-box').innerHTML = html;
}


console.log(printQuote(quotes));


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);