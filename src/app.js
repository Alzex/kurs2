'use strict';

const { Telegraf } = require('telegraf');
const { token } = require('./config');
const commands = require('./commands');
const DBClient = require('./modules/mongo');
const Bot = require('./class/core/bot');


const db = new DBClient({ fromEnv: true });

const client = new Telegraf(token);

const bot = new Bot(client, commands, db.db);


db.connect();

bot.init();
