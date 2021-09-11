import { AreaComp, GameObj, PosComp, RotateComp } from 'kaboom';

import k from '../kaboom';
import { rotator } from './rotator';

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
      k.keyPress('up', () => {
        const flameOffset = this.areaWidth() * 0.01;

        xVel += Math.sin(this.angle) * 0.2;
        yVel += Math.cos(this.angle) * 0.2;
        
        flames = k.add([
          k.sprite('tilesheet', {
            frame: 47
          }),
          k.origin(k.vec2(0, -2)),
          k.rotate(this.angle),
          k.scale(0.6),
          k.pos(this.pos.x + flameOffset * Math.sin(this.angle), this.pos.y + flameOffset * Math.cos(this.angle)),
          rotator()
        ]) as GameObj & PosComp;
        k.wait(0.1, () => {
          k.destroy(flames);
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
      if(this.pos.x > k.width()) this.pos.x = 0;
      if(this.pos.x < 0) this.pos.x = k.width();
      if(this.pos.y > k.height()) this.pos.y = 0;
      if(this.pos.y < 0) this.pos.y = k.height();
    }
  }
};