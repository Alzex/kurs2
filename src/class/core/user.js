'use strict';

const Entity = require('./baseEntity');
const Collection = require('./userCollection');
const UserCollection = new Collection();

class User extends Entity {
  constructor(name, collection = UserCollection, type = 'User') {
    super(name, collection, type);
    this.owe = new Map();
  }
  async changeOwe(name, ammount) {
    this.owe.set(name, ammount);
  }
  async getOwe() {
    return this.owe;
  }
}

module.exports =  User;
