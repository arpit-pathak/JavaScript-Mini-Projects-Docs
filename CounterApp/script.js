const outMin = document.querySelector(".outMin");
const outSec = document.querySelector(".outSec");
const input = document.getElementById("userinput");
const startbtn = document.querySelector(".start");
const test = document.querySelector(".test");
const stopbtn = document.querySelector(".stop");

let totalSecond = 0;
let interval = null;

const startTimer = () => {
  userInput = input.value;
  if (userInput < 0) return;
  //   if (isNaN(userInput)) alert("Use Number only");
  if (userInput < 60) {
    stop();
    totalSecond = userInput * 60;
    updateInterfaceTime();
    start();
  }
};

function updateInterfaceTime() {
  const minutes = Math.floor(totalSecond / 60);
  const second = totalSecond - minutes * 60;

  outMin.textContent = minutes.toString().padStart(2, "0");
  outSec.textContent = second.toString().padStart(2, "0");
}

function start() {
  if (totalSecond === 0) return;
  interval = setInterval(() => {
    totalSecond--;
    updateInterfaceTime();

    if (totalSecond === 0) {
      stop();
    }
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

startbtn.addEventListener("click", startTimer);
stopbtn.addEventListener("click", stop);
