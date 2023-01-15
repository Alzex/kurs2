'use strict';

const Command = require('../class/core/command');
const Group = require('../class/core/group');
const User = require('../class/core/user');

const leave = async (ctx, { groupCollection, userCollection }, [groupName]) => {
    const userId = ctx.message.from.id;
    const currentGroup = groupCollection.findOneByName(groupName);
    if (!currentGroup.members.includes(userId)) {
        await ctx.sendMessage('You are not member of this group')
    }
    const newMembers = 
    const currentUser = userCollection.findOneById(userId); 
}

module.exports = new Command(
    'leave',
    'Deleting you from group',
    leave
  );