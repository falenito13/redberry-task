import Login from "../Pages/Login";
import Header from "../Layouts/Header";
import Dashboard from "../Pages/Dashboard";
import RedirectIfAuthenticated from '../Middlewares/RedirectIfAuthenticated'
import UserNotAuthenticated from "../Middlewares/UserNotAuthenticated";

export const routesMap = [
    {path: 'login', component: Login, exact: true, layout: Header, middleware : RedirectIfAuthenticated},
    {path: 'dashboard', component: Dashboard, exact: true, layout: Header, middleware : UserNotAuthenticated},
]
