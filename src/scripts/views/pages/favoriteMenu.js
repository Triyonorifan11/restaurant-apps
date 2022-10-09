import favoriteRestoPixels from '../../data/favorite-restoPixel';
import { createMenuTemplate } from '../templates/template-menu';

const LikeFavoriteResto = {
  async render() {
    return `
    
    <section class="resto-content">
        <div class="daftar-menu">
            <h2 class="label-menu">Your Favorite Resto Here</h2>
            <div class="post-menu" id="resto-list"></div>
        </div>
    </section>

`;
  },

  async afterRender() {
    const getAllRestoIDB = await favoriteRestoPixels.getAllRestoDB();
    const listRestoFavoContainer = document.querySelector('#resto-list');

    getAllRestoIDB.forEach((resto) => {
      listRestoFavoContainer.innerHTML += createMenuTemplate(resto);
    });
  },
};

export default LikeFavoriteResto;
