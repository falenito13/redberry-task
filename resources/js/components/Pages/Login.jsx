import React from 'react'
import {useForm} from "react-hook-form";

export default function Login() {
    const {register,handleSubmit} = useForm();
    const onSubmit = (data) => {
        axios.post('/api/login',data).then(response => {
            console.log(response)
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
                    <input className="border rounded py-3 w-full sm:pr-22 px-2 placeholder-gray-light placeholder:py-4.5 rounded-lg" type={'email'}
                    placeholder={'Email'} {...register('email')} />
                </div>
                <div className={'mt-10'}>
                    <label className="block text-black-dark text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="border rounded py-3 w-full sm:pr-22 px-2 placeholder-gray-light placeholder:py-4.5 rounded-lg" type={'password'}
                    placeholder={'Password'} {...register('password')} />
                </div>
                <div className={'mt-6'}>
                    <button type={'submit'} className={'border px-42 sm:px-21 py-4.5 rounded-4xl px-2 text-uppercase text-sm text-white bg-pink-dark'}>
                        Log in
                    </button>
                </div>
            </form>
        </div>
)
}
