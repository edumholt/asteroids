import k from '../kaboom';

const randBetween = (min: number, max: number): number => {
  const diff = max - min;
  return Math.random() * diff + min;
};

const astSpeed = k.vec2(randBetween(-2, 2), randBetween(-2, 2));
const leftSide = () => {
  // return k.vec2(randBetween(-120, -100), randBetween(0, 900));
  return k.vec2(randBetween(0, 20), randBetween(0, 900));
};
const rightSide = () => {
  // return k.vec2(randBetween(1600, 1620), randBetween(0, 900));
  return k.vec2(randBetween(1560, 1580), randBetween(0, 900));
};

export const asteroids = () => {
  return {
    add() {
      k.loop(1, () => {
        k.add([
          k.sprite('tilesheet', {
            frame: 32
          }),
          k.pos(leftSide())
        ]);
        // TODO: Remove when leave screen
      });

      // Large asteroids spawn from right
      k.loop(1, () => {
        k.add([
          k.sprite('tilesheet', {
            frame: 32
          }),
          k.pos(rightSide())
        ]);
        // TODO: Remove when leave screen
      });
    }
  };
};
