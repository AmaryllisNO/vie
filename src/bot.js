const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('@discord-api-types/v9');
const { Player } = require('@discord-player');
const fs = require('fs');

require('dotenv').config();
const { token } = process.env;

const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_VOICE_STATES'],
});
client.commands = new Discord.Collection(); //

const LOAD_SLASH = process.argv[2] == 'load';

const CLIENT_ID = '1028673408290004993';
const GUILD_ID = '635406581454077963';
