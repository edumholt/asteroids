import k from '../kaboom';
import { rotator } from '../components/rotator';
import { shooter } from '../components/shooter';
import { thruster } from '../components/thruster';
import { asteroids } from '../components/asteroids';
import { AreaComp, GameObj, PosComp } from 'kaboom';

k.loadSprite('tilesheet', 'assets/simpleSpace_tilesheet.png', {
  sliceX: 8,
  sliceY: 6
});

k.loadSprite('background', 'assets/spaceBackground.png');

export const Game = () => {
  const center = k.vec2(k.width() / 2, k.height() / 2);

  console.log('* * * Game Screen * * *');

  k.add([k.sprite('background'), k.scale(), k.origin('topleft')]);

  // Our ship
  const ship = k.add([
    k.sprite('tilesheet', {
      frame: 9
    }),
    k.pos(center),
    k.rotate(0),
    k.origin('center'),
    k.area(k.vec2(-32, -32), k.vec2(32, 32)),
    shooter(),
    rotator(),
    thruster()
  ]) as GameObj & PosComp & AreaComp;

  ship.collides('asteroid', () => {
    console.error('* * * DED * * *');
    k.destroy(ship);
  })

  // The baddies (asteroids)
  k.loop(3, () => {
    const ast = k.add([
      k.sprite('tilesheet', {
        frame: 32
      }),
      k.rotate(0),
      k.origin('center'),
      asteroids(),
      k.pos(0),
      k.area(k.vec2(-1, -1), k.vec2(1, 1)),
      'asteroid'
    ]);
  });
};
