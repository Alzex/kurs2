'use strict';

const Collection = require('./collection');

class UserCollection extends Collection {
  constructor(db, name = 'users') {
    super(db, name);
  }
}

module.exports = UserCollection;
