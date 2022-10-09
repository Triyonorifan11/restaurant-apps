import mainMenu from '../views/pages/mainMenu';
import favoriteMenu from '../views/pages/favoriteMenu';
import detailMenu from '../views/pages/detailMenu';

const routes = {
  '/': mainMenu,
  '/favorite': favoriteMenu,
  '/mainMenu': mainMenu,
  '/detail/:id': detailMenu,
};

export default routes;
