import plugin from '../../lib/plugins/plugin.js'
import fetch from 'node-fetch'
import { exec } from 'child_process';
import common from "../../lib/common/common.js";
import path from "path"

const _path = path.join(process.cwd(), 'plugins/wordwatcher')

export class words extends plugin {
    constructor () {
		super({
		  name: '文字狱',
		  dsc: '屏蔽一些不合适的文字',
		  event: 'message',
		  priority: 3000,
		  rule: [
			{
			  reg: '^#表白',
			  fnc: 'tell'
			},
			{
			  reg: '^.*?珊瑚宫.*$',
			  fnc: 'revert'
			}
		  ]
		})
	}
	
	async tell(e) {
		if (e.at) {
			let num = Math.floor(100 + Math.random() * 899)
			e.reply([segment.at(e.ta), `我宣布，你是在我最无能为力的年纪，遇到的最想守护一生的第${num}个女孩子`])
		}
		
	}
	
	async revert(e) {
		if (e.isGroup)
			e.group.recallMsg(e)
	}
}