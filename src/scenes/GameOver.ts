import k from '../kaboom';

const { add, color, go, height, origin, mouseClick, pos, text, vec2, width } = k;

const center = vec2(width() / 2, height() / 2);

export const GameOver = () => {
  console.log('* * * Game Over Screen * * *');

  add([
    pos(width() / 2, height() / 2 - 100),
    color(1, 0.1, 0.1),
    origin('center'),
    text('* * * * * * * * *\n\n\n\nGame Over\n\n\n\n* * * * * * * * *', 32),
    mouseClick(() => {
      go('game');
    })
  ]);

  add([
    pos(width() / 2, height() / 2 + 200),
    color(0.8, 0.8, 0.8),
    origin('center'),
    text('* * * * * * * * *\n\nClick to continue\n\n* * * * * * * * *', 16),
    mouseClick(() => {
      go('game');
    })
  ]);
};
