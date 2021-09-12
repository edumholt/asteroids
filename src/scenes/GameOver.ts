import k from '../kaboom';

const center = k.vec2(k.width() / 2, k.height() / 2);

export const GameOver = () => {
  console.log('* * * Game Over Screen * * *');

  k.add([
    k.pos(center),
    k.color(k.rgb(0.3, 0.3, 1)),
    k.origin('center'),
    k.scale(2),
    k.text('* * * * * * * * *\n\n\n\nGame Over\n\n\n\n* * * * * * * * *', 16),
    k.mouseClick(() => {
      k.go('game');
    })
  ]);
};
