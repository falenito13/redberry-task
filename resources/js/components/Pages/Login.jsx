import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import User from "../Models/User";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Login() {
    const {lang} = useParams();
    const {t, i18n} = useTranslation();
    const {register, handleSubmit} = useForm();
    const [error,setError] = useState();
    let navigate = useNavigate();
    let location = useLocation();
    const authenticatedCallback = () => {
        let {from} = location.state || {from: {pathname: `/${lang}/dashboard`}}
        navigate(from)
    }

    const onSubmit = (data) => {
        axios.post('/api/login', data).then(response => {
           if(response.data.email){
               setError(response.data.email[0])
           }
           if(response.data.password){
               setError(response.data.password[0])
           }
           if(response.data.auth){
               setError(response.data.auth[0])
           }
            if (response.data.token) {
                User.authenticated(response.data, authenticatedCallback)
            }
        })
    }
    return (
        <div className={'flex flex-col items-center font-inter'}>
            <p className={'text-black-dark font-bold text-large text-center'}>{t('login')}</p>
            <p className={'text-gray-dark text-lg text-center'}>{t('fill_required_fields')}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'mt-10'}>
                    <label className="block text-black-dark text-sm font-bold mb-2" htmlFor="email">
                        {t('email')}
                    </label>
                    <input
                        className="border rounded py-3 w-full sm:pr-22 px-2 placeholder-gray-light placeholder:py-4.5 rounded-lg"
                        type={'email'}
                        placeholder={t('email')} {...register('email')} />
                </div>
                <div className={'mt-10'}>
                    <label className="block text-black-dark text-sm font-bold mb-2" htmlFor="password">
                        {t('password')}
                    </label>
                    <input
                        className="border rounded py-3 w-full sm:pr-22 px-2 placeholder-gray-light placeholder:py-4.5 rounded-lg"
                        type={'password'}
                        placeholder={t('password')} {...register('password')} />
                </div>
                {error && (
                    <p className={'text-custom-red text-md text-center mt-2'}>{error}</p>
                )}
                <div className={'mt-6'}>
                    <button type={'submit'}
                            className={'border px-32 sm:px-40 py-4.5 rounded-4xl px-2 text-uppercase text-sm text-white bg-pink-dark'}>
                        {t('login')}
                    </button>
                </div>
            </form>
        </div>
    )
}
