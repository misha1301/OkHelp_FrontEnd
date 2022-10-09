import React from 'react';
import { Filters, Main_Constructor, User_Profile} from '../';
import Settings from './Settings';
//import './features.css';

const Home = () => {
    return (
        <main className='workspace__routes'>
            <div className='workspace__left-container'>
                <User_Profile />
            </div>
            <div className='workspace__center-container'>
                <Settings />
            </div>
            <div className='workspace__right-container'>
                <Filters />
            </div>
        </main>
    )
}

export default Home;