import { Vec2 } from 'kaboom';

import k from '../kaboom';
import { Asteroid } from './asteroids';

const { add, area, destroy, height, origin, play, pos, rand, rotate, scale, sprite, vec2, wait, width } = k;

const tinyAsteroid = () => {
  const velX = rand(-2, 2);
  const velY = rand(-2, 2);
  const spin = rand(-0.06, 0.06);
  return {
    add(this: Asteroid) {
      wait(1, () => {
        this.collides('bullet', () => {
          play('thud');
          destroy(this);
        });
      });
    },
    update(this: Asteroid) {
      this.pos.x += velX;
      this.pos.y += velY;
      this.angle += spin;
      if (this.pos.x < 0) this.pos.x = width();
      if (this.pos.x > width()) this.pos.x = 0;
      if (this.pos.y < 0) this.pos.y = height();
      if (this.pos.y > height()) this.pos.y = 0;
    }
  };
};

export const spawnTinyAsteroids = (loc: Vec2) => {
  for (let count = 1; count < 5; count++) {
    add([
      sprite('tilesheet', {
        frame: 33
      }),
      tinyAsteroid(),
      pos(loc),
      origin('center'),
      scale(0.6),
      rotate(0),
      area(vec2(-0.5, -0.5), vec2(1, 1)),
      'asteroid'
    ]);
  }
};
