//
export const modFox = function modFox(state) {
  document.querySelector('.fox').className = `fox fox-${state}`;
};

// if it crashes, the second name ↓ will be printed / good for debug
export const modScene = function modScene(state) {
  document.querySelector('.game').className = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector('.poop-bag').toggle('hidden', !show);
};
