import Dexie from 'https://cdn.jsdelivr.net/npm/dexie@3.2.2/dist/dexie.mjs';

export class MyDB extends Dexie {
  constructor() {
    super('profileDb');
    this.version(1).stores({
      profile: 'id, position, email, address'
    });
  }
}
