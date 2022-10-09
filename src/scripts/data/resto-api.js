import API_ENDPOINT from '../globals/api-endpoint';

class RestoResouce {
  static async mainMenu() {
    const responseAPI = await fetch(API_ENDPOINT.LIST_MENU);
    const responseJSON = await responseAPI.json();
    return responseJSON.restaurants;
  }

  static async detailMenu(id) {
    const responseAPI = await fetch(API_ENDPOINT.DETAIL_MENU(id));
    const responseJSON = await responseAPI.json();
    return responseJSON.restaurant;
  }

  static async foodOfResto(id) {
    const responseAPI = await fetch(API_ENDPOINT.DETAIL_MENU(id));
    const responseJSON = await responseAPI.json();
    return responseJSON.restaurant.menus.foods;
  }

  static async drinkOfResto(id) {
    const responseAPI = await fetch(API_ENDPOINT.DETAIL_MENU(id));
    const responseJSON = await responseAPI.json();
    return responseJSON.restaurant.menus.drinks;
  }

  static async customerReviewsResto(id) {
    const responseAPI = await fetch(API_ENDPOINT.DETAIL_MENU(id));
    const responseJSON = await responseAPI.json();
    return responseJSON.restaurant.customerReviews;
  }
}

export default RestoResouce;
