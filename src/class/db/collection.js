class Collection {
  constructor(name, db) {
    this.collection = db.collection(name);
  }

  find(params = {}) {
    return this.collection.find(params);
  }

  findOne(params = {}) {

  }
}
