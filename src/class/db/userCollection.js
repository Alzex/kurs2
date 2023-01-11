'use strict';

const Collection = require('./collection');

class UserCollection extends Collection {
  constructor(name = 'Users collection') {
    super(name);
  }
}

module.exports = UserCollection;
