export const modFox = function modFox(state: string) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};

export const modScene = function modScene(state: string) {
  document.querySelector(".game").className = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show: boolean) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};

export const writeModal = function writeModal(text = "") {
  document.querySelector(".modal").innerHTML =
    `<div class='modal-inner'>${text}</div>`;
};
