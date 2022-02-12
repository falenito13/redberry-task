import Login from "../Pages/Login";
import Header from "../Layouts/Header";
import Dashboard from "../Pages/Dashboard";

export const routesMap = [
    {path: 'login', component: Login, exact: true, layout: Header},
    {path: 'dashboard', component: Dashboard, exact: true, layout: Header},
]
