const gosp = document.querySelector("#gosp");
const gosc = document.querySelector("#gosc");
const dogr = document.querySelectorAll('[name="dogr"]');
const dod = document.querySelectorAll('[name="dod"]');
const form = document.querySelector("form");
const display = document.querySelector("#display");
const reset = document.querySelector("#resetMeczu");
const gospwynik = document.querySelector("#wynikgosp");
const goscwynik = document.querySelector("#wynikgosc");
form.addEventListener("submit", handleSubmit);
function handleSubmit(evt) {
  evt.preventDefault();
  display.innerHTML += `Przewidujesz wynik meczu ${gosp.value} z ${gosc.value} ${gospwynik.value}-${goscwynik.value}<br>`;
  for (let i = 0; i < dogr.length; i++) {
    if (dogr[i].checked) {
      display.innerHTML += `Czy jest dogrywka: ${dogr[i].value} <br>`;
    }
  }
  display.innerHTML += `Dodatkowe statystyki: <br>`;
  for (let i = 0; i < dod.length; i++) {
    if (dod[i].checked) {
      display.innerHTML += `${dod[i].value} <br>`;
    }
  }
}
reset.addEventListener("click", resetowanie);
function resetowanie(evt) {
  evt.preventDefault();
  display.innerHTML = "";
}
