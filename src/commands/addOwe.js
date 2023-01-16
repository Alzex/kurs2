const Command = require('../class/core/command');
const addOwe = async (ctx, { userCollection, groupCollection }, [userName, groupName, amount]) => {
  const tgId = ctx.message.from.id;

  if (!userName || !groupName || !amount) {
    await ctx.sendMessage('You must specify a name for the group');
    return;
  }

  const [
    issuer,
    debtor,
    group
  ] = await Promise.all([
    userCollection.findOneById(tgId),
    userCollection.findOneByName(userName),
    groupCollection.findOneByName(groupName)
  ]);

  if (!debtor || !group) {
    await ctx.sendMessage('User or group not found');
    return;
  }

  if (group.ownerId !== tgId) {
    await ctx.sendMessage('You are not the owner of this group');
    return;
  } else if (debtor.id === issuer.id) {
    await ctx.sendMessage('You can\'t add an owe to yourself');
    return;
  } else if (!group.members.includes(debtor.id)) {
    await ctx.sendMessage('User is not a member of this group');
    return;
  }
  const amountInt = parseInt(amount, 10);
  if (isNaN(amountInt)) {
    await ctx.sendMessage('Amount must be a number');
    return;
  }
  debtor.owes.set(group.name, amountInt);
  await userCollection.


};

module.exports = new Command('add_owe', 'Adds an owe to a user', addOwe);
