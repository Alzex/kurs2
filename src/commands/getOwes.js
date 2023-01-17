'use strict';

const Command = require('../class/core/command');

const getOwes = async (ctx, { userCollection, groupCollection }, [name]) => {
  if (!name) {
    await ctx.sendMessage('You must specify a group name');
    return;
  }
  const currentGroup = await groupCollection.findOneByName(name);

  if (!currentGroup) {
    await ctx.sendMessage('There is no such group');
    return;
  }

  if (ctx.message.from.id === currentGroup.ownerId) {
    const result = [];
    for (const memberID of currentGroup.members) {
      const member = await userCollection.findOneById(memberID);
      if (!member) {
        continue;
      }
      const name = member.name;
      const owe = member.owe[currentGroup.name];
      result.push({ name, owe });
    }
    await ctx.sendMessage(`Debts in group ${currentGroup.name}:\n
    ${result.map((member) => `${member.name} owes ${member.owe || 0}\n`)
    .join('')}`);
    return;
  }
  await ctx.sendMessage('You are not the owner of this group.');
};

module.exports = new Command('get_owes', 'Shows owes in current group', getOwes);
