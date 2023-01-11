'use strict';

const Command = require('../class/core/command');
const Group = require('../class/core/group');

const getOwes = async (ctx, db, [name]) => {
  const currentGroup = ;
  if (ctx.message.from.id === currentGroup.ownerId) {
    const result = [];
    for (const memberID in currentGroup.members) {
      const member = db.userCollection.findByID(memberID);
      const name = member.name;
      const owe = member.owes.get(currentGroup.name);
      result.push({ name, owe });
    }
    return result;
  } else return 'You aren\'t group leader';
};

module.exports = new Command('get_owes', 'Shows owes in current group', getOwes);
