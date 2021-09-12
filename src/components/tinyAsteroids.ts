import { AreaComp, GameObj, PosComp, RotateComp, Vec2 } from 'kaboom';

import k from '../kaboom';
import { Asteroid } from './asteroids';

const tinyAsteroid = () => {
  const velX = k.rand(-2, 2);
  const velY = k.rand(-2, 2);
  const spin = k.rand(-0.06, 0.06);
  return {
    add(this: Asteroid) {
      k.wait(1, () => {
        this.collides('bullet', () => {
          k.destroy(this);
        });
      });
    },
    update(this: Asteroid) {
      this.pos.x += velX;
      this.pos.y += velY;
      this.angle += spin;
      if (this.pos.x < 0) this.pos.x = 1600;
      if (this.pos.x > 1600) this.pos.x = 0;
      if (this.pos.y < 0) this.pos.y = 900;
      if (this.pos.y > 900) this.pos.y = 0;
    }
  };
};

export const spawnTinyAsteroids = (loc: Vec2) => {
  for (let count = 1; count < 5; count++) {
    k.add([
      k.sprite('tilesheet', {
        frame: 33
      }),
      tinyAsteroid(),
      k.pos(loc),
      k.origin('center'),
      k.scale(0.6),
      k.rotate(0),
      k.area(k.vec2(-0.5, -0.5), k.vec2(1, 1)),
      'asteroid'
    ]);
  } 
};
