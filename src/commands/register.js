'use strict';

const Command = require('../class/core/command');
const User = require('../class/core/user'); 

const register = async (ctx, db, name) => {
  if (!name) {
    await ctx.sendMessage('You must specify a name for your profile');
    return;
  }
  const userId = ctx.message.from.id;
  try {
    const user = new User(name, db;
    await group.save();
  } catch (err) {
    await ctx.sendMessage(err.message);
  }


}

module.exports = new Command(register, 'Registers new user', register);
