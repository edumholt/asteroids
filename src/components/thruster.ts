import { AreaComp, PosComp, RotateComp } from 'kaboom';

import k from '../kaboom';
import { rotator } from './rotator';

/**
 * Requires 'tilesheet' to be loaded in game scene
 * @returns 
 */
export const thruster = () => {
  return {
    add(this: PosComp & AreaComp & RotateComp) {
      k.keyPress('up', () => {
        const flameOffset = this.areaWidth() * 0.01;
        const flames = k.add([
          k.sprite('tilesheet', {
            frame: 47
          }),
          k.origin(k.vec2(0, -2.2)),
          k.rotate(this.angle),
          k.scale(0.6),
          k.pos(this.pos.x + flameOffset * Math.sin(this.angle), this.pos.y + flameOffset * Math.cos(this.angle)),
          rotator()
        ]);
        k.wait(0.2, () => {
          k.destroy(flames);
        });
      });
    }
  }
};