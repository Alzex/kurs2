'use strict';

const Entity = require('./baseEntity');
const GCollection = require('../db/groupCollection');
const UCollection = require('../db/userCollection');

class Group extends Entity {
  constructor(name, db, ownerId, type = 'Group') {
    super(name, db, type);
    this.members = [];
    this.ownerId = ownerId;
    this.collection = new GCollection(db);
    this.userCollection = new UCollection(db);
  }

  async save() {
    const sameName = await this.collection.ifFieldExist(this.name);
    if (sameName) {
      throw new Error('This name is already taken.');
    }
    const result = await this.collection.create({
      name: this.name,
      members: this.members,
      ownerId: this.ownerId
    });

    return Group.fromMongo(result, this.db);
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

  static fromMongo(obj, db) {
    const group = new Group(obj.name, db, obj.ownerId);
    group.members = obj.members;
    group.id = obj._id;
    return group;
  }

  static fromMongoByName(name, db, collectionName = 'groups') {
    return db.collection(collectionName).findOne({ name })
      .then((data) => Group.fromMongo(data, db));
  }
}

module.exports = Group;
