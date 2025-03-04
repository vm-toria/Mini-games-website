const buttonGuessTheNumber = document.getElementById('button-guess-the-number');
const secretNumber = Math.floor(Math.random() * 100) + 1;
buttonGuessTheNumber.addEventListener('click', () => {
    let userInput;
    while (userInput !== secretNumber) {
        userInput = Number(prompt('Guess the number: '));
        if (userInput === 0) {
            alert('Sad to see you go, come back later!');
            return;
        }
        if (isNaN(userInput)) {
            alert('Hmmm, seems like you entered not a number! Try again!')
        }
        if (userInput < secretNumber) {
            alert('Opps! Wrong number. The secret number is bigger. Try again!');
            continue;
        }
        if (userInput > secretNumber) {
            alert('Opps! Wrong number. The secret number is smaller. Try again!');
            continue;
        }
    }
    alert('Congratulations! You guessed the number!');
});
