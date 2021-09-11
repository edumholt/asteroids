import k from '../kaboom';
import { rotator } from '../components/rotator';
import { shooter } from '../components/shooter';
import { thruster } from '../components/thruster';

k.loadSprite('tilesheet', 'assets/simpleSpace_tilesheet.png', {
  sliceX: 8,
  sliceY: 6
});

k.loadSprite('background', 'assets/spaceBackground.png');

export const Game = () => {
  const center = k.vec2(k.width() / 2, k.height() / 2);

  const randBetween = (min: number, max: number): number => {
    const diff = max - min;
    return Math.random() * diff + min;
  };

  console.log('* * * Game Screen * * *');

  k.add([k.sprite('background'), k.scale(), k.origin('topleft')]);

  const ship = k.add([
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
 
  const astSpeed = k.vec2(randBetween(-2, 2), randBetween(-2, 2));

  // Large asteroids spawn from left
  k.loop(1, () => {
    const ast = k.add([
      k.sprite('tilesheet', {
        frame: 32
      }),
      k.pos(randBetween(-120, -100), randBetween(0, 900))
    ]);
    // TODO: Remove when leave screen
  });

  // Large asteroids spawn from right
  k.loop(1, () => {
    k.add([
      k.sprite('tilesheet', {
        frame: 32
      }),
      k.pos(randBetween(1600, 1620), randBetween(0, 900))
    ]);
    // TODO: Remove when leave screen
  });
};
