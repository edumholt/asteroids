import { Vec2 } from 'kaboom';
import k from '../kaboom';

const center: Vec2 = k.vec2(k.width() / 2, k.height() / 2);

export const Welcome = () => {
  console.log('* * * Welcome Screen * * *');

  k.add([
    k.pos(center),
    k.color(k.rgb(0.3, 0.3, 1)),
    k.origin('center'),
    k.text('* * * * * * * * *\n\nWELCOME\n\nto the\n\nJUNGLE!!\n\n* * * * * * * * *', 16)
  ]);
};
