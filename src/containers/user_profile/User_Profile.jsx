import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './user_profile.css';
import userphoto from '../../assets/userphoto.svg';
// BEM --> Block Element Modifier
import useAuth from "../hooks/useAuth"
import useRefreshToken from '../hooks/useRefreshToken';
import UserData from './UserData';

const ID_LOOK = '__looking_for-radio';
const ID_GIVE = '__give-radio';

const User_Profile = () => {

  const userRef = useRef();
  const errRef = useRef();

  const { uData } = useAuth();
  const getUserData = UserData();
  

  useEffect(() => {
    getUserData();

    console.log("uData is:");
    
  }, []);

  console.log(uData);
  const UserName = uData?.firstName;
  const UserSurname = uData?.lastName;
  const UserEmail = uData?.email;
  const Number = uData?.phoneNumber;

  const [lookingFor, setLookingFor] = useState('yes');
  const [giveA, setGiveA] = useState('no');

  const handleChange = event => {
    setGiveA(event.target.id === ID_GIVE ?
      event.target.value : "no");
    setLookingFor(event.target.id === ID_LOOK ?
      event.target.value : "no");
    console.log(lookingFor);
    console.log(giveA,);
  };

  return (
    <div className='userprofile__container'>
      <div className='userprofile__userdata_container'>
        <div className='userprofile__userdata_photo'>
          <img src={userphoto} alt="userphoto" />
        </div>
        <div className='userprofile__userdata_text'>
          <div className='userprofile__userdata_name'>
            <p className='user__name'>{UserName + " " + UserSurname}</p>
          </div>
          <div className='userprofile__userdata_e-mail'>
            <p className='user__e-mail'>{UserEmail}</p>
          </div>
        </div>
      </div>
      <div className='user__line __line'></div>
      <div className='userprofile__buttons-container' >
        <div className='userprofile__button-selector'>
          <div className='user__btn_label'>
            <input
              type='radio'
              name='user__purpose-selection'
              id='__give-radio'
              onChange={handleChange}
            >
            </input>
            <label
              htmlFor='__give-radio'
              className='user__btn_label-give  --user__btn'>
              <p className='text__mont-med-black'>Пропоную роботу</p>
            </label>
          </div>
          <div className='user__btn_label'>
            <input
              type='radio'
              name='user__purpose-selection'
              id='__looking_for-radio'
              onChange={handleChange}
              checked={lookingFor}
            >
            </input>
            <label
              htmlFor='__looking_for-radio'
              className='user__btn_label-look  --user__btn'>
              <p className='text__mont-med-black'>Шукаю роботу</p>
            </label>
          </div>
        </div>
        <div className='user__line __line'></div>
        <div className='userprofile__dynamic_button-container'>
          {giveA === "on"
            ? (
              <>
                <button className='user__btn- --user__btn' name=''>
                  <p className='text__mont-med-black'>Мої вакансії</p>
                </button>
                <button className='user__btn- --user__btn' name=''>
                  <p className='text__mont-med-black'>Вподобані спеціалісти</p>
                </button>
                <button className='user__btn- --user__btn' name=''>
                  <p className='text__mont-med-black'>Запити на виконання</p>
                </button></>)
            : (
              <>
                <button className='user__btn- --user__btn' name=''>
                  <p className='text__mont-med-black'>Подані заявки</p>
                </button>
                <button className='user__btn- --user__btn' name=''>
                  <p className='text__mont-med-black'>Збережені вакансії</p>
                </button>
                <button className='user__btn- --user__btn' name=''>
                  <p className='text__mont-med-black'>Затверджені</p>
                </button>
              </>
            )}
        </div>
        <div className='user__line __line'></div>
        <div className='userprofile__se_button-container'>
          <button className='user__btn-settings --user__btn' name=''>
            <p className='text__mont-med-black' onClick={useRefreshToken()}>Налаштування</p>
          </button>
          <button className='user__btn-exit --user__btn' name=''>
            <p className='text__mont-med-black' >Вийти</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default User_Profile