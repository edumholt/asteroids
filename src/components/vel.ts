import { GameObj, PosComp } from 'kaboom';
import k from '../kaboom';

export type VelComp = {
  vel: {
    x: number,
    y: number
  }
};

export const vel = (x: number, y: number) => {
  return {
    add(this: GameObj & PosComp & VelComp) {
      this.vel.x = x;
      this.vel.y = y;
    },
    update(this: GameObj & PosComp & VelComp) {
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
    }
  }
}