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
    <div>
     Submited_Requests
    </div>
  )
}

export default Submited_Requests