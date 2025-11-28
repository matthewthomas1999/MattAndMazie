const diceButton = document.querySelector("#randomButton")
const imageContainer = document.getElementById('diceOutcome');

diceButton.addEventListener('click', displayDiceRoll);

async function displayDiceRoll() {


    try {
    const response = await fetch('https://dice-api.genzouw.com/v1/dice')
    const data = await response.json();

    if (response.ok) {
    
    const roll = data.dice;    
  
    const img = document.createElement('img');
    img.src= `assets/dice-${roll}.png`;
    img.classList.add("images");
    imageContainer.innerHTML = "";
    imageContainer.appendChild(img)

    } else {

    imageContainer.textContent = "dice not found"

    }} catch (error) {
        console.error(error)
        imageContainer.textContent= "Oh dear, something went wrong!!"
    }
}