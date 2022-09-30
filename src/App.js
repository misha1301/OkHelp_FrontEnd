import React from 'react';

import { Feature, Filters, Footer, Header, Login_Page, Registre_page, Main_Constructor, User_Profile} from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='workspace'>
         <div className='workspace__left-container'>
          <Header />
          <User_Profile />
        </div>
        <div className='workspace__center-container'>
          <Main_Constructor />
        </div>
        <div className='workspace__right-container'>
          <Filters />
        </div> 
      </div>
      <Footer />
    </div>
  )
}

export default App
