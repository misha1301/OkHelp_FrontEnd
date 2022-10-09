import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './login.css';
import axios from '../../api/axios';


const USER_REGEX = /^[a-zA-Z0-9-_]{3,15}([\s][a-zA-Z0-9-_]{3,15})?$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$#]).{3,23}$/;
const REGISTER_URL = '/register';

const Register_Page = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [uemail, setUemail] = useState('');
  const [validUemail, setValidUemail] = useState(false);
  const [uemailFocus, setUemailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [confirm, setConfirm] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd])

  useEffect(() => {
    //const result = EMAIL_REGEX.test(uemail);
    //console.log(result);
    console.log(uemail);
    //setValidName(result);
  }, [uemail])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, uemail])

  useEffect(() => {
    console.log(confirm);
  }, [confirm])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    } 
    try {
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({ userName:user, password:pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear input fields

    } catch (err) {
      if(!err?.response){
        setErrMsg('No Server Response');
      }else if(err.response?.status === 409){
        setErrMsg('Email Taken');
      }else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }

    <Navigate to="/login" replace />
  }

  return (

    <div className='registration__block-container __reg-log_block-container'>
      <h2 className='register__title-text'>Зареєструватися</h2>
      <p aria-live='assertive' >{errMsg}</p>
      <form className='register__form-fields' onSubmit={handleSubmit}>
        <input
          className='input__text_field-reg __size_box-btn-fld'
          type='text'
          placeholder='Ваше імя'

          ref={userRef}
          autoComplete="off"
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onChange={(e) => setUser(e.target.value)}
          required
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <input
          className='input__text_field-reg __size_box-btn-fld'
          type='email'
          placeholder='Ваш e-mail'
          ref={userRef}
          autoComplete="off"
          //aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onChange={(e) => setUemail(e.target.value)}
          required
          onFocus={() => setUemailFocus(true)}
          onBlur={() => setUemailFocus(false)}
        />
        <input
          className='input__text_field-reg __size_box-btn-fld'
          type='password'
          placeholder='Ваш пароль'

          ref={userRef}
          autoComplete="off"
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="uidnote"
          onChange={(e) => setPwd(e.target.value)}
          required
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <div className='confidanse__agreement-container __text_field-sub_text'>
          <input
            type='checkbox'
            name='privacy__chekbox'
            id='_privacy__chekbox'
            cheked={confirm}
            ref={userRef}
            aria-invalid={confirm ? "false" : "true"}
            aria-describedby="uidnote"
            onChange={() => setConfirm(!confirm)}
          />
          <label htmlFor='_privacy__chekbox'><p>Погоджуюсь на<a href='#privacy_policy'> Політику конфіденційності</a></p></label>
        </div>
        <input
          className=' __size_box-btn-fld __btn_reg-log'
          type='submit'
          value='Зареєструватись'
          disabled={!validName || !validPwd || !confirm ? true : false}


        />
      </form>
      <div className='if__account-yes-no text__mont-med-black'><p>Є акаунт?</p></div>
      <Link to='/login'>
        <button className=' __size_box-btn-fld __btn_reg-log' name='go__to-login' id='_login__button'>
          <p className='text__mont-med-black'>Увійти</p>
        </button>
      </Link>
    </div>
  )
}

export default Register_Page
