import React from 'react'
import { useEffect } from 'react';
import './aplications_for_submit.css';
import useAuth from '../../hooks/useAuth';

const Aplications_For_Submit = () => {

  const {setUFocus} = useAuth();
  useEffect(() => {
    setUFocus("Запити на виконання");
  },[]);

  return (
    <div>
     Aplications_For_Submit
    </div>
  )
}

export default Aplications_For_Submit