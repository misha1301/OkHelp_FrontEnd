import React from 'react'
import { useEffect } from 'react';
import './looking_for_jobs.css';
import useAuth from '../../hooks/useAuth';

const Looking_For_Jobs = () => {

  const {setUFocus} = useAuth();
  useEffect(() => {
    setUFocus("Шукаю роботу");
  },[]);

  return (
    <section className='main__constructor-container'>
     Looking_For_Jobs
    </section>
  )
}

export default Looking_For_Jobs