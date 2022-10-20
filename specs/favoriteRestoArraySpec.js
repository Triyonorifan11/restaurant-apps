/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestoArray = {
  getRestoDB_Id(id) {
    if (!id) {
      return;
    }

    return favoriteResto.find((resto) => resto.id == id);
  },

  getAllRestoDB() {
    return favoriteResto;
  },

  putRestoDB(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteResto
    if (this.getRestoDB_Id(resto.id)) {
      return;
    }

    favoriteResto.push(resto);
  },

  deleteRestoById(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteResto = favoriteResto.filter((resto) => resto.id != id);
  },

  searchResto(query) {
    return (this.getAllRestoDB()).filter((resto) => {
      const loweredCaseMovieTitle = (resto.name || '-').toLowerCase();
      const jammedMovieTitle = loweredCaseMovieTitle.replace(/\s/g, '');
      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
      return jammedMovieTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
