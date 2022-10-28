import React from 'react'
import './header.css';
import useAuth from '../hooks/useAuth';

const Header = () => {

    const {uFocus} = useAuth();
    const headerTitle = uFocus;

    return (
        <div className='header__container'>
            <div className='header__logo-links'>
                <p><a href='#okhelp'>OkHelp</a></p>
            </div>
            <article>{headerTitle}</article>
        </div>
    )
}
export default Header