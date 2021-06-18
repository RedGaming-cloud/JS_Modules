console.log('load.js');

import { loadScript } from './loadscript.js'
import { scrA } from './scriptA'

loadScript('/HW2/scripts/scriptB.js', scrA('script A done'));


