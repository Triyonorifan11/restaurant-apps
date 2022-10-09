import CONFIG from './config';

const API_ENDPOINT = {
  LIST_MENU: `${CONFIG.BASE_URL}list`,
  DETAIL_MENU: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH_MENU: (keyword) => `${CONFIG.BASE_URL}search?q=${keyword}`,
};

export default API_ENDPOINT;
