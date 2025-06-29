const gameResult = document.getElementById("gameResult");
const userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    const guessedNumber = parseInt(userInput.value);
    userInput.value = "";

    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
        showResult("⛔ Enter a valid number between 1 and 100", "crimson", "invalid");
        return;
    }

    if (guessedNumber > randomNumber) {
        showResult("📈 Too High! Try Again.", "#1e217c", "wrong");
    } else if (guessedNumber < randomNumber) {
        showResult("📉 Too Low! Try Again.", "#1e217c", "wrong");
    } else {
        showResult("🎉 Congratulations! You got it right.", "green", "correct");
        disableGame();
    }
}

function showResult(message, bgColor, statusClass) {
    gameResult.textContent = message;
    gameResult.style.backgroundColor = bgColor;
    gameResult.className = `game-result ${statusClass}`;
}

function disableGame() {
    document.querySelector(".check-guess").disabled = true;
    userInput.disabled = true;
}
