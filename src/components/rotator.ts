import { GameObj, RotateComp } from 'kaboom';

import k from '../kaboom';

export const rotator = () => {
  return {
    add(this: GameObj & RotateComp) {
      k.keyDown('left', () => {
        this.angle += 0.04;
      });
      k.keyDown('right', () => {
        this.angle -= 0.04;
      });
    }
  };
};