let numberEl = document.getElementById("number");
let numberTwoEl = document.getElementById("numberTwo");
let numberThreeEl = document.getElementById("numberThree");

let counterfirst = 0;

setInterval(() => {
  if (counterfirst == 100) {
    clearInterval();
  } else {
    counterfirst += 1;
    numberEl.innerHTML = counterfirst + "%";
  }
}, 9);


let counterSecond = 0;

setInterval(() => {
  if (counterSecond == 90) {
    clearInterval();
  } else {
    counterSecond += 1;
    numberTwoEl.innerHTML = counterSecond + "%";
  }
}, 9);


let counterThree = 0;

setInterval(() => {
  if (counterThree == 70) {
    clearInterval();
  } else {
    counterThree += 1;
    numberThreeEl.innerHTML = counterThree + "%";
  }
}, 9);
