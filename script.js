const words = ['javascript', 'programming', 'computer', 'internet', 'developer', 'python', 'kotlin', 'data'];
let randomWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = [];
let remainingAttempts = 5;
function displayWord() {
    let display = '';
    for (let i = 0; i < randomWord.length; i++) {
        if (guessedWord.includes(randomWord[i])) {
            display += randomWord[i];
        } else {
            display += '_';
        }
        display += ' ';
    }
    document.getElementById('word-container').textContent = display;
}
function checkLetter() {
    let letter = document.getElementById('guess').value.toLowerCase();
    if (!guessedWord.includes(letter)) {
        guessedWord.push(letter);
        if (!randomWord.includes(letter)) {
            remainingAttempts--;
        }
        displayWord();
        checkWin();
    }
    document.getElementById('guess').value = '';
}
function checkWin() {
    if (remainingAttempts === 0) {
        document.getElementById('message').textContent = 'You lost! The word was: ' + randomWord;
    } else if (!document.getElementById('word-container').textContent.includes('_')) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the word!';
    } else {
        document.getElementById('message').textContent = 'Remaining attempts: ' + remainingAttempts;
    }
}
window.onload = function() {
    displayWord();
};














  

  
