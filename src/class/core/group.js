'use strict';

const Entity = require('./baseEntity');
const Collection = require('./groupCollection');
const GroupCollection = new Collection();

class Group extends Entity {
  constructor(name, collection = GroupCollection, type = 'Group') {
    super(name, collection, type);
    this.members = [];
  }

  async addUser(tgID) {
    await this.members.push(tgID);
  }

  async deleteUser(tgID) {
    await this.members.splice(this.members.indexOf(tgID), 1);
  }

  async splitTheBill(price) {
    await return (price / this.members.length)
  }
}

module.exports = Group;
