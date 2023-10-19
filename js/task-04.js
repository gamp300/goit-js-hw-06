let counterValue = 0;
const valueSpan = document.getElementById("value");
const buttons = document.querySelectorAll("#counter button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const action = e.target.getAttribute("data-action");
    if (action === "decrement") {
      counterValue--;
    } else if (action === "increment") {
      counterValue++;
    }
    valueSpan.textContent = counterValue;
  });
});
