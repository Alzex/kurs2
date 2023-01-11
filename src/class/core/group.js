'use strict';

const Entity = require('./baseEntity');
const GCollection = require('./groupCollection');
const GroupCollection = new GCollection();
const UCollection = require('./userCollection');
const UserCollection = new UCollection();



class Group extends Entity {
  constructor(name, collection = GroupCollection, type = 'Group') {
    super(name, collection, type);
    this.members = [];
  }

  async addMember(tgID) {
    if(!this.members.indexOf(tgID)){
       this.members.push(tgID);
    return 'Added new member!'
    }
    return 'This person is already a member!'
  }

  async deleteMember(tgID) {
    if(this.members.indexOf(tgID)){
      this.members.splice(this.members.indexOf(tgID), 1);
     return 'Member deleted!'
    }
    return 'There is no such member!'
  }

  async splitTheBill(price) {
     const ammount = price / this.members.length;
     for(const tgID in this.members){
      const member = await UserCollection.findOneById(tgID);
      member.changeOwe(ammount);
  }
}

module.exports = Group;
