const UserCollection = require('../db/userCollection');
const GroupCollection = require('../db/groupCollection');

class Command {
  constructor(name, description, executor) {
    this.name = name;
    this.description = description;
    this.executor = executor;
  }

  execute(ctx) {
    const args = ctx.message.text.split(' ');
    const userCollection = new UserCollection(this.db);
    const groupCollection = new GroupCollection(this.db);
    args.shift();
    return this.executor(ctx, { userCollection, groupCollection }, args)
      .catch(
        (err) => {
          console.error(`Command ${this.name} failed with error:
            ${err}\n${err.stack}`);

          return ctx.sendMessage('Something went wrong');
        }
      )
      .finally(() => {
        console.log(`Command ${this.name} executed`);
      });
  }
}

module.exports = Command;
