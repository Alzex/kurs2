const UserCollection = require('../db/userCollection');
const GroupCollection = require('../db/groupCollection');

class Command {
  constructor(name, description, executor, requiresAuth = true) {
    this.name = name;
    this.description = description;
    this.executor = executor;
    this.requiresAuth = requiresAuth;
  }

  async execute(ctx) {
    const userCollection = new UserCollection(this.db);

    const isAuth =
      this.requiresAuth ? await Command.checkAuth(ctx, userCollection) : true;

    if (!isAuth) {
      return;
    }

    const groupCollection = new GroupCollection(this.db);

    const args = ctx.message.text.split(' ');
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

  static async checkAuth(ctx, userCollection) {
    const userId = ctx.message.from.id;
    const user = await userCollection.findOneById(userId);
    if (!user) {
      await ctx.reply('You are not registered. Use /register to register');
      return false;
    }
    return true;
  }
}

module.exports = Command;
