import API_ENDPOINT from '../globals/api-endpoint';

const getReviewer = async (id) => {
  const responseAPI = await fetch(API_ENDPOINT.DETAIL_MENU(id), { method: 'GET' });
  const responseJSON = await responseAPI.json();
  return responseJSON.restaurant.customerReviews;
};

export default getReviewer;
