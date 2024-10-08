import { AchievementSet } from '@cruncheevos/core';

import makeCheevos from './cheevos.js';
import makeRp from './rp.js';

const set = new AchievementSet({ gameId: 1168, title: 'Soul Blazer' });
makeCheevos(set);

export const rich = makeRp();

export default set;
