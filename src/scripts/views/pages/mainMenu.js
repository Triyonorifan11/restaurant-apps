import RestoResouce from '../../data/resto-api';
import { createMenuTemplate } from '../templates/template-menu';

const mainMenu = {
  async render() {
    return `
    
        <section class="resto-content">
            <div class="daftar-menu">
                <h2 class="label-menu">Resto Pixel's List</h2>
                <div class="post-menu" id="resto-list"></div>
            </div>
        </section>
    
    `;
  },

  async afterRender() {
    const menuResto = await RestoResouce.mainMenu();
    const menuList = document.querySelector('#resto-list');
    menuResto.forEach((menu) => {
      menuList.innerHTML += createMenuTemplate(menu);
    });
  },
};

export default mainMenu;
