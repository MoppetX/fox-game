import gameState, { handleUserAction } from './gameState';
import { TICK_RATE } from './constants';
import initButtons from './buttons';

async function init() {
  console.log('START GAME');
  initButtons(handleUserAction);

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
