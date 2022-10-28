import React from 'react';

import {
  Footer,
  Header,
  Login_Page,
  EmailVerification,
  Password_Recovery,
  Register_Page,
  Layout,
  Home,
  RequireAuth,
  Hello,
  EmailAuth,
  PersistLogin,
  Settings,
  UserModeAuth,

  Submited_Vacancies,
  Submited_Requests,
  Saved_Vacancies,
  Post_Jobs_Constructor,
  Looking_For_Jobs,
  Employee_Request,
  Aplications_For_Submit,
  All_User_Vacancies
} from './containers';

import './App.css';
import { useLocation, Navigate, BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {

  }, [])

  return (
    <div className='App'>
      <div className='workspace__home'>
        <Header />
        <div className='workspace__routes'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Hello />} />
              {/* public routes */}
              <Route path='login' element={<Login_Page />} />
              <Route path='registration' element={<Register_Page />} />

              <Route element={<EmailAuth />} >
                <Route path='email-verification' element={<EmailVerification />} />
              </Route>
              <Route path='password-recovery' element={<Password_Recovery />} />
              {/* protexted routes */}

              {/* <Route element={<PersistLogin />} > */}
              <Route element={<RequireAuth />} >
                <Route path='user-profile' element={<Home />} >

                  <Route path='looking-for' element={< UserModeAuth />}>
                    <Route index element={<Looking_For_Jobs />} />
                    <Route path='my-requests' element={<Employee_Request />} />
                    <Route path='saved-offers' element={<Saved_Vacancies />} />
                    <Route path='applied-requests' element={<Submited_Requests />} />
                    <Route path='settings' element={<Settings />} />
                  </Route>

                  <Route path='give' element={< UserModeAuth />}>
                    <Route index element={<Post_Jobs_Constructor />} />
                    <Route path='my-purpose' element={<All_User_Vacancies />} />
                    <Route path='submit-aplications' element={<Aplications_For_Submit />} />
                    <Route path='applied-purpose' element={<Submited_Vacancies />} />
                    <Route path='settings' element={<Settings />} />
                  </Route>

                  <Route path='*' element={<Navigate to="/user-profile" replace />}/>
                </Route>
              </Route>
              {/* </Route> */}

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
