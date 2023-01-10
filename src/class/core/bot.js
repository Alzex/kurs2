'use strict';

class Bot {
  constructor(client, commands, db) {
    this.client = client;
    this.commands = commands;
    this.db = db;
  }
  init() {
    const commandList = this.commands.map((commandIn) => ({
      command: commandIn.name,
      description: commandIn.description
    }));

    this.client.telegram.setMyCommands(commandList, {
      scope: {
        type: 'default'
      }
    }).then(() => {
      console.log('Commands set');
    });

    for (const command of this.commands) {
      const executor = command.execute.bind({ db: this.db, ...command });
      this.client.command(command.name, executor);
      console.log(`Command ${command.name} initialized`);
    }

    return this.client.startPolling();
  }
}

module.exports = Bot;
