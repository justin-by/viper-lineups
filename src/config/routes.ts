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
]

export default routes;