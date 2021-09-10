import { GameObj, PosComp } from 'kaboom';
import k from '../kaboom';


const andleToVec2 = (angle: number) => {
  const x = Math.cos(-angle);
  const y = Math.sin(-angle);
  return k.vec2(x, y);
};

export const thrust = (x: number, y: number) => {
  return {
    update(this: GameObj & PosComp) {
      console.log('thrust');
      console.log(this.vel);  
    }
  };
};
