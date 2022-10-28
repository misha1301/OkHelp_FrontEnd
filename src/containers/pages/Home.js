import React from 'react';
import { Outlet } from 'react-router-dom';
import { User_Profile } from '../';
//import './features.css';

const Home = () => {
    return (
        <>
            <div className='workspace__left-container'>
                <User_Profile />
            </div>
            <div className='workspace__center-container'>
                <Outlet />
            </div>
        </>
    )
}

export default Home;