'use strict';

const Collection = require('./collection');

class UserCollection extends Collection {
  constructor(db, name = 'Users collection') {
    super(name, db);
  }
}

module.exports = UserCollection;
