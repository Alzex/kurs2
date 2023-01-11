const Command = require('../class/core/command');

const start = async (ctx) => {
  await ctx.sendMessage(`Hello, <a href="tg://user?id=${ctx.message.from.id}">${ctx.message.from.first_name}</a>!\n
    I'm a bot that helps you to keep track of your debts.\n
    Use /help to see all available commands.\n
    Or you can use /register to register new user.`,
  { parse_mode: 'HTML' });
};

module.exports = new Command('start', 'Starts the bot', start);
