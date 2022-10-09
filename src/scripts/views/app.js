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

  async renderPageApp() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
