import React from 'react'
import './login.css';

import axios from '../../api/axios';
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, Navigate, useLocation } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import { showErrMsg } from '../msgpopup/ShowPopup';

const SEND_CODE_URL = '/api/Email/sendcode?email=';
const CONFIRM_CODE_URL = 'api/Email/confirmcode?code=';
const REGISTER_URL = '/register';

const VER_CODE_REGEX = /^[0-9]{7}$/;

const EmailVerification = () => {

    const { emailAuth, setEmailAuth } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [errMsg, setErrMsg] = useState('');

    const [verCode, setVerCode] = useState('');
    const [validVerCode, setValidVerCode] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, []);

    useEffect(() => {
        const result = VER_CODE_REGEX.test(verCode);
        console.log(result);
        console.log(verCode);
        setValidVerCode(result);
    }, [verCode]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = VER_CODE_REGEX.test(verCode);
        if (!v1) {
            showErrMsg('Ви ввеели некоректні дані');
            return;
        }

        try {
            const response = await axios.post(CONFIRM_CODE_URL + verCode,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );
            console.log("Verification code request results:");
            console.log(response?.data);
            console.log(response?.status);
            //console.log(response.accessToken);

            if (response?.status == 200)
                try {
                    const response = await axios.post(emailAuth.url,
                        emailAuth.data,
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            withCredentials: true
                        }
                    );
                    // console.log("Registration code request results:");
                    // console.log(response?.data);
                    // console.log(response?.status);
                    setEmailAuth({});
                    navigate('/login', {replace: true});

                } catch (err) {
                    if (!err?.response) {
                        showErrMsg('Немає відповіді від сервера');
                    } else if (err.response?.status === 400) {
                        showErrMsg('Такий e-mail вже зареєстрований');
                    } else {
                        showErrMsg('Помилка реєстрації, спробуйте пізніше');
                    }
                    errRef.current.focus();
                }

        } catch (err) {
            if (!err?.response) {
                showErrMsg('Немає відповіді від сервера');
            } else if (err.response?.status === 400) {
                showErrMsg('Введений невірний код');
            } else {
                showErrMsg('Помилка верифікації, спробуйте пізніше');
            }
            setEmailAuth({});
        }
    };

    const goBack =()=>{
        navigate(location.state.from, {replace: true});
    }

    return (
        <section className='password-recovery__block-container __reg-log_block-container'>
            <button onClick={goBack} className='btn_rec-back' name='_go_back-rec' id='_go_back-rec'>
                <p className='text__mont-med-black'>{"< назад"}</p>
            </button>
            <h2 className='password-recovery__title-text __main-tittle-font'>Перевірка email</h2>
            <p aria-live='assertive' className='__errMsg'>{errMsg}</p>
            <form className='password-recovery__form-fields' onSubmit={handleSubmit}>
                <input
                    className='input__text_field-rec __size_box-btn-fld'
                    type='number'
                    placeholder='Введіть код'
                    ref={userRef}
                    autoComplete="off"
                    aria-invalid={validVerCode ? "false" : "true"}
                    aria-describedby="uidnote"
                    onChange={(e) => setVerCode(e.target.value)}
                    required
                />
                <input
                    className=' __size_box-btn-fld __log-reg__button'
                    type='submit'
                    value='Підтвердити'
                />
            </form>
        </section>
    )
}
export default EmailVerification