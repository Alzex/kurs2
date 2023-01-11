'use strict';

const startCommand = require('../commands/start');
const createGroupCommand = require('../commands/createGroup');
const getMyOweCommand = require('../commands/getMyOwe');
const getOwesCommand = require('../commands/getOwes');
const registerCommand = require('../commands/register');

module.exports = [
  startCommand,
  createGroupCommand,
  getMyOweCommand,
  getOwesCommand,
  registerCommand
];
