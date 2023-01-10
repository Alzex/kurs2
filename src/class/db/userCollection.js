'use strict';

const Collection = require('./collection');

class UserCollection extends Collection {
  constructor(name, db) {
    super(name, db);
  }
}

module.exports = UserCollection;
