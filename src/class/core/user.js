'use strict';

const Entity = require('./baseEntity');
const Collection = require('./userCollection');
const UserCollection = new Collection();

class User extends Entity {
  constructor(name, collection = UserCollection, type = 'User') {
    super(name, collection, type);
    this.owe = 0;
  }
  async changeOwe(ammount){
    this.owe += ammount;
  }
  async getOwe(){
      return this.owe;
    }   
}

module.exports =  User;
