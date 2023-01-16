'use strict';

const Command = require('../class/core/command');

const listGroups = async (ctx, { groupCollection }) => {
  const ownerId = ctx.message.from.id;
  const groups = await groupCollection.findByUserId(ownerId);
  if (groups.length === 0) {
    await ctx.sendMessage('You have no groups');
    return;
  }
  const groupsNames = groups.map((group) => group.name).join('\n');
  await ctx.sendMessage(`Your groups:\n${groupsNames}`);
};

module.exports = new Command('list_groups', 'Shows you groups where you ' +
'are member', listGroups);
