import { capital, updateLossCounter } from "./_words.js";
import { drawMan } from "./_draw-man.js";
import { endGame } from "./_end-game.js";
import { newGame } from "./_new-game.js";

export let handleButtonClick = null;
export let handleKeyPress = null;
export let winCount;
export let lossCount;

export const initializeGameLogic = () => {
  winCount = 0;
  lossCount = 0;

  const buttons = document.querySelectorAll(".letters");
  const resultText = document.getElementById("result-text");
  let dashes = document.getElementsByClassName("dashes");

  handleButtonClick = (event) => {
    const { target } = event;

    const clickedLetter = target.innerText.toUpperCase();
    const charArray = capital.toUpperCase().split("");

    // if array contains clciked letter, replace underscore with a letter. if no, draw parts of man
    if (charArray.includes(clickedLetter)) {
      charArray.forEach((char, index) => {
        // if char in array is same as clicked button
        if (char === clickedLetter) {
          // replace dash with letter
          dashes[index].innerText = char;
          winCount += 1;
          // if winCount equals word lenfth
          if (winCount == charArray.length) {
            resultText.innerHTML = `<h2 class='win-msg'>You Win!</h2><p class="word-msg">The word was <span class="capital-msg">${capital}</span></p>`;
            endGame();
            setTimeout(newGame, 1000);
          }
        }
      });
      target.disabled = true;
    } else {
      lossCount += 1;
      updateLossCounter(lossCount);
      drawMan(lossCount);
      // lossCount is 6 => draw parts of man
      if (lossCount == 6) {
        resultText.innerHTML = `<h2 class='lose-msg'>You Lose!</h2><p class="word-msg">The word was <span class="capital-msg">${capital}</span></p>`;
        endGame();
        setTimeout(newGame, 1000);
      }
    }
    // letter button is disabled after clicking
    target.disabled = true;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  handleKeyPress = (event) => {
    const pressedKey = event.key.toUpperCase();

    // ignore all keystrokes, that are not letter key
    if (!event.code.includes("Key")) {
      return;
    }
    console.log(event.code);

    // find pressed key on the virtual keyboard
    const virtualButton = Array.from(buttons).find(
      (button) => button.innerText.toUpperCase() === pressedKey
    );

    // if a button is found and not yet disabled, execute the game logic as if a virtual keyboard button had been pressed
    if (virtualButton && !virtualButton.disabled) {
      handleButtonClick({ target: virtualButton });
    }
  };

  document.addEventListener("keypress", handleKeyPress);
};
