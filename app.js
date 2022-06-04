let number = Number(document.querySelector("#value").innerText);
let $numberspan = document.querySelector("#value");

const $btnincrease = document.querySelector(".btn-increase");
const $btnreset = document.querySelector(".btn-reset");
const $btndecrease = document.querySelector(".btn-decrease");

$btnincrease.addEventListener("click", function () {
  number = number + 1;
  Number(($numberspan.innerText = number));
  colorNumber(number);
});

$btndecrease.addEventListener("click", function () {
  number = number - 1;
  $numberspan.innerText = number;
  colorNumber(number);
});

$btnreset.addEventListener("click", function () {
  number = 0;
  $numberspan.innerText = 0;
  colorNumber(number);
});

function colorNumber(number) {
  if (number == 0) {
    $numberspan.classList.remove("positive", "negative");
  }
  if (number < 0) {
    $numberspan.classList.remove("positive");
    $numberspan.classList.add("negative");
  }
  if (number > 0) {
    $numberspan.classList.add("positive");
    $numberspan.classList.remove("negative");
  }
}
