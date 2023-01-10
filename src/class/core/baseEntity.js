'use strict';

class Entity {

  constructor(name, collection, type) {
    this.name = name;
    this.collection = collection;
    this.type = type;
  }

  async create(name) {
    const entity = await this.collection.ifFieldExist(name);
    if (!entity) {
      await this.collection.create(new Entity(name, this.collection,
        this.type));
      const result = this.type + 'has been created.';
      return result;
    } else return 'This name is already taken.';
  }

  async delete(name) {
    const entity = await this.collection.ifFieldExist(name);
    if (entity) {
      await this.collection.delete(name);
      const result = this.type + 'has been deleted.';
      return result;
    } else return 'This name does not exist.';
  }
}

module.exports = Entity;
