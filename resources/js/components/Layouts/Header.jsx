import React, {useEffect} from 'react'
import {NavLink, useParams, useNavigate, useLocation , useHistory} from "react-router-dom";
import Select from "react-select";
import {languageOptions} from "../Constants/Options";
import {selectLanguageStyles} from "../Styles/Select";
import WHOLogo from '../Assets/who.png'
import AxiosInstance from "../Hooks/AxiosInstance";
import User from "../Models/User";
import {useTranslation} from 'react-i18next';

export default function Header(props) {
    const {lang} = useParams();
    const params = useParams();
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    let {pathname} = useLocation();

    useEffect(() => {
        i18n.changeLanguage(lang)
    },[])

    const logout = () => {
        AxiosInstance().post('/api/logout');
        User.logout(lang);
    }

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.value)
        let url = pathname.replace(lang,e.value)
        navigate({
            pathname : url
        })
    }

    return (
        <div className={'flex justify-center w-full flex-col'}>
            <div className={'flex w-full px-4 w-screen justify-between h-20 font-inter mb-8 items-center bg-gray-100'}>
                <NavLink to={'/login'}>
                    <img className="w-48" src={WHOLogo} alt="WHO Logo"/>
                </NavLink>
                <div className={'flex'}>
                    <Select options={languageOptions}
                            styles={selectLanguageStyles}
                            className={'rounded-lg'}
                            placeholder={'Choose language'}
                            value={
                                languageOptions.filter(option =>
                                    option.value === lang)
                            }
                            id={'language-change'} onChange={(e) => changeLanguage(e)}/>
                    {User.isLoggedIn() &&
                        <button className={'ml-2 px-4 py-2 bg-custom-red rounded-xl text-white'} onClick={logout}>{t('logout')}
                        </button>
                    }
                </div>
            </div>
            {props.children}
        </div>
    )
}
