let randomNumber;
let attempts;
const maxAttempts = 10;

const message = document.getElementById('message');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resetButton = document.getElementById('resetButton');
const giveUpButton = document.getElementById('giveUpButton');
const attemptsDisplay = document.getElementById('attempts');

function initializeGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = 'Guess a number between 1 and 100:';
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
  guessInput.disabled = false;
  guessButton.disabled = false;
  giveUpButton.disabled = false;
}

function checkGuess() {
  const userGuess = Number(guessInput.value);
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }
  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  if (userGuess === randomNumber) {
    message.textContent = `Correct! The number was ${randomNumber}.`;
    endGame();
  } else if (attempts >= maxAttempts) {
    message.textContent = `Out of attempts! The number was ${randomNumber}.`;
    endGame();
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try again.';
  } else {
    message.textContent = 'Too high! Try again.';
  }
}

function endGame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  giveUpButton.disabled = true;
}

function giveUp() {
  message.textContent = `You gave up! The number was ${randomNumber}.`;
  endGame();
}

guessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', initializeGame);
giveUpButton.addEventListener('click', giveUp);

initializeGame();
