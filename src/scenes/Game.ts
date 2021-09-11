import k from '../kaboom';
import { rotator } from '../components/rotator';
import { shooter } from '../components/shooter';
import { thruster } from '../components/thruster';
import { asteroids } from '../components/asteroids';

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
  k.add([
    k.sprite('tilesheet', {
      frame: 9
    }),
    k.pos(center),
    k.rotate(0),
    k.origin('center'),
    shooter(),
    rotator(),
    thruster()
  ]);

  // The baddies (asteroids)
  k.loop(8, () => {
    k.add([
      k.sprite('tilesheet', {
        frame: 32
      }),
      k.rotate(0),
      k.origin('center'),
      asteroids(),
      k.pos(0),
      k.area(k.vec2(0, 0), k.vec2(64, 64)),
      'asteroid'
    ]);
  });
};
