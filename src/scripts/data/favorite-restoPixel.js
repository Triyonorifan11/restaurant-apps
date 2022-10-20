import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJEK_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJEK_STORE_NAME, { keyPath: 'id' });
  },
});

const favoriteRestoPixels = {
  async getRestoDB_Id(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJEK_STORE_NAME, id);
  },

  async getAllRestoDB() {
    return (await dbPromise).getAll(OBJEK_STORE_NAME);
  },

  async putRestoDB(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJEK_STORE_NAME, resto);
  },

  async deleteRestoById(id) {
    return (await dbPromise).delete(OBJEK_STORE_NAME, id);
  },

  async searchResto(query) {
    return (await this.getAllRestoDB()).filter((resto) => {
      const loweredCaseMovieTitle = (resto.name || '-').toLowerCase();
      const jammedMovieTitle = loweredCaseMovieTitle.replace(/\s/g, '');
      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
      return jammedMovieTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

export default favoriteRestoPixels;
