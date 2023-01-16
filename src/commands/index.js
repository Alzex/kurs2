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
const addOwe = require('../commands/addOwe');
const getDebts = require('../commands/getDebts');

module.exports = [
  startCommand,
  createGroupCommand,
  getMyOweCommand,
  getOwesCommand,
  registerCommand,
  inviteCommand,
  getMyOwe,
  getOwes,
  listGroups,
  addOwe,
  getDebts,
];
