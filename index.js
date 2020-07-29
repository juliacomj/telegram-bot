'use strict'

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;


const bot = new TelegramBot(token, {
    polling: true
});


bot.onText(/\/atendimento (.+)/, (msg, match) => {
const chatId = msg.chat.id;
const resp = match[1];
let response;
    if(resp === 'unhas'){
        response = 'venha pintar as unhas com sobrinho neto Luiz Claudio';
    }else{
        response = 'tudo esterelizado pa você não fica mal';
    }
    bot.sendMessage(chatId, response);
});


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Cabeleila Leila! Hidratação, unhas, cabelo e unhas.');
});