import k from '../kaboom';

const { add, color, height, origin, pos, rgb, text, vec2, width } = k;

const center = vec2(width() / 2, height() / 2);

export const Welcome = () => {
  console.log('* * * Welcome Screen * * *');

  add([
    pos(center),
    color(rgb(0.3, 0.3, 1)),
    origin('center'),
    text('* * * * * * * * *\n\nWELCOME\n\nto the\n\nJUNGLE!!\n\n* * * * * * * * *', 16)
  ]);
};
