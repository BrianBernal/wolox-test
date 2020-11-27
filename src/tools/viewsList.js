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

export default function viewsList(isLogged) {
  const forbiddenLoggedRoutes = ['/register'];
  const forbiddenLogoutRoutes = ['/techlist'];
  return isLogged
    ? routes.filter(({ path }) => !forbiddenLoggedRoutes.includes(path))
    : routes.filter(({ path }) => !forbiddenLogoutRoutes.includes(path));
}
