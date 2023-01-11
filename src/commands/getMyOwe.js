'use strict';

const Command = require('../class/core/command');

const getMyOwe = async (ctx, { userCollection }, name) => {
  const tgID = ctx.message.from.id;
  const user = userCollection.findOneById(tgID);
  return user.owe.get(name);
};

module.exports = new Command('get_my_owe', 'Shows your owe in group', getMyOwe);

