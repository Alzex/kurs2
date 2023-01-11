'use strict';

const Command = require('../class/core/command');
const Group = require('../class/core/group');

const getOwes = async (ctx, db, [name]) => {
  const currentGroup = await Group.fromMongoByName(name, db);
  if (ctx.message.from.id === currentGroup.ownerId) {
    const result = [];
    for (const memberID in currentGroup.members) {
      const member = db.userCollection.findByID(memberID);
      const name = member.name;
      const owe = member.owes.get(currentGroup.name);
      result.push({ name, owe });
    }
    await ctx.sendMessage(result);
  }
  await ctx.sendMessage('You are not the owner of this group.');
};

module.exports = new Command('get_owes', 'Shows owes in current group', getOwes);
