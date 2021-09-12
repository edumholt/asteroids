import { AreaComp, GameObj, PosComp, RotateComp } from 'kaboom';

import k from '../kaboom';
import { spawnTinyAsteroids } from './tinyAsteroids';

export type Asteroid = GameObj & PosComp & AreaComp & RotateComp;

export const asteroids = () => {
  const astSpeed = k.vec2(k.rand(-2, 2), k.rand(-2, 2));
  const spin = k.rand(-0.04, 0.04);
  return {
    add(this: Asteroid) {
      this.collides('bullet', () => {
        spawnTinyAsteroids(this.pos);
        k.destroy(this);
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
