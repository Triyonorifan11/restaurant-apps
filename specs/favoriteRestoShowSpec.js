/* eslint-disable no-undef */
import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-resto/favorite-resto-search-view';
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-show-presenter';
import favoriteRestoPixels from '../src/scripts/data/favorite-restoPixel';

describe('Showing all favorite resto', () => {
  let view;
  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no resto have been liked', () => {
    it('should ask for the favorite movies', () => {
      const favoriteResto = spyOnAllFunctions(favoriteRestoPixels);
      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
      expect(favoriteResto.getAllRestoDB).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no movies have been liked', (done) => {
      document.getElementById('resto-list').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.restoes-not-found').length).toEqual(1);
        done();
      });
      const favoriteResto = spyOnAllFunctions(favoriteRestoPixels);

      favoriteResto.getAllRestoDB.and.returnValues([]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });

  describe('When favorite resto exist', () => {
    it('should show the resto', (done) => {
      document.getElementById('resto-list').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.post-item').length).toEqual(2);
        done();
      });
      const favoriteResto = spyOnAllFunctions(favoriteRestoPixels, false);
      favoriteResto.getAllRestoDB.and.returnValues([
        {
          id: 11,
          name: 'A',
          rating: 3,
          description: 'Sebuah resto A',
        },
        {
          id: 22,
          name: 'B',
          rating: 4,
          description: 'Sebuah resto B',
        },
      ]);
      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });
});
