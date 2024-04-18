export const TICK_RATE = 3000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.5;
export const SCENES = ["day", "rain"];
export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 4;

export const getNextHungerTime = (clock: number): number => {
  const hungerTime = Math.floor(Math.random() * 3) + 5 + clock;
  return hungerTime;
};

export const getNextDieTime = (clock: number): number => {
  const dieTime = Math.floor(Math.random() * 2) + 10 + clock;
  return dieTime;
};

export const getNextPoopTime = (clock: number): number => {
  const poopTime = Math.floor(Math.random() * 3) + 10 + clock;
  return poopTime;
};
