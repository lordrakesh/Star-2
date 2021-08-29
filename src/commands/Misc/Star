import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'star',
            description: 'Displays the info',
            category: 'misc',
            usage: `${client.config.prefix}star`,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        

        
        
return void M.reply(await request.buffer('https://i.ibb.co/Dgz2Hgs/star.jpg'),
MessageType.image,
            undefined,
            undefined,
            `*✨Star✨* \n\n *Wishing you to have a nice day*💗`
           

)


    }
