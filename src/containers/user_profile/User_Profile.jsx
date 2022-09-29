import React from 'react'
import './user_profile.css';
import userphoto from '../../assets/userphoto.svg';
// BEM --> Block Element Modifier

const User_Profile = () => {
  return (
    <div className='userprofile__container'>
     <div className='userprofile__userdata_container'>
        <div className='userprofile__userdata_photo'>
            <img src = {userphoto} alt="userphoto"/>
        </div>
        <div className='userprofile__userdata_text'>
            <div className='userprofile__userdata_name'>
                <p className='user__name'>Misha Oliynyk</p>
            </div>
            <div className='userprofile__userdata_e-mail'>
                <p className='user__e-mail'>380660775646a@gmai.com</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default User_Profile