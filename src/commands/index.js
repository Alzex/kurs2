'use strict';

const startCommand = require('../commands/start');
const createGroupCommand = require('../commands/createGroup');
const getMyOweCommand = require('../commands/getMyOwe');
const getOwesCommand = require('../commands/getOwes');

module.exports = [
  startCommand,
  createGroupCommand,
  getMyOweCommand,
  getOwesCommand
];
