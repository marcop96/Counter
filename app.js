let number = Number(document.querySelector("#value").innerText);
let $numberspan = document.querySelector("#value");

const $btnincrease = document.querySelector(".btn-increase");
const $btnreset = document.querySelector(".btn-reset");
const $btndecrease = document.querySelector(".btn-decrease");

$btnincrease.addEventListener("click", function () {
  number = number + 1;
  Number(($numberspan.innerText = number));
  $numberspan.classList.add("positive");
  $numberspan.classList.remove("negative");
});

$btndecrease.addEventListener("click", function () {
  number = number - 1;
  console.log(number);
  $numberspan.innerText = number;
});

$btnreset.addEventListener("click", function () {
  number = 0;
  $numberspan.innerText = 0;
});
