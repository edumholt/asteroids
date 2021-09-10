import { AreaComp, GameObj, PosComp, RotateComp, SpriteComp, Vec2 } from 'kaboom';
import k from '../kaboom';

k.loadSprite('ship', 'assets/simpleSpace_tilesheet.png', {
  sliceX: 8,
  sliceY: 6
});

const center: Vec2 = k.vec2(k.width() / 2, k.height() / 2);
let flames: GameObj;

export const SpaceShip = () => {
  console.log('* * * SpaceShip Screen * * *');
  const ship = k.add([
    k.sprite('ship', {
      frame: 9
    }),
    k.pos(center),
    k.rotate(0),
    k.origin('center')
  ]) as GameObj & AreaComp & PosComp & RotateComp;

  // Rotate ship left
  k.keyDown('left', () => {
    ship.angle += 0.04;
  });

  // Rotate ship right
  k.keyDown('right', () => {
    ship.angle -= 0.04;
  });

  // Accelerate ship
  k.keyPress('up', () => {
    console.log(ship);
    flames = k.add([
      k.sprite('ship', {
        frame: 47
      }),
      k.origin('center'),
      k.rotate(ship.angle),
      k.scale(0.6),
      k.pos(ship.pos.x + 36 * Math.sin(ship.angle), ship.pos.y + 36 * Math.cos(ship.angle))
    ]);
  });

  k.keyRelease('up', () => {
    k.destroy(flames);
  });

  // Fire Bullets
  
};
