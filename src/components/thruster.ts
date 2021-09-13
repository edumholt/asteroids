import { AreaComp, GameObj, PosComp, RotateComp } from 'kaboom';

import k from '../kaboom';
import { rotator } from './rotator';

const { add, destroy, height, keyPress, origin, play, pos, rotate, scale, sprite, vec2, wait, width } = k;

/**
 * Requires 'tilesheet' to be loaded in game scene
 * @returns
 */
export const thruster = () => {
  let xVel = 0;
  let yVel = 0;

  let flames: GameObj & PosComp;

  return {
    add(this: PosComp & AreaComp & RotateComp) {
      keyPress('up', () => {
        const flameOffset = this.areaWidth() * 0.01;

        xVel += Math.sin(this.angle) * 0.2;
        yVel += Math.cos(this.angle) * 0.2;

        play('thruster');
        
        flames = add([
          sprite('tilesheet', {
            frame: 47
          }),
          origin(vec2(0, -2)),
          rotate(this.angle),
          scale(0.6),
          pos(this.pos.x + flameOffset * Math.sin(this.angle), this.pos.y + flameOffset * Math.cos(this.angle)),
          rotator()
        ]) as GameObj & PosComp;
        wait(0.1, () => {
          destroy(flames);
        });
      });
    },
    update(this: PosComp & AreaComp & RotateComp) {
      this.pos.x -= xVel;
      this.pos.y -= yVel;
      if (flames) flames.pos.x -= xVel;
      if (flames) flames.pos.y -= yVel;
      xVel *= 0.999;
      yVel *= 0.999;

      // Wrap around screen
      if (this.pos.x > width()) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width();
      if (this.pos.y > height()) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height();
    }
  };
};
