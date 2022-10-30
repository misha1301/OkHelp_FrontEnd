import React from 'react'
import { useEffect } from 'react';
import './saved_vacancies.css';
import useAuth from '../../hooks/useAuth';

const Saved_Vacancies = () => {

  const {setUFocus} = useAuth();
  useEffect(() => {
    setUFocus("Збережені вакансії");
  },[]);

  return (
    <section className='main__constructor-container'>
     Saved_Vacancies
    </section>
  )
}

export default Saved_Vacancies