import { AreaComp, GameObj, PosComp, RotateComp } from 'kaboom';

import k from '../kaboom';
import { spawnTinyAsteroids } from './tinyAsteroids';

export type Asteroid = GameObj & PosComp & AreaComp & RotateComp;

const { destroy, height, play, rand, vec2, width } = k;

export const asteroids = () => {
  const astSpeed = vec2(rand(-2, 2), rand(-2, 2));
  const spin = rand(-0.04, 0.04);
  return {
    add(this: Asteroid) {
      this.collides('bullet', () => {
        spawnTinyAsteroids(this.pos);
        play('thud');
        destroy(this);
      });
    },
    update(this: Asteroid) {
      this.pos.x += astSpeed.x;
      this.pos.y += astSpeed.y;
      this.angle += spin;
      if (this.pos.x < 0) this.pos.x = width();
      if (this.pos.x > width()) this.pos.x = 0;
      if (this.pos.y < 0) this.pos.y = height();
      if (this.pos.y > height()) this.pos.y = 0;
    }
  };
};
