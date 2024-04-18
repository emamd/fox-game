import { ICONS } from "./constants";

const toggleHighlighted = (icon: number, show: boolean): void => {
  const iconHolder = document.querySelector(`.${ICONS[icon]}-icon`);
  if (iconHolder) {
    iconHolder.classList.toggle("highlighted", show);
  }
};

export default function initButtons(handleUserAction: Function): void {
  let selectedIcon = 0;

  function buttonClick(event: Event) {
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

  const buttons = document.querySelector(".buttons");

  if (buttons) {
    buttons.addEventListener("click", buttonClick);
  }
}
