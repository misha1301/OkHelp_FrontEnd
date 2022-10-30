import React from 'react'
import { useEffect } from 'react';
import './submited_vacancies.css';
import useAuth from '../../hooks/useAuth';

const Submited_Vacancies = () => {

  const {setUFocus} = useAuth();
  useEffect(() => {
    setUFocus("Затверджені вакансії");
  },[]);

  return (
    <section className='main__constructor-container'>
     Submited_Vacancies
    </section>
  )
}

export default Submited_Vacancies