"use strict";

(() => {
  const output = document.querySelector("#counterValue");
  const status = document.querySelector("#counterStatus");
  const buttons = document.querySelectorAll("[data-counter-action]");

  if (!output || !status || buttons.length === 0) return;

  let count = 0;

  function renderCounter(message) {
    output.textContent = String(count);
    status.textContent = message;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.counterAction;

      if (action === "increase") count += 1;
      else if (action === "decrease") count -= 1;
      else if (action === "reset") count = 0;

      renderCounter("Last action: " + action + ". The page was updated using the DOM.");
    });
  });

  renderCounter("Click a button to update the counter.");
})();
