const words = ["javascript", "python", "hangman", "coding"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let displayWord = "_".repeat(selectedWord.length);
let attempts = 6;

document.getElementById("word-display").innerText = displayWord;

function checkLetter() {
    let guess = document.getElementById("guess").value.toLowerCase();
    document.getElementById("guess").value = "";

    if (selectedWord.includes(guess)) {
        let newDisplay = "";
        for (let i = 0; i < selectedWord.length; i++) {
            newDisplay += selectedWord[i] === guess ? guess : displayWord[i];
        }
        displayWord = newDisplay;
    } else {
        attempts--;
    }

    document.getElementById("word-display").innerText = displayWord;
    document.getElementById("message").innerText = attempts > 0 ? `Attempts left: ${attempts}` : "Game Over!";
}
