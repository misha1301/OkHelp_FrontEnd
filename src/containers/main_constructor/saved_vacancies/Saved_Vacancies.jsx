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
    <div>
     Saved_Vacancies
    </div>
  )
}

export default Saved_Vacancies