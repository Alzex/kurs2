'use strict';

const Command = require('../class/core/command');
const User = require('../class/core/user');

const getMyOwe = async (ctx, { userCollection }, name) => {
  const tgId = ctx.message.from.id;
  const userData = await userCollection.findOneById(tgId);
  console.log(userData.owe[name]);
  return await ctx.sendMessage('Your debt in group ' + userData.owe[name]);
};

module.exports = new Command('get_my_owe', 'Shows your owe in group', getMyOwe);

