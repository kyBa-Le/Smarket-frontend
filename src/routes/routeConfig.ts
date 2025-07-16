import { lazy, type JSX, type LazyExoticComponent } from 'react';
import { type RouteObject } from 'react-router-dom';

type AppRoute = Omit<RouteObject, 'element' | 'children'> & {
    element: LazyExoticComponent<() => JSX.Element>;
    children?: AppRoute[];
    isProtected?: boolean;
    isAdmin?: boolean;
}


const LoginPage = lazy(() => import('@/pages/login'));
const HomePage = lazy(() => import('@/pages/home'))

export const routes: AppRoute[] = [
  {
    path: '/login',
    element: LoginPage,
  },
  {
    path: '/',
    element: HomePage
  }
];
