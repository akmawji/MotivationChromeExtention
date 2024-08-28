const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "You learn more from failure than from success. Don’t let it stop you. Failure builds character. – Unknown",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "People who are crazy enough to think they can change the world, are the ones who do. – Rob Siltanen",
  "Failure will never overtake me if my determination to succeed is strong enough. – Og Mandino",
  "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur. – Mohnish Pabrai",
  "We may encounter many defeats but we must not be defeated. – Maya Angelou",
  "Knowing is not enough; we must apply. Wishing is not enough; we must do. – Johann Wolfgang Von Goethe"
];

document.addEventListener('DOMContentLoaded', function () {
  const quoteDiv = document.getElementById('quote');
  const newQuoteButton = document.getElementById('new-quote');

  function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDiv.textContent = quotes[randomIndex];
  }

  newQuoteButton.addEventListener('click', displayQuote);

  // Display a quote when the popup opens
  displayQuote();
});