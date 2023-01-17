const Command = require('../class/core/command');
const help = async (ctx) => {
  await ctx.sendMessage('Commands:\n' +
    '/start - start bot\n' +
    '/register - register new user\n' +
    '/list_groups - shows you groups where you are member\n' +
    '/leave - deleting you from group\n' +
    '/get_owes - shows owes in current group\n' +
    '/add_owe - adds owe to current group\n' +
    '/add_group - adds new group\n' +
    '/help - shows this message');
};

module.exports = new Command('help', 'Shows you all commands', help);
