const Command = require('../class/core/command');

const start = async (ctx, { userCollection }) => {
  await ctx.sendMessage(`Hello, <a href="tg://user?id=${ctx.message.from.id}}">${ctx.message.from.first_name}</a>!`, { parse_mode: 'HTML' });
  const newUser = await userCollection.create({ name: 'test', id: ctx.from.id });
};

module.exports = new Command('start', 'Starts the bot', start);
