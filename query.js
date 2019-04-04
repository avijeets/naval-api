// require all quote collections
const quotes = require('./quotes/getting-rich.json');

function allQuotes() {
    return quotes;
}

function randomQuote() {
    return quotes[Math.random() * quotes.length];
}

module.exports = {
    allQuotes,
    randomQuote
};
