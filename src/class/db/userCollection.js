'use strict';

const Collection = require('./collection');

class UserCollection extends Collection {
  constructor(name = 'users') {
    super(name);
  }
}

module.exports = UserCollection;
