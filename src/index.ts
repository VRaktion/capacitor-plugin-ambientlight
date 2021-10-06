import { registerPlugin } from '@capacitor/core';

import type { AmbientLightPlugin } from './definitions';

const AmbientLight = registerPlugin<AmbientLightPlugin>('AmbientLight', {
  web: () => import('./web').then(m => new m.AmbientLightWeb()),
});

export * from './definitions';
export { AmbientLight };
