import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import  axios  from 'axios'
import Jimp from 'jimp'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'nsfw',
            
            
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {


        const rnekol = ["waifu", "neko"];
        const rnekolc = rnekol[Math.floor(Math.random() * rnekol.length)];
        const neko = await axios.get('https://api.waifu.pics/nsfw/' + rnekolc)

return void M.reply(await request.buffer(neko.data.url), MessageType.image, undefined, undefined, `💫`)



    }








}
