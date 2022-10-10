import postReviewer from '../../utils/post-reviewer';
import UrlParser from '../../routes/url-parser';
import RestoResouce from '../../data/resto-api';

const addreviewFromReviewer = {
  async render() {
    return `
    <section class="resto-content">
        <div class="daftar-menu">
            <h2 class="label-menu">Add Review Here</h2>
            <div id="form-review"></div>
        </div>
    </section>
`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const menuDetailIdAPI = await RestoResouce.detailMenu(url.id);

    postReviewer.init({
      formSubmit: document.querySelector('#form-review'),
      value: {
        id: menuDetailIdAPI.id,
      },
    });
    await RestoResouce.customerReviewsResto(url.id);
  },
};

export default addreviewFromReviewer;
