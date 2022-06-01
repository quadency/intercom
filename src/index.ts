import { registerPlugin } from '@capacitor/core';

import type { IntercomPlugin } from './definitions';

const Intercom = registerPlugin<IntercomPlugin>('Intercom', {
});

export * from './definitions';
export { Intercom };
