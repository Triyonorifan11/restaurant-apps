/* eslint-disable no-undef */
import favoriteRestoPixels from '../src/scripts/data/favorite-restoPixel';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="buttonFavorite"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteRestoPixels.putRestoDB({ id: 1 });
  });

  afterEach(async () => {
    await favoriteRestoPixels.deleteRestoById(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    expect(await favoriteRestoPixels.getAllRestoDB()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // hapus dulu resto dari daftar resto yang disukai
    await favoriteRestoPixels.deleteRestoById(1);
    // kemudian, simulasikan pengguna menekan widget batal menyukai resto
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    expect(await favoriteRestoPixels.getAllRestoDB()).toEqual([]);
  });
});
