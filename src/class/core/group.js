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
    if(!this.members.indexOf(tgID)){
       this.members.push(tgID);
    return
    }
    return 
  }

  async deleteUser(tgID) {
    await  this.members.splice(this.members.indexOf(tgID), 1);
     return 
  }

  async splitTheBill(price) {
    await return (price / this.members.length)
  }
}

module.exports = Group;
