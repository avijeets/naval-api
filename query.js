// require all quote collections
const quotes = require('./quotes/getting-rich.json');

function allQuotes() {
    return quotes;
}

function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function idQuote(n) {
	return quotes[n - 1];
}

module.exports = {
    allQuotes,
    randomQuote,
    idQuote
};
