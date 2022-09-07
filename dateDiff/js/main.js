import { getDateDiff } from "./getDateDiff.js";
import { showError, showErrorTimer, showResult } from "./showResult.js";
import { countdownTimer } from "./timerDate/getTimer.js";

// Калькулятор дат
const form = document.getElementById("datecalc");
const timer = document.getElementById("datetimer");

form.onsubmit = (event) => {
  event.preventDefault();

  const formDate = new FormData(event.target);

  const firstInput = formDate.get("firstDate");
  const secondInput = formDate.get("secondDate");

  const dateDiff = getDateDiff(firstInput, secondInput);

  if (!firstInput || !secondInput) {
    showError("Please, set date");
  } else {
    showResult(dateDiff);
  }
};

// Таймер дат
timer.onsubmit = (event) => {
  event.preventDefault();

  const formDate = new FormData(event.target);

  const thirdInput = formDate.get("thirdDate");

  const deadline = new Date(thirdInput);

  if (!thirdInput) {
    showErrorTimer("Please, choose date");
  } else {
    countdownTimer(deadline);
  }
};
