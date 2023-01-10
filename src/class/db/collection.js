'use strict';

class Collection {
  constructor(db, name) {
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
}

module.exports = Collection;
