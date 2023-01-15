'use strict';

const Command = require('../class/core/command');
const Group = require('../class/core/group');
const User = require('../class/core/user');

const leave = (ctx, { groupCollection, userCollection }, [groupName]) => {
    const userId = ctx.message.from.id;
    const currentGroup = groupCollection.

}

module.exports = new Command(
    'leave',
    'Deleting you from group',
    leave
  );