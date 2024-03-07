// Local Quotes
// Show New Quote
function newQuote(){
    // Pick a random quote from localQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}
newQuote();



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
