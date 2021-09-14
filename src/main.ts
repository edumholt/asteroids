import k from './kaboom';
import { Welcome } from './scenes/Welcome';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';

const { add, color, go, loadSound, loadSprite, scene, start, text, wait } = k;

loadSprite('tilesheet', 'assets/simpleSpace_tilesheet.png', {
  sliceX: 8,
  sliceY: 6
});
loadSprite('background', 'assets/spaceBackground.png');
loadSprite('explosion', 'assets/explosion08.png');

loadSound('shot', 'assets/shot.mp3');
loadSound('thruster', 'assets/thrusterFire.mp3');
loadSound('explosion', 'assets/explosion.mp3');
loadSound('thud', 'assets/distant_thud.mp3');

scene('welcome', Welcome);
scene('game', Game);
scene('gameOver', GameOver);

scene('main', () => {
  add([text('HELLO KABOOM!!', 32), color(1, 1, 1, 1)]);
  wait(2, () => {
    go('game');
  });
});

start('main');
