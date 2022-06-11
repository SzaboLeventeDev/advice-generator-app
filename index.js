const diceImage = document.querySelector("#dice");
const adviceId = document.querySelector(".adviceId");
const adviceText = document.querySelector(".advice");

diceImage.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
    .then(data => data.json())
    .then(json => {
        console.log(json.slip);
        adviceId.innerText = `Advice #${json.slip.id}`;
        adviceText.innerText = json.slip.advice;
    })
})