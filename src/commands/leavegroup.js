'use strict';

const Command = require('../class/core/command');
const Group = require('../class/core/group');
const User = require('../class/core/user');

const leave = async (ctx, { groupCollection, userCollection }, [groupName]) => {
    const userId = ctx.message.from.id;
    const groupRaw = await groupCollection.findOneById(groupName);
    if (!groupRaw.members.includes(userId)) {
        await ctx.sendMessage('You are not member of this group')
    }
    
}

module.exports = new Command(
    'leave',
    'Deleting you from group',
    leave
  );