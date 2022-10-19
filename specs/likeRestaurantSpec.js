/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import favoriteRestoPixels from '../src/scripts/data/favorite-restoPixel';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="buttonFavorite"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await favoriteRestoPixels.getRestoDB_Id(1);
    expect(resto).toEqual({ id: 1 });

    favoriteRestoPixels.deleteRestoById(1);
  });

  //   menguji skenario negatif, yaitu "Ternyata resto sudah disukai".
  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // Tambahkan resto dengan ID 1 ke daftar resto yang disukai
    await favoriteRestoPixels.putRestoDB({ id: 1 });
    // Simulasikan pengguna menekan tombol suka resto
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // tidak ada resto yang ganda
    expect(await favoriteRestoPixels.getAllRestoDB()).toEqual([{ id: 1 }]);
    favoriteRestoPixels.deleteRestoById(1);
  });

  //   Data resto tidak memiliki ID
  // Sistem tidak memproses penyimpanan
  // Sistem tidak gagal
  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await favoriteRestoPixels.getAllRestoDB()).toEqual([]);
  });
});
