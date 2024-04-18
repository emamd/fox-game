export const modFox = function modFox(state: string): void {
  const foxDiv = document.querySelector(".fox");
  if (foxDiv) {
    foxDiv.className = `fox fox-${state}`;
  }
};

export const modScene = function modScene(state: string): void {
  const gameDiv = document.querySelector(".game");
  if (gameDiv) {
    gameDiv.className = `game ${state}`;
  }
};

export const togglePoopBag = function togglePoopBag(show: boolean): void {
  const poopBagDiv = document.querySelector(".poop-bag");
  if (poopBagDiv) {
    poopBagDiv.classList.toggle("hidden", !show);
  }
};

export const writeModal = function writeModal(text = ""): void {
  const modalDiv = document.querySelector(".modal");
  if (modalDiv) {
    modalDiv.innerHTML = `<div class='modal-inner'>${text}</div>`;
  }
};
