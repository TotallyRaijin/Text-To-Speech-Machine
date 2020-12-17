const Discord = require('discord.js');
const client = new Discord.client;
const tts = require('google-tts-api');
var config = require('./config.json');
const token = config.token

client.on('ready', () => {
  console.log(`I'm running!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('!tts') {
     var audio = message.content.substr("!tts ".length);
     const url = tts.getAudioUrl(audio, {
        lang: 'en-US',
        slow: false,
        host: 'https://translate.google.com',
     }),
  }
});

client.login(token);
