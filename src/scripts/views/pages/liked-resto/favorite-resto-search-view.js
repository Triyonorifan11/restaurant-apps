import { createMenuTemplate } from '../../templates/template-menu';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
    <section class="resto-content" id="resto-search-container">
        <div class="daftar-menu">
            <h2 class="label-menu">Your Favorite Resto Here</h2>
            <input id="query" class="form-control" type="text">
            <div class="post-menu" id="resto-list"></div>
        </div>
    </section>
    `;
  }

  getFavoriteRestoTemplate() {
    return `
    <section class="resto-content">
        <div class="daftar-menu">
            <h2 class="label-menu">Your Favorite Resto Here</h2>
            <div class="post-menu" id="resto-list"></div>
        </div>
    </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteResto(restoes = []) {
    let html;
    if (restoes.length) {
      html = restoes.reduce((carry, resto) => carry.concat(createMenuTemplate(resto)), '');
    } else {
      html = this._getEmptyMovieTemplate();
    }
    document.getElementById('resto-list').innerHTML = html;
    document.getElementById('resto-list').dispatchEvent(new Event('resto:updated'));
  }

  showRestoes(restoes) {
    let html;
    if (restoes.length > 0) {
      html = restoes.reduce((carry, resto) => carry.concat(createMenuTemplate(resto)), '');
    } else {
      html = this._getEmptyMovieTemplate();
    }
    document.querySelector('#resto-list').innerHTML = html;
    document.getElementById('resto-search-container')
      .dispatchEvent(new Event('resto:searched:updated'));
  }

  _getEmptyMovieTemplate() {
    return '<div class="restoes-not-found">Tidak ada film untuk ditampilkan</div>';
  }
}
export default FavoriteRestoSearchView;
