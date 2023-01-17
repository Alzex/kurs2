'use strict';

const Command = require('../class/core/command');

const listGroups = async (ctx, { groupCollection }) => {
  const ownerId = ctx.message.from.id;
  const [groups, groupsAsOwner] =
    await Promise.all([
      groupCollection.findByUserId(ownerId),
      groupCollection.find({ ownerId })
    ]);

  if (!groups.length) {
    await ctx.sendMessage('You have no groups');
    return;
  }
  const groupsNames = groups.map((group) => group.name).join('\n');
  const groupsAsOwnerNames = groupsAsOwner.map((group) => group.name)
    .join('\n');

  await ctx.sendMessage(`Your groups:\n${groupsNames}\n
  \nGroups you are owner of:\n${groupsAsOwnerNames}`);
};

module.exports = new Command('list_groups', 'Shows you groups where you ' +
'are member', listGroups);
