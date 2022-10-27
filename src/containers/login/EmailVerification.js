import React from 'react'
import './login.css';

import axios from '../../api/axios';
import { useRef, useState, useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const SEND_CODE_URL = '/api/Email/sendcode?email=';
const CONFIRM_CODE_URL = 'api/Email/confirmcode?code=';
const REGISTER_URL = '/register';

const VER_CODE_REGEX = /^[0-9]{6}$/;

const EmailVerification = () => {

    const { emailAuth } = useAuth();

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
            setErrMsg("Invalid Entry");
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

            if(response?.status == 200)
            try {
                const response = await axios.post(REGISTER_URL,
                    JSON.stringify({
                        firstName: emailAuth?.userName,
                        lastName: emailAuth?.userSurname,
                        email: emailAuth?.uemail,
                        phoneNumber: emailAuth?.number,
                        password: emailAuth?.pwd
                    }),
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                    }
                );
                console.log("Registration code request results:");
                console.log(response?.data);
                console.log(response?.status);

            } catch (err) {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 400) {
                    setErrMsg('Such user exists');
                } else {
                    setErrMsg('Registration Failed');
                }
                errRef.current.focus();
            }

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Bad code');
            } else {
                setErrMsg('Failed email verification');
            }
            errRef.current.focus();
        }
    };

    return (
        <section className='password-recovery__block-container __reg-log_block-container'>
            <Link to='/registration'>
                <button className='btn_rec-back' name='_go_back-rec' id='_go_back-rec'>
                    <p className='text__mont-med-black'>{"< назад"}</p>
                </button>
            </Link>
            <h2 className='password-recovery__title-text'>Перевірка email</h2>
            <p aria-live='assertive' >{errMsg}</p>
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
                    className=' __size_box-btn-fld __btn_reg-log'
                    type='submit'
                    value='Підтвердити'
                />
            </form>
        </section>
    )
}
export default EmailVerification