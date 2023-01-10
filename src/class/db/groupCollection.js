'use strict';

const Collection = require('./collection');

class GroupCollection extends Collection {
  constructor(name, db) {
    super(name, db);
  }

  getGroupMembers(groupId) {
    return this.collection.findOne({ groupId })
      .then((group) => group.members);
  }
}

module.exports = GroupCollection;
