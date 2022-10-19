import { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate } from '../views/templates/template-menu';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestoes, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;
    this._favoriteResto = favoriteRestoes;

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
    const resto = await this._favoriteResto.getRestoDB_Id(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();
    const Buttonlike = document.querySelector('#likeButton');
    Buttonlike.addEventListener('click', async () => {
      await this._favoriteResto.putRestoDB(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const Buttonlike = document.querySelector('#likeButton');
    Buttonlike.addEventListener('click', async () => {
      await this._favoriteResto.deleteRestoById(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
