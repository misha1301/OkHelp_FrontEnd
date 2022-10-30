import React from 'react'
import { useEffect } from 'react';
import './employee_request.css';
import useAuth from '../../hooks/useAuth';

const Employee_Request = () => {

  const {setUFocus} = useAuth();
  useEffect(() => {
    setUFocus("Подані заявки");
  },[]);

  return (
    <section className='main__constructor-container'>
     Employee_Request
    </section>
  )
}

export default Employee_Request