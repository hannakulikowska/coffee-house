import { handleButtonClick, handleKeyPress } from "./game-logic.js";

export const endGame = () => {
  const letterButtons = document.querySelectorAll(".letters");
  letterButtons.forEach((button) => {
    button.disabled = true;
    button.removeEventListener("click", handleButtonClick);
  });
  document.removeEventListener("keypress", handleKeyPress);
};
