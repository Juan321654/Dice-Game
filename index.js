let firstDice = document.querySelector(".img1");
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage = `./images/dice${randomNumber1}.png`
let randomImage2 = `./images/dice${randomNumber2}.png`
document.querySelector(".img1").setAttribute("src", randomImage)
document.querySelector(".img2").setAttribute("src", randomImage2)
let winnerDisplay = document.getElementById("display")


if (randomNumber1 > randomNumber2) {
  winnerDisplay.innerHTML = "Player 1 wins"
} else if (randomNumber1 == randomNumber2){
  winnerDisplay.innerHTML = "Draw"
} else {
  winnerDisplay.innerHTML = "Player 2 wins"
}