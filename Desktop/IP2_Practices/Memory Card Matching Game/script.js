// script.js

const symbols = ['🍎', '🍌', '🍇', '🍉', '🍒', '🍓', '🥝', '🍍'];
let cards = [...symbols, ...symbols];
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let attempts = 0;

const gameContainer = document.querySelector('.game-container');
const attemptsDisplay = document.getElementById('attempts');
const restartButton = document.getElementById('restart');

// Shuffle cards
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// Create card elements
function createCards() {
  gameContainer.innerHTML = '';
  shuffle(cards);
  cards.forEach(symbol => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.symbol = symbol;

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.textContent = symbol;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    gameContainer.appendChild(card);

    card.addEventListener('click', flipCard);
  });
}

// Flip card function
function flipCard() {
  if (lockBoard || this === firstCard || this.classList.contains('flip')) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  attempts++;
  attemptsDisplay.textContent = attempts;
  checkForMatch();
}

// Check for match
function checkForMatch() {
  const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;
  isMatch ? disableCards() : unflipCards();
}

// Disable cards
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
  if (document.querySelectorAll('.card.flip').length === cards.length) {
    setTimeout(() => alert(`Congratulations! You won in ${attempts} attempts.`), 500);
  }
}

// Unflip cards
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}

// Reset board
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Restart game
restartButton.addEventListener('click', () => {
  attempts = 0;
  attemptsDisplay.textContent = attempts;
  createCards();
});

// Initialize game
createCards();
