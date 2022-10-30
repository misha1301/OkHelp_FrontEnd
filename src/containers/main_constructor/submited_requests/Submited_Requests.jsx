import React from 'react'
import { useEffect } from 'react';
import './submited_requests.css';
import useAuth from '../../hooks/useAuth';

const Submited_Requests= () => {

  const {setUFocus} = useAuth();
  useEffect(() => {
    setUFocus("Затверджені заявки");
  },[]);

  return (
    <section className='main__constructor-container'>
     Submited_Requests
    </section>
  )
}

export default Submited_Requests