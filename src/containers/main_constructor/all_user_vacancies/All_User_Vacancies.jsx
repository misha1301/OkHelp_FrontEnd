import React from 'react'
import { useEffect } from 'react';
import './all_user_vacancies.css';
import useAuth from '../../hooks/useAuth';

const All_User_Vacancies = () => {

  const {setUFocus} = useAuth();
  useEffect(() => {
    setUFocus("Мої вакансії");
  },[]);

  return (
    <div>
     All_User_Vacancies
    </div>
  )
}

export default All_User_Vacancies