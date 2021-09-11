import { AreaComp, GameObj, PosComp, RotateComp } from 'kaboom';
import k from '../kaboom';

const randBetween = (min: number, max: number): number => {
  const diff = max - min;
  return Math.random() * diff + min;
};

type Asteroid = GameObj & PosComp & AreaComp & RotateComp;

export const asteroids = () => {
  const astSpeed = k.vec2(randBetween(-2, 2), randBetween(-2, 2));
  const spin = randBetween(-0.04, 0.04);
  return {
    add(this: Asteroid) {
      this.collides('bullet', () => {
        console.log('target hit by shot');
      });
    },
    update(this: Asteroid) {
      this.pos.x += astSpeed.x;
      this.pos.y += astSpeed.y;
      this.angle += spin;
      if (this.pos.x < 0) this.pos.x = 1600;
      if (this.pos.x > 1600) this.pos.x = 0;
      if (this.pos.y < 0) this.pos.y = 900;
      if (this.pos.y > 900) this.pos.y = 0;
    }
  };
};
