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

  count() {
    return this.collection.countDocuments();
  }
}

module.exports = Collection;
