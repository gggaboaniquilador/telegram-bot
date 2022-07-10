const { Telegraf } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_API_KEY);
//great
bot.start((ctx)=>{
  ctx.reply('Bienvenido ' + ctx.from.first_name + ' ' + ctx.from.last_name + '  al bot de tarea SID4A:D');
})

bot.help((ctx)=>{
  ctx.reply('usa /aprobar para aprobar esta tarea');
})

bot.settings((ctx)=>{
  ctx.reply('No hay configuraciones disponibles...');
})

bot.command(['aprobar', 'Aprobar', 'approve', 'Approve', 'APROBAR'], (ctx) => { 
  ctx.reply('Genial, acabas de aprobar esta tarea:D!!!');
})

bot.hears('los apruebo?', (ctx)=>{
  ctx.reply('Si claro! este bot es genial:D!!');
})

bot.on('text', (ctx)=>{
  ctx.reply('estas usando el bot usa /help para que te ofrescamos ayuda en el bot');
})

bot.on('sticker', (ctx)=>{
  ctx.reply('oh que lindo sticker:D!');
})

bot.launch();