import {
  DAY_LENGTH,
  NIGHT_LENGTH,
  ICONS,
  STATES,
  SCENE,
  SCENES,
  FOX_STATE,
  RAIN_CHANCE,
  getNextDieTime,
  getNextHungerTime,
  getNextPoopTime,
} from './constants';
import { modFox, modScene } from './ui';

const {
  INIT,
  IDLING,
  HUNGRY,
  SLEEP,
  FEEDING,
  CELEBRATING,
  HATCHING,
  DEAD,
} = STATES;
// const { DAY } = SCENES;
// const { EGG } = FOX_STATE;

const gameState = {
  current: 'INIT',
  clock: 1,
  // "Sentinel Value": if sth is at -1 it's not currently active
  wakeTime: -1,
  sleepTime: -1,
  hungryTime: -1,
  poopTime: -1,
  dieTime: -1,
  timeToStartCelebrating: -1,
  timeToEndCelebrating: -1,

  tick() {
    this.clock++;
    console.log('clock: ', this.clock);

    if (this.clock === this.wakeTime) {
      this.wake();
    } else if (this.clock === this.sleepTime) {
      this.sleep();
    } else if (this.clock === this.hungryTime) {
      this.getHungry();
    } else if (this.clock === this.dieTime) {
      this.die();
    } else if (this.clock === this.timeToStartCelebrating) {
      this.startCelebrating();
    } else if (this.clock === this.timeToEndCelebrating) {
      this.endCelebrating();
    }

    return this.clock;
  },
  startGame() {
    console.log('starting game');
    this.current = HATCHING;
    this.wakeTime = this.clock + 3;
    modFox(FOX_STATE.EGG);
    modScene(SCENE.DAY);
  },
  wake() {
    this.current = IDLING;
    this.wakeTime = -1;
    this.scene = Math.random() > RAIN_CHANCE ? 0 : 1;
    modScene(SCENES[this.scene]);
    this.sleepTime = this.clock + DAY_LENGTH;
    this.hungryTime = getNextHungerTime(this.clock);
    this.determineFoxState();
  },
  sleep() {
    this.current = SLEEP;
    modFox(FOX_STATE.SLEEP);
    modScene(SCENE.NIGHT);
    this.wakeTime = this.clock + NIGHT_LENGTH;
  },
  getHungry() {
    this.current = HUNGRY;
    this.dieTime = getNextDieTime(this.clock);
    this.hungryTime = -1;
    modFox(FOX_STATE.HUNGRY);
  },
  die() {
    console.log('D.E.D.');
  },
  startCelebrating() {
    this.current = CELEBRATING;
    modFox(FOX_STATE.CELEBRATE);
    this.timeToStartCelebrating = -1;
    this.timeToEndCelebrating = this.clock + 2;
  },
  endCelebrating() {
    this.timeToEndCelebrating = -1;
    this.current = IDLING;
    this.determineFoxState();
  },
  determineFoxState() {
    if (this.current === IDLING) {
      if (SCENES[this.scene] === SCENE.RAIN) {
        modFox(FOX_STATE.RAIN);
      } else {
        modFox(FOX_STATE.IDLING);
      }
    }
  },

  changeWeather() {
    console.log('changeWeather');
  },
  cleanUpPoop() {
    console.log('cleanUpPoop');
  },
  feed() {
    console.log('feed');
    if (this.current !== HUNGRY) {
      return;
    }
    this.current = FEEDING;
    this.dieTime = -1;
    this.poopTime = getNextPoopTime(this.clock);
    modFox(FOX_STATE.EATING);
    this.timeToStartCelebrating = this.clock + 2;
  },
  handleUserAction(icon) {
    console.log(icon);
    if ([SLEEP, FEEDING, CELEBRATING, HATCHING].includes(this.current)) {
      //  do nothing
      return;
    }
    if (this.current === INIT || this.current === DEAD) {
      console.log(this.current);
      this.startGame();
      return;
    }
    switch (icon) {
      case 'weather':
        this.changeWeather;
        break;
      case 'poop':
        this.cleanUpPoop();
        break;
      case 'fish':
        this.feed();
        break;
    }
  },
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;
