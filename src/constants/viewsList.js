//  utils
import { loadStorage } from 'tools/storage';

//  components
import Home from 'views/home/Home';
import Register from 'views/register/Register';
import TechList from 'views/techList/TechList';

const routes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/register',
    Component: Register,
  },
  {
    path: '/techlist',
    Component: TechList,
  },
];

function getList() {
  const privateRoutes = ['/techlist'];
  const isLogged = loadStorage('token') || false;
  return isLogged ? routes : routes.filter(({ path }) => !privateRoutes.includes(path));
}

export default getList();
