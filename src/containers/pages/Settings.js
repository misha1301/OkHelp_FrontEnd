import React from 'react';
import { useEffect } from 'react';
import './settings.css';
import upload from '../../assets/upload.svg';
import userphoto from '../../assets/userphoto.svg';
import useAuth from '../hooks/useAuth';


const Settings = () => {

  const {setUFocus} = useAuth();
  useEffect(() => {
    setUFocus("Налаштування");
  },[])
  


  return (
    <section className='settings__constructor'>
      <div>
        <form className='user__settings-form'>
          <section className='data__editing-section'>
            <section className='main__editing-section'>
              <label><h2>Основні</h2></label>
              <input
                className='input__text_field-reg __size_box-btn-fld'
                type='text'
                placeholder='Ваше імя'

                //ref={userRef}
                autoComplete="off"
              //aria-invalid={validName ? "false" : "true"}
              //aria-describedby="uidnote"
              //onChange={(e) => setUserName(e.target.value)}
              //required
              //onFocus={() => setUserNameFocus(true)}
              //onBlur={() => setUserNameFocus(false)}
              />
              <input
                className='input__text_field-reg __size_box-btn-fld'
                type='text'
                placeholder='Ваше прізвище'

                //ref={userRef}
                autoComplete="off"
              //aria-invalid={validName ? "false" : "true"}
              //aria-describedby="uidnote"
              //onChange={(e) => setUserName(e.target.value)}
              //required
              //onFocus={() => setUserNameFocus(true)}
              //onBlur={() => setUserNameFocus(false)}
              />
              <input
                className='input__text_field-reg __size_box-btn-fld'
                type='text'
                placeholder='Ваш номер мобільного'

                //ref={userRef}
                autoComplete="off"
              //aria-invalid={validName ? "false" : "true"}
              //aria-describedby="uidnote"
              //onChange={(e) => setUserName(e.target.value)}
              //required
              //onFocus={() => setUserNameFocus(true)}
              //onBlur={() => setUserNameFocus(false)}
              />
              <label><h2>Безпека</h2></label>
              <input
                className='input__text_field-reg __size_box-btn-fld'
                type='text'
                placeholder='Старий пароль'

                //ref={userRef}
                autoComplete="off"
              //aria-invalid={validName ? "false" : "true"}
              //aria-describedby="uidnote"
              //onChange={(e) => setUserName(e.target.value)}
              //required
              //onFocus={() => setUserNameFocus(true)}
              //onBlur={() => setUserNameFocus(false)}
              />
              <input
                className='input__text_field-reg __size_box-btn-fld'
                type='text'
                placeholder='Новий пароль'

                //ref={userRef}
                autoComplete="off"
              //aria-invalid={validName ? "false" : "true"}
              //aria-describedby="uidnote"
              //onChange={(e) => setUserName(e.target.value)}
              //required
              //onFocus={() => setUserNameFocus(true)}
              //onBlur={() => setUserNameFocus(false)}
              />
              <input
                className='input__text_field-reg __size_box-btn-fld'
                type='text'
                placeholder='Повторіть новий пароль'

                //ref={userRef}
                autoComplete="off"
              //aria-invalid={validName ? "false" : "true"}
              //aria-describedby="uidnote"
              //onChange={(e) => setUserName(e.target.value)}
              //required
              //onFocus={() => setUserNameFocus(true)}
              //onBlur={() => setUserNameFocus(false)}
              />
            </section>
            <section className='photo__editing-section'>
              <label><h2>Фото</h2></label>
              <div className='photo__editing-box'>
                <div className='user__photo-preview'>
                  <img src={userphoto} />
                </div>
                <section className='upload__photo-drop'>
                  <section className='upload__photo-section'>
                    <img className='upload__icon' src={upload} width='15px' />
                    <p className='upload__description-text'>Завантажити<br />фотографію для<br />профілю</p>
                    <input type='file' className='file__input' />
                  </section>
                  <p>
                      Розмір обкладинки повинен бути не менший 150x150 px і не більший ніж 5 Мб. Формат обкладинки JPG, PNG
                    </p>
                </section>
              </div>
            </section>
          </section>

          <input
            className=' __size_box-btn-fld __btn_reg-log'
            type='submit'
            value='Зберегти'

          />
        </form>
      </div>
    </section>
  )
}

export default Settings;