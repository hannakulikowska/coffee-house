export { createPage };
import { createKeyboard } from "./keyboard.js";
import { canvasCreator } from "./canvas.js";
import { generateWord } from "./words.js";
import { initializeGameLogic } from "./game-logic.js";

// Create page
function createPage() {
  // create page__container
  const container = document.createElement("div");
  container.className = "page__container";
  document.body.insertBefore(container, document.body.firstChild);

  // create header
  const header = document.createElement("div");
  header.className = "header";
  container.appendChild(header);

  // create title
  const title = document.createElement("h1");
  title.className = "header__title";
  title.textContent = "Hangman";
  header.appendChild(title);

  // create canvas-container
  const canvasContainer = document.createElement("div");
  canvasContainer.className = "canvas-container";
  container.appendChild(canvasContainer);

  // create canvas tag in canvas container
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  canvas.width = 150;
  canvas.height = 200;
  canvasContainer.appendChild(canvas);

  // create container for question and answer in canvas container
  const guess = document.createElement("div");
  guess.className = "guess-container";
  canvasContainer.appendChild(guess);

  // create box for guess word
  const userInputSection = document.createElement("div");
  userInputSection.id = "user-input-section";
  guess.appendChild(userInputSection);

  // create question
  const question = document.createElement("p");
  question.className = "question";
  guess.appendChild(question);

  // create counter
  const counter = document.createElement("p");
  counter.className = "counter";
  guess.appendChild(counter);

  // create keyboard box
  const keyboard = document.createElement("div");
  keyboard.className = "keyboard";
  container.appendChild(keyboard);

  // create popup
  const newGameContainer = document.createElement("div");
  newGameContainer.id = "new-game-container";
  newGameContainer.className = "new-game-popup hide";
  container.appendChild(newGameContainer);

  // create result text
  const resultText = document.createElement("div");
  resultText.id = "result-text";
  newGameContainer.appendChild(resultText);

  // create `Play again` button
  const newGameButton = document.createElement("button");
  newGameButton.id = "new-game-button";
  newGameButton.textContent = "Play again";
  newGameContainer.appendChild(newGameButton);

  createKeyboard();
  canvasCreator();
  generateWord();
  initializeGameLogic();
}
