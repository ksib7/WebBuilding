import { declensionNum } from "./timerDate/declansion";

const result = document.getElementById("datecalc__result");

const $days = document.querySelector(".timer__days");
const $hours = document.querySelector(".timer__hours");
const $minutes = document.querySelector(".timer__minutes");
const $seconds = document.querySelector(".timer__seconds");

export const showError = (errorText) => {
  result.innerText = errorText;
};

export const showResult = ({ years, months, days }) => {
  result.innerText = `Year: ${years} Month: ${months} Day: ${days}`;
};

export const showTimerResult = (days, hours, minutes, seconds) => {
  $days.innerText = days < 10 ? "0" + days : days;
  $hours.innerText = hours < 10 ? "0" + hours : hours;
  $minutes.innerText = minutes < 10 ? "0" + minutes : minutes;
  $seconds.innerText = seconds < 10 ? "0" + seconds : seconds;

  $days.dataset.title = declensionNum(days, ["день", "дня", "дней"]);
  $hours.dataset.title = declensionNum(hours, ["час", "часа", "часов"]);
  $minutes.dataset.title = declensionNum(minutes, [
    "минута",
    "минуты",
    "минут",
  ]);
  $seconds.dataset.title = declensionNum(seconds, [
    "секунда",
    "секунды",
    "секунд",
  ]);
};
