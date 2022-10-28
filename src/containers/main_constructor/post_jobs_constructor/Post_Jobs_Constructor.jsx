import React from 'react'
import { useEffect } from 'react';
import './post_jobs_constructor.css';
import useAuth from '../../hooks/useAuth';

const Post_Jobs_Constructor = () => {

  const {setUFocus} = useAuth();
  useEffect(() => {
    setUFocus("Пропоную роботу");
  },[]);

  return (
    <div>
     Post_Jobs_Constructor
    </div>
  )
}

export default Post_Jobs_Constructor