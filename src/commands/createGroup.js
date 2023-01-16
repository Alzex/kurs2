const Command = require('../class/core/command');
const Group = require('../class/core/group');

const createGroup = async (ctx, { groupCollection }, [name]) => {
  if (!name) {
    await ctx.sendMessage('You must specify a name for the group');
    return;
  }
  const ownerId = ctx.message.from.id;
  try {
    const group = new Group(name, ownerId);
    await group.save(groupCollection);
    await ctx.sendMessage(`Group ${name} created!`);
  } catch (err) {
    await ctx.sendMessage(err.message);
  }

};

module.exports = new Command('create_group', 'Creates a group', createGroup);
