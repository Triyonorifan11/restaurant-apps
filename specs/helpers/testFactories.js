import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import favoriteRestoPixels from '../../src/scripts/data/favorite-restoPixel';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('.buttonFavorite'),
    favoriteRestoes: favoriteRestoPixels,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
