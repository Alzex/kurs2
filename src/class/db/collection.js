'use strict';

const Entity = require('../core/baseEntity');

class Collection {
  constructor(db, name) {
    this.collection = db.collection(name);
  }

  find(params = {}) {
    return this.collection.find(params)
      .then((data) => {
        data.toArray();
      });
  }

  findOneById(id) {
    return this.collection.findOne({ _id: id })
      .then((data) => this.parseToEntity(data));
  }

  create(data) {
    return this.collection.insertOne({ _id: data.id, ...data });
  }

  delete(data) {
    return this.collection.remove(data);
  }

  count() {
    return this.collection.countDocuments();
  }

  ifFieldExist(field, value) {
    return this.collection.findOne({ [field]: value })
      .then((result) => (!!result));
  }

  updateOne(id, data) {
    return this.collection.update({ _id: id }, { $set: data });
  }

  parseToEntity(obj, type) {
    const result = new Entity(obj.name, this.collection, type);
    return { ...result, ...obj };
  }
}

module.exports = Collection;
