import UrlParser from '../../routes/url-parser';
import RestoResouce from '../../data/resto-api';

const detailMenu = {
  async render() {
    return `
          <h2>Detail Menu Restaurant</h2>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const menuDetailId = await RestoResouce.detailMenu(url.id);
    console.log(menuDetailId);
  },
};

export default detailMenu;
