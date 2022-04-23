const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading

function loading() {
   loader.hidden = false;
   quoteContainer.hidden = true;

}

// Hide Loading
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
  }

}

// Get Quote from API
async function getQuote() {
    loading();
    const proxyURL = 'https://whispering-tor-04671.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {

      const response = await fetch(proxyUrl + apiUrl);
     const data = await response.json()

     // if Author is blank, add 'Unkown'
     if (data.quoteAuthor === '')  {
         authorText.innerText = 'Unknown';
     }else {
           authorText.innerText = data.quoteAuthor
     }





    }


