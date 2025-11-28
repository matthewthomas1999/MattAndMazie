const diceButton = document.querySelector("#randomButton")

diceButton.addEventListener('click', displayDiceRoll);

async function displayDiceRoll() {
    
    const imageContainer = document.getElementById('diceOutcome');

    try {
    const response = await fetch('https://qrandom.io/api/random/dice')
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error("Oh dear, help!")
    }

    else if (response.ok) {

    const roll = data.dice[0];    
  
    const img = document.createElement('img');
    img.src= `assets/dice-${roll}.png`;
    img.classList.add("images");
    imageContainer.innerHTML = "";
    imageContainer.appendChild(img)

    } else {

    imageContainer.textContent = "dice not found"

    }} catch (error) {
        error = "Oh dear, something went wrong!!"
        imageContainer.textContent= error
    }
}