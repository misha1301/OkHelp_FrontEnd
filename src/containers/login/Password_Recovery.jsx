import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';

const Password_Recovery = () => {
  return (
    <div className='password-recovery__block-container __reg-log_block-container'>
      <Link to='/login'>
        <button className='btn_rec-back' name='_go_back-rec' id='_go_back-rec'>
          <p className='text__mont-med-black'>{"< "}назад</p>
        </button>
      </Link>
      <h2 className='password-recovery__title-text'>Відновити пароль</h2>
      <form className='password-recovery__form-fields'>
        <input className='input__text_field-rec __size_box-btn-fld' type='email' placeholder='Ваш e-mail' />
        <input className=' __size_box-btn-fld __btn_reg-log' type='submit' value='відновити пароль' />
      </form>
    </div>
  )
}

export default Password_Recovery