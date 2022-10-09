import DrawerApp from '../utils/drawerApp';

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
}

export default App;
