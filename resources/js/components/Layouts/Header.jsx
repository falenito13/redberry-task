import React from 'react'
import {NavLink} from "react-router-dom";

export default function Header(props){
    return (
        <div className={'w-screen'}>
        <div className={'w-screen h-20 font-inter'}>
            <NavLink to={'/login'}>
            <p className={'py-4.5 pl-27 text-custom-green'}>Project</p>
            </NavLink>
        </div>
    {props.children}
            </div>
    )
}
