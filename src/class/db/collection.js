'use strict';

class Collection {
  constructor(name, db) {
    this.collection = db.collection(name);
  }

  find(params = {}) {
    return this.collection.find(params).toArray();
  }

  findOneById(id) {
    return this.collection.findOne({ _id: id });
  }

  create(data) {
    return this.collection.insertOne({ _id: data.id, ...data });
  }

  count() {
    return this.collection.countDocuments();
  }

  ifFieldExist(field, value) {
    return this.collection.findOne({ [field]: value })
      .then((result) => (!!result));
  }
}

module.exports = Collection;
