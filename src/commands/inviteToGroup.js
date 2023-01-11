const Command = require('../class/core/command');
const Group = require('../class/core/group');
const User = require('../class/core/user');
const inviteToGroup = async (ctx, { groupCollection, userCollection }, [groupName, userName]) => {
  if (!groupName) {
    await ctx.sendMessage('You must specify a group name');
    return;
  }
  if (!userName) {
    await ctx.sendMessage('You must specify a user name');
    return;
  }

  const userId = ctx.message.from.id;
  const groupRaw = await groupCollection.findOneById(groupName);

  if (!groupRaw) {
    await ctx.sendMessage('There is no such group!');
    return;
  }

  const group = new Group(groupRaw.name, groupRaw.ownerId);
  group.members = groupRaw.members;

  if (!group.members.includes(userId) && userId !== group.ownerId) {
    await ctx.sendMessage('You are not a member of this group!');
    return;
  }

  const userRaw = await userCollection.findOneByName(userName);
  const user = new User(userRaw.name, userRaw._id);

  if (!group.members.includes(user.id)) {
    await group.addMember(user.id, groupCollection);
    await ctx.sendMessage(`User ${user.name} was added to the group ${group.name}`);
    await user.changeOwe(group.name, 0, userCollection);
    try {
      await ctx.telegram.sendMessage(user.id, `You were added to the group ${group.name}`);
    } catch (err) {
      await ctx.sendMessage('User is not in the bot chat or has blocked the bot');
    }
  } else {
    await ctx.sendMessage('This user is already in the group!');
  }

  if (!userRaw) {
    await ctx.sendMessage('There is no such user!');
    return;
  }
};

module.exports = new Command(
  'invite_to_group',
  'Invites user to group',
  inviteToGroup
);
