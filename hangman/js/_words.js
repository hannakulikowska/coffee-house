import dataJSON from "../data/data.json" assert { type: "json" };

export const generateWord = () => {
  const userInputSection = document.getElementById("user-input-section");

  userInputSection.innerText = "";

  // choose random item from array in `data.json`
  let randomItem = dataJSON[Math.floor(Math.random() * dataJSON.length)];

  // get capital
  let capital = randomItem.city;

  //replace every letter with span containing dash
  let displayItem = capital.replace(/./g, '<span class="dashes">__</span>');

  // display each letter as span (__)
  userInputSection.innerHTML = displayItem;

  // hint
  console.log(capital);
};
