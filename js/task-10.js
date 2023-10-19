function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createButton.addEventListener("click", () => {
  const numBoxes = parseInt(controls.querySelector("input").value);
  createBoxes(numBoxes);
});

destroyButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});

function createBoxes(amount) {
  const initialSize = 30;
  boxesContainer.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${initialSize + i * 10}px`;
    box.style.height = `${initialSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("box");
    boxesContainer.appendChild(box);
  }
}
