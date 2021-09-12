import { AreaComp, GameObj, PosComp, RotateComp } from 'kaboom';

import k from '../kaboom';

const bullet = (x: number, y: number) => {
  const vel = k.vec2(x, y);
  return {
    add() {
      k.wait(2, () => {
        k.destroy(this);
      });
    },
    update(this: PosComp) {
      this.pos.x += vel.x;
      this.pos.y += vel.y;
    }
  };
};

/**
 * Requires 'tilesheet' to be loaded in game scene
 * @returns GameObj
 */
export const shooter = () => {
  return {
    add(this: GameObj & RotateComp & AreaComp & PosComp) {
      // Fire Bullets
      k.keyPress('space', () => {
        const bulletOffset = this.areaWidth() * 0.4;

        const angleCos = Math.sin(this.angle);
        const angleSin = Math.cos(this.angle);

        const pos = k.vec2(this.pos.x - bulletOffset * angleCos, this.pos.y - bulletOffset * angleSin);

        const shot = k.add([
          k.sprite('tilesheet', {
            frame: 31
          }),
          k.origin('center'),
          k.pos(pos),
          k.color(1, 0, 0),
          k.area(this.area.p1, this.area.p2),
          bullet(-angleCos * 10, -angleSin * 10),
          'bullet'
        ]) as GameObj & AreaComp;
        shot.collides('asteroid', () => {
          k.wait(0.1, () => {
            k.destroy(shot);
          });
        }) 
      });
    }
  };
};