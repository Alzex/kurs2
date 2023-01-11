'use strict';

const Entity = require('./baseEntity');


class User extends Entity {
  constructor(name, type = 'User') {
    super(name, type);
    this.owe = new Map();
  }

  async save(collection) {
    const sameName = await collection.ifFieldExist(this.name);
    if (sameName) {
      throw new Error('This name is already taken.');
    }
    const result = await collection.create({
      name: this.name,
      members: this.members,
      ownerId: this.ownerId
    });

    return User.fromMongo(result, this.db);
  }

  async changeOwe(name, ammount) {
    this.owe.set(name, ammount);
  }

  async getOwe() {
    return this.owe;
  }
}

module.exports =  User;
