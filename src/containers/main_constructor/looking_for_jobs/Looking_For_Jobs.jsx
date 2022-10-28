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
    <div>
     Looking_For_Jobs
    </div>
  )
}

export default Looking_For_Jobs