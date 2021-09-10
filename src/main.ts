import k from './kaboom';
import { Welcome } from './scenes/Welcome';
import { Game } from './scenes/Game';

k.scene('welcome', Welcome);
k.scene('game', Game)

k.scene('main', () => {
  k.add([k.text('HELLO KABOOM!!', 32), k.color(1, 1, 1, 1)]);
  k.wait(2, () => {
    k.go('game');
  });
});

k.start('main');
