import kaboom from 'kaboom';
import type { KaboomCtx } from 'kaboom';

export const k: KaboomCtx = kaboom({
  width: 1600,
  height: 900,
  clearColor: [0, 0, 0, 1]
});

export default k;
