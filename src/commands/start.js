const Command = require('../class/core/command');
const UserCollection = require('../class/db/userCollection');

const start = async (ctx) => {
  await new UserCollection();
  await ctx.sendMessage(`Hello, <a href="tg://user?id=${ctx.message.from.id}}">${ctx.message.from.first_name}</a>!`, { parse_mode: 'HTML' });
};

module.exports = new Command('start', 'Starts the bot', start);
