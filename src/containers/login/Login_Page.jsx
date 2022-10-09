import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import './login.css';
import { Link, useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"

import axios from '../../api/axios';
const LOGIN_URL = '/auth';

const Login_Page = () => {

  const { setAuth } = useAuth();
  const location = useLocation();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [number, setNumber] = useState('');

  const [uemail, setUemail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [uemail, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ userEmail: uemail, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(response?.data);
      //console.log(response.accessToken);
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({user, uemail, pwd, roles, number, accessToken });
      setUemail('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if(!err?.response){
        setErrMsg('No Server Response');
      }else if(err.response?.status === 400){
        setErrMsg('Missing Useremail or Password');
      }else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
    console.log(uemail, pwd);
  }

  return (
    <>
      {success ? (
        <Navigate to="/user-profile" atate={{ from: location }} replace />
      ) : (
        <div className='login__block-container __reg-log_block-container'>
          <h2 className='login__title-text'>Вхід а акаунт</h2>
          <p aria-live='assertive' >{errMsg}</p>
          <form className='login__form-fields' onSubmit={handleSubmit}>
            <input
              className='input__text_field-log __size_box-btn-fld'
              type='email'
              placeholder='Ваш e-mail'
              ref={userRef}
              autoComplete='on'
              onChange={(e) => setUemail(e.target.value)}
              value={uemail}
              required
            />
            <input
              className='input__text_field-log  __size_box-btn-fld'
              type='password'
              placeholder='Ваш пароль'
              ref={userRef}
              autoComplete='on'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <Link to='/password-recovery'>
              <p className='__text_field-sub_text'><a href='#forgot_password'> Забули пароль?</a></p>
            </Link>

            <input
              className=' __size_box-btn-fld __btn_reg-log'
              type='submit'
              value='Увійти'

            />
          </form>
          <div className='if__account-yes-no text__mont-med-black'><p>Немає акаунту?</p></div>
          <Link to='/registration'>
            <button className=' __size_box-btn-fld __btn_reg-log' name='go__to-login' id='_login__button'>
              <p className='text__mont-med-black'>Зареєструватись</p>
            </button>
          </Link>
        </div>
      )}
    </>
  )
}

export default Login_Page
