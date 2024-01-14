import { capital, updateLossCounter } from "./_words.js";
import { drawMan } from "./_draw-man.js";
import { endGame } from "./_end-game.js";
import { newGame } from "./_new-game.js";
let winCount = 0;
export let lossCount = 0;

export const initializeGameLogic = () => {
  const buttons = document.querySelectorAll(".letters");
  const resultText = document.getElementById("result-text");
  let charArray = capital.toUpperCase().split("");
  let dashes = document.getElementsByClassName("dashes");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const clickedLetter = button.innerText.toUpperCase();
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
              resultText.innerHTML = `<h2 class='win-msg'>You Win!</h2><p>The word was <span>${capital}</span></p>`;
              endGame();
              setTimeout(newGame, 1000);
            }
          }
        });
        button.disabled = true;
      } else {
        lossCount += 1;
        updateLossCounter(lossCount);
        drawMan(lossCount);
        // lossCount is 6 => draw parts of man
        if (lossCount == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!</h2><p>The word was <span>${capital}</span></p>`;
          endGame();
          setTimeout(newGame, 1000);
        }
      }
      // letter button is disabled after clicking
      button.disabled = true;
    });
  });
};
