import React from 'react';
import { Outlet } from 'react-router-dom';
//import './features.css';

const Layout = () => {
  return (
    <main className='workspace__center-container'>
        <Outlet />
    </main>
  )
}

export default Layout;