import UrlParser from '../../routes/url-parser';
import RestoResouce from '../../data/resto-api';
import { createmenuDetailTemplate } from '../templates/template-menu';

const detailMenu = {
  async render() {
    return `
        <section class="resto-content">
            <div class="daftar-menu">
                <h2 class="label-menu">Detail Resto Pixel's</h2>
                <div class="post-menu" id="resto-list"></div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const menuDetailIdAPI = await RestoResouce.detailMenu(url.id);
    const detailMenuId = document.querySelector('#resto-list');
    detailMenuId.innerHTML = createmenuDetailTemplate(menuDetailIdAPI);
  },
};

export default detailMenu;
