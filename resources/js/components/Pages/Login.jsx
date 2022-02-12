import React from 'react'
import {useForm} from "react-hook-form";
import User from "../Models/User";
import {useLocation, useNavigate, useParams} from "react-router-dom";

export default function Login() {
    const {lang} = useParams();
    const {register, handleSubmit} = useForm();
    let navigate = useNavigate();
    let location = useLocation();
    const authenticatedCallback = () => {
        let {from} = location.state || {from: {pathname: `/${lang}/dashboard`}}
        navigate(from)
    }

    const onSubmit = (data) => {
        axios.post('/api/login', data).then(response => {
            if (response.data.token) {
                User.authenticated(response.data, authenticatedCallback)
            }
        })
    }
    return (
        <div className={'flex flex-col items-center font-inter'}>
            <p className={'text-black-dark font-bold text-large text-center'}>Log In</p>
            <p className={'text-gray-dark text-lg text-center'}>Fill in required fields to sign in</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'mt-10'}>
                    <label className="block text-black-dark text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="border rounded py-3 w-full sm:pr-22 px-2 placeholder-gray-light placeholder:py-4.5 rounded-lg"
                        type={'email'}
                        placeholder={'Email'} {...register('email')} />
                </div>
                <div className={'mt-10'}>
                    <label className="block text-black-dark text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="border rounded py-3 w-full sm:pr-22 px-2 placeholder-gray-light placeholder:py-4.5 rounded-lg"
                        type={'password'}
                        placeholder={'Password'} {...register('password')} />
                </div>
                <div className={'mt-6'}>
                    <button type={'submit'}
                            className={'border px-32 sm:px-40 py-4.5 rounded-4xl px-2 text-uppercase text-sm text-white bg-pink-dark'}>
                        Log in
                    </button>
                </div>
            </form>
        </div>
    )
}
