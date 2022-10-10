/* eslint-disable class-methods-use-this */
import 'regenerator-runtime';
import DrawerApp from '../utils/drawerApp';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialApp();
  }

  _initialApp() {
    DrawerApp.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _pageloaderActive() {
    const loader = document.querySelector('#loading');
    loader.classList.add('display');
    setTimeout(() => {
      loader.classList.remove('display');
    }, 5000);
  }

  _pageloaderHide() {
    const loader = document.querySelector('#loading');
    loader.classList.remove('display');
  }

  async renderPageApp() {
    this._pageloaderActive();
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._content.innerHTML = `<h1>${error}</h1>`;
    } finally {
      this._pageloaderHide();
    }
  }
}

export default App;
