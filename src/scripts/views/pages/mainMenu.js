import RestoResouce from '../../data/resto-api';

const mainMenu = {
  async render() {
    return `
    
        <section class="resto-content">
            <div class="daftar-menu">
                <h2 class="label-menu">Main Menu List</h2>
                <div class="post-menu" id="menu-list"></div>
            </div>
        </section>
    
    `;
  },

  async afterRender() {
    const menuResto = await RestoResouce.mainMenu();
    console.log(menuResto);
  },
};

export default mainMenu;
