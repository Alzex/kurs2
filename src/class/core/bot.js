'use strict';

class Bot {
  constructor(client, commands) {
    this.client = client;
    this.commands = commands;
  }
  init() {
    for (const command of this.commands) {
      this.client.command(command.name, command.execute.bind(command));
      console.log(`Command ${command.name} initialized`);
    }

    return this.client.startPolling();
  }
}

module.exports = Bot;
