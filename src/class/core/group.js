'use strict';

const Entity = require('./baseEntity');

class Group extends Entity {
  constructor(name, ownerId, type = 'Group') {
    super(name, type);
    this.members = [];
    this.ownerId = ownerId;
  }

  async save(collection) {
    const sameName = await collection.ifFieldExist(this.name);
    if (sameName) {
      throw new Error('This name is already taken.');
    }
    await collection.create({ id: this.name, members: this.members,
      ownerId: this.ownerId });
  }

  addMember(tgID) {
    if (!this.members.includes(tgID)) {
      this.members.push(tgID);
      return this.save();
    }
    throw new Error('This member is already in the group.');
  }

  deleteMember(tgID) {
    if (this.members.indexOf(tgID)) {
      this.members.splice(this.members.indexOf(tgID), 1);
      return this.save();
    }
    throw new Error('There is no such member!');
  }

  async splitTheBill(price) {
    const ammount = price / this.members.length;
    for (const tgID in this.members) {
      const member = await this.userCollection.findOneById(tgID);
      await member.changeOwe(this.name, ammount);
    }
  }
}

module.exports = Group;
