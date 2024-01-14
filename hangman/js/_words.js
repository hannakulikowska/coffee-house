import dataJSON from "../data/data.json" assert { type: "json" };

export let capital;
export let country;

export const generateWord = () => {
  const userInputSection = document.getElementById("user-input-section");
  const question = document.querySelector(".question");

  userInputSection.innerText = "";

  // choose random item from array in `data.json`
  let randomItem = dataJSON[Math.floor(Math.random() * dataJSON.length)];

  // get country and capital
  capital = randomItem.city;
  country = randomItem.country;

  //replace every letter with span containing dash
  let displayItem = capital.replace(/./g, '<span class="dashes">__</span>');

  // display each letter as span (__)
  userInputSection.innerHTML = displayItem;
  // display hint
  question.innerHTML = `The capital of ${country}`;

  // hint
  console.log(capital);
};
