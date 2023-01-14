'use strict';

const Command = require('../class/core/command');

const listGroups = async (ctx, { userCollection, groupCollection }) => {
  const ownerId = ctx.message.from.id;
  const groupsIds = userCollection.findOneById(ownerId)['groups'];
  console.log(groupsIds)
}

module.exports = new Command('list_groups', 'Shows you groups where you ' +
'are member', listGroups);
