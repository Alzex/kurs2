'use strict';

class Entity {

  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  async create(name, collection) {
    const entity = await collection.ifFieldExist(name);
    if (!entity) {
      await this.collection.create(new Entity(name, collection,
        this.type));
      const result = this.type + 'has been created.';
      return result;
    } else return 'This name is already taken.';
  }

  async delete(name, collection) {
    const entity = await collection.ifFieldExist(name);
    if (entity) {
      await collection.delete(name);
      const result = this.type + 'has been deleted.';
      return result;
    } else return 'This name does not exist.';
  }

  static fromMongo(obj, db) {
    const entity = new Entity(obj.name, db);
    return { ...entity, ...obj };
  }
}

module.exports = Entity;
