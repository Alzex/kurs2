'use strict';

const Collection = require('./collection');

class GroupCollection extends Collection {
  constructor(name = 'groups') {
    super(name);
  }

  getGroupMembers(collection, groupId) {
    return collection.findOne({ groupId })
      .then((group) => group.members);
  }
}

module.exports = GroupCollection;
