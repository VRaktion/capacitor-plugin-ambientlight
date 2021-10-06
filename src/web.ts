import { WebPlugin } from '@capacitor/core';

import type { AmbientLightPlugin } from './definitions';

export class AmbientLightWeb extends WebPlugin implements AmbientLightPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
