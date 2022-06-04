let number = Number(document.querySelector("#value").innerText);
let $numberspan = document.querySelector("#value");
console.log(number);

const $btnincrease = document.querySelector(".btn-increase");
const $btnreset = document.querySelector(".btn-reset");
const $btndecrease = document.querySelector(".btn-decrease");

$btnincrease.addEventListener("click", function () {
  number++;

  Number(($numberspan.innerText = number));
});

$btndecrease.addEventListener("click", function () {
  number--;

  Number(($numberspan.innerText = number));
});
$btnreset.addEventListener("click", function () {
  number = 0;
  $numberspan.innerText = 0;
});
