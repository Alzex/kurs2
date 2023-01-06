module.exports = {
  init(bot) {
    bot.command('start', async (ctx) => {
      await ctx.reply('Hello, I am a bot!');
    });
  }
};
