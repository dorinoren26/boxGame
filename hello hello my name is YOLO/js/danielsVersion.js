const video = document.getElementById("video");

const clock = document.getElementById("clock");

const videoGoBoom = document.getElementById("explosion");

const msg = document.getElementById("msg");

const over = document.getElementById("over");

const section = document.getElementById("sec");

const winnerP = document.getElementById("winner-p");

const win = document.getElementsByClassName("win");

const msgLoser = document.getElementsByClassName("loser");

const boxDiv = document.getElementsByClassName("box");

console.log(boxDiv);
msg.innerHTML = `<p> hurry up! You have 30 seconds left </p>`;

function playAudio(src, ms) {
  return setTimeout(() => {
    let voice = new Audio(src);
    voice.play();
  }, ms);
}

const halfMinute = playAudio("./js/alert.wav", 30000);

const deepVoice = playAudio("./js/male-deep-voice-countdown.wav", 49000);

const boom = playAudio("./js/explosion-and-glass.wav", 60000);

const woawoawoawoaaaa = playAudio("./js/sad-game-over.wav", 63000);

const explosion = setTimeout(() => {
  video.innerHTML = `<video id="realVideo" src="./sounds/explosion.mov" autoplay muted> </video>`;
  over.innerHTML = `<div data-aos="fade-up"
     data-aos-duration="3000">

       <span>G A M E &nbsp; O V E R</span></div>`;
}, 59900);

function myStopFunction() {
  clearTimeout(deepVoice);
  clearTimeout(countdown);
  clearTimeout(halfMinute);
  clearTimeout(woawoawoawoaaaa);
}

let count = 0;

function switchBoxImage() {
  for (let i = 0; i < boxDiv.length; i++) {
    // boxDiv[i].addEventListener("click", (e) => {
    // const item = target;
    // console.log(boxDiv[i]);
    // count++;
    // console.log(count);
    // if (count > 5) {
    //   boxDiv.disabled = true;

    //   video.innerHTML = `<video id="realVideo" src="explosion.mov" autoplay muted></video>`;
    //   let boom = new Audio("explosion-and-glass.wav");
    //   boom.play();
    //   over.innerHTML = `<div data-aos="fade-up"
    //    data-aos-duration="3000">

    //      <span>G A M E &nbsp; O V E R</span></div>`;
    // }
    boxDiv[i].addEventListener("click", () => {
      if (
        boxDiv[i].src ===
        "https://www.pngall.com/wp-content/uploads/5/Cardboard-Box.png"
      ) {
        boxDiv[i].src = "https://pngimg.com/uploads/box/box_PNG43.png";

        msgLoser[i].innerHTML = `L O S E R !👎🏼😂`;
        let failSound = new Audio("wrong-box.wav");
        failSound.play();
      } else {
        boxDiv[i].src =
          "https://www.pngall.com/wp-content/uploads/5/Cardboard-Box.png";

        msgLoser[i].innerHTML = ``;
        return;
      }
    });
  }
}

// function switchWinBox() {
//   // win[0].addEventListener("click", (e) => {
//   winnerP.innerHTML = `<button onclick=" myStopFunction()" id="btn">stop!✋🏽</button>`;

//   // const item2 = e.target;
//   if (
//     boxDiv[i].src ===
//     "https://www.pngall.com/wp-content/uploads/5/Cardboard-Box.png"
//   ) {
//     boxDiv[i].src = "https://pngimg.com/uploads/box/box_PNG43.png";
//     let winner = new Audio("instant-win.wav");
//     winner.play();
//   } else {
//     boxDiv[i].src =
//       "https://www.pngall.com/wp-content/uploads/5/Cardboard-Box.png";
//     winnerP.innerHTML = "";
//   }
//   // });
// }

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt();

function createBoxes(amount = 36) {
  const boxes = new Array(amount).fill(false);
  boxes[getRandomInt(1, amount)] = true;
  return boxes;

  //   for (let i = 0; i < amount; i++) {
  //     boxes[i] = Math.random() < threshold;
  //   }
  //   console.log(boxes);
}

createBoxes();
console.log(createBoxes());
function renderBoxes(boxes) {
  return boxes
    .map((box) =>
      box
        ? (section.innerHTML = `
  <div class="winner-box">
  <p class="winner" id="winner-p"></p>
 <img  onclick="switchWinBox()" class=" win" src="https://www.pngall.com/wp-content/uploads/5/Cardboard-Box.png" alt="" width="80px" >
 </div>
  `)
        : (section.innerHTML = `
  <div class="loser-box">
  <p class="loser"></p>
 <img onclick="switchBoxImage()" class="box" src="https://www.pngall.com/wp-content/uploads/5/Cardboard-Box.png" alt="" width="80px" >
 </div>`)
    )
    .join("");
}

section.innerHTML = renderBoxes(createBoxes());
