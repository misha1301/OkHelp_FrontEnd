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
    <div>
     Employee_Request
    </div>
  )
}

export default Employee_Request