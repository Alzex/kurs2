'use strict';

const Command = require('../class/core/command');

const leave = async (ctx, { groupCollection, userCollection }, [groupName]) => {
  if (!groupName) {
    await ctx.sendMessage('You must specify a group name');
    return;
  }
  const userId = ctx.message.from.id;
  const currentGroup = await groupCollection.findOneByName(groupName);

  if (!currentGroup.members.includes(userId)) {
    await ctx.sendMessage('You are not member of this group');
    return;
  }

  currentGroup.members = currentGroup.members.filter((member) => member !== userId);

  await Promise.all([
    groupCollection.updateField(groupName, 'members', currentGroup.members),
    ctx.sendMessage(`You left the group ${groupName}`)
  ]);

};

module.exports = new Command(
  'leave',
  'Deleting you from group',
  leave
);
