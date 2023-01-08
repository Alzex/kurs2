const { MongoClient } = require('mongodb');
const { mongo } = require('../config');

class DBClient {
  constructor({ fromEnv = true, uri, db }) {
    this.client = new MongoClient(fromEnv ? mongo.uri : uri);
    this.db = this.client.db(fromEnv ? mongo.db : db);
  }

  connect() {
    return this.client.connect()
      .then(() => {
        console.log('Connected to MongoDB');
      });
  }
}

module.exports = DBClient;
