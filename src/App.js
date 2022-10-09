import React from 'react';

import { Feature, Filters, Footer, Header, Login_Page, Password_Recovery, Register_Page, Main_Constructor, User_Profile, Layout, Home, RequireAuth } from './containers';
import './App.css';
import { useLocation, Navigate, BrowserRouter, Routes, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <div className='workspace__home'>
        <Header />
        <div className='workspace__routes'>
          <Routes>
            <Route path='/' element={<Layout />}>
              {/* public routes */}
              <Route path='login' element={<Login_Page />} />
              <Route path='registration' element={<Register_Page />} />
              <Route path='password-recovery' element={<Password_Recovery />} />
              {/* protexted routes */}
              <Route element={<RequireAuth />} >
                <Route path='/user-profile' element={<Home />} />
              </Route>
              {/* catch all */}
              <Route path='*' element={<Navigate to="/login" replace />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
