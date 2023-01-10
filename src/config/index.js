'use strict';

require('dotenv').config();

module.exports = {
  token: process.env.TOKEN,
  mongo: {
    uri: process.env.MONGO_URI,
    db: process.env.MONGO_DB,
  }
};
