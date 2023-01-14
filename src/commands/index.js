'use strict';

const startCommand = require('../commands/start');
const createGroupCommand = require('../commands/createGroup');
const getMyOweCommand = require('../commands/getMyOwe');
const getOwesCommand = require('../commands/getOwes');
const registerCommand = require('../commands/register');
const inviteCommand = require('../commands/inviteToGroup');
const getMyOwe = require('../commands/getMyOwe');
const getOwes = require('../commands/getOwes');
const listGroups = require('../commands/listgroups');

module.exports = [
  startCommand,
  createGroupCommand,
  getMyOweCommand,
  getOwesCommand,
  registerCommand,
  inviteCommand,
  getMyOwe,
  getOwes,
  listGroups
];
