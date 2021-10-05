import IRoute from '../interfaces/route';
import AboutPage from '../pages/about';
import HomePage from '../pages/home';
import MapPage from '../pages/map'


const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/about',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },
    {
        path: '/bind',
        name: 'Bind Page',
        component: MapPage,
        exact: true
    },
    {
        path: '/icebox',
        name: 'Icebox Page',
        component: MapPage,
        exact: true
    },
    {
        path: '/haven',
        name: 'Haven Page',
        component: MapPage,
        exact: true
    },
    {
        path: '/split',
        name: 'Split Page',
        component: MapPage,
        exact: true
    },
    {
        path: '/ascent',
        name: 'Ascent Page',
        component: MapPage,
        exact: true
    },
    {
        path: '/breeze',
        name: 'Breeze Page',
        component: MapPage,
        exact: true
    },
    {
        path: '/fracture',
        name: 'Fracture Page',
        component: MapPage,
        exact: true
    },
]

export default routes;