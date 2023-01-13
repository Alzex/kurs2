'use strict';

const Command = require('../class/core/command');

const getOwes = async (ctx, { userCollection, groupCollection }, [name]) => {
  const currentGroup = await groupCollection.findOneByName(name);
  if (ctx.message.from.id === currentGroup.ownerId) {
    const result = [];
    for (const memberID in currentGroup.members) {
      const member = userCollection.findByID(memberID);
      const name = member.name;
      const owe = member.owes.get(currentGroup.name);
      result.push({ name, owe });
    }
    await ctx.sendMessage(result);
  }
  await ctx.sendMessage('You are not the owner of this group.');
};

module.exports = new Command('get_owes', 'Shows owes in current group', getOwes);
