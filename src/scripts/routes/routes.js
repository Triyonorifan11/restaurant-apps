import mainMenu from '../views/pages/mainMenu';
import favoriteMenu from '../views/pages/favoriteMenu';
import detailMenu from '../views/pages/detailMenu';
import addReviewer from '../views/pages/addReviewer';

const routes = {
  '/': mainMenu,
  '/favorite': favoriteMenu,
  '/mainMenu': mainMenu,
  '/detail/:id': detailMenu,
  '/addReview': addReviewer,
};

export default routes;
