const rolls = document.getElementById("rolls");
const game = document.getElementById("game");

const roll1 = setTimeout(() => {
  rolls.innerHTML += `<h3>there is a bomb about to go BOOM!!!!!!</h3>`;
}, 1000);
const roll2 = setTimeout(() => {
  rolls.innerHTML += `<h4>Find the button Inside the BOXES to STOP the bomb form going BOOM</h4>
`;
}, 2000);
const roll3 = setTimeout(() => {
  rolls.innerHTML += ` <h2>You have ONLY 5 times to guess</h2>`;
}, 3000);

game.innerHTML = `<button class="goToBtn"><a class="a" href="firstLevel.html"> start</a></button>`;
// game.innerHTML += `<button><a href="secondsLevel.html"> 2 level</a></button>`;
