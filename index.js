let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function createAndAppendKeyCode(keyCode) {
  let ListEl = document.createElement("li");
  ListEl.classList.add("mt-3");
  ListEl.textContent = keyCode;
  keyCodeListEl.appendChild(ListEl);
}

function keyCodeNumber(event) {
  createAndAppendKeyCode(event.keyCode);
}

userInputEl.addEventListener("keydown", keyCodeNumber);
