const drawerApp = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawerApp(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawerApp(event, drawer);
    });
  },

  _toggleDrawerApp(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open-navbar');
  },

  _closeDrawerApp(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open-navbar');
  },
};

export default drawerApp;
