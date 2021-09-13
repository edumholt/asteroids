import { AreaComp, GameObj, PosComp } from 'kaboom';

import k from '../kaboom';
import { rotator } from '../components/rotator';
import { shooter } from '../components/shooter';
import { thruster } from '../components/thruster';
import { asteroids } from '../components/asteroids';

const { add, area, go, height, loop, origin, play, pos, rotate, scale, sprite, vec2, width } = k;

export const Game = () => {
  const center = vec2(width() / 2, height() / 2);

  console.log('* * * Game Screen * * *');

  add([sprite('background'), scale(), origin('topleft')]);

  // Our ship
  const ship = add([
    sprite('tilesheet', {
      frame: 9
    }),
    pos(center),
    rotate(0),
    origin('center'),
    area(vec2(-32, -32), vec2(32, 32)),
    shooter(),
    rotator(),
    thruster()
  ]) as GameObj & PosComp & AreaComp;

  ship.collides('asteroid', () => {
    console.error('* * * DED * * *');
    play('explosion');
    go('gameOver');
  });

  // The baddies (asteroids)
  loop(6, () => {
    const ast = add([
      sprite('tilesheet', {
        frame: 32
      }),
      rotate(0),
      origin('center'),
      asteroids(),
      pos(0),
      area(vec2(-2, -2), vec2(4, 4)),
      'asteroid'
    ]);
  });
};
