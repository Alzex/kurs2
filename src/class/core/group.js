'use strict';

const Entity = require('./baseEntity');
const Collection = require('./groupCollection');
const GroupCollection = new Collection();

class Group extends Entity {
  constructor(name, collection = GroupCollection, type = 'Group') {
    super(name, collection, type);

  }
}

module.exports = Group;
