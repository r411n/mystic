const fetch = require('node-fetch');
require('./server')
const MusicBot = require("./structures/MusicClient");
const client = new MusicBot();

client.connect()

module.exports = client; 
//done 
