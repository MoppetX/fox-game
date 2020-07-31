import gameState from './gameState';

const TICK_RATE = 3000;

async function init() {
  console.log('START GAME');

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }
  // request... func tells the browser: when idle, do this
  requestAnimationFrame(nextAnimationFrame);
}

init();
