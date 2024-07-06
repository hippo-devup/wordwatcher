import plugin from '../../lib/plugins/plugin.js'
import fetch from 'node-fetch'
import { exec } from 'child_process';
import common from "../../lib/common/common.js";
import path from "path"
import config from './components/setting.js';

const _path = path.join(process.cwd(), 'plugins/wordwatcher')
const WORDS_DISALLOWED = config.getConfig('general').keywords.join('|')

export class words extends plugin {
    constructor () {
		
		super({
		  name:  '群主题管控',
		  dsc:   '屏蔽一些不合适的文字',
		  event: 'message',
		  priority: 3000,
		  rule: [
			{
			  reg: '^.*?(' + WORDS_DISALLOWED + ').*$',
			  fnc: 'revert'
			}
		  ]
		})
	}
	
	async revert(e) {
		if (e.isGroup)
			e.group.recallMsg(e)
	}
}