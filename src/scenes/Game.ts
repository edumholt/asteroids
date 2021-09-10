import { AreaComp, GameObj, PosComp, RotateComp, Vec2 } from 'kaboom';
import k from '../kaboom';
import { VelComp } from '../components/vel';
import { vel } from '../components/vel';

k.loadSprite('tilesheet', 'assets/simpleSpace_tilesheet.png', {
  sliceX: 8,
  sliceY: 6
});

k.loadSprite('background', 'assets/spaceBackground.png');

let flames: GameObj;
let bullet: GameObj & PosComp;

const center: Vec2 = k.vec2(k.width() / 2, k.height() / 2);

const randBetween = (min: number, max: number): number => {
  const diff = max - min;
  const rand = Math.random() * diff + min;
  console.log(rand);
  return Math.random() * diff + min;
};

export const Game = () => {
  console.log('* * * Game Screen * * *');

  const bg = k.add([k.sprite('background'), k.scale(), k.origin('topleft')]);

  const ship = k.add([
    k.sprite('tilesheet', {
      frame: 9
    }),
    k.pos(center),
    k.rotate(0),
    k.origin('center'),
    vel(0, 0),
    {
      vel: {
        x: 0,
        y: 0
      }
    }
  ]) as GameObj & AreaComp & PosComp & RotateComp & VelComp;

  const flameOffset = ship.areaWidth() * 0.01;
  const bulletOffset = ship.areaWidth() * 0.4;

  // Rotate ship left
  k.keyDown('left', () => {
    flames.angle = ship.angle += 0.04;
  });

  // Rotate ship right
  k.keyDown('right', () => {
    flames.angle = ship.angle -= 0.04;
  });

  // Accelerate ship
  k.keyPress('up', () => {
    flames = k.add([
      k.sprite('tilesheet', {
        frame: 47
      }),
      k.origin(k.vec2(0, -2.2)),
      k.rotate(ship.angle),
      k.scale(0.6),
      vel(-Math.sin(ship.angle), -Math.cos(ship.angle)),
      {
        vel: {
          x: 0,
          y: 0
        }
      },
      k.pos(ship.pos.x + flameOffset * Math.sin(ship.angle), ship.pos.y + flameOffset * Math.cos(ship.angle))
    ]) as GameObj & RotateComp & VelComp;
    ship.vel.x = -Math.sin(ship.angle);
    ship.vel.y = -Math.cos(ship.angle);
  });

  k.keyRelease('up', () => {
    k.destroy(flames);
  });

  // Fire Bullets
  k.keyPress('space', () => {
    bullet = k.add([
      k.sprite('tilesheet', {
        frame: 31
      }),
      k.origin('center'),
      k.pos(ship.pos.x - bulletOffset * Math.sin(ship.angle), ship.pos.y - bulletOffset * Math.cos(ship.angle)),
      k.color(1, 0, 0),
      vel(-5 * Math.sin(ship.angle), -5 * Math.cos(ship.angle)),
      {
        vel: {
          x: 0,
          y: 0
        }
      }
    ]) as GameObj & PosComp & VelComp;
    setTimeout(() => {
      k.destroy(bullet);
    }, 2000);
  });

  // Larg asteroids spawn from left
  setInterval(() => {
    const asteroid = k.add([
      k.sprite('tilesheet', {
        frame: 32
      }),
      k.pos(randBetween(-10, 0), randBetween(0, 900)),
      vel(randBetween(-2, 2), randBetween(-2, 2)),
      {
        vel: {
          x: 0,
          y: 0
        }
      }
    ]) as GameObj & PosComp & VelComp;
  }, 3000);

  // Large asteroids spawn from right
  setInterval(() => {
    const asteroid = k.add([
      k.sprite('tilesheet', {
        frame: 32
      }),
      k.pos(randBetween(1600, 1610), randBetween(0, 900)),
      vel(randBetween(-2, 2), randBetween(-2, 2)),
      {
        vel: {
          x: 0,
          y: 0
        }
      }
    ]) as GameObj & PosComp & VelComp;
  }, 3000);
};
