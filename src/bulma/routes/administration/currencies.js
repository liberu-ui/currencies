import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./currencies', false, /.*\.js$/));
const RouterView = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'currencies',
    component: RouterView,
    meta: {
        breadcrumb: 'currencies',
        route: 'administration.currencies.index',
    },
    children: routes,
};
