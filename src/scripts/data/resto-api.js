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
}

export default RestoResouce;
