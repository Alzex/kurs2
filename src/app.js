'use strict';

const { Telegraf } = require('telegraf');
const { token } = require('./config');
const commands = require('./commands');
const DBClient = require('./modules/mongo');
const bot = require('../class/core/bot');

const bot = new Telegraf(token);
const db = new DBClient({ fromEnv: true });

commands.init(bot);
db.connect();

bot.startPolling();
