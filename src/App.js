import React from 'react';

import { Feature, Filters, Footer, Header, Login_Page, Registre_page, Main_Constructor, User_Profile} from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='workspace'>
        <div className='header'>
          <Header />
        </div>
        <div>
          <User_Profile />
          <Main_Constructor />
          <Filters />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
