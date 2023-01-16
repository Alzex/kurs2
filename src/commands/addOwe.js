const Command = require('../class/core/command');
const addOwe = (ctx, { userCollection, groupCollection }, [userName, groupName, amount]) => {

};

module.exports = new Command('add_owe', 'Adds an owe to a user', addOwe);
