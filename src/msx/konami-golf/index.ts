import { AchievementSet } from '@cruncheevos/core';

import makeCheevos from './cheevos.js';
import makeBoards from './boards.js';
import makeRp from './rp.js';

const set = new AchievementSet({ gameId: 20358, title: "Konami's Golf" });
makeCheevos(set);
makeBoards(set);
await makeRp(set).catch(console.log);

export default set;
