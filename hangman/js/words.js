import dataJSON from "../data/data.json" assert { type: "json" };

export let capital;
export let country;
export let charArray = [];

export const generateWord = () => {
  const userInputSection = document.getElementById("user-input-section");
  const question = document.querySelector(".question");
  const counter = document.querySelector(".counter");

  // choose random item from array in `data.json`
  let randomItem = dataJSON[Math.floor(Math.random() * dataJSON.length)];

  // get country and capital
  capital = randomItem.city;
  country = randomItem.country;

  userInputSection.innerText = "";
  //replace every letter with span containing dash
  charArray = capital.replace(/./g, '<span class="dashes">__</span>');

  // display each letter as span (__)
  userInputSection.innerHTML = charArray;
  // display hint
  question.innerHTML = `The capital of ${country}`;
  counter.innerHTML = "Incorrect guesses: 0 / 6";
  // hint
  console.log(capital);
};

export const updateLossCounter = (lossCount) => {
  const counter = document.querySelector(".counter");
  if (counter) {
    counter.innerHTML = `Incorrect guesses: ${lossCount} / 6`;
  }
};
