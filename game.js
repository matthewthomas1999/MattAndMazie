const sidesInput = document.getElementById("sidesInput");
const startButton = document.getElementById("startButton");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const messages = document.getElementById("messages");
const sidesContainer = document.getElementById("sidesContainer")
const guessContainer = document.getElementById("guessContainer")
const playAgainButton = document.getElementById("playAgainButton")
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
startButton.addEventListener("click", () => {
  const sides = Number(sidesInput.value);
  if (!sidesInput.value){
    messages.textContent = "please enter a number of sides"
    return;
  }
  else if (!Number.isInteger(sides)) {
    messages.textContent = "Pick a integer";
    return;
  }
  else if (sides <=2) {
    messages.textContent = "Pick a integer greater than 2";
    return;
  }
  sidesContainer.style.display = "none"
  guessContainer.style.display = "block"
  messages.textContent = `You have chosen a: ${sides} sided dice!`;
});
guessButton.addEventListener("click", () => {
const sides = Number(sidesInput.value)
const userGuess = Number(guessInput.value)
if (!sidesInput.value || !Number.isInteger(sides) || sides <=2){
    messages.textContent = "Please pick a number of sides FIRST"
    return;
}
if(!guessInput.value){
    messages.textContent = "Enter Your guess"
    return;
}
if(!Number.isInteger(userGuess)){
    messages.textContent = "guess must be a integer"
    return;
}
if (userGuess < 1 || userGuess > sides){
    messages.textContent = "please guess in our range"
    return;
}
const roll = rollDice(sides);
messages.textContent = `You have rolled a: ${roll}!`
if (userGuess === roll) {
    messages.textContent += " You are a winner!"
    const gif1 = document.createElement('img');
    gif1.src= `assets/winner.gif`;
    imageContainer.innerHTML = "";
    imageContainer.appendChild(gif1)
} else {messages.textContent +=`, but you guessed ${userGuess} which was wrong.`
 const gif1 = document.createElement('img');
    gif1.src= `assets/loser.gif`;
    imageContainer.innerHTML = "";
    imageContainer.appendChild(gif1)}

guessContainer.style.display = "none"
playAgainButton.style.display = "block"
});
playAgainButton.addEventListener("click", () => {
    sidesInput.value ="";
    guessInput.value ="";
    messages.textContent = "";
    sidesContainer.style.display = "block";
    guessContainer.style.display = "none"
    playAgainButton.style.display = "none"
})