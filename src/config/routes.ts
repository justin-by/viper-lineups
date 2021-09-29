import IRoute from '../interfaces/route';
import AboutPage from '../pages/about';
import HomePage from '../pages/home';
import BindPage from '../pages/bind'


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
        component: BindPage,
        exact: true
    },
    {
        path: '/icebox',
        name: 'Icebox Page',
        component: BindPage,
        exact: true
    },
]

export default routes;