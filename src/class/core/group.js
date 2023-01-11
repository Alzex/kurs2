'use strict';

const Entity = require('./baseEntity');
const GCollection = require('../db/groupCollection');
const UCollection = require('../db/userCollection');



class Group extends Entity {
  constructor(name, db, ownerId, type = 'Group') {
    super(name, db, type);
    this.members = [];
    this.ownerId = ownerId;
  }

  async save() {
    this.collection = new GCollection(this.db);
    const sameName = await this.collection.ifFieldExist(this.name);
    if (sameName) {
      throw new Error('This name is already taken.');
    }
    await this.collection.create({
      name: this.name,
      members: this.members,
      ownerId: this.ownerId
    });
  }

  async addMember(tgID) {
    if (!this.members.indexOf(tgID)) {
      this.members.push(tgID);
      return 'Added new member!';
    }
    return 'This person is already a member!';
  }

  async deleteMember(tgID) {
    if (this.members.indexOf(tgID)) {
      this.members.splice(this.members.indexOf(tgID), 1);
      return 'Member deleted!';
    }
    return 'There is no such member!';
  }

  async splitTheBill(price) {
    const ammount = price / this.members.length;
    for (const tgID in this.members) {
      const member = await UserCollection.findOneById(tgID);
      member.changeOwe(ammount);
    }
  }
}

module.exports = Group;
