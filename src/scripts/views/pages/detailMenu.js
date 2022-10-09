import UrlParser from '../../routes/url-parser';
import RestoResouce from '../../data/resto-api';
import {
  createmenuDetailTemplate, menuOfRestoDetail, curtomerReview, addReviewerButton,
} from '../templates/template-menu';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const detailMenu = {
  async render() {
    return `
        <section class="resto-content">
            <div class="daftar-menu">
                <h2 class="label-menu">Detail Resto Pixel's</h2>
                <div class="post-menu-detail" id="resto-list"></div>
                <div class="buttonFavorite"></div>
            </div>
                <h2 class="label-detail">Menu of Food</h2>
                <div class="card" id="food"></div>
                <h2 class="label-detail">Menu of Drink</h2>
                <div class="card" id="drink"></div>
                <h2 class="label-detail">Review Customer</h2>
                <div class="card" id="customerReview"></div>
                <div id="reviewerButton"></div>
        </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const menuDetailIdAPI = await RestoResouce.detailMenu(url.id);
    const foodOfRestoDetails = await RestoResouce.foodOfResto(url.id);
    const drinksResto = await RestoResouce.drinkOfResto(url.id);
    const customerReviewRestoID = await RestoResouce.customerReviewsResto(url.id);

    const foodsRestoDetail = document.querySelector('#food');
    const drinks = document.querySelector('#drink');
    const reviewer = document.querySelector('#customerReview');
    const detailMenuId = document.querySelector('#resto-list');
    // const buttonlike = document.querySelector('.buttonFavorite');
    const buttonReview = document.querySelector('#reviewerButton');

    detailMenuId.innerHTML = createmenuDetailTemplate(menuDetailIdAPI);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.buttonFavorite'),
      resto: {
        id: menuDetailIdAPI.id,
        name: menuDetailIdAPI.name,
        city: menuDetailIdAPI.city,
        address: menuDetailIdAPI.address,
        rating: menuDetailIdAPI.rating,
      },
    });

    foodOfRestoDetails.forEach((foods) => {
      foodsRestoDetail.innerHTML += menuOfRestoDetail(foods);
    });

    drinksResto.forEach((drink) => {
      drinks.innerHTML += menuOfRestoDetail(drink);
    });

    customerReviewRestoID.forEach((review) => {
      reviewer.innerHTML += curtomerReview(review);
    });

    buttonReview.innerHTML = addReviewerButton();
  },
};

export default detailMenu;
