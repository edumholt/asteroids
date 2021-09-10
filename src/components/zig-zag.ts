import type { GameObj, PosComp } from 'kaboom';

type Zigzagger = GameObj & PosComp;

/**
 * Requires a pos() component
 * @returns {}
 */
export const zigzag = (x: number = 32, y:number = 32) => {
  return {
    update(this: Zigzagger) {
      if(!this.pos) {
        console.log('<< No pos() component >>');
        return;
      }
      const seed = Math.floor(Math.random() * 40);
      switch (seed) {
        case 1:
          this.pos.x += x;
          break;
        case 2:
          this.pos.y += y;
          break;
        case 3:
          this.pos.x -= x;
          break;
        case 4:
          this.pos.y -= y;
          break;
      }
    }
  };
};
