const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const xButton = document.getElementById('X');
const newQuoteBtn = document.getElementById('new-quote');

// Local Quotes
// Show New Quote
function newQuote(){
    // Pick a random quote from localQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // Check Quote length to determine styling
    if (quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;

    //Replace Author with 'Unknown' if Author field is blank
    if (!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }
}
newQuote();


// Tweet / X Quote
function xQuote(){
    const xUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(xUrl, '_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
xButton.addEventListener('click', xQuote);



























// API
//let apiQuotes = [];

// Get Quotes from API

// async function getQuotes(){
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error){
//         // Catch Error Here
//         alert('Error!');
//     }
// }

// On Load
// getQuotes();
