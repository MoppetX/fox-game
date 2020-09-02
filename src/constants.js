export const TICK_RATE = 3000;
export const ICONS = ['fish', 'poop', 'weather'];
export const RAIN_CHANCE = 0.2;
export const DAY_LENGTH = 10;
export const NIGHT_LENGTH = 3;

export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 5 + clock;

export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 2) + 3 + clock;

export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 2) + 2 + clock;

export const STATES = {
  CELEBRATING: 'CELEBRATING',
  DEAD: 'DEAD',
  FEEDING: 'FEEDING',
  HATCHING: 'HATCHING',
  HUNGRY: 'HUNGRY',
  IDLING: 'IDLING',
  INIT: 'INIT',
  POOPING: 'POOPING',
  SLEEP: 'SLEEP',
};
export const SCENES = ['day', 'rain'];

export const SCENE = {
  DAY: 'day',
  NIGHT: 'night',
  RAIN: 'rain',
  DEAD: 'dead',
};

export const FOX_STATE = {
  CELEBRATE: 'celebrate',
  DEAD: SCENE.DEAD,
  EATING: 'eating',
  EGG: 'egg',
  HUNGRY: 'hungry',
  IDLING: 'idling',
  POOPING: 'pooping',
  RAIN: SCENE.RAIN,
  SLEEP: 'sleep',
};
