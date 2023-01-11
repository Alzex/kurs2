'use strict';

const Command = require('../class/core/command');
const User = require('../class/core/user');

//TODO add user to db
const register = async (ctx, { userCollection }, [name]) => {
  if (!name) {
    await ctx.sendMessage('You must specify a name for your profile');
    return;
  }
  const userId = ctx.message.from.id;
  try {
    //await user.save();
  } catch (err) {
    await ctx.sendMessage(err.message);
  }


};

module.exports = new Command('register', 'Registers new user', register);
