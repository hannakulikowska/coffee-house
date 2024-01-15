import { generateWord, updateLossCounter } from "./words.js";
import { canvasCreator } from "./canvas.js";
import { lossCount, handleKeyPress } from "./game-logic.js";
import { initializeGameLogic } from "./game-logic.js";
import { handleButtonClick } from "./game-logic.js";

export const newGame = () => {
  const popup = document.querySelector(".new-game-popup");
  popup.classList.remove("hide");
  document.removeEventListener("keypress", handleKeyPress);
  setupNewGameButton();
  initializeGameLogic();
};

export const initializeNewGame = () => {
  const popup = document.querySelector(".new-game-popup");
  const buttons = document.querySelectorAll(".letters");

  if (popup) {
    popup.classList.add("hide");
  }

  buttons.forEach((button) => {
    button.disabled = false;
    button.addEventListener("click", handleButtonClick);
  });

  canvasCreator();
  generateWord();
  updateLossCounter(lossCount);
};

export const setupNewGameButton = () => {
  const newGameButton = document.getElementById("new-game-button");
  if (newGameButton) {
    newGameButton.addEventListener("click", initializeNewGame);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setupNewGameButton();
});
