'use strict';

const Entity = require('./baseEntity');


class User extends Entity {
  constructor(name, type = 'User') {
    super(name, type);
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
