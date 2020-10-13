const progressbar = document.querySelector(".propgress-done");

const pluseButton = document.querySelector(".pluse-btn");
const minusButton = document.querySelector(".minus-btn");

let sum = 0;
var interval;
pluseButton.addEventListener("mousedown", () => {
  progressbar.style.opacity = 1;
  interval = setInterval(() => {
    sum += 1;
    if (sum <= 100) {
      progressbar.setAttribute("data-done", sum);
      restart();
    } else {
      sum = 100;
    }
  }, 150);
});

pluseButton.addEventListener("mouseup", () => {
  clearInterval(interval);
});
pluseButton.addEventListener("mouseout", () => {
  clearInterval(interval);
});
minusButton.addEventListener("mousedown", () => {
  progressbar.style.opacity = 1;
  interval = setInterval(() => {
    sum -= 1;
    if (0 <= sum) {
      progressbar.setAttribute("data-done", sum);
      restart();
    } else {
      progressbar.style.opacity = 0;
      sum = 0;
    }
  }, 150);
});

minusButton.addEventListener("mouseup", () => {
  clearInterval(interval);
});
minusButton.addEventListener("mouseout", () => {
  clearInterval(interval);
});

function restart() {
  progressbar.style.width = progressbar.getAttribute("data-done") + "%";
  progressbar.innerText = progressbar.getAttribute("data-done") + "%";
}

function test() {
  console.log("test");
}

function show() {
  minusButton.classList.toggle("toggle");
}
