import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useLocation, Navigate, Link, Outlet } from "react-router-dom";
import './login.css';
import useAuth from "../hooks/useAuth";
import axios from '../../api/axios';

//const USER_REGEX = /^[a-zA-Z0-9-_]{3,15}([\s][a-zA-Z0-9-_]{3,15})?$/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,15}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$#]).{3,23}$/;
const NUMBER_REGEX = /^[+]?(380|[(]380[)]|0)[\s]?[0-9]{9}$/;

const SEND_CODE_URL = '/api/Email/sendcode?email=';

const Register_Page = () => {

  const { setEmailAuth } = useAuth();
  const location = useLocation();

  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUserName] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserNameFocus] = useState(false);

  const [userSurname, setUserSurname] = useState('');
  const [validSurname, setValidSurname] = useState(false);
  const [userSurnameFocus, setUserSurnameFocus] = useState(false);

  const [uemail, setUemail] = useState('');
  const [validUemail, setValidUemail] = useState(false);
  const [uemailFocus, setUemailFocus] = useState(false);

  const [number, setNumber] = useState('');
  const [validNumber, setValidNumber] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [confirm, setConfirm] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [emailVerification, setEmailVerification] = useState(false);


  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(userName);
    console.log(result);
    console.log(userName);
    setValidName(result);
  }, [userName])

  useEffect(() => {
    const result = USER_REGEX.test(userSurname);
    console.log(result);
    console.log(userSurname);
    setValidSurname(result);
  }, [userSurname])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd])

  useEffect(() => {
    const result = NUMBER_REGEX.test(number);
    console.log(result);
    console.log(number);
    setValidNumber(result);
  }, [number])

  useEffect(() => {
    //const result = EMAIL_REGEX.test(uemail);
    //console.log(result);
    console.log(uemail);
    //setValidName(result);
  }, [uemail])

  useEffect(() => {
    setErrMsg('');
  }, [userName, number, userSurname, pwd, uemail])

  useEffect(() => {
    console.log(confirm);
  }, [confirm])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(userName);
    const v2 = USER_REGEX.test(userSurname);
    const v3 = NUMBER_REGEX.test(number);
    const v4 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(SEND_CODE_URL+uemail,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );
      console.log(response?.data);
      console.log(response?.status);
      const status = response?.status;

      setEmailVerification(true);
      setEmailAuth({status, userName, userSurname, number, uemail, pwd });

    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing some data');
      } else {
        setErrMsg('Registration failed');
      }
      errRef.current.focus();
    }

    // localStorage.setItem('emailVer', true);
    // localStorage.setItem('userRegData', JSON.stringify({
    //   firstName: userName,
    //   lastName: userSurname,
    //   phoneNumber: number,
    //   email: uemail,
    //   password: pwd
    // }));
  }

  return (
    <>
      {emailVerification ? (
        <Navigate to="/email-verification" atate={{ from: location }} replace />
      ) : (
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
              onChange={(e) => setUserName(e.target.value)}
              required
              onFocus={() => setUserNameFocus(true)}
              onBlur={() => setUserNameFocus(false)}
            />
            <input
              className='input__text_field-reg __size_box-btn-fld'
              type='text'
              placeholder='Ваше прізвище'

              ref={userRef}
              autoComplete="off"
              aria-invalid={validSurname ? "false" : "true"}
              aria-describedby="uidnote"
              onChange={(e) => setUserSurname(e.target.value)}
              required
              onFocus={() => setUserSurnameFocus(true)}
              onBlur={() => setUserSurnameFocus(false)}
            />
            <input
              className='input__text_field-reg __size_box-btn-fld'
              type='text'
              placeholder='Ваш номер телефону'

              ref={userRef}
              autoComplete="off"
              aria-invalid={validNumber ? "false" : "true"}
              aria-describedby="uidnote"
              onChange={(e) => setNumber(e.target.value)}
              required
              onFocus={() => setNumberFocus(true)}
              onBlur={() => setNumberFocus(false)}
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
              disabled={!validName || !validPwd || !confirm || !validSurname || !validNumber ? true : false}
            />
          </form>
          <div className='if__account-yes-no text__mont-med-black'><p>Є акаунт?</p></div>
          <Link to='/login'>
            <button className=' __size_box-btn-fld __btn_reg-log' name='go__to-login' id='_login__button'>
              <p className='text__mont-med-black'>Увійти</p>
            </button>
          </Link>
        </div>
      )}
    </>
  )
}

export default Register_Page
