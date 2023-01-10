const Command = require('../class/core/command');
const UserCollection = require('../class/db/userCollection');

const start = async (ctx) => {
  await ctx.sendMessage(`Hello, <a href="tg://user?id=${ctx.message.from.id}}">${ctx.message.from.first_name}</a>!`, { parse_mode: 'HTML' });
  const collection = new UserCollection('users', ctx.db);
  await collection.create({ name: 'test', id: ctx.from.id });
};

module.exports = new Command('start', 'Starts the bot', start);
