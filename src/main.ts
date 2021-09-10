import k from './kaboom';
import { Welcome } from './scenes/Welcome';
import { SpaceShip } from './scenes/SpaceShip';

k.scene('welcome', Welcome);
k.scene('SpaceShip', SpaceShip)

k.scene('main', () => {
  k.add([k.text('HELLO KABOOM!!', 32), k.color(1, 1, 1, 1)]);
  k.wait(2, () => {
    k.go('SpaceShip');
  });
});

k.start('main');
