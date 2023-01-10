'use strict';

const Collection = require('./collection');

class UserCollection extends Collection {
  constructor(db, name = 'Users collection') {
    super(db, name);
  }
}

module.exports = UserCollection;
