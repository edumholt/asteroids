import k from '../kaboom';

const { add, color, go, height, origin, mouseClick, pos, scale, text, vec2, width } = k;

const center = vec2(width() / 2, height() / 2);

export const GameOver = () => {
  console.log('* * * Game Over Screen * * *');

  add([
    pos(center),
    color(0.3, 0.3, 1),
    origin('center'),
    scale(2),
    text('* * * * * * * * *\n\n\n\nGame Over\n\n\n\n* * * * * * * * *', 16),
    mouseClick(() => {
      go('game');
    })
  ]);
};
