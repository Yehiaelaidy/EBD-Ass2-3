// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.






export function renderItems(list) {
  const listElement = document.querySelector("#list");

  if (!listElement) return;

  listElement.textContent = "";

  for (const item of list) {
    const entry = document.createElement("li");
    entry.classList.add("entry");
    entry.textContent = `${item.name} - ${item.price} EGP`;
    listElement.append(entry);
  }
}

export function matching() {
  return items.filter((item) => item.category === "kitchen");
}

export function start() {
  const listElement = document.querySelector("#list");
  const applyButton = document.querySelector("#apply");

  // Show every item before the button is clicked.
  renderItems(items);

  // Attach the filter only if the button exists.
  if (applyButton) {
    applyButton.addEventListener("click", () => {
      renderItems(matching());
    });
  }
}






