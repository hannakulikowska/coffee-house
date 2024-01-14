import dataJSON from "../data/data.json" assert { type: "json" };
import { lossCount } from "./_game-logic.js";

export let capital;
export let country;

export const generateWord = () => {
  const userInputSection = document.getElementById("user-input-section");
  const question = document.querySelector(".question");
  const counter = document.querySelector(".counter");

  userInputSection.innerText = "";

  // choose random item from array in `data.json`
  let randomItem = dataJSON[Math.floor(Math.random() * dataJSON.length)];

  // get country and capital
  capital = randomItem.city;
  country = randomItem.country;

  counter.innerHTML = `Incorrect guesses: ${lossCount} / 6`;
  //replace every letter with span containing dash
  let displayItem = capital.replace(/./g, '<span class="dashes">__</span>');

  // display each letter as span (__)
  userInputSection.innerHTML = displayItem;
  // display hint
  question.innerHTML = `The capital of ${country}`;

  // hint
  console.log(capital);
};

export const updateLossCounter = (lossCount) => {
  const counter = document.querySelector(".counter");
  if (counter) {
    counter.innerHTML = `Incorrect guesses: ${lossCount} / 6`;
  }
};
