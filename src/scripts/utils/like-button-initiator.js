import favoriteRestoPixels from '../data/favorite-restoPixel';
import { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate } from '../views/templates/template-menu';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const movie = await favoriteRestoPixels.getRestoDB_Id(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();
    const Buttonlike = document.querySelector('#likeButton');
    Buttonlike.addEventListener('click', async () => {
      await favoriteRestoPixels.putRestoDB(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const Buttonlike = document.querySelector('#likeButton');
    Buttonlike.addEventListener('click', async () => {
      await favoriteRestoPixels.deleteRestoById(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
