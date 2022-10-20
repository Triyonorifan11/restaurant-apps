/* eslint-disable no-undef */
import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
import favoriteRestoPixels from '../src/scripts/data/favorite-restoPixel';
import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-resto/favorite-resto-search-view';

describe('Searching resto', () => {
  let presenter;
  let favoriteResto;
  let view;

  const searchResto = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteResto = spyOnAllFunctions(favoriteRestoPixels);
    presenter = new FavoriteRestoSearchPresenter({
      favoriteResto,
      view,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchResto('resto a');
      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('should ask the model to search for liked restoes', () => {
      searchResto('resto a');

      expect(favoriteRestoPixels.searchResto)
        .toHaveBeenCalledWith('resto a');
    });

    it('should show the resto found by Favorite Resto', (done) => {
      document.getElementById('resto-list')
        .addEventListener('resto:updated', () => {
          expect(document.querySelectorAll('.post-item').length).toEqual(3);
          done();
        });
      favoriteResto.searchResto.withArgs('resto a').and.returnValues([
        { id: 111, name: 'resto abc' },
        { id: 222, name: 'ada juga resto abcde' },
        { id: 333, name: 'ini juga boleh resto a' },
      ]);

      searchResto('resto a');
    });

    it('should show the name of the resto found by Favorite Restoes', (done) => {
      document.getElementById('resto-list').addEventListener('resto:updated', () => {
        const restoTitles = document.querySelectorAll('.post-item-title');
        expect(restoTitles.item(0).textContent).toEqual('resto abc');
        expect(restoTitles.item(1).textContent).toEqual('ada juga resto abcde');
        expect(restoTitles.item(2).textContent).toEqual('ini juga boleh resto a');

        done();
      });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([
        { id: 111, name: 'resto abc' },
        { id: 222, name: 'ada juga resto abcde' },
        { id: 333, name: 'ini juga boleh resto a' },
      ]);

      searchResto('resto a');
    });

    it('should show - when the resto returned does not contain a title', (done) => {
      document.getElementById('resto-list').addEventListener('resto:updated', () => {
        const restoTitles = document.querySelectorAll('.post-item-title');
        expect(restoTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([
        { id: 444 },
      ]);

      searchResto('resto a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchResto(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite movies', () => {
      searchResto('    ');
      expect(favoriteResto.getAllRestoDB)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite movies could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('resto-list')
        .addEventListener('resto:updated', () => {
          expect(document.querySelectorAll('.restoes-not-found').length).toEqual(1);
          done();
        });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([]);

      searchResto('resto a');
    });

    it('should not show any resto', (done) => {
      document.getElementById('resto-list').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.resto').length).toEqual(0);
        done();
      });
      favoriteResto.searchResto.withArgs('resto a').and.returnValues([]);
      searchResto('resto a');
    });
  });
});
