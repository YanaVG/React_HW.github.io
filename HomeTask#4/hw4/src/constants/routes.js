import Loadable from 'react-loadable';
import Loader from '../compoments/shared-ui/loader';

export const HOME = '/';
export const MOVIES = '/movies';
export const WATCHLIST = '/watchlist';
export const SIGN_IN = '/signin';
export const ACCOUNT = '/account';

export default {
  HOME: {
    path: HOME,
    exact: true,
    component: Loadable({
      loader: () =>
        import('../compoments/pages/movies' /* webpackChunkName: "mavies-page" */),
      loading: Loader,
    }),
  },
  SIGN_IN: {
    path: SIGN_IN,
    exact: true,
    component: Loadable({
      loader: () =>
        import('../compoments/pages/auth-manager/sign-in-page' /* webpackChunkName: "sign-in-page" */),
      loading: Loader,
    }),
  },
  ACCOUNT: {
    path: ACCOUNT,
    exact: true,
    component: Loadable({
      loader: () =>
        import('../compoments/pages/auth-manager/account-page' /* webpackChunkName: "account-page" */),
      loading: Loader,
    }),
  },
  MOVIE_INFO: {
    path: `${MOVIES}/:movieId`,
    exact: true,
    component: Loadable({
      loader: () =>
        import('../compoments/pages/movie-info' /* webpackChunkName: "movie-info" */),
      loading: Loader,
    }),
  },
  WATCHLIST: {
    path: WATCHLIST,
    exact: true,
    component: Loadable({
      loader: () =>
        import('../compoments/pages/watchlist' /* webpackChunkName: "watchlist-page" */),
      loading: Loader,
    }),
  },
  NOT_FOUND: {
    path: null,
    exact: false,
    component: Loadable({
      loader: () =>
        import('../compoments/pages/not-found-page' /* webpackChunkName: "not-found-page" */),
      loading: Loader,
    }),
  },
};
