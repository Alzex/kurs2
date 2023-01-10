'use strict';

const groupCollection = require(../db/groupCollection.js);

class Group {
    constructor(name){
        this.name = name;
        this.members = [];
    }
    groupCreate(name){
        
    }
    groupDelete(name){

    }
    groupAddMember(tgID){

    }
    groupRemoveMember(tgID){

    }
    
}

module.exports = Group;