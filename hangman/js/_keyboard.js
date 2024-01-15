export { createKeyboard };

function createKeyboard() {
  const keyboard = document.querySelector(".keyboard");
  // create letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    // ASCII[A-Z] char codes
    button.innerText = String.fromCharCode(i);
    keyboard.append(button);
  }
}
