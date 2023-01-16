'use strict';

const Entity = require('./baseEntity');

class Group extends Entity {
  constructor(name, ownerId, type = 'Group') {
    super(name, type);
    this.members = [];
    this.ownerId = ownerId;
  }

  async save(collection) {
    const sameName = await collection.ifFieldExist('name', this.name);
    if (sameName) {
      throw new Error('This name is already taken.');
    }
    await collection.create({
      _id: this.name,
      name: this.name,
      members: this.members,
      ownerId: this.ownerId
    });
  }

  async addMember(tgID, collection) {
    if (!this.members.includes(tgID)) {
      this.members.push(tgID);
      return collection.updateField(this.name, { members: this.members });
    }
    throw new Error('This member is already in the group.');
  }

  async deleteMember(tgID) {
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
