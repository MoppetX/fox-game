export const TICK_RATE = 3000;
export const ICONS = ['fish', 'poop', 'weather'];
export const RAIN_CHANCE = 0.2;
export const DAY_LENGTH = 20;
export const NIGHT_LENGTH = 3;

export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 5 + clock;

export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 2) + 3 + clock;

export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 4 + clock;

export const STATES = {
  INIT: 'INIT',
  IDLING: 'IDLING',
  SLEEP: 'SLEEP',
  FEEDING: 'FEEDING',
  HUNGRY: 'HUNGRY',
  CELEBRATING: 'CELEBRATING',
  HATCHING: 'HATCHING',
  DEAD: 'DEAD',
};
export const SCENES = ['day', 'rain'];

export const SCENE = {
  DAY: 'day',
  RAIN: 'rain',
  NIGHT: 'night',
};

export const FOX_STATE = {
  EGG: 'egg',
  IDLING: 'idling',
  SLEEP: 'sleep',
  HUNGRY: 'hungry',
  EATING: 'eating',
};
