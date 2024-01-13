import { createPage } from "./_create-page.js";
import { createKeyboard } from "./_keyboard.js";

document.addEventListener("DOMContentLoaded", createPage);

import dataJSON from "../data/data.json" assert { type: "json" };
console.log(dataJSON);
