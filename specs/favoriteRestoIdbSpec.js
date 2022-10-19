/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import favoriteRestoPixels from '../src/scripts/data/favorite-restoPixel';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favoriteRestoPixels.getAllRestoDB()).forEach(async (resto) => {
      await favoriteRestoPixels.deleteRestoById(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(favoriteRestoPixels);
});
