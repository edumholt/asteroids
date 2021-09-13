import { GameObj, RotateComp } from 'kaboom';

import k from '../kaboom';

const { keyDown } = k;

export const rotator = () => {
  return {
    add(this: GameObj & RotateComp) {
      keyDown('left', () => {
        this.angle += 0.04;
      });
      keyDown('right', () => {
        this.angle -= 0.04;
      });
    }
  };
};
