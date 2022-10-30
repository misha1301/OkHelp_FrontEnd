import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { NavLink, useMatch} from 'react-router-dom';
import './user_profile.css';
// BEM --> Block Element Modifier

import userphoto from '../../assets/userphoto.svg';
import useAuth from "../hooks/useAuth"
import useRefreshToken from '../hooks/useRefreshToken';
import UserData from './UserData';
import CustomLink from '../pages/CustomLink';

const ID_LOOK = '__looking_for-radio';
const ID_GIVE = '__give-radio';

const User_Profile = () => {

  const userRef = useRef();
  const errRef = useRef();

  const { uData } = useAuth();
  const getUserData = UserData();

  // useEffect(() => {
  //   getUserData();
  //   console.log("uData is:");

  // }, []);

  console.log(uData);
  const UserName = uData?.firstName;
  const UserSurname = uData?.lastName;
  const UserEmail = uData?.email;
  const Number = uData?.phoneNumber;

  const lookingMatch = useMatch({ path: "/user-profile/looking-for", end: false });
  const giveMatch = useMatch({ path: "/user-profile/give", end: false });

  const [lookingFor, setLookingFor] = useState(true);
  const [giveA, setGiveA] = useState(false);

  
  useEffect(() => {
    setLookingFor(lookingMatch ? true : false);
    setGiveA(giveMatch ? true : false);
  }, [lookingMatch, giveMatch])

  // const handleChange = event => {
  //   setGiveA(event.target.id === ID_GIVE ?
  //     event.target.value : "no");
  //   setLookingFor(event.target.id === ID_LOOK ?
  //     event.target.value : "no");
  //   console.log(lookingFor);
  //   console.log(giveA,);
  // };

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
          <CustomLink to="give">
            <button className='user__btn- --user__btn' name=''>
              <p className='text__mont-med-black'>Пропоную роботу</p>
            </button>
          </CustomLink>
          <CustomLink to="looking-for">
            <button className='user__btn- --user__btn' name=''>
              <p className='text__mont-med-black'>Шукаю роботу</p>
            </button>
          </CustomLink>
        </div>
        <div className='user__line __line'></div>
        <div className='userprofile__dynamic_button-container'>
          {giveA == true && lookingFor == false
            ? (
              <>
                <NavLink to="give/my-purpose">
                  <button className='user__btn- --user__btn' name=''>
                    <p className='text__mont-med-black'>Мої вакансії</p>
                  </button>
                </NavLink>
                <NavLink to="give/submit-aplications">
                  <button className='user__btn- --user__btn' name=''>
                    <p className='text__mont-med-black'>Запити на виконання</p>
                  </button>
                </NavLink>
                <NavLink to="give/applied-purpose">
                  <button className='user__btn- --user__btn' name=''>
                    <p className='text__mont-med-black'>Затверджені вакансії</p>
                  </button>
                </NavLink>
              </>)
            : (
              <>
                <NavLink to="looking-for/my-requests">
                  <button className='user__btn- --user__btn' name=''>
                    <p className='text__mont-med-black'>Подані заявки</p>
                  </button>
                </NavLink>
                <NavLink to="looking-for/saved-offers">
                  <button className='user__btn- --user__btn' name=''>
                    <p className='text__mont-med-black'>Збережені вакансії</p>
                  </button>
                </NavLink>
                <NavLink to="looking-for/applied-requests">
                  <button className='user__btn- --user__btn' name=''>
                    <p className='text__mont-med-black'>Затверджені заявки</p>
                  </button></NavLink>
              </>
            )}
        </div>
        <div className='user__line __line'></div>
        <div className='userprofile__se_button-container'>
          {giveA == true && lookingFor == false
            ? (<NavLink to="give/settings">
              <button className='user__btn-settings --user__btn' name=''>
                <p className='text__mont-med-black'>Налаштування</p>
              </button>
            </NavLink>
            )
            : (
              <NavLink to="looking-for/settings">
                <button className='user__btn-settings --user__btn' name=''>
                  <p className='text__mont-med-black'>Налаштування</p>
                </button>
              </NavLink>
            )}
          <button className='user__btn-exit --user__btn' name=''>
            <p className='text__mont-med-black' >Вийти</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default User_Profile