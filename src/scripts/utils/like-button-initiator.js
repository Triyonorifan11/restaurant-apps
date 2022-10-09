import favoriteRestoPixels from '../data/favorite-restoPixel';
import { likeButton, likeedButton } from '../views/templates/template-menu';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await favoriteRestoPixels.getRestoDB_Id(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = likeButton();
    const Buttonlike = document.querySelector('#likeButton');
    Buttonlike.addEventListener('click', async () => {
      await favoriteRestoPixels.putRestoDB(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = likeedButton();

    const Buttonlike = document.querySelector('#likeButton');
    Buttonlike.addEventListener('click', async () => {
      await favoriteRestoPixels.deleteRestoById(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
