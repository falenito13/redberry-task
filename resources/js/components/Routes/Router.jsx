import Login from "../Pages/Login";
import Header from "../Layouts/Header";

export const routesMap = [
    { path: '/login', component : Login, exact: true  , layout : Header},
]
