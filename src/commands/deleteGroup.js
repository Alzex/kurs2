const Command = require('../class/core/command');
const deleteGroup = async (ctx, { groupCollection }, [name]) => {
  if (!name) {
    await ctx.sendMessage('You must specify a group name');
    return;
  }
  const ownerId = ctx.message.from.id;
  const currentGroup = await groupCollection.findOneByName(name);

  if (currentGroup.ownerId !== ownerId) {
    await ctx.sendMessage('You are not the owner of this group.');
    return;
  }

  await groupCollection.delete({ _id: name });
  await ctx.sendMessage(`Group ${name} was deleted`);
};

module.exports = new Command('delete_group', 'Deleting group', deleteGroup);
