const video = document.getElementById("video");

const clock = document.getElementById("clock");

const videoGoBoom = document.getElementById("explosion");

const msg = document.getElementById("msg");

const over = document.getElementById("over");

msg.innerHTML = `<p> hurry up! You have 30 seconds left </p>`;

function playAudio(src, ms) {
  return setTimeout(() => {
    let voice = new Audio(src);
    voice.play();
  }, ms);
}

const halfMinute = playAudio("alert.wav", 30000);

const deepVoice = playAudio("male-deep-voice-countdown.wav", 49000);

const boom = playAudio("explosion-and-glass.wav", 60000);

const woawoawoawoaaaa = playAudio("sad-game-over.wav", 63000);

const explosion = setTimeout(() => {
  video.innerHTML = `<video id="realVideo" src="explosion.mov" autoplay muted> </video>`;
  over.innerHTML = `<div data-aos="fade-up"
     data-aos-duration="3000">

       <span>G A M E &nbsp; O V E R</span></div>`;
}, 59900);

function myStopFunction() {
  clearTimeout(deepVoice);
  clearTimeout(boom);
  clearTimeout(halfMinute);
  clearTimeout(woawoawoawoaaaa);
  clearTimeout(explosion);
}

const msgLoser = document.getElementsByClassName("loser");
const boxDiv = document.getElementsByClassName("box");
let count = 0;

const sec = document.getElementById("sec");

function creatBox() {
  let num = Math.floor(Math.random() * 35);
  console.log(num);

  for (let i = 0; i < num; i++) {
    sec.innerHTML += `<div class="loser-box">
        <p class="loser"> </p>
        <img class="box" " src="https://www.pngall.com/wp-content/uploads/5/Cardboard-Box.png" alt="" width="80px" >
        </div>
   `;
  }
  sec.innerHTML += ` <div class="winner-box">
  <p class="winner" id="winner-p"></p>
  <img class="win" src="https://www.pngall.com/wp-content/uploads/5/Cardboard-Box.png" alt="" width="80px" >
  </div>`;
  for (; num < 35; num++) {
    sec.innerHTML += `<div class="loser-box">
      <p class="loser"> </p>
      <img class="box" " src="https://www.pngall.com/wp-content/uploads/5/Cardboard-Box.png" alt="" width="80px" >
      </div>
 `;
  }
}

creatBox();

for (let i = 0; i < boxDiv.length; i++) {
  boxDiv[i].addEventListener("click", () => {
    count++;
    if (count > 5) {
      boxDiv.disabled = true;

      video.innerHTML = `<video id="realVideo" src="explosion.mov" autoplay muted></video>`;
      let boom = new Audio("explosion-and-glass.wav");
      let woawoawoawoaaaa = new Audio("sad-game-over.wav");

      boom.play(),
        woawoawoawoaaaa.play() &&
          myStopFunction(deepVoice, halfMinute, explosion);
      over.innerHTML = `<div data-aos="fade-up"
     data-aos-duration="3000">

       <span>G A M E &nbsp; O V E R</span></div>`;
    }

    if (
      boxDiv[i].src ===
      "https://www.pngall.com/wp-content/uploads/5/Cardboard-Box.png"
    ) {
      boxDiv[i].src = "https://pngimg.com/uploads/box/box_PNG43.png";

      msgLoser[i].innerHTML = `L O S E R !👎🏼😂`;
      let failSound = new Audio("wrong-box.wav");
      failSound.play();
    }
  });
}

const winnerP = document.getElementById("winner-p");
const win = document.getElementsByClassName("win");
console.log(win);
console.log(win[0]);
console.log(winnerP);
function boxWin() {
  win[0].addEventListener("click", () => {
    winnerP.innerHTML = `<button onclick=" myStopFunction()" id="btn">stop!✋🏽</button>`;

    if (
      win[0].src ===
      "https://www.pngall.com/wp-content/uploads/5/Cardboard-Box.png"
    ) {
      win[0].src = "https://pngimg.com/uploads/box/box_PNG43.png";
      let winner = new Audio("instant-win.wav");
      winner.play();
    }
  });
}
boxWin();
