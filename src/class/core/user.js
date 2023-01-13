'use strict';

const Entity = require('./baseEntity');


class User extends Entity {
  constructor(name, id, type = 'User') {
    super(name, type);
    this.id = id;
    this.owe = new Map();
  }

  async save(collection) {
    const sameName = await collection.ifFieldExist('name', this.name);
    const userExist = await collection.ifFieldExist('_id', this.id);
    if (sameName || userExist) {
      throw new Error('This name is already taken ' +
        'or you\'re already registered.');
    }
    await collection.create({
      name: this.name,
      owe: this.owe,
      id: this.id
    });
  }

  async changeOwe(name, amount, collection) {
    this.owe.set(name, amount);
    await collection.updateOne(this.id, { owe: this.owe });
  }

  async getOwe() {
    return this.owe;
  }
  async setOwe(owe){
    this.owe = owe;
  }
}

module.exports =  User;
