import favoriteRestoPixels from '../../data/favorite-restoPixel';
import FavoriteRestoSearchPresenter from './liked-resto/favorite-resto-search-presenter';
import FavoriteRestoSearchView from './liked-resto/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-resto/favorite-resto-show-presenter';

const view = new FavoriteRestoSearchView();

const LikeFavoriteResto = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteResto: favoriteRestoPixels });
    new FavoriteRestoSearchPresenter({ view, favoriteResto: favoriteRestoPixels });
  },
};

export default LikeFavoriteResto;
