'use strict';

const Collection = require('./collection');

class GroupCollection extends Collection {
  constructor(db, name = 'Groups Collection') {
    super(db, name);
  }

  getGroupMembers(groupId) {
    return this.collection.findOne({ groupId })
      .then((group) => group.members);
  }
}

module.exports = GroupCollection;
