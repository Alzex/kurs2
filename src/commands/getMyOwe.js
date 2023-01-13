'use strict';

const Command = require('../class/core/command');

const getMyOwe = async (ctx, { userCollection }, [ name ]) => {
  console.log(name);
  if (name) {
    const tgId = ctx.message.from.id;
    const userData = await userCollection.findOneById(tgId);
    console.log(userData.owe[name]);
    return await ctx.sendMessage('Your debt in group is ' + userData.owe[name]);
  } return await ctx.sendMessage('Specify group name');
};

module.exports = new Command('get_my_owe', 'Shows your owe in group', getMyOwe);

