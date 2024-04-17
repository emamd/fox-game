import { ICONS } from "./constants";

const toggleHighlighted = (icon: number, show: boolean) =>
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);

interface onClickInterface {
  target: HTMLElement;
}

export default function initButtons(handleUserAction: Function) {
  let selectedIcon = 0;

  function buttonClick(event: MouseEvent) {
    const target = event.target as HTMLDivElement;
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }

  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
