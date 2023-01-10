class Command {
  constructor(name, description, executor) {
    this.name = name;
    this.description = description;
    this.executor = executor;
  }

  execute(ctx) {
    const args = ctx.message.text.split(' ');
    args.shift();
    return this.executor({ db: this.db, ...ctx }, ...args)
      .catch(
        (err) => {
          console.error(`Command ${this.name} failed with error: ${err}`);
          return ctx.sendMessage('Something went wrong');
        }
      )
      .finally(() => {
        console.log(`Command ${this.name} executed`);
      });
  }
}

module.exports = Command;
