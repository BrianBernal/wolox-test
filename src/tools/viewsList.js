//  libraries
import { lazy } from 'react';

//  components
const Home = lazy(() => import('views/home/Home'));
const Register = lazy(() => import('views/register/Register'));
const TechList = lazy(() => import('views/techList/TechList'));

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
