'use strict';

class Collection {
  constructor(name) {
    this.name = name;
  }

  find(collection, params = {}) {
    return collection.find(params)
      .then((data) => {
        data.toArray();
      });
  }

  findOneById(collection, id) {
    return collection.findOne({ _id: id })
      .then((data) => this.parseToEntity(data));
  }

  create(collection, data) {
    return collection.insertOne({ _id: data.id, ...data });
  }

  delete(collection, data) {
    return collection.remove(data);
  }

  count(collection) {
    return collection.countDocuments();
  }

  ifFieldExist(collection, field, value) {
    return collection.findOne({ [field]: value })
      .then((result) => (!!result));
  }

  updateOne(collection, id, data) {
    return collection.update({ _id: id }, { $set: data });
  }
}

module.exports = Collection;
