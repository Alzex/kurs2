const { Telegraf } = require('telegraf');

const { token } = require('./config');

const commands = require('./commands');

const bot = new Telegraf(token);

commands.init(bot);

bot.startPolling();
