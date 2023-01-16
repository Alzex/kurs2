const Command = require('../class/core/command');
const getDebts = async (ctx, { userCollection, groupCollection }, [groupName]) => {
  if (!groupName) {
    await ctx.sendMessage('You must specify a group name');
    return;
  }
  const currentGroup = await groupCollection.findOneByName(groupName);
  if (ctx.message.from.id !== currentGroup.ownerId) {
    await ctx.sendMessage('You are not the owner of this group.');
    return;
  }

  if (!currentGroup.members.length) {
    await ctx.sendMessage('There is no members in this group.');
    return;
  }

  const members = await userCollection.findManyByIds(currentGroup.members);

  const text = `Debts in group ${currentGroup.name}:\n`;
  const result =
    text +
    members.map(
      (member) => `${member.name} owes ${member.owe[currentGroup.name] || 0}\n`
    ).join('');

  await ctx.sendMessage(result);

};

module.exports = new Command('get_debts', 'Shows debts in current group', getDebts);
