import User from '../Models/User'
import {useParams} from "react-router-dom";

export default function AdminRoute({children}) {
    const {lang} = useParams()
    if(User.isLoggedIn()){
        window.location.href = `/${lang}/dashboard`
    }
    return children;
};
