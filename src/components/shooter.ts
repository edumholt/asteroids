import { AreaComp, GameObj, PosComp, RotateComp } from 'kaboom';

import k from '../kaboom';

const { add, area, color, destroy, keyPress, origin, play, pos, sprite, vec2, wait } = k;

const bullet = (x: number, y: number) => {
  const vel = vec2(x, y);
  return {
    add() {
      wait(2, () => {
        destroy(this);
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
      keyPress('space', () => {
        const bulletOffset = this.areaWidth() * 0.4;

        const angleCos = Math.sin(this.angle);
        const angleSin = Math.cos(this.angle);

        const position = vec2(this.pos.x - bulletOffset * angleCos, this.pos.y - bulletOffset * angleSin);

        play('shot');
        const shot = add([
          sprite('tilesheet', {
            frame: 31
          }),
          origin('center'),
          pos(position),
          color(1, 0, 0),
          area(vec2(-8, -8), vec2(8, 8)),
          bullet(-angleCos * 10, -angleSin * 10),
          'bullet'
        ]) as GameObj & AreaComp;
        shot.collides('asteroid', () => {
          wait(0.1, () => {
            destroy(shot);
          });
        }) 
      });
    }
  };
};